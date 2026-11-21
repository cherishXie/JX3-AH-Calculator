#!/usr/bin/env node
/**
 * 预计算浏览器走势数据（最近 7 个自然日）。
 *
 * 用法：
 *   node scripts/build-price-trends.mjs
 *   node scripts/build-price-trends.mjs --dry-run
 *   node scripts/build-price-trends.mjs --days 7
 *
 * 输出：
 *   data/price-trends/index.json
 *   data/price-trends/days/YYYY-MM-DD.json
 *   data/price-trends/servers/<serverId>/YYYY-MM-DD.json
 *
 * 行情更新会自动执行本脚本；build-site.sh 发布前也会重建，保证 dev/prod
 * 使用同一份预计算数据。原始 data/price-history 不变。
 */
import path from 'node:path';
import zlib from 'node:zlib';
import { buildPriceTrends, PRICE_TRENDS_MAX_DAYS } from './lib/price-trends.mjs';

function argValue(name) {
  const args = process.argv.slice(2);
  const prefix = `--${name}=`;
  const eq = args.find((arg) => arg.startsWith(prefix));
  if (eq) return eq.slice(prefix.length);
  const index = args.indexOf(`--${name}`);
  if (index >= 0) {
    const next = args[index + 1];
    if (next && !next.startsWith('--')) return next;
    return true;
  }
  return false;
}

function formatBytes(bytes) {
  if (!bytes) return '0 KB';
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(2)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function gzipBytes(texts) {
  const total = texts.reduce((sum, text) => sum + Buffer.byteLength(text), 0);
  if (!total) return 0;
  return zlib.gzipSync(Buffer.from(texts.join(''))).length;
}

const root = path.resolve(process.cwd());
const dryRun = !!argValue('dry-run');
const daysArg = argValue('days');
const maxDays = daysArg === false ? PRICE_TRENDS_MAX_DAYS : Number(daysArg);
const result = buildPriceTrends(root, { maxDays, dryRun });
const report = result.report;
const manifestGzip = gzipBytes([JSON.stringify(result.manifest)]);
const dayGzip = gzipBytes(Object.values(result.dayFiles));
const serverGzip = gzipBytes(Object.values(result.serverFiles));
const dayRuns = Object.keys(result.dayFiles).length;
const serverRuns = Object.keys(result.serverFiles).length;

console.log(`物价走势预计算：${report.days} 天 / ${report.points} 个快照点${dryRun ? '（dry-run）' : ''}`);
console.log(`  index.json            ${formatBytes(Buffer.byteLength(JSON.stringify(result.manifest, null, 2)))}`);
console.log(`  days/（区服趋势）     ${formatBytes(report.dayBytes)} · ${dayRuns} 个日文件 · gzip ${formatBytes(dayGzip)}`);
console.log(`  servers/（物价走势）  ${formatBytes(report.serverBytes)} · ${serverRuns} 个区服日文件 · gzip ${formatBytes(serverGzip)}`);
console.log(`  单服单日平均          ${formatBytes(report.serverAverageBytes)} · gzip 约 ${formatBytes(Math.round(serverGzip / Math.max(1, serverRuns)))}`);
console.log(`  单服 ${report.days} 天合计        ${formatBytes(report.serverAverageBytes * report.days)}（浏览器一次只加载当前区服）`);
console.log(`  原始 price-history    ${formatBytes(report.rawBytes)}（${report.droppedDays > 0 ? `已排除 ${report.droppedDays} 个超过 ${report.maxDays} 天的日期` : `最近 ${report.maxDays} 天`}）`);
console.log(`  本次写入 ${result.written} 个文件，清理 ${result.removed} 个过期文件。`);
