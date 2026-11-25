# 小程序 UI 重构记录（emilkowalski/skills 应用）

> 依据 [emilkowalski/skills](https://github.com/emilkowalski/skills) 的 `mobile-native`、`emil-design-eng`、`apple-design`、`break-ui` 四个 skill 对「精力做什么」微信小程序做页面与交互重构。目标不是把网页表格缩小，而是把同一批功能改成手机原生的信息层级与操作手感。

## 1. 应用了哪些规则

| Skill | 应用到本项目 |
| --- | --- |
| `mobile-native` | 触控热区 ≥ 80–88rpx；去掉 tap highlight；输入框 ≥ 32rpx（H5 不触发 iOS 缩放）；`touch-action: manipulation`；底部弹层/吸底按钮加 `env(safe-area-inset-bottom)`；长按不选中控件文字 |
| `emil-design-eng` | 按压 `scale(0.97)` + 140ms 自定义 `ease-out`；弹层 300ms drawer 曲线；不用 `transition: all`；标题负字距、正文正字距；sheet 从底部进入保持空间一致；减弱动效媒体查询 |
| `apple-design` | 顶栏用「同色 24rpx 淡出」代替硬分割线；玻璃卡只叠一层，避免透上加透；大字号标题紧行高；说明文字提高字重与字距保证可读 |
| `break-ui` | 长配方名、超大金额、缺价/空列表的边界：`min-width:0` + 单行省略、金额 ≥1 万用「万」、空状态给下一步动作 |

## 2. Before / After

| Before | After | Why |
| --- | --- | --- |
| 4 Tab：今日 / 分析 / 五行石 / 我的 | 5 Tab：今日 / 技艺 / 行情 / 五行石 / 我的 | 把网页最高频的「查价」和「生活技艺」提到一级；分析改为二级页 |
| 今日只是一张按技艺的排行 | 今日 = 总览：结论句 + 4 KPI + 满精力方案 + Top10 + 技艺横评 + 分析入口 + 行情就绪度 | 首屏回答「今天精力怎么花」，而不是让用户自己找 |
| 分析 Tab 只有 3 个入口 | 新增完整「精力收益分析」：A/B/C 评级、可做中位、可做组合、Top15、散点、双制品对比、完整表、CSV | 网页 `/analysis` 的核心能力落地到手机 |
| 筛选区展开成一张大卡片，把列表顶走 | 搜索吸底 + 筛选底部 Sheet | 手机上弹层不挤压列表，且关闭即回到原位置 |
| 配方/行情用表格或密集行 | 两行卡：名称 + 副信息 / 右对齐大数字 + 单位 | 窄屏不横向滚动，数字是视觉锚点 |
| `font-size: 24rpx` 的输入框 | `32rpx`（H5 16px），`price-box` 72rpx 高 | 低于 16px 时 iOS 聚焦会放大页面；同时扩大可点区域 |
| chip 52–64rpx 高 | 80rpx 高、28rpx 内边距 | 40pt 触控热区，手指点得中 |
| 控件只有 `:active { opacity }`，部分无反馈 | `hoverClass='v2-pressed'` + `:active { transform: scale(0.97) }`，140ms `cubic-bezier(.23,1,.32,1)` | 按下即反馈；微信 webview 里 `hover-class` 比纯 `:active` 可靠 |
| `transition: all` 式的隐式过渡 | 只写 `transform / opacity / background-color / border-color` | 避免无关属性动画导致掉帧 |
| Sheet 220ms 默认曲线 | 300ms `cubic-bezier(.32,.72,0,1)`，从底部进入 | iOS drawer 手感；空间一致 |
| 顶栏渐变到透明，滚动内容从胶囊后面透出 | 顶栏纯色 + 24rpx 同色淡出 | Apple 式滚动边缘，不做硬分割线，也不让文字穿帮 |
| Taro `Text` 默认 inline，标题和数字挤成一行：「189.19金/点精力」 | 给数字/标题/副标题统一 `display:block` | 信息层级不清是移动端最显眼的「网页感」 |
| 金额直接 `567,557.40` | KPI/方案用 `56.76 万`，小字给精确值 | 大数字不撑破卡片，同时保留精确口径 |
| 技艺描述不限行，长文案把 KPI 顶下去 | `-webkit-line-clamp: 2` + `min-width:0` | 长文案不破坏首屏节奏 |
| 主题 Seg 传 `theme==='dark'?'dark':'light'`，科技风显示成亮色 | 传 `state.settings.theme || 'tech'` | 修掉主题选中态错误 |
| 自绘 Toggle：白色大轨道 + 行内文字 | 88rpx 整行可点，右侧 88×52rpx 轨道，160ms 位移 | 触控行更大，开关语义更清楚 |
| 散点图只有一堆小点，无坐标 | 左侧 y 轴（最高/中位/最低）、25/50/75% 网格、x 轴成本范围、气泡 26–60rpx | 让「成本×收益」可读，而不是装饰 |
| 微信/H5 的 `viewport` 禁用缩放 | 目标端为小程序，不受浏览器缩放影响；H5 预览仍沿用 Taro 模板 | 小程序没有浏览器缩放；H5 若对外发布需单独放开 |

## 3. 只在真机验证的部分

以下无法用 H5/模拟器证明，按 skill 的要求明确标注：

- `hover-class` 在微信 webview / Skyline 下的按压反馈与 `hoverStayTime` 手感。
- 底部 Sheet 在带 Home 指示条的 iPhone 上是否完整避开安全区（已用 `env()`，仍需真机）。
- `backdrop-filter` 在低端 Android 微信内核的降级效果（不支持时应退化为半透明纯色）。
- 键盘弹起时「我的 → 设置」输入框与批量录入 Sheet 的可视区域。
- 5 Tab 在 320pt 窄屏上的文字截断与图标间距。

## 4. 没做的（有意取舍）

- 网页的 PNG/CSV 文件下载 → 小程序改为「复制 CSV / JSON 到剪贴板」，不申请文件系统权限。
- Excel 工作簿下载 → 保留在网页端；小程序「关于」里给链接复制。
- 网页的 14 天审计评级 → 小程序用「17 服报价覆盖 + 当前利润」近似，并在页面写明差异；避免把 1MB 审计数据塞进主包。
- 网页的多物品分布箱线图 / 区间热力图 → 小程序保留单品折线与涨跌榜（Canvas 已有），未新增重型图表。
