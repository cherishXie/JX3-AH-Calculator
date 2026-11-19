/* =========================================================================
   突破升级 · 1→50 路线计算内核（无 DOM / 无平台 API）
   - 数据：shared/breakthrough.json（scripts/build-breakthrough-data.mjs 生成）
   - 配方经验、精力、材料、产出与各服价格均来自 JX3BOX 当前赛季
   - 30/35/40/45「晋秩」突破材料来自 JX3BOX 攻略 109793
   ========================================================================= */
import raw from './breakthrough.json';
import catalog from './catalog.json';
import { priceOf } from './engine';
import { num, round } from './format';

export const BT = raw;

const ITEMS = raw.items || [];
const RECIPES = raw.recipes || [];
const GATES = raw.gates || {};
const PRICES = raw.prices || {};
const GATHER_EXP = num(raw.meta && raw.meta.gatherExp) || 80;

export const CAP = num(raw.meta && raw.meta.levelCap) || 50;
export const GATE_LEVELS = [30, 35, 40, 45];
export const SKILL_IDS = ['shennong', 'caijin', 'paoding', 'duanzao', 'fengren', 'zhiyao', 'pengren', 'zijiang'];

const CATALOG_BY_NAME = {};
(catalog.items || []).forEach(function (i) { if (!CATALOG_BY_NAME[i.name]) CATALOG_BY_NAME[i.name] = i; });
const CATALOG_BY_ID = {};
(catalog.items || []).forEach(function (i) { CATALOG_BY_ID[i.id] = i; });

const NAME_INDEX = ITEMS.map(function (i) { return i.n; });

// 物品下标 → 生产它的配方
const PRODUCERS = {};
RECIPES.forEach(function (r) {
  (r.o || []).forEach(function (o) {
    const idx = o[0];
    if (!PRODUCERS[idx]) PRODUCERS[idx] = [];
    PRODUCERS[idx].push(r);
  });
});

const RECIPES_BY_SKILL = {};
RECIPES.forEach(function (r) {
  if (!RECIPES_BY_SKILL[r.s]) RECIPES_BY_SKILL[r.s] = [];
  RECIPES_BY_SKILL[r.s].push(r);
});
Object.keys(RECIPES_BY_SKILL).forEach(function (k) {
  RECIPES_BY_SKILL[k].sort(function (a, b) { return a.l - b.l || a.n.localeCompare(b.n, 'zh-CN'); });
});

function producerOf(idx) {
  const list = PRODUCERS[idx] || [];
  if (!list.length) return null;
  let best = list[0];
  for (let i = 1; i < list.length; i++) if (list[i].l < best.l) best = list[i];
  return best;
}

export function itemOf(idx) {
  return ITEMS[idx] || { k: '', n: '未知物品', q: 1 };
}
export function skillName(skillId) {
  const s = (catalog.skills || []).find(function (x) { return x.id === skillId; });
  return s ? s.name : skillId;
}
export function skillMeta(skillId) {
  return (catalog.skills || []).find(function (x) { return x.id === skillId; }) || { id: skillId, name: skillId, type: 'craft', color: '#7ab8ff' };
}

/* ---------------- 价格 ---------------- */
const PRICE_CACHE = new WeakMap();

function priceTable(state, serverId) {
  let byState = PRICE_CACHE.get(state);
  if (!byState) { byState = {}; PRICE_CACHE.set(state, byState); }
  if (byState[serverId]) return byState[serverId];
  const snap = PRICES[serverId] || [];
  const table = ITEMS.map(function (it, idx) {
    const canon = CATALOG_BY_NAME[it.n];
    if (canon) {
      const p = priceOf(state, canon.id, serverId);
      if (p && p.v > 0) {
        return { v: p.v, src: p.user ? 'user' : (p.market ? 'market' : 'seed') };
      }
    }
    const v = snap[idx];
    if (v != null && v > 0) return { v: v, src: 'market' };
    return { v: 0, src: 'missing' };
  });
  byState[serverId] = table;
  return table;
}

