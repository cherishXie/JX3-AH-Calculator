import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { updateChangelog } from './update-changelog.mjs';

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'jx3-changelog-'));
const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const commit = message => { git(['add', '.']); git(['commit', '-m', message]); return git(['rev-parse', 'HEAD']); };
try {
  git(['init', '-b', 'main']);
  git(['config', 'user.name', 'Changelog test']);
  git(['config', 'user.email', 'test@example.invalid']);
  fs.mkdirSync(path.join(root, 'content', 'updates'), { recursive: true });
  fs.writeFileSync(path.join(root, 'content', 'updates', 'web.json'), JSON.stringify({ channel: 'web', title: '网页手写说明', notes: ['只影响网页'] }));
  fs.writeFileSync(path.join(root, 'content', 'updates', 'miniapp.json'), JSON.stringify({ channel: 'miniapp', title: '小程序手写说明', notes: ['不影响网页'] }));
  commit('feat: 网页功能');
  updateChangelog(root);
  const changelog = () => fs.readFileSync(path.join(root, 'CHANGELOG.md'), 'utf8');
  assert.match(changelog(), /网页功能/);
  assert.equal(fs.readFileSync(path.join(root, 'content', 'updates', 'web.json'), 'utf8'), JSON.stringify({ channel: 'web', title: '网页手写说明', notes: ['只影响网页'] }));
  assert.equal(fs.readFileSync(path.join(root, 'content', 'updates', 'miniapp.json'), 'utf8'), JSON.stringify({ channel: 'miniapp', title: '小程序手写说明', notes: ['不影响网页'] }));
  assert.equal(fs.existsSync(path.join(root, 'content', 'updates.json')), false, '不得再写旧的共享 updates.json');
  const stable = changelog();
  updateChangelog(root);
  assert.equal(changelog(), stable, '重复运行应保持稳定');
  commit('docs: update changelog');
  updateChangelog(root);
  assert.equal(changelog(), stable, 'changelog 机器人提交不应制造循环');
  fs.writeFileSync(path.join(root, 'price.json'), '{"price":42}');
  commit('chore: update JX3BOX prices');
  updateChangelog(root);
  assert.match(changelog(), /update JX3BOX prices/);
  assert.equal(fs.readFileSync(path.join(root, 'content', 'updates', 'web.json'), 'utf8'), JSON.stringify({ channel: 'web', title: '网页手写说明', notes: ['只影响网页'] }), '价格更新不得改网页说明');
  console.log('PASS: changelog only, channels untouched, idempotent, bot loop safe.');
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}
