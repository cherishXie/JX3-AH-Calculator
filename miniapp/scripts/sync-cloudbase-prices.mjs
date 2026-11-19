#!/usr/bin/env node
/**
 * 把 dist/remote/prices.json 写入微信云开发数据库 prices/current。
 *
 * 必需环境变量：
 *   WX_APPID      小程序 AppID
 *   WX_APPSECRET  小程序 AppSecret
 *   TCB_ENV_ID    云开发环境 ID
 *
 * 用法：
 *   node scripts/sync-cloudbase-prices.mjs
 *
 * 说明：
 * - 使用 stable_token，避免和其他服务互踢。
 * - databaseupdate 的 set 会在文档不存在时创建、存在时整体替换。
 * - 云数据库集合 prices 需提前创建；安全规则建议 { "read": true, "write": false }。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const miniapp = path.resolve(here, '..');
const payloadPath = path.join(miniapp, 'dist', 'remote', 'prices.json');

const APPID = (process.env.WX_APPID || '').trim();
const SECRET = (process.env.WX_APPSECRET || '').trim();
const ENV_ID = (process.env.TCB_ENV_ID || '').trim();

if (!APPID || !SECRET || !ENV_ID) {
  console.log('WX_APPID / WX_APPSECRET / TCB_ENV_ID 未配置，跳过云同步。');
  process.exit(0);
}
if (!fs.existsSync(payloadPath)) {
  throw new Error('未找到 ' + payloadPath + '，请先运行 build-remote-prices.mjs');
}

const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));
if (!payload || Number(payload.schema) !== 1) throw new Error('prices.json schema 不合法');

async function postJson(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch (e) {
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
if (!tokenJson.access_token) {
  throw new Error('获取 access_token 失败：' + JSON.stringify(tokenJson));
}

const query = 'db.collection("prices").doc("current").set({data:' + JSON.stringify(payload) + '})';
const out = await postJson(
  'https://api.weixin.qq.com/tcb/databaseupdate?access_token=' + encodeURIComponent(tokenJson.access_token),
  { env: ENV_ID, query: query }
);
if (Number(out.errcode) !== 0) {
  throw new Error('云数据库写入失败：' + JSON.stringify(out));
}

console.log('云数据库 prices/current 已更新');
console.log('catalog', payload.catalogVersion, payload.priceUpdatedAt);
console.log('matched', out.matched, 'modified', out.modified, 'id', out.id || 'current');
