/* 落地评级 · 纯计算（依赖 JX3Profit / JX3Access / JX3Data） */
(function () {
  'use strict';
  const P = window.JX3Profit;
  const D = window.JX3Data || {};
  const A = window.JX3Access || { items: {} };
  const itemById = {};
  (D.items || []).forEach(function (i) { itemById[i.id] = i; });

  function itemName(id) {
    const it = itemById[id];
    return it ? it.name : id;
  }
  function accessOf(id) {
    return (A.items && A.items[id]) || null;
  }
  function isVendor(id) {
    const a = accessOf(id);
    return !!(a && (a.t === 'vendor' || a.v));
  }
  function isHard(id) {
    const a = accessOf(id);
    return !!(a && a.t === 'hard');
  }

  /**
   * @param {object} recipe
   * @param {object} ev JX3Profit.evaluate 的结果（当前节点）
   * @param {object} stats {feasibility,outCov,persistence,cv,medianPerE}
   */
  function grade(recipe, ev, stats, opts) {
    stats = stats || {};
    opts = opts || {};
    const allowSelfCraft = opts.allowSelfCraft !== false;
    const outCov = Number(stats.outCov) || 0;
    const persistence = Number(stats.persistence);
    const cv = Number(stats.cv);
    const feasibility = Number(stats.feasibility);
    const medianPerE = Number(stats.medianPerE);
    const reasons = [];
    const blockedBy = [];
    if (!ev || !ev.ok) {
      const id = ev && ev.missingItem;
      if (id) blockedBy.push({ itemId: id, name: itemName(id), reason: ev.reason || '缺报价' });
      return {
        grade: 'C', feasible: false, blockedBy,
        thinReasons: [], selfCraft: false,
        reasons: [ev && ev.reason || '不可核价']
      };
    }
    if (ev.selfCraft && !allowSelfCraft) {
      return {
        grade: 'C', feasible: true, blockedBy: [],
        thinReasons: ['严格视图不允许自产'], selfCraft: true,
        reasons: ['需自产；严格视图不允许']
      };
    }
    if (ev.selfCraft) {
      if (outCov < 4) {
        return {
          grade: 'C', feasible: true, blockedBy: [],
          thinReasons: ['成品覆盖 ' + outCov + ' 服', '需要自产'],
          selfCraft: true, reasons: ['自产且成品流动性不足']
        };
      }
      return {
        grade: 'B', feasible: true, blockedBy: [],
        thinReasons: ['需要自产', '额外精力 ' + Math.max(0, ev.energy - (ev.recipe ? ev.recipe.energy : 0))],
        selfCraft: true, reasons: ['条件可落地：含自产']
      };
    }
    if (outCov < 4) {
      return {
        grade: 'C', feasible: true, blockedBy: [],
        thinReasons: ['成品仅 ' + outCov + ' 服有报价'],
        selfCraft: false, reasons: ['成品流动性不足']
      };
    }
    if (feasibility >= 0.8 && outCov >= 8 && persistence >= 0.8 && (!Number.isFinite(cv) || cv <= 0.25) && (!Number.isFinite(medianPerE) || medianPerE > 0)) {
      return { grade: 'A', feasible: true, blockedBy: [], thinReasons: [], selfCraft: false, reasons: ['报价完整、流动性充足'] };
    }
    if (feasibility >= 0.5 && outCov >= 4 && (!Number.isFinite(medianPerE) || medianPerE > 0)) {
      if (outCov < 8) reasons.push('成品仅 ' + outCov + ' 服有报价');
      if (persistence < 0.8) reasons.push('报价持续 ' + Math.round(persistence * 100) + '%');
      if (Number.isFinite(cv) && cv > 0.25) reasons.push('价格波动 ' + Math.round(cv * 100) + '%');
      if (!(ev.perEnergy > 0)) reasons.push('当前节点负收益');
      return { grade: 'B', feasible: true, blockedBy: [], thinReasons: reasons, selfCraft: false, reasons: ['条件可落地：薄市/波动'] };
    }
    return { grade: 'C', feasible: true, blockedBy: [], thinReasons: reasons.length ? reasons : (medianPerE <= 0 ? ['中位负收益'] : ['样本不足']), selfCraft: false, reasons: [medianPerE <= 0 ? '中位负收益' : '报价不完整或样本不足'] };
  }

  function capOf(row) {
    if (row.grade === 'A') {
      if (row.outCov >= 14) return 8;
      if (row.outCov >= 10) return 6;
      return 4;
    }
    if (row.grade === 'B') return row.outCov >= 6 ? 3 : 2;
    return 0;
  }

  function summary(rows) {
    const out = { total: rows.length, A: 0, B: 0, C: 0, feasible: 0, positive: 0 };
    rows.forEach(function (r) {
      out[r.grade] = (out[r.grade] || 0) + 1;
      if (r.feasible) out.feasible++;
      if (r.perE > 0) out.positive++;
    });
    return out;
  }

  function plan(rows, budget, opts) {
    opts = opts || {};
    const b = Math.max(0, Number(budget) || 0);
    const pool = (rows || []).filter(function (r) {
      if (!r || r.grade !== 'A' && r.grade !== 'B') return false;
      if (opts.includeSelfCraft === false && r.selfCraft) return false;
      if (!(r.perE > 0) || !(r.energy > 0) || !(r.profit > 0)) return false;
      return true;
    }).map(function (r) {
      const stable = Math.sqrt(Math.max(0, r.perE) * Math.max(0, r.medianPerE || r.perE));
      return { row: r, stable: stable, cap: capOf(r) };
    }).filter(function (x) { return x.cap > 0; })
      .sort(function (a, b2) { return b2.stable - a.stable; });
    let remaining = b;
    let profit = 0;
    const allocations = [];
    const bySkill = {};
    pool.forEach(function (x) {
      const r = x.row;
      const n = Math.min(Math.floor(remaining / r.energy), x.cap);
      if (n <= 0) return;
      const e = n * r.energy;
      const p = n * r.profit;
      remaining -= e;
      profit += p;
      allocations.push({ recipeId: r.id, name: r.name, skill: r.skill, grade: r.grade, count: n, energy: e, profit: p, cap: x.cap });
      const sk = bySkill[r.skill] || (bySkill[r.skill] = { profit: 0, energy: 0, idle: 0 });
      sk.profit += p; sk.energy += e;
    });
    Object.keys(bySkill).forEach(function (k) { bySkill[k].idle = Math.max(0, b - bySkill[k].energy); });
    return {
      budget: b, profit: profit, energyUsed: b - remaining, energyIdle: remaining,
      allocations: allocations, bySkill: bySkill
    };
  }

  window.JX3Landability = {
    grade: grade,
    capOf: capOf,
    summary: summary,
    plan: plan,
    isVendor: isVendor,
    isHard: isHard,
    accessOf: accessOf,
    itemName: itemName
  };
})();
