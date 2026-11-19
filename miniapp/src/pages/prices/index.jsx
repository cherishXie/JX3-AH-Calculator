import { useMemo, useState } from 'react';
import { View, Text, Input, Picker, Textarea } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Kpi from '../../components/Kpi';
import PriceInput from '../../components/PriceInput';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore, getState } from '../../store';
import { DATA, priceOf, statsOf, serverSpreads, skillOf, tierOf } from '../../shared/engine';
import StonePriceCard from '../../components/StonePriceCard';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import { fmt, fmtPct, fmtTime } from '../../shared/format';

export default function Prices() {
  const [state, actions] = useStore();
  const [q, setQ] = useState('');
  const [skillId, setSkillId] = useState('');
  const [kind, setKind] = useState('');
  const [onlyMissing, setOnlyMissing] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  const [bulk, setBulk] = useState('');
  const [syncing, setSyncing] = useState(false);
  const stats = statsOf(state, state.serverId);
  const allSpreads = serverSpreads(state);
  const spreads = allSpreads.slice(0, 5);
  const priceStamp = Date.parse((state.marketMeta && state.marketMeta.priceUpdatedAt) || DATA.meta.priceUpdatedAt);

  useDidShow(function () {
    if (isCloudConfigured()) syncRemotePrices(actions, false, getState());
  });

  const items = useMemo(function () {
    const list = state.items.map(function (it) {
      return { it: it, p: priceOf(state, it.id, state.serverId) };
    }).filter(function (x) {
      if (skillId && x.it.skillId !== skillId) return false;
      if (kind && x.it.kind !== kind) return false;
      if (onlyMissing && !x.p.missing) return false;
      if (q && (x.it.name + ' ' + skillOf(x.it.skillId).name).toLowerCase().indexOf(q.toLowerCase()) === -1) return false;
      return true;
    });
    list.sort(function (a, b) {
      if (a.p.missing !== b.p.missing) return a.p.missing ? -1 : 1;
      return a.it.name.localeCompare(b.it.name, 'zh-CN');
    });
    return list;
  }, [state, q, skillId, kind, onlyMissing]);

  const skillNames = ['全部技艺'].concat(DATA.skills.map(function (s) { return s.name; }));
  const skillIdx = skillId ? DATA.skills.findIndex(function (s) { return s.id === skillId; }) + 1 : 0;
  const kindNames = ['全部类型', '材料', '成品'];
  const kindIdx = kind === 'material' ? 1 : kind === 'product' ? 2 : 0;

  async function syncNow() {
    if (syncing) return;
    if (!isCloudConfigured()) {
      Taro.showToast({ title: '未配置云环境', icon: 'none' });
      return;
    }
    setSyncing(true);
    Taro.showLoading({ title: '同步行情...' });
    const res = await syncRemotePrices(actions, true, getState());
    Taro.hideLoading();
    setSyncing(false);
    if (res.ok) {
      Taro.showToast({ title: res.updatedAt ? '行情已更新' : '已是最新', icon: 'none' });
    } else if (res.skipped) {
      Taro.showToast({ title: '未配置云环境', icon: 'none' });
    } else {
      Taro.showToast({ title: res.error || '同步失败', icon: 'none' });
    }
  }

  function savePrice(itemId, val) {
    if (!actions.setPrice(itemId, val)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
    } else {
      Taro.showToast({ title: '已保存本服价格', icon: 'none' });
    }
  }


  function applyBulk() {
    const res = actions.importPrices(bulk, state.serverId);
    if (!res.applied && !res.unmatched.length && !res.invalid.length) {
      Taro.showToast({ title: '没有可导入的内容', icon: 'none' });
      return;
    }
    let msg = '导入 ' + res.applied + ' 项';
    if (res.unmatched.length) msg += '，未匹配 ' + res.unmatched.length + ' 项';
    if (res.invalid.length) msg += '，格式错误 ' + res.invalid.length + ' 行';
    Taro.showToast({ title: msg, icon: 'none' });
    if (res.applied) { setBulk(''); setShowBulk(false); }
  }

  return (
    <View className='page'>
      <TopBar title='价格库' subtitle='为本服填写材料与成品价格 · 示例价可直接计算' />

      <View className='kpi-grid'>
        <Kpi label='已校准' value={String(stats.user)} unit={'/ ' + stats.total + ' 项'} progress={stats.calibrated * 100} progressTone='green' meta='手动填入的本服价格' />
        <Kpi label='行情/示例' value={String(stats.market + stats.seed)} unit='项' meta={'行情 ' + stats.market + ' · 示例 ' + stats.seed} />
        <Kpi label='缺价' value={String(stats.missing)} unit='项' meta='缺价按 0 计' tone={stats.missing ? 'warn' : ''} />
        <Kpi label='跨服价差' value={String(allSpreads.length)} unit='项' meta='最高/最低价差 ≥ 12%' />
      </View>

      <StonePriceCard />

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>本服物品价格</Text>
            <Text className='card-sub'>失焦或回车即保存 · {items.length} 项 · 行情 {fmtTime(priceStamp)}</Text>
          </View>
          <View className='card-tool'>
            {isCloudConfigured() ? (
              <View className='btn btn-ghost btn-sm' style={{ marginRight: '8rpx' }} onClick={syncNow}>{syncing ? '同步中' : '同步行情'}</View>
            ) : null}
            <View className='btn btn-ghost btn-sm' onClick={function () { setShowBulk(!showBulk); }}>{showBulk ? '收起' : '批量'}</View>
          </View>
        </View>
        <View className='card-body' style={{ paddingBottom: '8rpx' }}>
          <Input className='input input-sm' value={q} placeholder='搜索物品 / 技艺' placeholderStyle='color:#475569'
            onInput={function (e) { setQ(e.detail.value); }} />
          <View className='filter-row mt'>
            <Picker mode='selector' range={skillNames} value={skillIdx}
              onChange={function (e) { const i = Number(e.detail.value); setSkillId(i ? DATA.skills[i - 1].id : ''); }}>
              <View className='picker picker-sm'><Text>{skillIdx ? DATA.skills[skillIdx - 1].name : '全部技艺'}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
            <Picker mode='selector' range={kindNames} value={kindIdx}
              onChange={function (e) { const i = Number(e.detail.value); setKind(i === 1 ? 'material' : i === 2 ? 'product' : ''); }}>
              <View className='picker picker-sm'><Text>{kindNames[kindIdx]}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
            <Toggle label='仅缺价' value={onlyMissing} onChange={setOnlyMissing} />
          </View>

          {showBulk ? (
            <View className='mt'>
              <Textarea className='textarea' value={bulk} placeholder={'每行：物品名,价格\n地脉玄元,21.22\n蜂王浆,205.10'}
                placeholderStyle='color:#475569' maxlength={20000}
                onInput={function (e) { setBulk(e.detail.value); }} />
              <View className='btn-row mt'>
                <View className='btn btn-primary btn-sm' onClick={applyBulk}>导入价格</View>
                <View className='btn btn-ghost btn-sm' onClick={function () { setBulk(''); }}>清空</View>
              </View>
            </View>
          ) : null}
        </View>

        <View style={{ padding: '0 24rpx 8rpx' }}>
          {items.length ? items.map(function (x) {
            const it = x.it;
            const p = x.p;
            return (
              <View className='price-line' key={it.id}>
                <View className='main'>
                  <View className='row'>
                    <Text className='nm'>{it.name}</Text>
                    {it.custom ? <Text className='badge badge-custom' style={{ marginLeft: '8rpx' }}>自定义</Text> : null}
                  </View>
                  <Text className='ds'>{skillOf(it.skillId).name} · {it.kind === 'product' ? '成品' : '材料'} · {tierOf(it.tier).name} · {it.source}</Text>
                </View>
                <View style={{ textAlign: 'right' }}>
                  <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(it.id, v); }} />
                  <Text className={'price-state ' + (p.missing ? 'missing' : p.user ? 'user' : p.market ? 'market' : '')}>
                    {p.missing ? '缺价' : p.user ? '已校准' : p.market ? '行情' : '示例'}
                  </Text>
                </View>
              </View>
            );
          }) : <Empty title='没有匹配的物品' desc='调整搜索或筛选条件，或去生活技艺新增物品。' />}
        </View>
        <View className='card-foot'>行情时间 {fmtTime(priceStamp)} · 示例价来自包内样本，云端行情不覆盖你的手动校准</View>
      </View>


      {spreads.length ? (
        <View className='card'>
          <View className='card-head'>
            <View className='flex1'>
              <Text className='card-title'>跨服价差参考</Text>
              <Text className='card-sub'>最高 / 最低价差 ≥ 12%，用于换服采购与上架</Text>
            </View>
          </View>
          <View className='card-body' style={{ paddingTop: '4rpx' }}>
            {spreads.map(function (s) {
              return (
                <View className='list-row' key={s.item.id}>
                  <View className='main'>
                    <Text className='nm'>{s.item.name}</Text>
                    <Text className='ds'>{s.min.server.name} {fmt(s.min.price, 2)} → {s.max.server.name} {fmt(s.max.price, 2)}</Text>
                  </View>
                  <View className='val'>
                    <Text className='v pos'>{fmtPct(s.ratio, 1)}</Text>
                    <Text className='u'> 价差</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ) : null}

      <DataNote extra='手动校准只存本机，云端行情单独同步' />
    </View>
  );
}
