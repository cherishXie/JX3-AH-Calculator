/* 从 Web 版 assets/data.js 同步当前版本数据到小程序 catalog.json */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..', '..');
const source = fs.readFileSync(path.join(root, 'assets', 'data.js'), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: 'data.js' });
const data = sandbox.window.JX3Data;
if (!data) throw new Error('未从 assets/data.js 读取到 JX3Data');
const target = path.join(__dirname, '..', 'src', 'shared', 'catalog.json');
fs.writeFileSync(target, JSON.stringify(data, null, 2));
console.log('已同步', data.items.length, '物品 /', data.recipes.length, '配方 /', data.servers.length, '服务器 →', target);
