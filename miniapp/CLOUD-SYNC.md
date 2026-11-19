# 云端物价同步（微信云开发）

目标：GitHub Actions 更新物价后写入微信云开发数据库，小程序下次启动/同步时自动拉取，**不重新发布小程序版本**。

> 首次发布仍必须包含云读取代码和云环境 ID；之后只更新云数据库，才不需要发版。

## 方案

```
GitHub Actions（update-jx3-prices）
  → 生成 miniapp/dist/remote/prices.json（仅价格）
  → stable_token + tcb/databaseupdate
  → 微信云开发数据库 prices/current
  → 小程序 wx.cloud.database().collection('prices').doc('current').get()
  → 合并：用户校准价 > 云端行情价 > 包内示例价
```

不需要备案域名、不需要配置 `request` 合法域名、不占主包。

## 已实现的代码

| 文件 | 作用 |
| --- | --- |
| `miniapp/src/shared/cloudConfig.js` | 云环境 ID、集合名、TTL；`CLOUD_ENV` 留空则完全离线 |
| `miniapp/src/shared/remotePrices.js` | 云数据库读取、校验、清洗、失败回退 |
| `miniapp/src/app.jsx` | 启动时自动同步（有 TTL） |
| `miniapp/src/pages/prices/index.jsx` | 「同步行情」按钮、行情/示例 KPI、行情时间 |
| `miniapp/src/pages/settings/index.jsx` | 云端行情状态与手动同步 |
| `miniapp/src/shared/engine.js` | `marketPrices` / `stoneMarketPrices` / `marketMeta` 合并层 |
| `miniapp/scripts/build-remote-prices.mjs` | 从 catalog 生成 49 KB 左右的 `prices.json` |
| `miniapp/scripts/sync-cloudbase-prices.mjs` | 写云数据库 `prices/current` |
| `.github/workflows/update-jx3-prices.yml` | 物价更新后自动执行云同步；Secrets 缺失时自动跳过 |

## 一次性配置（你需要做）

### 1. 创建微信云开发环境

1. 微信开发者工具切到**完整窗口**（不是只显示模拟器的 lite 模式），在顶部工具栏「上传」右边点击**双环/云朵图标**（悬停提示「云开发」）。
2. 首次进入点击「开通」，创建环境并复制环境 ID（形如 `cloud1-xxxxxx`）。
3. 云开发控制台 → 数据库 → 新建集合 **`prices`**。
4. 集合权限 → 自定义安全规则：

```json
{
  "read": true,
  "write": false
}
```

> 前端只读；GitHub Actions 用 access_token 写入，不受前端 write:false 限制。

### 2. 填云环境 ID

编辑 `miniapp/src/shared/cloudConfig.js`：

```js
export const CLOUD_ENV = 'cloud1-xxxxxx';
```

留空 = 保持离线，不发起任何云请求。

### 3. 配置 GitHub Secrets

仓库 → Settings → Secrets and variables → Actions → New repository secret：

| Secret | 值 |
| --- | --- |
| `WX_APPID` | 小程序 AppID（`wx...`） |
| `WX_APPSECRET` | 小程序 AppSecret（公众平台 → 开发 → 开发管理 → 开发设置） |
| `TCB_ENV_ID` | 云开发环境 ID |

注意：

- AppSecret 权限很大，只放 GitHub Secrets，不要写进仓库。
- 如果公众平台开启了 **IP 白名单**，GitHub Actions 的动态出口 IP 可能换不到 `access_token`；需要关闭白名单，或改用固定 IP 的 runner/代理。
- 建议用独立的密钥并定期轮换。

### 4. 触发第一次同步

GitHub → Actions → **Sync prices to WeChat Cloud** → Run workflow（只同步当前 catalog，不改物价）；
或 **Update JX3 prices** → Run workflow（先拉取最新物价，再同步）。

完成后检查：

- 云开发控制台 → 数据库 → `prices` → `current` 文档存在；
- 文档里有 `serverPrices`、`stonePrices`、`priceUpdatedAt`。

Secrets 未配置时，两个 workflow 都会打印「跳过云同步」并正常结束，不会失败。

### 5. 首次发布小程序

构建并上传包含云代码的版本：

```bash
cd miniapp
npm install
npm run build:weapp
```

然后微信开发者工具导入 `miniapp/` → 上传 → 备案/提审 → 发布。

**这一步之后**，日常物价更新只需要 GitHub Actions + 云数据库，不再需要发版。

## 日常更新流程

```
price-schedule.yml
  → update-jx3-prices.yml
  → 更新 assets/data.js + miniapp/src/shared/catalog.json
  → build-remote-prices.mjs
  → sync-cloudbase-prices.mjs
  → 云数据库 prices/current
  → 小程序启动 / 进入价格页 / 手动「同步行情」拉到新价
```

- TTL 6 小时；启动时最多每 6 小时拉一次。
- 价格页、设置页提供「同步行情」手动刷新。
- 请求失败时用上次行情；再失败用包内示例价。

## 小程序端行为

- 已校准价（`state.prices`）永远优先，云端行情不会覆盖用户手动价。
- 云端行情单独存 `state.marketPrices` / `state.stoneMarketPrices`，界面标「行情」。
- 五行石同理：`state.stonePrices` 优先，`state.stoneMarketPrices` 次之。
- 设置页显示「云端行情」时间；未配置环境显示「未配置云环境」。
- 小红书端不注册五行石页，也不会调用云同步（`isCloudConfigured()` 只在微信端为真）。

## 验证

```bash
# 生成价格包（不会写云）
cd miniapp
npm run build:prices

# 本地模拟同步（需要三个环境变量，会真实写云）
WX_APPID=wx... WX_APPSECRET=... TCB_ENV_ID=cloud1-... npm run sync:cloud
```

云控制台确认 `prices/current` 的 `priceUpdatedAt` 与 `catalog.json` 一致。

## 常见问题

| 现象 | 原因/处理 |
| --- | --- |
| `85088 该APP未开通云开发` | 小程序未开通云开发，先在开发者工具开通 |
| `40001 / 40014 / 42001` | AppSecret 错、access_token 失效，或 IP 白名单拦截 |
| `DATABASE_REQUEST_FAILED` | 集合 `prices` 未创建，或安全规则太严 |
| 小程序没有「同步行情」按钮 | `CLOUD_ENV` 为空，或运行在小红书端 |
| 同步后仍是示例价 | 云端文档缺少对应 server/item；检查 `prices.json` 与服务器 ID |
| GitHub Actions 跳过 | `WX_APPID/WX_APPSECRET/TCB_ENV_ID` 未配置，属正常 |
| 文档过大 | 当前约 49 KB；脚本超过 800 KB 会报错，届时按服务器拆分文档 |

## 边界

- 只能更新**已有物品/五行石的价格**；新增物品、配方、页面仍需发版。
- 云端行情是公开市场数据；不要上传用户手动价、账号信息。
- 云开发按量计费/有免费额度，以控制台为准；一次更新写 1 个文档，客户端按 TTL 读取。
- 如果暂时不想用云同步：把 `CLOUD_ENV` 置空并重新构建，小程序回到完全离线。
