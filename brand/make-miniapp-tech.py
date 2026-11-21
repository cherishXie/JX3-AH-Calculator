#!/usr/bin/env python3
"""用 tech-xhs-image 的视觉 DNA 生成「精力做什么」微信小程序头像 + 封面/启动图。

设计语言（与技能一致，不引入新风格）：
- 深蓝 → 紫 → 洋红 → 青的流体渐变底 + 一层暖橘光
- 磨砂玻璃卡：半透明、圆角、细白描边、内高光
- 标题 800/900 字重、超大字号；橘色只做强调（下划线、序号、CTA）
- 数字用 tabular-nums，口径写清楚

输出（master + 线上导出）：
  brand/tech-v1/icon-1024.png                头像母版 1024×1024
  brand/tech-v1/launch-1080x1920.png         启动图母版 9:16
  brand/tech-v1/cover-5x4-1080x864.png       分享卡 5:4
  brand/tech-v1/cover-16x9-1200x675.png      横版分享卡 16:9
  brand/tech-v1/preview.png                  三尺寸预览（自查用）
  wechat/avatar-{1024,512,144,96}.png        公众平台后台上传
  wechat/launch-9x16.jpg                     941×1672 启动图
  miniapp/src/assets/launch-default.jpg       600×1066（打进主包，≤110KB）
  brand/miniapp-{launch-9x16,cover-5x4,cover-16x9}.png

用法：
  python3 brand/make-miniapp-tech.py                 # 生成 + 导出
  python3 brand/make-miniapp-tech.py --no-export     # 只生成 master
  python3 brand/make-miniapp-tech.py --skill-dir DIR # 指定 tech-xhs-image 路径

依赖：Python 3.9+、playwright、Pillow、Chromium。
字体默认取 tech-xhs-image 的 Noto Sans SC；找不到技能目录时退回系统中文字体。
"""
from __future__ import annotations

import argparse
import os
import shutil
import tempfile
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "brand" / "tech-v1"
DEFAULT_SKILL = Path.home() / ".dsh" / "skills" / "tech-xhs-image"

# 数据口径（与 miniapp/README.md「计算内核」一致：444 物品 / 251 配方 / 17 服务器）
N_RECIPES, N_ITEMS, N_SERVERS = 251, 444, 17

FONT_STACK = (
    '"Noto Sans SC Variable", "PingFang SC", "HarmonyOS Sans SC", '
    '"Source Han Sans SC", "Microsoft YaHei", sans-serif'
)

