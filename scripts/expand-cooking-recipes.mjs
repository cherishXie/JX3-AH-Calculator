#!/usr/bin/env node
/**
 * 补齐当前 1–50 级烹饪配方（Web-only）。
 * 当前烹饪接口 89 条，现有目录 38 条；补齐后风语 33 条全部可用。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATE = '2026-11-22';
const MAX_ID = 2000;
const ID_BATCH = 20;
const CATEGORY_BY_AUC = {
  5: 'mount', 6: 'package', 9: 'consumable', 10: 'material', 13: 'enhance',
  16: 'treasure', 20: 'other', 21: 'homeland', 22: 'trinket'
};
function loadData() {
  const source = fs.readFileSync(path.join(ROOT, 'assets', 'data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.JX3Data;
}
function clone(v) { return v == null ? v : JSON.parse(JSON.stringify(v)); }
function clampTier(v) { return Math.max(1, Math.min(4, Number(v) || 1)); }
async function getJson(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'jx3-cooking-builder/1.0' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (err) {
      if (i === 3) throw err;
      await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }
  }
}
async function fetchCooking() {
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
        const arr = await getJson(`https://node.jx3box.com/manufactures?type=cooking&ids=${ids.join(',')}&client=std&per=50`);
        if (Array.isArray(arr)) for (const r of arr) if (r && r.ID != null) byId.set(r.ID, r);
      } catch (err) {
        console.warn('[warn] 烹饪配方批次失败', start, err.message);
      }
    }
  });
  await Promise.all(workers);
  return [...byId.values()].filter((r) => r.RequireLevel >= 1 && r.RequireLevel <= 50 && r.Exp > 0);
}
async function details(keys) {
  const out = {};
  const list = [...new Set(keys)].filter(Boolean);
  for (let i = 0; i < list.length; i += 10) {
    const batch = list.slice(i, i + 10);
    try {
      const json = await getJson('https://node.jx3box.com/api/node/v2/item?client=std&attributes=id,Name,AucGenre,Quality,TypeLabel&$id=' + encodeURIComponent(batch.join(',')));
      for (const row of (json.data && json.data.rows) || []) out[row.id] = row;
    } catch (err) {
      console.warn('[warn] 物品详情失败', i, err.message);
    }
  }
  return out;
}
function points(recipe) {
  const mats = [], outs = [];
  for (let i = 1; i <= 8; i++) {
    const idx = recipe['RequireItemIndex' + i], qty = Number(recipe['RequireItemCount' + i]) || 0;
    if (idx && qty > 0) mats.push({ key: `${recipe['RequireItemType' + i]}_${idx}`, qty });
  }
  for (let i = 1; i <= 8; i++) {
    const idx = recipe['CreateItemIndex' + i], min = Number(recipe['CreateItemMin' + i]) || 0;
    if (!idx || !min) continue;
    const max = Number(recipe['CreateItemMax' + i]) || min;
    const p = Number(recipe['CreateItemProbability' + i]);
    outs.push({ key: `${recipe['CreateItemType' + i]}_${idx}`, qtyMin: min, qtyMax: max, chance: p > 0 ? Math.min(1, p / 1048576) : 1 });
  }
  return { mats, outs };
}

async function main() {
  const data = loadData();
  const recipes = await fetchCooking();
  console.log('[cooking] 当前配方', recipes.length);
  const itemById = new Map(data.items.map((i) => [i.id, i]));
  const itemByKey = new Map(data.items.filter((i) => i.gameKey).map((i) => [i.gameKey, i]));
  const itemByName = new Map(data.items.map((i) => [i.name, i]));
  const recipeByName = new Map(data.recipes.filter((r) => r.skillId === 'pengren').map((r) => [r.name, r]));
  const keys = new Set();
  recipes.forEach((r) => { const p = points(r); p.mats.forEach((x) => keys.add(x.key)); p.outs.forEach((x) => keys.add(x.key)); });
  const det = await details(keys);
  const keyToItem = new Map();
  const newItems = [];

  function ensureItem(key) {
    if (keyToItem.has(key)) return itemById.get(keyToItem.get(key));
    const detail = det[key] || {};
    const name = detail.Name;
    if (!name) throw new Error('物品缺少名称：' + key);
    let item = itemByKey.get(key) || itemByName.get(name);
    if (item) {
      if (!item.gameKey) item.gameKey = key;
      item.life = true;
      if (!item.skillId) item.skillId = 'pengren';
      keyToItem.set(key, item.id);
      itemById.set(item.id, item);
      return item;
    }
    let id = 'm_x_' + key;
    let n = 2;
    while (itemById.has(id)) id = 'm_x_' + key + '_' + n++;
    const category = CATEGORY_BY_AUC[detail.AucGenre] || 'material';
    item = {
      id, gameKey: key, name, category,
      life: true,
      kind: 'material',
      skillId: 'pengren',
      tier: clampTier(detail.Quality),
      source: '交易行',
      base: 0,
      verified: true,
      origin: 'JX3BOX 烹饪配方 · ' + DATE,
      custom: false
    };
    data.items.push(item);
    itemById.set(id, item);
    itemByKey.set(key, item);
    if (!itemByName.has(name)) itemByName.set(name, item);
    keyToItem.set(key, id);
    newItems.push(item);
    return item;
  }

  recipes.forEach((r) => { const p = points(r); p.mats.forEach((x) => ensureItem(x.key)); p.outs.forEach((x) => ensureItem(x.key)); });

  let added = 0, updated = 0;
  for (const r of recipes) {
    const p = points(r);
    const materials = p.mats.map((x) => ({ item: keyToItem.get(x.key), qty: x.qty })).filter((x) => x.item);
    const outputs = p.outs.map((x) => ({
      item: keyToItem.get(x.key), qty: x.qtyMin, qtyMin: x.qtyMin, qtyMax: x.qtyMax,
      ...(x.chance < 1 ? { chance: x.chance } : {})
    })).filter((x) => x.item);
    if (!materials.length || !outputs.length) continue;
    for (const o of outputs) {
      const it = itemById.get(o.item);
      if (it) { it.kind = 'product'; it.life = true; it.skillId = 'pengren'; it.category = it.category === 'material' ? 'consumable' : it.category; }
    }
    const tier = Math.max(1, ...outputs.map((o) => (itemById.get(o.item) || {}).tier || 1));
    const energy = Number(r.CostVigor) || Math.round((Number(r.Exp) || 0) / 2) || 1;
    const existing = recipeByName.get(r.Name);
    if (existing) {
      existing.level = Number(r.RequireLevel) || existing.level;
      existing.tier = tier;
      existing.energy = energy;
      existing.outputs = outputs;
      existing.materials = materials;
      existing.note = `烹饪 · ${r.RequireLevel}级 · JX3BOX 当前赛季配方`;
      existing.origin = 'JX3BOX 技艺助手 · ' + DATE;
      existing.verified = true;
      updated++;
    } else {
      const recipe = {
        id: `m_cooking_${r.ID}`,
        kind: 'craft', skillId: 'pengren', name: r.Name,
        level: Number(r.RequireLevel) || 1,
        tier, energy, fee: 0, outputs, materials,
        note: `烹饪 · ${r.RequireLevel}级 · JX3BOX 当前赛季配方`,
        verified: true, origin: 'JX3BOX 技艺助手 · ' + DATE, custom: false
      };
      data.recipes.push(recipe);
      recipeByName.set(r.Name, recipe);
      added++;
    }
  }
  data.meta.catalogVersion = 'v3.9-cooking';
  data.meta.seedVersion = 'v3.9-cooking-' + DATE;
  data.meta.updatedAt = DATE;
  data.meta.verifiedAt = DATE;
  data.meta.sources = data.meta.sources || [];
  const label = 'JX3BOX · 当前赛季烹饪配方';
  if (!data.meta.sources.some((s) => s.label === label)) {
    data.meta.sources.push({ label, url: 'https://node.jx3box.com/manufactures', note: `${DATE} 补齐 1–50 级烹饪 89 条，含风语 33 条` });
  }
  const json = JSON.stringify(data, null, 2);
  const header = `/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺与行情数据
   数据版本：${data.meta.catalogVersion}（${data.meta.updatedAt}）
   价格修订：${data.meta.priceUpdatedAt || ''} · JX3BOX 全服拍卖
   配方：${data.recipes.filter((r) => r.kind !== 'gather').length} 条制造 + ${data.recipes.filter((r) => r.kind === 'gather').length} 条采集
   行情：${data.items.length} 个物品 · 分类 ${(data.meta.categories || []).length} 个
   ========================================================================= */
`;
  fs.writeFileSync(path.join(ROOT, 'assets', 'data.js'), header + 'window.JX3Data = ' + json + ';\n');
  console.log('[cooking] 完成：烹饪', data.recipes.filter((r) => r.skillId === 'pengren').length, '新增配方', added, '更新', updated, '新增物品', newItems.length, '总物品', data.items.length);
}
main().catch((err) => { console.error(err.stack || err.message); process.exitCode = 1; });