export function priceOfIndex(state, idx, serverId) {
  return priceTable(state, serverId || state.serverId)[idx] || { v: 0, src: 'missing' };
}

/* 单位成本：市场价 / 自制品最低成本（basis=min 时取两者更低的） */
const COST_CACHE = new WeakMap();

function unitCostTable(state, serverId, basis) {
  let byState = COST_CACHE.get(state);
  if (!byState) { byState = {}; COST_CACHE.set(state, byState); }
  const key = serverId + '|' + basis;
  if (byState[key]) return byState[key];
  const prices = priceTable(state, serverId);
  const memo = new Array(ITEMS.length).fill(null);

  function cost(idx, stack) {
    if (memo[idx] != null) return memo[idx];
    const market = prices[idx] ? prices[idx].v : 0;
    const base = { v: market, market: market, src: 'market', recipe: null, missing: !(market > 0) };
    if (basis !== 'min') { memo[idx] = base; return base; }
    if (stack.indexOf(idx) !== -1) { memo[idx] = base; return base; }
    const list = PRODUCERS[idx] || [];
    if (!list.length) { memo[idx] = base; return base; }
    const nextStack = stack.concat(idx);
    let best = null;
    for (let n = 0; n < list.length; n++) {
      const r = list[n];
      const outQty = (r.o || []).reduce(function (s, o) { return s + (o[0] === idx ? (o[1] + o[2]) / 2 * (o[3] == null ? 1 : o[3]) : 0); }, 0);
      if (!(outQty > 0)) continue;
      let matCost = 0;
      let miss = false;
      for (let m = 0; m < (r.m || []).length; m++) {
        const c = cost(r.m[m][0], nextStack);
        if (c.missing) { miss = true; break; }
        matCost += c.v * r.m[m][1];
      }
      if (miss) continue;
      const unit = matCost / outQty;
      if (!best || unit < best.v) {
        best = { v: unit, market: market, src: 'craft', recipe: r, missing: false };
      }
    }
    let out = base;
    if (best && (market <= 0 || best.v < market - 1e-9)) out = best;
    memo[idx] = out;
    return out;
  }

  ITEMS.forEach(function (_, idx) { cost(idx, []); });
  byState[key] = memo;
  return memo;
}

export function unitCostIndex(state, idx, serverId, basis) {
  const table = unitCostTable(state, serverId || state.serverId, basis || (state.settings && state.settings.basis) || 'market');
  return table[idx] || { v: 0, src: 'market', missing: true };
}

/* 配方单次经济性 */
export function recipeEcon(state, recipe, serverId, basis) {
  const taxRate = Math.max(0, Math.min(1, Number(state.settings && state.settings.taxRate)));
  let matCost = 0;
  let missing = 0;
  const mats = (recipe.m || []).map(function (m) {
    const c = unitCostIndex(state, m[0], serverId, basis);
    matCost += c.v * m[1];
    if (c.missing) missing++;
    return { idx: m[0], qty: m[1], unit: c.v, sub: c.v * m[1], src: c.src, missing: c.missing };
  });
  let gross = 0;
  let outMissing = 0;
  const outs = (recipe.o || []).map(function (o) {
    const p = priceOfIndex(state, o[0], serverId);
    const chance = o[3] == null ? 1 : Math.max(0, Math.min(1, o[3]));
    const expQty = ((o[1] + o[2]) / 2) * chance;
    gross += p.v * expQty;
    if (!(p.v > 0)) outMissing++;
    return { idx: o[0], min: o[1], max: o[2], chance: chance, qty: expQty, unit: p.v, sub: p.v * expQty, missing: !(p.v > 0) };
  });
  const tax = gross * taxRate;
  const netValue = gross - tax;
  const energy = num(recipe.e);
  const exp = num(recipe.x);
  // 收益口径：产出税后价值 − 材料成本，正数为赚、负数为亏
  const profit = netValue - matCost;
  return {
    mats: mats, outs: outs, matCost: matCost, gross: gross, tax: tax, netValue: netValue,
    profit: profit, exp: exp, energy: energy, missing: missing > 0,
    outMissing: outMissing,
    profitPerExp: exp > 0 ? profit / exp : null,
    valuePerExp: exp > 0 ? netValue / exp : null,
    energyPerExp: exp > 0 ? energy / exp : null,
    perEnergy: energy > 0 ? profit / energy : null
  };
}

