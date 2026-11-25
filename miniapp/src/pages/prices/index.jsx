import withTheme from '../../components/withTheme';
import { useEffect, useMemo, useState } from 'react';
import { View, Text, Input, Picker, Textarea } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import StatGrid from '../../components/StatGrid';
import Sheet from '../../components/Sheet';
import PriceInput from '../../components/PriceInput';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore, getState } from '../../store';
import { DATA, priceOf, statsOf, serverSpreads, skillOf, isMarketFresh } from '../../shared/engine';
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
  const spreads = serverSpreads(state).slice(0, 5);
  const marketFresh = isMarketFresh(state);
  const marketStamp = marketFresh ? Date.parse(state.marketMeta.priceUpdatedAt || '') : NaN;
  const seedStamp = Date.parse(DATA.meta.priceUpdatedAt || '');
  const priceStamp = Number.isFinite(marketStamp) ? marketStamp : seedStamp;
  const priceSource = marketFresh ? '云端行情' : (stats.quote ? '包内本服报价' : '包内示例');
  const categories = [{ id: '', name: '全部' }].concat(DATA.meta.categories || []);
  const skillNames = ['全部技艺'].concat(DATA.skills.map(function (s) { return s.name; }));
  const skillIdx = skillId ? DATA.skills.findIndex(function (s) { return s.id === skillId; }) + 1 : 0;
  const filterCount = (category ? 1 : 0) + (kind ? 1 : 0) + (skillId ? 1 : 0) + (onlyMissing ? 1 : 0);

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

  function copyCsv() {
    const lines = ['物品名,本服价格,来源,分类,技艺'];
    items.forEach(function (x) {
      const p = x.p;
      const source = p.missing ? '缺价' : p.user ? '已校准' : p.market ? '云端' : p.quote ? '本服报价' : '示例';
      lines.push([x.it.name, p.missing ? '' : p.v, source, categoryName(x.it.category), skillOf(x.it.skillId).name].join(','));
    });
    Taro.setClipboardData({ data: lines.join('\n') });
    Taro.showToast({ title: '已复制 ' + items.length + ' 行 CSV', icon: 'none' });
  }

  function sourceBadge(p) {
    if (p.missing) return { text: '缺价', cls: 'warn' };
    if (p.user) return { text: '已校准', cls: 'hot' };
    if (p.market) return { text: '云端', cls: 'info' };
    if (p.quote) return { text: '本服报价', cls: 'info' };
    return { text: '示例', cls: '' };
  }

  function resetFilter() {
    setCategory(''); setKind(''); setSkillId(''); setOnlyMissing(false);
  }

  return (
    <View className='v2-page'>
      <PageHeader
        actions={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-icon-btn' onClick={syncNow}>{syncing ? '…' : '↻'}</View>
        }
      />

      <View className='v2-hero'>
        <View className='v2-kicker'>本服物价 · {priceSource}</View>
        <View className='v2-h1'>行情<Text style={{ color: '#fd7b4c' }}>校准</Text></View>
        <View className='v2-hero-sub'>
          {stats.total} 项参与收益 · {stats.missing ? <Text style={{ color: '#f5b301' }}>缺价 {stats.missing} 项</Text> : '全部有价'} · 更新 {fmtTime(priceStamp)}
        </View>
      </View>

      <StatGrid
        items={[
          { k: '已校准', v: stats.user, u: '项', m: '手动填入的本服价', tone: '' },
          { k: '本服报价', v: stats.quote, u: '项', m: 'JX3BOX 拍卖/云端' },
          { k: '示例价', v: stats.seed, u: '项', m: '无报价回退', tone: 'v2-warn' },
          { k: '缺价', v: stats.missing, u: '项', m: '影响收益计算', tone: stats.missing ? 'v2-neg' : 'v2-pos' }
        ]}
      />

      <View className='v2-search' style={{ marginTop: '22rpx' }}>
        <Text className='v2-search-ic'>搜</Text>
        <Input
          className='v2-input'
          value={q}
          placeholder='搜物品 / 技艺 / 分类'
          placeholderStyle='color:var(--muted-3)'
          onInput={function (e) { setQ(e.detail.value); }}
        />
        <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-filter-btn' + (filterCount ? ' on' : '')} onClick={function () { setShowFilter(true); }}>
          筛{filterCount ? '·' + filterCount : ''}
        </View>
      </View>

      {(category || kind || skillId || onlyMissing) ? (
        <View className='v2-tiny' style={{ marginTop: '10rpx' }} onClick={resetFilter}>
          {category ? categoryName(category) + ' · ' : ''}
          {kind === 'material' ? '材料 · ' : kind === 'product' ? '成品 · ' : ''}
          {skillId ? skillOf(skillId).name + ' · ' : ''}
          {onlyMissing ? '仅缺价 · ' : ''}
          <Text style={{ color: '#fd7b4c' }}>清除</Text>
        </View>
      ) : null}

      <Section title='物品价格' sub={items.length + ' 项 · 点价格直接改'}>
        <View className='v2-rows'>
          {visible.map(function (x) {
            const p = x.p;
            const badge = sourceBadge(p);
            return (
              <View className='v2-row' key={x.it.id}>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{x.it.name}</Text>
                    {x.it.custom ? <Text className='v2-tag hot'>自定义</Text> : null}
                    <Text className={'v2-tag ' + badge.cls}>{badge.text}</Text>
                  </View>
                  <Text className='v2-row-ds'>{categoryName(x.it.category)} · {skillOf(x.it.skillId).name} · {x.it.kind === 'product' ? '成品' : '材料'}</Text>
                </View>
                <View style={{ textAlign: 'right' }}>
                  <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(x.it.id, v); }} />
                </View>
              </View>
            );
          })}
        </View>
        {!visible.length ? <Empty title='没有匹配的物品' desc='换个关键词或清空筛选。' /> : null}
        {items.length > visible.length ? (
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost block' style={{ marginTop: '16rpx' }} onClick={function () { setLimit(limit + PAGE_SIZE); }}>
            加载更多 · {visible.length} / {items.length}
          </View>
        ) : null}
      </Section>

      {IS_WEAPP ? (
        <Section title='行情目录' sub='672 项家园 / 强化 / 消耗品 · 只查价不参与收益' action='打开' onAction={function () { Taro.navigateTo({ url: '/market/pages/directory/index' }); }}>
          <View className='v2-row' onClick={function () { Taro.navigateTo({ url: '/market/pages/directory/index' }); }} style={{ minHeight: '84rpx' }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>家园 / 强化 / 消耗品行情</Text>
              <Text className='v2-row-ds'>搜索、分类、记价；与 561 项核心物品分开</Text>
            </View>
            <Text className='v2-row-chev'>›</Text>
          </View>
        </Section>
      ) : null}

      {spreads.length ? (
        <Section title='跨服价差' sub='同物品最低价 vs 最高价 · ≥12% 才列出' action='打开区服趋势' onAction={function () { Taro.navigateTo({ url: '/pages/server-trends/index' }); }}>
          <View className='v2-rows'>
            {spreads.map(function (s) {
              return (
                <View className='v2-row' key={s.item.id} style={{ minHeight: '88rpx' }}>
                  <View className='v2-row-main'>
                    <Text className='v2-row-nm'>{s.item.name}</Text>
                    <Text className='v2-row-ds'>{s.min.server.name} {fmt(s.min.price, 2)} → {s.max.server.name} {fmt(s.max.price, 2)}</Text>
                  </View>
                  <View className='v2-row-val'>
                    <Text className='v2-row-v v2-pos'>{fmtPct(s.ratio, 1)}</Text>
                    <Text className='v2-row-u'>价差</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </Section>
      ) : null}

      <Section title='批量与导出' sub='手机端用剪贴板替代文件下载'>
        <View className='v2-btn-row'>
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost' onClick={function () { setShowBulk(true); }}>批量录入</View>
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost' onClick={copyCsv}>复制 CSV</View>
        </View>
      </Section>

      <DataNote extra={'行情 ' + fmtTime(priceStamp) + ' · ' + priceSource} />

      <Sheet
        open={showFilter}
        title='筛选物品'
        onClose={function () { setShowFilter(false); }}
        footer={<View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn primary block' onClick={function () { setShowFilter(false); }}>查看 {items.length} 项</View>}
      >
        <View className='v2-tiny' style={{ marginBottom: '10rpx' }}>分类</View>
        <View className='v2-chip-row' style={{ flexWrap: 'wrap' }}>
          {categories.map(function (c) {
            return (
              <View key={c.id || 'all'} className={'v2-chip' + (category === c.id ? ' on' : '')} onClick={function () { setCategory(c.id); }}>
                {c.name}
              </View>
            );
          })}
        </View>
        <View className='v2-tiny' style={{ margin: '20rpx 0 10rpx' }}>类型 / 技艺</View>
        <View className='v2-chip-row'>
          {[{ v: '', t: '全部' }, { v: 'material', t: '材料' }, { v: 'product', t: '成品' }].map(function (k) {
            return (
              <View key={k.v || 'all'} className={'v2-chip' + (kind === k.v ? ' on' : '')} onClick={function () { setKind(k.v); }}>{k.t}</View>
            );
          })}
        </View>
        <View style={{ marginTop: '12rpx' }}>
          <Picker mode='selector' range={skillNames} value={skillIdx}
            onChange={function (e) { const i = Number(e.detail.value); setSkillId(i ? DATA.skills[i - 1].id : ''); }}>
            <View className='v2-input' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text>{skillIdx ? DATA.skills[skillIdx - 1].name : '全部技艺'}</Text>
              <Text className='v2-muted'>⌄</Text>
            </View>
          </Picker>
        </View>
        <View style={{ marginTop: '20rpx' }}>
          <Toggle label='仅看缺价物品' value={onlyMissing} onChange={setOnlyMissing} />
        </View>
        <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost sm' style={{ marginTop: '24rpx' }} onClick={resetFilter}>清空筛选</View>
      </Sheet>

      <Sheet
        open={showBulk}
        title='批量录入价格'
        onClose={function () { setShowBulk(false); }}
        footer={
          <View className='v2-flex' style={{ width: '100%', gap: '14rpx' }}>
            <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost' style={{ flex: '0 0 200rpx' }} onClick={function () { setBulk(''); }}>清空</View>
            <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn primary' style={{ flex: 1 }} onClick={applyBulk}>导入价格</View>
          </View>
        }
      >
        <View className='v2-tiny' style={{ marginBottom: '12rpx' }}>每行「物品名,价格」，例如：地脉玄元,21.22</View>
        <Textarea
          className='v2-input'
          style={{ height: '300rpx', padding: '18rpx 22rpx', width: '100%' }}
          value={bulk}
          placeholder={'地脉玄元,21.22\n蜂王浆,205.10'}
          placeholderStyle='color:var(--muted-3)'
          maxlength={20000}
          onInput={function (e) { setBulk(e.detail.value); }}
        />
        <View className='v2-tiny' style={{ marginTop: '12rpx' }}>只匹配当前区服；未识别的名字会跳过并在提示里给出数量。</View>
      </Sheet>
    </View>
  );
}

export default withTheme(Prices);
