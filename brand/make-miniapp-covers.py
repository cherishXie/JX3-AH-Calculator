#!/usr/bin/env python3
"""Generate original vector covers / launch art for the 精力做什么 mini program.

Everything here is drawn from primitives (paths, gradients, text). No game
screenshots, official logos, characters or third-party artwork are used.
The motifs only reference the *idea* of 苍生铸世 (mountains, a nameless stele,
beacon light, dawn over a river) in an abstract, original way.

Run:  python3 brand/make-miniapp-covers.py
Then: rsvg-convert ... (see brand/README.md)
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent

INK = "#020817"
INK_2 = "#071020"
INK_3 = "#0b1a26"
GOLD = "#e8b44a"
GOLD_2 = "#c9922f"
RED = "#d94a3a"
PAPER = "#f6eedf"
JADE = "#45d483"
MIST = "#9fc4c9"


def smooth(pts, w, h, close=True):
    """Catmull-Rom -> cubic bezier for an organic ridge line."""
    p = [(x * w, y * h) for x, y in pts]
    d = f"M {p[0][0]:.1f} {p[0][1]:.1f}"
    for i in range(len(p) - 1):
        p0 = p[i - 1] if i > 0 else p[i]
        p1 = p[i]
        p2 = p[i + 1]
        p3 = p[i + 2] if i + 2 < len(p) else p2
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f" C {c1[0]:.1f} {c1[1]:.1f} {c2[0]:.1f} {c2[1]:.1f} {p2[0]:.1f} {p2[1]:.1f}"
    if close:
        d += f" L {w} {h} L 0 {h} Z"
    return d


def defs(w, h):
    return f'''<defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#020817"/>
      <stop offset="0.52" stop-color="#061426"/>
      <stop offset="0.8" stop-color="#0b1d2a"/>
      <stop offset="1" stop-color="#1a1a1b"/>
    </linearGradient>
    <radialGradient id="dawn" cx="0.74" cy="0.66" r="0.52">
      <stop offset="0" stop-color="#f3c56a" stop-opacity="0.55"/>
      <stop offset="0.35" stop-color="#c47a3a" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#c47a3a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#12303a"/>
      <stop offset="1" stop-color="#081723"/>
    </linearGradient>
    <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d2531"/>
      <stop offset="1" stop-color="#06121d"/>
    </linearGradient>
    <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#071722"/>
      <stop offset="1" stop-color="#030b13"/>
    </linearGradient>
    <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e8b44a" stop-opacity="0.05"/>
      <stop offset="0.45" stop-color="#f3c56a" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#45d483" stop-opacity="0.12"/>
    </linearGradient>
    <linearGradient id="scrimL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#020817" stop-opacity="0.96"/>
      <stop offset="0.55" stop-color="#020817" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#020817" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scrimB" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#020817" stop-opacity="0"/>
      <stop offset="0.45" stop-color="#020817" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#020817" stop-opacity="0.98"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ffd98a" stop-opacity="0.95"/>
      <stop offset="0.35" stop-color="#e8b44a" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#e8b44a" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="{max(6, w * 0.012):.1f}"/>
    </filter>
    <filter id="tiny" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="{max(2, w * 0.0025):.1f}"/>
    </filter>
    <pattern id="grain" width="3" height="3" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.55" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
    </defs>'''


def art(w, h, horizon=0.72, stele_x=0.76, stele_y=0.42, scale=1.0, show_grid=True):
    """Abstract ink mountains + nameless stele + beacon + dawn river."""
    hz = h * horizon
    far_pts = [(0, 0.58), (0.07, 0.51), (0.14, 0.56), (0.23, 0.45), (0.32, 0.52),
               (0.41, 0.43), (0.5, 0.51), (0.6, 0.42), (0.69, 0.50), (0.78, 0.46),
               (0.88, 0.54), (1, 0.49)]
    mid_pts = [(0, 0.70), (0.09, 0.61), (0.18, 0.67), (0.28, 0.57), (0.38, 0.65),
               (0.48, 0.59), (0.58, 0.67), (0.68, 0.58), (0.78, 0.65), (0.88, 0.60),
               (0.95, 0.66), (1, 0.62)]
    near_pts = [(0, 0.86), (0.1, 0.78), (0.2, 0.84), (0.32, 0.75), (0.44, 0.82),
                (0.55, 0.76), (0.66, 0.84), (0.78, 0.78), (0.9, 0.85), (1, 0.80)]
    sx = w * stele_x
    sy = h * stele_y
    sc = min(w, h) * 0.00085 * scale
    body_h = 300 * sc
    body_w = 132 * sc

    grid = ""
    if show_grid:
        grid = f'''<g opacity="0.5">
      <path d="M {w*0.04:.0f} {h*0.12:.0f} H {w*0.96:.0f}" stroke="#9fc4c9" stroke-opacity="0.08" stroke-width="1"/>
      <path d="M {w*0.04:.0f} {h*0.34:.0f} H {w*0.96:.0f}" stroke="#9fc4c9" stroke-opacity="0.06" stroke-width="1"/>
      <path d="M {w*0.04:.0f} {h*0.56:.0f} H {w*0.96:.0f}" stroke="#9fc4c9" stroke-opacity="0.05" stroke-width="1"/>
      <path d="M {w*0.12:.0f} {h*0.08:.0f} V {h*0.62:.0f}" stroke="#9fc4c9" stroke-opacity="0.05" stroke-width="1"/>
      <path d="M {w*0.38:.0f} {h*0.08:.0f} V {h*0.62:.0f}" stroke="#9fc4c9" stroke-opacity="0.04" stroke-width="1"/>
      <path d="M {w*0.64:.0f} {h*0.08:.0f} V {h*0.62:.0f}" stroke="#9fc4c9" stroke-opacity="0.04" stroke-width="1"/>
      <path d="M {w*0.9:.0f} {h*0.08:.0f} V {h*0.62:.0f}" stroke="#9fc4c9" stroke-opacity="0.04" stroke-width="1"/>
    </g>'''

    # constellation / profit line, original abstract data motif
    pts = [(0.58, 0.30), (0.66, 0.24), (0.73, 0.28), (0.81, 0.18), (0.89, 0.22), (0.96, 0.14)]
    line = " ".join(f"{w*x:.1f},{h*y:.1f}" for x, y in pts)
    dots = "".join(
        f'<circle cx="{w*x:.1f}" cy="{h*y:.1f}" r="{max(2.2, w*0.0032):.1f}" fill="{GOLD}" opacity="0.72"/>'
        for x, y in pts)
    const = f'''<g opacity="0.55">
      <polyline points="{line}" fill="none" stroke="{GOLD}" stroke-opacity="0.38" stroke-width="{max(1.2, w*0.0016):.1f}" stroke-linecap="round" stroke-linejoin="round"/>
      {dots}
    </g>'''

    # stele group: a nameless stone slab, a brazier, moss and cracks
    bw = body_w
    bh = body_h
    lines = ''
    for i, (y, frac, op) in enumerate([
        (0.24, 0.72, 0.30), (0.33, 0.54, 0.24), (0.42, 0.68, 0.21),
        (0.51, 0.44, 0.18), (0.60, 0.62, 0.15), (0.69, 0.36, 0.12), (0.78, 0.56, 0.10)
    ]):
        lines += (f'<path d="M {-bw*frac/2:.1f} {bh*y:.1f} H {bw*frac/2:.1f}" '
                  f'stroke="#e8b44a" stroke-opacity="{op}" stroke-width="{max(1, sc*1.1):.1f}" stroke-linecap="round"/>')
    st = f'''<g transform="translate({sx:.1f} {sy:.1f})">
      <ellipse cx="0" cy="{bh*1.12:.1f}" rx="{bw*1.9:.1f}" ry="{bw*0.22:.1f}" fill="#000" opacity="0.45" filter="url(#tiny)"/>
      <!-- base -->
      <path d="M {-bw*0.86:.1f} {bh*1.08:.1f} L {bw*0.86:.1f} {bh*1.08:.1f} L {bw*0.78:.1f} {bh*1.16:.1f} L {-bw*0.78:.1f} {bh*1.16:.1f} Z" fill="#06121c" stroke="#8a6a3a" stroke-opacity="0.30" stroke-width="{max(1, sc):.1f}"/>
      <rect x="{-bw*0.64:.1f}" y="{bh*1.0:.1f}" width="{bw*1.28:.1f}" height="{bh*0.08:.1f}" fill="#081722" stroke="#8a6a3a" stroke-opacity="0.34" stroke-width="{max(1, sc):.1f}"/>
      <!-- slab -->
      <path d="M {-bw*0.5:.1f} {bh:.1f} L {-bw*0.5:.1f} {bh*0.16:.1f}
               Q {-bw*0.5:.1f} {-bh*0.05:.1f} 0 {-bh*0.05:.1f}
               Q {bw*0.5:.1f} {-bh*0.05:.1f} {bw*0.5:.1f} {bh*0.16:.1f}
               L {bw*0.5:.1f} {bh:.1f} Z"
            fill="#071521" stroke="#c9a25a" stroke-opacity="0.40" stroke-width="{max(1.2, sc*1.2):.1f}"/>
      <!-- stone shading -->
      <path d="M {-bw*0.5:.1f} {bh*0.16:.1f} Q {-bw*0.5:.1f} {-bh*0.05:.1f} 0 {-bh*0.05:.1f} Q {bw*0.18:.1f} {-bh*0.05:.1f} {bw*0.24:.1f} {bh*0.02:.1f} L {bw*0.06:.1f} {bh:.1f} L {-bw*0.18:.1f} {bh:.1f} Z" fill="#0a1c28" opacity="0.55"/>
      <path d="M {-bw*0.5:.1f} {bh*0.16:.1f} L {-bw*0.5:.1f} {bh:.1f}" stroke="#f3c56a" stroke-opacity="0.28" stroke-width="{max(1.4, sc*1.6):.1f}"/>
      <path d="M {bw*0.5:.1f} {bh*0.16:.1f} L {bw*0.5:.1f} {bh:.1f}" stroke="#000" stroke-opacity="0.35" stroke-width="{max(1.4, sc*1.6):.1f}"/>
      <!-- cartouche: intentionally blank, the nameless stele -->
      <rect x="{-bw*0.26:.1f}" y="{bh*0.055:.1f}" width="{bw*0.52:.1f}" height="{bh*0.09:.1f}"
            fill="#051019" fill-opacity="0.7" stroke="#e8b44a" stroke-opacity="0.42" stroke-width="{max(1, sc):.1f}"/>
      <path d="M {-bw*0.22:.1f} {bh*0.085:.1f} H {bw*0.22:.1f}" stroke="#e8b44a" stroke-opacity="0.16" stroke-width="{max(1, sc):.1f}"/>
      {lines}
      <!-- cracks and chips -->
      <path d="M {-bw*0.32:.1f} {bh*0.14:.1f} l {bw*0.06:.1f} {bh*0.06:.1f} l {-bw*0.03:.1f} {bh*0.05:.1f} l {bw*0.07:.1f} {bh*0.08:.1f}" fill="none" stroke="#000" stroke-opacity="0.35" stroke-width="{max(1, sc):.1f}"/>
      <path d="M {bw*0.38:.1f} {bh*0.52:.1f} l {-bw*0.05:.1f} {bh*0.035:.1f} l {bw*0.02:.1f} {bh*0.04:.1f}" fill="none" stroke="#000" stroke-opacity="0.28" stroke-width="{max(1, sc):.1f}"/>
      <path d="M {-bw*0.5:.1f} {bh*0.02:.1f} q {bw*0.05:.1f} {-bh*0.02:.1f} {bw*0.09:.1f} {bh*0.005:.1f}" fill="#020817" stroke="#c9a25a" stroke-opacity="0.22" stroke-width="{max(1, sc):.1f}"/>
      <!-- moss / grass at the base -->
      <path d="M {-bw*0.55:.1f} {bh*0.99:.1f} q {-bw*0.18:.1f} {-bh*0.06:.1f} {-bw*0.1:.1f} {-bh*0.14:.1f}" fill="none" stroke="#2c5b4a" stroke-opacity="0.6" stroke-width="{max(2, sc*2.4):.1f}"/>
      <path d="M {-bw*0.4:.1f} {bh*1.0:.1f} q {-bw*0.1:.1f} {-bh*0.05:.1f} {-bw*0.02:.1f} {-bh*0.11:.1f}" fill="none" stroke="#2c5b4a" stroke-opacity="0.45" stroke-width="{max(2, sc*2.2):.1f}"/>
      <path d="M {bw*0.44:.1f} {bh*1.0:.1f} q {bw*0.12:.1f} {-bh*0.05:.1f} {bw*0.06:.1f} {-bh*0.12:.1f}" fill="none" stroke="#2c5b4a" stroke-opacity="0.5" stroke-width="{max(2, sc*2.2):.1f}"/>
      <!-- brazier, the beacon of the living -->
      <g transform="translate({bw*0.86:.1f} {bh*0.96:.1f})">
        <circle cx="0" cy="{-bh*0.08:.1f}" r="{bw*1.5:.1f}" fill="url(#glow)" opacity="0.75"/>
        <path d="M {-bw*0.2:.1f} 0 L {bw*0.2:.1f} 0 L {bw*0.14:.1f} {bh*0.06:.1f} L {-bw*0.14:.1f} {bh*0.06:.1f} Z" fill="#0a1a24" stroke="#e8b44a" stroke-opacity="0.5" stroke-width="{max(1, sc):.1f}"/>
        <path d="M 0 {-bh*0.16:.1f} C {-bw*0.09:.1f} {-bh*0.1:.1f} {-bw*0.07:.1f} {-bh*0.03:.1f} 0 0 C {bw*0.08:.1f} {-bh*0.04:.1f} {bw*0.09:.1f} {-bh*0.1:.1f} 0 {-bh*0.16:.1f} Z" fill="#ffd98a" opacity="0.96" filter="url(#tiny)"/>
        <path d="M 0 {-bh*0.1:.1f} C {-bw*0.03:.1f} {-bh*0.06:.1f} 0 {-bh*0.02:.1f} {bw*0.01:.1f} 0 Z" fill="#fff3cf" opacity="0.95"/>
      </g>
    </g>'''

    # birds / paper-cut shadows
    birds = ""
    for bx, by, bs in [(0.16, 0.24, 1.0), (0.21, 0.30, 0.75), (0.12, 0.33, 0.6), (0.86, 0.34, 0.7)]:
        x, y = w * bx, h * by
        s = max(6, w * 0.009) * bs
        birds += (f'<path d="M {x-s:.1f} {y:.1f} Q {x-s*0.4:.1f} {y-s*0.55:.1f} {x:.1f} {y:.1f} '
                  f'Q {x+s*0.4:.1f} {y-s*0.55:.1f} {x+s:.1f} {y:.1f}" '
                  f'fill="none" stroke="#9fc4c9" stroke-opacity="0.35" stroke-width="{max(1.2, s*0.13):.1f}" stroke-linecap="round"/>')

    embers = ""
    for ex, ey, er, eo in [(0.66, 0.62, 2.2, 0.5), (0.71, 0.58, 1.4, 0.35), (0.8, 0.64, 1.8, 0.4),
                           (0.84, 0.55, 1.2, 0.3), (0.62, 0.68, 1.6, 0.3), (0.9, 0.6, 2.6, 0.45),
                           (0.76, 0.7, 1.1, 0.28), (0.69, 0.52, 1.0, 0.25)]:
        embers += f'<circle cx="{w*ex:.1f}" cy="{h*ey:.1f}" r="{er*sc/0.85:.1f}" fill="{GOLD}" opacity="{eo}"/>'

    return f'''<g>
      <rect width="{w}" height="{h}" fill="url(#sky)"/>
      <rect width="{w}" height="{h}" fill="url(#grain)"/>
      <rect width="{w}" height="{h}" fill="url(#dawn)"/>
      {grid}
      <circle cx="{w*0.76:.0f}" cy="{hz*0.96:.0f}" r="{min(w,h)*0.085:.0f}" fill="url(#glow)" opacity="0.55" filter="url(#soft)"/>
      <path d="{smooth(far_pts, w, h)}" fill="url(#far)" opacity="0.92"/>
      <path d="{smooth(far_pts, w, h)}" fill="none" stroke="#7fb9bf" stroke-opacity="0.18" stroke-width="{max(1, w*0.0014):.1f}"/>
      <ellipse cx="{w*0.3:.0f}" cy="{hz*0.9:.0f}" rx="{w*0.42:.0f}" ry="{h*0.028:.0f}" fill="{MIST}" opacity="0.08" filter="url(#soft)"/>
      <path d="{smooth(mid_pts, w, h)}" fill="url(#mid)"/>
      <path d="{smooth(mid_pts, w, h)}" fill="none" stroke="#6ea7ad" stroke-opacity="0.14" stroke-width="{max(1, w*0.0012):.1f}"/>
      <ellipse cx="{w*0.7:.0f}" cy="{hz*1.02:.0f}" rx="{w*0.46:.0f}" ry="{h*0.03:.0f}" fill="{MIST}" opacity="0.07" filter="url(#soft)"/>
      <path d="{smooth(near_pts, w, h)}" fill="url(#near)"/>
      <path d="{smooth(near_pts, w, h)}" fill="none" stroke="#5e8f8a" stroke-opacity="0.10" stroke-width="{max(1, w*0.0012):.1f}"/>
      <path d="M {w*0.42:.0f} {hz*1.04:.0f} C {w*0.58:.0f} {h*0.88:.0f} {w*0.82:.0f} {h*0.94:.0f} {w*1.02:.0f} {h*1.05:.0f} L {w*1.02:.0f} {h*0.97:.0f} C {w*0.84:.0f} {h*0.89:.0f} {w*0.64:.0f} {h*0.84:.0f} {w*0.48:.0f} {hz*1.0:.0f} Z" fill="url(#river)" opacity="0.7"/>
      <path d="M {w*0.5:.0f} {hz*1.0:.0f} C {w*0.66:.0f} {h*0.86:.0f} {w*0.88:.0f} {h*0.93:.0f} {w*1.0:.0f} {h*1.0:.0f}" fill="none" stroke="#f3c56a" stroke-opacity="0.22" stroke-width="{max(1.2, w*0.0016):.1f}"/>
      <path d="M {w*0.62:.0f} {h*0.93:.0f} q {w*0.08:.0f} {-h*0.012:.0f} {w*0.16:.0f} {-h*0.005:.0f}" fill="none" stroke="#f3c56a" stroke-opacity="0.16" stroke-width="{max(1, w*0.0012):.1f}"/>
      {const}
      {st}
      {birds}
      {embers}
      <g opacity="0.55">
        <path d="M 0 {h*0.985:.0f} H {w}" stroke="#e8b44a" stroke-opacity="0.18" stroke-width="1"/>
      </g>
    </g>'''


def seal(x, y, size, text="精"):
    return f'''<g>
      <rect x="{x}" y="{y}" width="{size}" height="{size}" rx="{size*0.22:.1f}" fill="{RED}"/>
      <rect x="{x+size*0.07:.1f}" y="{y+size*0.07:.1f}" width="{size*0.86:.1f}" height="{size*0.86:.1f}" rx="{size*0.14:.1f}"
            fill="none" stroke="#fff6e8" stroke-opacity="0.4" stroke-width="{max(1, size*0.02):.1f}"/>
      <text x="{x+size/2:.1f}" y="{y+size*0.7:.1f}" text-anchor="middle" font-family="Songti SC, serif"
            font-size="{size*0.52:.1f}" font-weight="900" fill="#fff8ec">{text}</text>
    </g>'''


def brand_row(w, x, y, s=1.0):
    return f'''<g>
      {seal(x, y, 64*s)}
      <text x="{x+82*s:.1f}" y="{y+34*s:.1f}" font-family="PingFang SC, sans-serif" font-size="{25*s:.1f}" font-weight="700" fill="{PAPER}">精力做什么</text>
      <text x="{x+83*s:.1f}" y="{y+56*s:.1f}" font-family="PingFang SC, sans-serif" font-size="{10.5*s:.1f}" font-weight="600" letter-spacing="{2.2*s:.1f}" fill="#8fa6a8">JX3 LIFE PROFIT LEDGER · 玩家自制</text>
    </g>'''


def chips(x, y, s=1.0):
    labels = ["物价走势", "区服趋势", "突破升级"]
    out = ""
    cx = x
    for label in labels:
        tw = len(label) * 20 * s + 34 * s
        out += f'''<g>
          <rect x="{cx:.1f}" y="{y:.1f}" width="{tw:.1f}" height="{42*s:.1f}" rx="{21*s:.1f}"
                fill="#0a1a24" fill-opacity="0.82" stroke="{GOLD}" stroke-opacity="0.36" stroke-width="{max(1, s):.1f}"/>
          <circle cx="{cx+16*s:.1f}" cy="{y+21*s:.1f}" r="{3.2*s:.1f}" fill="{GOLD}" opacity="0.9"/>
          <text x="{cx+28*s:.1f}" y="{y+27*s:.1f}" font-family="PingFang SC, sans-serif" font-size="{17*s:.1f}" font-weight="600" fill="#f1e6cf">{label}</text>
        </g>'''
        cx += tw + 12 * s
    return out


def cover_16x9():
    w, h = 1200, 675
    body = f'''<rect width="{w}" height="{h}" fill="{INK}"/>
    {art(w, h, horizon=0.70, stele_x=0.78, stele_y=0.36, scale=1.15)}
    <rect width="{w*0.64:.0f}" height="{h}" fill="url(#scrimL)"/>
    <rect y="{h*0.80:.0f}" width="{w}" height="{h*0.20:.0f}" fill="url(#scrimB)" opacity="0.35"/>
    {brand_row(w, 64, 46, 1.0)}
    <rect x="64" y="168" width="5" height="22" rx="2.5" fill="{RED}"/>
    <text x="82" y="186" font-family="PingFang SC, sans-serif" font-size="19" font-weight="600" letter-spacing="2.2" fill="#d9a07a">剑网3 · 苍生铸世 50 级</text>
    <text x="60" y="300" font-family="Songti SC, serif" font-size="104" font-weight="900" fill="{PAPER}">今天精力</text>
    <text x="60" y="410" font-family="Songti SC, serif" font-size="112" font-weight="900" fill="{GOLD}">做什么？</text>
    <path d="M 62 430 C 150 424 250 428 360 421" fill="none" stroke="{GOLD}" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round"/>
    <text x="64" y="472" font-family="PingFang SC, sans-serif" font-size="22" font-weight="500" fill="#cbd5e1">按本服物价，算清生活技艺 · 五行石 · 突破收益</text>
    {chips(64, 502, 1.0)}
    <text x="64" y="612" font-family="PingFang SC, sans-serif" font-size="17" font-weight="600" fill="#e2d4ba">改本服物价 <tspan fill="{RED}">→</tspan> 自动重算 <tspan fill="{RED}">→</tspan> 一眼排序</text>
    <text x="64" y="642" font-family="PingFang SC, sans-serif" font-size="12.5" font-weight="500" fill="#7f8f93">非官方玩家工具 · 示例价可校准 · 数据仅存本机</text>
    <g transform="rotate(-6 1120 600)">
      <rect x="1090" y="572" width="58" height="58" rx="6" fill="none" stroke="{RED}" stroke-width="2.6" stroke-opacity="0.75"/>
      <text x="1119" y="612" text-anchor="middle" font-family="Songti SC, serif" font-size="30" font-weight="900" fill="{RED}" opacity="0.85">铸</text>
    </g>'''
    return svg(w, h, body)


def cover_5x4():
    w, h = 1080, 864
    body = f'''<rect width="{w}" height="{h}" fill="{INK}"/>
    {art(w, h, horizon=0.60, stele_x=0.74, stele_y=0.26, scale=1.05)}
    <rect y="{h*0.42:.0f}" width="{w}" height="{h*0.58:.0f}" fill="url(#scrimB)" opacity="0.92"/>
    {brand_row(w, 72, 56, 1.05)}
    <rect x="72" y="206" width="5" height="22" rx="2.5" fill="{RED}"/>
    <text x="90" y="224" font-family="PingFang SC, sans-serif" font-size="19" font-weight="600" letter-spacing="2.2" fill="#d9a07a">剑网3 · 苍生铸世 50 级</text>
    <text x="68" y="550" font-family="Songti SC, serif" font-size="112" font-weight="900" fill="{PAPER}">今天精力</text>
    <text x="68" y="668" font-family="Songti SC, serif" font-size="122" font-weight="900" fill="{GOLD}">做什么？</text>
    <path d="M 70 690 C 170 683 290 688 400 680" fill="none" stroke="{GOLD}" stroke-opacity="0.55" stroke-width="4.4" stroke-linecap="round"/>
    <text x="72" y="734" font-family="PingFang SC, sans-serif" font-size="23" font-weight="500" fill="#dfe7ef">按本服物价，算清生活技艺 · 五行石 · 突破收益</text>
    {chips(72, 762, 1.05)}
    <text x="72" y="842" font-family="PingFang SC, sans-serif" font-size="12.5" font-weight="500" fill="#7f8f93">非官方玩家工具 · 示例价可校准 · 数据仅存本机</text>'''
    return svg(w, h, body)


def launch_9x16():
    w, h = 1080, 1920
    body = f'''<rect width="{w}" height="{h}" fill="{INK}"/>
    {art(w, h, horizon=0.62, stele_x=0.70, stele_y=0.30, scale=1.9)}
    <rect y="{h*0.55:.0f}" width="{w}" height="{h*0.45:.0f}" fill="url(#scrimB)" opacity="0.95"/>
    <rect x="0" y="0" width="{w}" height="{h*0.18:.0f}" fill="url(#scrimL)" opacity="0.5"/>
    {brand_row(w, 72, 92, 1.2)}
    {seal(w-154, 92, 58, '铸')}
    <text x="72" y="330" font-family="PingFang SC, sans-serif" font-size="24" font-weight="600" letter-spacing="5" fill="#d9a07a">剑 网 3 · 苍 生 铸 世</text>
    <text x="72" y="1320" font-family="Songti SC, serif" font-size="118" font-weight="900" fill="{PAPER}">今天精力</text>
    <text x="72" y="1450" font-family="Songti SC, serif" font-size="128" font-weight="900" fill="{GOLD}">做什么？</text>
    <path d="M 74 1474 C 190 1466 320 1472 440 1462" fill="none" stroke="{GOLD}" stroke-opacity="0.55" stroke-width="5" stroke-linecap="round"/>
    <text x="74" y="1540" font-family="PingFang SC, sans-serif" font-size="30" font-weight="500" fill="#dfe7ef">按本服物价，算清生活技艺 · 五行石 · 突破收益</text>
    {chips(74, 1592, 1.22)}
    <text x="74" y="1748" font-family="PingFang SC, sans-serif" font-size="22" font-weight="600" fill="#e2d4ba">物价走势 <tspan fill="{RED}">·</tspan> 区服趋势 <tspan fill="{RED}">·</tspan> 突破升级</text>
    <text x="74" y="1824" font-family="PingFang SC, sans-serif" font-size="19" font-weight="500" fill="#7f8f93">非官方玩家工具 · 示例价可校准 · 数据仅存本机</text>
    <path d="M 74 1862 H {w-74}" stroke="{GOLD}" stroke-opacity="0.18" stroke-width="1"/>'''
    return svg(w, h, body)


def guide_hero():
    w, h = 1080, 720
    body = f'''<rect width="{w}" height="{h}" fill="{INK}"/>
    {art(w, h, horizon=0.66, stele_x=0.74, stele_y=0.30, scale=1.25)}
    <rect x="0" y="0" width="{w}" height="{h}" fill="none" stroke="#e8b44a" stroke-opacity="0.16" stroke-width="2"/>
    <g transform="translate(56 566)">
      <rect x="0" y="0" width="46" height="46" rx="10" fill="{RED}"/>
      <text x="23" y="33" text-anchor="middle" font-family="Songti SC, serif" font-size="26" font-weight="900" fill="#fff8ec">精</text>
    </g>
    <text x="116" y="600" font-family="Songti SC, serif" font-size="30" font-weight="900" fill="{PAPER}">苍生铸世 · 50 级</text>
    <text x="56" y="664" font-family="PingFang SC, sans-serif" font-size="15" font-weight="500" letter-spacing="2.2" fill="#7f8f93">玩家自制 · 非官方 · 不含官方素材</text>'''
    return svg(w, h, body)


def svg(w, h, body):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  {defs(w, h)}
  {body}
</svg>
'''


def main():
    files = {
        'miniapp-cover-16x9.svg': cover_16x9(),
        'miniapp-cover-5x4.svg': cover_5x4(),
        'miniapp-launch-9x16.svg': launch_9x16(),
        'miniapp-guide-hero.svg': guide_hero(),
    }
    for name, text in files.items():
        (OUT / name).write_text(text, encoding='utf-8')
        print('wrote', name, len(text), 'bytes')


if __name__ == '__main__':
    main()
