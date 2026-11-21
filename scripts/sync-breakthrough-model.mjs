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
const disclaimer = '突破任务为30/35/40/45级晋秩，无独立50级任务。经验门槛使用用户实测的 1→2 至 30→31 逐级数值（30 个点），31 级起按末段每级 +10 线性外推、取整到 10；精力→经验按实测比例换算（采集 40 精力=128 经验，制造 1 精力=2 经验），不再使用旧的单次经验估算。庖丁按实测秒刷点：1–30 级用西湖草龟/成都雌鹿，30–50 级用黑山羊。暂按八技艺共用门槛模拟，技艺间差异尚未核实；任务脚本奖励未计入收益。';
for (const file of ['miniapp/src/shared/breakthrough.json', 'assets/breakthrough-data.js', 'minitool/assets/breakthrough-data.js']) {
  const url = new URL(file, root);
  const existing = fs.readFileSync(url, 'utf8');
  const marker = 'window.JX3Breakthrough = ';
  const offset = existing.indexOf(marker);
  const data = JSON.parse(offset < 0 ? existing : existing.slice(offset + marker.length).trim().replace(/;$/, ''));
  data.meta.expModel = expModel;
  // 精力→经验换算：采集 40 精力 = 128 经验，制造 1 精力 = 2 经验。
  data.meta.expPerEnergy = { gather: 3.2, craft: 2 };
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
