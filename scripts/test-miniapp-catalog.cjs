#!/usr/bin/env node
/**
 * 校验小程序核心目录：结构正确、配方引用可解析、磁盘文件与网页数据一致。
 * 物品/配方数量不做硬编码（会随版本增长），只保底量级防止目录塌缩。
 * 用法：node scripts/test-miniapp-catalog.cjs
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { buildMiniappCatalog, buildMarketCatalog } = require('./lib/miniapp-catalog.cjs');

const ROOT = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(ROOT, 'assets/data.js'), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: 'data.js' });
const web = sandbox.window.JX3Data;
if (!web) throw new Error('未读到 assets/data.js 的 JX3Data');

const catalog = buildMiniappCatalog(web);
const market = buildMarketCatalog(web);
const errors = [];

if (catalog.items.length < 400) errors.push('核心物品过少：' + catalog.items.length);
if (catalog.recipes.length < 250) errors.push('配方过少：' + catalog.recipes.length);
if (catalog.servers.length !== 17) errors.push('服务器应为 17，实际 ' + catalog.servers.length);
if (market.items.length < 400) errors.push('行情目录物品过少：' + market.items.length);
if (!catalog.items.length) errors.push('核心目录为空');
if (market.meta.marketOnly !== true) errors.push('行情目录 meta.marketOnly 应为 true');
if (!/-directory$/.test(market.meta.catalogVersion)) errors.push('行情目录版本应带 -directory：' + market.meta.catalogVersion);
if (catalog.meta.excludedMarketItems !== web.items.length - catalog.items.length) {
  errors.push('行情目录排除数不一致');
}
if (!/-core$/.test(catalog.meta.catalogVersion)) errors.push('catalogVersion 应带 -core：' + catalog.meta.catalogVersion);

const ids = new Set(catalog.items.map((item) => item.id));
const missing = new Set();
catalog.recipes.forEach((recipe) => {
  (recipe.materials || []).forEach((m) => { if (m && m.item && !ids.has(m.item)) missing.add(m.item); });
  (recipe.outputs || []).forEach((o) => { if (o && o.item && !ids.has(o.item)) missing.add(o.item); });
});
if (missing.size) errors.push('配方引用未收录物品：' + Array.from(missing).slice(0, 8).join(', '));

const coreIds = new Set(catalog.items.map((item) => item.id));
const marketIds = new Set(market.items.map((item) => item.id));
market.items.forEach((item) => {
  if (coreIds.has(item.id)) errors.push('行情目录与核心目录重复：' + item.id);
});
Object.keys(market.serverPrices).forEach((sid) => {
  Object.keys(market.serverPrices[sid] || {}).forEach((id) => {
    if (!marketIds.has(id)) errors.push('行情目录 serverPrices 含非目录物品：' + sid + '/' + id);
  });
});

Object.keys(catalog.serverPrices).forEach((sid) => {
  Object.keys(catalog.serverPrices[sid] || {}).forEach((id) => {
    if (!ids.has(id)) errors.push('serverPrices 含非核心物品：' + sid + '/' + id);
  });
});

const onDiskPath = path.join(ROOT, 'miniapp/src/shared/catalog.json');
const onDisk = JSON.parse(fs.readFileSync(onDiskPath, 'utf8'));
if (JSON.stringify(onDisk) !== JSON.stringify(catalog)) {
  errors.push('磁盘上的 catalog.json 与当前网页数据不一致，请运行 npm run sync:catalog');
}
const marketDiskPath = path.join(ROOT, 'miniapp/src/market/data/market-catalog.json');
const marketDisk = JSON.parse(fs.readFileSync(marketDiskPath, 'utf8'));
if (JSON.stringify(marketDisk) !== JSON.stringify(market)) {
  errors.push('磁盘上的 market-catalog.json 与当前网页数据不一致，请运行 npm run sync:catalog');
}

if (errors.length) {
  console.error('✗ 小程序核心目录校验失败：');
  errors.slice(0, 20).forEach((e) => console.error('  - ' + e));
  process.exit(1);
}

const quotes = Object.keys(catalog.serverPrices).reduce((n, sid) => n + Object.keys(catalog.serverPrices[sid]).length, 0);
console.log('✓ 小程序核心目录：' + catalog.items.length + ' 物品 / ' + catalog.recipes.length +
  ' 配方 / ' + quotes + ' 条本服报价 / 排除行情目录 ' + catalog.meta.excludedMarketItems + ' 项');
const marketQuotes = Object.keys(market.serverPrices).reduce((n, sid) => n + Object.keys(market.serverPrices[sid]).length, 0);
console.log('✓ 行情目录分包：' + market.items.length + ' 物品 / ' + marketQuotes + ' 条本服报价');
