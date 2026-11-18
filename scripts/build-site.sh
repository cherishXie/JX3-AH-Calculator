#!/usr/bin/env bash
# Build the static Web app into _site/ for GitHub Pages.
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf _site
mkdir -p _site
cp index.html _site/index.html
cp -R assets _site/assets
find _site -name '.DS_Store' -delete
touch _site/.nojekyll

# Publish the current minitool zip at a stable URL, so it can be downloaded
# on a phone and re-uploaded to 小红书 without opening GitHub Actions.
if [ -f "剑网三物价助手-minitool.zip" ]; then
  mkdir -p _site/downloads
  cp "剑网三物价助手-minitool.zip" "_site/downloads/jx3-minitool.zip"
fi

python3 - <<'PY'
import pathlib
import re
import sys

root = pathlib.Path('_site')
html = (root / 'index.html').read_text(encoding='utf-8')
missing = []
for url in re.findall(r'(?:src|href)="([^"]+)"', html):
    if url.startswith(('data:', 'http://', 'https://', '#', 'mailto:', 'javascript:')):
        continue
    clean = url.split('?', 1)[0].split('#', 1)[0]
    if not clean:
        continue
    if not (root / clean).exists():
        missing.append(clean)

required = ['assets/app.js', 'assets/core.js', 'assets/data.js', 'assets/charts.js', 'assets/styles.css']
for rel in required:
    if not (root / rel).exists():
        missing.append(rel)

if missing:
    print('ERROR: missing site files: ' + ', '.join(sorted(set(missing))), file=sys.stderr)
    sys.exit(1)
print('site: index.html + %d local refs OK' % len(re.findall(r'(?:src|href)="([^"]+)"', html)))
PY

printf 'built _site (%s), downloads: %s\n' \
  "$(du -sh _site | cut -f1)" \
  "$([ -f _site/downloads/jx3-minitool.zip ] && echo yes || echo no)"
