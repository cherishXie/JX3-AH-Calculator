/* Run: node scripts/test-breakthrough.cjs */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const createModel = require('../miniapp/src/shared/breakthrough-model');
const catalog = require('../miniapp/src/shared/catalog.json');
const data = require('../miniapp/src/shared/breakthrough.json');
const mapping = require('./jx3-item-map.json');
const experienceModel = require('../miniapp/src/shared/experience-model.json');
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);

// Hand-computable fixtures: equal-width ROI bands, then lowest actual net spend.
const named = catalog.items.filter(i => mapping[i.name]).slice(0, 3);
function fixture() {
  const cat = { meta: {}, items: named, skills: [{ id: 'duanzao', name: '锻造', type: 'craft' }], serverPrices: { test: { [named[0].id]: 5, [named[1].id]: 10, [named[2].id]: 7 } } };
  const bt = { meta: { levelCap: 50, expModel: { base: 500, step: 25 } }, items: named.map(i => ({ n: i.name, k: mapping[i.name] })), recipes: [
    // 制造固定 1 精力 = 2 经验：e=10 → 单次 20 经验（x 字段已不参与计算）。
    { i: 1, s: 'duanzao', n: '低收益配方', l: 1, x: 500, e: 10, m: [[0, 1]], o: [[1, 1, 1, 1]] },
    { i: 2, s: 'duanzao', n: '中收益配方', l: 1, x: 500, e: 10, m: [[0, 1]], o: [[1, 5, 5, 1]] },
    { i: 3, s: 'duanzao', n: '高收益配方', l: 1, x: 500, e: 10, m: [[0, 1]], o: [[1, 8, 12, 1]] },
    { i: 4, s: 'duanzao', n: '低档省金币配方', l: 1, x: 250, e: 10, m: [[0, 1]], o: [[1, 2, 2, 1]] },
    { i: 5, s: 'duanzao', n: '高档省金币配方', l: 1, x: 50, e: 10, m: [[0, 1]], o: [[1, 180 / 19, 180 / 19, 1]] }
  ], gates: { duanzao: [30, 35, 40, 45].map(l => ({ l, n: '晋秩', r: [[2, 1]] })) }, prices: { test: [99, 99, 99] } };
  const state = { serverId: 'test', settings: { basis: 'market', taxRate: .05 }, prices: { [named[0].id]: 999 } };
  return { cat, bt, model: createModel(bt, cat, () => state) };
}
{
  const { model } = fixture();
  assert.equal(model.priceOfIndex(0).v, 5, 'script quote precedes user/base/snapshot prices');
  // 金币最优不再分三档：任一 mode 都在全部可用配方里取净花费最少的路线
  const gold = model.analyze('duanzao', 'gold', 'mid');
  const goldLow = model.analyze('duanzao', 'gold', 'low');
  assert.equal(gold.levels[0].recipe.i, 3);
  assert.equal(goldLow.levels[0].recipe.i, 3, 'mode no longer changes the gold route');
  near(gold.levels[0].profit, 2250);
  assert.equal(gold.levels[0].band, null, '金幣路線不再產出收益比檔位');
  near(gold.levels[0].econ.outs[0].qty, 10, 'route uses midpoint output (8..12 → 10)');
  const mid = gold;
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
  // 不再有收益比档位：只要还有一个有报价的配方，金币最优就能选出路线
  const { cat, bt } = fixture();
  bt.recipes = bt.recipes.filter(r => r.i !== 2);
  const model = createModel(bt, cat, () => ({ serverId: 'test', settings: { basis: 'market', taxRate: .05 } }));
  const gold = model.analyze('duanzao', 'gold', 'mid');
  assert.ok(gold.levels[0].recipe, 'gold route still resolves without the former mid-band recipe');
  assert.equal(model.analyze('duanzao', 'energy').enough, true);
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
  const energy = model.analyze('duanzao', 'energy');
  assert.equal(energy.enough, true, 'prices must not disqualify the lowest-energy route');
  assert.ok(energy.totals.energy > 0);
  assert.equal(energy.totals.profit, null);
  assert.equal(energy.totals.total, null);
}
{
  const { cat, bt } = fixture();
  bt.recipes.push({ i: 6, s: 'duanzao', n: '自制任务材料', l: 1, x: 10, e: 5, m: [[0, 1]], o: [[2, 1, 1, 1]] });
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
  bt.recipes[0].o[0] = [1, 1, 5, .5];
  bt.recipes.splice(1);
  near(model.analyze('duanzao', 'gold', 'mid').levels[0].econ.outs[0].qty, 1.5);
  // 单次经验 = 2×精力 = 20，所以 1→30 阶段要 25 次，总利润是单次的 25 倍
  near(model.analyze('duanzao', 'gold', 'mid').levels[0].profit, 231.25);
}

