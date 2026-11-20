#!/usr/bin/env node
/**
 * 把 data/price-history 最近 N 天写入微信云数据库 prices 集合：
 *   prices/history_YYYY-MM-DD  每天的全部节点（base + samples）
 *   prices/history_meta        日期索引/更新时间
 *
 * 复用现有 prices 集合（安全规则 read:true / write:false），不新建集合。
 * 每次都覆盖最近 7 天，保证首次部署也能补齐历史。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '..', '..');
const sourceDir = path.join(repo, 'data', 'price-history');
const APPID = (process.env.WX_APPID || '').trim();
const SECRET = (process.env.WX_APPSECRET || '').trim();
const ENV_ID = (process.env.TCB_ENV_ID || '').trim();
const RETENTION_DAYS = 7;
const MAX_DAY_BYTES = 900 * 1024;

if (!APPID || !SECRET || !ENV_ID) {
  console.log('WX_APPID / WX_APPSECRET / TCB_ENV_ID 未配置，跳过趋势历史同步。');
  process.exit(0);
}
if (!fs.existsSync(path.join(sourceDir, 'index.json'))) {
  throw new Error('缺少 data/price-history/index.json');
}

const index = JSON.parse(fs.readFileSync(path.join(sourceDir, 'index.json'), 'utf8'));
const all = (index.days || []).slice().sort(function (a, b) { return String(a.date).localeCompare(String(b.date)); });
if (!all.length) {
  console.log('物价历史为空，跳过。');
  process.exit(0);
}
const picked = all.slice(-RETENTION_DAYS);
const days = [];
for (const entry of picked) {
  const file = path.join(sourceDir, entry.file || ('days/' + entry.date + '.json'));
  if (!fs.existsSync(file)) throw new Error('缺少历史文件 ' + file);
  const day = JSON.parse(fs.readFileSync(file, 'utf8'));
  const bytes = Buffer.byteLength(JSON.stringify(day));
  if (bytes > MAX_DAY_BYTES) throw new Error(entry.date + ' 历史超过 900KB，请先压缩');
  days.push({ date: entry.date, day: day, bytes: bytes });
}

async function postJson(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch (e) {
    throw new Error('接口返回非 JSON（HTTP ' + res.status + '）：' + text.slice(0, 200));
  }
  return json;
}

const tokenJson = await postJson('https://api.weixin.qq.com/cgi-bin/stable_token', {
  grant_type: 'client_credential',
  appid: APPID,
  secret: SECRET,
  force_refresh: false
});
if (!tokenJson.access_token) throw new Error('获取 access_token 失败：' + JSON.stringify(tokenJson));
const token = tokenJson.access_token;

async function setDoc(docId, data) {
  const query = 'db.collection("prices").doc("' + docId + '").set({data:' + JSON.stringify(data) + '})';
  const out = await postJson(
    'https://api.weixin.qq.com/tcb/databaseupdate?access_token=' + encodeURIComponent(token),
    { env: ENV_ID, query: query }
  );
  if (Number(out.errcode) !== 0) {
    throw new Error(docId + ' 写入失败：' + JSON.stringify(out));
  }
  console.log('  ✓ prices/' + docId + '  ' + out.matched + '/' + out.modified);
}

for (const item of days) {
  await setDoc('history_' + item.date, item.day);
}

const meta = {
  schema: 1,
  updatedAt: index.updatedAt,
  catalogVersion: index.catalogVersion,
  generatedAt: new Date().toISOString(),
  retentionDays: RETENTION_DAYS,
  servers: index.servers || [],
  days: days.map(function (item) {
    return {
      date: item.date,
      points: 1 + ((item.day.samples || []).length),
      itemCount: item.day.itemCount || 0,
      bytes: item.bytes
    };
  })
};
await setDoc('history_meta', meta);

console.log('云数据库趋势历史已更新：' + days.length + ' 天 / ' + days.map(function (d) { return d.date; }).join(', '));
