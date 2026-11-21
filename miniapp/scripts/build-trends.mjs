#!/usr/bin/env node
/**
 * 把 Web 端的 data/price-history 打包成小程序可离线使用的精简快照。
 *
 * 输出：miniapp/src/shared/trends.json
 * 约束：
 * - 只保留最近 2 天（云端历史保留 7 天），避免主包超过 2MB；
 * - 单文件超过 900KB 时自动减少天数；
 * - 数据只含历史价格，不含用户数据，可随小程序版本发布。
 *
 * 用法：npm run sync:trends（miniapp/ 下）或
 *       node miniapp/scripts/build-trends.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '..', '..');
const sourceDir = path.join(repo, 'data', 'price-history');
const catalogFile = path.join(repo, 'miniapp', 'src', 'shared', 'catalog.json');
const outFile = path.join(repo, 'miniapp', 'src', 'shared', 'trends.json');
const MAX_DAYS = 2;
// 离线兜底只需要能画出一条趋势；云端历史保留完整节点。单日 20 个节点会把
// 主包顶到 1.6MB+，只保留最近 8 个更新点 + 基准点，足够看方向与区间。
const MAX_SAMPLES = 8;
// 主包代码质量预算 1.5MB；云端历史保留 7 天，内置兜底只保留能装下的天数。
const MAX_BYTES = 240 * 1024;

if (!fs.existsSync(path.join(sourceDir, 'index.json'))) {
  throw new Error('缺少 data/price-history/index.json');
}
if (!fs.existsSync(catalogFile)) {
  throw new Error('缺少小程序 catalog.json，请先运行 npm run sync:catalog');
}

const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf8'));
const coreIds = new Set((catalog.items || []).map(function (item) { return item.id; }));
const coreItemCount = coreIds.size;
if (!coreItemCount) throw new Error('小程序 catalog 没有物品');

// Web 历史已扩到 1116 项；小程序主包只装 444 个生活技艺物品。
// 这里按 catalog 过滤，避免把 672 个行情目录物品塞进 trends.json。
function filterBucket(bucket) {
  const out = {};
  Object.keys(bucket || {}).forEach(function (id) {
    if (!coreIds.has(id)) return;
    const n = Number(bucket[id]);
    if (Number.isFinite(n) && n > 0) out[id] = n;
  });
  return out;
}
function filterServerBuckets(buckets) {
  if (!buckets) return buckets;
  const out = {};
  Object.keys(buckets).forEach(function (sid) { out[sid] = filterBucket(buckets[sid]); });
  return out;
}
function filterDay(day) {
  if (!day) return day;
  day.itemCount = coreItemCount;
  day.catalogVersion = (catalog.meta && catalog.meta.catalogVersion) || day.catalogVersion;
  if (day.base) {
    day.base.catalogPrices = filterBucket(day.base.catalogPrices);
    if (day.base.prices) day.base.prices = filterServerBuckets(day.base.prices);
    if (day.base.quotes) day.base.quotes = filterServerBuckets(day.base.quotes);
    // 小程序只读价格/覆盖来源；requested 是抓取日志，coverage 数组按 1116 项统计，
    // 过滤后不再准确，直接去掉，避免主包和误读。
    delete day.base.requested;
    delete day.base.coverage;
  }
  day.samples = (day.samples || []).slice(-MAX_SAMPLES);
  day.samples.forEach(function (sample) {
    if (!sample) return;
    if (sample.catalogPrices) sample.catalogPrices = filterBucket(sample.catalogPrices);
    if (sample.prices) sample.prices = filterServerBuckets(sample.prices);
    if (sample.quotes) sample.quotes = filterServerBuckets(sample.quotes);
    delete sample.requested;
    delete sample.coverage;
  });
  delete day.requested;
  delete day.coverage;
  return day;
}

const index = JSON.parse(fs.readFileSync(path.join(sourceDir, 'index.json'), 'utf8'));
const all = (index.days || []).slice().sort(function (a, b) { return String(a.date).localeCompare(String(b.date)); });
if (!all.length) throw new Error('物价历史为空，先运行一次价格更新');

function loadDays(count) {
  const picked = all.slice(-count);
  return picked.map(function (entry) {
    const file = path.join(sourceDir, entry.file || ('days/' + entry.date + '.json'));
    if (!fs.existsSync(file)) throw new Error('缺少历史文件 ' + file);
    return filterDay(JSON.parse(fs.readFileSync(file, 'utf8')));
  });
}

let count = Math.min(MAX_DAYS, all.length);
let days = loadDays(count);
let payload = null;
let bytes = 0;

while (true) {
  payload = {
    schema: 1,
    generatedAt: index.updatedAt || new Date().toISOString(),
    updatedAt: index.updatedAt,
    catalogVersion: (catalog.meta && catalog.meta.catalogVersion) || index.catalogVersion,
    itemCount: coreItemCount,
    servers: index.servers || [],
    days: days
  };
  bytes = Buffer.byteLength(JSON.stringify(payload));
  if (bytes <= MAX_BYTES || count <= 1) break;
  count -= 1;
  days = loadDays(count);
}

if (bytes > MAX_BYTES) {
  throw new Error('单日历史仍超过 ' + (MAX_BYTES / 1024) + 'KB，请先压缩历史数据');
}

fs.writeFileSync(outFile, JSON.stringify(payload));
const points = days.reduce(function (n, d) { return n + 1 + ((d.samples || []).length); }, 0);
console.log('已生成', path.relative(process.cwd(), outFile));
console.log(days.length + ' 天 / ' + points + ' 个节点 / ' + (bytes / 1024).toFixed(1) + ' KB');
