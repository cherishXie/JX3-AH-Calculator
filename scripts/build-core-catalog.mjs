#!/usr/bin/env node
/**
 * 核心目录扩容（口径 B）
 *
 * 1. 保留现有 154 条制造配方；
 * 2. 补齐当前赛季全部 50 级制造配方；
 * 3. 在 1–50 级中补每个空缺等级一条代表配方；
 * 4. 补齐对应的产物/材料，并写入稳定的 gameKey；
 * 5. 写入 Web / 小程序 / 小工具三份 data。
 *
 * 运行后会再用 scripts/update-jx3-prices.mjs 刷新行情。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = {
  cooking: { skillId: 'pengren', label: '烹饪' },
  tailoring: { skillId: 'fengren', label: '缝纫' },
  medicine: { skillId: 'zhiyao', label: '制药' },
  founding: { skillId: 'duanzao', label: '锻造' },
  furniture: { skillId: 'zijiang', label: '梓匠' },
};
const MAX_ID = 2000;
const ID_BATCH = 20;
const PRIMARY_SERVER = 's_mengjiangnan';
const MIN_SAMPLE = 5;
const MAX_PRICE = 100000;
const DATE = '2026-11-21';

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
async function getJson(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'jx3-core-builder/1.0' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (err) {
      if (attempt === 3) throw err;
      await sleep(300 * (attempt + 1));
    }
  }
}
function loadData() {
  const source = fs.readFileSync(path.join(ROOT, 'assets', 'data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.JX3Data;
}
function clone(value) { return value == null ? value : JSON.parse(JSON.stringify(value)); }
function round2(value) { return Math.round(Number(value) * 100) / 100; }
function clampTier(value) {
  const n = Number(value) || 0;
  return Math.max(1, Math.min(4, n));
}
function itemName(detail) { return detail && detail.Name ? String(detail.Name) : ''; }

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
        if (Array.isArray(arr)) {
          for (const recipe of arr) if (recipe && recipe.ID != null) byId.set(recipe.ID, recipe);
        }
      } catch (err) {
        console.warn(`[warn] ${type} 配方批次失败 ${start}: ${err.message}`);
      }
    }
  });
  await Promise.all(workers);
  return [...byId.values()];
}

function recipePoints(recipe) {
  const mats = [];
  for (let i = 1; i <= 8; i++) {
    const type = recipe['RequireItemType' + i];
    const index = recipe['RequireItemIndex' + i];
    const count = Number(recipe['RequireItemCount' + i]) || 0;
    if (index && count > 0) mats.push({ key: `${type}_${index}`, qty: count });
  }
  const outs = [];
  for (let i = 1; i <= 8; i++) {
    const type = recipe['CreateItemType' + i];
    const index = recipe['CreateItemIndex' + i];
    const min = Number(recipe['CreateItemMin' + i]) || 0;
    if (!index || !min) continue;
    const max = Number(recipe['CreateItemMax' + i]) || min;
    const probability = Number(recipe['CreateItemProbability' + i]);
    outs.push({
      key: `${type}_${index}`,
      qtyMin: min,
      qtyMax: max,
      chance: probability > 0 ? Math.min(1, probability / 1048576) : 1,
    });
  }
  return { mats, outs };
}

async function fetchItemDetails(keys) {
  const details = {};
  const list = [...new Set(keys)].filter(Boolean);
  for (let i = 0; i < list.length; i += 10) {
    const batch = list.slice(i, i + 10);
    const url = 'https://node.jx3box.com/api/node/v2/item?client=std&attributes=id,Name,AucGenre,CanTrade,Quality,Level,Source,TypeLabel&$id=' + encodeURIComponent(batch.join(','));
    try {
      const json = await getJson(url);
      for (const item of (json.data && json.data.rows) || []) details[item.id] = item;
    } catch (err) {
      console.warn(`[warn] 物品详情批次失败 ${i}: ${err.message}`);
    }
  }
  return details;
}

async function main() {
  const data = loadData();
  const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'jx3-item-map.json'), 'utf8'));
  const itemByName = new Map();
  const itemById = new Map();
  for (const item of data.items) {
    itemByName.set(item.name, item);
    itemById.set(item.id, item);
    if (!item.gameKey && map[item.name]) item.gameKey = map[item.name];
  }
  const existingCraft = data.recipes.filter((r) => r.kind !== 'gather');
  const existingNames = new Set(existingCraft.map((r) => r.name));
  const existingLevels = new Set(existingCraft.map((r) => r.level));
  const selected = [];
  const seen = new Set(existingNames);

  const allRaw = [];
  for (const [type, meta] of Object.entries(TYPES)) {
    const raw = await fetchRecipes(type);
    raw.forEach((recipe) => {
      if (!(recipe.RequireLevel >= 1 && recipe.RequireLevel <= 50 && recipe.Exp > 0)) return;
      allRaw.push({ type, skillId: meta.skillId, label: meta.label, recipe });
    });
  }

  // 当前赛季全部 50 级配方
  for (const entry of allRaw.filter((x) => x.recipe.RequireLevel === 50)) {
    if (!entry.recipe.Name || seen.has(entry.recipe.Name)) continue;
    seen.add(entry.recipe.Name);
    selected.push(entry);
  }
  // 每个空缺等级补一条代表配方（优先品质高、经验高）
  const gaps = [];
  for (let level = 1; level < 50; level++) if (!existingLevels.has(level)) gaps.push(level);
  for (const level of gaps) {
    const candidates = allRaw
      .filter((x) => x.recipe.RequireLevel === level)
      .sort((a, b) => (Number(b.recipe.Quality) || 0) - (Number(a.recipe.Quality) || 0) || (Number(b.recipe.Exp) || 0) - (Number(a.recipe.Exp) || 0) || a.recipe.ID - b.recipe.ID);
    const entry = candidates[0];
    if (!entry || !entry.recipe.Name || seen.has(entry.recipe.Name)) continue;
    seen.add(entry.recipe.Name);
    selected.push(entry);
  }
  console.log(`[core] 现有制造配方 ${existingCraft.length}，新增 ${selected.length}，目标 ${existingCraft.length + selected.length}`);

  const allKeys = new Set();
  selected.forEach(({ recipe }) => {
    const { mats, outs } = recipePoints(recipe);
    mats.forEach((m) => allKeys.add(m.key));
    outs.forEach((o) => allKeys.add(o.key));
  });
  const details = await fetchItemDetails(allKeys);
  const keyToItemId = new Map();
  const newItems = [];
  const newItemIds = new Set();

  function ensureItem(key, fallbackName) {
    const detail = details[key] || {};
    const name = itemName(detail) || fallbackName;
    if (!name) throw new Error('物品缺少名称：' + key);
    const mappedNameKey = map[name];
    const existing = itemByName.get(name);
    if (existing && (!existing.gameKey || existing.gameKey === key || mappedNameKey === key)) {
      if (!existing.gameKey) existing.gameKey = key;
      keyToItemId.set(key, existing.id);
      return existing;
    }
    if (keyToItemId.has(key)) return itemById.get(keyToItemId.get(key));
    let id = 'm_x_' + key;
    let suffix = 2;
    while (itemById.has(id)) id = 'm_x_' + key + '_' + suffix++;
    const item = {
      id,
      gameKey: key,
      name,
      skillId: '',
      kind: 'material',
      tier: clampTier(detail.Quality),
      source: '交易行',
      base: 0,
      verified: true,
      origin: 'JX3BOX 当前赛季配方 · ' + DATE,
      custom: false,
    };
    data.items.push(item);
    itemById.set(id, item);
    if (!itemByName.has(name)) itemByName.set(name, item);
    if (!map[name]) map[name] = key;
    keyToItemId.set(key, id);
    newItems.push(item);
    newItemIds.add(id);
    return item;
  }

  // 先建立全部 key → item 映射
  selected.forEach(({ recipe }) => {
    const { mats, outs } = recipePoints(recipe);
    mats.forEach((m) => ensureItem(m.key));
    outs.forEach((o) => ensureItem(o.key));
  });

  const newRecipes = [];
  for (const { type, skillId, label, recipe } of selected) {
    const { mats, outs } = recipePoints(recipe);
    const materials = mats.map((m) => ({ item: keyToItemId.get(m.key), qty: m.qty })).filter((m) => m.item);
    const outputs = outs.map((o) => ({
      item: keyToItemId.get(o.key),
      qty: o.qtyMin,
      qtyMin: o.qtyMin,
      qtyMax: o.qtyMax,
      ...(o.chance < 1 ? { chance: o.chance } : {}),
    })).filter((o) => o.item);
    if (!materials.length || !outputs.length) {
      console.warn(`[warn] 跳过配方 ${recipe.Name}：材料或产物为空`);
      continue;
    }
    for (const out of outputs) {
      const item = itemById.get(out.item);
      if (!item) continue;
      item.kind = 'product';
      if (!item.skillId) item.skillId = skillId;
      item.source = '制造';
      item.tier = clampTier(item.tier || recipe.Quality);
    }
    let id = `m_${type}_${recipe.ID}`;
    let suffix = 2;
    while (data.recipes.some((r) => r.id === id)) id = `m_${type}_${recipe.ID}_${suffix++}`;
    const outputTier = Math.max(1, ...outputs.map((o) => itemById.get(o.item).tier || 1));
    const energy = Number(recipe.CostVigor) || Math.round((Number(recipe.Exp) || 0) / 2) || 1;
    const newRecipe = {
      id,
      kind: 'craft',
      skillId,
      name: recipe.Name,
      level: Number(recipe.RequireLevel) || 1,
      tier: outputTier,
      energy,
      fee: 0,
      outputs,
      materials,
      note: `${label} · ${recipe.RequireLevel}级 · JX3BOX 当前赛季配方`,
      verified: true,
      origin: 'JX3BOX 技艺助手 · ' + DATE,
      custom: false,
    };
    data.recipes.push(newRecipe);
    newRecipes.push(newRecipe);
  }

  // 补新物品的当前行情作为 base（只用于首次种子；随后 updater 会刷新全量）
  const newKeys = newItems.map((item) => item.gameKey).filter(Boolean);
  for (const server of data.servers) {
    for (let i = 0; i < newKeys.length; i += 263) {
      const batch = newKeys.slice(i, i + 263);
      try {
        const response = await fetch('https://next2.jx3box.com/api/auction/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'jx3-core-builder/1.0' },
          body: JSON.stringify({ aggregate_type: 'hourly', item_ids: batch, server: server.name }),
        });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const quotes = await response.json();
        if (!Array.isArray(quotes)) continue;
        data.serverPrices = data.serverPrices || {};
        data.serverPrices[server.id] = data.serverPrices[server.id] || {};
        for (const quote of quotes) {
          if (!quote || !(quote.price > 0)) continue;
          const gold = quote.price / 10000;
          if (!(gold > 0 && gold < MAX_PRICE) || (Number(quote.sample) || 0) < MIN_SAMPLE) continue;
          const item = newItems.find((x) => x.gameKey === quote.item_id);
          if (!item) continue;
          data.serverPrices[server.id][item.id] = round2(gold);
          if (server.id === PRIMARY_SERVER) {
            item.base = round2(gold);
            item.priceSource = 'auction';
          }
        }
      } catch (err) {
        console.warn(`[warn] 新物品行情失败 ${server.name}: ${err.message}`);
      }
    }
  }

  data.meta.catalogVersion = 'v3.7';
  data.meta.seedVersion = 'v3.7-core-b-' + DATE;
  data.meta.updatedAt = DATE;
  data.meta.verifiedAt = DATE;
  data.meta.sources = data.meta.sources || [];
  if (!data.meta.sources.some((s) => s.label === 'JX3BOX · 当前赛季 50 级与等级空缺配方')) {
    data.meta.sources.push({
      label: 'JX3BOX · 当前赛季 50 级与等级空缺配方',
      url: 'https://node.jx3box.com/manufactures',
      note: `${DATE} 扩容：当前赛季 50 级全部制造配方 + 1–50 级空缺等级代表配方`,
    });
  }

  const json = JSON.stringify(data, null, 2);
  const header = `/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺数据
   数据版本：${data.meta.catalogVersion}（${data.meta.updatedAt}）
   价格修订：${data.meta.priceUpdatedAt || ''} · JX3BOX 全服拍卖
   制造：JX3BOX 技艺助手 API · ${data.recipes.filter((r) => r.kind !== 'gather').length} 条制造配方
   采集：${data.recipes.filter((r) => r.kind === 'gather').length} 条按材料拆分；产值按掉率折算
   五行石：1-8 级拍卖价 + 快速/最优合成 + 7/8 爆率盈亏线
   ========================================================================= */
