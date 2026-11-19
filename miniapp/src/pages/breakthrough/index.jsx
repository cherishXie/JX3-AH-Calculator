import { useMemo, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Kpi from '../../components/Kpi';
import Seg from '../../components/Seg';
import DataNote from '../../components/DataNote';
import Empty from '../../components/Empty';
import { useStore } from '../../store';
import { DATA } from '../../shared/engine';
import {
  analyze, allSkillsSummary, strategyLabel, formatRange, itemsText, matsText,
  itemOf, gatherOutputs, BT, MODES
} from '../../shared/breakthrough';
import { fmt, fmtInt, fmtSigned, fmtPct } from '../../shared/format';

const STRATEGIES = [
  { value: 'gold', label: '金币优先' },
  { value: 'energy', label: '精力优先' },
  { value: 'effort', label: '省心' }
];

export default function Breakthrough() {
  const router = useRouter();
  const params = router.params || {};
  const [state] = useStore();
  const [skillId, setSkillId] = useState(params.skill || 'duanzao');
  const [strategy, setStrategy] = useState(params.strategy || 'gold');
  const [open, setOpen] = useState('');
  const [mode, setMode] = useState(['low', 'mid'].indexOf(params.yield) !== -1 ? params.yield : 'high');
  const [showExperience, setShowExperience] = useState(false);
  const scenarios = useMemo(function () { return MODES.filter(function (m) { return strategy === 'gold' || m.key === 'mid'; }).map(function (m) { return { mode: m, result: analyze(state, skillId, strategy, null, m.key) }; }); }, [state, skillId, strategy]);

  const result = useMemo(function () {
    return scenarios.find(function (s) { return s.mode.key === (strategy === 'gold' ? mode : 'mid'); }).result;
  }, [scenarios, mode]);

  const summary = useMemo(function () {
    return allSkillsSummary(state, strategy, null, mode);
  }, [state, strategy, mode]);

  const t = result.totals;
  const budget = Math.max(1, Number(state.settings.energyBudget) || 1);
  const rounds = t.energy == null ? null : Math.ceil(t.energy / budget);
  const isGather = result.meta.type === 'gather';
  const taxRate = state.settings.taxRate;

  function toggle(key) {
    setOpen(function (cur) { return cur === key ? '' : key; });
  }

  const gateDone = result.gates.filter(function (g) { return !g.missing; }).length;

  return (
    <View className='page bt-page'>
      <TopBar title='突破升级 · 1→50' subtitle={BT.meta.expansion + ' · 晋秩突破与最优冲级路线'} />

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>选择技艺</Text>
            <Text className='card-sub'>8 项生活技艺 · 30/35/40/45 级需完成「晋秩」突破</Text>
          </View>
        </View>
        <View className='card-body'>
          <ScrollView scrollX className='bt-skill-scroll' showScrollbar={false}>
            <View className='bt-skill-tabs'>
              {DATA.skills.map(function (s) {
                const active = s.id === skillId;
                return (
                  <View
                    key={s.id}
                    className={'bt-skill-tab' + (active ? ' active' : '')}
                    onClick={function () { setSkillId(s.id); setOpen(''); }}
                  >
                    <View className='bt-dot' style={{ background: s.color }} />
                    <Text>{s.name}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View className='bt-strategy'>
            <Seg value={strategy} options={STRATEGIES} onChange={function (v) { if (v === 'gold' && strategy !== 'gold') setMode('high'); setStrategy(v); setOpen(''); }} />
          </View>
          <Text className='tiny dim'>
            {isGather
              ? '精力只按最少精力选择；金币按本档收益最高选择。'
              : '精力优先不按价格筛选；金币优先计算升级与突破的实际收益。'}
          </Text>
        </View>
      </View>

      {strategy === 'gold' ? (
      <View className='card'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>{result.meta.name} · 金币路线三档</Text><Text className='card-sub'>按每级可用、报价完整配方的金/精力数值范围三等分，计算各档算术均值，选择本档收益最高的实际配方。</Text></View></View>
        <View className='card-body'>
          {scenarios.map(function (sc) { const st = sc.result.totals; return <View key={sc.mode.key} className={'bt-scenario' + (mode === sc.mode.key ? ' active' : '')} onClick={function () { setMode(sc.mode.key); setOpen(''); }}><Text className='tiny dim'>合计收益 · {sc.mode.label} · {mode === sc.mode.key ? '当前路线' : '查看路线'}</Text><Text className={'bt-scenario-value ' + (st.total > 0 ? 'pos' : st.total < 0 ? 'neg' : st.total == null ? 'bt-scenario-empty' : '')}>{st.total == null ? '无法完整核算' : <>{fmtSigned(st.total, 0)}<Text className='bt-scenario-unit'>金</Text></>}</Text><Text className='tiny dim'>逐级档均值按精力加权 {fmt(st.bandMean, 2)} 金/精力</Text><Text className='tiny dim'>突破材料 {fmt(st.gateCost, 0)} 金{st.total == null ? ' · 点击查看缺失项' : ''}</Text></View>; })}
        </View>
        <View className='card-foot'>收益=税后产出价值−材料成本−突破材料；赚钱显示绿色 +，亏损显示红色 −。各档均值供参考，产量统一取中点乘概率，空档不跨档补位。优先本服目录脚本 JX3BOX 报价，突破快照补充；手动价、示例价与跨服价不参与。经验门槛为估算，未计未核实任务奖励。成本口径：{state.settings.basis === 'min' ? '市场与自制成本取低（不计中间产物精力）；任务材料缺市价仍提示缺价' : '市场价'}。</View>
      </View>
      ) : null}
      {!result.enough ? <View className='notice'><Text className='ic'>!</Text><Text>无法完整核算：{t.missingLevels ? t.missingLevels + ' 个等级无可用配方或所选收益比档无样本。' : ''}{result.gates.filter(function (g) { return g.missing; }).map(function (g) { return g.level + ' 级任务缺价：' + g.missingItems.map(function (i) { return i.name + '×' + i.qty; }).join('、'); }).join('；')} 缺价不按 0 计算，总收益暂不提供。</Text></View> : null}
      <View className='card'>
        <View className='card-head' onClick={function () { setShowExperience(!showExperience); }}><View className='flex1'><Text className='card-title'>{result.meta.name} · 逐级所需经验 {showExperience ? '⌃' : '⌄'}</Text><Text className='card-sub'>5 点观测校准 · 其余等级为插值或外推 · 共 49 级</Text></View></View>
        {showExperience ? <ScrollView scrollY style={{ height: '600rpx' }}><View className='card-body'><Text className='tiny dim'>保留 5 个用户观测点，点间插值；31 级起按 11 至 30 级趋势外推，推算值取整到 10。暂按八技艺共用门槛，尚未核实技艺间差异。</Text>{result.experience.map(function (xp) { return <View className='bt-line' key={xp.from}><Text>{xp.from}→{xp.to} 级</Text><Text>{fmtInt(xp.need)} 经验 · 累计 {fmtInt(xp.cumulative)}</Text><Text className={'badge ' + (xp.source === 'observed' ? 'badge-positive' : xp.source === 'extrapolated' ? 'badge-warning' : 'badge-outline')}>{{ observed: '用户观测', interpolated: '插值', extrapolated: '外推' }[xp.source] || '估算'}</Text></View>; })}</View></ScrollView> : null}
      </View>

      {BT.meta.hints && BT.meta.hints[skillId] ? (
        <View className='notice'>
          <Text className='ic'>提</Text>
          <Text>{BT.meta.hints[skillId]}</Text>
        </View>
      ) : null}

      <View className='kpi-grid'>
        <Kpi label='1→50 总经验' value={fmtInt(t.exp)} unit='经验' meta='5 点观测校准，其余等级推算' />
        <Kpi label='总精力' value={fmtInt(t.energy)} unit='精力' meta={'约 ' + fmtInt(rounds) + ' 次满精力（' + fmtInt(budget) + '）'} />
        {strategy === 'gold' ? <>
        <Kpi label='升级收益' value={fmtSigned(t.profit, 0)} unit='金' meta='税后产出价值 − 材料成本' tone={t.profit > 0 ? 'pos' : t.profit < 0 ? 'neg' : ''} />
        <Kpi label='突破材料' value={fmt(t.gateCost, 0)} unit='金' meta={gateDone + '/' + result.gates.length + ' 个门槛可算价'} />
        <Kpi label='合计收益' value={fmtSigned(t.total, 0)} unit='金' meta='升级收益 − 突破材料费用' tone={t.total > 0 ? 'pos' : t.total < 0 ? 'neg' : ''} />
        </> : null}
        <Kpi label='制作/采集次数' value={fmtInt(t.crafts)} unit='次' meta='按每级经验取整累计' />
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>两阶段{strategy === 'gold' ? '收益' : '精力'}</Text>
            <Text className='card-sub'>1→30 级（含晋秩·学徒）/ 30→50 级（含巧匠·名师·宗师→50）</Text>
          </View>
        </View>
        <View className='card-body'>
          <View className='bt-phase-head'>
            <Text className='c1'>阶段</Text><Text className='c2'>经验</Text><Text className='c2'>精力</Text>
            {strategy === 'gold' ? <><Text className='c3'>升级收益</Text><Text className='c3'>突破</Text><Text className='c3'>合计收益</Text></> : <Text className='c3'>次数</Text>}
          </View>
          {result.phases.map(function (p) {
            return (
              <View className='bt-phase-row' key={p.from}>
                <View className='c1'><Text className='nm'>{p.from === 1 ? '1–30 级' : '30–50 级'}</Text></View>
                <Text className='c2'>{fmtInt(p.exp)}</Text>
                <Text className='c2'>{fmtInt(p.energy)}</Text>
                {strategy === 'gold' ? <>
                <Text className={'c3 ' + (p.profit > 0 ? 'pos' : p.profit < 0 ? 'neg' : '')}>{fmtSigned(p.profit, 0)}</Text>
                <Text className='c3'>{fmt(p.gateCost, 0)}</Text>
                <Text className={'c3 strong ' + (p.total > 0 ? 'pos' : p.total < 0 ? 'neg' : '')}>{fmtSigned(p.total, 0)}</Text>
                </> : <Text className='c3'>{fmtInt(p.crafts)}</Text>}
              </View>
            );
          })}
          <Text className='tiny dim mt'>第一阶段只做「晋秩·学徒」一次突破；第二阶段要过 35/40/45 三道晋秩，45 级「晋秩·宗师」完成后继续升级至 50；50 级无独立任务。</Text>
        </View>
        <View className='card-foot'>阶段按等级切分：1–30 级的配方与 30 级突破计入第一阶段，30 级之后的配方与 35/40/45 突破计入第二阶段。</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>{result.meta.name} · 最优升级路线</Text>
            <Text className='card-sub'>{strategyLabel(strategy)} · {strategy === 'gold' ? MODES.find(function (m) { return m.key === mode; }).label : '单一路线'} · 点击展开材料与产出明细</Text>
          </View>
          <View className='card-tool'><Text className='badge badge-info'>{result.routes.length} 段</Text></View>
        </View>
        <View className='card-body' style={{ paddingTop: '6rpx' }}>
          {result.routes.length ? result.routes.map(function (row, i) {
            if (row.kind === 'gate') {
              return <GateBlock key={'g' + row.level} k={'g' + row.level} gate={row} open={open} toggle={toggle} />;
            }
            if (row.kind === 'max') {
              return (
                <View className='bt-row bt-max' key='max'>
                  <View className='bt-row-head'>
                    <View className='bt-band'><Text>50 级</Text></View>
                    <View className='bt-main'>
                      <Text className='nm'>50 级满级 · 无独立突破任务</Text>
                      <Text className='ds'>45 级晋秩后继续升级至 50；此处为等级终点</Text>
                    </View>
                  </View>
                </View>
              );
            }
            const key = 'r' + i;
            const expanded = open === key;
            return (
              <View className='bt-row' key={key}>
                <View onClick={function () { toggle(key); }}>
                  <View className='bt-row-head'>
                    <View className='bt-band'><Text>{formatRange(row.from, row.to)}</Text></View>
                    <View className='bt-main'>
                      <Text className='nm'>{row.name}</Text>
                      <Text className='ds'>
                        {row.level ? 'Lv.' + row.level + (isGather ? ' 采集点 · ' : ' 配方 · ') : ''}
                        经验 {fmtInt(row.exp)} / 精力 {fmtInt(row.energy)} · ×{fmtInt(row.count)}
                      </Text>
                    </View>
                    <View className='bt-val'>
                      <Text className={'v ' + (strategy === 'gold' ? (row.profit > 0 ? 'pos' : row.profit < 0 ? 'neg' : '') : '')}>{strategy === 'gold' ? fmtSigned(row.profit, 0) : fmtInt(row.totalEnergy)}</Text>
                      <Text className='u'>{strategy === 'gold' ? '收益·金' : '精力'}</Text>
                    </View>
                  </View>
                  <View className='bt-sub'>
                    <Text className='tiny dim'>产出：{itemsText(row.recipe, 2) || '—'}</Text>
                    <Text className='tiny dim'>材料：{matsText(row.recipe, 3) || '无（采集）'}</Text>
                  </View>
                </View>
                {expanded ? <RouteDetail row={row} taxRate={taxRate} state={state} energyOnly={strategy !== 'gold'} /> : null}
              </View>
            );
          }) : <Empty title='暂无可用路线' desc='补齐材料价格后再试。' />}
        </View>
        <View className='card-foot'>
          {strategy === 'gold' ? '收益=税后产出价值−材料成本−突破材料；绿色 + 为赚，红色 − 为亏。' : '只比较完成每级所需总精力，同精力时优先较少次数，不以收益或报价筛选。'}
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>晋秩突破任务</Text>
            <Text className='card-sub'>30/35/40/45 级 · 45 级完成晋秩·宗师后继续升至 50；无独立 50 级任务</Text>
          </View>
        </View>
        <View className='card-body'>
          {(BT.gates[skillId] || []).map(function (g) {
            return <GateBlock key={'gate' + g.l} k={'gate' + g.l} gate={result.gates.find(function (x) { return x.level === g.l; }) || { level: g.l, name: g.n, items: [], missingItems: [], cost: null }} open={open} toggle={toggle} full />;
          })}
          {!(BT.gates[skillId] || []).length ? <Empty title='该技艺无突破数据' desc='请检查数据版本。' /> : null}
        </View>
        <View className='card-foot'>晋秩·学徒 30 级 / 晋秩·巧匠 35 级 / 晋秩·名师 40 级 / 晋秩·宗师 45 级；完成后才能继续升级至 50。</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>八技艺横评</Text>
            <Text className='card-sub'>{strategy === 'gold' ? '同一收益比档按收益从高到低排序' : '只按总精力（省心按次数）从少到多排序'}</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {summary.map(function (s, i) {
            const active = s.skillId === skillId;
            return (
              <View className={'bt-sum-row' + (active ? ' active' : '')} key={s.skillId} onClick={function () { setSkillId(s.skillId); setOpen(''); }}>
                <View className='rank'>{s.enough ? i + 1 : '—'}</View>
                <View className='bt-sum-main'>
                  <Text className='nm'>{s.name}<Text className='tiny dim'> · {s.type === 'gather' ? '采集' : '制造'}</Text></Text>
                  <Text className='ds'>精力 {fmtInt(s.energy)} · 次数 {fmtInt(s.crafts)}{strategy === 'gold' ? ' · 突破 ' + fmt(s.gateCost, 0) + ' 金' : ''}</Text>
                </View>
                <View className='bt-val'>
                  <Text className={'v ' + (strategy === 'gold' ? (s.total > 0 ? 'pos' : s.total < 0 ? 'neg' : '') : '')}>{strategy === 'gold' ? fmtSigned(s.total, 0) : fmtInt(s.energy)}</Text>
                  <Text className='u'>{strategy === 'gold' ? '收益·金' : '精力'}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View className='card-foot'>横评使用当前服务器价格与「{strategyLabel(strategy)}」策略；点击可切换到该技艺。</View>
      </View>

      <View className='notice'>
        <Text className='ic'>!</Text>
        <Text>
          经验模型：{BT.meta.expModel.description}。暂按八技艺共用门槛，非观测等级及技艺间差异尚未核实，可能影响次数、路线及收益；
          采集经验按 {fmtInt(BT.meta.gatherExp)} 估算。突破材料与门槛来自 JX3BOX 攻略，配方数据来自技艺接口，价格为拍卖快照；
          产出按拍卖价成交估算，未计市场深度与暴击，量产会压低实际成交价。
        </Text>
      </View>

      <DataNote extra={'突破升级模块 · ' + BT.meta.version + ' · 价格 ' + String(BT.meta.priceUpdatedAt || '').slice(0, 10)} />
    </View>
  );
}

function round(v) { return Math.round(v); }

function RouteDetail(props) {
  const row = props.row;
  const econ = row.econ;
  if (!econ) return null;
  if (props.energyOnly) return <View className='bt-detail'><Text>本段 {fmtInt(row.need)} 经验，共 {fmtInt(row.count)} 次、{fmtInt(row.totalEnergy)} 精力。配方选择不参考价格。</Text></View>;
  if (row.recipe && row.recipe.kind === 'gather') {
    const outs = gatherOutputs(props.state, row.recipe, props.state.serverId);
    return (
      <View className='bt-detail'>
        <Text className='bt-detail-h'>采集产出（按掉率折算）</Text>
        {outs.map(function (o, i) {
          return (
            <View className='bt-line' key={i}>
              <Text className='n'>{o.name} ×{o.qty}{o.chance < 0.999 ? '（' + Math.round(o.chance * 100) + '%）' : ''}</Text>
              <Text className={'v ' + (o.missing ? 'warn' : '')}>{o.missing ? '缺价' : fmt(o.unit, 2)}</Text>
            </View>
          );
        })}
        <View className='bt-detail-foot'>
          <Text className='tiny dim'>本段 {fmtInt(row.count)} 次 · 精力 {fmtInt(row.totalEnergy)} · 产出 {fmt(row.outValue, 0)} 金</Text>
        </View>
      </View>
    );
  }
  return (
    <View className='bt-detail'>
      {row.band ? <Text className='tiny dim'>本档范围 {fmt(row.band.min, 2)}–{fmt(row.band.max, 2)} 金/精力；均值 {fmt(row.band.mean, 2)}，{row.band.count} 个样本。选本档收益最高配方。</Text> : null}
      <View className='bt-detail-cols'>
        <View className='bt-detail-col'>
          <Text className='bt-detail-h'>材料</Text>
          {econ.mats.map(function (m, i) {
            return (
              <View className='bt-line' key={i}>
                <Text className='n'>{itemOf(m.idx).n} ×{fmtInt(m.qty)}</Text>
                <Text className={'v ' + (m.missing ? 'warn' : '')}>{m.missing ? '缺价' : fmt(m.unit, 2)}</Text>
              </View>
            );
          })}
          {!econ.mats.length ? <Text className='tiny dim'>无（采集）</Text> : null}
        </View>
        <View className='bt-detail-col'>
          <Text className='bt-detail-h'>产出</Text>
          {econ.outs.map(function (o, i) {
            return (
              <View className='bt-line' key={i}>
                <Text className='n'>{itemOf(o.idx).n} ×{fmt(o.qty, 2)}（当前档折算量）</Text>
                <Text className={'v ' + (o.missing ? 'warn' : '')}>{o.missing ? '缺价' : fmt(o.unit, 2)}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View className='bt-detail-foot'>
        <Text className='tiny dim'>本段 {fmtInt(row.count)} 次 · 精力 {fmtInt(row.totalEnergy)} · 材料 {fmt(row.matCost, 0)} 金 · 产出 {fmt(row.outValue, 0)} 金 · 收益 <Text className={row.profit > 0 ? 'pos' : row.profit < 0 ? 'neg' : ''}>{fmtSigned(row.profit, 0)} 金</Text></Text>
      </View>
    </View>
  );
}

function GateBlock(props) {
  const gate = props.gate;
  const key = props.k || ('gate' + gate.level);
  const expanded = props.open === key;
  const total = gate.cost;
  return (
    <View className={'bt-gate' + (props.full ? ' full' : '')}>
      <View className='bt-gate-head' onClick={function () { props.toggle(key); }}>
        <View className='bt-gate-ic'><Text>{gate.level}</Text></View>
        <View className='bt-main'>
          <Text className='nm'>{gate.name + ' · ' + gate.level + ' 级突破'}</Text>
          <Text className='ds'>{gate.items.length} 种材料 · 合计 {fmt(total, 0)} 金 {gate.missing ? '· 缺价：' + gate.missingItems.map(function (i) { return i.name + '×' + i.qty; }).join('、') : ''}</Text>
        </View>
        <Text className='chev'>{expanded ? '⌃' : '⌄'}</Text>
      </View>
      {expanded ? (
        <View className='bt-detail'>
          {gate.items.map(function (it, i) {
            return (
              <View className='bt-line' key={i}>
                <View className='bt-line-main'>
                  <Text className='n'>{it.name} ×{fmtInt(it.qty)}</Text>
                  <Text className='tiny dim'>
                    {it.recipe
                      ? '自制：' + it.recipe.n + '（需 ' + it.recipe.l + ' 级，' + matsText(it.recipe, 3) + '）'
                      : '交易行 / 采集'}
                  </Text>
                  <Text className='tiny dim'>{it.missing ? '本服缺价，费用待核算' : '单价 ' + fmt(it.unit, 2) + ' 金 · 小计 ' + fmt(it.sub, 0) + ' 金'}</Text>
                </View>
                <Text className='v'>{it.missing ? '缺价' : fmt(it.sub, 0)}</Text>
              </View>
            );
          })}
          <View className='bt-detail-foot'>
            <Text className='tiny dim'>合计 {fmt(total, 0)} 金 · 全按交易行约 {fmt(gate.marketCost, 0)} 金；任务奖励材料不可提交。任务接口未列普通奖励，脚本奖励尚未核实，收益未计入奖励。</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
