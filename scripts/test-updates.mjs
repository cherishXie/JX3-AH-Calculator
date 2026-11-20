import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
for (const channel of ['web', 'miniapp', 'minitool']) {
  const data = JSON.parse(fs.readFileSync(path.join(root, 'content', 'updates', channel + '.json'), 'utf8'));
  assert.equal(data.channel, channel, channel + ' channel mismatch');
  assert.ok(data.title && Array.isArray(data.notes), channel + ' missing notes');
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'jx3-updates-'));
try {
  fs.mkdirSync(path.join(tmp, 'content', 'updates'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'content', 'updates', 'web.json'), JSON.stringify({
    channel: 'web', title: '网页专用更新', notes: ['只属于网页'], history: []
  }));
  fs.writeFileSync(path.join(tmp, 'content', 'updates', 'miniapp.json'), JSON.stringify({
    channel: 'miniapp', title: '小程序专用更新', notes: ['不应进入网页'], history: []
  }));
  fs.writeFileSync(path.join(tmp, 'content', 'updates', 'minitool.json'), JSON.stringify({
    channel: 'minitool', title: '小工具专用更新', notes: ['不应进入网页'], history: []
  }));
  const out = path.join(tmp, 'updates.json');
  execFileSync(process.execPath, [path.join(root, 'scripts', 'make-updates.mjs'), 'web', 'abc123', '2026-11-20', out], { cwd: tmp, stdio: 'ignore' });
  const data = JSON.parse(fs.readFileSync(out, 'utf8'));
  assert.equal(data.channel, 'web');
  assert.equal(data.title, '网页专用更新');
  assert.deepEqual(data.notes, ['只属于网页']);
  assert.equal(data.appVersion, 'abc123');
  assert.equal(data.latest, 'abc123-r');
  assert.ok(!JSON.stringify(data).includes('不应进入网页'));
  console.log('PASS: web update payload reads only web channel; miniapp/minitool notes excluded.');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
