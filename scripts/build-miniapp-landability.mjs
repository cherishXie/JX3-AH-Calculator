#!/usr/bin/env node
/**
 * 把 Web 的本服落地审计压成小程序可用的「评级表」。
 *
 * 输出只保留每个配方在每个区服的最终评级（A/B/C）与是否含自产（sc），
 * 不重复存名称/数值；318 个配方 × 17 个区服约 20KB，可以进主包。
 * 采集配方不进审计，统一记为 G（采集不参与可做判断）。
 *
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

// 与小程序 catalog 同序；采集配方用 G，其余默认 C。
const recipes = D.recipes || [];
const ids = recipes.map((r) => r.id);
const index = Object.create(null);
ids.forEach((id, i) => { index[id] = i; });
const base = recipes.map((r) => (r.kind === 'gather' ? 'G' : 'C'));

const out = {
  meta: {
    generatedAt: A.meta.generatedAt,
    snapshots: A.meta.snapshots,
    source: 'web-audit',
    policy: '本服购买优先；A+B 限售，不含自产',
    note: '每服一条与 ids 等长的评级串：A/B/C/G；sc 串为 1 表示需自产'
  },
  ids,
  servers: {}
};

for (const [sid, server] of Object.entries(A.servers || {})) {
  const grades = base.slice();
  const selfCraft = new Array(ids.length).fill('0');
  let covered = 0;
  for (const [id, rec] of Object.entries(server.recipes || {})) {
    const i = index[id];
    if (i == null) continue;
    const g = String(rec.gl || rec.g || 'C')[0];
    if (g === 'A' || g === 'B' || g === 'C') grades[i] = g;
    if (rec.sc) selfCraft[i] = '1';
    covered++;
  }
  out.servers[sid] = {
    name: server.name,
    counts: server.countsLocal || server.counts,
    covered,
    g: grades.join(''),
    sc: selfCraft.join('')
  };
}

const target = path.join(ROOT, 'miniapp', 'src', 'shared', 'landability.json');
fs.writeFileSync(target, JSON.stringify(out) + '\n');
console.log('wrote', target, ids.length, 'recipes', Object.keys(out.servers).length, 'servers', (fs.statSync(target).size / 1024).toFixed(1) + 'KB', out.meta.snapshots, 'snapshots');
