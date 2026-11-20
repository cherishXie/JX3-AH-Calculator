import withTheme from '../../components/withTheme';
import { useState } from 'react';
import { View, Text, Input, Picker } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { stoneRecipe } from '../../shared/stones';
import { fmt } from '../../shared/format';

const MODES = [
  { id: 'fast', name: '快速合成' },
  { id: 'optimal', name: '最优合成' },
  { id: 'jackpot', name: '赌跳级' }
];
const LEVEL_NAMES = ['1级', '2级', '3级', '4级', '5级', '6级', '7级', '8级'];

function draftOf(recipe) {
  if (recipe) {
    return {
      id: recipe.id,
      name: recipe.name,
      mode: recipe.mode,
      target: recipe.target,
      primary: recipe.primary,
      energy: String(recipe.energy),
      fee: String(recipe.fee),
      inputs: (recipe.inputs || []).map(function (x) { return { level: x.level, qty: String(x.qty) }; }),
      outcomes: (recipe.outcomes || []).map(function (x) { return { level: x.level, chancePct: String(Number((x.chance * 100).toFixed(2))) }; }),
      custom: !!recipe.custom,
      edited: !!recipe.edited,
      verified: !!recipe.verified,
      source: recipe.source || '',
      note: recipe.note || ''
    };
  }
  return {
    id: null, name: '', mode: 'optimal', target: 6, primary: 6, energy: '10', fee: '0',
    inputs: [{ level: 4, qty: '12' }],
    outcomes: [{ level: 6, chancePct: '100' }],
    custom: true, edited: false, verified: false, source: '自定义公式', note: ''
  };
}