/* 每级所需经验（估算） */
export function expToNext(level) {
  const m = raw.meta && raw.meta.expModel ? raw.meta.expModel : { base: 500, step: 25 };
  return Math.max(1, Math.round(num(m.base) + num(m.step) * (level - 1)));
}
export function totalExpTo(level) {
  let sum = 0;
  for (let l = 1; l < level; l++) sum += expToNext(l);
  return sum;
}

/* ---------------- 制造技艺路线 ---------------- */
const STRATEGY_LABEL = {
  gold: '金最优',
  energy: '精力最优',
  effort: '省心（次数最少）'
};
export function strategyLabel(k) { return STRATEGY_LABEL[k] || '金最优'; }

function energyCostOf(econ, need) {
  if (!econ || !(econ.exp > 0)) return Infinity;
  return Math.ceil(need / econ.exp) * econ.energy;
}

function scoreCraft(econ, strategy, need) {
  if (!econ || econ.profitPerExp == null) return Infinity;
  if (strategy === 'effort') return -econ.exp;
  if (strategy === 'energy') return energyCostOf(econ, need);
  return -econ.profitPerExp;
}

export function craftRoute(state, skillId, strategy, serverId) {
  const server = serverId || state.serverId;
  const basis = (state.settings && state.settings.basis) || 'market';
  const pool = RECIPES_BY_SKILL[skillId] || [];
  const econCache = new Map();
  function econOf(r) {
    if (!econCache.has(r.i)) econCache.set(r.i, recipeEcon(state, r, server, basis));
    return econCache.get(r.i);
  }

  const levels = [];
  for (let L = 1; L < CAP; L++) {
    const need = expToNext(L);
    const avail = pool.filter(function (r) { return r.l <= L; });
    let pick = null;
    let pickEcon = null;
    for (let i = 0; i < avail.length; i++) {
      const r = avail[i];
      const e = econOf(r);
      if (e.missing) continue;
      if (pick == null) { pick = r; pickEcon = e; continue; }
      const s = scoreCraft(e, strategy, need);
      const bs = scoreCraft(pickEcon, strategy, need);
      if (s < bs - 1e-9) { pick = r; pickEcon = e; }
      else if (Math.abs(s - bs) <= 1e-9 && e.profitPerExp > pickEcon.profitPerExp) { pick = r; pickEcon = e; }
    }
    levels.push({
      level: L, need: need,
      recipe: pick, econ: pickEcon,
      count: pick && pickEcon ? Math.ceil(need / pickEcon.exp) : 0
    });
  }

  const bands = [];
  levels.forEach(function (row) {
    const prev = bands[bands.length - 1];
    const gateAfterPrev = prev && GATE_LEVELS.indexOf(prev.to - 1) !== -1;
    if (prev && prev.recipe === row.recipe && !gateAfterPrev) {
      prev.to = row.level + 1;
      prev.need += row.need;
      prev.count += row.count;
      return;
    }
    bands.push({
      from: row.level, to: row.level + 1, need: row.need, count: row.count,
      recipe: row.recipe, econ: row.econ
    });
  });

  const routes = bands.map(function (b) {
    const econ = b.econ;
    return {
      kind: 'level',
      from: b.from, to: b.to, name: b.recipe ? b.recipe.n : '无可用配方',
      level: b.recipe ? b.recipe.l : null,
      exp: b.recipe ? b.recipe.x : 0,
      energy: b.recipe ? b.recipe.e : 0,
      count: b.count,
      need: b.need,
      matCost: econ ? econ.matCost * b.count : 0,
      outValue: econ ? econ.netValue * b.count : 0,
      profit: econ ? econ.profit * b.count : 0,
      totalEnergy: econ ? econ.energy * b.count : 0,
      recipe: b.recipe,
      econ: econ
    };
  });

  // 插入突破节点
  const gates = (GATES[skillId] || []).map(function (g) { return gateInfo(state, skillId, g, server, basis); });
  const all = [];
  routes.forEach(function (row) {
    all.push(row);
    const g = gates.find(function (x) { return x.level === row.to - 1; });
    if (g) all.push(Object.assign({ kind: 'gate' }, g));
  });
  const last = routes[routes.length - 1];
  if (last) {
    gates.forEach(function (g) {
      if (!all.some(function (x) { return x.kind === 'gate' && x.level === g.level; })) {
        all.push(Object.assign({ kind: 'gate' }, g));
      }
    });
  }

  const totals = {
    exp: levels.reduce(function (s, r) { return s + r.need; }, 0),
    energy: 0, matCost: 0, outValue: 0, profit: 0,
    crafts: 0, gateCost: 0, gateMarket: 0,
    missingLevels: levels.filter(function (r) { return !r.recipe; }).length
  };
  routes.forEach(function (r) {
    totals.energy += r.totalEnergy;
    totals.matCost += r.matCost;
    totals.outValue += r.outValue;
    totals.profit += r.profit;
    totals.crafts += r.count;
  });
  gates.forEach(function (g) { totals.gateCost += g.cost; totals.gateMarket += g.marketCost; });
  totals.total = totals.profit - totals.gateCost;
  return {
    kind: 'craft', skillId: skillId, strategy: strategy,
    routes: all, gates: gates, totals: totals,
    enough: !totals.missingLevels
  };
}

