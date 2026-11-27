#!/usr/bin/env node
/* 深度分析纯计算回归测试：node scripts/test-deep-analysis.cjs */
const assert = require('node:assert/strict');
const approx = (actual, expected, msg) => assert.ok(Math.abs(actual - expected) < 1e-9, (msg || '') + ' expected ' + expected + ', got ' + actual);
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const DATA = {
  skills: [
    { id: 'gather', name: '神农', type: 'gather' },
    { id: 'craft', name: '缝纫', type: 'craft' }
  ],
  tiers: [
    { id: 1, name: '凡品' },
    { id: 4, name: '精品' }
  ],
  items: [
    { id: 'raw', name: '草药', kind: 'material', skillId: 'gather', tier: 1, category: 'material' },
    { id: 'mid', name: '布料', kind: 'material', skillId: 'craft', tier: 2, category: 'material' },
    { id: 'fin', name: '成衣', kind: 'product', skillId: 'craft', tier: 4, category: 'equipment' },
    { id: 'base', name: '无报价物', kind: 'material', skillId: 'craft', tier: 1, category: 'material' },
    { id: 'junk', name: '目录物品', kind: 'product', skillId: 'craft', tier: 1, category: 'other' }
  ],
  recipes: [
    {
      id: 'g1', kind: 'gather', skillId: 'gather', name: '神农·草药',
      outputs: [{ item: 'raw', qty: 1 }], materials: []
    },
    {
      id: 'm1', kind: 'craft', skillId: 'craft', name: '成衣', level: 50, tier: 4, energy: 100,
      outputs: [{ item: 'fin', qty: 1 }],
      materials: [{ item: 'raw', qty: 1 }, { item: 'mid', qty: 1 }]
    },
    {
      id: 'm2', kind: 'craft', skillId: 'craft', name: '布料', level: 30, tier: 2, energy: 40,
      outputs: [{ item: 'mid', qty: 1 }],
      materials: [{ item: 'raw', qty: 2 }, { item: 'base', qty: 1 }]
    }
  ],
  servers: [{ id: 's1', name: '测试服' }],
  meta: { catalogVersion: 'test' }
};

function point(at, prices, quotes) {
  return { at, date: at.slice(0, 10), prices: Object.assign({}, prices), quotes: Object.assign({}, quotes) };
}

const points = [
  point('2026-11-20T23:00:00+08:00', { raw: 10, mid: 20, fin: 100, base: 5 }, { raw: 10, mid: 20, fin: 100 }),
  point('2026-11-21T23:00:00+08:00', { raw: 12, mid: 22, fin: 110, base: 6 }, { raw: 12, mid: 22, fin: 110 })
];

function load() {
  const window = { JX3Data: DATA };
  const context = { window, console, Date, Math, Number, Object, Array, String, isFinite, parseFloat, JSON };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'assets', 'deep.js'), 'utf8'), context);
  return window.JX3Deep;
}

const Deep = load();

// 1. 分类：采集产出 → 一线；被制造又被消耗 → 中间；最终产物 → 成品；目录物品不进入配方链。
const cat = Deep.catalog();
assert.equal(cat.items.raw.cls, 'raw');
assert.equal(cat.items.mid.cls, 'mid');
assert.equal(cat.items.fin.cls, 'fin');
assert.equal(cat.items.junk, undefined);
assert.equal(cat.items.base.cls, 'raw', '被配方消耗但未制造的上游原料算一线');
assert.equal(cat.list.length, 4);

// 2. 每日：只统计两端都有本服报价的物品；base 只有目录价，不能补位。
const day = Deep.analyze(points, { window: 'day' });
assert.equal(day.mode, 'day');
assert.equal(day.scope.catalog, 4);
assert.equal(day.overall.n, 3);
assert.equal(day.overall.up, 3);
assert.equal(day.overall.down, 0);
assert.equal(day.overall.flat, 0);
assert.equal(day.overall.upShare, 100);
assert.equal(day.categories.raw.n, 1);
assert.equal(day.categories.mid.n, 1);
assert.equal(day.categories.fin.n, 1);
approx(day.rows.find(r => r.id === 'raw').changePct, 20, 'raw daily');
approx(day.rows.find(r => r.id === 'fin').changePct, 10, 'fin daily');

