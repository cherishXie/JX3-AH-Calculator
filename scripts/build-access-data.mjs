#!/usr/bin/env node
/**
 * 生成 assets/access-data.js：物品获取方式/商店/硬缺口/稀有来源。
 * 数据源：assets/data.js + scripts/item-access-source.json。
 * 该文件只做静态标签；商店价仍以目录 base 为准。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcPath = path.join(ROOT, 'assets/data.js');
const src = fs.readFileSync(srcPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const DATA = sandbox.window.JX3Data;
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/item-access-source.json'), 'utf8'));

const gatherOut = new Set();
for (const r of DATA.recipes || []) {
  if (r.kind !== 'gather') continue;
  for (const o of r.outputs || []) gatherOut.add(o.item);
}
const craftOut = new Set();
for (const r of DATA.recipes || []) {
  if (r.kind !== 'craft') continue;
  for (const o of r.outputs || []) craftOut.add(o.item);
}
const vendor = new Set(cfg.vendor || []);
const hard = cfg.hard || {};
const rare = cfg.rare || {};
const items = {};
for (const it of DATA.items || []) {
  let type = 'unknown';
  let source = '交易行/采集';
  let vendorFlag = false;
  if (hard[it.id]) { type = 'hard'; source = hard[it.id].source || '无稳定来源'; }
  else if (vendor.has(it.id)) { type = 'vendor'; vendorFlag = true; source = cfg.vendorSources[it.id] || '主城商店'; }
  else if (rare[it.id]) { type = 'rare'; source = rare[it.id].source || '稀有来源'; }
  else if (gatherOut.has(it.id)) { type = 'gather'; source = '采集'; }
  else if (craftOut.has(it.id) || it.kind === 'product') { type = 'craft'; source = '制造'; }
  items[it.id] = { t: type, s: source, v: vendorFlag ? 1 : 0 };
}
const out = { meta: { verifiedAt: cfg.verifiedAt || '', policy: cfg.policy || 'vendor-first' }, items };
const text = '/* 物品获取方式 · 由 scripts/build-access-data.mjs 生成 */\nwindow.JX3Access = ' + JSON.stringify(out, null, 1) + ';\n';
fs.writeFileSync(path.join(ROOT, 'assets/access-data.js'), text);
console.log('wrote assets/access-data.js', Object.keys(items).length, 'items');
