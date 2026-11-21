#!/usr/bin/env node
/**
 * 行情目录扩容（网页端先行）
 *
 * 在现有 444 个核心物品外，纳入所有「在当前 1–50 级配方图中，且任意服务器
 * 有 ≥1 金报价」的物品（约 672 个）。只写 Web assets/data.js，不动小程序/
 * 小工具包内数据。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATE = '2026-11-21';
const MIN_GOLD = 1;
const MAX_PRICE = 10000000;

const CATEGORY_BY_AUC = {
  1: 'equipment', 2: 'equipment', 3: 'equipment', 4: 'equipment',
  5: 'mount', 6: 'package', 7: 'other', 8: 'other', 9: 'consumable',
  10: 'material', 12: 'other', 13: 'enhance', 15: 'other', 16: 'treasure',
  20: 'other', 21: 'homeland', 22: 'trinket'
};
const CATEGORIES = [
  { id: 'equipment', name: '装备/成品' },
  { id: 'homeland', name: '家园' },
  { id: 'consumable', name: '消耗品' },
  { id: 'enhance', name: '物品强化' },
  { id: 'material', name: '材料' },
  { id: 'package', name: '包裹' },
  { id: 'trinket', name: '挂件/小玩意' },
  { id: 'mount', name: '坐骑' },
  { id: 'treasure', name: '宝箱/钥匙' },
  { id: 'other', name: '其他' }
];

function loadData() {
  const source = fs.readFileSync(path.join(ROOT, 'assets', 'data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.JX3Data;
}
function clone(v) { return v == null ? v : JSON.parse(JSON.stringify(v)); }
function round2(v) { return Math.round(Number(v) * 100) / 100; }
function clampTier(v) { return Math.max(1, Math.min(4, Number(v) || 1)); }
async function getJson(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'jx3-market-builder/1.0' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (err) {
      if (i === 3) throw err;
      await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }
  }
}

const TYPES = ['cooking', 'tailoring', 'medicine', 'founding', 'furniture'];
const MAX_ID = 2000;
const ID_BATCH = 20;
async function fetchRecipes(type) {
  const byId = new Map();
  let cursor = 1;
  const workers = Array.from({ length: 8 }, async () => {
    while (true) {
      const start = cursor;
      cursor += ID_BATCH;
      if (start > MAX_ID) return;
      const ids = [];
      for (let i = start; i < start + ID_BATCH && i <= MAX_ID; i++) ids.push(i);
      try {
        const arr = await getJson(`https://node.jx3box.com/manufactures?type=${type}&ids=${ids.join(',')}&client=std&per=50`);
        if (Array.isArray(arr)) for (const r of arr) if (r && r.ID != null) byId.set(r.ID, r);
      } catch (err) {
        console.warn('[warn] 配方批次失败', type, start, err.message);
      }
    }
  });
  await Promise.all(workers);
  return [...byId.values()];
}

async function details(keys) {
  const out = {};
  const list = [...new Set(keys)].filter(Boolean);
  for (let i = 0; i < list.length; i += 10) {
    const batch = list.slice(i, i + 10);
    try {
      const json = await getJson('https://node.jx3box.com/api/node/v2/item?client=std&attributes=id,Name,AucGenre,CanTrade,Quality,Level,Source,TypeLabel&$id=' + encodeURIComponent(batch.join(',')));
      for (const row of (json.data && json.data.rows) || []) out[row.id] = row;
    } catch (err) {
      console.warn('[warn] 物品详情失败', i, err.message);
    }
  }
  return out;
}
async function quoteUnion(keys) {
  const union = {};
  const servers = ['梦江南','破阵子','蝶恋花','剑胆琴心','幽月轮','龙争虎斗','长安城','斗转星移','乾坤一掷','唯我独尊','绝代天骄','天鹅坪','飞龙在天','九天','眉间雪','山海相逢','傲血戰意'];
  for (const server of servers) {
    for (let i = 0; i < keys.length; i += 263) {
      const batch = keys.slice(i, i + 263);
      try {
        const res = await fetch('https://next2.jx3box.com/api/auction/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'jx3-market-builder/1.0' },
          body: JSON.stringify({ aggregate_type: 'hourly', item_ids: batch, server }),
        });
        const arr = await res.json();
        for (const q of arr) {
          if (!q || !(q.price >= MIN_GOLD * 10000) || q.price >= MAX_PRICE * 10000) continue;
          if (!union[q.item_id] || q.price > union[q.item_id].price) {
            union[q.item_id] = { price: q.price, sample: q.sample || 0, server, at: q.timestamp };
          }
        }
      } catch (err) {
        console.warn('[warn] 行情失败', server, i, err.message);
      }
    }
    console.log('[market]', server, 'done');
  }
  return union;
}

async function main() {
  const data = loadData();
  const itemKey = new Map(data.items.map((i) => [i.id, i.gameKey]));
  const core = new Set(data.items.map((i) => i.gameKey).filter(Boolean));
  const craftOut = new Set();
  const craftMat = new Set();
  for (const r of data.recipes) {
    if (r.kind === 'gather') continue;
    for (const o of r.outputs || []) { const k = itemKey.get(o.item); if (k) craftOut.add(k); }
    for (const m of r.materials || []) { const k = itemKey.get(m.item); if (k) craftMat.add(k); }
  }
  for (const type of TYPES) {
    const raw = await fetchRecipes(type);
    for (const r of raw) {
      if (!(r.RequireLevel >= 1 && r.RequireLevel <= 50 && r.Exp > 0)) continue;
      for (let i = 1; i <= 8; i++) {
        const idx = r['CreateItemIndex' + i];
        if (idx && Number(r['CreateItemMin' + i]) > 0) craftOut.add(`${r['CreateItemType' + i]}_${idx}`);
      }
      for (let i = 1; i <= 8; i++) {
        const idx = r['RequireItemIndex' + i];
        if (idx && Number(r['RequireItemCount' + i]) > 0) craftMat.add(`${r['RequireItemType' + i]}_${idx}`);
      }
    }
    console.log('[market] 配方', type, raw.length);
  }
  const life = new Set([...craftOut, ...craftMat]);
  for (const k of core) life.delete(k);
  const keys = [...life];
  console.log('[market] 候选生活技艺物品', keys.length);
  const union = await quoteUnion(keys);
  const selected = keys.filter((k) => union[k]);
  console.log('[market] 有 ≥1 金报价', selected.length);

  const allKeys = [...new Set([...data.items.map((i) => i.gameKey).filter(Boolean), ...selected])];
  const detailMap = await details(allKeys);
  const newItems = [];
  const existingCategories = new Set();
  for (const item of data.items) {
    const detail = item.gameKey ? detailMap[item.gameKey] : null;
    const category = detail ? (CATEGORY_BY_AUC[detail.AucGenre] || 'other') : 'material';
    item.category = category;
    item.life = true;
    existingCategories.add(category);
  }
  for (const key of selected) {
    const detail = detailMap[key] || {};
    const name = detail.Name;
    if (!name) continue;
    const category = CATEGORY_BY_AUC[detail.AucGenre] || 'other';
    const isProduct = craftOut.has(key);
    const q = union[key];
    const id = 'm_x_' + key;
    if (data.items.some((i) => i.id === id)) continue;
    const item = {
      id,
      gameKey: key,
      name,
      category,
      life: false,
      kind: isProduct ? 'product' : 'material',
      skillId: '',
      tier: clampTier(detail.Quality),
      source: isProduct ? '制造' : '交易行',
      base: round2(q.price / 10000),
      priceSource: 'auction',
      verified: true,
      origin: 'JX3BOX 行情目录 · ' + DATE,
      custom: false,
    };
    data.items.push(item);
    data.serverPrices = data.serverPrices || {};
    const sid = 's_' + (q.server === '梦江南' ? 'mengjiangnan' : q.server === '破阵子' ? 'pozhenzi' : q.server === '蝶恋花' ? 'dielianhua' : q.server === '剑胆琴心' ? 'jiandan' : q.server === '幽月轮' ? 'youyuelun' : q.server === '龙争虎斗' ? 'longzheng' : q.server === '长安城' ? 'changancheng' : q.server === '斗转星移' ? 'douzhuang' : q.server === '乾坤一掷' ? 'qiankun' : q.server === '唯我独尊' ? 'weiwo' : q.server === '绝代天骄' ? 'juedai' : q.server === '天鹅坪' ? 'tianeping' : q.server === '飞龙在天' ? 'feilong' : q.server === '九天' ? 'jiutian' : q.server === '眉间雪' ? 'meijianxue' : q.server === '山海相逢' ? 'shanhai' : 'aoxue');
    data.serverPrices[sid] = data.serverPrices[sid] || {};
    data.serverPrices[sid][item.id] = item.base;
    newItems.push(item);
  }
  data.meta.categories = CATEGORIES;
  data.meta.catalogVersion = 'v3.8-market';
  data.meta.seedVersion = 'v3.8-market-' + DATE;
  data.meta.updatedAt = DATE;
  data.meta.verifiedAt = DATE;
  data.meta.sources = data.meta.sources || [];
  const sourceLabel = 'JX3BOX · 行情目录（家园/消耗品/强化等）';
  if (!data.meta.sources.some((s) => s.label === sourceLabel)) {
    data.meta.sources.push({ label: sourceLabel, url: 'https://node.jx3box.com/item/search', note: `${DATE} 纳入 ${newItems.length} 个有报价的生活技艺相关物品` });
  }
  const json = JSON.stringify(data, null, 2);
  const header = `/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺与行情数据
   数据版本：${data.meta.catalogVersion}（${data.meta.updatedAt}）
   价格修订：${data.meta.priceUpdatedAt || ''} · JX3BOX 全服拍卖
   配方：${data.recipes.filter((r) => r.kind !== 'gather').length} 条制造配方 + ${data.recipes.filter((r) => r.kind === 'gather').length} 条采集
   行情：${data.items.length} 个物品 · 分类 ${CATEGORIES.length} 个
   ========================================================================= */
`;
  fs.writeFileSync(path.join(ROOT, 'assets', 'data.js'), header + 'window.JX3Data = ' + json + ';\n');
  console.log('[market] 完成：物品', data.items.length, '新增', newItems.length, '分类', CATEGORIES.length);
}

main().catch((err) => { console.error(err.stack || err.message); process.exitCode = 1; });
