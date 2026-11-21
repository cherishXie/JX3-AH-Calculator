#!/usr/bin/env bash
# Build the static Web app (with PWA) into _site/ for GitHub Pages.
set -euo pipefail
cd "$(dirname "$0")/.."

node scripts/sync-breakthrough-model.mjs
node scripts/build-access-data.mjs
node scripts/build-audit-data.mjs
# 预计算浏览器走势数据（最近 7 天）；行情更新时也会生成一次。
node scripts/build-price-trends.mjs

# 应用壳版本 = 除 data.js 外的静态资源哈希。
# 只更新价格时 data.js 变了但壳版本不变，SW 不升级，也就不会弹 PWA 更新提示。
SHELL_VERSION="${SHELL_VERSION_OVERRIDE:-$(python3 - <<'PY'
import hashlib
import pathlib

files = [
    'sw.js',
    'index.html',
    'assets/styles.css',
    'assets/pwa.css',
    'assets/install.css',
    'assets/core.js',
    'assets/breakthrough.js',
    'assets/breakthrough-model.js',
    'assets/breakthrough-data.js',
    'assets/stones.js',
    'assets/charts.js',
    'assets/access-data.js',
    'assets/profit.js',
    'assets/landability.js',
    'assets/trends.js',
    'assets/app.js',
    'assets/pwa.js',
    'assets/install.js',
    'site/sw.js',
    'site/manifest.webmanifest',
    'brand/icon-180.png',
    'brand/icon-192.png',
    'brand/icon-512.png'
]
h = hashlib.sha256()
for name in files:
    h.update(name.encode())
    h.update(b'\0')
    h.update(pathlib.Path(name).read_bytes())
    h.update(b'\0')
print(h.hexdigest()[:10])
PY
)}"
GIT_COMMIT="$(git rev-parse --short HEAD 2>/dev/null || echo dev)"
BUILD_DATE="${BUILD_DATE_OVERRIDE:-$(git log -1 --format=%cI 2>/dev/null || date -u +%Y-%m-%dT%H:%M:%SZ)}"

rm -rf _site
mkdir -p _site/icons _site/downloads
cp index.html _site/index.html
cp -R assets _site/assets
# 首屏合并：11 个 <script> -> 2 个，3 个样式表 -> 1 个。
# 每个脚本都是自执行函数且没有顶层声明，按原顺序拼接即可保持作用域和执行顺序；
# data.js 保持独立，因为价格机器人只更新它，且 SW 单独做网络优先缓存。
BUNDLE_SCRIPTS="core stones charts access-data profit landability trends app pwa install"
: > _site/assets/app.bundle.js
for name in $BUNDLE_SCRIPTS; do
  cat "assets/$name.js" >> _site/assets/app.bundle.js
  printf '\n;\n' >> _site/assets/app.bundle.js
done
cat assets/styles.css assets/pwa.css assets/install.css > _site/assets/app.bundle.css
for name in $BUNDLE_SCRIPTS; do rm -f "_site/assets/$name.js"; done
rm -f _site/assets/styles.css _site/assets/pwa.css _site/assets/install.css
# 物价历史 JSON（供回溯/二次分析；页面本身不加载）
if [ -d data/price-history ]; then
  cp -R data/price-history _site/price-history
  find _site/price-history -name '.DS_Store' -delete
fi
# 预计算走势数据：物价走势 / 区服趋势只读取这里，原始 price-history 按需回查。
if [ -d data/price-trends ]; then
  cp -R data/price-trends _site/price-trends
  find _site/price-trends -name '.DS_Store' -delete
fi
# Excel 物价订阅：prices.json / prices.csv / prices.html
node scripts/build-excel-prices.mjs _site
if [ -f "excel/物价刷新.iqy" ]; then
  cp "excel/物价刷新.iqy" "_site/downloads/物价刷新.iqy"
  cp "excel/物价刷新.iqy" "_site/downloads/jx3-price-refresh.iqy"
fi
if [ -f "excel/物价查询.pq" ]; then cp "excel/物价查询.pq" "_site/downloads/物价查询.pq"; fi
if [ -f "excel/剑网3技艺收益与突破.xlsx" ]; then
  cp "excel/剑网3技艺收益与突破.xlsx" "_site/downloads/剑网3技艺收益与突破.xlsx"
  cp "excel/剑网3技艺收益与突破.xlsx" "_site/downloads/jx3-excel.xlsx"
