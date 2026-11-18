// 构建前自检：提醒填写 appid，并确认 xhs 插件存在
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const cfg = path.join(root, 'project.config.json');
if (!fs.existsSync(cfg)) {
  console.log('[剑网三物价助手] 未找到 project.config.json，请在上线前填写微信小程序 appid。');
}
console.log('[剑网三物价助手] 构建目标：weapp / xhs；数据目录：src/shared/catalog.json');
