import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import Seg from '../../components/Seg';
import DataNote from '../../components/DataNote';
import Empty from '../../components/Empty';
import { useStore } from '../../store';
import { DATA } from '../../shared/engine';
import {
  analyze, strategyLabel, formatRange, itemOf, gatherOutputs, BT
} from '../../shared/breakthrough';
import { fmt, fmtInt, fmtSigned, fmtWan } from '../../shared/format';

const STRATEGIES = [
  { value: 'gold', label: '金币优先' },
  { value: 'energy', label: '精力优先' },
  { value: 'effort', label: '省心' }
];

function Breakthrough() {
  const router = useRouter();
  const params = router.params || {};
  const [state] = useStore();
  const [skillId, setSkillId] = useState(params.skill || 'duanzao');
  const [strategy, setStrategy] = useState(params.strategy || 'gold');
  const [open, setOpen] = useState('');
  const [showExperience, setShowExperience] = useState(false);

  // 与网页一致：已取消低/中/高收益比三档，任何策略只算一条路线。
  const result = useMemo(function () {
    return analyze(state, skillId, strategy, null, 'mid');
  }, [state, skillId, strategy]);

  const t = result.totals;
  const isGather = result.meta.type === 'gather';
  const phase3050 = result.phases && result.phases[1];
  const phase3050Energy = phase3050 && phase3050.exp != null ? Math.round(phase3050.exp / 2) : null;
  const taxRate = state.settings.taxRate;

  function toggle(key) {
    setOpen(function (cur) { return cur === key ? '' : key; });
  }

  return (
    <View className='v2-page bt-page'>
      <PageHeader />

      <View className='v2-hero'>
        <View className='v2-kicker'>突破升级 · 8 技艺 · 1→50</View>
        <View className='v2-h1' style={{ fontSize: '50rpx' }}>{result.meta.name}</View>
        <View className='v2-hero-sub'>
          {strategyLabel(strategy)} · {t.energy == null ? '无法核算' : fmtInt(t.energy) + ' 精力 · ' + fmtInt(t.crafts) + ' 次'}
        </View>
      </View>

      <ScrollView scrollX className='v2-chip-row' style={{ marginTop: '16rpx' }}>
        {DATA.skills.map(function (s) {
          return (
            <View key={s.id} hoverClass='v2-pressed' hoverStayTime={80}
              className={'v2-chip' + (s.id === skillId ? ' on' : '')}
              onClick={function () { setSkillId(s.id); setOpen(''); }}>
              {s.name}
            </View>
          );
        })}
      </ScrollView>

      <View style={{ marginTop: '16rpx' }}>
        <Seg value={strategy} options={STRATEGIES} onChange={function (v) { setStrategy(v); setOpen(''); }} />
      </View>

      {strategy === 'gold' && !result.enough ? (
        <View className='v2-tiny' style={{ marginTop: '12rpx', lineHeight: '32rpx' }}>
          金币优先需要 1–30 级材料都有本服报价；当前有缺价，所以整条路线无法核算。切到「精力优先」仍可看精力与次数。
        </View>
      ) : null}

      <View className='bt-summary'>
        <View className='bt-summary-lead'>
          <Text className='k'>{strategy === 'gold' ? '合计收益' : '总精力'}</Text>
          <Text className={'v ' + (strategy === 'gold' && t.total > 0 ? 'pos' : strategy === 'gold' && t.total < 0 ? 'neg' : '')}>
            {strategy === 'gold' ? (result.enough ? fmtWan(t.total, 2) : '—') : fmtInt(t.energy)}
          </Text>
          <Text className='u'>{strategy === 'gold' ? '金' : '精力'}</Text>
        </View>
        <View className='bt-summary-facts'>
          <Text><Text className='b'>{fmtInt(t.exp)}</Text> 经验</Text>
          <Text><Text className='b'>{fmtInt(t.crafts)}</Text> 次</Text>
          {strategy === 'gold' ? <Text>升级 <Text className='b'>{t.profit == null ? '—' : fmtWan(t.profit, 2)}</Text> 金</Text> : null}
          {strategy === 'gold' ? <Text>突破 <Text className='b'>{fmtWan(t.gateCost, 2)}</Text> 金</Text> : null}
        </View>
        <View className='bt-summary-phases'>
          {result.phases.map(function (ph) {
            return (
              <Text key={ph.from} className='bt-phase-chip'>
                {ph.from}→{ph.to} · {fmtInt(ph.energy)} 精力 · {fmtInt(ph.crafts)} 次
                {strategy === 'gold' ? ' · ' + fmtWan(ph.total, 2) + ' 金' : ''}
              </Text>
            );
          })}
        </View>
        {BT.meta.hints && BT.meta.hints[skillId] ? <Text className='bt-summary-hint'>{BT.meta.hints[skillId]}</Text> : null}
      </View>

      <View className='v2-card-pad' style={{ marginBottom: '20rpx', background: 'var(--card)', border: '1rpx solid var(--border)' }}>
        <View className='v2-tiny' style={{ marginBottom: '6rpx' }}>30→50 级经验表（{isGather ? '采集' : '制造'}）</View>
        <View className='v2-kv'><Text className='k'>合计经验</Text><Text className='v'>{phase3050 && phase3050.exp != null ? fmtInt(phase3050.exp) : '—'} 经验</Text></View>
        <View className='v2-kv'><Text className='k'>按 1 精力 = 2 经验折算</Text><Text className='v'>{phase3050Energy == null ? '—' : fmtInt(phase3050Energy)} 精力</Text></View>
        <View className='v2-kv'><Text className='k'>按单次配方取整的实际路线</Text><Text className='v'>{phase3050 && phase3050.energy != null ? fmtInt(phase3050.energy) : '—'} 精力</Text></View>
        <View className='v2-tiny' style={{ marginTop: '6rpx' }}>30 级后采集与制造统一 1 精力=2 经验；30 级前采集仍按 40 精力=128 经验。上表已按 2026-11-25 实测表校准。</View>
      </View>

      <View className='card'>
        <View className='card-head' onClick={function () { setShowExperience(!showExperience); }}>
          <View className='flex1'>
            <Text className='card-title'>逐级经验 {showExperience ? '⌃' : '⌄'}</Text>
            <Text className='card-sub'>1→30 共用实测 · 30→50 采集/制造分表 · 30 后 1 精力=2 经验</Text>
          </View>
          <Text className='badge badge-info'>30→50 分表</Text>
        </View>
        {showExperience ? (
          <ScrollView scrollY style={{ height: '560rpx' }}>
            <View className='card-body'>
              {result.experience.map(function (xp) {
                const ratio = isGather && xp.from < 30 ? 3.2 : 2;
                return (
                  <View className='bt-line' key={xp.from}>
                    <Text>{xp.from}→{xp.to}</Text>
                    <Text>{fmtInt(xp.need)} 经验</Text>
                    <Text className='tiny dim'>≈{fmtInt(xp.need / ratio)} 精力</Text>
                    <Text className={'badge ' + (xp.source === 'observed' ? 'badge-positive' : xp.source === 'extrapolated' ? 'badge-warning' : 'badge-outline')}>
                      {{ observed: '实测', interpolated: '插值', extrapolated: '外推' }[xp.source] || '估算'}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        ) : null}
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>{result.meta.name} · 升级路线</Text>
            <Text className='card-sub'>{strategyLabel(strategy)}</Text>
          </View>
          <Text className='badge badge-info'>{result.routes.length} 段</Text>
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
                    <View className='bt-main'><Text className='nm'>满级</Text><Text className='ds'>45 级晋秩后继续升级</Text></View>
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
                      <Text className='ds'>{row.level ? 'Lv.' + row.level + (isGather ? ' 采集' : ' 配方') + ' · ' : ''}{fmtInt(row.energy)} 精力 ×{fmtInt(row.count)}</Text>
                    </View>
                    <View className='bt-val'>
                      <Text className={'v ' + (row.profit > 0 ? 'pos' : row.profit < 0 ? 'neg' : '')}>{fmtSigned(row.profit, 0)}</Text>
                      <Text className='u'>{fmtInt(row.totalEnergy)} 精力</Text>
                    </View>
                  </View>
                </View>
                {expanded ? <RouteDetail row={row} taxRate={taxRate} state={state} energyOnly={strategy !== 'gold'} /> : null}
              </View>
            );
          }) : <Empty title='暂无可用路线' desc='补齐材料价格后再试。' />}
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'><Text className='card-title'>晋秩突破</Text><Text className='card-sub'>30 / 35 / 40 / 45 级</Text></View>
        </View>
        <View className='card-body'>
          {(BT.gates[skillId] || []).map(function (g) {
            return <GateBlock key={'gate' + g.l} k={'gate' + g.l} gate={result.gates.find(function (x) { return x.level === g.l; }) || { level: g.l, name: g.n, items: [], missingItems: [], cost: null }} open={open} toggle={toggle} full />;
          })}
          {!(BT.gates[skillId] || []).length ? <Empty title='该技艺无突破数据' desc='检查数据版本。' /> : null}
        </View>
      </View>

      <DataNote extra={'经验 1→30 共用实测 · 30→50 采集/制造分表 · 30 后 1 精力=2 经验'} />
    </View>
  );
}