CSS = f"""
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html, body {{ margin: 0; background: #0b0b1a; }}
body {{ font-family: {FONT_STACK}; -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision; }}

.canvas {{
  position: relative;
  overflow: hidden;
  isolation: isolate;
  color: #fff;
  background-color: #120d2a;
  background-image:
    radial-gradient(42% 26% at 100% 0%, rgba(96, 20, 44, 0.42) 0%, rgba(96, 20, 44, 0) 70%),
    radial-gradient(60% 44% at 101% 42%, rgba(235, 92, 156, 0.95) 0%, rgba(235, 92, 156, 0) 66%),
    radial-gradient(56% 36% at 52% 56%, rgba(210, 124, 64, 0.62) 0%, rgba(210, 124, 64, 0) 64%),
    radial-gradient(66% 58% at -2% 30%, rgba(30, 98, 180, 0.95) 0%, rgba(30, 98, 180, 0) 68%),
    radial-gradient(66% 42% at 0% 96%, rgba(12, 112, 132, 0.95) 0%, rgba(12, 112, 132, 0) 64%),
    radial-gradient(50% 30% at 55% 103%, rgba(44, 110, 170, 0.55) 0%, rgba(44, 110, 170, 0) 70%),
    radial-gradient(62% 42% at 100% 100%, rgba(110, 64, 214, 0.95) 0%, rgba(110, 64, 214, 0) 64%),
    linear-gradient(120deg, #101d4c 0%, #1c1238 50%, #130b2c 100%);
}}
/* 颗粒 + 暗角：大面积渐变不出现色带 */
.canvas::before {{
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  opacity: 0.06; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}}
.canvas::after {{
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: radial-gradient(120% 90% at 50% 50%, transparent 52%, rgba(6, 6, 20, 0.42) 100%);
}}

.glass {{
  background: linear-gradient(158deg, rgba(255,255,255,0.13), rgba(255,255,255,0.045) 50%, rgba(255,255,255,0.075));
  border: 1.5px solid rgba(255, 255, 255, 0.17);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.32), inset 0 2px 0 rgba(255, 255, 255, 0.20);
  -webkit-backdrop-filter: blur(24px) saturate(1.12);
  backdrop-filter: blur(24px) saturate(1.12);
}}

/* ---------- 头像：方形安全区，圆形裁切不丢信息 ---------- */
.canvas.icon {{ width: 1024px; height: 1024px; }}
.icon-glow {{
  position: absolute; left: 50%; top: 54%; width: 880px; height: 880px;
  transform: translate(-50%, -50%); border-radius: 50%;
  background: radial-gradient(circle, rgba(253,123,76,0.40) 0%, rgba(253,123,76,0.12) 44%, rgba(253,123,76,0) 70%);
  filter: blur(10px); z-index: 0;
}}
.icon-mark {{
  position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  display: flex; flex-direction: column; align-items: center; z-index: 2;
}}
.icon-glyph {{
  font-size: 436px; font-weight: 900; line-height: 1; letter-spacing: -0.05em;
  color: #ffffff;
  text-shadow: 0 10px 46px rgba(0, 0, 0, 0.34);
  margin-left: -0.02em;
}}
.icon-rule {{
  width: 176px; height: 16px; border-radius: 8px; margin-top: 26px;
  background: linear-gradient(90deg, #ff9a6b, #fd7b4c);
  box-shadow: 0 8px 30px rgba(253, 123, 76, 0.55);
}}
.icon-bars {{ display: flex; align-items: flex-end; gap: 14px; height: 70px; margin-top: 34px; }}
.icon-bars i {{ display: block; width: 24px; border-radius: 6px; }}
.icon-bars i:nth-child(1) {{ height: 32px; background: rgba(253,123,76,0.95); }}
.icon-bars i:nth-child(2) {{ height: 50px; background: rgba(255,255,255,0.72); }}
.icon-bars i:nth-child(3) {{ height: 68px; background: rgba(120, 210, 255, 0.95); }}

/* ---------- 通用排版 ---------- */
.brand {{ position: absolute; display: flex; align-items: center; gap: 26px; z-index: 2; }}
.seal {{
  border-radius: 26%; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(150deg, #ff9a6b, #fd7b4c);
  box-shadow: 0 12px 36px rgba(253, 123, 76, 0.42);
  color: #2a1208; font-weight: 900; letter-spacing: 0;
}}
.brand-name {{ font-weight: 800; color: #fff; letter-spacing: -0.01em; }}
.brand-sub {{ font-weight: 600; color: rgba(255,255,255,0.52); letter-spacing: 0.18em; }}

.kicker {{
  position: absolute; display: flex; align-items: center; gap: 18px;
  font-size: 30px; font-weight: 600; letter-spacing: 0.14em;
  color: #ffd3c0; z-index: 2;
}}
.kicker::before {{
  content: ""; width: 58px; height: 3px; border-radius: 2px;
  background: linear-gradient(90deg, #fd7b4c, rgba(253,123,76,0.1));
}}

h1 {{ position: absolute; z-index: 2; font-weight: 900; letter-spacing: -0.035em; }}
h1 .l1 {{ display: block; color: #fff; }}
h1 .l2 {{
  display: block; margin-top: 6px;
  background: linear-gradient(96deg, #ffe6d8 0%, #ffb08c 46%, #fd7b4c 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}}
.rule {{
  position: absolute; border-radius: 8px;
  background: linear-gradient(90deg, #ff9a6b, #fd7b4c);
  box-shadow: 0 10px 34px rgba(253, 123, 76, 0.5); z-index: 2;
}}
.sub {{ position: absolute; z-index: 2; font-weight: 400; color: rgba(255,255,255,0.82); }}
.sub b {{ font-weight: 600; color: #fff; }}

.panel {{ position: absolute; z-index: 2; border-radius: 40px; padding: 42px 46px 36px; }}
.panel-head {{ display: flex; align-items: center; justify-content: space-between; }}
.panel-title {{ font-size: 30px; font-weight: 700; color: rgba(255,255,255,0.92); }}
.panel-tag {{
  font-size: 20px; font-weight: 600; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.66); padding: 8px 16px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.06);
}}
.stats {{ display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 30px; }}
.stat {{ padding: 0 8px; border-left: 1px solid rgba(255,255,255,0.12); }}
.stat:first-child {{ border-left: 0; padding-left: 0; }}
.stat .v {{
  font-size: 92px; font-weight: 800; line-height: 1.04; letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  background: linear-gradient(180deg, #ffffff 30%, #ffd9c8 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}}
.stat .u {{ font-size: 26px; font-weight: 600; color: rgba(255,255,255,0.56); margin-left: 8px; }}
.stat .l {{ display: block; margin-top: 10px; font-size: 26px; color: rgba(255,255,255,0.58); }}

.chips {{ position: absolute; display: flex; gap: 16px; z-index: 2; }}
.chip {{
  display: flex; align-items: center; gap: 14px; padding: 0 26px;
  border-radius: 999px; font-weight: 600; color: rgba(255,255,255,0.92);
}}
.chip i {{ width: 10px; height: 10px; border-radius: 50%; background: #fd7b4c; box-shadow: 0 0 14px rgba(253,123,76,0.9); }}

.foot {{ position: absolute; z-index: 2; font-size: 23px; font-weight: 500; color: rgba(255,255,255,0.46); }}
.foot-line {{ position: absolute; height: 1px; background: linear-gradient(90deg, rgba(253,123,76,0.5), rgba(255,255,255,0.04)); z-index: 2; }}

/* 装饰：行情折线 + 发光节点 */
.spark {{ position: absolute; z-index: 1; opacity: 0.75; }}

/* ---------- 启动图 9:16 ---------- */
.canvas.launch {{ width: 1080px; height: 1920px; }}
.launch .brand {{ left: 96px; top: 104px; }}
.launch .seal {{ width: 88px; height: 88px; font-size: 48px; }}
.launch .brand-name {{ font-size: 44px; }}
.launch .brand-sub {{ font-size: 20px; margin-top: 8px; letter-spacing: 0.16em; }}
.launch .kicker {{ left: 96px; top: 322px; }}
.launch h1 {{ left: 90px; top: 392px; font-size: 140px; line-height: 1.12; }}
.launch h1 .l2 {{ font-size: 164px; line-height: 1.06; margin-top: 10px; }}
.launch .rule {{ left: 96px; top: 790px; width: 208px; height: 16px; }}
.launch .sub {{ left: 96px; top: 846px; width: 900px; font-size: 41px; line-height: 1.6; }}
.launch .panel {{ left: 96px; top: 1010px; width: 888px; height: 352px; }}
.launch .stats {{ margin-top: 24px; }}
.launch .chips {{ left: 96px; top: 1434px; }}
.launch .chip {{ height: 62px; font-size: 27px; border-radius: 999px; }}
.launch .foot {{ left: 96px; top: 1600px; }}
.launch .foot-line {{ left: 96px; top: 1656px; width: 888px; }}
.launch .spark {{ right: -80px; top: 1666px; width: 620px; height: 270px; opacity: 0.38; }}

/* ---------- 5:4 分享卡 ---------- */
.canvas.cover54 {{ width: 1080px; height: 864px; }}
.cover54 .brand {{ left: 76px; top: 66px; }}
.cover54 .seal {{ width: 72px; height: 72px; font-size: 38px; }}
.cover54 .brand-name {{ font-size: 34px; }}
.cover54 .brand-sub {{ font-size: 15px; margin-top: 6px; letter-spacing: 0.16em; }}
.cover54 .kicker {{ left: 76px; top: 196px; font-size: 24px; }}
.cover54 h1 {{ left: 72px; top: 240px; font-size: 98px; line-height: 1.1; }}
.cover54 h1 .l2 {{ font-size: 112px; margin-top: 4px; }}
.cover54 .rule {{ left: 76px; top: 512px; width: 150px; height: 13px; }}
.cover54 .sub {{ left: 76px; top: 556px; width: 820px; font-size: 30px; line-height: 1.5; }}
.cover54 .strip {{
  position: absolute; left: 76px; top: 652px; width: 928px; height: 104px;
  border-radius: 28px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 34px; z-index: 2;
}}
.cover54 .strip span {{ font-size: 30px; color: rgba(255,255,255,0.62); }}
.cover54 .strip b {{
  font-size: 46px; font-weight: 800; color: #fff; margin-right: 10px;
  font-variant-numeric: tabular-nums;
}}
.cover54 .foot {{ left: 76px; top: 806px; font-size: 21px; }}

/* ---------- 16:9 横版 ---------- */
.canvas.cover169 {{ width: 1200px; height: 675px; }}
.cover169 .brand {{ left: 64px; top: 52px; }}
.cover169 .seal {{ width: 60px; height: 60px; font-size: 32px; }}
.cover169 .brand-name {{ font-size: 28px; }}
.cover169 .brand-sub {{ font-size: 13px; margin-top: 5px; letter-spacing: 0.16em; }}
.cover169 .kicker {{ left: 64px; top: 158px; font-size: 20px; }}
.cover169 h1 {{ left: 60px; top: 196px; font-size: 82px; line-height: 1.1; }}
.cover169 h1 .l2 {{ font-size: 94px; margin-top: 2px; }}
.cover169 .rule {{ left: 64px; top: 414px; width: 128px; height: 11px; }}
.cover169 .sub {{ left: 64px; top: 452px; width: 560px; font-size: 25px; line-height: 1.5; }}
.cover169 .chips {{ left: 64px; top: 566px; }}
.cover169 .chip {{ height: 46px; font-size: 20px; padding: 0 20px; }}
.cover169 .panel {{ left: 668px; top: 150px; width: 468px; height: 442px; padding: 34px 36px 30px; border-radius: 34px; }}
.cover169 .panel-title {{ font-size: 24px; }}
.cover169 .stats {{ grid-template-columns: 1fr; margin-top: 16px; }}
.cover169 .stat {{ border-left: 0; padding: 16px 0; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: baseline; }}
.cover169 .stat:first-child {{ border-top: 0; padding-top: 0; }}
.cover169 .stat .v {{ font-size: 58px; }}
.cover169 .stat .u {{ font-size: 20px; }}
.cover169 .stat .l {{ margin: 0 0 0 auto; font-size: 20px; }}
.cover169 .foot {{ left: 64px; top: 634px; font-size: 17px; }}
"""

