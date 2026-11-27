# Cloudflare Worker 定时触发价格更新

Cloudflare 作为主调度，GitHub Actions 的 `schedule` 仅作兜底；不需要 Mac 开机。Cloudflare 全天每 30 分钟 :06 / :36 触发一次
`update-jx3-prices.yml` 的 `workflow_dispatch`。

## 1. 创建 GitHub 细粒度 token

打开 https://github.com/settings/personal-access-tokens/new

- Token name：`jx3-price-cloud-cron`
- Expiration：90 days（到期后更新 Cloudflare secret）
- Resource owner：`cherishXie`
- Repository access：Only select repositories → `JX3-AH-Calculator`
- Repository permissions：
  - **Actions: Read and write**
  - **Metadata: Read-only**（自动勾选）
  - 不要给 Contents / Workflows 写权限

生成后复制 token。**不要提交到仓库，也不要发到聊天里。**

## 2. 登录 Cloudflare 并设置 secret

```bash
cd cloudflare/price-cron
npx wrangler@latest login
npx wrangler@latest secret put GITHUB_TOKEN
npx wrangler@latest secret put TRIGGER_KEY
```

- `GITHUB_TOKEN` 粘贴上一步的 token。
- `TRIGGER_KEY` 自己生成一个随机值，例如 `openssl rand -hex 24`，用于手动测试。

## 3. 部署

```bash
npx wrangler@latest deploy
```

部署输出会给出 Worker URL，例如：

```text
https://jx3-price-cron.<你的子域>.workers.dev
```

Cron 已配置为 UTC：

```text
6,36 * * * *
```

对应北京时间 **全天每 30 分钟**：00:06、00:36、01:06、01:36、…、23:06、23:36。

## 4. 手动测试

```bash
curl -X POST https://jx3-price-cron.<你的子域>.workers.dev/trigger \
  -H "x-trigger-key: <你的 TRIGGER_KEY>"
```

然后去 GitHub Actions 看是否出现一条 `Update JX3 prices` 的 `workflow_dispatch` 运行。
也可以看 Worker 日志：

```bash
npx wrangler@latest tail
```

## 5. 验证定时

到下一个 :06 或 :36 后，Cloudflare 会发一次 dispatch；GitHub Actions 出现
`workflow_dispatch` 运行。Worker 日志会打印 `GitHub workflow_dispatch sent`。

## 安全说明

- token 只存在 Cloudflare encrypted secret 中，不在仓库、不在前端；
- 只有 `Actions: write`，泄露也只能触发这个仓库的工作流，不能改代码；
- token 到期后 Worker 会返回 401，重新 `secret put GITHUB_TOKEN` 即可；
- 本机 launchd 已取消；GitHub Actions `schedule` 每 2 小时作为外部调度失效时的兜底。


## 7. 用户反馈自动开 Issue

同一 Worker 新增 `POST /feedback`，前端提交后：

1. Worker 校验来源 / 长度 / IP（1 分钟最多一次）；
2. 用 `GITHUB_TOKEN` dispatch `dev` 分支的 `feedback.yml`；
3. `feedback.yml` 用 Actions 自带的 `GITHUB_TOKEN` 创建 Issue；
4. Issue 会自动附带页面、区服、版本、行情时间、视口、设备、匿名客户端和浏览器信息。

需要：

- Cloudflare Worker secret `GITHUB_TOKEN`：仓库 **Actions: Read and write**；
- GitHub 仓库 secret `CLOUDFLARE_API_TOKEN`（或 `CF_API_TOKEN`）：用于 `Deploy feedback worker` workflow 部署；
- `feedback.yml` 必须在 `dev` 分支（当前 `FEEDBACK_REF = 'dev'`）。

如果 Worker 未部署或 token 失效，前端会自动退回 GitHub 预填 Issue 页面，不会丢失反馈内容。
