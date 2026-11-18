#!/usr/bin/env bash
# Build the static Web app (with PWA) into _site/ for GitHub Pages.
set -euo pipefail
cd "$(dirname "$0")/.."

VERSION="${VERSION_OVERRIDE:-$(git rev-parse --short HEAD 2>/dev/null || echo dev)}"
if [ -z "${VERSION_OVERRIDE:-}" ] && [ -z "${CI:-}" ] && [ -n "$(git status --porcelain 2>/dev/null || true)" ]; then
  VERSION="${VERSION}-dirty$(date +%s)"
fi
BUILD_DATE="${BUILD_DATE_OVERRIDE:-$(git log -1 --format=%cI 2>/dev/null || date -u +%Y-%m-%dT%H:%M:%SZ)}"

rm -rf _site
mkdir -p _site/icons _site/downloads
cp index.html _site/index.html
cp -R assets _site/assets
cp site/sw.js _site/sw.js
cp site/manifest.webmanifest _site/manifest.webmanifest
cp brand/icon-192.png _site/icons/icon-192.png
cp brand/icon-512.png _site/icons/icon-512.png
find _site -name '.DS_Store' -delete
touch _site/.nojekyll


node scripts/make-updates.mjs "$VERSION" "$BUILD_DATE" _site/updates.json

python3 - "$VERSION" "$BUILD_DATE" <<'PY'
import json
import pathlib
import re
import sys

version, build_date = sys.argv[1], sys.argv[2]
root = pathlib.Path('_site')

for rel in ('index.html', 'sw.js'):
    path = root / rel
    text = path.read_text(encoding='utf-8')
    if '__APP_VERSION__' not in text:
        print(f'ERROR: {rel} is missing __APP_VERSION__', file=sys.stderr)
        sys.exit(1)
    path.write_text(text.replace('__APP_VERSION__', version), encoding='utf-8')

(root / 'version.json').write_text(
    json.dumps({
        'version': version,
        'builtAt': build_date,
        'commit': version.split('-', 1)[0],
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
    'assets/app.js', 'assets/core.js', 'assets/data.js', 'assets/charts.js',
    'assets/styles.css', 'assets/pwa.css', 'assets/pwa.js',
    'icons/icon-192.png', 'icons/icon-512.png',
]
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
  "$VERSION" \
  "$([ -f _site/downloads/jx3-minitool.zip ] && echo yes || echo no)"