HTML = """<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8">
<title>精力做什么 · tech assets</title>
{font_link}
<style>{css}</style>
</head><body>
{body}
</body></html>"""


def page_icon() -> str:
    return f"""
<div class="canvas icon" id="icon">
  <div class="icon-glow"></div>
  <div class="icon-mark">
    <div class="icon-glyph">精</div>
    <div class="icon-rule"></div>
    <div class="icon-bars"><i></i><i></i><i></i></div>
  </div>
</div>
"""


def spark_svg(w: int, h: int) -> str:
    # 抽象行情折线：只做氛围，不承诺实时
    pts = [(0, .82), (.14, .62), (.26, .70), (.4, .44), (.54, .52), (.68, .28), (.82, .36), (1, .16)]
    d = " ".join(f"{x*w:.0f},{y*h:.0f}" for x, y in pts)
    area = f"0,{h} " + d + f" {w},{h}"
    dots = "".join(
        f'<circle cx="{x*w:.0f}" cy="{y*h:.0f}" r="4" fill="#ffd9c8" opacity="0.85"/>'
        for x, y in pts[3::2]
    )
    return f"""<svg class="spark" width="{w}" height="{h}" viewBox="0 0 {w} {h}" fill="none">
  <defs><linearGradient id="sp" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fd7b4c" stop-opacity="0.30"/>
    <stop offset="1" stop-color="#fd7b4c" stop-opacity="0"/>
  </linearGradient></defs>
  <polygon points="{area}" fill="url(#sp)"/>
  <polyline points="{d}" stroke="rgba(255,196,168,0.75)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  {dots}
</svg>"""