// All servers, skills, strategies and yield scenarios: no hidden unknown totals,
// no routes crossing gates, and phase sums conserve each complete route's totals.
assert.deepEqual(data.meta.expModel, experienceModel, 'regeneration must retain the calibrated observations');
{
  const model = createModel(data, catalog, () => ({ serverId: catalog.servers[0].id, settings: { basis: 'market', taxRate: .05 } }));
  const rows = model.experienceRows();
  // 1→2 至 30→31 全部为用户实测值，不再有插值区间（“升到 N 级”的表行 = (N-1)→N）。
  const MEASURED = [250, 390, 510, 640, 770, 890, 1030, 1150, 1280, 1360, 1370, 1390, 1400, 1410, 1420, 1430, 1440, 1450, 1500, 1510, 1520, 1530, 1540, 1550, 1600, 1610, 1620, 1630, 1640, 1650];
  for (let level = 1; level <= 30; level++) {
    assert.equal(model.expToNext(level), MEASURED[level - 1], 'measured threshold ' + level + ' must be exact');
    assert.equal(rows[level - 1].source, 'observed');
    assert.equal(rows[level - 1].estimated, false);
  }
  assert.equal(model.expToNext(2), 390);
  assert.equal(model.expToNext(12), 1390);
  // 31 级起按末段 +10/级外推
  assert.equal(model.expToNext(31), 1660);
  assert.equal(model.expToNext(49), 1840);
  assert.equal(rows.filter(r => r.source === 'interpolated').length, 0);
  assert.equal(rows.filter(r => r.source === 'extrapolated').length, 19);
  assert.equal(rows[28].cumulative, 36830, '达到 30 级的累计经验');
  assert.equal(rows[29].cumulative, 38480, '30→31 是独立一段');
  for (const strategy of ['energy', 'effort']) {
    const reference = model.analyze('duanzao', strategy, 'mid');
    for (const mode of ['low', 'high']) {
      const result = model.analyze('duanzao', strategy, mode);
      assert.equal(result.mode, 'mid');
      assert.deepEqual(result.totals, reference.totals, 'non-gold strategies must not create three different yield routes');
      assert.deepEqual(result.levels.map(x => [x.recipe && x.recipe.i, x.count]), reference.levels.map(x => [x.recipe && x.recipe.i, x.count]));
    }
  }
  for (let i = 1; i < rows.length; i++) assert.ok(rows[i].need >= rows[i - 1].need);
  // Rounding applies only to inferred values, never a future observation such as 255.
  const custom = JSON.parse(JSON.stringify(data));
  custom.meta.expModel.observations[0].exp = 255;
  const customModel = createModel(custom, catalog, () => ({}));
  assert.equal(customModel.expToNext(1), 255);
  custom.meta.expModel.observations[1].level = 1;
  assert.throws(() => createModel(custom, catalog, () => ({})), /Invalid experience observations/);
}
let cases = 0;
for (const server of catalog.servers) {
  const state = { serverId: server.id, settings: { basis: 'market', taxRate: .05 } };
  const model = createModel(data, catalog, () => state);
  for (const skill of catalog.skills) for (const strategy of ['gold', 'energy', 'effort']) for (const mode of ['low', 'mid', 'high']) {
    const r = model.analyze(skill.id, strategy, mode);
    assert.equal(r.gates.length, 4);
    assert.equal(r.levels.length, 49);
    assert.equal(r.totals.exp, 71730);
    assert.deepEqual(r.phases.map(p => p.exp), [36830, 34900]);
    for (const level of r.levels) if (level.econ) assert.equal(level.count, Math.ceil(level.need / level.econ.exp), 'new thresholds must drive actual crafting counts');
    // 有实测秒刷点配置的技艺（庖丁）由 GATHER_PLANS 指定路线，这里不按目录点推算
    if (strategy === 'energy' && mode === 'mid' && !(data.meta.gatherPlans || {})[skill.id]) {
      const gatherLevels = data.meta.gatherLevels || {};
      const gatherLevelOf = (x) => { for (const k of Object.keys(gatherLevels)) { if (String(x.name).indexOf(k) !== -1) return gatherLevels[k]; } return x.level; };
      const extras = (skill.type === 'gather' ? ((data.meta.gatherExtras || {})[skill.id] || []) : []);
      const pool = skill.type === 'gather'
        ? catalog.recipes.filter(x => x.kind === 'gather' && x.skillId === skill.id).concat(extras)
        : data.recipes.filter(x => x.s === skill.id);
      for (const level of r.levels) {
        // 精力→经验按实测比例：采集 40 精力=128 经验（3.2/精力），制造 1 精力=2 经验
        const rate = skill.type === 'gather' ? 3.2 : 2;
        const usable = pool.filter(x => skill.type === 'gather' ? gatherLevelOf(x) <= level.from : x.l <= level.from);
        if (!usable.length) continue;
        if (skill.type === 'gather') {
          // 采集按「当前最高可用采集点」走，不是最小精力
          const node = usable.slice().sort((a, b) => gatherLevelOf(b) - gatherLevelOf(a))[0];
          assert.equal(level.totalEnergy, Math.ceil(level.need / (node.energy * rate)) * node.energy, 'gather route uses the highest unlocked node');
        } else {
          const possible = usable.map(x => Math.ceil(level.need / (x.e * rate)) * x.e);
          assert.equal(level.totalEnergy, Math.min(...possible), 'minimum-energy choice must be absolute, independent of any quote or income ratio');
        }
      }
    }
    for (const row of r.routes.filter(x => x.kind === 'level')) assert.ok(!model.GATE_LEVELS.some(g => row.from < g && row.to > g));
    if (r.enough) {
      for (const k of ['profit', 'gateCost', 'total', 'energy', 'crafts', 'outValue']) { if (r.totals[k] == null) assert.ok(r.phases.some(p => p[k] == null)); else near(r.totals[k], r.phases[0][k] + r.phases[1][k]); }
    } else assert.equal(r.totals.total, null);
    cases++;
  }
  const summary = model.summary('gold');
  let missingSeen = false;
  for (const row of summary) { if (!row.enough) missingSeen = true; else assert.equal(missingSeen, false); }
  // 采集点有等级限制：采金目录最低 20 级，1–19 级无点可采；庖丁由实测秒刷点覆盖全等级
  assert.equal(model.analyze('caijin', 'energy').totals.missingLevels, 0, 'caijin nodes now cover every level');
  assert.equal(model.analyze('paoding', 'energy').totals.missingLevels, 0, 'paoding plan covers every level');
}
// Both browser bundles must contain the exact same model and expose working adapters.
const source = fs.readFileSync('miniapp/src/shared/breakthrough-model.js', 'utf8');
for (const base of ['assets', 'minitool/assets']) {
  assert.equal(fs.readFileSync(`${base}/breakthrough-model.js`, 'utf8'), source);
  const ctx = { window: { JX3Breakthrough: data, JX3Data: catalog, JX3Core: { Store: { state: { serverId: catalog.servers[0].id, settings: { basis: 'market', taxRate: .05 } } } } } };
  vm.runInNewContext(source, ctx);
  vm.runInNewContext(fs.readFileSync(`${base}/breakthrough.js`, 'utf8'), ctx);
  assert.equal(ctx.window.JX3BT.analyze('duanzao', 'gold').totals.exp, 71730);
  const bundle = { window: {} };
  vm.runInNewContext(fs.readFileSync(`${base}/breakthrough-data.js`, 'utf8'), bundle);
  assert.equal(JSON.stringify(bundle.window.JX3Breakthrough.meta.expModel), JSON.stringify(experienceModel));
}
console.log(`PASS: hand-calculated fixtures, missing quotes, gate boundaries, probability, ${cases} real-data cases and browser adapters.`);
