#!/usr/bin/env node
/**
 * 生成小红书离线小工具内置的最近 7 天物价历史。
 *
 * 输入：data/price-history/index.json + days/YYYY-MM-DD.json
 * 输出：minitool/assets/price-history.js
 *       window.JX3PriceHistory = { index, days }
 *
 * 小工具容器禁止网络请求，所以历史随离线包发布；这里只保留最近 7 个
 * 自然日，与 Web 端走势上限一致，避免包体随历史无限增长。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listPriceHistoryDays, loadPriceHistoryDay, readPriceHistoryIndex } from './lib/price-history.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MAX_DAYS = 7;
const OUT = path.join(ROOT, 'minitool', 'assets', 'price-history.js');

function addDays(date, delta) {
  const ms = Date.parse(date + 'T00:00:00+08:00');
  if (!Number.isFinite(ms)) return date;
  return new Date(ms + delta * 86400000 + 8 * 3600000).toISOString().slice(0, 10);
}

const index = readPriceHistoryIndex(ROOT);
if (!index) throw new Error('缺少 data/price-history/index.json');
const entries = listPriceHistoryDays(ROOT);
const dates = entries.map((entry) => entry.date).filter(Boolean).sort();
if (!dates.length) throw new Error('物价历史为空，先运行一次价格更新或 seed');

const latest = dates[dates.length - 1];
const earliest = addDays(latest, -(MAX_DAYS - 1));
const picked = dates.filter((date) => date >= earliest).slice(-MAX_DAYS);
const byDate = new Map(entries.map((entry) => [entry.date, entry]));
const days = {};
const outEntries = [];
for (const date of picked) {
  const day = loadPriceHistoryDay(ROOT, date);
  if (!day) continue;
  days[date] = day;
  outEntries.push(byDate.get(date) || { date, file: `days/${date}.json` });
}

const payload = {
  index: Object.assign({}, index, {
    maxDays: MAX_DAYS,
    days: outEntries,
  }),
  days,
};
const text = 'window.JX3PriceHistory = ' + JSON.stringify(payload) + ';\n';
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, text);
const bytes = Buffer.byteLength(text);
const points = picked.reduce((sum, date) => sum + 1 + ((days[date] && days[date].samples ? days[date].samples.length : 0)), 0);
console.log(`minitool price-history: ${picked.length} 天 / ${points} 个节点 / ${(bytes / 1024).toFixed(1)} KB`);
