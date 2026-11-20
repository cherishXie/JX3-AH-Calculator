# 精力做什么 · 微信小程序头像与启动图

## 当前素材（用户提供的 Q 版账房角色）

| 文件 | 用途 | 规格 |
| --- | --- | --- |
| `avatar-144.png` | **微信公众平台后台上传（主文件）** | 144×144 PNG，约 42 KB |
| `avatar-512.png` | 备用 / 其他平台 / 宣传 | 512×512 PNG，约 413 KB |
| `avatar-1024.png` | 母版、商店或封面复用 | 1024×1024 PNG，约 1.5 MB（≤2 MB） |
| `avatar-96.png` | 小尺寸可读性检查 | 96×96 PNG，约 19 KB |
| `launch-9x16.jpg` | 启动引导页 / 平台宣传竖版 | 941×1672 JPEG，约 270 KB |
| `avatar.svg` | 上一版红印「精」矢量图标，已归档 | 1024 viewBox |

> 角色插画由用户提供并授权在本项目使用；画面不含官方 Logo、官方角色、游戏截图或官方字体。小程序内的启动引导页使用同源压缩图 `miniapp/src/assets/launch-default.jpg`（941×1672，约 231 KB）。

## 启动图说明

- 微信小程序的**原生启动屏不可自定义**（由平台生成，显示头像/名称）。这里的 `launch-9x16.jpg` 用于：
  1. 小程序内 `pages/guide/index` 的启动引导页默认图；
  2. 公众平台资料页、分享卡片、宣传物料的竖版封面；
  3. 小红书/公众号等外部渠道的 9:16 封面。
- 引导页布局：图片按 `aspectFit` 完整展示（不裁掉标题和角色），底部浮层放「进入小程序 + 倒计时」，5 秒后自动进入总览。
- 若平台后台要求 5:4 或 16:9 的分享图，可从 `launch-9x16.jpg` 居中裁切，或用 `brand/miniapp-cover-5x4.png` / `brand/miniapp-cover-16x9.png`。

## 设计说明

- **Q 版账房角色**：算盘、药碾、草药、五行石与账本，对应生活技艺、五行石与收益计算；青绿底色和米黄纸感让头像在小程序列表里更亲和。
- **方形构图**：人物与算盘居中，144px 列表尺寸下脸部和算盘仍可辨；微信圆形/圆角裁切不切脸。
- **配色**：米黄纸 `#f6eedf` / 青绿 `#1f5c3a` / 朱砂 `#d94a3a` / 精力金 `#e8b44a`。
- **声明**：非官方玩家工具；示例价可校准；数据仅保存在本机。

## 微信规范与上传

- 官方接口说明：头像支持 BMP / JPEG / JPG / GIF / PNG，**大小不超过 2 MB**，实际始终按正方形展示；一年内可申请修改 5 次（以后台实际提示为准）。
  参考：[修改头像 · 微信开放文档](https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setheadimage.html)
- 后台上传优先用 **`avatar-144.png`**；若提示尺寸过小，改用 `avatar-512.png`。
- 上传后确认 96px 列表尺寸下人物脸部、算盘和青绿底仍可辨认。

## 重新导出

源文件在 `brand/jingli-chibi-v1/`：

```bash
python3 - <<'PY'
from PIL import Image
icon = Image.open('brand/jingli-chibi-v1/icon-girl-1254.png').convert('RGB')
for size, name in [(1024,'avatar-1024'), (512,'avatar-512'), (144,'avatar-144'), (96,'avatar-96')]:
    icon.resize((size, size), Image.LANCZOS).save(f'wechat/{name}.png', 'PNG', optimize=True)
launch = Image.open('brand/jingli-chibi-v1/launch-girl-941x1672.png').convert('RGB')
launch.save('wechat/launch-9x16.jpg', 'JPEG', quality=86, optimize=True, progressive=True)
launch.save('miniapp/src/assets/launch-default.jpg', 'JPEG', quality=82, optimize=True, progressive=True)
PY
```

> `avatar.svg` 是上一版红印「精」图标，保留用于对比；当前头像以上面的 Q 版角色为准。

## 名称提示

「精力做什么」为 5 个汉字，按微信规则一个中文计 2 个字符，共 10 个字符，满足 4–30 字符要求；名称在平台内唯一，是否可用以公众平台注册/改名页面的实时查重结果为准。若被占用，可备选：`精力做点啥`、`今天精力做啥`、`精力收益榜`。

参考：[小程序名称、简称设置规范](https://kf.qq.com/faq/170109umMvm6170109MZNnYV.html)
