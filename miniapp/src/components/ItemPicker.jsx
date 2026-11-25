import { useEffect, useState } from 'react';
import { View, Text, Input, ScrollView } from '@tarojs/components';
import Sheet from './Sheet';

/**
 * 物品选择器：搜索 + 列表，替代原生 Picker（物品 500+ 时无法查找）。
 * items: [{ id, name, sub }]
 */
export default function ItemPicker(props) {
  const [q, setQ] = useState('');
  useEffect(function () {
    if (props.open) setQ('');
  }, [props.open]);

  if (!props.open) return null;
  const keyword = q.trim().toLowerCase();
  const list = (props.items || []).filter(function (it) {
    return !keyword || (it.name + ' ' + (it.sub || '')).toLowerCase().indexOf(keyword) !== -1;
  });
  const limited = list.slice(0, 60);

  return (
    <Sheet
      open={props.open}
      title={props.title || '选择物品'}
      onClose={props.onClose}
      footer={
        <View className='v2-btn ghost block' onClick={props.onClose}>取消</View>
      }
    >
      <View className='v2-search'>
        <Text className='v2-search-ic'>搜</Text>
        <Input
          className='v2-input'
          value={q}
          placeholder='输入物品名 / 品阶'
          placeholderStyle='color:var(--muted-3)'
          onInput={function (e) { setQ(e.detail.value); }}
        />
      </View>
      <ScrollView scrollY style={{ maxHeight: '56vh', marginTop: '12rpx' }}>
        {props.allowNew ? (
          <View className='v2-row' onClick={function () { props.onNew && props.onNew(); }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>＋ {props.newLabel || '新建物品'}</Text>
              <Text className='v2-row-ds'>目录里没有时使用</Text>
            </View>
            <Text className='v2-row-chev'>›</Text>
          </View>
        ) : null}
        {limited.map(function (it) {
          const on = props.value === it.id;
          return (
            <View
              key={it.id}
              className='v2-row'
              onClick={function () { props.onSelect && props.onSelect(it); }}
            >
              <View className='v2-row-main'>
                <View className='v2-flex' style={{ gap: '8rpx' }}>
                  <Text className='v2-row-nm'>{it.name}</Text>
                  {on ? <Text className='v2-tag pos'>当前</Text> : null}
                </View>
                {it.sub ? <Text className='v2-row-ds'>{it.sub}</Text> : null}
              </View>
              <Text className='v2-row-chev'>{on ? '✓' : '›'}</Text>
            </View>
          );
        })}
        {!limited.length ? (
          <View className='v2-empty'>
            <View className='t'>没有匹配的物品</View>
            <View className='s'>换个关键词，或用「新建物品」。</View>
          </View>
        ) : null}
        {list.length > limited.length ? (
          <View className='v2-tiny' style={{ padding: '12rpx 0' }}>还有 {list.length - limited.length} 项，继续输入缩小范围。</View>
        ) : null}
      </ScrollView>
    </Sheet>
  );
}
