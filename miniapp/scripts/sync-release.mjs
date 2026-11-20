#!/usr/bin/env node
/** 只把小程序通道的发布说明复制进小程序源码；不读取网页/小工具说明。 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const source = path.join(root, '..', 'content', 'updates', 'miniapp.json');
const out = path.join(root, 'src', 'shared', 'release.json');
const data = JSON.parse(fs.readFileSync(source, 'utf8'));
if (data.channel !== 'miniapp') throw new Error('miniapp.json channel 必须是 miniapp');
const release = {
  channel: 'miniapp',
  version: String(data.version || ''),
  date: String(data.date || ''),
  title: String(data.title || ''),
  notes: (Array.isArray(data.notes) ? data.notes : []).slice(0, 6).map(String),
  history: (Array.isArray(data.history) ? data.history : []).slice(0, 6)
};
fs.writeFileSync(out, JSON.stringify(release, null, 2) + '\n');
console.log('小程序发布说明已同步：' + release.version + ' · ' + release.title);
