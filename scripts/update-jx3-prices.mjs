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
 * - 同步 Web、Taro 小程序、minitool 数据并重打小工具 zip
 * - Node 18+，零第三方依赖
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
function opt(name, fallback) {
  const prefix = '--' + name + '=';
  const hit = args.find((a) => a === '--' + name || a.startsWith(prefix));
  if (!hit) return fallback;
  if (hit === '--' + name) return true;
  return hit.slice(prefix.length);
}
const DRY = !!opt('dry-run', false);
const NO_ZIP = !!opt('no-zip', false);
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
   制造：JX3BOX 技艺助手 API · 154 条代表配方
   采集：${data.recipes.filter((r) => r.kind === 'gather').length} 条按材料拆分；产值按掉率折算
   ========================================================================= */
`;
  fs.writeFileSync(path.join(ROOT, 'assets/data.js'), header + 'window.JX3Data = ' + json + ';\n');
  fs.writeFileSync(path.join(ROOT, 'miniapp/src/shared/catalog.json'), json + '\n');
  const mini = JSON.parse(json);
  mini.meta.sources = (mini.meta.sources || []).map((s) => Object.assign({}, s, { url: '' }));
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
    if (map[item.name]) continue;
    try {
      const key = await resolveKey(item.name, map);
      if (key) mapChanges++;
      else console.warn(`[warn] 无法在 JX3BOX 找到物品：${item.name}`);
    } catch (err) {
      console.warn(`[warn] 解析物品失败 ${item.name}：${err.message}`);
    }
  }
  if (mapChanges) saveMap(map);

  const keys = [...new Set(data.items.map((i) => map[i.name]).filter(Boolean))];
  const servers = ONE_SERVER
    ? data.servers.filter((s) => s.name === ONE_SERVER || s.id === ONE_SERVER)
    : data.servers;
  if (!servers.length) throw new Error('没有匹配的服务器：' + ONE_SERVER);

  const existing = data.serverPrices && typeof data.serverPrices === 'object' ? data.serverPrices : {};
  const serverPrices = Object.assign({}, existing);
  const serverCoverage = Object.assign({}, data.meta.serverCoverage || {});
  const primaryId = 's_mengjiangnan';
  let totalAccepted = 0, totalFiltered = 0, totalNoQuote = 0;

  for (const server of servers) {
    console.log(`[${server.name}] 拉取 ${keys.length} 项…`);
    const quotes = await fetchQuotes(keys, server.name);
    const bucket = {};
    let updated = 0, filtered = 0, noQuote = 0;
    for (const item of data.items) {
      const q = quotes[map[item.name]];
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
    serverPrices[server.id] = bucket;
    serverCoverage[server.id] = { updated, total: data.items.length, filtered, noQuote };
    totalAccepted += updated; totalFiltered += filtered; totalNoQuote += noQuote;
    console.log(`[${server.name}] 有效 ${updated}/${data.items.length}，过滤 ${filtered}，无报价 ${noQuote}`);
  }

  data.serverPrices = serverPrices;
  const stampDate = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const priceStamp = `${stampDate.getFullYear()}-${pad(stampDate.getMonth() + 1)}-${pad(stampDate.getDate())}T${pad(stampDate.getHours())}:${pad(stampDate.getMinutes())}:${pad(stampDate.getSeconds())}+08:00`;
  const compactStamp = `${stampDate.getFullYear()}${pad(stampDate.getMonth() + 1)}${pad(stampDate.getDate())}${pad(stampDate.getHours())}${pad(stampDate.getMinutes())}${pad(stampDate.getSeconds())}`;
  const primaryCoverage = serverCoverage[primaryId] || { updated: 0, total: data.items.length, filtered: 0, noQuote: 0 };
  data.meta.priceUpdatedAt = priceStamp;
  data.meta.priceCoverage = { updated: primaryCoverage.updated, total: data.items.length, source: 'JX3BOX 拍卖 · ' + Object.keys(serverCoverage).length + ' 个服务器', filtered: primaryCoverage.filtered, noQuote: primaryCoverage.noQuote };
  data.meta.serverCoverage = serverCoverage;
  data.meta.seedVersion = String(data.meta.seedVersion || 'cs50-v3.3').replace(/-p\d+$/, '') + '-p' + compactStamp;
  data.meta.disclaimer = '制造配方与采集产出名称来自 JX3BOX 当前版本数据；采集按目标材料 + 稀有副产物掉率折算期望产值，稀有掉率为示例。各服务器价格由 scripts/update-jx3-prices.mjs 从 JX3BOX 拍卖自动更新；样本不足、无报价或异常高值回退梦江南示例价，请以本服交易行为准。';

  console.log(`全服合计：有效 ${totalAccepted}，过滤 ${totalFiltered}，无报价 ${totalNoQuote}`);
  if (DRY) { console.log('[dry-run] 未写入文件、未重打 zip。'); return; }
  writeData(data);
  console.log('已写入 assets/data.js、miniapp/src/shared/catalog.json、minitool/assets/data.js');

  if (!NO_ZIP) {
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
