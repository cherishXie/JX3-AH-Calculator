# 更新说明分通道

网页端、小程序、小工具各自维护，互不覆盖：

| 通道 | 文件 | 用途 |
| --- | --- | --- |
| 网页端 | `web.json` | `build-site.sh` 生成 `_site/updates.json`，PWA/网页“检查更新”只读它 |
| 小程序 | `miniapp.json` | `miniapp/scripts/sync-release.mjs` 复制为 `src/shared/release.json`，设置页展示 |
| 小工具 | `minitool.json` | `build-minitool.sh` 复制进 zip 的 `release.json` |

规则：

- 只改小程序：更新 `miniapp.json`，不要改 `web.json`；网页端不应出现更新提示。
- 只改小工具：更新 `minitool.json`，不要改 `web.json`。
- 只改网页：更新 `web.json`；网页壳版本变化时才会提示。
- 全局 `CHANGELOG.md` 仍记录所有提交，但它不驱动网页/小程序/小工具的更新提示。
- 价格数据更新不改变网页壳版本，不会触发网页更新提示。
