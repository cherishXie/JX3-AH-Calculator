#!/usr/bin/env node
/**
 * 构建期审计数据：把 price-history 的 30 个快照 + data.js + access-data.js 算成
 * assets/audit-data.js，供 Web 的 /analysis、/prices、/skills、/overview 直接查表。
 *
 *   node scripts/build-audit-data.mjs
 *
 * 口径：购买优先、缺货自造；商店辅料按目录价；成品/非商店材料缺报价不算落地。
 * 这是一次构建期计算，不在浏览器里跑 154×17×30。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TAX = 0.05;
const daysDir = path.join(ROOT, 'data', 'price-history', 'days');

function clone(v) { return v == null ? v : JSON.parse(JSON.stringify(v)); }
function loadVm(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window;
}
const W = loadVm('assets/data.js');
const DATA = W.JX3Data;
W.JX3Core = { U: { fmt: (v, d) => Number(v).toFixed(d == null ? 2 : d) } };
const profitSandbox = { window: W };
vm.createContext(profitSandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/access-data.js'), 'utf8'), profitSandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/profit.js'), 'utf8'), profitSandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/landability.js'), 'utf8'), profitSandbox);
const P = W.JX3Profit;
const L = W.JX3Landability;
const A = W.JX3Access || { items: {} };
const itemById = {};
(DATA.items || []).forEach((i) => { itemById[i.id] = i; });
const recipes = (DATA.recipes || []).filter((r) => r.kind === 'craft');
const recipeById = {};
recipes.forEach((r) => { recipeById[r.id] = r; });
const recipeByOutput = {};
recipes.forEach((r) => { (r.outputs || []).forEach((o) => { if (!recipeByOutput[o.item]) recipeByOutput[o.item] = r; }); });
const servers = DATA.servers || [];

function applyFlat(target, delta) {
  for (const [k, v] of Object.entries(delta || {})) {
    if (v == null) delete target[k];
    else target[k] = Number(v);
  }
}
function applyServer(target, delta) {
  for (const [sid, bucket] of Object.entries(delta || {})) {
    if (!target[sid]) target[sid] = {};
    for (const [iid, v] of Object.entries(bucket || {})) {
      if (v == null) delete target[sid][iid];
      else target[sid][iid] = Number(v);
    }
    if (!Object.keys(target[sid]).length) delete target[sid];
  }
}
function readPoints() {
  const files = fs.readdirSync(daysDir).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
  const points = [];
  for (const file of files) {
    const day = JSON.parse(fs.readFileSync(path.join(daysDir, file), 'utf8'));
    const prices = clone(day.base.prices || {});
    const catalog = clone(day.base.catalogPrices || {});
    points.push({ at: day.base.at, date: day.date, prices: clone(prices), catalog: clone(catalog) });
    for (const s of day.samples || []) {
      applyServer(prices, s.prices);
      applyFlat(catalog, s.catalogPrices);
      points.push({ at: s.at, date: day.date, prices: clone(prices), catalog: clone(catalog) });
    }
  }
  points.sort((a, b) => a.at.localeCompare(b.at));
  return points;
}
function pointForServer(point, sid) {
  return { at: point.at, quotes: point.prices[sid] || {}, catalog: point.catalog || {} };
}
function cvOf(values) {
  const v = values.filter((x) => Number.isFinite(x) && x > 0);
  if (v.length < 2) return null;
  const mean = v.reduce((a, b) => a + b, 0) / v.length;
  if (!mean) return null;
  const sd = Math.sqrt(v.reduce((a, b) => a + (b - mean) ** 2, 0) / v.length);
  return sd / mean;
}
function median(values) {
  const v = values.filter((x) => Number.isFinite(x)).sort((a, b) => a - b);
  if (!v.length) return null;
  const mid = Math.floor(v.length / 2);
  return v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2;
}
function paperEval(recipe, point) {
  if (!recipe || !recipe.outputs || !recipe.outputs.length) return { perE: null, profit: null };
  const priceOf = (id) => {
    const q = point.quotes && point.quotes[id];
    if (Number(q) > 0) return Number(q);
    const c = point.catalog && point.catalog[id];
    if (Number(c) > 0) return Number(c);
    return Number(itemById[id] && itemById[id].base) || 0;
  };
  let cost = Number(recipe.fee) || 0;
  for (const m of recipe.materials || []) cost += priceOf(m.item) * Number(m.qty);
  let gross = 0;
  for (const o of recipe.outputs || []) gross += priceOf(o.item) * Number(o.qty) * Number(o.chance == null ? 1 : o.chance);
  const profit = gross * (1 - TAX) - cost;
  const e = Number(recipe.energy) || 0;
  return { perE: e > 0 ? profit / e : null, profit: profit };
}
function outputOf(recipe) {
  return (recipe.outputs || [])[0] || null;
}
function blockedByOf(recipe, point) {
  const out = outputOf(recipe);
  const arr = [];
  if (!out) return arr;
  if (!(Number(point.quotes && point.quotes[out.item]) > 0)) arr.push(itemById[out.item] ? itemById[out.item].name : out.item);
  for (const m of recipe.materials || []) {
    if (Number(point.quotes && point.quotes[m.item]) > 0) continue;
    const a = A.items && A.items[m.item];
    if (a && (a.t === 'vendor' || a.v)) continue;
    const sub = recipeByOutput[m.item];
    if (sub) { arr.push((itemById[m.item] ? itemById[m.item].name : m.item) + '（需自产）'); continue; }
    arr.push(itemById[m.item] ? itemById[m.item].name : m.item);
  }
  return [...new Set(arr)];
}
function main() {
  const points = readPoints();
  if (!points.length) throw new Error('没有 price-history 快照，先跑 backfill');
  const last = points[points.length - 1];
  // 预计算每个 server/point 的 evaluate
  const evals = {}; // sid -> pointIndex -> recipeId -> ev
  for (const sid of servers.map((s) => s.id)) {
    evals[sid] = [];
    points.forEach((p, t) => {
      const point = pointForServer(p, sid);
      const m = {};
      for (const r of recipes) {
        const out = outputOf(r);
        if (!out) continue;
        m[r.id] = P.evaluate(out.item, point, TAX);
      }
      evals[sid].push(m);
    });
  }
  // 每个产物在每个服最后节点报价覆盖
  const outCov = {};
  for (const r of recipes) {
    const out = outputOf(r);
    if (!out) continue;
    let n = 0;
    for (const s of servers) {
      const q = last.prices[s.id] && last.prices[s.id][out.item];
      if (Number(q) > 0) n++;
    }
    outCov[r.id] = n;
  }
  const audit = { meta: { generatedAt: last.at, snapshots: points.length, servers: servers.length, tax: TAX, policy: 'vendor-first' }, servers: {} };
  for (const s of servers) {
    const sid = s.id;
    const server = { name: s.name, counts: { A: 0, B: 0, C: 0, feasible: 0, positive: 0 }, countsDefault: { A: 0, B: 0, C: 0, feasible: 0, positive: 0 }, countsLocal: { A: 0, B: 0, C: 0, feasible: 0, positive: 0 }, items: { quote: 0, vendor: 0, base: 0, missing: 0 }, recipes: {} };
    for (const it of DATA.items || []) {
      const q = last.prices[sid] && last.prices[sid][it.id];
      if (Number(q) > 0) server.items.quote++;
      else if (A.items && A.items[it.id] && (A.items[it.id].t === 'vendor' || A.items[it.id].v)) server.items.vendor++;
      else if (Number(it.base) > 0) server.items.base++;
      else server.items.missing++;
    }
    for (const r of recipes) {
      const out = outputOf(r);
      if (!out) continue;
      const rows = evals[sid].map((m) => m[r.id]).filter(Boolean);
      const ok = rows.filter((ev) => ev.ok);
      const strictOk = ok.filter((ev) => !ev.selfCraft);
      const perEs = ok.map((ev) => ev.perEnergy).filter((x) => Number.isFinite(x));
      const feas = rows.length ? strictOk.length / rows.length : 0;
      const feasDefault = rows.length ? ok.length / rows.length : 0;
      const cur = rows[rows.length - 1] || null;
      const outPrices = points.map((p) => p.prices[sid] && p.prices[sid][out.item]).filter((x) => Number(x) > 0).map(Number);
      const persistence = points.length ? outPrices.length / points.length : 0;
      const cv = cvOf(outPrices);
      const med = median(perEs);
      const stats = { feasibility: feas, outCov: outCov[r.id] || 0, persistence, cv, medianPerE: med };
      const g = L.grade(r, cur, stats, { allowSelfCraft: false });
      const statsDefault = { feasibility: feasDefault, outCov: outCov[r.id] || 0, persistence, cv, medianPerE: med };
      const gd = L.grade(r, cur, statsDefault, { allowSelfCraft: true });
      const gl = L.grade(r, cur, stats, { allowSelfCraft: true, localOnly: true });
      const gld = L.grade(r, cur, statsDefault, { allowSelfCraft: true, localOnly: true });
      const paper = paperEval(r, pointForServer(last, sid));
      const rec = {
        g: g.grade,
        gd: gd.grade,
        gl: gl.grade,
        gld: gld.grade,
        p: cur && cur.ok && Number.isFinite(cur.perEnergy) ? Math.round(cur.perEnergy * 100) / 100 : null,
        pp: Number.isFinite(paper.perE) ? Math.round(paper.perE * 100) / 100 : null,
        f: Math.round(feas * 100) / 100,
        oc: outCov[r.id] || 0,
        op: Math.round(persistence * 100) / 100,
        cv: Number.isFinite(cv) ? Math.round(cv * 1000) / 1000 : null,
        mp: Number.isFinite(med) ? Math.round(med * 100) / 100 : null,
        sc: !!g.selfCraft,
        e: Number(r.energy) || 0,
        pr: cur && cur.ok && Number.isFinite(cur.profit) ? Math.round(cur.profit) : null,
        b: blockedByOf(r, pointForServer(last, sid)),
        t: g.thinReasons || [],
        tl: gl.thinReasons || []
      };
      server.recipes[r.id] = rec;
      server.counts[g.grade]++;
      server.countsDefault[gd.grade]++;
      server.countsLocal[gl.grade]++;
      if (cur && cur.ok && !cur.selfCraft) server.counts.feasible++;
      if (cur && cur.ok && !cur.selfCraft && cur.perEnergy > 0) server.counts.positive++;
      if (cur && cur.ok) server.countsDefault.feasible++;
      if (cur && cur.ok && cur.perEnergy > 0) server.countsDefault.positive++;
      if (cur && cur.ok) server.countsLocal.feasible++;
      if (cur && cur.ok && cur.perEnergy > 0) server.countsLocal.positive++;
    }
    audit.servers[sid] = server;
  }
  const text = '/* 构建期审计数据 · 由 scripts/build-audit-data.mjs 生成 */\nwindow.JX3Audit = ' + JSON.stringify(audit) + ';\n';
  fs.writeFileSync(path.join(ROOT, 'assets/audit-data.js'), text);
  console.log('wrote assets/audit-data.js', JSON.stringify({ snapshots: points.length, servers: servers.length }));
  console.log('梦江南', audit.servers.s_mengjiangnan.counts);
  console.log('items', audit.servers.s_mengjiangnan.items);
}
main();
