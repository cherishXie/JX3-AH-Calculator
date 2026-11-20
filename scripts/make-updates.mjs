#!/usr/bin/env node
/**
 * 生成网页端 PWA 的 _site/updates.json（只读 content/updates/web.json）。
 *
 * 小程序、小工具使用各自的 content/updates/*.json，不会影响网页更新提示。
 *
 * 用法：node scripts/make-updates.mjs web <shellVersion> <date> <out>
 */
import fs from 'node:fs';
import path from 'node:path';

const [, , channelArg, versionArg, dateArg, outArg] = process.argv;
const channel = channelArg || 'web';
const version = versionArg || 'dev';
const date = dateArg || new Date().toISOString();
const out = outArg || '_site/updates.json';

if (channel !== 'web') {
  throw new Error('网页端更新只使用 web 通道；小程序/小工具请使用各自构建流程');
}

let manual = {};
try {
  manual = JSON.parse(fs.readFileSync(path.join('content', 'updates', 'web.json'), 'utf8'));
} catch (e) {
  manual = {};
}
if (manual.channel && manual.channel !== 'web') {
  throw new Error('content/updates/web.json 的 channel 必须是 web');
}

const title = manual.title || '网页端更新';
const notes = Array.isArray(manual.notes) && manual.notes.length
  ? manual.notes
  : ['网页端已更新'];
const payload = {
  channel: 'web',
  // latest 是“发布 ID”，故意与 appVersion 区分：
  // 旧版 PWA 逻辑用 latest 对比页面版本，必须能感知到新版本。
  latest: version + '-r',
  appVersion: version,
  version,
  date,
  title,
  notes: notes.slice(0, 4).map(String),
  history: Array.isArray(manual.history) ? manual.history.slice(0, 6) : []
};

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(payload, null, 2) + '\n');
console.log(`web updates.json: ${version} · ${title}`);
