# 精力做什么 · 微信小程序部署手册

> 目标：把 `miniapp/` 的 Taro 构建产物发布成微信小程序 **「精力做什么」**。
>
> 本仓库里已经完成：**改名、导航栏标题、微信构建（10 页 / 5 Tab）、五行石模块与公式编辑、AppID、头像、真实模拟器验收**。
> 只有你能完成：**注册/认证、ICP 备案、上传提审与发布**（需要你的登录态与确认）。

---

## 0. 一分钟总览

| 阶段 | 你要做的事 | 产物 / 入口 |
| --- | --- | --- |
| ① 注册 | 微信公众平台注册小程序，名称填「精力做什么」 | [mp.weixin.qq.com](https://mp.weixin.qq.com/) |
| ② AppID | 工程已填入当前 AppID；换号用 `npm run set-appid` | `miniapp/project.config.json` |
| ③ 构建 | `npm install && npm run build:weapp` | `miniapp/dist/weapp/` |
| ④ 预览 | 微信开发者工具导入 `miniapp/`，真机预览 | 开发者工具 |
| ⑤ 备案 | 公众平台 → 设置 → 小程序备案 | 备案号 |
| ⑥ 上传 | 开发者工具「上传」→ 公众平台提审 → 发布 | 线上版本 |

> 当前工程已填入 AppID；如果换成别的小程序，执行 `npm run set-appid -- wx你的AppID` 后重新构建。

---

## 1. 本次已准备好的文件

| 文件 | 用途 |
| --- | --- |
| `miniapp/dist/weapp/` | 微信小程序构建产物（10 页 / 5 Tab），可直接导入开发者工具 |
| `miniapp/project.config.json` | 项目配置，AppID 已填入，`libVersion: 3.18.0` |
| `wechat/screenshots/wechat-real-stones.png` | 微信模拟器真实截图（五行石页） |
| `wechat/screenshots/wechat-real-stone-formula.png` | 微信模拟器真实截图（公式编辑页） |
| `wechat/avatar-144.png` | 小程序头像（144×144，约 12 KB，≤2 MB） |
| `wechat/avatar-512.png` | 头像备用尺寸 |
| `wechat/avatar.svg` | 头像矢量源文件 |
| `wechat/README.md` | 头像设计说明与重新导出命令 |
| `miniapp/README.md` | 小程序端开发说明 |
| `miniapp/CLOUD-SYNC.md` | 云端行情同步的一次性配置、Secrets、排错 |
| `.github/workflows/sync-wechat-prices.yml` | 手动把当前 catalog 同步到微信云数据库 |

已改名的位置：全局/各 Tab 的导航栏标题、顶部品牌标题、H5 标题、`project.config.json`、`config/index.js`、`package.json`。

---

## 2. 注册小程序与名称

1. 打开 [微信公众平台](https://mp.weixin.qq.com/)，右上角「立即注册」→ **小程序**。
2. 使用一个**未注册过公众号/小程序**的邮箱；按提示完成主体信息（个人或企业）。
3. 登录后台 → **设置 → 基本设置 → 小程序名称**，填写 **精力做什么**。
   - 名称规则：4–30 个字符，一个中文计 2 个字符；「精力做什么」= 10 个字符，符合要求。
   - 名称全平台唯一，是否可用以页面实时查重为准；若被占用，备选：`精力做点啥`、`今天精力做啥`、`精力收益榜`。
   - 参考：[小程序名称、简称设置规范](https://kf.qq.com/faq/170109umMvm6170109MZNnYV.html)
4. **头像**：上传 `wechat/avatar-144.png`。
5. **简介**：可直接用下面这段（不写游戏名，降低类目/授权风险）：

   > 按本服物价计算生活技艺的材料成本与精力收益，帮你决定今天精力做什么；支持配方编辑、价格校准与本地备份，数据仅保存在本机。

6. **服务类目**：优先选 **工具 → 效率**；若后台没有该细项，选 **工具 → 信息查询**。以后台实际可选类目为准，不要选「游戏」类目（通常需要版号/授权）。

---

## 3. 填 AppID 并构建

在公众平台 **设置 → 基本设置 → 账号信息** 复制 **AppID**（形如 `wx1234567890abcdef`）。

```bash
cd miniapp
npm install
npm run build:weapp
npm run verify:weapp
```

当前 AppID 已写入 `project.config.json`；只有换小程序时才需要 `npm run set-appid -- wx你的AppID` 再重新构建。`verify:weapp` 会检查 AppID、10 页、5 Tab、10 个 81×81 图标、主包 ≤2MB、无 wx.request。

`npm run set-appid` 会同时写入 `project.config.json` 和已构建的 `dist/weapp/project.config.json`；不想用脚本时，也可以手动编辑 `project.config.json` 的 `appid` 字段后重新构建。

构建完成后检查：

```bash
du -sh dist/weapp          # 应小于 2 MB
cat dist/weapp/app.json    # navigationBarTitleText 应为「精力做什么」
```

> Taro 构建时会把根目录 `project.config.json` 复制到 `dist/weapp/project.config.json`。如果你改的是 `dist/weapp/project.config.json`，下次构建会被覆盖；**建议改根目录的 `project.config.json` 后重新构建**。

环境说明：Taro 3.6.35 建议使用 **Node 18 / 20 LTS**；本项目已在 Node 26 下构建通过。如果 `npm install` 或构建遇到 OpenSSL / node-gyp 报错，优先切到 Node 18 或 20。

---

## 4. 导入微信开发者工具

1. 下载并安装 [微信开发者工具（稳定版）](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
2. 打开开发者工具 → **导入项目**。
3. 目录选 **`miniapp/`**（推荐，读取 `project.config.json` 里的 `miniprogramRoot: dist/weapp/`），或直接选 **`miniapp/dist/weapp/`**。
4. AppID 填你自己的；后端服务选「不使用云服务」。
5. 编译后应看到暗色「总览」页，底部 **5 个 Tab：总览 / 技艺 / 价格 / 分析 / 五行石**。

**常见导入错误**：

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| `app.json` 未找到 | 选错了目录 | 选 `miniapp/` 或 `miniapp/dist/weapp/` |
| `project.config.json` 找不到 | 直接选了 `dist` 的父级 | 同上 |
| 页面空白 / 报 `Component is not found` | 未重新构建或产物不完整 | `npm run build:weapp` 后重新编译 |
| AppID 不合法 | 用了游客 AppID 或填错 | 换成公众平台复制的 AppID |

### 4.1 用官方 wechatide Skill 自动验收（推荐）

新版开发者工具内置 Skills。本机已确认 **wechatide-skill v0.3.11**，`wechatide` 在 PATH 中。

前置：开发者工具已登录；**设置 → 安全设置 → 服务端口** 开启；首次连接弹窗点「允许」。Skill 要求在非沙箱环境运行。

```bash
cd miniapp
wechatide -c DSH check_wechatide_status --skill-version 0.3.11
wechatide -c DSH open_project_window --project "$(pwd)" --window-mode liteMode
wechatide -c DSH simulator_open_page --project "$(pwd)" --page pages/stones/index
wechatide -c DSH simulator_screenshot --project "$(pwd)" --path ../wechat/screenshots/wechat-real-stones.png
wechatide -c DSH get_simulator_console --project "$(pwd)" --command "grep -i error"
```

- 只有 `versionRelation` 为 `equal`（或 `agent_ahead`）且 `loginExpired: false` 才继续；否则按提示更新 skill 或扫码登录。
- `--skill-version` 取当前 `wechatide-skill/SKILL.md` 的 `version`，不要写死过期版本。
- 官方说明：[工具 Skills](https://developers.weixin.qq.com/miniprogram/dev/devtools/Skills.html)。

### 4.2 云端行情同步（可选）

如果启用微信云开发数据库自动更新物价，完整配置见 [CLOUD-SYNC.md](CLOUD-SYNC.md)。

要点：

- 在 `src/shared/cloudConfig.js` 填云环境 ID；
- 云数据库创建 `prices` 集合，规则 `{"read": true, "write": false}`；
- GitHub Secrets 配置 `WX_APPID` / `WX_APPSECRET` / `TCB_ENV_ID`；
- `Update JX3 prices` workflow 更新物价后自动写入 `prices/current`；
- 首次发布必须包含云读取代码；之后只更新云数据库，不需要重新发版。

---

## 5. 真机验收清单

在开发者工具点「预览」，用手机扫码逐项过一遍：

- [ ] **5 个 Tab** 都能切换，图标选中态正常
- [ ] 右上角服务器下拉能切换（梦江南 / 九天 / 自定义）
- [ ] 总览 KPI、Top 5、行动建议有数
- [ ] 技艺页切换 8 个技艺、搜索、品阶、仅盈利
- [ ] 价格页搜索、修改一个材料价，返回总览数字变化
- [ ] **五行石**：1–8 级改价即时联动；7/8 级假设爆率保存；重开仍保留
- [ ] **五行石公式**：新增/编辑/删除自定义公式，恢复默认公式
- [ ] 设置：交易税率可改（0–100%），改 0% 后收益变为税前口径
- [ ] 配方详情：改材料价、改单次精力、恢复示例、删除/新增
- [ ] 分析页筛选、双制品对比、满精力分配
- [ ] 设置：改精力预算、复制 JSON 备份、粘贴导入
- [ ] 杀进程重开，价格、配方与五行石数据仍在（`Taro.setStorageSync`）
- [ ] 如启用云端行情：价格页出现「同步行情」；行情/示例 KPI、行情时间、五行石「行情」标签正常
- [ ] 导航栏标题为「精力做什么」，头像/名称显示正常

> 手动价格/配方仅存本机；云端行情是可选能力，只同步公开物价，不收集个人信息。隐私说明要按实际是否启用云端行情填写。

---

## 6. 上传、提审、发布

1. 开发者工具右上角 **上传**：
   - 版本号：`1.0.0`
   - 项目备注：`精力做什么 1.0.0 · 生活技艺、五行石与公式`
2. 打开公众平台 → **版本管理 → 开发版本**，找到刚上传的版本 → **提交审核**。
3. 按页面要求填写：
   - **功能页面**：5 个 Tab（总览 / 技艺 / 价格 / 分析 / 五行石）
   - **标题 / 简介**：与基本信息一致
   - **服务类目**：工具 → 效率（或信息查询）
   - **截图**：5 张 Tab 截图；`wechat/screenshots/01-overview.png` ~ `04-analysis.png` 是 H5 同构占位，`wechat-real-stones.png` / `wechat-real-overview.png` 是微信模拟器真实截图；建议在开发者工具里统一重截 5 张
   - **隐私说明**：手动价格/配方仅本地；如启用云端行情，仅同步公开物价，不收集个人信息
4. 审核通过后 → **版本管理 → 审核版本 → 发布**。
5. 发布后可在公众平台下载小程序码，放到 README 或社群。

提审前建议再确认：

- [ ] 名称、头像、简介、类目已保存
- [ ] 小程序备案已完成（见下一节）
- [ ] 没有外链、没有支付、没有诱导分享
- [ ] 数据脚注保留「示例数据 / 可校准」字样
- [ ] 五行石页保留「7/8 级无稳定保底公式、爆率为假设值」说明
- [ ] 不包含官方 Logo、游戏截图、角色立绘

---

## 7. 小程序 ICP 备案（发布前必须）

微信小程序现在需要完成 **ICP 备案** 才能发布（2023-09 起新注册小程序开放备案入口）。

1. 公众平台首页会提示「去备案」，或 **设置 → 小程序备案 → 去备案**。
2. 准备材料：
   - 个人：身份证、手机号、邮箱、实际通讯地址
   - 企业：营业执照、法人/负责人身份证、授权书（如需要）
3. 填写主体信息、小程序信息、负责人信息，完成人脸核身。
4. 平台初审（约 1–2 个工作日）→ 工信部短信核验（12381，24 小时内完成）→ 通管局审核（约 1–20 个工作日）。
5. 审核通过后获得备案号，才能发布版本。

参考：[小程序备案操作指引](https://developers.weixin.qq.com/miniprogram/product/record/record_guidelines.html)

> 备案期间可以继续用体验版测试，不影响开发。

---

## 8. 提审资料模板（可直接复制）

**名称**：精力做什么

**简称**（选填，4–10 字符）：精力

**简介**（不写游戏名，稳妥）：

> 按本服物价计算生活技艺的材料成本与精力收益，帮你决定今天精力做什么；支持配方编辑、价格校准与本地备份，数据仅保存在本机。

**服务类目**：工具 → 效率（备选：工具 → 信息查询）

**隐私说明**：

> 本小程序不收集、不上传任何个人信息。服务器、手动价格与配方仅保存在用户本机（微信本地存储）；如启用云端行情，只从微信云开发读取公开物价数据，不包含用户标识或手动校准内容。小程序不请求位置、通讯录、相册、麦克风等权限，不包含支付与广告。

**审核备注**（可选）：

> 非官方玩家自制的效率计算工具，不含官方 Logo、游戏画面、充值或交易功能；内置价格为示例数据，用户可自行校准。

---

## 9. 审核风险与规避

| 风险 | 说明 | 建议 |
| --- | --- | --- |
| 类目不符 | 内容涉及游戏数值，可能被要求改类目 | 选「工具 → 效率/信息查询」；简介不写游戏名；被驳回时按审核意见调整 |
| 第三方游戏名称/商标 | 名称已避开「剑网3」，但页面内有配方名与版本名 | 保留「非官方、示例数据」脚注；如被要求，提供授权或把数据替换为通用示例 |
| 缺少备案 | 未备案无法发布 | 提前提交备案，预留 1–20 个工作日 |
| 诱导分享/外链 | 小程序内没有外链与分享奖励 | 保持现状即可 |
| 隐私合规 | 手动数据本地；云端行情为公开数据 | 按第 8 节填写；不要加登录/手机号收集 |

> 游戏工具类小程序在审核上存在一定不确定性。若首次提审被拒，优先按审核意见改「类目 + 简介 + 截图」，不要反复原样提交。

---

## 10. 常见问题

**Q：工程里已经填了 AppID，换号怎么办？**
执行 `npm run set-appid -- wx你的AppID`，再 `npm run build:weapp`。`set-appid` 会同时更新根配置与 `dist/weapp/project.config.json`。

**Q：一定要用 Taro 重新构建吗？**
是。改名、五行石页改的都是 `miniapp/src`，必须 `npm run build:weapp` 才会进入 `dist/weapp`。

**Q：构建体积多大？**
微信约 **1.24 MB**（10 页 / 5 Tab），小红书约 **1.02 MB**（7 页 / 4 Tab），都远低于 2 MB；头像 12 KB。

**Q：`sitemap.json` 要配吗？**
官方全局配置文档已标注 `sitemap.json` 下线，当前不需要配置；开发者工具若提示可忽略。

**Q：五行石会进小红书吗？**
不会自动进。`app.config.js` 按 `TARO_ENV` 只在微信注册五行石页与公式编辑页，小红书仍保持 6 页 / 4 Tab，避免影响现有工具布局。要同步到小红书时，去掉 `IS_WEAPP` 条件并重新构建即可。

**Q：官方 wechatide Skill 怎么用？**
见 4.1。需要开发者工具登录、服务端口开启、非沙箱运行；本机 skill 版本 0.3.11。

**Q：可以同时发小红书吗？**
可以，`npm run build:xhs` 生成 `dist/xhs`；两端共用同一份源码与数据，五行石页仅微信端注册。

**Q：价格数据怎么更新？**
Web 版数据更新后，在 `miniapp/` 执行 `npm run sync:catalog`，再重新构建、上传新版本。

**Q：为什么不用 Canvas 画图表？**
小程序端用 `View` + 百分比条形图，避免微信/小红书 Canvas 差异，渲染更稳。

---

## 11. 版本更新流程

```bash
cd miniapp
npm run sync:catalog     # 如 Web 数据有更新
npm run build:weapp
npm run verify:weapp
# 开发者工具 → 上传 → 版本号 +1 → 公众平台提审 → 发布
```

建议版本号：`1.0.0` → `1.0.1`（修 bug）→ `1.1.0`（加功能）。

---

## 12. 交付边界

我可以在仓库里完成代码、构建、头像、文档与检查；**注册、实名、备案、登录开发者工具、点击上传/提审/发布**必须由你用自己的微信账号完成。把 AppID 填进 `project.config.json` 后重新构建，就可以直接导入开发者工具。
