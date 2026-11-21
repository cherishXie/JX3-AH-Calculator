#!/usr/bin/env node
/**
 * 剑网三物价助手 · JX3BOX 全服物价自动更新
 *
 * 用法：
 *   node scripts/update-jx3-prices.mjs --dry-run
 *   node scripts/update-jx3-prices.mjs
 *   node scripts/update-jx3-prices.mjs --server 梦江南 --no-zip
 *
 * - 默认更新 data.servers 中全部 17 个服务器
 * - 写入 data.serverPrices[serverId][itemId]
 * - 同步 Web、Taro 小程序核心目录、minitool 数据并重打小工具 zip
 * - Web 行情目录（1116 项）只进网页；小程序只同步 444 个生活技艺物品
 * - --web-only：更新网页 + 小程序核心目录，但跳过小工具重建（价格机器人默认）
 * - Node 18+，零第三方依赖
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { recordPriceSnapshot, shanghaiTimestamp } from './lib/price-history.mjs';
import { buildPriceTrends } from './lib/price-trends.mjs';

const require = createRequire(import.meta.url);
const { buildMiniappCatalog, serializeMiniappCatalog, buildMarketCatalog, serializeMarketCatalog } = require('./lib/miniapp-catalog.cjs');

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
function opt(name, fallback) {
  const prefix = '--' + name + '=';
  const eq = args.find((a) => a.startsWith(prefix));
  if (eq) return eq.slice(prefix.length);
  const idx = args.indexOf('--' + name);
  if (idx < 0) return fallback;
  const next = args[idx + 1];
  if (next && !next.startsWith('--')) return next;
  return true;
}
const DRY = !!opt('dry-run', false);
const NO_ZIP = !!opt('no-zip', false);
const WEB_ONLY = !!opt('web-only', false);
const ONE_SERVER = opt('server', '');
const MIN_SAMPLE = Number(opt('min-sample', 5));
const MAX_RATIO = Number(opt('max-ratio', 8));

function readData() {
  const source = fs.readFileSync(path.join(ROOT, 'assets/data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.JX3Data;
}
function writeData(data) {
  const json = JSON.stringify(data, null, 2);
  const stamp = data.meta.priceUpdatedAt || new Date().toISOString();
  const header = `/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺数据
   数据版本：${data.meta.catalogVersion}（${data.meta.updatedAt}）
   价格修订：${stamp} · JX3BOX 全服拍卖
   配方：${data.recipes.filter((r) => r.kind !== 'gather').length} 条制造 + ${data.recipes.filter((r) => r.kind === 'gather').length} 条采集
   行情：${data.items.length} 个物品 · 分类 ${(data.meta.categories || []).length} 个
   五行石：1-8 级拍卖价 + 快速/最优合成 + 7/8 爆率盈亏线
   ========================================================================= */
