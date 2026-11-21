#!/usr/bin/env node
/**
 * 预计算走势数据回归测试。
 *   node scripts/test-price-trends.mjs
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  PRICE_TRENDS_MAX_DAYS,
  buildPriceTrends,
  selectPriceTrendDays,
} from './lib/price-trends.mjs';
import { recordPriceSnapshot } from './lib/price-history.mjs';

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'jx3-price-trends-'));

function makeData(stamp, price) {
  return {
    meta: {
      catalogVersion: 'trend-test-v1',
      priceUpdatedAt: stamp,
      serverCoverage: {
        s_a: { updated: 2, total: 2, filtered: 0, noQuote: 0 },
        s_b: { updated: 1, total: 2, filtered: 1, noQuote: 0 }
      }
    },
    servers: [
      { id: 's_a', name: '测试服甲', region: '电信一区' },
      { id: 's_b', name: '测试服乙', region: '双线一区' }
    ],
    items: [
      { id: 'i1', name: '物品一', base: 10 },
      { id: 'i2', name: '物品二', base: 20 }
    ],
    stones: [{ level: 1, itemId: 'stone_1', name: '五行石（一级）', base: 0.8 }],
    serverPrices: {
      s_a: { i1: price, i2: 20 },
      s_b: { i1: price + 1 }
    },
    stonePrices: { s_a: { 1: price / 10 } }
  };
}

function record(stamp, price) {
  return recordPriceSnapshot({
    root,
    data: makeData(stamp, price),
    at: stamp,
    requestedServerIds: ['s_a', 's_b'],
    serverCoverage: makeData(stamp, price).meta.serverCoverage,
    source: 'test',
    force: true
  });
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

try {
  // 10 天历史：前 3 天应在 7 天窗口外被排除。
  const dates = [];
  for (let day = 10; day <= 19; day++) {
    const date = `2026-11-${String(day).padStart(2, '0')}`;
    dates.push(date);
    record(`${date}T09:00:00+08:00`, 10 + day);
  }
  // 同一天追加一个变化点，验证变化增量。
  record('2026-11-19T12:30:00+08:00', 99);

  const first = buildPriceTrends(root);
  assert.equal(first.report.maxDays, PRICE_TRENDS_MAX_DAYS);
  assert.equal(first.report.days, 7, '只保留最近 7 个自然日');
  assert.equal(first.report.droppedDays, 3);
  assert.equal(first.manifest.days.length, 7);
  assert.equal(first.manifest.days[0].date, '2026-11-13');
  assert.equal(first.manifest.days[6].date, '2026-11-19');
  assert.ok(first.report.rawBytes > 0);
  assert.ok(first.report.dayBytes > 0);
  assert.ok(first.report.serverBytes > 0);
  assert.ok(first.report.serverAverageBytes > 0);
  assert.ok(first.report.dayBytes < first.report.rawBytes, '区服趋势数据应小于原始日文件');

  // 两个输出目录都存在，且只包含当前窗口内的日期。
  const trendDir = path.join(root, 'data', 'price-trends');
  const manifest = readJson(path.join(trendDir, 'index.json'));
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.servers.length, 2);
  for (const entry of manifest.days) {
    assert.ok(fs.existsSync(path.join(trendDir, entry.dayFile)), `缺少 ${entry.dayFile}`);
    assert.ok(fs.existsSync(path.join(trendDir, `servers/s_a/${entry.date}.json`)), '缺少单服日文件');
  }
  assert.ok(!fs.existsSync(path.join(trendDir, 'days/2026-11-12.json')), '窗口外日期不应生成');

  // 区服趋势日文件：首点全量，后续只写变化项。
  const dayDoc = readJson(path.join(trendDir, 'days/2026-11-19.json'));
  assert.ok(dayDoc.servers.s_a.length >= 2);
  assert.equal(dayDoc.servers.s_a[0].quotes.i1, 29);
  assert.equal(dayDoc.servers.s_a[0].quotes.i2, 20);
  const lastDayPoint = dayDoc.servers.s_a[dayDoc.servers.s_a.length - 1];
  assert.equal(lastDayPoint.quotes.i1, 99);
  assert.equal(lastDayPoint.quotes.i2, undefined, '未变化的价格不应重复写入');
  assert.equal(lastDayPoint.stones[1], 9.9);

  // 物价走势单服日文件：有效价/本服报价/五行石都只写变化项。
  const serverDoc = readJson(path.join(trendDir, 'servers/s_a/2026-11-19.json'));
  assert.ok(serverDoc.points.length >= 2);
  assert.equal(serverDoc.points[0].prices.i1, 29);
  assert.equal(serverDoc.points[0].prices.i2, 20);
  assert.equal(serverDoc.points[0].stonePrices['1'], 2.9);
  const lastServerPoint = serverDoc.points[serverDoc.points.length - 1];
  assert.equal(lastServerPoint.prices.i1, 99);
  assert.equal(lastServerPoint.prices.i2, undefined);
  assert.equal(lastServerPoint.changed, 4, 'i1 报价/有效价 + 一级五行石报价/有效价');

  // 生成是幂等的：原始数据没变时重跑不写文件。
  const second = buildPriceTrends(root);
  assert.equal(second.written, 0);
  assert.equal(second.removed, 0);

  // 窗口外的旧生成文件会被清理。
  fs.writeFileSync(path.join(trendDir, 'days/2020-01-01.json'), '{}');
  fs.mkdirSync(path.join(trendDir, 'servers/s_a'), { recursive: true });
  fs.writeFileSync(path.join(trendDir, 'servers/s_a/2020-01-01.json'), '{}');
  const third = buildPriceTrends(root);
  assert.equal(third.removed, 2);
  assert.ok(!fs.existsSync(path.join(trendDir, 'days/2020-01-01.json')));
  assert.ok(!fs.existsSync(path.join(trendDir, 'servers/s_a/2020-01-01.json')));

  // maxDays 可以限制到 1～7。
  const selection = selectPriceTrendDays(root, 3);
  assert.equal(selection.days.length, 3);
  assert.equal(selection.days[2].date, '2026-11-19');

  console.log('PASS: price trends precompute, 7-day cap, delta format, idempotent writes and stale cleanup.');
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}