`;
  fs.writeFileSync(path.join(ROOT, 'assets', 'data.js'), header + 'window.JX3Data = ' + json + ';\n');
  fs.writeFileSync(path.join(ROOT, 'miniapp', 'src', 'shared', 'catalog.json'), json + '\n');
  const mini = clone(data);
  mini.meta.sources = (mini.meta.sources || []).map((s) => Object.assign({}, s, { url: '' }));
  if (mini.stoneMeta && Array.isArray(mini.stoneMeta.sources)) {
    mini.stoneMeta.sources = mini.stoneMeta.sources.map((s) => Object.assign({}, s, { url: '' }));
  }
  fs.writeFileSync(path.join(ROOT, 'minitool', 'assets', 'data.js'), '/* 小工具离线数据 · 全服自动价格修订 */\nwindow.JX3Data = ' + JSON.stringify(mini, null, 2) + ';\n');
  fs.writeFileSync(path.join(ROOT, 'scripts', 'jx3-item-map.json'), JSON.stringify(map, null, 2) + '\n');

  console.log(`[core] 完成：物品 ${data.items.length}，制造配方 ${data.recipes.filter((r) => r.kind !== 'gather').length}，新增物品 ${newItems.length}，新增配方 ${newRecipes.length}`);
  console.log(`[core] 新物品有报价 ${newItems.filter((i) => i.base > 0).length} / ${newItems.length}`);
}

main().catch((err) => {
  console.error('[error]', err.stack || err.message);
  process.exitCode = 1;
});
