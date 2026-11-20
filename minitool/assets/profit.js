/* 制作收益 · 当前赛季落地校验（纯计算，无第三方依赖） */
(function () {
  'use strict';
  const C = window.JX3Core;
  const U = C && C.U ? C.U : {
    fmt: function (v, d) { return Number(v).toFixed(d == null ? 2 : d); }
  };
  const DATA = window.JX3Data || {};
  const ACCESS = window.JX3Access || { items: {} };
  const TAX_DEFAULT = 0.05;
  const MAX_DEPTH = 4;

  const itemById = Object.create(null);
  (DATA.items || []).forEach(function (item) { itemById[item.id] = item; });
  const recipeByOutput = Object.create(null);
  (DATA.recipes || []).forEach(function (r) {
    if (r.kind !== 'craft') return;
    (r.outputs || []).forEach(function (o) {
      if (!recipeByOutput[o.item]) recipeByOutput[o.item] = r;
    });
  });

  const season = {
    expansion: (DATA.meta && DATA.meta.expansion) || '苍生铸世',
    levelCap: (DATA.meta && DATA.meta.levelCap) || 50,
    label: ((DATA.meta && DATA.meta.expansion) || '苍生铸世') + ' · ' + ((DATA.meta && DATA.meta.levelCap) || 50) + ' 级',
    verified: (DATA.meta && DATA.meta.verifiedAt) || ''
  };

  function quote(point, itemId) {
    if (!point || !point.quotes) return null;
    const v = Number(point.quotes[itemId]);
    return v > 0 ? v : null;
  }

  function accessOf(itemId) {
    return (ACCESS.items && ACCESS.items[itemId]) || null;
  }

  function vendorPrice(point, itemId) {
    const a = accessOf(itemId);
    if (!a || (a.t !== 'vendor' && !a.v)) return null;
    const catalog = point && point.catalog ? Number(point.catalog[itemId]) : 0;
    const item = itemById[itemId];
    const price = catalog > 0 ? catalog : Number(item && item.base) || 0;
    return price > 0 ? price : null;
  }

  function taxRate(value) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : TAX_DEFAULT;
  }

  function recipeFor(itemId) { return recipeByOutput[itemId] || null; }

  function outputFor(recipe, itemId) {
    return (recipe.outputs || []).filter(function (o) { return o.item === itemId; })[0] || null;
  }

  function build(itemId, point, qty, stack) {
    const market = quote(point, itemId);
    if (market != null) {
      return {
        ok: true, itemId: itemId, qty: qty, quote: market, purchase: true,
        cost: market * qty, energy: 0, selfCraft: false,
        chain: [{ itemId: itemId, qty: qty, quote: market, path: '购买', energy: 0 }]
      };
    }
    const vendor = vendorPrice(point, itemId);
    if (vendor != null) {
      return {
        ok: true, itemId: itemId, qty: qty, quote: vendor, purchase: true, vendor: true,
        cost: vendor * qty, energy: 0, selfCraft: false,
        chain: [{ itemId: itemId, qty: qty, quote: vendor, path: '商店', energy: 0 }]
      };
    }
    const recipe = recipeFor(itemId);
    if (!recipe || stack.indexOf(itemId) !== -1 || stack.length >= MAX_DEPTH) {
      return { ok: false, itemId: itemId, qty: qty, reason: '缺一线材料报价', missingItem: itemId };
    }
    const out = outputFor(recipe, itemId);
    if (!out || !(out.qty > 0)) return { ok: false, itemId: itemId, qty: qty, reason: '配方产出异常' };
    const crafts = Math.max(1, Math.ceil(qty / out.qty));
    let cost = 0, energy = recipe.energy * crafts;
    const chain = [];
    for (const m of (recipe.materials || [])) {
      const sub = build(m.item, point, m.qty * crafts, stack.concat([itemId]));
      if (!sub.ok) return sub;
      cost += sub.cost;
      energy += sub.energy;
      (sub.chain || []).forEach(function (row) { chain.push(row); });
    }
    chain.unshift({
      itemId: itemId, qty: qty, quote: null, path: '含自造', energy: recipe.energy * crafts,
      recipe: recipe.name, level: recipe.level
    });
    return {
      ok: true, itemId: itemId, qty: qty, quote: null, purchase: false,
      cost: cost, energy: energy, selfCraft: true, crafts: crafts, chain: chain
    };
  }

  function evaluate(itemId, point, tax) {
    const item = itemById[itemId];
    if (!item) return { ok: false, reason: '物品不存在' };
    const recipe = recipeFor(itemId);
    if (!recipe) return { ok: false, reason: '该物品不是可制作产物', item: item };
    const out = outputFor(recipe, itemId);
    const sale = quote(point, itemId);
    if (sale == null) {
      return { ok: false, reason: '成品当前无本服报价', item: item, recipe: recipe, missing: 'output' };
    }
    const qty = out && out.qty ? out.qty : 1;
    let cost = 0, extraEnergy = 0, selfCraft = false, vendorUsed = false;
    const chain = [];
    for (const m of (recipe.materials || [])) {
      const sub = build(m.item, point, m.qty, [itemId]);
      if (!sub.ok) {
        return { ok: false, reason: sub.reason || '材料缺价', item: item, recipe: recipe, missing: sub.missingItem };
      }
      cost += sub.cost;
      extraEnergy += sub.energy;
      if (sub.selfCraft) selfCraft = true;
      if (sub.vendor) vendorUsed = true;
      (sub.chain || []).forEach(function (row) { chain.push(row); });
    }
    chain.unshift({
      itemId: itemId, qty: qty, quote: sale, path: selfCraft ? '含自造' : '购买可落地',
      energy: recipe.energy, recipe: recipe.name, root: true
    });
    const gross = sale * qty;
    const net = gross * (1 - taxRate(tax));
    const profit = net - cost - (recipe.fee || 0);
    const energy = recipe.energy + extraEnergy;
    return {
      ok: true, item: item, recipe: recipe, qty: qty, sale: sale, gross: gross, net: net,
      cost: cost, fee: recipe.fee || 0, profit: profit, energy: energy,
      perEnergy: energy > 0 ? profit / energy : null,
      purchase: !selfCraft, selfCraft: selfCraft, vendorUsed: vendorUsed,
      chain: chain, path: selfCraft ? '含自造' : (vendorUsed ? '商店+购买' : '购买可落地')
    };
  }

  function history(itemId, points, tax) {
    return (points || []).map(function (point) {
      const ev = evaluate(itemId, point, tax);
      return { at: point.at, point: point, ev: ev };
    });
  }

  function median(values) {
    const v = (values || []).filter(function (n) { return Number.isFinite(n); }).slice().sort(function (a, b) { return a - b; });
    if (!v.length) return null;
    return v[Math.floor((v.length - 1) / 2)];
  }

  function quantile(values, q) {
    const v = (values || []).filter(function (n) { return Number.isFinite(n); }).slice().sort(function (a, b) { return a - b; });
    if (!v.length) return null;
    return v[Math.min(v.length - 1, Math.floor((v.length - 1) * q))];
  }

  function skillTop(skillId, point, tax, limit) {
    const rows = [];
    const seen = Object.create(null);
    (DATA.recipes || []).forEach(function (r) {
      if (r.kind !== 'craft' || r.skillId !== skillId) return;
      (r.outputs || []).forEach(function (o) {
        const item = itemById[o.item];
        if (!item || item.kind !== 'product' || seen[o.item]) return;
        seen[o.item] = true;
        const ev = evaluate(o.item, point, tax);
        if (ev.ok) rows.push(ev);
      });
    });
    rows.sort(function (a, b) {
      if (b.perEnergy !== a.perEnergy) return b.perEnergy - a.perEnergy;
      if (a.energy !== b.energy) return a.energy - b.energy;
      return String(a.item.name).localeCompare(String(b.item.name), 'zh-CN');
    });
    return rows.slice(0, limit || 10);
  }

  function crossServer(itemId, servers, columns, tax) {
    const rows = [];
    (servers || []).forEach(function (s) {
      const points = s.points || [];
      const last = points[points.length - 1];
      if (!last) return;
      const ev = evaluate(itemId, last, tax);
      rows.push({ server: s, point: last, ev: ev });
    });
    const nodes = (columns || []).map(function (at) {
      const vals = [];
      (servers || []).forEach(function (s) {
        const point = (s.points || []).filter(function (p) { return p.at === at; })[0];
        if (!point) return;
        const ev = evaluate(itemId, point, tax);
        if (ev.ok && ev.perEnergy != null) vals.push(ev.perEnergy);
      });
      return { at: at, median: median(vals), p25: quantile(vals, 0.25), p75: quantile(vals, 0.75), count: vals.length };
    });
    const feasible = rows.filter(function (r) { return r.ev.ok; });
    const vals = feasible.map(function (r) { return r.ev.perEnergy; });
    return {
      rows: rows, feasible: feasible, nodes: nodes,
      median: median(vals), p25: quantile(vals, 0.25), p75: quantile(vals, 0.75),
      feasibleCount: feasible.length, total: rows.length
    };
  }

  function chainHasMissing(ev) {
    return !ev.ok || (ev.chain || []).some(function (row) { return row.path === '含自造'; });
  }

  window.JX3Profit = {
    season: season,
    taxRate: taxRate,
    quote: quote,
    vendorPrice: vendorPrice,
    accessOf: accessOf,
    recipeFor: recipeFor,
    item: function (id) { return itemById[id] || null; },
    evaluate: evaluate,
    history: history,
    skillTop: skillTop,
    crossServer: crossServer,
    median: median,
    quantile: quantile,
    format: U.fmt
  };
})();
