// 构建前自检：提醒填写 appid，并给出部署入口
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const cfg = path.join(root, 'project.config.json');
let appid = '';
if (fs.existsSync(cfg)) {
  try { appid = JSON.parse(fs.readFileSync(cfg, 'utf8')).appid || ''; } catch (e) {}
}
if (!appid || appid === 'touristappid') {
  console.log('[精力做什么] 提示：当前 appid 为 touristappid，只能预览；上传前请在 project.config.json 填入自己的小程序 AppID。');
} else {
  console.log('[精力做什么] 当前 AppID：' + appid);
}
console.log('[精力做什么] 构建目标：weapp / xhs；头像：../wechat/avatar-144.png；部署说明：WECHAT-DEPLOY.md');
