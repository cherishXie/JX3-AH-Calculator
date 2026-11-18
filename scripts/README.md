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
- 物品映射：`scripts/jx3-item-map.json`（263 项）；
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
- 每次运行会给 `seedVersion` 加 `-p<时间戳>`，让已有浏览器缓存重新载入新价格；用户手动校准过的价格仍会保留。
- 价格与上次完全一致时：不写文件、不重打 zip、不产生提交，避免每日空提交和 PWA 更新提示；
- 只有价格发生变化时才更新 `priceUpdatedAt` / `seedVersion`；时间统一按 `Asia/Shanghai` 生成。

## 定时任务

本机 cron 示例（Asia/Shanghai，每天 08:00–22:00 整点、每 2 小时）：

```cron
0 8,10,12,14,16,18,20,22 * * * cd /Users/cherishxie/Documents/ChatGPT/JX3-AH-Calculator && ./scripts/update-prices.sh >> /tmp/jx3-price-update.log 2>&1
```

GitHub Actions 也可以直接执行 `./scripts/update-prices.sh`，然后提交变更/上传 artifact。

## 注意

- JX3BOX 是第三方数据源，接口可能限频或调整；脚本内置 3 次重试，但建议每天只跑 1–2 次。
- 自动更新的是**17 个服务器的拍卖样本**；覆盖率较低的服务器/物品会回退梦江南示例价，本服价格可在应用内逐项校准。
- 脚本不会自动改品牌封面上的 TOP 值/条数；封面数字变化时需要重新导出 `brand/cover-*.svg`。
- 自动更新后建议在 Web 总览、价格库、小工具模拟器各检查一次，再上传新 zip。

## GitHub Actions

仓库已提供 `.github/workflows/update-jx3-prices.yml`：每天北京时间 **08:00–22:00 整点、每 2 小时**运行（00:00–08:00 不更新），更新 17 个服务器数据并提交；同时上传 `剑网三物价助手-minitool.zip` artifact。cron 使用 UTC：`0 0,2,4,6,8,10,12,14 * * *`。若仓库受保护分支限制，可把 push 改为创建 PR。
