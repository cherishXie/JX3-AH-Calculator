/**
 * 写入微信小程序 AppID。
 *
 * 用法：
 *   cd miniapp
 *   npm run set-appid -- wx1234567890abcdef
 *
 * 同时更新根目录 project.config.json 与已构建的 dist/weapp/project.config.json；
 * 之后再执行 npm run build:weapp 会以根目录配置为准。
 */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const appid = (process.argv[2] || '').trim();

if (!/^wx[0-9a-f]{16}$/i.test(appid)) {
  console.error('用法：npm run set-appid -- wx1234567890abcdef');
  console.error('AppID 形如 wx + 16 位十六进制字符，请从微信公众平台「设置 → 基本设置」复制。');
  process.exit(1);
}

const targets = ['project.config.json', 'dist/weapp/project.config.json'];
let count = 0;

for (const rel of targets) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  json.appid = appid;
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n');
  console.log('已写入 AppID →', rel);
  count += 1;
}

if (!count) {
  console.error('未找到 project.config.json，请确认当前目录是 miniapp/');
  process.exit(1);
}

console.log('完成。下一步：npm run build:weapp，然后在微信开发者工具中导入 miniapp/');