def page_launch() -> str:
    return f"""
<div class="canvas launch" id="launch">
  {spark_svg(560, 260)}
  <div class="brand">
    <div class="seal">精</div>
    <div>
      <div class="brand-name">精力做什么</div>
      <div class="brand-sub">JX3 LIFE PROFIT LEDGER · 玩家自制</div>
    </div>
  </div>
  <div class="kicker">剑网3 · 苍生铸世 50 级</div>
  <h1><span class="l1">今天精力</span><span class="l2">做什么？</span></h1>
  <div class="rule"></div>
  <div class="sub">按本服物价，算清<br>生活技艺 · 五行石 · 突破收益</div>

  <div class="panel glass">
    <div class="panel-head">
      <div class="panel-title">本服行情看板</div>
      <div class="panel-tag">示例价可校准</div>
    </div>
    <div class="stats">
      <div class="stat"><span class="v">{N_RECIPES}</span><span class="u">条</span><span class="l">生活技艺配方</span></div>
      <div class="stat"><span class="v">{N_ITEMS}</span><span class="u">项</span><span class="l">可查价物品</span></div>
      <div class="stat"><span class="v">{N_SERVERS}</span><span class="u">个</span><span class="l">区服物价</span></div>
    </div>
  </div>

  <div class="chips">
    <div class="chip glass"><i></i>物价走势</div>
    <div class="chip glass"><i></i>区服趋势</div>
    <div class="chip glass"><i></i>突破升级</div>
  </div>
  <div class="foot">非官方玩家工具 · 示例价可校准 · 数据仅存本机</div>
  <div class="foot-line"></div>
</div>
"""


