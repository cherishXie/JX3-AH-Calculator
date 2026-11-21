#!/usr/bin/env node
/* 走势数据浏览器加载器回归测试：node scripts/test-trends-loader.cjs */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const BASE = 'https://example.test/JX3-AH-Calculator/';
const DATES = ['2026-11-13', '2026-11-14', '2026-11-15', '2026-11-16', '2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20', '2026-11-21'];
const DATA = {
  skills: [{ id: 's1', name: '缝纫', color: '#111111' }],
  items: [
    { id: 'i1', name: '物品一', kind: 'product', skillId: 's1', tier: 4 },
    { id: 'i2', name: '材料一', kind: 'material', skillId: 's1', tier: 3 }
  ],
  stones: [{ level: 6, itemId: 'stone_6', name: '五行石（六级）' }],
  recipes: [{ skillId: 's1', materials: [{ item: 'i2', qty: 1 }], outputs: [{ item: 'i1', qty: 1 }] }]
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function priceSegment(date, index, extra) {
  const points = [{
    at: `${date}T09:00:00+08:00`,
    source: 'update',
    coverage: [2, 0, 0],
    prices: { i1: 100 + index, i2: 5 },
    quotes: { i1: 100 + index },
    stones: { 6: 500 + index },
    stonePrices: { 6: 500 + index },
    changed: 0
  }];
  (extra || []).forEach((point) => points.push(point));
  return { schemaVersion: 1, date, timezone: 'Asia/Shanghai', server: 's1', points };
}

function serverDay(date, index) {
  return {
    schemaVersion: 1,
    date,
    timezone: 'Asia/Shanghai',
    at: `${date}T09:00:00+08:00`,
    updatedAt: `${date}T09:00:00+08:00`,
    servers: {
      s1: [{
        at: `${date}T09:00:00+08:00`,
        source: 'update',
        coverage: [2, 0, 0],
        quotes: { i1: 100 + index },
        stones: { 6: 500 + index }
      }]
    }
  };
}

function rawDay(date, index) {
  return {
    schemaVersion: 2,
    date,
    itemCount: 2,
    base: {
      at: `${date}T09:00:00+08:00`,
      requested: ['s1'],
      source: 'update',
      coverage: { s1: [2, 0, 0] },
      catalogPrices: { i1: 10, i2: 5 },
      stoneCatalogPrices: { 6: 480 },
      prices: { s1: { i1: 100 + index } },
      stones: { s1: { 6: 500 + index } }
    },
    samples: []
  };
}

function buildManifest(generatedAt, extraTwentyFirst) {
  const days = DATES.map((date, index) => ({
    date,
    points: 1 + (date === '2026-11-21' && extraTwentyFirst ? 1 : 0),
    baseAt: `${date}T09:00:00+08:00`,
    lastAt: `${date}T09:00:00+08:00`,
    // 哈希模拟原始日内容：只有 11-21 追加了变化点，历史日期不变。
    hash: date === '2026-11-21' && extraTwentyFirst ? 'h2-2026-11-21' : `h1-${date}`,
    bytes: 100,
    serverBytes: 50,
    dayFile: `days/${date}.json`,
    serverFile: `servers/{server}/${date}.json`
  }));
  return {
    schemaVersion: 1,
    timezone: 'Asia/Shanghai',
    generatedAt,
    sourceUpdatedAt: `${DATES[DATES.length - 1]}T09:00:00+08:00`,
    catalogVersion: 'test',
    itemCount: 2,
    maxDays: 7,
    servers: [{ id: 's1', name: '测试服甲', region: '' }, { id: 's2', name: '测试服乙', region: '' }],
    days
  };
}

const files = Object.create(null);
function resetFiles(manifest, extraTwentyFirst) {
  Object.keys(files).forEach((key) => delete files[key]);
  files[BASE + 'price-trends/index.json'] = manifest;
  DATES.forEach((date, index) => {
    const extra = date === '2026-11-21' && extraTwentyFirst
      ? [{
          at: `${date}T10:00:00+08:00`,
          source: 'update',
          coverage: [2, 0, 0],
          prices: { i1: 120 + index },
          quotes: { i1: 120 + index },
          changed: 2
        }]
      : [];
    files[BASE + `price-trends/servers/s1/${date}.json`] = priceSegment(date, index, extra);
    files[BASE + `price-trends/servers/__catalog__/${date}.json`] = {
      schemaVersion: 1,
      date,
      timezone: 'Asia/Shanghai',
      server: '__catalog__',
      points: [{
        at: `${date}T09:00:00+08:00`,
        source: 'update',
        prices: { i1: 10, i2: 5 },
        stonePrices: { 6: 480 },
        changed: 0
      }]
    };
    files[BASE + `price-trends/days/${date}.json`] = serverDay(date, index);
    files[BASE + `price-history/days/${date}.json`] = rawDay(date, index);
  });
}

const fetchCalls = [];
const sandbox = {
  window: { JX3Data: DATA, console },
  document: { baseURI: BASE },
  location: { href: BASE, pathname: '/JX3-AH-Calculator/' },
  URL,
  console,
  setTimeout,
  clearTimeout,
  fetch: function (url) {
    fetchCalls.push(String(url));
    const hit = files[String(url)];
    if (!hit) {
      return Promise.resolve({
        ok: false,
        status: 404,
        json: function () { return Promise.reject(new Error('HTTP 404')); }
      });
    }
    return Promise.resolve({
      ok: true,
      status: 200,
      json: function () { return Promise.resolve(clone(hit)); }
    });
  }
};
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'assets/trends.js'), 'utf8'), sandbox, { filename: 'assets/trends.js' });
const T = sandbox.window.JX3Trends;
assert.ok(T, 'JX3Trends should be exported');

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || 5));
}