fi
if [ -f "excel/剑网3技艺收益与突破-auto.xlsx" ]; then
  cp "excel/剑网3技艺收益与突破-auto.xlsx" "_site/downloads/剑网3技艺收益与突破-auto.xlsx"
  cp "excel/剑网3技艺收益与突破-auto.xlsx" "_site/downloads/jx3-excel-auto.xlsx"
fi
if [ -f "excel/剑网3技艺收益与突破.xlsm" ]; then
  cp "excel/剑网3技艺收益与突破.xlsm" "_site/downloads/剑网3技艺收益与突破.xlsm"
  cp "excel/剑网3技艺收益与突破.xlsm" "_site/downloads/jx3-excel.xlsm"
fi
# 让下载到的工作簿自带本次发布的最新物价快照：
# WPS / LibreOffice 不能刷新 Power Query，打开内置快照即为最新价。
if command -v python3 >/dev/null 2>&1 && [ -f "_site/prices.csv" ]; then
  for wb in "_site/downloads/剑网3技艺收益与突破.xlsx" "_site/downloads/jx3-excel.xlsx" \
            "_site/downloads/剑网3技艺收益与突破-auto.xlsx" "_site/downloads/jx3-excel-auto.xlsx" \
            "_site/downloads/剑网3技艺收益与突破.xlsm" "_site/downloads/jx3-excel.xlsm"; do
    if [ -f "$wb" ]; then
      python3 scripts/excel-patch-prices.py --workbook "$wb" --csv "_site/prices.csv" --in-place >/dev/null \
        || echo "warning: 更新内置物价快照失败：$wb" >&2
    fi
  done
fi
# --in-place 会为每个工作簿留一份 .bak 备份，Pages 不需要这些副本（约 4 MiB）。
find _site/downloads -name '*.bak' -delete
if [ -f CHANGELOG.md ]; then cp CHANGELOG.md _site/CHANGELOG.md; fi
cp site/sw.js _site/sw.js
cp site/manifest.webmanifest _site/manifest.webmanifest
cp brand/icon-180.png _site/icons/icon-180.png
cp brand/icon-192.png _site/icons/icon-192.png
cp brand/icon-512.png _site/icons/icon-512.png
find _site -name '.DS_Store' -delete
touch _site/.nojekyll


node scripts/make-updates.mjs web "$SHELL_VERSION" "$BUILD_DATE" _site/updates.json

python3 - "$SHELL_VERSION" "$BUILD_DATE" "$GIT_COMMIT" <<'PY'
import json
import pathlib
import re
import sys

version, build_date, commit = sys.argv[1], sys.argv[2], sys.argv[3]
root = pathlib.Path('_site')

# 把首屏的 3 个样式表 / 11 个脚本改写成合并后的 2 个文件，
# 并把 data.js 与 bundle 改成 defer + 预加载，避免在弱网下串行等 14 个请求。
page = root / 'index.html'
html = page.read_text(encoding='utf-8')

css_old = (
    '  <link rel="stylesheet" href="assets/styles.css">\n'
    '  <link rel="stylesheet" href="assets/pwa.css">\n'
    '  <link rel="stylesheet" href="assets/install.css">\n'
)
if css_old not in html:
    print('ERROR: stylesheet block not found in index.html', file=sys.stderr)
    sys.exit(1)
html = html.replace(css_old, '  <link rel="stylesheet" href="assets/app.bundle.css">\n')

js_pattern = re.compile(
    r'(?:  <script src="assets/(?:data|core|stones|charts|access-data|profit|landability|trends|app|pwa|install)\.js"[^>]*></script>\n)+'
)
js_new = (
    '  <script src="assets/data.js" defer></script>\n'
    '  <script src="assets/app.bundle.js" defer></script>\n'
)
html, replaced = js_pattern.subn(js_new, html)
if replaced != 1:
    print(f'ERROR: expected one script block in index.html, replaced {replaced}', file=sys.stderr)
    sys.exit(1)

manifest_anchor = '  <link rel="manifest" href="manifest.webmanifest">\n'
if manifest_anchor not in html:
    print('ERROR: manifest link not found in index.html', file=sys.stderr)
    sys.exit(1)
