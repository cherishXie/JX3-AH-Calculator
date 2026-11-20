const { execSync } = require('child_process');
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const outDir = path.join(__dirname, 'raw');
const commits = execSync('git log --format=%h -- assets/data.js', { encoding: 'utf8', cwd: path.join(__dirname, '..', '..') })
  .trim().split('\n').filter(Boolean);
const seen = new Map();
const rows = [];
for (const c of commits) {
  let src;
  try { src = execSync(`git show ${c}:assets/data.js`, { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024, cwd: path.join(__dirname, '..', '..') }); }
  catch { continue; }
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try { vm.runInContext(src, sandbox); } catch (e) { console.error('eval fail', c, e.message); continue; }
  const d = sandbox.window.JX3Data;
  if (!d || !d.meta) continue;
  const ts = d.meta.priceUpdatedAt;
  if (!ts || !/T\d{2}:\d{2}/.test(ts)) continue;
  if (seen.has(ts)) continue;
  seen.set(ts, c);
  rows.push({
    commit: c,
    at: ts,
    catalogVersion: d.meta.catalogVersion,
    servers: (d.servers || []).map(s => ({ id: s.id, name: s.name })),
    serverPrices: d.serverPrices || {},
    items: (d.items || []).map(i => ({ id: i.id, name: i.name, base: i.base, kind: i.kind, skillId: i.skillId, tier: i.tier, source: i.source })),
    meta: { priceCoverage: d.meta.priceCoverage, serverCoverage: d.meta.serverCoverage },
  });
}
rows.sort((a, b) => a.at.localeCompare(b.at));
fs.writeFileSync(path.join(outDir, 'git-snapshots.json'), JSON.stringify(rows, null, 1));
console.log('snapshots', rows.length);
for (const r of rows) {
  const counts = Object.fromEntries(Object.entries(r.serverPrices).map(([k, v]) => [k, Object.keys(v).length]));
  console.log(r.at, r.catalogVersion, 'servers', Object.keys(r.serverPrices).length, 'items', r.items.length, 'mengjiang', counts.s_mengjiangnan);
}
