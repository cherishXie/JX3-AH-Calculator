# 更新日志

由 GitHub Actions 根据最近 200 条提交自动维护；日期使用北京时间。价格更新也记录在此。

## 2026-11-27 · 5a43367

update JX3BOX prices

## 2026-11-26 · 68c7220

update JX3BOX prices

## 2026-11-26 · 6d7f50a

update JX3BOX prices

## 2026-11-26 · 9736aca

update JX3BOX prices

## 2026-11-26 · bc25bfb

update JX3BOX prices

## 2026-11-26 · 72d7aa8

update JX3BOX prices

## 2026-11-26 · 903243b

update JX3BOX prices

## 2026-11-26 · 0bb9e6a

update JX3BOX prices

## 2026-11-26 · 5a9a875

update JX3BOX prices

## 2026-11-26 · 8ce32cc

update JX3BOX prices

## 2026-11-26 · 7b9945b

update JX3BOX prices

## 2026-11-26 · a3b4fa3

update JX3BOX prices

## 2026-11-26 · 34fb2b1

update JX3BOX prices

## 2026-11-26 · 743a425

update JX3BOX prices

## 2026-11-26 · 26bd2ec

update JX3BOX prices

## 2026-11-26 · 21cf761

update JX3BOX prices

## 2026-11-26 · f50a78a

update JX3BOX prices

## 2026-11-26 · 703d537

update JX3BOX prices

## 2026-11-26 · a9c3bd4

update JX3BOX prices

## 2026-11-26 · 55ffa39

update JX3BOX prices

## 2026-11-26 · 3fc9d20

update JX3BOX prices

## 2026-11-26 · 8ce0cbd

update JX3BOX prices

## 2026-11-26 · a2eacb9

update JX3BOX prices

## 2026-11-26 · cead9f1

update JX3BOX prices

## 2026-11-25 · 92fb68a

update JX3BOX prices

## 2026-11-25 · fe7b44c

update JX3BOX prices

## 2026-11-25 · 1a3be4b

update JX3BOX prices

## 2026-11-25 · a6a8db7

update JX3BOX prices

## 2026-11-25 · 50ac411

update JX3BOX prices

## 2026-11-25 · 7b0791e

update JX3BOX prices

## 2026-11-25 · 5c0f119

update JX3BOX prices

## 2026-11-25 · a611cd0

update JX3BOX prices

## 2026-11-25 · ec3d8f9

update JX3BOX prices

## 2026-11-25 · 5ce174c

update JX3BOX prices

## 2026-11-25 · 86f48b2

update JX3BOX prices

## 2026-11-25 · 3f536f8

update JX3BOX prices

## 2026-11-25 · 0c004e9

update JX3BOX prices

## 2026-11-25 · 011183c

update JX3BOX prices

## 2026-11-25 · d4a824d

同步网页可做评级、物品搜索与经验口径

- 从网页审计生成 318 配方 × 17 服的 A/B/C/G 评级串，替代原来的覆盖+利润近似
- 今日/排行/精力分析默认只看可做+谨慎并可切全部；技艺默认全部并可切可做/谨慎
- 新增可搜索 ItemPicker，用于走势物品与配方产物/材料选择
- 突破页新增 30→50 经验/精力三口径：合计经验、1 精力=2 经验折算、配方取整实际
- 走势涨跌榜增加全部/上涨/下跌切换与加载更多；历史节点支持 CSV
- 同步最新 139 快照审计数据；主包 1.58MB，13 页 / 5 Tab 验收通过

## 2026-11-25 · bdc04ee

区服趋势移动端提速并校准 30→50 经验表

- 区服趋势物品视角：目录只排序一次并复用中文字符串排序器、物品颜色一次建表、17 个区服 view 局部复用、选择器展开时懒渲染；物品视角点击从约 5s 降到 1s 内（4× CPU 降频测试）。\\n\\n突破升级：30→50 改用采集/制造两张实测经验表（采集 35,840、制造 48,580），30 级后统一 1 精力=2 经验；制造表被遮挡的 8 行按合计与相邻差值推定。

## 2026-11-25 · 9ae0374

update JX3BOX prices

## 2026-11-25 · 057032f

update JX3BOX prices

## 2026-11-25 · df098ad

小程序二级页统一 v2 布局

