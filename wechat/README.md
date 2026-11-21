# 精力做什么 · 微信小程序头像与启动图

## 当前素材（科技风 v1，2026-11-22）

与小程序内的科技风主题同源：深蓝→紫→洋红→青流体渐变 + 白色超大「精」字 + 橘色强调。生成脚本在 [`brand/make-miniapp-tech.py`](../brand/make-miniapp-tech.py)。

| 文件 | 用途 | 规格 |
| --- | --- | --- |
| `avatar-144.png` | **微信公众平台后台上传（主文件）** | 144×144 PNG，约 18 KB |
| `avatar-512.png` | 备用 / 其他平台 / 宣传 | 512×512 PNG |
| `avatar-1024.png` | 母版、商店或封面复用 | 1024×1024 PNG（≤2 MB） |
| `avatar-96.png` | 小尺寸可读性检查 | 96×96 PNG |
| `launch-9x16.jpg` | 启动引导页 / 平台宣传竖版 | 941×1672 JPEG，约 125 KB |
| `avatar.svg` | 上一版红印「精」矢量图标，已归档 | 1024 viewBox |

> 小程序内的启动引导页使用同源压缩图 `miniapp/src/assets/launch-default.jpg`（600×1066，约 69 KB；为通过主包 1.5 MB 代码质量线压缩）。头像与启动图不含官方 Logo、官方角色、游戏截图或官方字体。

## 启动图说明

- 微信小程序的**原生启动屏不可自定义**（由平台生成，显示头像/名称）。这里的 `launch-9x16.jpg` 用于：
  1. 小程序内 `pages/guide/index` 的启动引导页默认图；
  2. 公众平台资料页、分享卡片、宣传物料的竖版封面；
  3. 小红书/公众号等外部渠道的 9:16 封面。
- 引导页布局：图片按 `aspectFit` 完整展示，底部浮层（磨砂玻璃卡 + 橘色「进入小程序」按钮 + 倒计时）叠在图片预留的空白区上，5 秒后自动进入总览。
- 若平台后台要求 5:4 或 16:9 的分享图，用 [`brand/tech-v1/cover-5x4-1080x864.png`](../brand/tech-v1/cover-5x4-1080x864.png) / [`brand/tech-v1/cover-16x9-1200x675.png`](../brand/tech-v1/cover-16x9-1200x675.png)，或 `brand/miniapp-cover-5x4.png` / `brand/miniapp-cover-16x9.png`。

## 设计说明

- **字标**：白色「精」+ 橘色下划线 + 三根上涨柱，对应「精力 / 行情 / 收益」，没有玻璃外框，微信圆形裁切不切字。
- **配色**：深蓝紫底 `#120d2a` / 橘色 `#FD7B4C` / 暖白 `#FFE2D2` / 青蓝 `#78D2FF`；与小程序 `theme-tech` 的 CSS 变量一致。
- **可读性**：96px 列表尺寸下仍能读出「精」与橘色下划线；启动图缩到 240px 宽标题仍清楚。
- **数据口径**：251 条配方 / 444 项物品 / 17 个区服，与 `miniapp/README.md` 的计算内核一致；数据更新时改脚本顶部常量再重跑。
- **声明**：非官方玩家工具；示例价可校准；数据仅保存在本机。

## 微信规范与上传

- 官方接口说明：头像支持 BMP / JPEG / JPG / GIF / PNG，**大小不超过 2 MB**，实际始终按正方形展示；一年内可申请修改 5 次（以后台实际提示为准）。
  参考：[修改头像 · 微信开放文档](https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setheadimage.html)
- 后台上传优先用 **`avatar-144.png`**；若提示尺寸过小，改用 `avatar-512.png`。
- 上传后确认 96px 列表尺寸下「精」字与橘色下划线仍可辨认、圆形裁切不切字。

## 重新导出

源文件是脚本生成的 master：

```bash
python3 brand/make-miniapp-tech.py
```

脚本会重写 `brand/tech-v1/` 的母版、本目录的 `avatar-*.png` 与 `launch-9x16.jpg`、`miniapp/src/assets/launch-default.jpg`，并同步 `brand/miniapp-cover-*.png`。只改母版不导出时加 `--no-export`。

> `avatar.svg` 是上一版红印「精」图标，保留用于对比；当前头像以科技风 PNG 为准。Q 版账房角色母版在 `brand/jingli-chibi-v1/`，仅归档。

## 名称提示

「精力做什么」为 5 个汉字，按微信规则一个中文计 2 个字符，共 10 个字符，满足 4–30 字符要求；名称在平台内唯一，是否可用以公众平台注册/改名页面的实时查重结果为准。若被占用，可备选：`精力做点啥`、`今天精力做啥`、`精力收益榜`。

参考：[小程序名称、简称设置规范](https://kf.qq.com/faq/170109umMvm6170109MZNnYV.html)
