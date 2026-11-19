/* 全局状态：Taro storage + 订阅式 React hook（微信 / 小红书共用） */
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import {
  DATA, seedState, normalize, priceOf, rowsOf, statsOf, simulate,
  median, avg, filterRows, sortRows, serverSpreads, findServer, findRecipe, findItem,
  clone
} from './shared/engine';
import { num, round } from './shared/format';
import { isDefaultStoneRecipe, sanitizeStoneRecipe } from './shared/stones';

const KEY = 'jx3-ledger-mp-v1';
const DATA_ITEMS = DATA.items;
const DATA_RECIPES = DATA.recipes;
const listeners = new Set();

function read() {
  try {
    const raw = Taro.getStorageSync(KEY);
    if (!raw) return normalize(seedState());
    if (typeof raw === 'string') return normalize(JSON.parse(raw));
    return normalize(raw);
  } catch (e) {
    return normalize(seedState());
  }
}

let state = read();

function persist() {
  try {
    Taro.setStorageSync(KEY, state);
  } catch (e) {
    // 小程序存储空间/权限异常时保持内存态
  }
}

function emit() {
  listeners.forEach(function (fn) {
    try { fn(state); } catch (e) { /* ignore */ }
  });
}

function commit(mutator) {
  const next = clone(state);
  mutator(next);
  state = next;
  persist();
  emit();
  return state;
}

export function getState() {
  return state;
}

export function useStore() {
  const [snap, setSnap] = useState(state);
  useEffect(function () {
    const fn = function (s) { setSnap(s); };
    listeners.add(fn);
    setSnap(state);
    return function () { listeners.delete(fn); };
  }, []);
  return [snap, actions];
}

