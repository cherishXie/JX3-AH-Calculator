import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const modelPath = new URL('miniapp/src/shared/breakthrough-model.js', root);
const catalog = JSON.parse(fs.readFileSync(new URL('miniapp/src/shared/catalog.json', root)));
const mapping = JSON.parse(fs.readFileSync(new URL('scripts/jx3-item-map.json', root)));
const keys = Object.fromEntries(catalog.items.filter(i => mapping[i.name]).map(i => [i.name, mapping[i.name]]));
const source = fs.readFileSync(modelPath, 'utf8').replace(/^  const QUOTE_KEYS = .*; \/\/ generated$/m, '  const QUOTE_KEYS = ' + JSON.stringify(keys) + '; // generated');
fs.writeFileSync(modelPath, source);
for (const path of ['assets/breakthrough-model.js', 'minitool/assets/breakthrough-model.js']) fs.writeFileSync(new URL(path, root), source);

// 只更新经验元数据，保留配方、物品索引、各服报价及报价时间。
const expModel = JSON.parse(fs.readFileSync(new URL('miniapp/src/shared/experience-model.json', root)));
const disclaimer = '突破任务为30/35/40/45级晋秩，无独立50级任务。1→30 级使用用户实测的共用逐级经验表；30→50 级分采集/制造两张实测表（采集 30→50 合计 35,840、制造 48,580）。30 级后采集与制造统一按 1 精力=2 经验换算（30 级前采集仍按 40 精力=128 经验），不再使用旧的单次经验估算。庖丁按实测秒刷点：1–30 级用西湖草龟/成都雌鹿，30–50 级用黑山羊。制造表 41→42 至 48→49 有 8 行被贴纸遮挡，按合计与相邻 640 差值推定；任务脚本奖励未计入收益。';
for (const file of ['miniapp/src/shared/breakthrough.json', 'assets/breakthrough-data.js', 'minitool/assets/breakthrough-data.js']) {
  const url = new URL(file, root);
  const existing = fs.readFileSync(url, 'utf8');
  const marker = 'window.JX3Breakthrough = ';
  const offset = existing.indexOf(marker);
  const data = JSON.parse(offset < 0 ? existing : existing.slice(offset + marker.length).trim().replace(/;$/, ''));
  data.meta.expModel = expModel;
  // 精力→经验换算：采集 30 级前 40 精力 = 128 经验，30 级后 1 精力 = 2 经验；制造 1 精力 = 2 经验。
  data.meta.expPerEnergy = { gather: 3.2, gatherFrom30: 2, craft: 2 };
  // 采金采集点等级（用户实测，覆盖目录旧值）；银矿目录里没有，单独补一条
  data.meta.gatherLevels = {
    // 采金
    铜矿: 1, 锡矿: 3, 铅锌矿: 5, 铁矿: 7, 银矿: 9, 青石: 30, 金沙: 30,
    // 神农
    百脉根: 1, 紫花苜蓿: 1, 甘草: 1, 珊瑚: 1, 木料: 1, 芦苇杆: 1, 竹子: 1, 甜象草: 1, 皇竹草: 1,
    大黄: 3, 千里香: 5, 芍药: 5, 五味子: 7, 枸杞: 9, 彼岸花: 10, 川贝: 15, 虫草: 17,
    紫苏: 25, 鱼腥草: 30, 黄花菜: 30
  };
  data.meta.gatherExtras = {
    caijin: [{ name: '银矿', energy: 40, level: 9 }],
    // 目录里没有的神农低阶采集点
    shennong: [
      { name: '木料', energy: 40, level: 1 }, { name: '芦苇杆', energy: 40, level: 1 },
      { name: '竹子', energy: 40, level: 1 }, { name: '大黄', energy: 40, level: 3 },
      { name: '千里香', energy: 40, level: 5 }, { name: '五味子', energy: 40, level: 7 },
      { name: '枸杞', energy: 40, level: 9 }, { name: '彼岸花', energy: 40, level: 10 },
      { name: '川贝', energy: 40, level: 15 }
    ]
  };
  // 庖丁实测秒刷点：1–30 用西湖草龟/成都雌鹿，30–50 用黑山羊
  data.meta.gatherPlans = {
    paoding: [
      { from: 1, to: 30, points: [{ name: '西湖草龟', energy: 40 }, { name: '成都雌鹿', energy: 40 }] },
      { from: 30, to: 50, points: [{ name: '黑山羊', energy: 40 }] }
    ]
  };
  data.meta.disclaimer = disclaimer;
  fs.writeFileSync(url, (offset < 0 ? '' : existing.slice(0, offset) + marker) + JSON.stringify(data) + (offset < 0 ? '\n' : ';\n'));
}
