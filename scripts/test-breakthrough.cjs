/* Run: node scripts/test-breakthrough.cjs */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const createModel = require('../miniapp/src/shared/breakthrough-model');
const catalog = require('../miniapp/src/shared/catalog.json');
const data = require('../miniapp/src/shared/breakthrough.json');
const mapping = require('./jx3-item-map.json');
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);

// Hand-computable fixtures: the low-output route differs from the midpoint route.
const named = catalog.items.filter(i => mapping[i.name]).slice(0, 3);
function fixture() {
  const cat = { meta: {}, items: named, skills: [{ id: 'duanzao', name: '锻造', type: 'craft' }], serverPrices: { test: { [named[0].id]: 5, [named[1].id]: 10, [named[2].id]: 7 } } };
  const bt = { meta: { levelCap: 50, expModel: { base: 500, step: 25 } }, items: named.map(i => ({ n: i.name, k: mapping[i.name] })), recipes: [
    { i: 1, s: 'duanzao', n: '浮动产量', l: 1, x: 500, e: 10, m: [[0, 1]], o: [[1, 1, 5, 1]] },
    { i: 2, s: 'duanzao', n: '固定产量', l: 1, x: 500, e: 10, m: [[0, 2]], o: [[1, 2.5, 2.5, 1]] }
  ], gates: { duanzao: [30, 35, 40, 45].map(l => ({ l, n: '晋秩', r: [[2, 1]] })) }, prices: { test: [99, 99, 99] } };
  const state = { serverId: 'test', settings: { basis: 'market', taxRate: .05 }, prices: { [named[0].id]: 999 } };
  return { cat, bt, model: createModel(bt, cat, () => state) };
}
{
  const { model } = fixture();
  assert.equal(model.priceOfIndex(0).v, 5, 'script quote precedes user/base/snapshot prices');
  const low = model.analyze('duanzao', 'gold', 'low');
  const mid = model.analyze('duanzao', 'gold', 'mid');
  const high = model.analyze('duanzao', 'gold', 'high');
  assert.equal(low.levels[0].recipe.i, 2);
  assert.equal(mid.levels[0].recipe.i, 1);
  near(low.levels[0].profit, 13.75);
  near(mid.levels[0].profit, 23.5);
  near(high.levels[0].profit, 42.5);
  assert.equal(mid.gates.length, 4);
  assert.equal(mid.experience.length, 49);
  assert.equal(model.expToNext(50), null);
  assert.deepEqual(mid.phases.map(p => p.exp), [24650, 29250]);
  assert.equal(mid.totals.gateCost, 28);
  near(mid.totals.total, mid.phases[0].total + mid.phases[1].total);
  for (const level of [30, 35, 40, 45]) {
    const idx = mid.routes.findIndex(r => r.kind === 'gate' && r.level === level);
    assert.equal(mid.routes[idx - 1].to, level);
    assert.equal(mid.routes[idx + 1].from, level);
  }
}
{
  const { model, cat, bt } = fixture();
  delete cat.serverPrices.test[named[2].id];
  assert.equal(model.priceOfIndex(2).v, 99, 'same-server breakthrough snapshot supplements primary quotes');
  bt.prices.test[2] = null;
  const r = model.analyze('duanzao', 'gold');
  assert.equal(r.gates[0].cost, null);
  assert.equal(r.gates[0].items[0].sub, null);
  assert.equal(r.gates[0].missingItems[0].name, named[2].name);
  assert.equal(r.totals.gateCost, null);
  assert.equal(r.totals.total, null);
  assert.equal(r.phases[0].total, null);
  assert.equal(r.enough, false);
  delete cat.serverPrices.test[named[1].id];
  bt.prices.test[1] = null;
  const incomplete = model.analyze('duanzao', 'gold');
  assert.equal(incomplete.totals.missingLevels, 49, 'unpriced output cannot become zero revenue');
  assert.equal(incomplete.totals.profit, null);
  assert.equal(incomplete.totals.energy, null);
}
{
  const { cat, bt } = fixture();
  bt.recipes.push({ i: 3, s: 'duanzao', n: '自制任务材料', l: 1, x: 10, e: 5, m: [[0, 1]], o: [[2, 1, 1, 1]] });
  delete cat.serverPrices.test[named[2].id];
  bt.prices.test[2] = null;
  const model = createModel(bt, cat, () => ({ serverId: 'test', settings: { basis: 'min', taxRate: .05 } }));
  const gate = model.analyze('duanzao', 'gold').gates[0];
  assert.equal(gate.items[0].craft, 5, 'self-craft cost remains available as a reference');
  assert.equal(gate.items[0].missing, true, 'unpriced task materials must still be called out under the min-cost basis');
  assert.equal(gate.cost, null);
}
{
  const { model, bt } = fixture();
  bt.recipes[0].o[0][3] = .5;
  bt.recipes.splice(1);
  near(model.analyze('duanzao', 'gold', 'mid').levels[0].econ.outs[0].qty, 1.5);
  near(model.analyze('duanzao', 'gold', 'mid').levels[0].profit, 9.25);
}

// All servers, skills, strategies and yield scenarios: no hidden unknown totals,
// no routes crossing gates, and phase sums conserve each complete route's totals.
let cases = 0;
for (const server of catalog.servers) {
  const state = { serverId: server.id, settings: { basis: 'market', taxRate: .05 } };
  const model = createModel(data, catalog, () => state);
  for (const skill of catalog.skills) for (const strategy of ['gold', 'energy', 'effort']) for (const mode of ['low', 'mid', 'high']) {
    const r = model.analyze(skill.id, strategy, mode);
    assert.equal(r.gates.length, 4);
    assert.equal(r.levels.length, 49);
    assert.equal(r.totals.exp, 53900);
    for (const row of r.routes.filter(x => x.kind === 'level')) assert.ok(!model.GATE_LEVELS.some(g => row.from < g && row.to > g));
    if (r.enough) {
      for (const k of ['profit', 'gateCost', 'total', 'energy', 'crafts', 'outValue']) near(r.totals[k], r.phases[0][k] + r.phases[1][k]);
    } else assert.equal(r.totals.total, null);
    cases++;
  }
  const summary = model.summary('gold');
  let missingSeen = false;
  for (const row of summary) { if (!row.enough) missingSeen = true; else assert.equal(missingSeen, false); }
  for (const skill of ['caijin', 'paoding']) assert.equal(model.analyze(skill, 'gold').totals.missingLevels, 19, 'higher-level nodes cannot fill levels 1–19');
}
// Both browser bundles must contain the exact same model and expose working adapters.
const source = fs.readFileSync('miniapp/src/shared/breakthrough-model.js', 'utf8');
for (const base of ['assets', 'minitool/assets']) {
  assert.equal(fs.readFileSync(`${base}/breakthrough-model.js`, 'utf8'), source);
  const ctx = { window: { JX3Breakthrough: data, JX3Data: catalog, JX3Core: { Store: { state: { serverId: catalog.servers[0].id, settings: { basis: 'market', taxRate: .05 } } } } } };
  vm.runInNewContext(source, ctx);
  vm.runInNewContext(fs.readFileSync(`${base}/breakthrough.js`, 'utf8'), ctx);
  assert.ok(ctx.window.JX3BT.analyze('duanzao', 'gold').enough);
}
console.log(`PASS: hand-calculated fixtures, missing quotes, gate boundaries, probability, ${cases} real-data cases and browser adapters.`);
