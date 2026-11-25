import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, Picker } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import StatGrid from '../../components/StatGrid';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { DATA, rowsOf, median, simulate, sortRows } from '../../shared/engine';
import { fmt, fmtInt, fmtPct, fmtSigned, fmtWan } from '../../shared/format';
import { gradeOf as auditGrade, LANDABILITY_META } from '../../shared/landability';

const BUDGETS = [500, 1000, 3000, 6000];
const PAGE_SIZE = 20;

function Analysis() {
  const [state] = useStore();
  const router = useRouter();
  const [budget, setBudget] = useState(state.settings.energyBudget || 3000);
  const [view, setView] = useState('ab'); // ab | all
  const [type, setType] = useState('all');
  const [skillId, setSkillId] = useState((router.params && router.params.skill) || '');
  const [aId, setAId] = useState('');
  const [bId, setBId] = useState('');
  const [limit, setLimit] = useState(PAGE_SIZE);

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis }).map(function (r) {
      const g = auditGrade(r.recipe, state.serverId);
      const reason = g.grade === 'C' && r.calc.missing ? '材料或产物缺价' : g.reason;
      return Object.assign({}, r, { land: Object.assign({}, g, { reason: reason }) });
    });
  }, [state]);

  const craftRows = rows.filter(function (r) { return r.type !== 'gather'; });
  const abRows = rows.filter(function (r) { return r.land.grade === 'A' || r.land.grade === 'B'; });
  const cRows = craftRows.filter(function (r) { return r.land.grade === 'C'; });
  const validAb = abRows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
  const best = validAb.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; })[0] || null;
  const med = median(validAb.map(function (r) { return r.calc.perEnergy; }));
  const plan = simulate(abRows, budget);

  const scoped = rows.filter(function (r) {
    if (skillId && r.recipe.skillId !== skillId) return false;
    if (type !== 'all' && r.type !== type) return false;
    if (view === 'ab' && r.land.grade === 'C') return false;
    return true;
  });
  const sorted = sortRows(scoped.filter(function (r) { return !r.calc.missing || view === 'all'; }), 'perEnergy', 'desc');

  const top = sorted.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; }).slice(0, 15);
  const maxPer = top.length ? Math.max.apply(null, top.map(function (r) { return Math.max(0, r.calc.perEnergy); })) : 0;

  const scatterRows = abRows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
  const costs = scatterRows.map(function (r) { return r.calc.totalCost; });
  const pers = scatterRows.map(function (r) { return r.calc.perEnergy; });
  const minCost = costs.length ? Math.min.apply(null, costs) : 0;
  const maxCost = costs.length ? Math.max.apply(null, costs) : 1;
  const minPer = pers.length ? Math.min.apply(null, pers) : 0;
  const maxPerV = pers.length ? Math.max.apply(null, pers) : 1;
  const maxEnergy = scatterRows.length ? Math.max.apply(null, scatterRows.map(function (r) { return r.calc.energy || 0; })) : 1;
  const topIds = validAb.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; }).slice(0, 3).map(function (r) { return r.recipe.id; });
  const bubbleRows = scatterRows.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; }).slice(0, 60);

  const comparePool = validAb.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; });
  const rA = comparePool.find(function (r) { return r.recipe.id === aId; }) || comparePool[0] || null;
  const rB = comparePool.find(function (r) { return r.recipe.id === bId; }) || comparePool[1] || null;
  const compareNames = comparePool.map(function (r) { return r.recipe.name; });
  const idxA = rA ? comparePool.findIndex(function (r) { return r.recipe.id === rA.recipe.id; }) : -1;
  const idxB = rB ? comparePool.findIndex(function (r) { return r.recipe.id === rB.recipe.id; }) : -1;

  const visible = sorted.slice(0, limit);
  const doableCount = abRows.length;
  const positiveCount = abRows.filter(function (r) { return r.calc.profit > 0; }).length;

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }
  function copyCsv() {
    const lines = ['配方,技艺,评级,总成本,税后产值,利润,精力,金每精力,备注'];
    sorted.forEach(function (r) {
      lines.push([
        r.recipe.name, r.skill.name, r.land.label,
        fmt(r.calc.totalCost, 2), fmt(r.calc.outputValue, 2), fmtSigned(r.calc.profit, 2),
        fmtInt(r.calc.energy), r.calc.missing ? '' : fmt(r.calc.perEnergy, 2), r.land.reason
      ].join(','));
    });
    Taro.setClipboardData({ data: lines.join('\n') });
    Taro.showToast({ title: '已复制 ' + sorted.length + ' 行 CSV', icon: 'none' });
  }
  function badgeClass(g) {
    return 'v2-tag ' + (g.cls || '');
  }

  return (
    <View className='v2-page'>
      <PageHeader
        actions={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-icon-btn' onClick={function () { Taro.switchTab({ url: '/pages/prices/index' }); }}>价</View>
        }
      />

      <View className='v2-hero'>
        <View className='v2-kicker'>本服可做判断 · A/B/C 评级</View>
        <View className='v2-h1'>精力<Text style={{ color: '#fd7b4c' }}>收益分析</Text></View>
        <View className='v2-hero-sub'>
          先判断能不能做，再比每点精力赚多少。评级来自与网页同源的本服落地审计（缺价、覆盖、波动、自产），默认只看可做/谨慎。
        </View>
      </View>

      <View className='v2-chip-row' style={{ marginTop: '18rpx' }}>
        <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (view === 'ab' ? ' on' : '')} onClick={function () { setView('ab'); }}>可做 / 谨慎</View>
        <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (view === 'all' ? ' on' : '')} onClick={function () { setView('all'); }}>全部（含不可做）</View>
        <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (state.settings.basis === 'min' ? ' on' : '')} onClick={function () { Taro.showToast({ title: '成本口径在「我的」里切换', icon: 'none' }); }}>
          {state.settings.basis === 'min' ? '取最低口径' : '市场价口径'}
        </View>
      </View>

      <StatGrid
        items={[
          { k: '本服最高可做', v: best ? fmt(best.calc.perEnergy, 2) : '—', u: '金/精力', m: best ? best.recipe.name : '暂无可做配方', tone: 'v2-pos' },
          { k: '可做中位', v: med == null ? '—' : fmt(med, 2), u: '金/精力', m: doableCount + ' 个可做/谨慎' },
          { k: '暂不可做', v: cRows.length, u: '/ ' + craftRows.length, m: '缺价 / 亏损 / 薄市', tone: cRows.length ? 'v2-warn' : '' },
          { k: '可做组合', v: fmtWan(plan.profit, 2), u: '金', m: '精确 ' + fmt(plan.profit, 2) + ' · 用尽 ' + fmtInt(plan.used), tone: 'v2-pos' }
        ]}
      />

      <Section title='可做组合怎么分配' sub='按可做/谨慎 + 每点精力贪心分配'>
        <View className='v2-chip-row'>
          {BUDGETS.map(function (b) {
            return (
              <View key={b} className={'v2-chip' + (budget === b ? ' on' : '')} onClick={function () { setBudget(b); }}>
                {b} 精力
              </View>
            );
          })}
        </View>
        <View className='v2-plan'>
          <View className='v2-plan-top'>
            <View>
              <View className='v2-plan-k'>预计总收益</View>
              <View className='v2-plan-v v2-pos'>+{fmtWan(plan.profit, 2)}<Text className='u'>金</Text></View>
            </View>
            <View style={{ textAlign: 'right' }}>
              <View className='v2-plan-k'>参与配方</View>
              <View className='v2-row-v'>{plan.allocations.length} 项</View>
              <View className='v2-row-u'>剩余 {fmtInt(plan.remaining)} 精力</View>
            </View>
          </View>
          <View style={{ marginTop: '12rpx' }}>
            {plan.allocations.slice(0, 5).map(function (a, i) {
              return (
                <View className='v2-alloc' key={a.row.recipe.id}>
                  <Text className='n'>{i + 1}</Text>
                  <Text className='nm'>{a.row.recipe.name} × {a.count}</Text>
                  <Text className='v'>+{fmtWan(a.profit, 2)}</Text>
                </View>
              );
            })}
            {!plan.allocations.length ? <View className='v2-tiny'>当前预算下没有正收益的可做配方。</View> : null}
          </View>
        </View>
      </Section>

      <Section title='收益排行' sub='Top 15 · 可做/谨慎 · 金/精力'>
        <View className='v2-chip-row'>
          <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (!skillId ? ' on' : '')} onClick={function () { setSkillId(''); }}>全部技艺</View>
          {DATA.skills.map(function (s) {
            return (
              <View key={s.id} className={'v2-chip' + (skillId === s.id ? ' on' : '')} onClick={function () { setSkillId(s.id); }}>{s.name}</View>
            );
          })}
        </View>
        <View className='v2-rows'>
          {top.map(function (r, i) {
            const w = maxPer > 0 ? Math.max(6, Math.round((Math.max(0, r.calc.perEnergy) / maxPer) * 100)) : 0;
            return (
              <View className='v2-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                <View className='v2-bar' style={{ width: w + '%' }} />
                <Text className={'v2-no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{r.recipe.name}</Text>
                    <Text className={badgeClass(r.land)}>{r.land.label}</Text>
                  </View>
                  <Text className='v2-row-ds'>{r.skill.name} · 成本 {fmt(r.calc.totalCost, 0)} · {fmtInt(r.calc.energy)} 精力</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (r.calc.perEnergy >= 0 ? 'v2-pos' : 'v2-neg')}>{fmt(r.calc.perEnergy, 2)}</Text>
                  <Text className='v2-row-u'>金 / 点精力</Text>
                </View>
              </View>
            );
          })}
          {!top.length ? <View className='v2-empty'><View className='t'>当前筛选没有可做配方</View><View className='s'>切到「全部」或校准行情。</View></View> : null}
        </View>
      </Section>

      <Section title='成本越高，收益越高吗' sub='横轴单次成本 · 纵轴精力收益 · 气泡为精力'>
        <View className='v2-chart'>
          <View className='v2-chart-y'>
            <Text>{fmt(maxPerV, 1)}</Text>
            <Text>{fmt((maxPerV + minPer) / 2, 1)}</Text>
            <Text>{fmt(minPer, 1)}</Text>
          </View>
          <View className='v2-scatter' style={{ flex: 1, margin: '0' }}>
            <View className='v2-grid-line' style={{ top: '25%' }} />
            <View className='v2-grid-line' style={{ top: '50%' }} />
            <View className='v2-grid-line' style={{ top: '75%' }} />
            {bubbleRows.map(function (r) {
              const x = maxCost > minCost ? (r.calc.totalCost - minCost) / (maxCost - minCost) : 0.5;
              const y = maxPerV > minPer ? (r.calc.perEnergy - minPer) / (maxPerV - minPer) : 0.5;
              const size = 26 + Math.round((Math.max(0, r.calc.energy) / Math.max(1, maxEnergy)) * 34);
              return (
                <View
                  key={r.recipe.id}
                  className={'v2-bubble' + (topIds.indexOf(r.recipe.id) !== -1 ? ' top' : '')}
                  style={{ left: (4 + x * 92) + '%', bottom: (5 + y * 85) + '%', width: size + 'rpx', height: size + 'rpx' }}
                />
              );
            })}
            {!bubbleRows.length ? <View className='v2-tiny' style={{ paddingTop: '150rpx', textAlign: 'center' }}>暂无可绘制的可做配方</View> : null}
          </View>
        </View>
        <View className='v2-axis' style={{ paddingLeft: '88rpx' }}><Text>{fmt(minCost, 0)} 金</Text><Text>{fmt(maxCost, 0)} 金</Text></View>
        <View className='v2-tiny' style={{ marginTop: '8rpx' }}>越靠上越赚精力；紫色为当前收益前三；气泡越大单次精力越高。</View>
      </Section>

      <Section title='两个制品，做哪个' sub='同口径对比成本、产值、精力与收益'>
        {rA && rB ? (
          <View>
            <View className='v2-flex' style={{ gap: '12rpx' }}>
              <Picker mode='selector' range={compareNames} value={idxA}
                onChange={function (e) { setAId(comparePool[Number(e.detail.value)].recipe.id); }}>
                <View className='v2-input' style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '240rpx' }}>{rA.recipe.name}</Text>
                  <Text className='v2-muted'>⌄</Text>
                </View>
              </Picker>
              <Picker mode='selector' range={compareNames} value={idxB}
                onChange={function (e) { setBId(comparePool[Number(e.detail.value)].recipe.id); }}>
                <View className='v2-input' style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '240rpx' }}>{rB.recipe.name}</Text>
                  <Text className='v2-muted'>⌄</Text>
                </View>
              </Picker>
            </View>
            <View style={{ marginTop: '16rpx' }}>
              {[
                ['总成本', fmt(rA.calc.totalCost, 2), fmt(rB.calc.totalCost, 2)],
                ['税后产值', fmt(rA.calc.outputValue, 2), fmt(rB.calc.outputValue, 2)],
                ['利润', fmtSigned(rA.calc.profit, 2), fmtSigned(rB.calc.profit, 2)],
                ['精力', fmtInt(rA.calc.energy), fmtInt(rB.calc.energy)],
                ['收益/精力', fmt(rA.calc.perEnergy, 2), fmt(rB.calc.perEnergy, 2)]
              ].map(function (row) {
                return (
                  <View className='v2-kv' key={row[0]}>
                    <Text className='k'>{row[0]}</Text>
                    <Text className='v'>{row[1]}</Text>
                    <Text className='v'>{row[2]}</Text>
                  </View>
                );
              })}
            </View>
            <View className='v2-plan' style={{ marginTop: '14rpx' }}>
              <View className='v2-tiny'>差值（{rA.recipe.name} − {rB.recipe.name}）</View>
              <View className={'v2-row-v ' + (rA.calc.perEnergy >= rB.calc.perEnergy ? 'v2-pos' : 'v2-neg')}>
                {fmtSigned((rA.calc.perEnergy || 0) - (rB.calc.perEnergy || 0), 2)} 金/精力
              </View>
            </View>
          </View>
        ) : (
          <View className='v2-empty'><View className='t'>暂无可对比的完整配方</View><View className='s'>先校准行情或切到「全部」。</View></View>
        )}
      </Section>

      <Section title='完整收益表' sub={sorted.length + ' 条 · 点行看配方详情'} action='切换全部' onAction={function () { setView(view === 'ab' ? 'all' : 'ab'); }}>
        <View className='v2-chip-row'>
          {[{ v: 'all', t: '全部' }, { v: 'craft', t: '制造' }, { v: 'gather', t: '采集' }].map(function (t) {
            return (
              <View key={t.v} className={'v2-chip' + (type === t.v ? ' on' : '')} onClick={function () { setType(t.v); setLimit(PAGE_SIZE); }}>{t.t}</View>
            );
          })}
        </View>
        <View className='v2-rows'>
          {visible.map(function (r) {
            const g = r.land;
            return (
              <View className='v2-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }} style={{ minHeight: '96rpx' }}>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{r.recipe.name}</Text>
                    <Text className={badgeClass(g)}>{g.label}</Text>
                  </View>
                  <Text className='v2-row-ds'>{r.skill.name} · 成本 {fmt(r.calc.totalCost, 0)} · 利润 {fmtSigned(r.calc.profit, 0)} · {fmtInt(r.calc.energy)} 精力</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (r.calc.missing ? 'v2-muted' : r.calc.perEnergy >= 0 ? 'v2-pos' : 'v2-neg')}>
                    {r.calc.missing ? '—' : fmt(r.calc.perEnergy, 2)}
                  </Text>
                  <Text className='v2-row-u'>{g.reason}</Text>
                </View>
              </View>
            );
          })}
        </View>
        {sorted.length > visible.length ? (
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost block' style={{ marginTop: '16rpx' }} onClick={function () { setLimit(limit + PAGE_SIZE); }}>
            加载更多 · {visible.length} / {sorted.length}
          </View>
        ) : null}
        <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost' style={{ marginTop: '16rpx' }} onClick={copyCsv}>
          复制收益表 CSV
        </View>
      </Section>

      <Section title='评级口径' sub='与网页端共用同一份落地审计'>
        <View className='v2-card-pad' style={{ background: 'var(--card)', border: '1rpx solid var(--border)' }}>
          <View className='v2-kv'><Text className='k'>A 可做</Text><Text className='v'>报价完整、流动性够，可按当前价执行</Text></View>
          <View className='v2-kv'><Text className='k'>B 谨慎</Text><Text className='v'>样本少/波动大/利润薄，或需要自产中间物</Text></View>
          <View className='v2-kv'><Text className='k'>C 不可做</Text><Text className='v'>缺价、负收益、成品覆盖不足；默认不展示</Text></View>
          <View className='v2-kv'><Text className='k'>G 采集</Text><Text className='v'>采集产出直接出售，不参与可做判断</Text></View>
          <View className='v2-tiny' style={{ marginTop: '10rpx' }}>
            评级由网页同源审计生成（{LANDABILITY_META.snapshots} 个快照 / {LANDABILITY_META.generatedAt ? LANDABILITY_META.generatedAt.slice(0, 10) : '—'}）；审计未覆盖的新配方按不可做处理。金额与精力仍按当前本服价格实时计算，评级不随单次改价即时重算。
          </View>
        </View>
      </Section>

      <DataNote extra={'可做 ' + doableCount + ' · 盈利 ' + positiveCount + ' · 口径 ' + (state.settings.basis === 'min' ? '取最低' : '市场价')} />
    </View>
  );
}

export default withTheme(Analysis);
