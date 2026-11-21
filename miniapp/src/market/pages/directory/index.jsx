import withTheme from '../../../components/withTheme';
import { useEffect, useMemo, useState } from 'react';
import { View, Text, Input, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import TopBar from '../../../components/TopBar';
import Empty from '../../../components/Empty';
import { useStore } from '../../../store';
import { fmt } from '../../../shared/format';
import CATALOG from '../../data/market-catalog.json';

const PAGE_SIZE = 50;

function sourceOf(state, serverId, item) {
  const user = state.prices && state.prices[serverId] && state.prices[serverId][item.id];
  if (user && Number.isFinite(Number(user.v))) {
    return { v: Number(user.v), label: '已校准', cls: 'user' };
  }
  const baked = CATALOG.serverPrices && CATALOG.serverPrices[serverId] && CATALOG.serverPrices[serverId][item.id];
  if (Number(baked) > 0) {
    return { v: Number(baked), label: '本服报价', cls: 'quote' };
  }
  if (Number(item.base) > 0) {
    return { v: Number(item.base), label: '示例价', cls: 'seed' };
  }
  return { v: null, label: '缺价', cls: 'missing' };
}

function categoryName(id) {
  const hit = (CATALOG.categories || []).find(function (c) { return c.id === id; });
  return hit ? hit.name : '其他';
}

function tierName(id) {
  const hit = (CATALOG.tiers || []).find(function (t) { return t.id === Number(id); });
  return hit ? hit.name : '';
}

function Directory() {
  const [state, actions] = useStore();
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('all');
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState('');

  const serverId = state.serverId;
  const server = (CATALOG.servers || []).find(function (s) { return s.id === serverId; });
  const userMap = (state.prices && state.prices[serverId]) || {};

  useEffect(function () { setLimit(PAGE_SIZE); }, [q, category]);

  const filtered = useMemo(function () {
    const keyword = q.trim().toLowerCase();
    return (CATALOG.items || []).filter(function (item) {
      if (category !== 'all' && item.category !== category) return false;
      if (!keyword) return true;
      return (item.name + ' ' + categoryName(item.category) + ' ' + (item.source || '')).toLowerCase().indexOf(keyword) !== -1;
    });
  }, [q, category]);

  const visible = filtered.slice(0, limit);
  const userCount = useMemo(function () {
    let n = 0;
    (CATALOG.items || []).forEach(function (item) {
      const p = userMap[item.id];
      if (p && Number.isFinite(Number(p.v))) n++;
    });
    return n;
  }, [state]);

  const chips = [{ id: 'all', name: '全部' }].concat(CATALOG.categories || []);

  function openEditor(item) {
    const current = sourceOf(state, serverId, item);
    setEditing(item);
    setDraft(current.v == null ? '' : String(current.v));
  }

  function save() {
    if (!editing) return;
    if (!actions.setPrice(editing.id, draft)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
      return;
    }
    Taro.showToast({ title: draft === '' ? '已恢复包内价' : '已保存本服价格', icon: 'none' });
    setEditing(null);
  }

  function clearManual() {
    if (!editing) return;
    actions.clearPrice(editing.id);
    Taro.showToast({ title: '已恢复包内价', icon: 'none' });
    setEditing(null);
  }

  const editingPrice = editing ? sourceOf(state, serverId, editing) : null;
  const editingUser = editing && userMap[editing.id] && Number.isFinite(Number(userMap[editing.id].v));

  return (
    <View className='page'>
      <TopBar showTitle={false} subtitle='672 项家园 / 强化 / 消耗品 · 只查价，不参与配方收益' />

      <View className='notice'>
        <Text className='ic'>i</Text>
        <Text>行情目录只用于查价和记录本服价格，不进入「今日 / 排行」的收益计算。参与计算的材料与成品仍在价格库。</Text>
      </View>

      <View className='card'>
        <View className='card-body' style={{ paddingBottom: '16rpx' }}>
          <Input
            className='market-search'
            value={q}
            placeholder='搜索物品 / 分类'
            placeholderStyle='color:var(--muted-2)'
            onInput={function (e) { setQ(e.detail.value); }}
          />
          <ScrollView scrollX className='market-chips-scroll'>
            <View className='market-chips'>
              {chips.map(function (c) {
                return (
                  <View
                    key={c.id}
                    className={'market-chip' + (category === c.id ? ' active' : '')}
                    onClick={function () { setCategory(c.id); }}
                  >
                    {c.name}
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View className='row-between market-summary'>
            <Text className='tiny dim'>{filtered.length} 项 · 已校准 {userCount} 项</Text>
            <Text className='tiny dim'>{server ? server.name : '当前区服'} · 行情 {String((CATALOG.meta.priceUpdatedAt || '').slice(0, 10))}</Text>
          </View>
        </View>

        <View style={{ padding: '0 24rpx 8rpx' }}>
          {visible.length ? visible.map(function (item) {
            const p = sourceOf(state, serverId, item);
            return (
              <View className='market-row' key={item.id} onClick={function () { openEditor(item); }}>
                <View className='main'>
                  <Text className='nm'>{item.name}</Text>
                  <Text className='ds'>{categoryName(item.category)} · {tierName(item.tier) || item.tier + ' 品'} · {item.source || '行情目录'}</Text>
                </View>
                <View className='val'>
                  <Text className='v'>{p.v == null ? '未填' : fmt(p.v, 2)}</Text>
                  <Text className={'src ' + p.cls}>{p.label} 金</Text>
                </View>
              </View>
            );
          }) : <Empty title='没有匹配的物品' desc='换一个关键词或分类；也可以先清空搜索。' />}
        </View>

        {filtered.length > visible.length ? (
          <View className='card-body' style={{ paddingTop: '0' }}>
            <View className='btn btn-ghost btn-block' onClick={function () { setLimit(limit + PAGE_SIZE); }}>
              加载更多 · {visible.length} / {filtered.length}
            </View>
          </View>
        ) : null}
      </View>

      {editing ? (
        <View className='market-sheet-mask' onClick={function () { setEditing(null); }}>
          <View className='market-sheet' onClick={function (e) { e.stopPropagation(); }}>
            <Text className='market-sheet-title'>{editing.name}</Text>
            <Text className='market-sheet-sub'>{categoryName(editing.category)} · {tierName(editing.tier) || editing.tier + ' 品'} · 只记价，不参与收益</Text>
            <View className='market-sheet-now'>
              <Text className='k'>当前</Text>
              <Text className='v'>{editingPrice.v == null ? '未填' : fmt(editingPrice.v, 2) + ' 金'} · {editingPrice.label}</Text>
            </View>
            <Input
              className='market-sheet-input'
              type='digit'
              focus
              value={draft}
              placeholder='输入本服交易行价格'
              placeholderStyle='color:var(--muted-2)'
              maxlength={12}
              onInput={function (e) { setDraft(e.detail.value); }}
              onConfirm={save}
            />
            <Text className='tiny dim market-sheet-hint'>留空并保存 = 恢复包内报价/示例价；手动价只存本机。</Text>
            <View className='market-sheet-actions'>
              {editingUser ? (
                <View className='btn btn-ghost' onClick={clearManual}>恢复包内价</View>
              ) : null}
              <View className='btn btn-ghost' onClick={function () { setEditing(null); }}>取消</View>
              <View className='btn btn-primary' onClick={save}>保存</View>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default withTheme(Directory);
