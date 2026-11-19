# JX3BOX 自动更新物价

## 为什么是“构建时自动更新”

Web 版是静态页面，小红书小工具容器还要求**完全离线、不能联网**，所以不能在用户打开小工具时实时请求 JX3BOX。自动更新的正确位置是：

1. 在本地/CI 定时运行更新脚本；
2. 脚本从 JX3BOX 拉取 17 个服务器的拍卖价；
3. 重写 Web / Taro 小程序 / 小工具的 `data.js`（含 `serverPrices`）；
4. 重打 `剑网三物价助手-minitool.zip`；
5. 重新上传小工具并通过审核。

## 一键更新

```bash
# 先看会改什么，不写文件
node scripts/update-jx3-prices.mjs --dry-run

# 更新并重打小工具 zip
./scripts/update-prices.sh

# 只更新数据，不重打 zip
./scripts/update-prices.sh --no-zip

# 只更新某个服务器（默认更新全部 17 个）
./scripts/update-prices.sh --server 梦江南
```

脚本只依赖 Node 18+ 标准库，无需 `npm install`。

## 更新内容

- 拉取地址：`https://next2.jx3box.com/api/auction/`，`aggregate_type=hourly`，逐服拉取。
- 服务器：读取 `assets/data.js` 的 17 个服务器；数据写入 `data.serverPrices[serverId][itemId]`。
- 物品映射：`scripts/jx3-item-map.json`（267 项；4 项马草暂无 JX3BOX 映射）；
  新增物品会自动通过 JX3BOX 物品名接口解析并补入映射。
- 默认规则：
  - 样本数 `< 5` 的低样本报价不采用；
  - 报价超过当前示例价 `8 倍` 的异常值不采用；
  - 无公开报价的物品保留示例价。
- 各服覆盖率写入 `data.meta.serverCoverage`；某服无报价的物品回退梦江南样本。
- 更新文件：
  - `assets/data.js`（含 `serverPrices`）
  - `miniapp/src/shared/catalog.json`
  - `minitool/assets/data.js`
  - `剑网三物价助手-minitool.zip`
- 价格更新不再修改 `seedVersion`；`seedVersion` 只随配方目录/结构变化，避免每次价格更新都触发本地数据迁移。
- 价格与上次完全一致时：不写文件、不重打 zip、不产生提交，避免每日空提交和 PWA 更新提示；
- 只有价格发生变化时才更新 `priceUpdatedAt`；时间统一按 `Asia/Shanghai` 生成。

## 定时任务

本机 cron 示例（Asia/Shanghai，每天 08:07–22:07、每 2 小时）：

```cron
7 8,10,12,14,16,18,20,22 * * * cd /Users/cherishxie/Documents/ChatGPT/JX3-AH-Calculator && ./scripts/update-prices.sh >> /tmp/jx3-price-update.log 2>&1
```

GitHub Actions 也可以直接执行 `./scripts/update-prices.sh`，然后提交变更/上传 artifact。

## 注意

- JX3BOX 是第三方数据源，接口可能限频或调整；脚本内置 3 次重试，但建议每天只跑 1–2 次。
- 自动更新的是**17 个服务器的拍卖样本**；覆盖率较低的服务器/物品会回退梦江南示例价，本服价格可在应用内逐项校准。
- 脚本不会自动改品牌封面上的 TOP 值/条数；封面数字变化时需要重新导出 `brand/cover-*.svg`。
- 自动更新后建议在 Web 总览、价格库、小工具模拟器各检查一次，再上传新 zip。

## GitHub Actions

主工作流 `.github/workflows/update-jx3-prices.yml` 每天北京时间 **08:23–22:23、每 2 小时**直接运行，更新 17 个服务器数据并提交，同时上传小工具 ZIP。cron 使用 UTC：`23 0,2,4,6,8,10,12,14 * * *`。

备用工作流 `price-schedule.yml` 在 **08:53–22:53、每 2 小时**检查：过去 90 分钟没有成功或正在执行/排队的更新时，补跑主工作流。两个工作流都可手动运行；备用检查的结果写入 Actions 的运行摘要。主任务通过 concurrency 串行执行，防止同时写价格。

排查时先按 `event=schedule` 查看 Actions 记录：没有记录表示 GitHub 尚未派发定时事件；存在失败记录则检查日志。`active` 和手动执行成功不能证明定时调度已生效。GitHub 的 schedule 可能延迟或漏发，因此备用检查也不能替代独立的外部调度器；Cloudflare 方案见 `cloudflare/price-cron/README.md`，需另行部署并配置凭据。若仓库受保护分支限制，可把 push 改为创建 PR。

---

# 突破升级数据构建

> 生成 `miniapp/src/shared/breakthrough.json` 的同时，会写出 Web `assets/breakthrough-data.js`、小工具 `minitool/assets/breakthrough-data.js`（去外链）并复制共用内核 `assets/breakthrough.js`。Web 端需再执行 `./scripts/build-site.sh`，小工具需再执行 `./scripts/build-minitool.sh`。

`scripts/build-breakthrough-data.mjs` 生成小程序「分析 → 突破升级」所需的数据（`miniapp/src/shared/breakthrough.json`）：

```bash
# 全量重建（配方 + 物品名 + 17 服价格，约 3–5 分钟）
node scripts/build-breakthrough-data.mjs

# 只刷新价格（沿用现有配方与物品）
node scripts/build-breakthrough-data.mjs --prices-only

# 只用现有价格重建配方
node scripts/build-breakthrough-data.mjs --skip-prices
```

## 数据来源

- 配方/经验/精力：`https://node.jx3box.com/manufactures?type=...&ids=...&client=std`，只保留 `RequireLevel` 1–50 的当前赛季配方；经验恒为精力的 2 倍，脚本按 `CostVigor` 写入。
- 物品名：`https://node.jx3box.com/api/node/item/{type}_{id}`。
- 各服价格：`https://next2.jx3box.com/api/auction/`，`铜 / 10000 = 金`。
- 30/35/40/45「晋秩」突破材料：JX3BOX 攻略《【苍生铸世】鱼历小药宴席改动 & 生活技艺升级攻略》<https://www.jx3box.com/bps/109793>；等级门槛与成就库「完成40级突破」交叉核验。

## 价格清洗

- 样本数 `< 5` 的挂单不采用；
- 拍卖接口对无成交物品返回的 `10000 金` 哨兵值剔除；
- 只有 1–2 个服务器有报价的物品视为流动性不足，剔除（有目录基准价的除外）；
- 单服价格偏离全服中位数 4 倍以上、或超过目录基准价 4 倍的剔除；
- 全部清洗后仍缺价的配方/材料会在页面上标记「缺价」，不参与最优路线计算。

## 估算口径

- 当前版本每级所需经验尚未核实：按 `500 + 25 × (等级−1)` 线性模型估算，1→50 合计约 5.39 万经验；实际门槛可能影响次数、路线与收益。
- 采集单次经验未公开：按 `80` 估算（制造经验 = 精力 ×2 的对称假设）。
- 页面底部与 `breakthrough.json.meta.disclaimer` 常驻说明这两项估算。

突破计算模型由 `miniapp/src/shared/breakthrough-model.js` 统一实现；运行 `node scripts/sync-breakthrough-model.mjs` 刷新目录物品报价 key 并同步 Web/小工具，`node scripts/test-breakthrough.cjs` 检查计算回归。逐级经验门槛尚未核实，不应将模型值当成游戏实测值；50 级只有满级节点，没有独立晋秩任务。
