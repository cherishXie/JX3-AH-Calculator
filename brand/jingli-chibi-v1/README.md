# Q 版账房角色素材（用户提供 · 已归档）

> 2026-11-22 起，小程序头像与启动图改为科技风 v1（见 `brand/tech-v1/` 与 `brand/make-miniapp-tech.py`）。本目录仅作对比保留，不再被打包或上传。

| 文件 | 用途 |
| --- | --- |
| `icon-girl-1254.png` | 旧头像母版（曾导出 `wechat/avatar-144/512/1024/96.png`） |
| `launch-girl-941x1672.png` | 旧启动图母版（曾导出 `wechat/launch-9x16.jpg` 与 `miniapp/src/assets/launch-default.jpg`） |

## 说明

- 角色插画由用户提供并授权在本项目使用；画面不含官方 Logo、官方角色、游戏截图或官方字体。
- 同目录下的 `icon-original.png`、`icon-512.png`、`icon-144.png`、`launch-1080x1920.png`、`launch-9x16.png` 是另一版（男角色）素材，从未进入构建，保留仅作对比。
- 启动引导页按 `aspectFit` 完整展示，不裁标题与角色；底部浮层承载「进入小程序 + 倒计时」。
- 微信原生启动屏不可自定义；该图曾用于小程序内引导页、资料页/分享卡片与外部宣传。

## 重新导出

当前素材请用 `python3 brand/make-miniapp-tech.py`；旧图导出命令已随归档移除。
