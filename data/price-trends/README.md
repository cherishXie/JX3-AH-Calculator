# 预计算走势数据

浏览器「物价走势 / 区服趋势」不再直接读取 `data/price-history/` 的原始日文件，而是读取这里预计算好的增量序列。原始历史仍完整保留，供 CLI、审计和「节点原始数据」按需回查。

## 目录

```text
data/price-trends/
  index.json                         清单：最近 7 个自然日、区服、每天的快照点/哈希/体积
  days/YYYY-MM-DD.json               区服趋势：所有区服的「本服报价」增量
  servers/<serverId>/YYYY-MM-DD.json 物价走势：单区服的「有效价 + 本服报价 + 五行石」增量
  servers/__catalog__/YYYY-MM-DD.json 自定义区服兜底：目录基准价序列
```

两个数据集都只保存变化点：

- 每天第一个点写全量；
- 之后每个点只写变化的物品/等级，未变化的不重复保存；
- 因此同一份数据既能被浏览器快速回放，也不会随快照点数线性膨胀。

## 生成时机

- 每次行情更新（`scripts/update-jx3-prices.mjs` / GitHub Action）在写入 `data/price-history` 后自动生成；
- `scripts/build-site.sh` 发布前也会重建一次，保证 dev 预览和生产站内容一致；
- 生成是幂等的：行情没变化时不会改写文件，不会产生空提交。

```bash
# 手动重建（默认最近 7 天）
node scripts/build-price-trends.mjs

# 只看体积，不写文件
node scripts/build-price-trends.mjs --dry-run
```

## 7 天窗口（服务端）与 1 天缓存（浏览器）

- `index.json` 的 `maxDays` 固定为 7，生成时只保留最近 7 个自然日；
- 服务端仍生成最近 7 天预计算文件；浏览器默认只加载当天，持久缓存只保留 1 天；
- 用户选择历史范围时，按日期单独拉取，不自动预取；
- 「区服趋势」的 30 日选项已移除，旧链接里的 `srange=30d` 会按 7 天处理；
- 原始 `data/price-history` 不受 7 天限制，仍可查更早日期。

## 浏览器缓存

- 按「区服 + 日期」存入 IndexedDB（`jx3-price-trends`），不可用时退化为内存；
- 行情更新只重新校验 `index.json`，未变化的日期不再下载；
- 变化中的今天在后台补拉，旧数据继续展示，避免页面闪回加载态。

## 体积核对（2026-11-21，4 天数据）

| 数据 | 体积 |
| --- | ---: |
| 原始 `price-history/days`（17 服全量） | 873 KB（gzip 约 152 KB） |
| 区服趋势 `days/`（17 服报价增量） | 671 KB（gzip 约 152 KB） |
| 物价走势 `servers/<id>/`（17 服 + 目录兜底） | 1.67 MB（gzip 约 269 KB） |
| 单服走势 `servers/<id>/` 日均 | 约 18 KB（gzip 约 2 KB） |
| 单服走势 4 天 | 约 96 KB（gzip 约 12 KB） |

结论：

- **物价走势**只拉一个区服的序列，4 天约 96 KB，相比原始 873 KB 约 **1/10**；7 天预计约 120 KB；
- **区服趋势**首次拉 7 天日文件仍略小于原始数据，但压缩后差距不大；真正的收益是**增量**——首次之后每次行情更新只补今天约 60～200 KB，且不会清空重载；
- 如果把 17 服 × 每个节点的「有效价全量快照」都存下来，反而会大于原始数据（报价/有效价/基准价重复）。所以这里只存变化点，原始基准价等明细按需回查。

## 原始数据按需加载

走势图默认不带 `catalogPrices` / `stoneCatalogPrices`。用户展开「节点原始数据」或导出原始 CSV 时，浏览器才请求：

```text
price-history/days/YYYY-MM-DD.json
```

不影响普通图表和走势 CSV 的加载速度。
