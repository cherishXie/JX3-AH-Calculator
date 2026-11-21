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
import { execFileSync } from 'node:child_process';

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

// 更新说明默认由最近提交自动生成：手工 notes 不跟着发版改，就会出现
// “每版都弹同一段内容”。需要人工措辞时，在 web.json 里加 "manual": true。
const PRICE_COMMIT = /^chore:\s*(?:update JX3BOX prices|价格机器人)/i;
const CHANGELOG_COMMIT = /^docs:\s*update changelog/i;
const PREFIX = /^(?:feat|fix|docs|chore|refactor|test|ci|build|perf|style|release)(?:\([^)]*\))?!?:\s*/i;

function recentTitles(limit) {
  let out = [];
  try {
    out = execFileSync('git', ['log', '-60', '--no-merges', '--pretty=format:%s'], { encoding: 'utf8' })
      .split('\n').map((s) => s.trim()).filter(Boolean);
  } catch (e) {
    out = [];
  }
  const seen = new Set();
  const titles = [];
  for (const subject of out) {
    if (PRICE_COMMIT.test(subject) || CHANGELOG_COMMIT.test(subject)) continue;
    const title = subject.replace(PREFIX, '').trim();
    if (!title || seen.has(title)) continue;
    seen.add(title);
    titles.push(title);
    if (titles.length >= limit) break;
  }
  return titles;
}

const manualOk = manual.manual === true && manual.title && Array.isArray(manual.notes) && manual.notes.length;
const autoTitles = manualOk ? [] : recentTitles(5);
const title = manualOk ? manual.title : (autoTitles[0] || manual.title || '网页端更新');
const notes = manualOk
  ? manual.notes
  : (autoTitles.length > 1 ? autoTitles.slice(1) : (Array.isArray(manual.notes) && manual.notes.length ? manual.notes : ['网页端已更新']));
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
  history: (manualOk
    ? (Array.isArray(manual.history) ? manual.history : [])
    : [{ version: version, date: String(date).slice(0, 10), title: title }].concat(Array.isArray(manual.history) ? manual.history : []))
    .filter((item, index, list) => list.findIndex((x) => x && x.title === item.title) === index)
    .slice(0, 6)
};

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(payload, null, 2) + '\n');
console.log(`web updates.json: ${version} · ${title}`);
