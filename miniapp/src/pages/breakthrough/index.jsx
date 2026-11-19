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
  itemOf, gatherOutputs, BT
} from '../../shared/breakthrough';
import { fmt, fmtInt, fmtSigned, fmtPct } from '../../shared/format';

const STRATEGIES = [
  { value: 'gold', label: '金最优' },
  { value: 'energy', label: '精力最优' },
  { value: 'effort', label: '省心' }
];

export default function Breakthrough() {
  const router = useRouter();
  const params = router.params || {};
  const [state] = useStore();
  const [skillId, setSkillId] = useState(params.skill || 'duanzao');
  const [strategy, setStrategy] = useState(params.strategy || 'gold');
  const [open, setOpen] = useState('');

  const result = useMemo(function () {
    return analyze(state, skillId, strategy);
  }, [state, skillId, strategy]);

  const summary = useMemo(function () {
    return allSkillsSummary(state, strategy);
  }, [state, strategy]);

  const t = result.totals;
  const budget = Math.max(1, Number(state.settings.energyBudget) || 1);
  const rounds = Math.ceil((t.energy + 0) / budget);
  const isGather = result.meta.type === 'gather';
  const taxRate = state.settings.taxRate;

  function toggle(key) {
    setOpen(function (cur) { return cur === key ? '' : key; });
  }

  const gateDone = result.gates.filter(function (g) { return !g.missing; }).length;

  return (
    <View className='page'>
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
            <Seg value={strategy} options={STRATEGIES} onChange={function (v) { setStrategy(v); setOpen(''); }} />
          </View>
          <Text className='tiny dim'>
            {isGather
              ? '采集按「单次经验 ÷ 精力」与产出价值取优；采集经验为估算值。'
              : '制造配方经验恒为精力 ×2；「精力最优」优先选单次经验小的配方，减少升级取整浪费，代价是制作次数更多。'}
          </Text>
        </View>
      </View>

      {BT.meta.hints && BT.meta.hints[skillId] ? (
        <View className='notice'>
          <Text className='ic'>提</Text>
          <Text>{BT.meta.hints[skillId]}</Text>
        </View>
      ) : null}

      <View className='kpi-grid'>
        <Kpi label='1→50 总经验' value={fmtInt(t.exp)} unit='经验' meta='按每级经验模型估算' />
        <Kpi label='总精力' value={fmtInt(t.energy)} unit='精力' meta={'约 ' + fmtInt(rounds) + ' 次满精力（' + fmtInt(budget) + '）'} />
        <Kpi label='升级收益' value={fmtSigned(t.profit, 0)} unit='金' meta='产出税后价值 − 材料成本' tone={t.profit > 0 ? 'pos' : t.profit < 0 ? 'neg' : ''} />
        <Kpi label='突破材料' value={fmt(t.gateCost, 0)} unit='金' meta={gateDone + '/' + result.gates.length + ' 个门槛可算价'} />
        <Kpi label='合计收益' value={fmtSigned(t.total, 0)} unit='金' meta={'扣突破材料 · 产出 ' + fmt(t.outValue, 0) + ' 金'} tone={t.total > 0 ? 'pos' : t.total < 0 ? 'neg' : ''} />
        <Kpi label='制作/采集次数' value={fmtInt(t.crafts)} unit='次' meta={isGather ? '采集点按最高价值取优' : '按每次经验取整累计'} />
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>两阶段收益</Text>
            <Text className='card-sub'>1→30 级（含晋秩·学徒）/ 30→50 级（含巧匠·名师·宗师→50）</Text>
          </View>
        </View>
        <View className='card-body'>
          <View className='bt-phase-head'>
            <Text className='c1'>阶段</Text><Text className='c2'>经验</Text><Text className='c2'>精力</Text>
            <Text className='c3'>升级收益</Text><Text className='c3'>突破</Text><Text className='c3'>合计</Text>
          </View>
          {result.phases.map(function (p) {
            return (
              <View className='bt-phase-row' key={p.from}>
                <View className='c1'><Text className='nm'>{p.from === 1 ? '1–30 级' : '30–50 级'}</Text></View>
                <Text className='c2'>{fmtInt(p.exp)}</Text>
                <Text className='c2'>{fmtInt(p.energy)}</Text>
                <Text className={'c3 ' + (p.profit > 0 ? 'pos' : p.profit < 0 ? 'neg' : '')}>{fmtSigned(p.profit, 0)}</Text>
                <Text className='c3'>{fmt(p.gateCost, 0)}</Text>
                <Text className={'c3 strong ' + (p.total > 0 ? 'pos' : p.total < 0 ? 'neg' : '')}>{fmtSigned(p.total, 0)}</Text>
              </View>
            );
          })}
          <Text className='tiny dim mt'>第一阶段只做「晋秩·学徒」一次突破；第二阶段要过 35/40/45 三道晋秩，其中 45 级「晋秩·宗师」就是 50 级突破，完成后满级。</Text>
        </View>
        <View className='card-foot'>阶段按等级切分：1–30 级的配方与 30 级突破计入第一阶段，30 级之后的配方与 35/40/45 突破计入第二阶段。</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>{result.meta.name} · 最优升级路线</Text>
            <Text className='card-sub'>{strategyLabel(strategy)} · 点击展开材料与产出明细</Text>
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
                      <Text className='nm'>满级 · 晋秩·宗师（50 级突破）已完成</Text>
                      <Text className='ds'>1→50 路线结束；后续只有 50 级配方与专精内容</Text>
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
                      <Text className={'v ' + (row.profit > 0 ? 'pos' : row.profit < 0 ? 'neg' : '')}>{fmtSigned(row.profit, 0)}</Text>
                      <Text className='u'>金</Text>
                    </View>
                  </View>
                  <View className='bt-sub'>
                    <Text className='tiny dim'>产出：{itemsText(row.recipe, 2) || '—'}</Text>
                    <Text className='tiny dim'>材料：{matsText(row.recipe, 3) || '无（采集）'}</Text>
                  </View>
                </View>
                {expanded ? <RouteDetail row={row} taxRate={taxRate} state={state} /> : null}
              </View>
            );
          }) : <Empty title='暂无可用路线' desc='补齐材料价格后再试。' />}
        </View>
        <View className='card-foot'>
          {'收益 = 产出税后价值 − 材料成本（税 ' + fmtPct(taxRate, 0) + '）；正数为赚、负数为亏。合计收益 = 升级收益 − 突破材料。'}
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>晋秩突破任务</Text>
            <Text className='card-sub'>30/35/40/45 级 · 最后一道「晋秩·宗师」就是 50 级突破，完成后满级 50</Text>
          </View>
        </View>
        <View className='card-body'>
          {(BT.gates[skillId] || []).map(function (g) {
            return <GateBlock key={'gate' + g.l} k={'gate' + g.l} gate={result.gates.find(function (x) { return x.level === g.l; }) || { level: g.l, name: g.n, items: [], cost: 0 }} open={open} toggle={toggle} full />;
          })}
          {!(BT.gates[skillId] || []).length ? <Empty title='该技艺无突破数据' desc='请检查数据版本。' /> : null}
        </View>
        <View className='card-foot'>晋秩·学徒 30 级 / 晋秩·巧匠 35 级 / 晋秩·名师 40 级 / 晋秩·宗师 45 级；完成后才能继续升级至 50。</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>八技艺横评</Text>
            <Text className='card-sub'>同样 1→50，按合计收益排序（产出 − 材料 − 突破材料）</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {summary.map(function (s, i) {
            const active = s.skillId === skillId;
            return (
              <View className={'bt-sum-row' + (active ? ' active' : '')} key={s.skillId} onClick={function () { setSkillId(s.skillId); setOpen(''); }}>
                <View className='rank'>{i + 1}</View>
                <View className='bt-sum-main'>
                  <Text className='nm'>{s.name}<Text className='tiny dim'> · {s.type === 'gather' ? '采集' : '制造'}</Text></Text>
                  <Text className='ds'>精力 {fmtInt(s.energy)} · 升级收益 {fmtSigned(s.profit, 0)} 金 · 突破 {fmt(s.gateCost, 0)} 金</Text>
                </View>
                <View className='bt-val'>
                  <Text className={'v ' + (s.total > 0 ? 'pos' : s.total < 0 ? 'neg' : '')}>{fmtSigned(s.total, 0)}</Text>
                  <Text className='u'>金</Text>
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
          经验门槛为估算（每级 {fmtInt(BT.meta.expModel.base)}+{fmtInt(BT.meta.expModel.step)}×(等级−1)），仅影响总量，不改变单级最优配方；
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
                <Text className='n'>{itemOf(o.idx).n} ×{o.min === o.max ? o.min : o.min + '~' + o.max}</Text>
                <Text className={'v ' + (o.missing ? 'warn' : '')}>{o.missing ? '缺价' : fmt(o.unit, 2)}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View className='bt-detail-foot'>
        <Text className='tiny dim'>本段 {fmtInt(row.count)} 次 · 精力 {fmtInt(row.totalEnergy)} · 材料 {fmt(row.matCost, 0)} 金 · 产出 {fmt(row.outValue, 0)} 金 · 收益 {fmtSigned(row.profit, 0)} 金</Text>
      </View>
    </View>
  );
}

function GateBlock(props) {
  const gate = props.gate;
  const key = props.k || ('gate' + gate.level);
  const expanded = props.open === key;
  const total = gate.items.reduce(function (s, i) { return s + (i.missing ? 0 : i.sub); }, 0);
  return (
    <View className={'bt-gate' + (props.full ? ' full' : '')}>
      <View className='bt-gate-head' onClick={function () { props.toggle(key); }}>
        <View className='bt-gate-ic'><Text>{gate.level === 45 ? 50 : gate.level}</Text></View>
        <View className='bt-main'>
          <Text className='nm'>{gate.level === 45 ? '50 级突破 · 晋秩·宗师（45 级接取）' : gate.name + ' · ' + gate.level + ' 级突破'}</Text>
          <Text className='ds'>{gate.items.length} 种材料 · 合计 {fmt(total, 0)} 金 {gate.missing ? '· 部分缺价' : ''}</Text>
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
                  <Text className='tiny dim'>单价 {fmt(it.unit, 2)} 金 · 小计 {fmt(it.sub, 0)} 金</Text>
                </View>
                <Text className='v'>{it.missing ? '缺价' : fmt(it.sub, 0)}</Text>
              </View>
            );
          })}
          <View className='bt-detail-foot'>
            <Text className='tiny dim'>合计 {fmt(total, 0)} 金 · 全按交易行约 {fmt(gate.marketCost, 0)} 金；自制可省差价并可能暴击。</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
