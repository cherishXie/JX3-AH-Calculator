import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
import Seg from '../../components/Seg';
import DataNote from '../../components/DataNote';
import Empty from '../../components/Empty';
import { useStore } from '../../store';
import { DATA } from '../../shared/engine';
import {
  analyze, strategyLabel, formatRange, itemOf, gatherOutputs, BT
} from '../../shared/breakthrough';
import { fmt, fmtInt, fmtSigned } from '../../shared/format';

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
  const taxRate = state.settings.taxRate;

  function toggle(key) {
    setOpen(function (cur) { return cur === key ? '' : key; });
  }

  return (
    <View className='page bt-page'>
      <ServerBar />

      <View className='bt-head'>
        <Text className='t'>{result.meta.name} · 1→50</Text>
        <Text className='s'>{strategyLabel(strategy)} · {t.energy == null ? '无法核算' : fmtInt(t.energy) + ' 精力 · ' + fmtInt(t.crafts) + ' 次'}</Text>
      </View>

      <View className='skill-grid'>
        {DATA.skills.map(function (s) {
          return (
            <View key={s.id} className={'chip' + (s.id === skillId ? ' active' : '')}
              onClick={function () { setSkillId(s.id); setOpen(''); }}>
              {s.name}
            </View>
          );
        })}
      </View>

      <Seg value={strategy} options={STRATEGIES} onChange={function (v) { setStrategy(v); setOpen(''); }} />

      <View className='bt-summary'>
        <View className='bt-summary-lead'>
          <Text className='k'>{strategy === 'gold' ? '合计收益' : '总精力'}</Text>
          <Text className={'v ' + (strategy === 'gold' && t.total > 0 ? 'pos' : strategy === 'gold' && t.total < 0 ? 'neg' : '')}>
            {strategy === 'gold' ? fmtSigned(t.total, 0) : fmtInt(t.energy)}
          </Text>
          <Text className='u'>{strategy === 'gold' ? '金' : '精力'}</Text>
        </View>
        <View className='bt-summary-facts'>
          <Text><Text className='b'>{fmtInt(t.exp)}</Text> 经验</Text>
          <Text><Text className='b'>{fmtInt(t.crafts)}</Text> 次</Text>
          {strategy === 'gold' ? <Text>升级 <Text className='b'>{fmtSigned(t.profit, 0)}</Text> 金</Text> : null}
          {strategy === 'gold' ? <Text>突破 <Text className='b'>{fmt(t.gateCost, 0)}</Text> 金</Text> : null}
        </View>
        <View className='bt-summary-phases'>
          {result.phases.map(function (ph) {
            return (
              <Text key={ph.from} className='bt-phase-chip'>
                {ph.from}→{ph.to} · {fmtInt(ph.energy)} 精力 · {fmtInt(ph.crafts)} 次
                {strategy === 'gold' ? ' · ' + fmtSigned(ph.total, 0) + ' 金' : ''}
              </Text>
            );
          })}
        </View>
        {BT.meta.hints && BT.meta.hints[skillId] ? <Text className='bt-summary-hint'>{BT.meta.hints[skillId]}</Text> : null}
      </View>

      <View className='card'>
        <View className='card-head' onClick={function () { setShowExperience(!showExperience); }}>
          <View className='flex1'>
            <Text className='card-title'>逐级经验 {showExperience ? '⌃' : '⌄'}</Text>
            <Text className='card-sub'>1→30 实测 · 31+ 外推</Text>
          </View>
          <Text className='badge badge-info'>30 级实测</Text>
        </View>
        {showExperience ? (
          <ScrollView scrollY style={{ height: '560rpx' }}>
            <View className='card-body'>
              {result.experience.map(function (xp) {
                return (
                  <View className='bt-line' key={xp.from}>
                    <Text>{xp.from}→{xp.to}</Text>
                    <Text>{fmtInt(xp.need)} 经验</Text>
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

      <DataNote extra='经验 1→30 实测 · 31+ 外推' />
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