function StoneFormula() {
  const router = useRouter();
  const params = router.params || {};
  const id = params.id || null;
  const isNew = params.new === '1' || !id;
  const [state, actions] = useStore();
  const recipe = id ? stoneRecipe(state, id) : null;
  const [draft, setDraft] = useState(function () { return draftOf(isNew ? null : recipe); });
  const [errors, setErrors] = useState([]);

  if (!isNew && !recipe) {
    return (
      <View className='page'>
        <TopBar showTitle={false} />
        <Empty title='公式不存在' desc='可能已被删除，返回五行石页重试。' />
      </View>
    );
  }

  function patch(next) {
    setDraft(Object.assign({}, draft, next));
  }

  function updateInput(i, next) {
    const list = draft.inputs.slice();
    list[i] = Object.assign({}, list[i], next);
    patch({ inputs: list });
  }

  function updateOutcome(i, next) {
    const list = draft.outcomes.slice();
    list[i] = Object.assign({}, list[i], next);
    patch({ outcomes: list });
  }

  function validate(d) {
    const errs = [];
    if (!String(d.name || '').trim()) errs.push('名称不能为空');
    const target = Number(d.target);
    const primary = Number(d.primary);
    if (!(target >= 2 && target <= 8)) errs.push('目标等级需在 2–8 级');
    if (!(primary >= 1 && primary <= 8)) errs.push('保底等级需在 1–8 级');
    if (!d.inputs.length) errs.push('至少需要一种投入材料');
    d.inputs.forEach(function (x, i) {
      if (!(Number(x.level) >= 1 && Number(x.level) <= 8)) errs.push('投入 ' + (i + 1) + ' 等级需在 1–8 级');
      if (!(Number(x.qty) > 0)) errs.push('投入 ' + (i + 1) + ' 数量需大于 0');
    });
    if (!d.outcomes.length) errs.push('至少需要一种产出');
    d.outcomes.forEach(function (x, i) {
      if (!(Number(x.level) >= 1 && Number(x.level) <= 8)) errs.push('产出 ' + (i + 1) + ' 等级需在 1–8 级');
      if (!(Number(x.chancePct) >= 0 && Number(x.chancePct) <= 100)) errs.push('产出 ' + (i + 1) + ' 概率需在 0–100%');
    });
    const sum = d.outcomes.reduce(function (a, x) { return a + (Number(x.chancePct) || 0); }, 0);
    if (sum > 100.001) errs.push('产出概率合计不能超过 100%（当前 ' + fmt(sum, 1) + '%）');
    if (d.outcomes.length && !d.outcomes.some(function (x) { return Number(x.level) === target; })) {
      errs.push('产出里缺少目标等级（' + target + '级）');
    }
    if (d.outcomes.length && !d.outcomes.some(function (x) { return Number(x.level) === primary; })) {
      errs.push('产出里缺少保底等级（' + primary + '级）');
    }
    if (Number(d.energy) < 0) errs.push('精力不能为负');
    if (Number(d.fee) < 0) errs.push('加工费不能为负');
    return errs;
  }

  function save() {
    const errs = validate(draft);
    if (errs.length) {
      setErrors(errs);
      Taro.showToast({ title: errs[0], icon: 'none' });
      return;
    }
    const saved = actions.saveStoneRecipe({
      id: draft.id,
      name: String(draft.name).trim(),
      mode: draft.mode,
      target: Number(draft.target),
      primary: Number(draft.primary),
      energy: Number(draft.energy),
      fee: Number(draft.fee),
      inputs: draft.inputs.map(function (x) { return { level: Number(x.level), qty: Number(x.qty) }; }),
      outcomes: draft.outcomes.map(function (x) { return { level: Number(x.level), chance: Number(x.chancePct) / 100 }; }),
      custom: draft.custom,
      verified: draft.verified,
      source: draft.source,
      note: draft.note
    });
    if (!saved) {
      Taro.showToast({ title: '保存失败', icon: 'none' });
      return;
    }
    setErrors([]);
    Taro.showToast({ title: '公式已保存', icon: 'none' });
    setTimeout(function () { Taro.navigateBack(); }, 300);
  }

  function remove() {
    Taro.showModal({
      title: '删除自定义公式',
      content: '删除后无法恢复，内置公式不受影响。',
      confirmText: '删除',
      confirmColor: '#f43f5e',
      success: function (res) {
        if (res.confirm) {
          actions.deleteStoneRecipe(draft.id);
          Taro.showToast({ title: '已删除', icon: 'none' });
          setTimeout(function () { Taro.navigateBack(); }, 300);
        }
      }
    });
  }

  function reset() {
    Taro.showModal({
      title: '恢复默认公式',
      content: '将丢弃本机对该公式的修改与爆率覆盖。',
      success: function (res) {
        if (res.confirm) {
          actions.resetStoneRecipe(draft.id);
          Taro.showToast({ title: '已恢复默认', icon: 'none' });
          setTimeout(function () { Taro.navigateBack(); }, 300);
        }
      }
    });
  }

  const modeIdx = Math.max(0, MODES.findIndex(function (m) { return m.id === draft.mode; }));
  const sum = draft.outcomes.reduce(function (a, x) { return a + (Number(x.chancePct) || 0); }, 0);
  const hasOverride = !!(draft.id && ((state.stoneRecipeEdits || {})[draft.id] || (state.stoneChances || {})[draft.id]));

  return (
    <View className='page'>
      <TopBar showTitle={false} />

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='page-h1'>{draft.id ? '编辑五行石公式' : '新增五行石公式'}</Text>
            <Text className='card-sub'>目标等级与保底等级必须出现在产出里；概率合计 ≤100%</Text>
          </View>
        </View>
        <View className='card-body'>
          {errors.length ? (
            <View className='notice'>
              <Text className='ic'>!</Text>
              <View className='flex1'>
                {errors.map(function (e, i) { return <Text key={i} style={{ display: 'block' }}>· {e}</Text>; })}
              </View>
            </View>
          ) : null}

          <View className='form-field'>
            <Text className='form-label'>名称</Text>
            <Input className='input' value={draft.name} placeholder='例如：赌跳 · 七级（4×六级）'
              placeholderStyle='color:#475569' onInput={function (e) { patch({ name: e.detail.value }); }} />
          </View>

          <View className='form-grid'>
            <View className='form-field'>
              <Text className='form-label'>方式</Text>
              <Picker mode='selector' range={MODES.map(function (m) { return m.name; })} value={modeIdx}
                onChange={function (e) { patch({ mode: MODES[Number(e.detail.value)].id }); }}>
                <View className='picker'><Text>{MODES[modeIdx].name}</Text><Text className='arrow'>⌄</Text></View>
              </Picker>
            </View>
            <View className='form-field'>
              <Text className='form-label'>目标等级</Text>
              <Picker mode='selector' range={LEVEL_NAMES} value={Number(draft.target) - 1}
                onChange={function (e) { patch({ target: Number(e.detail.value) + 1 }); }}>
                <View className='picker'><Text>{draft.target}级</Text><Text className='arrow'>⌄</Text></View>
              </Picker>
            </View>
            <View className='form-field'>
              <Text className='form-label'>保底等级</Text>
              <Picker mode='selector' range={LEVEL_NAMES} value={Number(draft.primary) - 1}
                onChange={function (e) { patch({ primary: Number(e.detail.value) + 1 }); }}>
                <View className='picker'><Text>{draft.primary}级</Text><Text className='arrow'>⌄</Text></View>
              </Picker>
            </View>
            <View className='form-field'>
              <Text className='form-label'>单次精力</Text>
              <Input className='input' type='number' value={draft.energy} onInput={function (e) { patch({ energy: e.detail.value }); }} />
            </View>
            <View className='form-field'>
              <Text className='form-label'>加工费（金）</Text>
              <Input className='input' type='digit' value={draft.fee} onInput={function (e) { patch({ fee: e.detail.value }); }} />
            </View>
          </View>

          <View className='section-h mt'>
            <Text className='t'>投入材料</Text>
            <Text className='more' onClick={function () { patch({ inputs: draft.inputs.concat([{ level: 1, qty: '1' }]) }); }}>＋ 添加</Text>
          </View>
          {draft.inputs.map(function (x, i) {
            return (
              <View className='item-block' key={i}>
                <View className='item-line'>
                  <Picker mode='selector' range={LEVEL_NAMES} value={Number(x.level) - 1}
                    onChange={function (e) { updateInput(i, { level: Number(e.detail.value) + 1 }); }}>
                    <View className='picker' style={{ width: '180rpx' }}><Text>{x.level}级</Text><Text className='arrow'>⌄</Text></View>
                  </Picker>
                  <Input className='input input-sm ml' type='number' value={x.qty} placeholder='数量'
                    placeholderStyle='color:#475569' style={{ width: '150rpx' }}
                    onInput={function (e) { updateInput(i, { qty: e.detail.value }); }} />
                  <View className='del' onClick={function () {
                    if (draft.inputs.length <= 1) { Taro.showToast({ title: '至少保留一种投入', icon: 'none' }); return; }
                    patch({ inputs: draft.inputs.filter(function (_, j) { return j !== i; }) });
                  }}>×</View>
                </View>
              </View>
            );
          })}

          <View className='section-h mt'>
            <Text className='t'>产出与概率</Text>
            <Text className='more' onClick={function () { patch({ outcomes: draft.outcomes.concat([{ level: Number(draft.target), chancePct: '0' }]) }); }}>＋ 添加</Text>
          </View>
          {draft.outcomes.map(function (x, i) {
            return (
              <View className='item-block' key={i}>
                <View className='item-line'>
                  <Picker mode='selector' range={LEVEL_NAMES} value={Number(x.level) - 1}
                    onChange={function (e) { updateOutcome(i, { level: Number(e.detail.value) + 1 }); }}>
                    <View className='picker' style={{ width: '180rpx' }}><Text>{x.level}级产出</Text><Text className='arrow'>⌄</Text></View>
                  </Picker>
                  <Input className='input input-sm ml chance-box' type='digit' value={x.chancePct} placeholder='概率'
                    placeholderStyle='color:#475569'
                    onInput={function (e) { updateOutcome(i, { chancePct: e.detail.value }); }} />
                  <Text className='tiny dim' style={{ marginLeft: '6rpx' }}>%</Text>
                  <View className='del' onClick={function () {
                    if (draft.outcomes.length <= 1) { Taro.showToast({ title: '至少保留一种产出', icon: 'none' }); return; }
                    patch({ outcomes: draft.outcomes.filter(function (_, j) { return j !== i; }) });
                  }}>×</View>
                </View>
              </View>
            );
          })}
          <Text className={'tiny ' + (sum > 100.001 ? 'neg' : 'dim')}>概率合计 {fmt(sum, 1)}%</Text>

          <View className='btn-row mt-lg'>
            <View className='btn btn-primary' onClick={save}>保存公式</View>
            <View className='btn btn-ghost' onClick={function () { Taro.navigateBack(); }}>取消</View>
            {draft.custom && draft.id ? <View className='btn btn-danger' onClick={remove}>删除</View> : null}
            {!draft.custom && hasOverride ? <View className='btn btn-ghost' onClick={reset}>恢复默认</View> : null}
          </View>
        </View>
      </View>
      <DataNote />
    </View>
  );
}

export default withTheme(StoneFormula);
