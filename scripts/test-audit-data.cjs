#!/usr/bin/env node
/**
 * 落地审计数据回归：
 *   node scripts/test-audit-data.cjs
 * 依赖 assets/audit-data.js、access-data.js、profit.js、landability.js。
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const sb = { window: {} };
vm.createContext(sb);
const run = (f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sb);
run('assets/data.js');
sb.window.JX3Core = { U: { fmt: (v, d) => Number(v).toFixed(d == null ? 2 : d) } };
run('assets/access-data.js');
run('assets/profit.js');
run('assets/landability.js');
run('assets/audit-data.js');

const D = sb.window.JX3Data;
const A = sb.window.JX3Audit;
const P = sb.window.JX3Profit;
const L = sb.window.JX3Landability;
const SID = 's_mengjiangnan';
const server = A.servers[SID];
const recipeByName = (name) => (D.recipes || []).find((r) => r.name === name);

assert.equal(A.meta.snapshots, 47, '快照数应为 47');
assert.equal(JSON.stringify(server.counts), JSON.stringify({ A: 28, B: 17, C: 185, feasible: 142, positive: 90 }));
assert.equal(JSON.stringify(server.countsLocal), JSON.stringify({ A: 39, B: 9, C: 182, feasible: 145, positive: 93 }));
assert.equal(A.servers.s_mengjiangnan.items.quote, 770);
assert.equal(A.servers.s_mengjiangnan.items.vendor, 12);
assert.equal(A.servers.s_mengjiangnan.items.base, 244);

const gradeOf = (name) => {
  const r = recipeByName(name);
  assert.ok(r, name + ' 配方存在');
  return server.recipes[r.id];
};
assert.equal(gradeOf('玄元星平衫').g, 'C');
assert.ok(gradeOf('玄元星平衫').b.includes('地脉玄元'), '玄元星平衫应卡地脉玄元');
assert.equal(gradeOf('巴山凝神丹').g, 'A');
assert.equal(gradeOf('苍生·絮泊磨石（疗伤）').g, 'B');
assert.equal(gradeOf('定魂丹砂').g, 'C');
assert.equal(gradeOf('归营旌').g, 'C', '跨服严格视图归营旌 C');
assert.ok(['B', 'C'].includes(gradeOf('归营旌').gd), '跨服默认视图归营旌可为 B/C');
assert.equal(gradeOf('归营旌').gl, 'B', '本服视图归营旌 B');

const rows = Object.entries(server.recipes).map(([id, r]) => {
  const rec = (D.recipes || []).find((x) => x.id === id) || {};
  return { id, name: rec.name || id, skill: rec.skillId || '', grade: r.gl, perE: r.p, medianPerE: r.mp, profit: r.pr, energy: r.e, outCov: r.oc, selfCraft: r.sc };
});
const plan = L.plan(rows, 3000, { includeSelfCraft: false, localOnly: true });
assert.equal(plan.energyUsed, 2992);
assert.ok(plan.profit > 39500 && plan.profit < 41500, '本服混合组合利润 ' + plan.profit);

const forge = L.plan(rows.filter((r) => r.skill === 'duanzao'), 3000, { includeSelfCraft: false, localOnly: true });
assert.equal(forge.energyUsed, 920);
assert.ok(forge.profit > 10200 && forge.profit < 11200, '本服锻造利润 ' + forge.profit);
const sew = L.plan(rows.filter((r) => r.skill === 'fengren'), 3000, { includeSelfCraft: false, localOnly: true });
assert.equal(sew.energyUsed, 2982);
assert.ok(sew.profit > 30500 && sew.profit < 33000, '本服缝纫利润 ' + sew.profit);

const coal = (D.items || []).find((i) => i.id === 'm_m_5_31993');
assert.ok(P.vendorPrice({ quotes: {}, catalog: {} }, coal.id) > 0, '煤炭应有商店价');
assert.equal(L.isHard('dimai'), true);
assert.equal(L.isVendor('m_m_5_10176'), true);

console.log('PASS: audit data, grades, quotes, vendor, per-skill plans');
