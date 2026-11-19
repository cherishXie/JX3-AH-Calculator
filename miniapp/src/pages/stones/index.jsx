import { useEffect, useMemo, useState } from 'react';
import { View, Text, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Kpi from '../../components/Kpi';
import Seg from '../../components/Seg';
import PriceInput from '../../components/PriceInput';
import Empty from '../../components/Empty';
import { useStore } from '../../store';
import {
  STONE_LEVELS, STONE_META, stonePrice, stoneNetPrice, stoneSummary,
  stoneLevelInfo, stoneTaxRate
} from '../../shared/stones';
import { fmt, fmtInt, fmtPct, fmtSigned } from '../../shared/format';

function profitClass(v) {
  if (v == null || !Number.isFinite(Number(v))) return 'dim';
  return Number(v) >= 0 ? 'pos' : 'neg';
}

function inputsText(row) {
  return (row.inputs || []).map(function (x) { return x.qty + '×' + x.level + '级'; }).join(' + ');
}

function RateInput(props) {
  const [val, setVal] = useState(props.value == null ? '' : String(Number((props.value * 100).toFixed(1))));

  useEffect(function () {
    setVal(props.value == null ? '' : String(Number((props.value * 100).toFixed(1))));
  }, [props.value]);

  function commit() {
    const n = Number(val);
    if (!Number.isFinite(n)) {
      setVal(props.value == null ? '' : String(Number((props.value * 100).toFixed(1))));
      return;
    }
    props.onSave(Math.max(0, Math.min(100, n)) / 100);
  }

  return (
    <Input
      className='rate-box'
      type='digit'
      value={val}
      maxlength={6}
      onInput={function (e) { setVal(e.detail.value); }}
      onBlur={commit}
      onConfirm={commit}
    />
  );
}

export default function Stones() {
  const [state, actions] = useStore();
  const [mode, setMode] = useState('profit');
  const summary = useMemo(function () { return stoneSummary(state); }, [state]);
  const tax = stoneTaxRate(state);

  const rows = useMemo(function () {
    if (mode === 'fast') {
      return summary.all.filter(function (r) { return r.method === '快速合成' && r.target >= 2 && r.target <= 6; });
    }
    if (mode === 'gold') {
      const gold = summary.all.filter(function (r) { return r.method === '最低金币'; });
      return gold.length ? gold : [3, 4, 5, 6].map(function (l) { return summary.best[l]; }).filter(Boolean);
    }
    return [3, 4, 5, 6].map(function (l) { return summary.best[l]; }).filter(Boolean);
  }, [summary, mode]);

  const p6 = stonePrice(state, state.serverId, 6).v;
  const net7 = stoneNetPrice(state, state.serverId, 7);
  const net8 = stoneNetPrice(state, state.serverId, 8);
  const strips = [
    { name: '7级 · 精5衣/裤', cost: 525 + 9 * p6, qty: 1, unit: net7, note: '1七级 + 1五级，五级未抵扣' },
    { name: '7级 · 精6武器', cost: 1172 + 32 * p6, qty: 3, unit: net7, note: '3七级 + 1五级，按 3 颗均摊' },
    { name: '8级 · 精8橙戒', cost: (1879 + 80.2 * p6 + 154) / 2, qty: 1, unit: net8, note: '2八级 + 2六级 + 1五级，按 2 颗均摊' }
  ];

  function savePrice(level, val) {
    if (!actions.setStonePrice(level, val)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
      return;
    }
    Taro.showToast({ title: '已保存本服五行石价', icon: 'none' });
  }

  function saveChance(recipeId, level, val) {
    if (!actions.setStoneChance(recipeId, level, val)) {
      Taro.showToast({ title: '爆率需在 0–100% 之间', icon: 'none' });
    }
  }

  function openFormula(id) {
    Taro.navigateTo({ url: '/pages/stone-formula/index' + (id ? '?id=' + id : '?new=1') });
  }

  function resetStone() {
    Taro.showModal({
      title: '恢复示例价',
      content: '将清空本服 1-8 级五行石价格与假设爆率，恢复为内置示例数据。',
      confirmText: '恢复',
      success: function (res) {
        if (res.confirm) {
          actions.resetStone();
          Taro.showToast({ title: '已恢复五行石示例', icon: 'none' });
        }
      }
    });
  }

  return (
    <View className='page'>
      <TopBar title='五行石' subtitle='1→8 级合成 · 精力收益 · 爆率盈亏线' />

      <View className='kpi-grid'>
        <Kpi label='最优精力收益' value={summary.bestOverall ? fmt(summary.bestOverall.perEnergyTarget, 2) : '—'}
          unit='金/精力' tone='pos'
          meta={summary.bestOverall ? summary.bestOverall.method + ' · ' + summary.bestOverall.target + ' 级' : '补齐价格后计算'} />
        <Kpi label='六级单颗利润' value={summary.best[6] ? fmtSigned(summary.best[6].profitPerTarget, 2) : '—'}
          unit='金/颗' tone={summary.best[6] ? profitClass(summary.best[6].profitPerTarget) : ''}
          meta={summary.best[6] ? '成本 ' + fmt(summary.best[6].costPerTarget, 2) + ' · ' + fmtInt(summary.best[6].energyPerTarget) + ' 精力' : '—'} />
        <Kpi label='七级爆率线' value={summary.be7 && summary.be7.breakEven.p != null ? fmtPct(summary.be7.breakEven.p, 1) : '—'}
          unit='盈亏线' tone='warn'
          meta={summary.be7 ? '净售 ' + fmt(summary.be7.targetNet, 0) + ' 金/颗' : '—'} />
        <Kpi label='八级爆率线' value={summary.be8 && summary.be8.breakEven.p != null ? fmtPct(summary.be8.breakEven.p, 1) : '—'}
          unit='盈亏线' tone='warn'
          meta={summary.be8 ? '净售 ' + fmt(summary.be8.targetNet, 0) + ' 金/颗' : '—'} />
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>本服五行石行情</Text>
            <Text className='card-sub'>1–8 级独立价格 · 售价按 {fmtPct(tax, 0)} 交易税折算净价</Text>
          </View>
        </View>
        <View className='card-body'>
          {STONE_LEVELS.map(function (l) {
            const p = stonePrice(state, state.serverId, l.level);
            return (
              <View className='price-line' key={l.level}>
                <View className='main'>
                  <View className='row'>
                    <View className='tier-dot' style={{ background: l.color }} />
                    <Text className='nm'>{l.level} 级</Text>
                    <Text className={'badge ' + (p.user ? 'badge-positive' : p.market ? 'badge-info' : p.missing ? 'badge-warning' : 'badge-neutral')}
                      style={{ marginLeft: '8rpx' }}>
                      {p.user ? '已校准' : p.market ? '行情' : p.missing ? '缺价' : '示例'}
                    </Text>
                  </View>
                  <Text className='ds'>{l.name} · 净价 {fmt(p.v * (1 - tax), 2)} 金</Text>
                </View>
                <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(l.level, v); }} />
              </View>
            );
          })}
        </View>
        <View className='card-foot'>五行石价格与生活技艺价格库分开保存；每台设备、每个服务器独立。</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>合到几级最赚精力？</Text>
            <Text className='card-sub'>快速合成 / 最低金币 / 最高精力收益 · 点公式可编辑</Text>
          </View>
          <View className='card-tool'>
            <View className='btn btn-ghost btn-sm' onClick={function () { openFormula(null); }}>＋ 公式</View>
          </View>
        </View>
        <View className='card-body'>
          <View className='mb'>
            <Seg
              value={mode}
              options={[
                { value: 'fast', label: '快速合成' },
                { value: 'profit', label: '最赚精力' },
                { value: 'gold', label: '最低金币' }
              ]}
              onChange={setMode}
            />
          </View>

          {rows.length ? rows.map(function (r) {
            const info = stoneLevelInfo(r.target);
            return (
              <View className='stone-row' key={r.key} onClick={function () { openFormula(r.recipe.id); }}>
                <View className='stone-row-head'>
                  <View className='stone-lv' style={{ background: info.color }}>{r.target}级</View>
                  <View className='stone-row-title'>
                    <Text className='nm'>{r.recipe.name}</Text>
                    <Text className='ds'>{r.method} · {inputsText(r)} · {fmtInt(r.totalEnergy)} 精力/次</Text>
                  </View>
                  <View className='stone-row-val'>
                    <Text className={'v ' + profitClass(r.profitPerTarget)}>
                      {r.profitPerTarget == null ? '—' : fmtSigned(r.profitPerTarget, 2)}
                    </Text>
                    <Text className='u'> 金/颗</Text>
                  </View>
                  <Text className='chev'>›</Text>
                </View>
                <View className='stone-metrics'>
                  <View><Text className='k'>单颗成本</Text><Text className='v'>{fmt(r.costPerTarget, 2)}</Text></View>
                  <View><Text className='k'>精力/颗</Text><Text className='v'>{fmtInt(r.energyPerTarget)}</Text></View>
                  <View><Text className='k'>精力收益</Text><Text className={'v ' + profitClass(r.perEnergyTarget)}>{fmt(r.perEnergyTarget, 2)}</Text></View>
                </View>
              </View>
            );
          }) : <Empty title='暂无合成方案' desc='补齐 1–6 级价格后自动出现合成方案。' />}

          <View className='card-foot'>成本按「材料 + 加工费」；精力收益 = 单颗利润 ÷ 单颗精力；售价已扣交易税。</View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>七 / 八级赌跳级</Text>
            <Text className='card-sub'>改「假设爆率」看期望利润；盈亏线随本服价格重算</Text>
          </View>
        </View>
        <View className='card-body'>
          {[summary.be7, summary.be8, summary.be8alt, summary.be8from4].map(function (r) {
            if (!r) return null;
            const p = r.breakEven.p;
            const current = r.targetChance;
            const good = p != null && current >= p;
            return (
              <View className='stone-jack-row' key={r.recipe.id}>
                <View className='stone-jack-head' onClick={function () { openFormula(r.recipe.id); }}>
                  <Text className='nm'>{r.recipe.name}</Text>
                  <View className='row'>
                    <Text className={'badge ' + (p == null ? 'badge-neutral' : good ? 'badge-positive' : 'badge-warning')}>
                      {p == null ? '无法计算' : '盈亏线 ' + fmtPct(p, 1)}
                    </Text>
                    <Text className='chev'>›</Text>
                  </View>
                </View>
                <Text className='ds'>
                  投入 {fmt(r.cost, 2)} 金 · 净售 {fmt(r.targetNet, 2)} 金 · 期望 {fmtSigned(r.profitPerAttempt, 2)} 金/次
                </Text>
                <View className='row-between mt'>
                  <Text className='tiny dim'>假设爆率</Text>
                  <View className='row'>
                    <RateInput value={current} onSave={function (v) { saveChance(r.recipe.id, r.target, v); }} />
                    <Text className='tiny dim' style={{ marginLeft: '6rpx' }}>%</Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View className='card-foot'>默认爆率为 0，仅用于计算「需要多高爆率才不亏」；请填入你实测或可信的爆率再判断期望收益。</View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>剥七 / 剥八参考</Text>
            <Text className='card-sub'>按当前 6 级价 {fmt(p6, 2)} 金重算，仅作合成之外的对照</Text>
          </View>
        </View>
        <View className='card-body'>
          {strips.map(function (r) {
            const per = r.cost / r.qty;
            const profit = r.unit - per;
            return (
              <View className='stone-strip-row' key={r.name}>
                <View className='main'>
                  <Text className='nm'>{r.name}</Text>
                  <Text className='ds'>{r.note} · {r.qty} 颗均摊</Text>
                </View>
                <View className='val'>
                  <Text className={'v ' + profitClass(profit)}>{fmtSigned(profit, 2)}</Text>
                  <Text className='u'> 金/颗</Text>
                  <Text className='tiny dim'>成本 {fmt(per, 2)} · 净价 {fmt(r.unit, 2)}</Text>
                </View>
              </View>
            );
          })}
          <View className='card-foot'>成本含剥离费与消耗的 6 级五行石；低于目标等级的产出未抵扣；剥离精力未计入。</View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>数据与口径</Text>
            <Text className='card-sub'>{STONE_META.season} · 核验 {STONE_META.verifiedAt}</Text>
          </View>
        </View>
        <View className='card-body'>
          <Text className='tiny dim'>{STONE_META.note}</Text>
          <Text className='tiny dim mt'>1–8 级默认价来自 JX3BOX 17 个服务器拍卖样本（{STONE_META.verifiedAt}）；7/8 级样本少，务必按本服交易行校准。</Text>
          <Text className='tiny dim mt'>1–8 级价格与 7/8 级假设爆率可改；合成公式为内置当前赛季模板。数据只保存在本机，不联网、不上传。</Text>
        </View>
      </View>

      <View className='btn btn-ghost btn-block' onClick={resetStone}>恢复五行石示例价</View>
      <View style={{ height: '24rpx' }} />
    </View>
  );
}
