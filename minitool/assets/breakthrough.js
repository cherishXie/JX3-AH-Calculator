/* =========================================================================
   剑网三物价助手 · 突破升级内核（Web / 小红书小工具共用，无框架）
   数据：window.JX3Breakthrough（scripts/build-breakthrough-data.mjs 生成）
   - 配方经验/精力/材料/产出：JX3BOX 当前赛季技艺接口
   - 30/35/40/45「晋秩」突破材料：JX3BOX 攻略 109793 + 成就库
   - 价格：优先本服已校准价 / 目录拍卖价，回退突破数据快照
   ========================================================================= */
(function () {
  'use strict';

  const C = window.JX3Core;
  const BT = window.JX3Breakthrough;
  if (!C || !BT) return;

  const U = C.U;
  const Store = C.Store;
  const CATALOG = window.JX3Data;

  const ITEMS = BT.items || [];
  const RECIPES = BT.recipes || [];
  const GATES = BT.gates || {};
  const PRICES = BT.prices || {};
  const META = BT.meta || {};
  const CAP = U.num(META.levelCap) || 50;
  const GATHER_EXP = U.num(META.gatherExp) || 80;
  const GATE_LEVELS = [30, 35, 40, 45];

  const CATALOG_BY_NAME = {};
  (CATALOG.items || []).forEach(function (i) { if (!CATALOG_BY_NAME[i.name]) CATALOG_BY_NAME[i.name] = i; });

  const PRODUCERS = {};
  const BY_SKILL = {};
  RECIPES.forEach(function (r) {
    (r.o || []).forEach(function (o) {
      const idx = o[0];
      (PRODUCERS[idx] = PRODUCERS[idx] || []).push(r);
    });
    (BY_SKILL[r.s] = BY_SKILL[r.s] || []).push(r);
  });
  Object.keys(BY_SKILL).forEach(function (k) {
    BY_SKILL[k].sort(function (a, b) { return a.l - b.l || String(a.n).localeCompare(String(b.n), 'zh-CN'); });
  });

  function itemOf(idx) { return ITEMS[idx] || { k: '', n: '未知物品', q: 1 }; }
  function skillMeta(id) { return C.skillOf(id) || { id: id, name: id, type: 'craft', color: '#7ab8ff' }; }

  /* ---------------- 价格 ---------------- */
  function priceOfIndex(idx, serverId) {
    serverId = serverId || Store.state.serverId;
    const it = itemOf(idx);
    const canon = CATALOG_BY_NAME[it.n];
    if (canon) {
      const p = Store.price(serverId, canon.id);
      if (p && p.v > 0) return { v: p.v, src: p.user ? 'user' : 'market' };
    }
    const bucket = PRICES[serverId] || [];
    const v = bucket[idx];
    if (v != null && v > 0) return { v: v, src: 'market' };
    return { v: 0, src: 'missing' };
  }

  /* ---------------- 单位成本（市场价 / 自制取低） ---------------- */
  function costTable(serverId, basis) {
    const memo = new Array(ITEMS.length).fill(null);
    function cost(idx, stack) {
      if (memo[idx] != null) return memo[idx];
      const market = priceOfIndex(idx, serverId).v;
      const base = { v: market, market: market, src: 'market', recipe: null, missing: !(market > 0) };
      if (basis !== 'min') { memo[idx] = base; return base; }
      if (stack.indexOf(idx) !== -1) { memo[idx] = base; return base; }
      const list = PRODUCERS[idx] || [];
      if (!list.length) { memo[idx] = base; return base; }
      const nextStack = stack.concat(idx);
      let best = null;
      for (let n = 0; n < list.length; n++) {
        const r = list[n];
        let outQty = 0;
        (r.o || []).forEach(function (o) {
          if (o[0] === idx) outQty += ((o[1] + o[2]) / 2) * (o[3] == null ? 1 : o[3]);
        });
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
        if (!best || unit < best.v) best = { v: unit, market: market, src: 'craft', recipe: r, missing: false };
      }
      let out = base;
      if (best && (market <= 0 || best.v < market - 1e-9)) out = best;
      memo[idx] = out;
      return out;
    }
    ITEMS.forEach(function (_, idx) { cost(idx, []); });
    return memo;
  }

  function unitCost(idx, serverId, basis, table) {
    return table[idx] || { v: 0, src: 'market', missing: true };
  }

  function recipeEcon(r, serverId, basis, table, taxRate) {
    let matCost = 0;
    const mats = (r.m || []).map(function (m) {
      const c = unitCost(m[0], serverId, basis, table);
      matCost += c.v * m[1];
      return { idx: m[0], qty: m[1], unit: c.v, sub: c.v * m[1], src: c.src, missing: c.missing };
    });
    let gross = 0;
    const outs = (r.o || []).map(function (o) {
      const p = priceOfIndex(o[0], serverId);
      const chance = o[3] == null ? 1 : Math.max(0, Math.min(1, o[3]));
      const qty = ((o[1] + o[2]) / 2) * chance;
      gross += p.v * qty;
      return { idx: o[0], min: o[1], max: o[2], chance: chance, qty: qty, unit: p.v, sub: p.v * qty, missing: !(p.v > 0) };
    });
    const tax = gross * taxRate;
    const netValue = gross - tax;
    const exp = U.num(r.x);
    // 收益口径：产出税后价值 − 材料成本，正数为赚、负数为亏
    const profit = netValue - matCost;
    return {
      mats: mats, outs: outs, matCost: matCost, gross: gross, tax: tax, netValue: netValue,
      profit: profit, exp: exp, energy: U.num(r.e), missing: mats.some(function (m) { return m.missing; }),
      profitPerExp: exp > 0 ? profit / exp : null
    };
  }

  /* ---------------- 经验门槛（估算，游戏内未公开） ---------------- */
  function expToNext(level) {
    const m = META.expModel || { base: 500, step: 25 };
    return Math.max(1, Math.round(U.num(m.base) + U.num(m.step) * (level - 1)));
  }
  function formatRange(from, to) {
    if (to - from <= 1) return from + ' 级';
    return from + '–' + (to - 1) + ' 级';
  }

  /* ---------------- 突破任务 ---------------- */
  function gateInfo(skillId, gate, serverId, basis, table) {
    const items = (gate.r || []).map(function (g) {
      const idx = g[0];
      const qty = g[1];
      const market = priceOfIndex(idx, serverId);
      const craftMin = unitCost(idx, serverId, 'min', table);
      const useCraft = basis === 'min' && craftMin.src === 'craft' && craftMin.v > 0 && (market.v <= 0 || craftMin.v < market.v);
      const unit = useCraft ? craftMin.v : market.v;
      return {
        idx: idx, name: itemOf(idx).n, qty: qty, unit: unit, market: market.v,
        craft: craftMin.src === 'craft' ? craftMin.v : null,
        recipe: craftMin.recipe || (PRODUCERS[idx] || [])[0] || null,
        src: useCraft ? 'craft' : market.src, sub: unit * qty, missing: !(unit > 0)
      };
    });
    const cost = items.reduce(function (s, i) { return s + (i.missing ? 0 : i.sub); }, 0);
    const marketCost = items.reduce(function (s, i) { return s + (i.market > 0 ? i.market * i.qty : 0); }, 0);
    return {
      level: gate.l, name: gate.n, items: items, cost: cost, marketCost: marketCost,
      missing: items.some(function (i) { return i.missing; })
    };
  }

  /* ---------------- 制造技艺路线 ---------------- */
  function craftRoute(skillId, strategy, serverId, basis, taxRate) {
    const pool = BY_SKILL[skillId] || [];
    const table = costTable(serverId, basis);
    const econCache = {};
    function econOf(r) {
      if (!econCache[r.i]) econCache[r.i] = recipeEcon(r, serverId, basis, table, taxRate);
      return econCache[r.i];
    }
    function score(e, need) {
      if (!e || e.profitPerExp == null) return Infinity;
      if (strategy === 'effort') return -e.exp;
      if (strategy === 'energy') return Math.ceil(need / e.exp) * e.energy;
      return -e.profitPerExp;
    }

    const levels = [];
    for (let L = 1; L < CAP; L++) {
      const need = expToNext(L);
      let pick = null;
      let pickEcon = null;
      pool.forEach(function (r) {
        if (r.l > L) return;
        const e = econOf(r);
        if (e.missing) return;
        if (!pick) { pick = r; pickEcon = e; return; }
        const s = score(e, need);
        const bs = score(pickEcon, need);
        if (s < bs - 1e-9) { pick = r; pickEcon = e; }
        else if (Math.abs(s - bs) <= 1e-9 && e.profitPerExp > pickEcon.profitPerExp) { pick = r; pickEcon = e; }
      });
      levels.push({ level: L, need: need, recipe: pick, econ: pickEcon, count: pick && pickEcon ? Math.ceil(need / pickEcon.exp) : 0 });
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
      bands.push({ from: row.level, to: row.level + 1, need: row.need, count: row.count, recipe: row.recipe, econ: row.econ });
    });

    const routes = bands.map(function (b) {
      const e = b.econ;
      return {
        kind: 'level', from: b.from, to: b.to,
        name: b.recipe ? b.recipe.n : '无可用配方', level: b.recipe ? b.recipe.l : null,
        exp: b.recipe ? b.recipe.x : 0, energy: b.recipe ? b.recipe.e : 0,
        count: b.count, need: b.need,
        matCost: e ? e.matCost * b.count : 0, outValue: e ? e.netValue * b.count : 0,
        profit: e ? e.profit * b.count : 0, totalEnergy: e ? e.energy * b.count : 0,
        recipe: b.recipe, econ: e
      };
    });

    const gates = (GATES[skillId] || []).map(function (g) { return gateInfo(skillId, g, serverId, basis, table); });
    const all = [];
    routes.forEach(function (row) {
      all.push(row);
      const g = gates.find(function (x) { return x.level === row.to - 1; });
      if (g) all.push(Object.assign({ kind: 'gate' }, g));
    });
    gates.forEach(function (g) {
      if (!all.some(function (x) { return x.kind === 'gate' && x.level === g.level; })) all.push(Object.assign({ kind: 'gate' }, g));
    });

    const totals = { exp: 0, energy: 0, matCost: 0, outValue: 0, profit: 0, crafts: 0, gateCost: 0, gateMarket: 0, missingLevels: 0 };
    levels.forEach(function (r) { totals.exp += r.need; if (!r.recipe) totals.missingLevels++; });
    routes.forEach(function (r) {
      totals.energy += r.totalEnergy; totals.matCost += r.matCost; totals.outValue += r.outValue;
      totals.profit += r.profit; totals.crafts += r.count;
    });
    gates.forEach(function (g) { totals.gateCost += g.cost; totals.gateMarket += g.marketCost; });
    totals.total = totals.profit - totals.gateCost;
    return { kind: 'craft', skillId: skillId, strategy: strategy, routes: all, gates: gates, totals: totals, enough: !totals.missingLevels };
  }

  /* ---------------- 采集技艺路线 ---------------- */
  function gatherRoute(skillId, strategy, serverId, basis, taxRate) {
    const nodes = (Store.state.recipes || []).filter(function (r) { return r.kind === 'gather' && r.skillId === skillId; });
    const table = costTable(serverId, basis);
    const econCache = {};
    function econOf(r) {
      if (econCache[r.id]) return econCache[r.id];
      let value = 0;
      (r.outputs || []).forEach(function (o) {
        const p = Store.price(serverId, o.item);
        const chance = o.chance == null ? 1 : Number(o.chance);
        value += p.v * o.qty * chance;
      });
      value *= (1 - taxRate);
      const e = {
        exp: GATHER_EXP, energy: U.num(r.energy), value: value, profit: value,
        profitPerExp: value / GATHER_EXP, valuePerEnergy: value / (U.num(r.energy) || 1),
        energyPerExp: U.num(r.energy) / GATHER_EXP
      };
      econCache[r.id] = e;
      return e;
    }
    const lowest = nodes.slice().sort(function (a, b) { return U.num(a.level) - U.num(b.level); })[0] || null;

    const levels = [];
    for (let L = 1; L < CAP; L++) {
      const need = expToNext(L);
      let avail = nodes.filter(function (r) { return U.num(r.level) <= L; });
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
        name: b.node ? b.node.name : '无可用采集点', level: b.node ? b.node.level : null,
        exp: e ? e.exp : 0, energy: b.node ? b.node.energy : 0,
        count: b.count, need: b.need, matCost: 0,
        outValue: e ? e.value * b.count : 0, profit: e ? e.value * b.count : 0,
        totalEnergy: b.node ? U.num(b.node.energy) * b.count : 0,
        recipe: b.node, econ: e, estimated: !!b.estimated
      };
    });

    const gates = (GATES[skillId] || []).map(function (g) { return gateInfo(skillId, g, serverId, basis, table); });
    const all = [];
    routes.forEach(function (row) {
      all.push(row);
      const g = gates.find(function (x) { return x.level === row.to - 1; });
      if (g) all.push(Object.assign({ kind: 'gate' }, g));
    });
    gates.forEach(function (g) {
      if (!all.some(function (x) { return x.kind === 'gate' && x.level === g.level; })) all.push(Object.assign({ kind: 'gate' }, g));
    });

    const totals = { exp: 0, energy: 0, matCost: 0, outValue: 0, profit: 0, crafts: 0, gateCost: 0, gateMarket: 0, missingLevels: 0 };
    levels.forEach(function (r) { totals.exp += r.need; if (!r.node) totals.missingLevels++; });
    routes.forEach(function (r) {
      totals.energy += r.totalEnergy; totals.outValue += r.outValue; totals.profit += r.profit; totals.crafts += r.count;
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

  function analyze(skillId, strategy) {
    const state = Store.state;
    const serverId = state.serverId;
    const basis = (state.settings && state.settings.basis) || 'market';
    const taxRate = Math.max(0, Math.min(1, U.num(state.settings.taxRate)));
    const meta = skillMeta(skillId);
    const r = meta.type === 'gather'
      ? gatherRoute(skillId, strategy, serverId, basis, taxRate)
      : craftRoute(skillId, strategy, serverId, basis, taxRate);
    r.meta = meta;
    r.phases = phaseSummary(r.routes, r.gates);
    return r;
  }

  function summary(strategy) {
    return ['shennong', 'caijin', 'paoding', 'duanzao', 'fengren', 'zhiyao', 'pengren', 'zijiang'].map(function (id) {
      const r = analyze(id, strategy);
      const t = r.totals;
      return {
        skillId: id, name: r.meta.name, color: r.meta.color, type: r.meta.type,
        energy: t.energy, profit: t.profit, gateCost: t.gateCost, total: t.total,
        outValue: t.outValue, crafts: t.crafts, exp: t.exp, enough: r.enough
      };
    }).sort(function (a, b) { return b.total - a.total; });
  }

  function itemsText(recipe, limit) {
    if (!recipe) return '';
    if (recipe.kind === 'gather') {
      return (recipe.outputs || []).slice(0, limit || 2).map(function (o) {
        const item = C.itemOf(o.item);
        const chance = o.chance == null ? 1 : Number(o.chance);
        return (item ? item.name : o.item) + '×' + o.qty + (chance < 0.999 ? '（' + Math.round(chance * 100) + '%）' : '');
      }).join(' + ');
    }
    return (recipe.o || []).slice(0, limit || 2).map(function (o) {
      const q = o[1] === o[2] ? o[1] : (o[1] + '~' + o[2]);
      const chance = o[3] == null ? 1 : Number(o[3]);
      return itemOf(o[0]).n + '×' + q + (chance < 0.999 ? '（' + Math.round(chance * 100) + '%）' : '');
    }).join(' + ');
  }

  function matsText(recipe, limit) {
    if (!recipe) return '';
    return (recipe.m || []).slice(0, limit || 3).map(function (m) { return itemOf(m[0]).n + '×' + m[1]; }).join(' · ');
  }

  function gatherOutputs(recipe, serverId) {
    const taxRate = Math.max(0, Math.min(1, U.num(Store.state.settings.taxRate)));
    return (recipe.outputs || []).map(function (o) {
      const item = C.itemOf(o.item);
      const p = Store.price(serverId || Store.state.serverId, o.item);
      const chance = o.chance == null ? 1 : Math.max(0, Math.min(1, Number(o.chance)));
      return {
        name: item ? item.name : o.item, qty: o.qty, chance: chance,
        unit: p.v, missing: !(p.v > 0), sub: p.v * o.qty * chance * (1 - taxRate)
      };
    });
  }

  window.JX3BT = {
    META: META, CAP: CAP, GATE_LEVELS: GATE_LEVELS,
    analyze: analyze, summary: summary,
    expToNext: expToNext, formatRange: formatRange,
    itemsText: itemsText, matsText: matsText,
    itemOf: itemOf, gatherOutputs: gatherOutputs,
    priceOfIndex: priceOfIndex
  };
})();
