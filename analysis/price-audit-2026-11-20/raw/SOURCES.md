# 数据来源与校验

下载时间：2026-11-20 23:36（北京时间）

| 文件 | URL | SHA-256 |
|---|---|---|
| `index.json` | https://cherishxie.github.io/JX3-AH-Calculator/price-history/index.json | `e28470cc6c863dcf0d29ebb4352b3902fed611f5526a6b862e29f64154a1baac` |
| `day-2026-11-20.json` | https://cherishxie.github.io/JX3-AH-Calculator/price-history/days/2026-11-20.json | `4a319f2f23cafc786367e099fa66e8c047bbfda5c8435b79f898f057cc3b9786` |
| `data.js` | https://cherishxie.github.io/JX3-AH-Calculator/assets/data.js | `786dd3a7a13e038c4af27a0219b3b4e35a9e381be6f57c3cc65c90bba9abc03b` |

- `git-snapshots.json`：由本仓库 `assets/data.js` 的 26 个历史版本抽取（2026-11-18 14:45～2026-11-20 19:23），每个时间点保留最新提交。
- 一致性校验：2026-11-20 10:07 的 git 快照与线上 JSON base 在梦江南的 202 个报价逐项一致（202/202）。
- `catalog.json`：由 `data.js` 在 Node VM 中执行后导出，保留 items/recipes/servers/serverPrices/stones。
- `item-sources.json` / `item-details.json`：JX3BOX 物品搜索与详情 API 的缓存，用于判断商店/采集/秘境来源；部分早期查询超时或无独立词条，报告中已按“未确认”保守处理。