function RouteDetail(props) {
  const row = props.row;
  const econ = row.econ;
  if (!econ) return null;
  if (props.energyOnly) {
    return <View className='bt-detail'><Text>{fmtInt(row.need)} 经验 · {fmtInt(row.count)} 次 · {fmtInt(row.totalEnergy)} 精力 · 收益 {fmtSigned(row.profit, 0)} 金（仅对比）</Text></View>;
  }
  if (row.recipe && row.recipe.kind === 'gather') {
    const outs = gatherOutputs(props.state, row.recipe, props.state.serverId);
    return (
      <View className='bt-detail'>
        {outs.map(function (o, i) {
          return (
            <View className='bt-line' key={i}>
              <Text className='n'>{o.name} ×{o.qty}{o.chance < 0.999 ? '（' + Math.round(o.chance * 100) + '%）' : ''}</Text>
              <Text className={'v ' + (o.missing ? 'warn' : '')}>{o.missing ? '缺价' : fmt(o.unit, 2)}</Text>
            </View>
          );
        })}
        <View className='bt-detail-foot'><Text className='tiny dim'>{fmtInt(row.count)} 次 · {fmtInt(row.totalEnergy)} 精力 · 产出 {fmt(row.outValue, 0)} 金</Text></View>
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
        </View>
        <View className='bt-detail-col'>
          <Text className='bt-detail-h'>产出</Text>
          {econ.outs.map(function (o, i) {
            return (
              <View className='bt-line' key={i}>
                <Text className='n'>{itemOf(o.idx).n} ×{fmt(o.qty, 2)}</Text>
                <Text className={'v ' + (o.missing ? 'warn' : '')}>{o.missing ? '缺价' : fmt(o.unit, 2)}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View className='bt-detail-foot'>
        <Text className='tiny dim'>{fmtInt(row.count)} 次 · {fmtInt(row.totalEnergy)} 精力 · 材料 {fmt(row.matCost, 0)} 金 · 产出 {fmt(row.outValue, 0)} 金 · 收益 <Text className={row.profit > 0 ? 'pos' : row.profit < 0 ? 'neg' : ''}>{fmtSigned(row.profit, 0)} 金</Text></Text>
      </View>
    </View>
  );
}

function GateBlock(props) {
  const gate = props.gate;
  const key = props.k || ('gate' + gate.level);
  const expanded = props.open === key;
  return (
    <View className={'bt-gate' + (props.full ? ' full' : '')}>
      <View className='bt-gate-head' onClick={function () { props.toggle(key); }}>
        <View className='bt-gate-ic'><Text>{gate.level}</Text></View>
        <View className='bt-main'>
          <Text className='nm'>{gate.name} · {gate.level} 级</Text>
          <Text className='ds'>{gate.items.length} 种材料 · {fmt(gate.cost, 0)} 金{gate.missing ? ' · 缺价' : ''}</Text>
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
                  {it.recipe ? <Text className='tiny dim'>自制：{it.recipe.n}</Text> : null}
                </View>
                <Text className='v'>{it.missing ? '缺价' : fmt(it.sub, 0)}</Text>
              </View>
            );
          })}
          <View className='bt-detail-foot'><Text className='tiny dim'>合计 {fmt(gate.cost, 0)} 金 · 全按交易行 {fmt(gate.marketCost, 0)} 金</Text></View>
        </View>
      ) : null}
    </View>
  );
}

export default withTheme(Breakthrough);