export function gateInfo(state, skillId, gate, serverId, basis) {
  const items = (gate.r || []).map(function (g) {
    const idx = g[0];
    const qty = g[1];
    const market = priceOfIndex(state, idx, serverId);
    const craftMin = unitCostIndex(state, idx, serverId, 'min');
    const craft = unitCostIndex(state, idx, serverId, basis);
    const useCraft = basis === 'min' && craft.src === 'craft' && craft.v > 0 && (market.v <= 0 || craft.v < market.v);
    const unit = useCraft ? craft.v : market.v;
    return {
      idx: idx, name: itemOf(idx).n, qty: qty,
      unit: unit, market: market.v, craft: craftMin.src === 'craft' ? craftMin.v : null,
      recipe: craftMin.recipe || producerOf(idx), src: useCraft ? 'craft' : market.src,
      sub: unit * qty, missing: !(unit > 0)
    };
  });
  const cost = items.reduce(function (s, i) { return s + (i.missing ? 0 : i.sub); }, 0);
  const marketCost = items.reduce(function (s, i) { return s + (i.market > 0 ? i.market * i.qty : 0); }, 0);
  return {
    level: gate.l, name: gate.n, items: items, cost: cost, marketCost: marketCost,
    missing: items.some(function (i) { return i.missing; })
  };
}

