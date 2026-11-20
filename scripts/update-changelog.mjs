#!/usr/bin/env node
// 只维护全局 CHANGELOG.md；不修改任何通道的更新提示。
// 网页端更新说明见 content/updates/web.json，小程序/小工具各见自己的文件。
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

export function updateChangelog(root = process.cwd()) {
  const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  const fields = git(['log', '-z', '--no-merges', '-200', '--format=%H%x00%aI%x00%s%x00%b']).split('\0');
  const entries = [];
  for (let i = 0; i + 3 < fields.length; i += 4) {
    const [sha, at, subject, body] = fields.slice(i, i + 4);
    if (/^docs: update changelog\b/i.test(subject)) continue;
    const date = new Date(new Date(at).getTime() + 8 * 3600000).toISOString().slice(0, 10);
    const title = subject.replace(/^(?:feat|fix|docs|chore|refactor|test|ci|build|perf)(?:\([^)]*\))?!?:\s*/i, '');
    const notes = body.split('\n').map(line => line.replace(/^\s*[-*]\s*/, '').trim()).filter(Boolean);
    entries.push({ sha, date, title, notes });
  }
  if (!entries.length) throw new Error('No commits available for changelog');
  const escape = text => text.replace(/[\\`*_[\]<>]/g, '\\$&');
  const changelog = '# 更新日志\n\n由 GitHub Actions 根据最近 200 条提交自动维护；日期使用北京时间。价格更新也记录在此。\n\n' + entries.map(e =>
    `## ${e.date} · ${e.sha.slice(0, 7)}\n\n${escape(e.title)}\n` +
    (e.notes.length ? '\n' + e.notes.map(n => '- ' + escape(n)).join('\n') + '\n' : '')
  ).join('\n');
  fs.writeFileSync(`${root}/CHANGELOG.md`, changelog);
  return { entries: entries.length, latest: entries[0].sha };
}

if (process.argv[1] && process.argv[1].endsWith('update-changelog.mjs')) {
  const result = updateChangelog();
  console.log(`CHANGELOG.md: ${result.entries} commits; latest ${result.latest.slice(0, 7)}`);
}
