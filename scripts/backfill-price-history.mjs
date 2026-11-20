#!/usr/bin/env node
/**
 * 一次性补录：把 assets/data.js 的 git 历史版本转成 price-history day 文件。
 *
 *   node scripts/backfill-price-history.mjs
 *   node scripts/backfill-price-history.mjs --dry-run
 *
 * - 保留已有 data/price-history/days/*.json（source=update）的快照；
 * - 从 git log -- assets/data.js 抽取 meta.priceUpdatedAt / serverPrices / items[].base；
 * - 按日重建 base + samples，写入 schemaVersion 2；
 * - 最后重建 index.json。
 *
 * 只做一次，不进入日常价格机器人；日常仍由 update-jx3-prices.mjs 增量写入。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { rebuildPriceHistoryIndex, priceHistoryDayPath } from './lib/price-history.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry-run');

function clone(v) { return v == null ? v : JSON.parse(JSON.stringify(v)); }
function readData() {
  const src = fs.readFileSync(path.join(ROOT, 'assets/data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.JX3Data;
}
function evalData(src) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try { vm.runInContext(src, sandbox); } catch { return null; }
  return sandbox.window.JX3Data || null;
}
function hashCatalog(items) {
  const arr = (items || []).map((i) => [i.id, Number(i.base) || 0]).sort((a, b) => a[0].localeCompare(b[0]));
  return crypto.createHash('sha1').update(JSON.stringify(arr)).digest('hex').slice(0, 12);
}
function applyFlat(target, delta) {
  let changed = 0;
  for (const [k, v] of Object.entries(delta || {})) {
    if (v == null) { if (k in target) { delete target[k]; changed++; } }
    else if (target[k] !== v) { target[k] = Number(v); changed++; }
  }
  return changed;
}
function applyServer(target, delta) {
  let changed = 0;
  for (const [sid, bucket] of Object.entries(delta || {})) {
    if (!target[sid]) target[sid] = {};
    for (const [iid, v] of Object.entries(bucket || {})) {
      if (v == null) { if (iid in target[sid]) { delete target[sid][iid]; changed++; } }
      else if (target[sid][iid] !== Number(v)) { target[sid][iid] = Number(v); changed++; }
    }
    if (!Object.keys(target[sid]).length) delete target[sid];
  }
  return changed;
}
function existingSnapshots(day) {
  const prices = clone(day.base.prices || {});
  const stones = clone(day.base.stones || {});
  const catalog = clone(day.base.catalogPrices || {});
  const stoneCatalog = clone(day.base.stoneCatalogPrices || {});
  let coverage = clone(day.base.coverage || null);
  let requested = clone(day.base.requested || []);
  let version = day.catalogVersion || '';
  const points = [{
    at: day.base.at, source: day.base.source || 'seed', prices: clone(prices),
    stones: clone(stones), catalog: clone(catalog), stoneCatalog: clone(stoneCatalog),
    coverage: clone(coverage), requested: clone(requested), catalogVersion: version,
  }];
  for (const sample of day.samples || []) {
    applyServer(prices, sample.prices);
    applyServer(stones, sample.stones);
    applyFlat(catalog, sample.catalogPrices);
    applyFlat(stoneCatalog, sample.stoneCatalogPrices);
    if (sample.coverage) coverage = clone(sample.coverage);
    if (sample.requested) requested = clone(sample.requested);
    if (sample.catalogVersion) version = sample.catalogVersion;
    points.push({
      at: sample.at, source: sample.source || 'update', prices: clone(prices),
      stones: clone(stones), catalog: clone(catalog), stoneCatalog: clone(stoneCatalog),
      coverage: clone(coverage), requested: clone(requested), catalogVersion: version,
    });
  }
  return points;
}
function computeCoverage(prices, total) {
  const out = {};
  for (const [sid, bucket] of Object.entries(prices || {})) {
    out[sid] = [Object.keys(bucket || {}).length, 0, Math.max(0, total - Object.keys(bucket || {}).length)];
  }
  return out;
}
function gitSnapshots() {
  const commits = execSync('git log --format=%h -- assets/data.js', { cwd: ROOT, encoding: 'utf8' })
    .trim().split('\n').filter(Boolean);
  const byAt = new Map();
  for (const c of commits) {
    let src;
    try { src = execSync(`git show ${c}:assets/data.js`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 24 * 1024 * 1024 }); }
    catch { continue; }
    const d = evalData(src);
    if (!d || !d.meta) continue;
    const at = d.meta.priceUpdatedAt;
    if (!at || !/T\d{2}:\d{2}/.test(at)) continue;
    if (byAt.has(at)) continue;
    const prices = {};
    for (const [sid, bucket] of Object.entries(d.serverPrices || {})) {
      const b = {};
      for (const [iid, v] of Object.entries(bucket || {})) if (Number(v) > 0) b[iid] = Number(v);
      if (Object.keys(b).length) prices[sid] = b;
    }
    const catalog = {};
    for (const it of d.items || []) if (Number(it.base) > 0) catalog[it.id] = Number(it.base);
    byAt.set(at, {
      at, source: 'backfill', prices, catalog, stones: {}, stoneCatalog: {},
      coverage: null, requested: (d.servers || []).map((s) => s.id),
      catalogVersion: d.meta.catalogVersion || '',
    });
  }
  return [...byAt.values()];
}
function buildDay(date, points, totalItems) {
  points.sort((a, b) => a.at.localeCompare(b.at));
  const base = points[0];
  const baseCoverage = base.coverage || computeCoverage(base.prices, totalItems);
  const day = {
    schemaVersion: 2,
    date,
    timezone: 'Asia/Shanghai',
    catalogVersion: base.catalogVersion || '',
    catalogHash: hashCatalog(Object.entries(base.catalog).map(([id, base]) => ({ id, base }))),
    itemCount: totalItems,
    createdAt: base.at,
    updatedAt: points[points.length - 1].at,
    backfilled: points.some((p) => p.source === 'backfill'),
    base: {
      at: base.at,
      requested: base.requested || [],
      source: base.source || 'backfill',
      coverage: baseCoverage,
      catalogPrices: base.catalog,
      stoneCatalogPrices: base.stoneCatalog || {},
      prices: base.prices,
      stones: base.stones || {},
    },
    samples: [],
  };
  let prev = { prices: clone(base.prices), stones: clone(base.stones || {}), catalog: clone(base.catalog), stoneCatalog: clone(base.stoneCatalog || {}), coverage: clone(baseCoverage), version: base.catalogVersion || '' };
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    const prices = {}; const stones = {}; const catalog = {}; const stoneCatalog = {};
    for (const [sid, bucket] of Object.entries(p.prices || {})) {
      const b = {};
      for (const [iid, v] of Object.entries(bucket || {})) {
        if (prev.prices[sid] && prev.prices[sid][iid] === v) continue;
        b[iid] = v;
      }
      if (Object.keys(b).length) prices[sid] = b;
    }
    for (const [sid, bucket] of Object.entries(prev.prices || {})) {
      if (!p.prices[sid]) { prices[sid] = {}; for (const iid of Object.keys(bucket)) prices[sid][iid] = null; continue; }
      for (const iid of Object.keys(bucket)) if (!(iid in p.prices[sid])) { if (!prices[sid]) prices[sid] = {}; prices[sid][iid] = null; }
    }
    for (const [sid, bucket] of Object.entries(p.stones || {})) {
      const b = {};
      for (const [lv, v] of Object.entries(bucket || {})) {
        if (prev.stones[sid] && prev.stones[sid][lv] === v) continue;
        b[lv] = v;
      }
      if (Object.keys(b).length) stones[sid] = b;
    }
    for (const [iid, v] of Object.entries(p.catalog || {})) {
      if (prev.catalog[iid] === v) continue;
      catalog[iid] = v;
    }
    for (const [iid, v] of Object.entries(p.stoneCatalog || {})) {
      if (prev.stoneCatalog[iid] === v) continue;
      stoneCatalog[iid] = v;
    }
    const sample = { at: p.at, requested: p.requested || [], source: p.source || 'backfill' };
    if (p.coverage && JSON.stringify(p.coverage) !== JSON.stringify(prev.coverage)) sample.coverage = p.coverage;
    if (p.catalogVersion && p.catalogVersion !== prev.version) sample.catalogVersion = p.catalogVersion;
    if (Object.keys(prices).length) sample.prices = prices;
    if (Object.keys(stones).length) sample.stones = stones;
    if (Object.keys(catalog).length) sample.catalogPrices = catalog;
    if (Object.keys(stoneCatalog).length) sample.stoneCatalogPrices = stoneCatalog;
    // 保留每个唯一时间点，即使价格未变：与站点 data.js 的 priceUpdatedAt 快照一一对应。
    day.samples.push(sample);
    prev = { prices: clone(p.prices), stones: clone(p.stones || {}), catalog: clone(p.catalog), stoneCatalog: clone(p.stoneCatalog || {}), coverage: clone(p.coverage || prev.coverage), version: p.catalogVersion || prev.version };
  }
  return day;
}

function main() {
  const data = readData();
  const totalItems = (data.items || []).length;
  const byDate = new Map();
  // existing days first (update wins on duplicate at)
  const daysDir = path.join(ROOT, 'data', 'price-history', 'days');
  for (const file of fs.existsSync(daysDir) ? fs.readdirSync(daysDir).filter((f) => f.endsWith('.json')) : []) {
    const day = JSON.parse(fs.readFileSync(path.join(daysDir, file), 'utf8'));
    if (!day || !day.base || !day.date) continue;
    const points = existingSnapshots(day);
    byDate.set(day.date, points);
  }
  for (const snap of gitSnapshots()) {
    const date = snap.at.slice(0, 10);
    const list = byDate.get(date) || [];
    if (!list.some((p) => p.at === snap.at)) list.push(snap);
    byDate.set(date, list);
  }
  for (const [date, points] of [...byDate.entries()].sort()) {
    const day = buildDay(date, points, totalItems);
    const file = priceHistoryDayPath(ROOT, date);
    if (DRY) {
      console.log(`[dry-run] ${date}: ${day.samples.length} samples, ${Object.keys(day.base.prices).length} servers, base ${day.base.at}`);
      continue;
    }
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(day, null, 1) + '\n');
    console.log(`${date}: ${day.samples.length} samples, base ${day.base.at}, last ${day.updatedAt}`);
  }
  if (!DRY) {
    const index = rebuildPriceHistoryIndex(ROOT, data);
    console.log(`index: ${index.days.length} days, ${index.days.reduce((n, d) => n + d.points, 0)} points`);
  }
}
main();
