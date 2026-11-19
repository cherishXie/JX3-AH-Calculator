#!/usr/bin/env node
/**
 * 生成云端行情 JSON（只含价格，不含配方/页面）。
 *
 * 输出：miniapp/dist/remote/prices.json
 * 用法：npm run build:prices（在 miniapp/ 下），或在仓库根执行
 *       node miniapp/scripts/build-remote-prices.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const miniapp = path.resolve(here, '..');
const catalogPath = path.join(miniapp, 'src', 'shared', 'catalog.json');
const outDir = path.join(miniapp, 'dist', 'remote');
const outFile = path.join(outDir, 'prices.json');

const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

function cleanServerPrices(raw) {
  const out = {};
  const serverIds = new Set((catalog.servers || []).map(function (s) { return s.id; }));
  const itemIds = new Set((catalog.items || []).map(function (i) { return i.id; }));
  Object.keys(raw || {}).forEach(function (sid) {
    if (!serverIds.has(sid)) return;
    const bucket = {};
    Object.keys(raw[sid] || {}).forEach(function (itemId) {
      if (!itemIds.has(itemId)) return;
      const n = Number(raw[sid][itemId]);
      if (Number.isFinite(n) && n > 0 && n < 1e9) bucket[itemId] = Math.round(n * 10000) / 10000;
    });
    if (Object.keys(bucket).length) out[sid] = bucket;
  });
  return out;
}

function cleanStonePrices(raw) {
  const out = {};
  Object.keys(raw || {}).forEach(function (sid) {
    const bucket = {};
    Object.keys(raw[sid] || {}).forEach(function (level) {
      const lv = Number(level);
      if (!(lv >= 1 && lv <= 8)) return;
      const n = Number(raw[sid][level]);
      if (Number.isFinite(n) && n > 0 && n < 1e9) bucket[String(lv)] = Math.round(n * 10000) / 10000;
    });
    if (Object.keys(bucket).length) out[sid] = bucket;
  });
  return out;
}

const payload = {
  schema: 1,
  catalogVersion: catalog.meta && catalog.meta.catalogVersion,
  seedVersion: catalog.meta && catalog.meta.seedVersion,
  priceUpdatedAt: catalog.meta && catalog.meta.priceUpdatedAt,
  stonePriceUpdatedAt: catalog.meta && catalog.meta.stonePriceUpdatedAt,
  serverPrices: cleanServerPrices(catalog.serverPrices || {}),
  stonePrices: cleanStonePrices(catalog.stonePrices || {})
};

const bytes = Buffer.byteLength(JSON.stringify(payload));
if (bytes > 800 * 1024) {
  throw new Error('云端行情 payload 超过 800KB，请改为按服务器拆分文档');
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(payload));
const servers = Object.keys(payload.serverPrices);
const items = servers.reduce(function (n, sid) { return n + Object.keys(payload.serverPrices[sid]).length; }, 0);
const stones = Object.keys(payload.stonePrices).reduce(function (n, sid) { return n + Object.keys(payload.stonePrices[sid]).length; }, 0);
console.log('已生成', path.relative(process.cwd(), outFile));
console.log('catalog', payload.catalogVersion, payload.priceUpdatedAt);
console.log(servers.length + ' 个服务器 / ' + items + ' 条物品价 / ' + stones + ' 条五行石价 / ' + (bytes / 1024).toFixed(1) + ' KB');
