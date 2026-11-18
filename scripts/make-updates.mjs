#!/usr/bin/env node
/**
 * 生成 GitHub Pages 上的 updates.json。
 *
 * - 手动更新说明放在 content/updates.json（title / notes / history）。
 * - 每日价格机器人提交时自动换成“价格数据更新”文案。
 * - 版本号由 build-site.sh 传入，通常是当前 commit 短 SHA。
 *
 * 用法：node scripts/make-updates.mjs <version> <date> <out>
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const [, , versionArg, dateArg, outArg] = process.argv;
const version = versionArg || 'dev';
const date = dateArg || new Date().toISOString();
const out = outArg || '_site/updates.json';

function git(command, fallback) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return fallback;
  }
}

let manual = {};
try {
  manual = JSON.parse(fs.readFileSync('content/updates.json', 'utf8'));
} catch {
  manual = {};
}

const subject = git('git log -1 --pretty=%s', '');
const isPriceUpdate = /update\s+JX3BOX\s+prices/i.test(subject);

const title = isPriceUpdate
  ? '价格数据已更新'
  : (manual.title || subject || '体验与数据更新');

const notes = isPriceUpdate
  ? [
      '同步 JX3BOX 全服拍卖价',
      '重算制造配方成本与精力收益',
      '无报价物品回退梦江南示例价'
    ]
  : (Array.isArray(manual.notes) && manual.notes.length
      ? manual.notes
      : ['修复已知问题', '优化加载与交互']);

const payload = {
  latest: version,
  version,
  date,
  title,
  notes: notes.slice(0, 4).map(String),
  history: Array.isArray(manual.history) ? manual.history.slice(0, 6) : []
};

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(payload, null, 2) + '\n');
console.log(`updates.json: ${version} · ${title}`);
