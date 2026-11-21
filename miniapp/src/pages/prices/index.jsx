import withTheme from '../../components/withTheme';
import { useEffect, useMemo, useState } from 'react';
import { View, Text, Input, Picker, Textarea, ScrollView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
import PriceInput from '../../components/PriceInput';
import Seg from '../../components/Seg';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore, getState } from '../../store';
import { DATA, priceOf, statsOf, serverSpreads, skillOf, tierOf, isMarketFresh } from '../../shared/engine';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import { fmt, fmtPct, fmtTime } from '../../shared/format';

const PAGE_SIZE = 30;
const IS_WEAPP = process.env.TARO_ENV === 'weapp';

function Prices() {
  const [state, actions] = useStore();
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [kind, setKind] = useState('');
  const [skillId, setSkillId] = useState('');
  const [onlyMissing, setOnlyMissing] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [showBulk, setShowBulk] = useState(false);
  const [bulk, setBulk] = useState('');
  const [syncing, setSyncing] = useState(false);

  const stats = statsOf(state, state.serverId);
  const allSpreads = serverSpreads(state);
  const spreads = allSpreads.slice(0, 3);
  const marketFresh = isMarketFresh(state);
  const marketStamp = marketFresh ? Date.parse(state.marketMeta.priceUpdatedAt || '') : NaN;
  const seedStamp = Date.parse(DATA.meta.priceUpdatedAt || '');
  const priceStamp = Number.isFinite(marketStamp) ? marketStamp : seedStamp;
  const priceSource = marketFresh ? '云端行情' : (stats.quote ? '包内本服报价' : '包内示例');
  const categories = [{ id: '', name: '全部' }].concat(DATA.meta.categories || []);
  const skillNames = ['全部技艺'].concat(DATA.skills.map(function (s) { return s.name; }));
  const skillIdx = skillId ? DATA.skills.findIndex(function (s) { return s.id === skillId; }) + 1 : 0;

  useDidShow(function () {
    if (isCloudConfigured()) syncRemotePrices(actions, true, getState());
  });

  useEffect(function () { setLimit(PAGE_SIZE); }, [q, category, kind, skillId, onlyMissing]);

  const items = useMemo(function () {
    const list = state.items.map(function (it) {
      return { it: it, p: priceOf(state, it.id, state.serverId) };
    }).filter(function (x) {
      if (category && x.it.category !== category) return false;
      if (kind && x.it.kind !== kind) return false;
      if (skillId && x.it.skillId !== skillId) return false;
      if (onlyMissing && !x.p.missing) return false;
      if (q && (x.it.name + ' ' + skillOf(x.it.skillId).name).toLowerCase().indexOf(q.toLowerCase()) === -1) return false;
      return true;
    });
    list.sort(function (a, b) {
      // 先看有价物品；缺价项通过「仅缺价」筛选集中处理，避免第一屏全是未定价。
      if (a.p.missing !== b.p.missing) return a.p.missing ? 1 : -1;
      return a.it.name.localeCompare(b.it.name, 'zh-CN');
    });
    return list;
  }, [state, q, category, kind, skillId, onlyMissing]);

  const visible = items.slice(0, limit);

  function categoryName(id) {
    const hit = (DATA.meta.categories || []).find(function (c) { return c.id === id; });
    return hit ? hit.name : '其他';
  }

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
    if (res.ok && res.stale) Taro.showToast({ title: '云端较旧，已用包内价', icon: 'none' });
    else if (res.ok) Taro.showToast({ title: res.updatedAt ? '行情已更新' : '已是最新', icon: 'none' });
    else if (res.skipped) Taro.showToast({ title: '未配置云环境', icon: 'none' });
    else Taro.showToast({ title: res.error || '同步失败', icon: 'none' });
  }

  function savePrice(itemId, val) {
    if (!actions.setPrice(itemId, val)) Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
    else Taro.showToast({ title: '已保存本服价格', icon: 'none' });
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
      <ServerBar />

      <View className='rank-summary' style={{ margin: '4rpx 0 16rpx' }}>
        <Text>{stats.total} 项参与收益 · 已校准 {stats.user} · 缺价 {stats.missing}</Text>
        <Text onClick={function () { Taro.navigateTo({ url: '/pages/analysis/index' }); }}>看收益排行 ›</Text>
      </View>

      {IS_WEAPP ? (
        <View className='card' onClick={function () { Taro.navigateTo({ url: '/market/pages/directory/index' }); }}>
          <View className='card-head'>
            <View className='flex1'>
              <Text className='card-title'>行情目录 · 672 项</Text>
              <Text className='card-sub'>家园 / 强化 / 消耗品 · 只查价/记价，不参与配方收益</Text>
            </View>
            <View className='card-tool'><Text className='badge badge-info'>打开 ›</Text></View>
          </View>
        </View>
      ) : null}

      <View className='rank-search'>
        <Input className='input' value={q} placeholder='搜索物品 / 技艺 / 分类' placeholderStyle='color:var(--muted-2)'
          onInput={function (e) { setQ(e.detail.value); }} />
        <View className={'rank-filter' + (showFilter ? ' active' : '')} onClick={function () { setShowFilter(!showFilter); }}>筛</View>
      </View>

      <ScrollView scrollX className='chips-scroll'>
        <View className='chips-inner'>
          {categories.map(function (c) {
            return (
              <View key={c.id || 'all'} className={'chip' + (category === c.id ? ' active' : '')}
                onClick={function () { setCategory(c.id); }}>
                {c.name}
              </View>
            );
          })}
        </View>
      </ScrollView>

      {showFilter ? (
        <View className='card' style={{ paddingTop: '20rpx', paddingBottom: '16rpx' }}>
          <Seg value={kind} options={[{ value: '', label: '全部类型' }, { value: 'material', label: '材料' }, { value: 'product', label: '成品' }]} onChange={setKind} />
          <View className='filter-row' style={{ marginTop: '20rpx' }}>
            <Picker mode='selector' range={skillNames} value={skillIdx}
              onChange={function (e) { const i = Number(e.detail.value); setSkillId(i ? DATA.skills[i - 1].id : ''); }}>
              <View className='picker'><Text>{skillIdx ? DATA.skills[skillIdx - 1].name : '全部技艺'}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
            <Toggle label='仅缺价' value={onlyMissing} onChange={setOnlyMissing} />
          </View>
          <View className='btn-row' style={{ marginTop: '20rpx' }}>
            {isCloudConfigured() ? <View className='btn btn-ghost btn-sm' onClick={syncNow}>{syncing ? '同步中' : '同步行情'}</View> : null}
            <View className='btn btn-ghost btn-sm' onClick={function () { setShowBulk(!showBulk); }}>{showBulk ? '收起批量' : '批量录入'}</View>
            {IS_WEAPP ? <View className='btn btn-ghost btn-sm' onClick={function () { Taro.switchTab({ url: '/pages/stones/index' }); }}>五行石行情</View> : null}
          </View>
          {showBulk ? (
            <View className='mt'>
              <Textarea className='textarea' value={bulk} placeholder={'每行：物品名,价格\n地脉玄元,21.22\n蜂王浆,205.10'}
                placeholderStyle='color:var(--muted-2)' maxlength={20000}
                onInput={function (e) { setBulk(e.detail.value); }} />
              <View className='btn-row mt'>
                <View className='btn btn-primary btn-sm' onClick={applyBulk}>导入价格</View>
                <View className='btn btn-ghost btn-sm' onClick={function () { setBulk(''); }}>清空</View>
              </View>
            </View>
          ) : null}
        </View>
      ) : null}

      <View className='rank-list'>
        {visible.length ? visible.map(function (x) {
          const it = x.it;
          const p = x.p;
          return (
            <View className='price-line' key={it.id}>
              <View className='main'>
                <View className='row'>
                  <Text className='nm'>{it.name}</Text>
                  {it.custom ? <Text className='badge badge-custom' style={{ marginLeft: '8rpx' }}>自定义</Text> : null}
                </View>
                <Text className='ds'>{categoryName(it.category)} · {skillOf(it.skillId).name} · {it.kind === 'product' ? '成品' : '材料'} · {it.source}</Text>
              </View>
              <View style={{ textAlign: 'right' }}>
                <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(it.id, v); }} />
                <Text className={'price-state ' + (p.missing ? 'missing' : p.user ? 'user' : p.market ? 'market' : p.quote ? 'quote' : '')}>
                  {p.missing ? '缺价' : p.user ? '已校准' : p.market ? '云端' : p.quote ? '本服报价' : '示例'}
                </Text>
              </View>
            </View>
          );
        }) : <Empty title='没有匹配的物品' desc='调整搜索或筛选条件，或去生活技艺新增物品。' />}
      </View>

      {items.length > visible.length ? (
        <View className='btn btn-ghost btn-block rank-more' onClick={function () { setLimit(limit + PAGE_SIZE); }}>
          加载更多 · {visible.length} / {items.length}
        </View>
      ) : null}

      <Text className='data-note'>行情 {fmtTime(priceStamp)} · {priceSource} · 手动校准优先，自动同步不覆盖</Text>

      {spreads.length ? (
        <View className='card'>
          <View className='card-head'>
            <View className='flex1'>
              <Text className='card-title'>跨服价差</Text>
              <Text className='card-sub'>最高 / 最低价差 ≥ 12%，用于换服采购</Text>
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
                  <View className='val'><Text className='v pos'>{fmtPct(s.ratio, 1)}</Text><Text className='u'> 价差</Text></View>
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

export default withTheme(Prices);