async function untilReady(fn, label) {
  for (let attempt = 0; attempt < 80; attempt++) {
    const result = fn();
    if (result && result.status === 'ready') return result;
    if (result && result.status === 'error') throw new Error(`${label}: ${result.error}`);
    await wait(5);
  }
  throw new Error(`${label}: 超时未 ready`);
}

(async function main() {
  resetFiles(buildManifest('g1', false));

  // 1. 物价走势：只拉当前区服的 7 天单服文件，不拉其他区服/原始文件。
  const first = await untilReady(function () {
    return T.view('s1', { from: '2026-11-13', to: '2026-11-21', mode: 'price' });
  }, '物价走势');
  assert.equal(first.mode, 'price');
  assert.equal(first.maxDays, 7);
  assert.equal(first.dates.length, 7, '最多 7 个自然日');
  assert.equal(first.dates[0], '2026-11-15');
  assert.equal(first.dates[6], '2026-11-21');
  assert.ok(first.points.length >= 7);
  assert.equal(first.points[0].prices.i1, 102);
  assert.equal(first.points[0].prices.i2, 5, '基准价回填有效价');
  assert.equal(first.points[0].quotes.i2, undefined, '本服报价只保留真实报价');
  const firstUrls = fetchCalls.slice();
  assert.ok(firstUrls.some((url) => url.includes('price-trends/index.json')));
  assert.ok(firstUrls.some((url) => url.includes('servers/s1/2026-11-21.json')));
  assert.ok(!firstUrls.some((url) => url.includes('2026-11-13')), '窗口外日期不应请求');
  assert.ok(!firstUrls.some((url) => url.includes('servers/s2/')), '单服走势不拉其他区服');
  assert.ok(!firstUrls.some((url) => url.includes('price-history/')), '走势图不拉原始数据');

  // 1b. 自定义区服：回退到 __catalog__ 的目录基准价序列。
  fetchCalls.length = 0;
  const custom = await untilReady(function () {
    return T.view('custom-server', { from: '2026-11-15', to: '2026-11-21', mode: 'price' });
  }, '自定义区服走势');
  assert.equal(custom.points[0].prices.i1, 10);
  assert.equal(custom.points[0].prices.i2, 5);
  assert.equal(custom.points[0].quotes.i1, undefined);
  assert.equal(custom.points[0].stonePrices['6'], 480);
  assert.ok(fetchCalls.some((url) => url.includes('servers/__catalog__/2026-11-21.json')));

  // 2. 行情更新：保留旧数据，只补变更的今天；未变化日期不重新请求。
  fetchCalls.length = 0;
  resetFiles(buildManifest('g2', true), true);
  T.invalidate();
  const stale = await untilReady(function () {
    return T.view('s1', { from: '2026-11-13', to: '2026-11-21', mode: 'price' });
  }, '更新后的物价走势');
  assert.ok(stale.points.length >= 7, '旧数据在后台更新期间仍可展示');
  await wait(30);
  let updated = null;
  for (let attempt = 0; attempt < 80; attempt++) {
    updated = T.view('s1', { from: '2026-11-13', to: '2026-11-21', mode: 'price' });
    if (updated.status === 'ready' && !updated.stale) break;
    await wait(5);
  }
  assert.equal(updated.status, 'ready');
  assert.equal(updated.stale, false);
  assert.equal(updated.points[updated.points.length - 1].prices.i1, 128);
  const updateUrls = fetchCalls.slice();
  assert.ok(updateUrls.some((url) => url.includes('price-trends/index.json')));
  assert.ok(updateUrls.some((url) => url.includes('servers/s1/2026-11-21.json')));
  assert.ok(!updateUrls.some((url) => url.includes('servers/s1/2026-11-15.json')), '未变化日期不重新下载');
  assert.ok(!updateUrls.some((url) => url.includes('servers/s1/2026-11-20.json')), '昨天数据不重新下载');

  // 3. 区服趋势：只拉全天区服日文件，不拉单服文件。
  fetchCalls.length = 0;
  const serverView = await untilReady(function () {
    return T.view('s1', { from: '2026-11-15', to: '2026-11-21', mode: 'server' });
  }, '区服趋势');
  assert.equal(serverView.mode, 'server');
  assert.equal(serverView.dates.length, 7);
  assert.ok(serverView.points.length >= 7);
  assert.equal(serverView.points[0].quotes.i1, 102);
  assert.ok(fetchCalls.some((url) => url.includes('price-trends/days/2026-11-21.json')));
  assert.ok(!fetchCalls.some((url) => url.includes('price-trends/servers/')), '区服趋势不拉单服文件');

  // 4. 原始数据按需加载：默认不请求 price-history/，点击后才拉。
  fetchCalls.length = 0;
  const rawBefore = T.rawView('s1', { from: '2026-11-15', to: '2026-11-21' });
  assert.equal(rawBefore.status, 'loading');
  const raw = await T.loadRaw('s1', { from: '2026-11-15', to: '2026-11-21' });
  assert.equal(raw.status, 'ready');
  assert.equal(raw.points.length >= 7, true);
  assert.equal(raw.points[0].catalog.i2, 5);
  assert.equal(raw.points[0].prices.i2, 5);
  assert.ok(fetchCalls.some((url) => url.includes('price-history/days/2026-11-21.json')));
  assert.ok(T.rawView('s1', { from: '2026-11-15', to: '2026-11-21' }).status === 'ready');

  console.log('PASS: trends loader incremental cache, 7-day cap, server/price split and lazy raw data.');
})().catch(function (err) {
  console.error(err && err.stack ? err.stack : err);
  process.exitCode = 1;
});
