#!/usr/bin/env node
/**
 * 微信小程序构建产物静态验收。
 *
 * 校验项来自微信官方规范：
 * - project.config.json 必须有有效 AppID（touristappid 视为无效）
 * - tabBar 2–5 个，图标 ≤40KB，建议 81×81
 * - 主包 ≤2MB
 * - 页面 js/json/wxml 完整
 * - es6 / enhance 同开同关
 * - 本项目约定：12 个主包页面 + 1 个行情目录分包、4 Tab、无网络请求 API
 *
 * 用法：npm run verify:weapp
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist', 'weapp');
const problems = [];
const passes = [];

function pass(msg) { passes.push(msg); }
function fail(msg) { problems.push(msg); }

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    fail('JSON 读取失败：' + path.relative(root, file) + '（' + e.message + '）');
    return null;
  }
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs, out);
    else out.push(abs);
  }
  return out;
}

function pngSize(file) {
  const b = fs.readFileSync(file);
  if (b.length < 24 || b.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function mb(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

if (!fs.existsSync(dist)) {
  console.error('缺少 dist/weapp，请先执行：npm run build:weapp');
  process.exit(1);
}

const project = readJson(path.join(root, 'project.config.json'));
const app = readJson(path.join(dist, 'app.json'));

if (project) {
  const appid = String(project.appid || '');
  if (appid === 'touristappid' || !/^wx[0-9a-f]{16}$/i.test(appid)) {
    fail('project.config.json 的 appid 无效（当前：' + (appid || '空') + '）');
  } else {
    pass('AppID 有效：' + appid.slice(0, 6) + '…' + appid.slice(-4));
  }

  const rootDir = path.resolve(root, project.miniprogramRoot || '.');
  if (rootDir !== dist) {
    fail('miniprogramRoot 与预期不一致：' + project.miniprogramRoot + '（预期 dist/weapp/）');
  } else {
    pass('小程序根目录：dist/weapp/');
  }

  if (!project.libVersion) fail('project.config.json 缺少 libVersion');
  else pass('基础库：' + project.libVersion);

  const setting = project.setting || {};
  if (Boolean(setting.es6) !== Boolean(setting.enhance)) {
    fail('setting.es6 与 setting.enhance 必须同开同关');
  } else {
    pass('编译设置：es6 / enhance 同步');
  }
}

if (app) {
  if (!Array.isArray(app.pages) || app.pages.length !== 12) {
    fail('app.json pages 应为 12 个，当前 ' + (app.pages ? app.pages.length : 0));
  } else {
    pass('页面数量：12');
  }

  const tabs = (app.tabBar && app.tabBar.list) || [];
  if (tabs.length < 2 || tabs.length > 5) {
    fail('tabBar 数量必须为 2–5 个，当前 ' + tabs.length);
  } else if (tabs.length !== 4) {
    fail('本项目约定 4 个 Tab，当前 ' + tabs.length);
  } else {
    pass('Tab 数量：4');
  }

  const pageSet = new Set(app.pages || []);
  let maxIcon = 0;
  for (const tab of tabs) {
    if (!pageSet.has(tab.pagePath)) {
      fail('tabBar 页面不在 pages 中：' + tab.pagePath);
    }
    for (const key of ['iconPath', 'selectedIconPath']) {
      if (!tab[key]) {
        fail('tabBar 缺少 ' + key + '：' + tab.text);
        continue;
      }
      const icon = path.join(dist, tab[key]);
      if (!fs.existsSync(icon)) {
        fail('Tab 图标不存在：' + tab[key]);
        continue;
      }
      const bytes = fs.statSync(icon).size;
      maxIcon = Math.max(maxIcon, bytes);
      if (bytes > 40 * 1024) fail('Tab 图标超过 40KB：' + tab[key]);
      const size = pngSize(icon);
      if (!size || size.width !== 81 || size.height !== 81) {
        fail('Tab 图标应为 81×81 PNG：' + tab[key]);
      }
    }
  }
  if (tabs.length) pass('Tab 图标：' + (tabs.length * 2) + ' 个，81×81，最大 ' + (maxIcon / 1024).toFixed(1) + ' KB（上限 40 KB）');

  for (const page of app.pages || []) {
    for (const ext of ['js', 'json', 'wxml']) {
      const file = path.join(dist, page + '.' + ext);
      if (!fs.existsSync(file)) fail('页面文件缺失：' + page + '.' + ext);
    }
  }
  pass('页面文件：js / json / wxml 完整');

  const subs = app.subPackages || app.subpackages || [];
  for (const sub of subs) {
    const root = String(sub.root || '').replace(/\/$/, '');
    for (const page of sub.pages || []) {
      const rel = root + '/' + page;
      for (const ext of ['js', 'json', 'wxml']) {
        const file = path.join(dist, rel + '.' + ext);
        if (!fs.existsSync(file)) fail('分包页面缺失：' + rel + '.' + ext);
      }
    }
  }

  const title = app.window && app.window.navigationBarTitleText;
  if (title !== '精力做什么') fail('导航栏标题不是「精力做什么」：' + title);
  else pass('导航栏标题：精力做什么');

  if (app.lazyCodeLoading === 'requiredComponents') pass('组件按需注入：requiredComponents');
  else fail('未开启组件按需注入：app.json 需要 lazyCodeLoading="requiredComponents"');
}

const files = walk(dist, []);
const subs = (app && (app.subPackages || app.subpackages)) || [];
const subRoots = subs.map(function (sub) { return String(sub.root || '').replace(/\/$/, '') + '/'; });
function isSubFile(file) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  return subRoots.some(function (root) { return rel.indexOf(root) === 0; });
}
const mainFiles = files.filter(function (file) { return !isSubFile(file); });
const total = mainFiles.reduce((sum, file) => sum + fs.statSync(file).size, 0);
for (const sub of subs) {
  const root = String(sub.root || '').replace(/\/$/, '');
  const subFiles = files.filter(function (file) {
    return path.relative(dist, file).split(path.sep).join('/').indexOf(root + '/') === 0;
  });
  const bytes = subFiles.reduce((sum, file) => sum + fs.statSync(file).size, 0);
  if (bytes > 2 * 1024 * 1024) fail('分包 ' + root + ' 超过 2MB：' + mb(bytes));
  else pass('分包 ' + root + '：' + mb(bytes) + '（上限 2 MB）');
}
// 开发者工具「代码质量」主包线：size/1024 > 1024*1.5（即 1,572,864 B）。
// DevTools 的编译包会比 dist 文件合计少约 116 KB（生成 wxml/wxss/config 等），
// 这里用 +120 KB 的代理预算做本地守卫，避免再次出现 1.61 MB 才被发现的情况。
const QUALITY_LINE = 1.5 * 1024 * 1024;
const QUALITY_PROXY = QUALITY_LINE + 120 * 1024;
if (total > 2 * 1024 * 1024) {
  fail('主包体积超过 2MB 硬上限：' + mb(total));
} else if (total > QUALITY_PROXY) {
  fail('主包体积 ' + mb(total) + ' 超过代码质量 1.5MB 代理预算（' + mb(QUALITY_PROXY) + '）；请压缩图片/减少数据');
} else {
  pass('主包体积：' + mb(total) + '（硬上限 2 MB；代码质量 1.5 MB 线）');
}

const MEDIA_LIMIT = 200 * 1024;
let maxMedia = 0;
let maxMediaFile = '';
for (const file of files) {
  if (!/\.(png|jpe?g|webp|gif|mp3|wav|m4a|aac)$/i.test(file)) continue;
  const bytes = fs.statSync(file).size;
  if (bytes > maxMedia) { maxMedia = bytes; maxMediaFile = file; }
  if (bytes > MEDIA_LIMIT) {
    fail('图片/音频超过 200KB：' + path.relative(dist, file) + '（' + (bytes / 1024).toFixed(0) + 'KB）');
  }
}
if (maxMedia) pass('图片/音频：最大 ' + (maxMedia / 1024).toFixed(0) + ' KB（上限 200 KB）');

// 启动图是主包里最大的单文件，单独设 120KB 预算，防止再次顶穿 1.5MB 线。
const launch = path.join(dist, 'assets', 'launch-default.jpg');
if (fs.existsSync(launch)) {
  const bytes = fs.statSync(launch).size;
  if (bytes > 120 * 1024) fail('启动图超过 120KB：' + (bytes / 1024).toFixed(0) + 'KB，请压缩到 100KB 以内');
  else pass('启动图：' + (bytes / 1024).toFixed(0) + ' KB（预算 120 KB）');
}

const sourceFiles = walk(path.join(root, 'src'), []).filter(function (f) {
  return /\.(js|jsx)$/.test(f);
});
let networkUse = false;
let cloudUse = false;
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  if (/\b(?:Taro|wx)\.(?:request|uploadFile|downloadFile|connectSocket)\s*\(/.test(text)) {
    networkUse = true;
    fail('发现网络请求 API：' + path.relative(root, file));
  }
  if (/\b(?:Taro|wx)\.cloud\./.test(text)) cloudUse = true;
}
if (cloudUse) pass('云端行情：wx.cloud（配置后启用）');
if (!networkUse) pass('网络请求：未直接使用 wx.request');

console.log('\n微信小程序构建验收（miniapp/dist/weapp）\n');
for (const line of passes) console.log('  ✓ ' + line);
for (const line of problems) console.log('  ✗ ' + line);

if (problems.length) {
  console.log('\n未通过：' + problems.length + ' 项\n');
  process.exit(1);
}
console.log('\n通过。\n');