- 配方详情：结论 + 4 KPI + 产物/材料分区 + 成本构成 + 吸底编辑
- 突破升级：v2 头图、横向技艺 chips、缺价时提示切精力优先
- 物价走势：v2 分段筛选、玻璃卡、两行涨跌榜与历史节点、CSV 复制
- 补全 dist 中突破/五行石/公式页与深色 Tab 图标，避免产物缺页

## 2026-11-25 · 395ed74

update JX3BOX prices

## 2026-11-25 · 60e360a

update JX3BOX prices

## 2026-11-25 · 5f04fcc

更新小程序重构后的页面截图

## 2026-11-25 · f41a421

小程序页面重构为 5 Tab 并新增精力收益分析

- 今日改为总览：结论句、4 KPI、满精力方案、Top10、技艺横评与分析入口
- 生活技艺与行情升为一级 Tab；新增精力收益分析（A/B/C 评级、组合、散点、双制品对比、完整表、CSV）
- 搜索与筛选改为吸底搜索 + 底部弹层；触控热区、输入字号、按压反馈按手机重做
- 应用 emilkowalski/skills 的 mobile-native / emil-design-eng / apple-design / break-ui 规则
- 数据同步到 1117 物品 / 339 配方；微信主包 1.55MB，13 页 / 5 Tab 验收通过

## 2026-11-25 · 01dbad0

update JX3BOX prices

## 2026-11-25 · 491b53a

update JX3BOX prices

## 2026-11-25 · 3c4d7ad

update JX3BOX prices

## 2026-11-25 · 74624f8

update JX3BOX prices

## 2026-11-25 · d204c83

update JX3BOX prices

## 2026-11-25 · fb3a09b

update JX3BOX prices

## 2026-11-25 · da062b7

update JX3BOX prices

## 2026-11-25 · e1a1ee9

update JX3BOX prices

## 2026-11-25 · bed0f12

update JX3BOX prices

## 2026-11-25 · d98b110

update JX3BOX prices

## 2026-11-25 · 5f5080c

update JX3BOX prices

## 2026-11-25 · 3994cec

update JX3BOX prices

## 2026-11-25 · 52f8e86

update JX3BOX prices

## 2026-11-25 · ed0ac12

update JX3BOX prices

## 2026-11-25 · d005523

update JX3BOX prices

## 2026-11-25 · 0467da4

update JX3BOX prices

## 2026-11-25 · 282d0f3

update JX3BOX prices

## 2026-11-25 · 885b7fe

update JX3BOX prices

## 2026-11-25 · 49563ee

update JX3BOX prices

## 2026-11-25 · 212f636

update JX3BOX prices

## 2026-11-25 · b6ac12b

update JX3BOX prices

## 2026-11-25 · a315018

update JX3BOX prices

## 2026-11-25 · d2972e4

update JX3BOX prices

## 2026-11-25 · 3b76be2

update JX3BOX prices

## 2026-11-24 · 4e1ea7d

update JX3BOX prices

## 2026-11-24 · dbb6160

update JX3BOX prices

## 2026-11-24 · 7bc7973

update JX3BOX prices

## 2026-11-24 · 1c914fa

update JX3BOX prices

## 2026-11-24 · d7f8fc2

update JX3BOX prices

## 2026-11-24 · 74d735b

update JX3BOX prices

## 2026-11-24 · 6caa753

update JX3BOX prices

## 2026-11-24 · 8649f5c

update JX3BOX prices

## 2026-11-24 · fed8441

update JX3BOX prices

## 2026-11-24 · f1ba5c8

update JX3BOX prices

## 2026-11-24 · cd7f267

update JX3BOX prices

## 2026-11-24 · 70c0f93

update JX3BOX prices

## 2026-11-24 · 1d08efe

update JX3BOX prices

## 2026-11-24 · 0bc41d6

update JX3BOX prices

## 2026-11-24 · 79b7148

update JX3BOX prices

## 2026-11-24 · 0c7eb51

update JX3BOX prices

## 2026-11-24 · 98bdecf

update JX3BOX prices

## 2026-11-24 · cf124ac

update JX3BOX prices

## 2026-11-24 · 6080506

update JX3BOX prices

## 2026-11-24 · 169e86d

update JX3BOX prices

## 2026-11-24 · cf10434

update JX3BOX prices

## 2026-11-24 · 3b630a3

update JX3BOX prices

## 2026-11-24 · 55d7962

update JX3BOX prices

## 2026-11-24 · 390ae17

update JX3BOX prices