def page_cover54() -> str:
    return f"""
<div class="canvas cover54" id="cover54">
  <div class="brand">
    <div class="seal">精</div>
    <div>
      <div class="brand-name">精力做什么</div>
      <div class="brand-sub">JX3 LIFE PROFIT LEDGER · 玩家自制</div>
    </div>
  </div>
  <div class="kicker">剑网3 · 苍生铸世 50 级</div>
  <h1><span class="l1">今天精力</span><span class="l2">做什么？</span></h1>
  <div class="rule"></div>
  <div class="sub">按本服物价，算清生活技艺、五行石与突破收益</div>

  <div class="strip glass">
    <span><b>{N_RECIPES}</b> 条配方</span>
    <span><b>{N_ITEMS}</b> 项物品</span>
    <span><b>{N_SERVERS}</b> 个区服</span>
  </div>
  <div class="foot">非官方玩家工具 · 示例价可校准 · 数据仅存本机</div>
</div>
"""


def page_cover169() -> str:
    return f"""
<div class="canvas cover169" id="cover169">
  <div class="brand">
    <div class="seal">精</div>
    <div>
      <div class="brand-name">精力做什么</div>
      <div class="brand-sub">JX3 LIFE PROFIT LEDGER · 玩家自制</div>
    </div>
  </div>
  <div class="kicker">剑网3 · 苍生铸世 50 级</div>
  <h1><span class="l1">今天精力</span><span class="l2">做什么？</span></h1>
  <div class="rule"></div>
  <div class="sub">按本服物价，算清生活技艺、五行石与突破收益</div>
  <div class="chips">
    <div class="chip glass"><i></i>物价走势</div>
    <div class="chip glass"><i></i>区服趋势</div>
    <div class="chip glass"><i></i>突破升级</div>
  </div>
  <div class="panel glass">
    <div class="panel-head">
      <div class="panel-title">本服行情看板</div>
    </div>
    <div class="stats">
      <div class="stat"><span class="v">{N_RECIPES}</span><span class="u">条配方</span><span class="l">生活技艺</span></div>
      <div class="stat"><span class="v">{N_ITEMS}</span><span class="u">项物品</span><span class="l">可查价</span></div>
      <div class="stat"><span class="v">{N_SERVERS}</span><span class="u">个区服</span><span class="l">物价样本</span></div>
    </div>
  </div>
  <div class="foot">非官方玩家工具 · 示例价可校准 · 数据仅存本机</div>
</div>
"""


ASSETS = [
    # name, element id, css w, css h, target output size
    ("icon", "icon", 1024, 1024, (1024, 1024)),
    ("launch", "launch", 1080, 1920, (1080, 1920)),
    ("cover-5x4", "cover54", 1080, 864, (1080, 864)),
    ("cover-16x9", "cover169", 1200, 675, (1200, 675)),
]


def build_html(font_link: str) -> str:
    body = page_icon() + page_launch() + page_cover54() + page_cover169()
    return HTML.format(font_link=font_link, css=CSS, body=body)


def render(out_dir: Path, skill_dir: Path | None) -> dict[str, Path]:
    out_dir.mkdir(parents=True, exist_ok=True)
    tmp = Path(tempfile.mkdtemp(prefix="jx3-tech-"))
    font_link = ""
    if skill_dir and (skill_dir / "assets" / "fonts" / "index.css").exists():
        os.symlink(skill_dir / "assets", tmp / "assets")
        font_link = '<link rel="stylesheet" href="assets/fonts/index.css">'
        print(f"字体：{skill_dir / 'assets' / 'fonts'}")
    else:
        print("字体：未找到 tech-xhs-image，退回系统中文字体")

    html_path = tmp / "index.html"
    html_path.write_text(build_html(font_link), encoding="utf-8")

    written: dict[str, Path] = {}
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, el_id, w, h, target in ASSETS:
            page = browser.new_page(viewport={"width": w, "height": h}, device_scale_factor=2)
            page.goto(html_path.as_uri())
            page.wait_for_function("document.fonts.status === 'loaded'", timeout=30000)
            page.evaluate("document.fonts.ready")
            page.wait_for_timeout(120)
            el = page.query_selector("#" + el_id)
            shot = out_dir / f"{name}@2x.png"
            el.screenshot(path=str(shot))
            im = Image.open(shot).convert("RGB")
            im = im.resize(target, Image.LANCZOS)
            final = out_dir / f"{name}-{target[0]}x{target[1]}.png"
            im.save(final, "PNG", optimize=True)
            shot.unlink()
            written[name] = final
            print(f"✓ {final.relative_to(ROOT)}  {im.width}×{im.height}")
            page.close()
        browser.close()
    shutil.rmtree(tmp, ignore_errors=True)
    return written


