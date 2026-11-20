#!/usr/bin/env node
/**
 * 把 Web 的本服落地审计压成小程序可用的轻量 JSON。
 *   node scripts/build-miniapp-landability.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const sandbox = { window: {} };
vm.createContext(sandbox);
const run = (f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox);
run('assets/data.js');
sandbox.window.JX3Core = { U: { fmt: (v, d) => Number(v).toFixed(d == null ? 2 : d) } };
run('assets/access-data.js');
run('assets/profit.js');
run('assets/landability.js');
run('assets/audit-data.js');

const D = sandbox.window.JX3Data;
const A = sandbox.window.JX3Audit;
const L = sandbox.window.JX3Landability;
const recipeById = Object.create(null);
(D.recipes || []).forEach((r) => { recipeById[r.id] = r; });
const itemById = Object.create(null);
(D.items || []).forEach((i) => { itemById[i.id] = i; });

const out = {
  meta: {
    generatedAt: A.meta.generatedAt,
    snapshots: A.meta.snapshots,
    source: 'web-audit',
    policy: '本服购买优先；A+B 限售，不含自产'
  },
  servers: {}
};

for (const [sid, server] of Object.entries(A.servers || {})) {
  const rows = Object.entries(server.recipes || {}).map(([id, rec]) => {
    const r = recipeById[id] || {};
    return {
      id, name: r.name || id, skill: r.skillId || '',
      grade: rec.gl || rec.g, perE: rec.p, medianPerE: rec.mp,
      profit: rec.pr, energy: rec.e, selfCraft: !!rec.sc
    };
  }).filter((r) => r.name && r.name !== r.id);
  const top = rows.filter((r) => (r.grade === 'A' || r.grade === 'B') && r.perE > 0)
    .sort((a, b) => (b.perE || -1e9) - (a.perE || -1e9))
    .slice(0, 5)
    .map((r) => ({ id: r.id, name: r.name, skill: r.skill, grade: r.grade, perE: r.perE, profit: r.profit, energy: r.energy, selfCraft: r.selfCraft }));
  const plan = L.plan(rows, 3000, { includeSelfCraft: false, localOnly: true });
  out.servers[sid] = {
    name: server.name,
    counts: server.countsLocal || server.counts,
    top,
    plan: {
      profit: plan.profit, energyUsed: plan.energyUsed, budget: plan.budget,
      energyIdle: plan.energyIdle,
      allocations: plan.allocations.slice(0, 5).map((a) => ({ name: a.name, skill: a.skill, grade: a.grade, count: a.count, energy: a.energy, profit: a.profit, cap: a.cap }))
    }
  };
}

const target = path.join(ROOT, 'miniapp', 'src', 'shared', 'landability.json');
fs.writeFileSync(target, JSON.stringify(out) + '\n');
console.log('wrote', target, Object.keys(out.servers).length, 'servers', (fs.statSync(target).size / 1024).toFixed(1) + 'KB', out.meta.snapshots, 'snapshots');