/* ---------------- 采集技艺路线 ---------------- */
export function gatherRoute(state, skillId, strategy, serverId) {
  const server = serverId || state.serverId;
  const basis = (state.settings && state.settings.basis) || 'market';
  const taxRate = Math.max(0, Math.min(1, Number(state.settings && state.settings.taxRate)));
  const nodes = (catalog.recipes || []).filter(function (r) { return r.kind === 'gather' && r.skillId === skillId; });
  const econCache = new Map();
  function econOf(r) {
    if (econCache.has(r.id)) return econCache.get(r.id);
    let value = 0;
    (r.outputs || []).forEach(function (o) {
      const p = priceOf(state, o.item, server);
      const chance = o.chance == null ? 1 : Number(o.chance);
      value += p.v * o.qty * chance;
    });
    value = value * (1 - taxRate);
    const e = {
      exp: GATHER_EXP, energy: num(r.energy), value: value,
      profit: value, profitPerExp: value / GATHER_EXP, valuePerEnergy: value / (num(r.energy) || 1),
      energyPerExp: num(r.energy) / GATHER_EXP
    };
    econCache.set(r.id, e);
    return e;
  }

  const lowest = nodes.slice().sort(function (a, b) { return num(a.level) - num(b.level); })[0] || null;
  const levels = [];
  for (let L = 1; L < CAP; L++) {
    const need = expToNext(L);
    let avail = nodes.filter(function (r) { return num(r.level) <= L; });
    let estimated = false;
    if (!avail.length && lowest) { avail = [lowest]; estimated = true; }
    let pick = null;
    let pickEcon = null;
    avail.forEach(function (r) {
      const e = econOf(r);
      if (!pick) { pick = r; pickEcon = e; return; }
      let better = false;
      if (strategy === 'energy') better = e.energyPerExp < pickEcon.energyPerExp - 1e-9;
      else if (strategy === 'effort') better = e.exp > pickEcon.exp;
      else better = e.valuePerEnergy > pickEcon.valuePerEnergy + 1e-9;
      if (better) { pick = r; pickEcon = e; }
    });
    levels.push({ level: L, need: need, node: pick, econ: pickEcon, estimated: estimated, count: pickEcon ? Math.ceil(need / GATHER_EXP) : 0 });
  }

  const bands = [];
  levels.forEach(function (row) {
    const prev = bands[bands.length - 1];
    const gateAfterPrev = prev && GATE_LEVELS.indexOf(prev.to - 1) !== -1;
    if (prev && prev.node === row.node && prev.estimated === row.estimated && !gateAfterPrev) {
      prev.to = row.level + 1; prev.need += row.need; prev.count += row.count;
      return;
    }
    bands.push({ from: row.level, to: row.level + 1, need: row.need, count: row.count, node: row.node, econ: row.econ, estimated: row.estimated });
  });

  const routes = bands.map(function (b) {
    const e = b.econ;
    return {
      kind: 'level', from: b.from, to: b.to,
      name: b.node ? b.node.name : '无可用采集点',
      level: b.node ? b.node.level : null,
      exp: e ? e.exp : 0,
      energy: b.node ? b.node.energy : 0,
      count: b.count,
      need: b.need,
      matCost: 0,
      outValue: e ? e.value * b.count : 0,
      profit: e ? e.value * b.count : 0,
      totalEnergy: b.node ? num(b.node.energy) * b.count : 0,
      recipe: b.node,
      econ: e,
      estimated: !!b.estimated
    };
  });

  const gates = (GATES[skillId] || []).map(function (g) { return gateInfo(state, skillId, g, server, basis); });
  const all = [];
  routes.forEach(function (row) {
    all.push(row);
    const g = gates.find(function (x) { return x.level === row.to - 1; });
    if (g) all.push(Object.assign({ kind: 'gate' }, g));
  });
  gates.forEach(function (g) {
    if (!all.some(function (x) { return x.kind === 'gate' && x.level === g.level; })) all.push(Object.assign({ kind: 'gate' }, g));
  });

  const totals = {
    exp: levels.reduce(function (s, r) { return s + r.need; }, 0),
    energy: 0, matCost: 0, outValue: 0, profit: 0, crafts: 0,
    gateCost: 0, gateMarket: 0,
    missingLevels: levels.filter(function (r) { return !r.node; }).length
  };
  routes.forEach(function (r) {
    totals.energy += r.totalEnergy;
    totals.outValue += r.outValue;
    totals.profit += r.profit;
    totals.crafts += r.count;
  });
  gates.forEach(function (g) { totals.gateCost += g.cost; totals.gateMarket += g.marketCost; });
  totals.total = totals.profit - totals.gateCost;
  return { kind: 'gather', skillId: skillId, strategy: strategy, routes: all, gates: gates, totals: totals, enough: !totals.missingLevels };
}

