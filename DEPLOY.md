# 部署与同步

## 线上地址

| 内容 | 地址 |
| --- | --- |
| Web 版 | https://cherishxie.github.io/JX3-AH-Calculator/ |
| 最新小工具 zip（稳定下载） | https://cherishxie.github.io/JX3-AH-Calculator/downloads/jx3-minitool.zip |
| GitHub Actions | https://github.com/cherishXie/JX3-AH-Calculator/actions |
| 小红书创作服务平台 | https://creator.xiaohongshu.com/ |

Pages 发布的是仓库根目录的 Web 版（`index.html` + `assets/`）；小红书小工具仍是离线 zip，两者共用同一份业务代码和价格数据。

## 一次配置（只做一次）

### 1. 开启 Pages

GitHub 仓库 → **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。

> `GITHUB_TOKEN` 不能代替用户开启 Pages，所以这一步必须手动点一次；开启后 `.github/workflows/deploy.yml` 才能部署。

### 2. 绑定远端

```bash
git remote add origin https://github.com/cherishXie/JX3-AH-Calculator.git
```

远端目前只有一个脚手架 commit（`LICENSE` / `README` / `.gitattributes`），本地是完整项目。首次推送二选一：

```bash
# 方式 A：合并远端脚手架（保留 LICENSE，推荐）
git fetch origin
git merge origin/main --allow-unrelated-histories
# README 冲突时保留本地版本
git push -u origin main
```

```bash
# 方式 B：确认远端没有有价值内容后，直接覆盖
git push --force-with-lease -u origin main
```

### 3. 触发第一次部署

推送后打开 Actions，等 **Deploy site and minitool** 跑完；Pages 首次发布通常 1–2 分钟。

## 每次更新

```bash
./scripts/sync.sh "feat: 更新配方数据"
```

脚本会：

1. `scripts/check-minitool.mjs` 审计小工具（无内联脚本、无外网请求、无 module、≤10 MiB）；
2. `scripts/build-minitool.sh` 重打 `剑网三物价助手-minitool.zip`；
3. `scripts/build-site.sh` 生成 `_site/`（含 `downloads/jx3-minitool.zip`）；
4. 提交并推送；
5. Actions 自动：
   - 部署 Web 版到 GitHub Pages；
   - 上传小工具 zip 为 artifact，并随 Pages 发布到 `/downloads/jx3-minitool.zip`。

### 小红书最后一步（人工）

小红书小工具**不能**像 Pages 一样全自动发布：

- 需要创作者账号扫码登录；
- 每次提审都要平台审核；
- 容器要求完全离线，价格只能在构建时写入。

所以 CI 负责“构建 + 校验 + 可下载”，发布保留一步人工：

1. 手机打开 https://cherishxie.github.io/JX3-AH-Calculator/downloads/jx3-minitool.zip 下载；
2. `npx redminitool login`；
3. `npx redminitool upload --file "剑网三物价助手-minitool.zip" --type pkg --yes --json`；
4. `npx redminitool submit --file submit.json --yes`；
5. 审核通过后在创作服务平台点发布，再挂到笔记。

> 如果以后确实要全自动提交，可以把 `~/.redminitool` 的登录态放进 Actions secret，但每次 push 都会产生一个待审版本，且 token 失效会影响发布；不建议默认开启。

## 定时价格更新

`update-jx3-prices.yml` 每天北京时间 09:10 运行，更新 `assets/data.js`、`minitool/assets/data.js`、`miniapp/src/shared/catalog.json` 并提交。提交完成后通过 `workflow_run` 自动触发 `deploy.yml`，所以定时更新也会同步 Pages 和小工具 zip。

## 常见问题

- **Pages 404**：确认 Settings → Pages 的 Source 是 “GitHub Actions”；确认 deploy job 成功；首次发布等 1–2 分钟。
- **`configure-pages` 报 Pages not enabled**：回到 Settings → Pages 手动开启一次。
- **小工具 zip 超过 10 MiB**：`scripts/check-minitool.mjs` 会直接失败，先压缩素材或删无用文件。
- **页面更新了但手机还是旧版**：Pages CDN 有约 10 分钟缓存，强制刷新或换隐私窗口；小工具是离线包，必须重新上传并审核才会更新。
- **子路径**：Pages 地址带 `/JX3-AH-Calculator/`，项目内全部使用相对路径，无需改 `base`。
- **不要提交**：`_site/`、`JX3-AH-Calculator/`（本地脚手架 checkout）、`.DS_Store` 已在 `.gitignore` 中。
