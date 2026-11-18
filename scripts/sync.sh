#!/usr/bin/env bash
# One-command release:
#   1. rebuild + audit the 小红书 minitool zip
#   2. build the GitHub Pages artifact (sanity check)
#   3. commit the tracked project files
#   4. push to origin/main -> deploy workflow publishes Pages + minitool artifact
#
# 小红书 still needs one manual submit after review; this script prints the
# exact commands (and the stable download URL) at the end.
set -euo pipefail
cd "$(dirname "$0")/.."

MSG="${1:-chore: sync web and minitool}"
BRANCH="${BRANCH:-main}"
REMOTE="${REMOTE:-origin}"

./scripts/build-minitool.sh
./scripts/build-site.sh

# Explicit paths: avoid committing the nested scaffold checkout and 8 MB
# delivery zip by accident.
git add -- \
  index.html \
  assets \
  minitool \
  miniapp \
  brand \
  scripts \
  .github \
  README.md \
  MINITOOL.md \
  DEPLOY.md \
  LICENSE \
  .gitignore \
  .gitattributes \
  "剑网三物价助手-minitool.zip"

if git diff --cached --quiet; then
  echo "nothing to commit"
else
  git commit -m "$MSG"
fi

GH_DIR="${GH_CONFIG_DIR:-$PWD/.gh-config}"
if command -v gh >/dev/null 2>&1 && GH_CONFIG_DIR="$GH_DIR" gh auth status >/dev/null 2>&1; then
  export GH_CONFIG_DIR="$GH_DIR"
  git -c credential.helper='!gh auth git-credential' push -u "$REMOTE" "$BRANCH"
else
  echo "gh not logged in; falling back to your git credential helper" >&2
  git push -u "$REMOTE" "$BRANCH"
fi

cat <<EOF

已推送，GitHub Actions 正在执行：
  Pages:    https://cherishxie.github.io/JX3-AH-Calculator/
  小工具包: https://cherishxie.github.io/JX3-AH-Calculator/downloads/jx3-minitool.zip
  Actions:  https://github.com/cherishXie/JX3-AH-Calculator/actions

小红书小工具（需手动提交审核）：
  1. 手机打开上面的「小工具包」下载 zip，或从 Actions artifact 下载
  2. npx redminitool login
  3. npx redminitool upload --file "剑网三物价助手-minitool.zip" --type pkg --yes --json
  4. npx redminitool submit --file submit.json --yes
  审核通过后在创作服务平台点发布，再挂到笔记
EOF