export const actions = {
  setServer: function (id) {
    if (!findServer(state, id)) return;
    commit(function (s) { s.serverId = id; });
  },

  setSetting: function (key, value) {
    commit(function (s) {
      s.settings = s.settings || {};
      s.settings[key] = value;
    });
  },

  setTaxRate: function (pct) {
    const n = Number(pct);
    if (!Number.isFinite(n) || n < 0 || n > 100) return false;
    commit(function (s) {
      s.settings = s.settings || {};
      s.settings.taxRate = Math.round(n * 100) / 10000;
      s.settings.taxRateVersion = 1;
    });
    return true;
  },

  setPrice: function (itemId, value, serverId) {
    serverId = serverId || state.serverId;
    if (value === '' || value == null) {
      commit(function (s) {
        if (s.prices[serverId]) delete s.prices[serverId][itemId];
      });
      return true;
    }
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0) return false;
    commit(function (s) {
      if (!s.prices[serverId]) s.prices[serverId] = {};
      s.prices[serverId][itemId] = { v: round(n, 2), t: Date.now() };
    });
    return true;
  },

  clearPrice: function (itemId, serverId) {
    serverId = serverId || state.serverId;
    commit(function (s) {
      if (s.prices[serverId]) delete s.prices[serverId][itemId];
    });
  },

  setStonePrice: function (level, value, serverId) {
    serverId = serverId || state.serverId;
    commit(function (s) {
      if (!s.stonePrices[serverId]) s.stonePrices[serverId] = {};
      if (value === '' || value == null) {
        delete s.stonePrices[serverId][String(level)];
        return;
      }
      const n = Number(value);
      if (!Number.isFinite(n) || n < 0) return;
      s.stonePrices[serverId][String(level)] = { v: round(n, 2), t: Date.now() };
    });
    return value === '' || value == null || (Number.isFinite(Number(value)) && Number(value) >= 0);
  },

  setStoneChance: function (recipeId, level, chance) {
    const n = Number(chance);
    if (!Number.isFinite(n) || n < 0 || n > 1) return false;
    commit(function (s) {
      if (!s.stoneChances[recipeId]) s.stoneChances[recipeId] = {};
      s.stoneChances[recipeId][String(level)] = n;
    });
    return true;
  },

  applyMarketPrices: function (payload) {
    if (!payload) return false;
    commit(function (s) {
      s.marketPrices = payload.serverPrices || {};
      s.stoneMarketPrices = payload.stonePrices || {};
      s.marketMeta = {
        schema: payload.schema || 1,
        catalogVersion: payload.catalogVersion || '',
        priceUpdatedAt: payload.priceUpdatedAt || new Date().toISOString(),
        stonePriceUpdatedAt: payload.stonePriceUpdatedAt || payload.priceUpdatedAt || new Date().toISOString(),
        fetchedAt: Date.now()
      };
    });
    return true;
  },

  resetStone: function () {
    commit(function (s) {
      s.stonePrices = {};
      s.stoneChances = {};
    });
    return true;
  },

  saveStoneRecipe: function (input) {
    const recipe = sanitizeStoneRecipe(input);
    let saved = null;
    commit(function (s) {
      if (recipe.id && isDefaultStoneRecipe(recipe.id)) {
        if (!s.stoneRecipeEdits) s.stoneRecipeEdits = {};
        s.stoneRecipeEdits[recipe.id] = Object.assign({}, recipe, { id: recipe.id, custom: false, edited: true });
        if (s.stoneChances) delete s.stoneChances[recipe.id];
        saved = s.stoneRecipeEdits[recipe.id];
        return;
      }
      const id = recipe.id && recipe.id.indexOf('stone_custom_') === 0 ? recipe.id : 'stone_custom_' + Date.now().toString(36);
      const next = Object.assign({}, recipe, { id: id, custom: true, edited: true });
      if (!Array.isArray(s.stoneCustomRecipes)) s.stoneCustomRecipes = [];
      const idx = s.stoneCustomRecipes.findIndex(function (x) { return x.id === id; });
      if (idx >= 0) s.stoneCustomRecipes[idx] = next;
      else s.stoneCustomRecipes.push(next);
      if (s.stoneChances) delete s.stoneChances[id];
      saved = next;
    });
    return saved;
  },

  deleteStoneRecipe: function (id) {
    if (!id || isDefaultStoneRecipe(id)) return false;
    commit(function (s) {
      s.stoneCustomRecipes = (s.stoneCustomRecipes || []).filter(function (r) { return r.id !== id; });
      if (s.stoneChances) delete s.stoneChances[id];
    });
    return true;
  },

  resetStoneRecipe: function (id) {
    if (!id || !isDefaultStoneRecipe(id)) return false;
    commit(function (s) {
      if (s.stoneRecipeEdits) delete s.stoneRecipeEdits[id];
      if (s.stoneChances) delete s.stoneChances[id];
    });
    return true;
  },

  resetAllStoneFormulas: function () {
    commit(function (s) {
      s.stoneRecipeEdits = {};
      s.stoneCustomRecipes = [];
      s.stoneChances = {};
    });
    return true;
  },

  clearServerPrices: function (serverId) {
    serverId = serverId || state.serverId;
    commit(function (s) { delete s.prices[serverId]; });
  },

  addServer: function (name, region) {
    let id = null;
    name = String(name || '').trim();
    if (!name) return null;
    if (state.servers.some(function (s) { return s.name === name; })) return null;
    commit(function (s) {
      id = 's_mp_' + Date.now().toString(36);
      s.servers.push({ id: id, name: name, region: region || '自定义', custom: true });
    });
    return id;
  },

  removeServer: function (id) {
    if (state.servers.length <= 1) return false;
    const sv = findServer(state, id);
    if (!sv) return false;
    commit(function (s) {
      s.servers = s.servers.filter(function (x) { return x.id !== id; });
      delete s.prices[id];
      if (s.stonePrices) delete s.stonePrices[id];
      if (s.marketPrices) delete s.marketPrices[id];
      if (s.stoneMarketPrices) delete s.stoneMarketPrices[id];
      if (s.serverId === id) s.serverId = s.servers[0].id;
    });
    return true;
  },

  createItem: function (data) {
    let id = null;
    commit(function (s) {
      id = 'c_item_' + (s.seq.item++);
      s.items.push({
        id: id,
        name: String(data.name || '').trim(),
        skillId: data.skillId,
        kind: data.kind || 'material',
        tier: num(data.tier) || 1,
        source: data.source || '自定义',
        base: 0,
        origin: '自定义物品 · 请填写本服价格',
        verified: false,
        custom: true
      });
    });
    return id;
  },

  saveRecipe: function (recipe) {
    let saved = null;
    commit(function (s) {
      const idx = recipe.id ? s.recipes.findIndex(function (r) { return r.id === recipe.id; }) : -1;
      if (idx >= 0) {
        const old = s.recipes[idx];
        saved = Object.assign({}, recipe, {
          custom: old.custom,
          verified: false,
          origin: '用户编辑 · 原：' + (old.origin || '示例')
        });
        s.recipes[idx] = saved;
      } else {
        const id = 'c_recipe_' + (s.seq.recipe++);
        saved = Object.assign({}, recipe, {
          id: id,
          custom: true,
          verified: false,
          origin: '自定义配方'
        });
        s.recipes.unshift(saved);
      }
    });
    return saved;
  },

  deleteRecipe: function (id) {
    const r = findRecipe(state, id);
    if (!r || !r.custom) return false;
    commit(function (s) {
      s.recipes = s.recipes.filter(function (x) { return x.id !== id; });
      const used = new Set();
      s.recipes.forEach(function (x) {
        x.outputs.forEach(function (o) { used.add(o.item); });
        (x.materials || []).forEach(function (m) { used.add(m.item); });
      });
      s.items = s.items.filter(function (it) { return !it.custom || used.has(it.id); });
    });
    return true;
  },

  resetRecipe: function (id) {
    const original = DATA_RECIPES.find(function (r) { return r.id === id; });
    if (!original) return false;
    commit(function (s) {
      const idx = s.recipes.findIndex(function (r) { return r.id === id; });
      if (idx >= 0) s.recipes[idx] = clone(original);
    });
    return true;
  },

  resetCatalog: function () {
    commit(function (s) {
      s.items = clone(DATA_ITEMS);
      s.recipes = clone(DATA_RECIPES);
    });
  },

  resetAll: function () {
    state = normalize(seedState());
    persist();
    emit();
  },

  importPrices: function (text, serverId) {
    serverId = serverId || state.serverId;
    const result = { applied: 0, unmatched: [], invalid: [] };
    const nameMap = {};
    state.items.forEach(function (i) { nameMap[i.name] = i.id; });
    const idMap = {};
    state.items.forEach(function (i) { idMap[i.id] = i.id; });
    const updates = {};
    String(text || '').split(/\r?\n/).forEach(function (raw, lineIdx) {
      const line = raw.trim();
      if (!line || (lineIdx === 0 && /物品|价格|name|price/i.test(line))) return;
      const parts = line.split(/[,，\t]+|\s{2,}|[:：]/).map(function (p) { return p.trim(); }).filter(Boolean);
      let name, value;
      if (parts.length >= 2) {
        name = parts[0];
        value = parts[1];
      } else {
        const m = line.match(/^(.+?)[\s]+([0-9]+(?:\.[0-9]+)?)\s*金?$/);
        if (!m) { result.invalid.push(line); return; }
        name = m[1].trim();
        value = m[2];
      }
      const id = nameMap[name] || idMap[name];
      if (!id) { result.unmatched.push(name); return; }
      const n = Number(String(value).replace(/[^\d.-]/g, ''));
      if (!Number.isFinite(n) || n < 0) { result.invalid.push(line); return; }
      updates[id] = round(n, 2);
      result.applied++;
    });
    if (result.applied > 0) {
      commit(function (s) {
        if (!s.prices[serverId]) s.prices[serverId] = {};
        Object.keys(updates).forEach(function (id) {
          s.prices[serverId][id] = { v: updates[id], t: Date.now() };
        });
      });
    }
    return result;
  },

  exportJSON: function () {
    return JSON.stringify({ app: 'JX3-Ledger-Mini', exportedAt: new Date().toISOString(), state: state }, null, 2);
  },

  importJSON: function (text) {
    const parsed = JSON.parse(text);
    const incoming = parsed && parsed.state ? parsed.state : parsed;
    if (!incoming || !Array.isArray(incoming.items) || !Array.isArray(incoming.recipes)) {
      throw new Error('备份格式不正确');
    }
    state = normalize(incoming);
    persist();
    emit();
  }
};

export {
  priceOf, rowsOf, statsOf, simulate, median, avg, filterRows, sortRows,
  serverSpreads, findServer, findRecipe, findItem, num, round
};
