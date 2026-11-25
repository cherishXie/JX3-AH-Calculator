/* 可做 / 谨慎 / 不可做 评级（与网页同源审计）。
   数据由 scripts/build-miniapp-landability.mjs 生成：
   每个区服一条与 ids 等长的评级串，A/B/C/G；sc 串标记是否含自产。 */
import data from './landability.json';

const INDEX = Object.create(null);
data.ids.forEach(function (id, i) { INDEX[id] = i; });

const LABEL = { A: '可做', B: '谨慎', C: '不可做', G: '采集' };
const CLS = { A: 'pos', B: 'warn', C: 'neg', G: 'info' };
const REASON = {
  A: '报价完整，可按当前价执行',
  B: '样本少、波动大、利润薄或需自产',
  C: '缺价、负收益或流动性不足',
  G: '采集不参与可做判断'
};

function meta(grade, extra) {
  return {
    grade: grade,
    label: LABEL[grade] || '—',
    cls: CLS[grade] || '',
    reason: (extra && extra.reason) || REASON[grade] || '',
    selfCraft: !!(extra && extra.selfCraft)
  };
}

/** 当前区服下某个配方/行的评级；未知区服或新配方按 C（缺审计）。 */
export function gradeOf(recipe, serverId) {
  if (!recipe) return meta('C');
  if (recipe.kind === 'gather') return meta('G');
  const i = INDEX[recipe.id];
  if (i == null) return meta('C', { reason: '新增配方暂无审计' });
  const s = data.servers[serverId];
  if (!s) return meta('C', { reason: '自定义区服无审计，按不可做' });
  const g = s.g.charAt(i) || 'C';
  return meta(g, { selfCraft: s.sc.charAt(i) === '1' });
}

/** A/B/G 是默认可见；C 只在「全部」里出现。 */
export function isVisibleGrade(grade) {
  return grade === 'A' || grade === 'B' || grade === 'G';
}

export function visibleByGrade(rows, serverId) {
  return rows.filter(function (r) { return isVisibleGrade(gradeOf(r.recipe, serverId).grade); });
}

export function gradeCounts(rows, serverId) {
  const out = { A: 0, B: 0, C: 0, G: 0 };
  rows.forEach(function (r) {
    const g = gradeOf(r.recipe, serverId).grade;
    out[g] = (out[g] || 0) + 1;
  });
  return out;
}

export const LANDABILITY_META = data.meta;