// 3. 配方传导：成本 10+20=30 → 12+22=34（+13.33%），成品 +10%，传导差约 -3.33pp。
assert.equal(day.recipes.usable, 1);
const recipe = day.recipes.rows[0];
assert.equal(recipe.id, 'm1');
assert.ok(Math.abs(recipe.costChangePct - (34 / 30 - 1) * 100) < 1e-9);
assert.ok(Math.abs(recipe.productChangePct - 10) < 1e-9);
assert.ok(Math.abs(recipe.spread - (-3.3333333333333335)) < 1e-9);
assert.equal(day.recipes.squeezed, 1);
assert.equal(day.recipes.improved, 0);
assert.equal(day.recipes.sameDirRate, 100, '成本与成品同向上涨');

// 4. 结论可读：至少有温度/上下游/配方传导三条。
assert.ok(day.insights.length >= 3);
assert.ok(day.insights.some(i => i.title === '上游 vs 成品'));
assert.ok(day.strategies, '每日也应生成策略结构');
assert.ok(Array.isArray(day.strategies.buy));
assert.ok(Array.isArray(day.strategies.listing));
assert.ok(day.rows.every(r => r.p50 > 0 && r.coverage > 0 && r.position >= 0 && r.position <= 1));
assert.equal(day.taxRate, 0.05, '默认税率 5%');

// 5. 周口径：逐物品取窗口内首个报价，允许覆盖天数不同。
const weekPoints = [
  point('2026-11-19T23:00:00+08:00', { raw: 10, mid: 20, fin: 100 }, { raw: 10, mid: 20 }),
  point('2026-11-20T23:00:00+08:00', { raw: 11, mid: 21, fin: 105 }, { raw: 11, mid: 21, fin: 105 }),
  point('2026-11-21T23:00:00+08:00', { raw: 12, mid: 22, fin: 110 }, { raw: 12, mid: 22, fin: 110 })
];
const week = Deep.analyze(weekPoints, { window: 'week' });
assert.equal(week.mode, 'week');
assert.equal(week.categories.fin.n, 1);
assert.equal(week.rows.find(r => r.id === 'fin').spanDays, 2);
assert.equal(week.rows.find(r => r.id === 'fin').start, 105, '周口径取首个有报价点，而不是窗口第一天');
assert.ok(week.strategies.skills.length >= 2, '应按技艺分组');
assert.ok(week.strategies.skills.every(s => s.best), '每个有样本的技艺都应有最佳物品');
assert.ok(week.strategies.regime.label);
assert.equal(week.strategies.taxRate, 0.05);
assert.equal(Deep._test.percentile([1, 2, 3, 4], 0.5), 2.5);

// 6. 只有一天时自动降级为日内口径，而不是报错。
const intraday = Deep.analyze([
  point('2026-11-21T09:00:00+08:00', { raw: 10, mid: 20, fin: 100 }, { raw: 10, mid: 20, fin: 100 }),
  point('2026-11-21T21:00:00+08:00', { raw: 11, mid: 20, fin: 99 }, { raw: 11, mid: 20, fin: 99 })
], { window: 'day' });
assert.equal(intraday.mode, 'intraday');
approx(intraday.rows.find(r => r.id === 'raw').changePct, 10, 'raw intraday');
approx(intraday.rows.find(r => r.id === 'fin').changePct, -1, 'fin intraday');

// 7. 空数据不抛错。
const empty = Deep.analyze([], { window: 'day' });
assert.equal(empty.rows.length, 0);
assert.equal(empty.overall.n, 0);
assert.equal(empty.insights.length, 0);
assert.equal(empty.strategies, null);

console.log('PASS: deep analysis classification, daily/weekly windows, recipe transmission, intraday fallback.');
