# 精力做什么 · 微信小程序头像

## 文件

| 文件 | 用途 | 规格 |
| --- | --- | --- |
| `avatar-144.png` | **微信公众平台后台上传（主文件）** | 144×144，约 12 KB |
| `avatar-512.png` | 备用 / 其他平台 / 宣传 | 512×512，约 58 KB |
| `avatar-1024.png` | 母版、商店或封面复用 | 1024×1024，约 140 KB |
| `avatar-96.png` | 小尺寸可读性检查 | 96×96，约 7 KB |
| `avatar.svg` | 矢量源文件 | 1024 viewBox，系统字体 |
| `screenshots/01-overview.png` ~ `04-analysis.png` | 提审截图占位（H5 同构预览） | 780×1688，四个 Tab |
| `screenshots/wechat-real-overview.png` | 微信开发者工具真实截图（总览） | 640×1386 JPEG |
| `screenshots/wechat-real-stones.png` | 微信开发者工具真实截图（五行石） | 640×1386 JPEG |
| `screenshots/wechat-real-stones-bottom.png` | 五行石页下半部分（7/8 级、剥离参考） | 640×1386 JPEG |
| `screenshots/wechat-real-stones-jackpot.png` | 七级爆率改 25% 后的盈亏验证 | 640×1386 JPEG |
| `screenshots/wechat-real-prices.png` | 价格库（含五行石行情专区） | 640×1386 JPEG |
| `screenshots/wechat-real-overview-stone.png` | 总览五行石卡 | 640×1386 JPEG |
| `screenshots/wechat-real-analysis.png` | 成本×收益散点 + 各技艺箱线图 | 640×1386 JPEG |
| `screenshots/wechat-real-settings-tax.png` | 设置页交易税率 | 640×1386 JPEG |
| `screenshots/wechat-real-stone-formula.png` | 五行石公式编辑页 | 640×1386 JPEG |

> `01`–`04` 是 Taro H5 同构渲染的占位图；`wechat-real-*` 是微信开发者工具基础库 **3.18.0** 模拟器的真实截图，带导航栏/状态栏。正式提审建议在开发者工具统一重截 5 张（新增五行石 Tab）。

## 微信端接入状态

- 微信构建：**10 页 / 5 Tab**（总览、技艺、价格、分析、五行石；另有五行石公式、物价走势、突破升级、配方详情等子页），主包约 **1.28 MB**。
- AppID 已写入 `miniapp/project.config.json`；头像用 `avatar-144.png`。
- 静态验收：`cd miniapp && npm run verify:weapp`。
- 官方 `wechatide` Skill 已跑通编译、模拟器截图、console 检查；完整流程见 [`../miniapp/WECHAT-DEPLOY.md`](../miniapp/WECHAT-DEPLOY.md)。
- 可选云端行情：GitHub Actions 写微信云开发数据库，配置见 [`../miniapp/CLOUD-SYNC.md`](../miniapp/CLOUD-SYNC.md)；`CLOUD_ENV` 为空时保持离线。
- 小红书仍保持 6 页 / 4 Tab，五行石页与公式编辑页只在微信端注册。

## 设计说明

- **红印「精」**：延续原「价」印的品牌资产，在小程序列表里一眼可认；单字在 144px 下仍然清楚。
- **金色闪电徽章**：把「精力」变成图形，和红印形成冷暖对比；也是 96px 下仍能辨认的第二记忆点。
- **深蓝工作台底**：头像沿用 `#020817` 的深蓝底；小程序默认亮色，可在设置页或顶部按钮切换暗色。
- **安全区**：主体距四边 ≥ 90px（约 9%），微信裁圆角或圆形展示时不切字、不切徽章。
- **配色**：`#020817` 背景 / `#E10600` 印泥红 / `#F5B301` 精力金 / `#F8FAFC` 字白。

## 微信规范与上传

- 官方接口说明：头像图片支持 BMP / JPEG / JPG / GIF / PNG，**大小不超过 2 MB**，实际头像始终为正方形；一年内可申请修改 5 次（以后台实际提示为准）。
  参考：[修改头像 · 微信开放文档](https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setheadimage.html)
- 公众平台后台上传时使用 **`avatar-144.png`** 即可，这是后台推荐的头像展示尺寸；如页面提示尺寸过小，改用 `avatar-512.png`。
- 上传后确认 96px 列表尺寸下「精」和闪电仍可辨认。

## 重新导出

```bash
cd <repo>
rsvg-convert -w 1024 -h 1024 wechat/avatar.svg -o wechat/avatar-1024.png
rsvg-convert -w 512  -h 512  wechat/avatar.svg -o wechat/avatar-512.png
rsvg-convert -w 144  -h 144  wechat/avatar.svg -o wechat/avatar-144.png
rsvg-convert -w 96   -h 96   wechat/avatar.svg -o wechat/avatar-96.png
```

> 字体使用系统中文字体（PingFang SC / Hiragino Sans GB / Heiti SC）。换机器导出时若字形变化，优先在 macOS 上导出，或把「精」转成路径后再分发 SVG。

## 名称提示

「精力做什么」为 5 个汉字，按微信规则一个中文计 2 个字符，共 10 个字符，满足 4–30 字符要求；名称在平台内唯一，是否可用以公众平台注册/改名页面的实时查重结果为准。若被占用，可备选：`精力做点啥`、`今天精力做啥`、`精力收益榜`。

参考：[小程序名称、简称设置规范](https://kf.qq.com/faq/170109umMvm6170109MZNnYV.html)