function phaseSummary(routes, gates) {
  const mk = function (from, to) {
    return { from: from, to: to, exp: 0, energy: 0, crafts: 0, outValue: 0, profit: 0, gateCost: 0, total: 0 };
  };
  const p1 = mk(1, 30);
  const p2 = mk(30, 50);
  (routes || []).forEach(function (r) {
    const p = r.from < 30 ? p1 : p2;
    p.exp += r.need || 0;
    p.energy += r.totalEnergy || 0;
    p.crafts += r.count || 0;
    p.outValue += r.outValue || 0;
    p.profit += r.profit || 0;
  });
  (gates || []).forEach(function (g) {
    const p = g.level <= 30 ? p1 : p2;
    p.gateCost += g.cost || 0;
  });
  [p1, p2].forEach(function (p) { p.total = p.profit - p.gateCost; });
  return [p1, p2];
}

export function analyze(state, skillId, strategy, serverId) {
  const meta = skillMeta(skillId);
  const result = meta.type === 'gather'
    ? gatherRoute(state, skillId, strategy, serverId)
    : craftRoute(state, skillId, strategy, serverId);
  result.phases = phaseSummary(result.routes, result.gates);
  return Object.assign({ meta: meta }, result);
}

/* 全技艺横评：默认策略下 1→50 的总投入 */
export function allSkillsSummary(state, strategy, serverId) {
  return SKILL_IDS.map(function (id) {
    const r = analyze(state, id, strategy, serverId);
    const t = r.totals;
    const days = state.settings && state.settings.energyBudget > 0
      ? Math.ceil((t.energy + t.gateCost * 0) / (state.settings.energyBudget || 1))
      : null;
    return {
      skillId: id, name: r.meta.name, color: r.meta.color, type: r.meta.type,
      energy: t.energy, profit: t.profit, gateCost: t.gateCost, total: t.total,
      outValue: t.outValue, crafts: t.crafts, exp: t.exp, enough: r.enough,
      perEnergy: t.total / (t.energy || 1)
    };
  }).sort(function (a, b) { return b.total - a.total; });
}

export function formatRange(from, to) {
  if (to - from <= 1) return from + ' 级';
  return from + '–' + (to - 1) + ' 级';
}

export function itemsText(recipe, limit) {
  if (!recipe) return '';
  if (recipe.kind === 'gather') {
    return (recipe.outputs || []).slice(0, limit || 2).map(function (o) {
      const item = CATALOG_BY_ID[o.item];
      const chance = o.chance == null ? 1 : Number(o.chance);
      return (item ? item.name : o.item) + '×' + o.qty + (chance < 0.999 ? '（' + Math.round(chance * 100) + '%）' : '');
    }).join(' + ');
  }
  const arr = (recipe.o || []).slice(0, limit || 2).map(function (o) {
    const q = o[1] === o[2] ? o[1] : (o[1] + '~' + o[2]);
    const chance = o[3] == null ? 1 : Number(o[3]);
    return itemOf(o[0]).n + '×' + q + (chance < 0.999 ? '（' + Math.round(chance * 100) + '%）' : '');
  });
  return arr.join(' + ');
}

/* 采集点产出明细（用于展开面板） */
export function gatherOutputs(state, recipe, serverId) {
  const taxRate = Math.max(0, Math.min(1, Number(state.settings && state.settings.taxRate)));
  return (recipe.outputs || []).map(function (o) {
    const item = CATALOG_BY_ID[o.item];
    const p = priceOf(state, o.item, serverId || state.serverId);
    const chance = o.chance == null ? 1 : Math.max(0, Math.min(1, Number(o.chance)));
    return {
      name: item ? item.name : o.item, qty: o.qty, chance: chance,
      unit: p.v, sub: p.v * o.qty * chance * (1 - taxRate), missing: !(p.v > 0)
    };
  });
}

export function matsText(recipe, limit) {
  if (!recipe) return '';
  const arr = (recipe.m || []).slice(0, limit || 3).map(function (m) {
    return itemOf(m[0]).n + '×' + m[1];
  });
  return arr.join(' · ');
}

export { nameOfIndex as itemName };
function nameOfIndex(idx) { return itemOf(idx).n; }
