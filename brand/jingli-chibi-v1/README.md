# Q 版账房角色素材（用户提供）

## 当前使用

| 文件 | 用途 |
| --- | --- |
| `icon-girl-1254.png` | 头像母版，导出 `wechat/avatar-144/512/1024/96.png` |
| `launch-girl-941x1672.png` | 启动图母版，导出 `wechat/launch-9x16.jpg` 与 `miniapp/src/assets/launch-default.jpg` |

## 说明

- 角色插画由用户提供并授权在本项目使用；画面不含官方 Logo、官方角色、游戏截图或官方字体。
- 同目录下的 `icon-original.png`、`icon-512.png`、`icon-144.png`、`launch-1080x1920.png`、`launch-9x16.png` 是另一版（男角色）素材，当前构建**未使用**，保留仅作对比。
- 启动引导页按 `aspectFit` 完整展示，不裁标题与角色；底部浮层承载「进入小程序 + 倒计时」。
- 小程序内打包版本压到 **600×1066 / 约 94 KB**，主包约 1.55 MB，已过开发者工具 1.5MB 代码质量线。
- 微信原生启动屏不可自定义；本图用于小程序内引导页、资料页/分享卡片与外部宣传。

## 重新导出

见 `wechat/README.md` 的「重新导出」一节。