`;
  fs.writeFileSync(path.join(ROOT, 'assets/data.js'), header + 'window.JX3Data = ' + json + ';\n');

  // 小程序目录永远跟着网页价格更新，但只装生活技艺物品（444 项）；
  // 672 个网页行情目录物品不进入主包。旧逻辑在 WEB_ONLY 时直接 return，
  // 导致小程序目录和随后由它生成的云端行情长期停在旧版本。
  const miniCore = buildMiniappCatalog(data);
  fs.writeFileSync(path.join(ROOT, 'miniapp/src/shared/catalog.json'), serializeMiniappCatalog(miniCore));

  // 672 项行情目录单独进微信分包，只查价/记价，不参与配方收益。
  const marketCore = buildMarketCatalog(data);
  const marketDir = path.join(ROOT, 'miniapp/src/market/data');
  fs.mkdirSync(marketDir, { recursive: true });
  fs.writeFileSync(path.join(marketDir, 'market-catalog.json'), serializeMarketCatalog(marketCore));
  if (WEB_ONLY) return;

  // 小工具仍展示物品来源/核验，保留 origin/verified；小程序主包版本为了体积不保留。
  const mini = buildMiniappCatalog(data, { keepItemMeta: true });
  mini.meta.sources = (mini.meta.sources || []).map((s) => Object.assign({}, s, { url: '' }));
  if (mini.stoneMeta && Array.isArray(mini.stoneMeta.sources)) {
    mini.stoneMeta.sources = mini.stoneMeta.sources.map((s) => Object.assign({}, s, { url: '' }));
  }
  fs.writeFileSync(path.join(ROOT, 'minitool/assets/data.js'), '/* 小工具离线数据 · 全服自动价格修订 */\nwindow.JX3Data = ' + JSON.stringify(mini, null, 2) + ';\n');
}
function loadMap() {
  const p = path.join(ROOT, 'scripts/jx3-item-map.json');
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return {}; }
}
function saveMap(map) {
  fs.writeFileSync(path.join(ROOT, 'scripts/jx3-item-map.json'), JSON.stringify(map, null, 2) + '\n');
}
async function getJson(url, options) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const signal = typeof AbortSignal !== 'undefined' && AbortSignal.timeout ? AbortSignal.timeout(25000) : undefined;
      const res = await fetch(url, Object.assign({ headers: { 'User-Agent': 'jx3-price-updater/2.0' }, signal }, options || {}));
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (err) {
      if (attempt === 2) throw err;
      await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
    }
  }
}
async function resolveKey(name, map) {
  if (map[name]) return map[name];
  const search = await getJson('https://node.jx3box.com/item/name/' + encodeURIComponent(name));
  const hit = (search.list || []).find((x) => x.Name === name);
  if (!hit) return null;
  for (const type of [5, 7, 6, 4, 15]) {
    const key = type + '_' + hit.ItemID;
    try {
      const detail = await getJson('https://node.jx3box.com/api/node/item/' + key + '?client=std');
      if (detail && detail.data && detail.data.item && detail.data.item.Name === name) {
        map[name] = key;
        return key;
      }
    } catch { /* try next */ }
  }
  return null;
}
async function fetchQuotes(keys, server) {
  const quotes = {};
  let index = 0;
  async function worker() {
    while (true) {
      const start = index;
      index += 35;
      if (start >= keys.length) return;
      const batch = keys.slice(start, start + 35);
      try {
        const data = await getJson('https://next2.jx3box.com/api/auction/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'jx3-price-updater/2.0' },
          body: JSON.stringify({ aggregate_type: 'hourly', item_ids: batch, server })
        });
        if (Array.isArray(data)) {
          data.forEach((x) => {
            if (x && x.item_id && x.price > 0) {
              quotes[x.item_id] = { copper: x.price, sample: Number(x.sample) || 0, t: x.timestamp || 0 };
            }
          });
        }
      } catch (err) {
        console.warn(`[warn] ${server} 价格批次失败：${err.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: 5 }, worker));
  return quotes;
}
async function main() {
  const data = readData();
  const map = loadMap();
  let mapChanges = 0;
  for (const item of data.items) {
    if (!item.gameKey && map[item.name]) item.gameKey = map[item.name];
    if (item.gameKey) continue;
    try {
      const key = await resolveKey(item.name, map);
      if (key) {
        item.gameKey = key;
        mapChanges++;
      } else {
        console.warn(`[warn] 无法在 JX3BOX 找到物品：${item.name}`);
      }
    } catch (err) {
      console.warn(`[warn] 解析物品失败 ${item.name}：${err.message}`);
    }
  }
  if (mapChanges) saveMap(map);

  const keys = [...new Set(data.items.map((i) => i.gameKey || map[i.name]).filter(Boolean))];
  const stoneKeys = (data.stones || []).map((s) => s.itemId).filter(Boolean);
  const servers = ONE_SERVER
    ? data.servers.filter((s) => s.name === ONE_SERVER || s.id === ONE_SERVER)
    : data.servers;
  if (!servers.length) throw new Error('没有匹配的服务器：' + ONE_SERVER);

  const existing = data.serverPrices && typeof data.serverPrices === 'object' ? data.serverPrices : {};
  const existingStone = data.stonePrices && typeof data.stonePrices === 'object' ? data.stonePrices : {};
  const beforeStonePrices = JSON.stringify(existingStone);
  const beforePrices = JSON.stringify(existing);
  const beforeBase = JSON.stringify(data.items.map((i) => [i.id, i.base]));
  const beforeCoverage = JSON.stringify(data.meta.serverCoverage || {});
  const serverPrices = Object.assign({}, existing);
  const serverCoverage = Object.assign({}, data.meta.serverCoverage || {});
  const primaryId = 's_mengjiangnan';
  let totalAccepted = 0, totalFiltered = 0, totalNoQuote = 0;

  for (const server of servers) {
    console.log(`[${server.name}] 拉取 ${keys.length} 项…`);
    const quotes = await fetchQuotes(keys, server.name);
    const stoneQuotes = stoneKeys.length ? await fetchQuotes(stoneKeys, server.name) : {};
    const stoneBucket = {};
    for (const st of (data.stones || [])) {
      const q = stoneQuotes[st.itemId];
      if (!q || !(q.copper > 0)) continue;
      const gold = q.copper / 10000;
      if (gold > 0 && gold < 10000000 && (q.sample || 0) >= 1) {
        stoneBucket[String(st.level)] = Math.round(gold * 100) / 100;
      }
    }
    const bucket = {};
    let updated = 0, filtered = 0, noQuote = 0;
    for (const item of data.items) {
      const q = quotes[item.gameKey || map[item.name]];
      if (!q) { noQuote++; continue; }
      const gold = q.copper / 10000;
      const old = Number(item.base) || 0;
      let accept = q.sample >= MIN_SAMPLE && gold > 0 && gold < 100000;
      if (accept && old > 0 && gold > old * MAX_RATIO) { accept = false; filtered++; }
      if (accept && old === 0 && gold > 1000) { accept = false; filtered++; }
      if (!accept) { noQuote++; continue; }
      bucket[item.id] = Math.round(gold * 100) / 100;
      if (server.id === primaryId) item.base = bucket[item.id];
      if (server.id === primaryId) item.priceSource = 'auction';
      updated++;
    }
    if (updated === 0 && existing[server.id] && Object.keys(existing[server.id]).length) {
      // 接口异常/限频时不要把整服价格清空，保留上一次的有效报价。
      serverPrices[server.id] = existing[server.id];
      serverCoverage[server.id] = (data.meta.serverCoverage && data.meta.serverCoverage[server.id]) || { updated: 0, total: data.items.length, filtered, noQuote };
      console.warn(`[${server.name}] 本次无有效报价，保留上次数据`);
      continue;
    }
    serverPrices[server.id] = bucket;
    if (Object.keys(stoneBucket).length) {
      data.stonePrices = data.stonePrices || {};
      data.stonePrices[server.id] = stoneBucket;
    } else if (existingStone[server.id]) {
      data.stonePrices = data.stonePrices || {};
      data.stonePrices[server.id] = existingStone[server.id];
    }
    serverCoverage[server.id] = { updated, total: data.items.length, filtered, noQuote };
    totalAccepted += updated; totalFiltered += filtered; totalNoQuote += noQuote;
    console.log(`[${server.name}] 有效 ${updated}/${data.items.length}，过滤 ${filtered}，无报价 ${noQuote}`);
  }

  if (totalAccepted === 0) {
    console.error('全部服务器均无有效报价，疑似接口异常，跳过写入与重打 zip。');
    process.exitCode = 1;
    return;
  }

  data.serverPrices = serverPrices;

  const afterBase = JSON.stringify(data.items.map((i) => [i.id, i.base]));
  const priceChanged =
    JSON.stringify(serverPrices) !== beforePrices ||
    afterBase !== beforeBase ||
    JSON.stringify(data.stonePrices || {}) !== beforeStonePrices ||
    JSON.stringify(serverCoverage) !== beforeCoverage;

  console.log(`全服合计：有效 ${totalAccepted}，过滤 ${totalFiltered}，无报价 ${totalNoQuote}`);
  if (DRY) {
    console.log(`[dry-run] 价格变化：${priceChanged ? '有' : '无'}；未写入文件、未重打 zip。`);
    return;
  }
  if (!priceChanged) {
    console.log('价格无变化，跳过写入与重打 zip。');
    if (mapChanges) console.log(`映射更新 ${mapChanges} 项，已写入 scripts/jx3-item-map.json。`);
    return;
  }

  const priceStamp = shanghaiTimestamp();
  const primaryCoverage = serverCoverage[primaryId] || { updated: 0, total: data.items.length, filtered: 0, noQuote: 0 };
  data.meta.priceUpdatedAt = priceStamp;
  data.meta.stonePriceUpdatedAt = priceStamp;
  data.meta.priceCoverage = { updated: primaryCoverage.updated, total: data.items.length, source: 'JX3BOX 拍卖 · ' + Object.keys(serverCoverage).length + ' 个服务器', filtered: primaryCoverage.filtered, noQuote: primaryCoverage.noQuote };
  data.meta.serverCoverage = serverCoverage;
  data.meta.disclaimer = '制造配方与采集产出名称来自 JX3BOX 当前版本数据；采集按目标材料 + 稀有副产物掉率折算期望产值，稀有掉率为示例。各服务器价格由 scripts/update-jx3-prices.mjs 从 JX3BOX 拍卖自动更新；样本不足、无报价或异常高值回退梦江南示例价，请以本服交易行为准。';

  writeData(data);
  console.log(WEB_ONLY
    ? `已写入 assets/data.js + 小程序核心目录 ${miniCore.items.length} 项 + 行情目录 ${marketCore.items.length} 项（Web-only，跳过小工具，${priceStamp}）`
    : `已写入 assets/data.js、小程序核心目录 ${miniCore.items.length} 项、行情目录 ${marketCore.items.length} 项、minitool/assets/data.js（${priceStamp}）`);

  try {
    const history = recordPriceSnapshot({
      root: ROOT,
      data,
      at: priceStamp,
      requestedServerIds: servers.map((server) => server.id),
      serverCoverage,
      source: 'update',
      force: true,
    });
    if (history.created) {
      console.log(`已建立当日物价历史 ${path.relative(ROOT, history.file)}（${priceStamp}）`);
    } else if (history.appended) {
      console.log(`已追加物价历史 ${path.relative(ROOT, history.file)}（${history.changed} 项变化）`);
    } else {
      console.log('物价历史已是最新，未追加快照。');
    }
  } catch (err) {
    console.error(`[error] 写入物价历史失败：${err.stack || err.message}`);
    process.exitCode = 1;
  }

  // 每次行情更新同步把最近 7 天的走势数据预计算好，浏览器只拉增量。
  try {
    const trends = buildPriceTrends(ROOT);
    console.log(
      `已同步物价走势 ${trends.report.days} 天 / ${trends.report.points} 个节点` +
      `（区服趋势 ${Math.round(trends.report.dayBytes / 1024)} KB · 单服走势日均 ${Math.round(trends.report.serverAverageBytes / 1024 * 10) / 10} KB）`
    );
  } catch (err) {
    console.error(`[error] 生成物价走势数据失败：${err.stack || err.message}`);
    process.exitCode = 1;
  }

  if (!WEB_ONLY) {
    // 小工具离线包只带最近 7 天历史；行情更新后同步重建，避免离线路价过期。
    try {
      const historyBuild = spawnSync(process.execPath, ['scripts/build-minitool-history.mjs'], { cwd: ROOT, stdio: 'inherit' });
      if (historyBuild.status !== 0) {
        console.error('[error] 生成小工具离线路价历史失败');
        process.exitCode = 1;
      }
    } catch (err) {
      console.error(`[error] 生成小工具离线路价历史失败：${err.stack || err.message}`);
      process.exitCode = 1;
    }
  }

  if (!WEB_ONLY && !NO_ZIP) {
    const zip = path.join(ROOT, '剑网三物价助手-minitool.zip');
    try { fs.rmSync(zip, { force: true }); } catch {}
    const r = spawnSync('zip', ['-r', '-q', zip, '.', '-x', '*.DS_Store'], { cwd: path.join(ROOT, 'minitool'), stdio: 'inherit' });
    if (r.status !== 0) {
      console.error('zip 打包失败；可加 --no-zip 跳过。');
      process.exitCode = 1;
    } else {
      console.log(`已重打 ${path.basename(zip)}（${Math.round(fs.statSync(zip).size / 1024)} KB）`);
    }
  }
}
main().catch((err) => { console.error('[error]', err.stack || err.message); process.exitCode = 1; });