def export(masters: dict[str, Path]) -> None:
    icon = Image.open(masters["icon"]).convert("RGB")
    launch = Image.open(masters["launch"]).convert("RGB")
    c54 = Image.open(masters["cover-5x4"]).convert("RGB")
    c169 = Image.open(masters["cover-16x9"]).convert("RGB")

    # 头像：公众平台后台 144，备用 512/1024，96 只做小尺寸自查
    wechat = ROOT / "wechat"
    for size in (1024, 512, 144, 96):
        im = icon.resize((size, size), Image.LANCZOS)
        path = wechat / f"avatar-{size}.png"
        im.save(path, "PNG", optimize=True)
        print(f"✓ {path.relative_to(ROOT)}  {path.stat().st_size // 1024} KB")

    # 启动图：平台宣传用 941×1672；主包内 600×1066（控制在 110KB 内）
    launch.resize((941, 1672), Image.LANCZOS).save(
        wechat / "launch-9x16.jpg", "JPEG", quality=88, optimize=True, progressive=True
    )
    print(f"✓ wechat/launch-9x16.jpg  {(wechat / 'launch-9x16.jpg').stat().st_size // 1024} KB")

    bundle = launch.resize((600, 1066), Image.LANCZOS)
    bundle_path = ROOT / "miniapp" / "src" / "assets" / "launch-default.jpg"
    for q in (88, 84, 80, 76, 72):
        bundle.save(bundle_path, "JPEG", quality=q, optimize=True, progressive=True)
        if bundle_path.stat().st_size <= 110 * 1024:
            break
    print(f"✓ miniapp/src/assets/launch-default.jpg  q={q}  {bundle_path.stat().st_size // 1024} KB")

    # 品牌目录里的成品同步替换（README 引用）
    shutil.copyfile(masters["launch"], ROOT / "brand" / "miniapp-launch-9x16.png")
    shutil.copyfile(masters["cover-5x4"], ROOT / "brand" / "miniapp-cover-5x4.png")
    shutil.copyfile(masters["cover-16x9"], ROOT / "brand" / "miniapp-cover-16x9.png")
    print("✓ brand/miniapp-{launch-9x16,cover-5x4,cover-16x9}.png")

    make_preview(icon, launch, c54, c169)


def make_preview(icon: Image.Image, launch: Image.Image, c54: Image.Image, c169: Image.Image) -> None:
    """自查拼图：头像（整图 + 96/144 圆形裁切）、9:16 启动图、5:4 / 16:9 封面。"""
    from PIL import ImageDraw

    sheet = Image.new("RGB", (1060, 1210), (11, 11, 26))
    sheet.paste(icon.resize((400, 400), Image.LANCZOS), (40, 40))

    for i, size in enumerate((96, 144)):
        im = icon.resize((size, size), Image.LANCZOS)
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
        sheet.paste(im, (40 + i * (size + 28), 470), mask)

    sheet.paste(c54.resize((420, 336), Image.LANCZOS), (40, 660))
    sheet.paste(launch.resize((520, 924), Image.LANCZOS), (500, 40))
    sheet.paste(c169.resize((520, 292), Image.LANCZOS), (500, 990))
    out = OUT / "preview.png"
    sheet.save(out, "PNG", optimize=True)
    print(f"✓ brand/tech-v1/preview.png")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--skill-dir", default=os.environ.get("TECH_XHS_SKILL", str(DEFAULT_SKILL)))
    ap.add_argument("--no-export", action="store_true")
    args = ap.parse_args()

    skill = Path(args.skill_dir).expanduser()
    masters = render(OUT, skill if skill.exists() else None)
    if not args.no_export:
        export(masters)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