html = html.replace(
    manifest_anchor,
    manifest_anchor
    + '  <link rel="preconnect" href="https://hm.baidu.com">\n'
    + '  <link rel="preload" href="assets/app.bundle.css" as="style">\n'
    + '  <link rel="preload" href="assets/app.bundle.js" as="script">\n'
    + '  <link rel="preload" href="assets/data.js" as="script">\n'
)
page.write_text(html, encoding='utf-8')

for rel in ('index.html', 'sw.js'):
    path = root / rel
    text = path.read_text(encoding='utf-8')
    if '__APP_VERSION__' not in text:
        print(f'ERROR: {rel} is missing __APP_VERSION__', file=sys.stderr)
        sys.exit(1)
    text = text.replace('__APP_VERSION__', version)
    text = text.replace('__BUILD_DATE__', build_date)
    path.write_text(text, encoding='utf-8')

data_text = (root / 'assets/data.js').read_text(encoding='utf-8')
match = re.search(r'"priceUpdatedAt"\s*:\s*"([^"]+)"', data_text)
data_updated = match.group(1) if match else ''

(root / 'version.json').write_text(
    json.dumps({
        'version': version,
        'commit': commit,
        'builtAt': build_date,
        'dataUpdatedAt': data_updated,
    }, ensure_ascii=False, indent=2) + '\n',
    encoding='utf-8'
)

# shell 清单里的每个本地文件都必须真的存在，否则 SW 安装会整体失败。
sw = (root / 'sw.js').read_text(encoding='utf-8')
missing = []
for rel in re.findall(r"'(\./[^']+)'", sw):
    clean = rel[2:]
    if not clean or clean == 'index.html':
        continue
    if not (root / clean).exists():
        missing.append(clean)

required = [
    'sw.js', 'manifest.webmanifest', 'version.json', 'updates.json',
    'assets/app.bundle.js', 'assets/app.bundle.css', 'assets/data.js', 'assets/audit-data.js',
    'assets/breakthrough.js', 'assets/breakthrough-model.js', 'assets/breakthrough-data.js',
    'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png',
    'prices.json', 'prices.csv', 'prices.html',
    'downloads/物价刷新.iqy', 'downloads/jx3-price-refresh.iqy',
    'downloads/剑网3技艺收益与突破.xlsx', 'downloads/jx3-excel.xlsx',
    'downloads/剑网3技艺收益与突破.xlsm', 'downloads/jx3-excel.xlsm',
    'downloads/剑网3技艺收益与突破-auto.xlsx', 'downloads/jx3-excel-auto.xlsx',
]
if (root / 'price-history').is_dir():
    required.append('price-history/index.json')
if (root / 'price-trends').is_dir():
    required.append('price-trends/index.json')
for rel in required:
    if not (root / rel).exists():
        missing.append(rel)

for rel in ('manifest.webmanifest', 'version.json', 'updates.json'):
    try:
        json.loads((root / rel).read_text(encoding='utf-8'))
    except Exception as exc:
        print(f'ERROR: invalid JSON in {rel}: {exc}', file=sys.stderr)
        sys.exit(1)

if missing:
    print('ERROR: missing PWA/site files: ' + ', '.join(sorted(set(missing))), file=sys.stderr)
    sys.exit(1)

html = (root / 'index.html').read_text(encoding='utf-8')
for url in re.findall(r'(?:src|href)="([^"]+)"', html):
    if url.startswith(('data:', 'http://', 'https://', '#', 'mailto:', 'javascript:')):
        continue
    clean = url.split('?', 1)[0].split('#', 1)[0]
    if clean and not (root / clean).exists():
        missing.append(clean)

if missing:
    print('ERROR: missing referenced files: ' + ', '.join(sorted(set(missing))), file=sys.stderr)
    sys.exit(1)

print(f'PWA manifest/service worker OK · version {version}')
PY


# Publish the current minitool zip at a stable URL, so it can be downloaded
# on a phone and re-uploaded to 小红书 without opening GitHub Actions.
if [ -f "剑网三物价助手-minitool.zip" ]; then
  cp "剑网三物价助手-minitool.zip" "_site/downloads/jx3-minitool.zip"
fi

printf 'built _site (%s), version %s, downloads: %s\n' \
  "$(du -sh _site | cut -f1)" \
  "$SHELL_VERSION" \
  "$([ -f _site/downloads/jx3-minitool.zip ] && echo yes || echo no)"
