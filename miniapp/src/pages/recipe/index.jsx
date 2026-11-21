import withTheme from '../../components/withTheme';
import { useState } from 'react';
import { View, Text, Input, Picker, Textarea } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import PriceInput from '../../components/PriceInput';
import DataNote from '../../components/DataNote';
import Empty from '../../components/Empty';
import { useStore } from '../../store';
import { DATA, findItem, findRecipe, calcRecipe, priceOf, skillOf, tierOf } from '../../shared/engine';
import { fmt, fmtInt, fmtSigned, fmtPct } from '../../shared/format';

function makeDraft(state, skillId, recipe) {
  if (recipe) {
    return {
      id: recipe.id, kind: recipe.kind, skillId: recipe.skillId, name: recipe.name,
      level: recipe.level, tier: recipe.tier, energy: recipe.energy, fee: recipe.fee || 0,
      note: recipe.note || '',
      outputs: recipe.outputs.map(function (o) { return { item: o.item, qty: o.qty, chance: o.chance == null ? 1 : o.chance, newName: '' }; }),
      materials: (recipe.materials || []).map(function (m) { return { item: m.item, qty: m.qty, newName: '' }; }),
      custom: recipe.custom
    };
  }
  const sk = skillOf(skillId);
  return {
    id: null, kind: sk.type === 'gather' ? 'gather' : 'craft', skillId: sk.id, name: '',
    level: 1, tier: 1,
    energy: sk.type === 'gather' ? state.settings.gatherEnergy : state.settings.craftEnergy,
    fee: 0, note: '',
    outputs: [{ item: '', qty: 1, newName: '' }],
    materials: sk.type === 'gather' ? [] : [{ item: '', qty: 1, newName: '' }],
    custom: true
  };
}

function Recipe() {
  const router = useRouter();
  const params = router.params || {};
  const isNew = params.new === '1';
  const [state, actions] = useStore();
  const [mode, setMode] = useState(isNew ? 'edit' : 'view');
  const [currentId, setCurrentId] = useState(params.id || null);
  const [draft, setDraft] = useState(function () { return isNew ? makeDraft(state, params.skill || 'shennong', null) : null; });
  const [errors, setErrors] = useState([]);

  const recipe = currentId ? findRecipe(state, currentId) : null;
  const calc = recipe ? calcRecipe(state, recipe, { serverId: state.serverId, basis: state.settings.basis }) : null;
  const sk = recipe ? skillOf(recipe.skillId) : skillOf((draft && draft.skillId) || 'shennong');

  function startEdit() {
    if (!recipe) return;
    setDraft(makeDraft(state, recipe.skillId, recipe));
    setErrors([]);
    setMode('edit');
  }

  function cancelEdit() {
    if (isNew && !currentId) {
      Taro.navigateBack();
      return;
    }
    setMode('view');
    setErrors([]);
  }

  function savePrice(itemId, val) {
    if (!actions.setPrice(itemId, val)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
    } else {
      Taro.showToast({ title: '已更新价格', icon: 'none' });
    }
  }

  function choices(prefer) {
    const arr = state.items.slice().sort(function (a, b) {
      const ap = prefer === 'product' ? (a.kind === 'product' ? 0 : 1) : (a.kind === 'material' ? 0 : 1);
      const bp = prefer === 'product' ? (b.kind === 'product' ? 0 : 1) : (b.kind === 'material' ? 0 : 1);
      if (ap !== bp) return ap - bp;
      return a.name.localeCompare(b.name, 'zh-CN');
    });
    return arr;
  }

  function labelOf(it) {
    return it.name + '（' + tierOf(it.tier).name + '）';
  }

  function itemIndex(list, id) {
    const i = list.findIndex(function (x) { return x.id === id; });
    return i < 0 ? 0 : i;
  }

  function updateOutput(i, patch) {
    const next = draft.outputs.slice();
    next[i] = Object.assign({}, next[i], patch);
    setDraft(Object.assign({}, draft, { outputs: next }));
  }
  function updateMaterial(i, patch) {
    const next = draft.materials.slice();
    next[i] = Object.assign({}, next[i], patch);
    setDraft(Object.assign({}, draft, { materials: next }));
  }

  function validate(d) {
    const errs = [];
    if (!d.name || !String(d.name).trim()) errs.push('名称不能为空');
    if (!(Number(d.energy) > 0)) errs.push('单次精力必须大于 0');
    if (!(Number(d.level) >= 1 && Number(d.level) <= 50)) errs.push('需求等级需在 1–50');
    if (!d.outputs.length) errs.push('至少需要一个产物');
    d.outputs.forEach(function (o, i) {
      if (!o.item) errs.push('产物 ' + (i + 1) + ' 未选择物品');
      if (o.item === '__new__' && !String(o.newName || '').trim()) errs.push('产物 ' + (i + 1) + ' 需要新物品名');
      if (!(Number(o.qty) > 0)) errs.push('产物 ' + (i + 1) + ' 数量需大于 0');
    });
    if (d.kind === 'craft') {
      if (!d.materials.length) errs.push('制造配方至少需要一种材料');
      d.materials.forEach(function (m, i) {
        if (!m.item) errs.push('材料 ' + (i + 1) + ' 未选择物品');
        if (m.item === '__new__' && !String(m.newName || '').trim()) errs.push('材料 ' + (i + 1) + ' 需要新物品名');
        if (!(Number(m.qty) > 0)) errs.push('材料 ' + (i + 1) + ' 数量需大于 0');
      });
      const ids = d.materials.filter(function (m) { return m.item && m.item !== '__new__'; }).map(function (m) { return m.item; });
      const uniq = ids.filter(function (v, i) { return ids.indexOf(v) === i; });
      if (uniq.length !== ids.length) errs.push('同一种材料重复出现，请合并数量');
      const outIds = d.outputs.filter(function (o) { return o.item && o.item !== '__new__'; }).map(function (o) { return o.item; });
      outIds.forEach(function (id) {
        if (ids.indexOf(id) !== -1) errs.push('产物与材料不能是同一物品');
      });
    }
    return errs;
  }

  function resolveNew(row, kind) {
    if (row.item !== '__new__') return row.item;
    const name = String(row.newName || '').trim();
    const exist = state.items.find(function (i) { return i.name === name && i.skillId === draft.skillId; });
    if (exist) return exist.id;
    return actions.createItem({ name: name, skillId: draft.skillId, kind: kind, tier: Number(draft.tier) || 1 });
  }

  function save() {
    const errs = validate(draft);
    if (errs.length) {
      setErrors(errs);
      Taro.showToast({ title: errs[0], icon: 'none' });
      return;
    }
    const outputs = draft.outputs.map(function (o) {
      return { item: resolveNew(o, 'product'), qty: Math.max(1, Math.round(Number(o.qty) || 1)), chance: o.chance == null ? 1 : Math.max(0, Math.min(1, Number(o.chance))) };
    });
    const materials = draft.kind === 'craft' ? draft.materials.map(function (m) {
      return { item: resolveNew(m, 'material'), qty: Math.max(1, Math.round(Number(m.qty) || 1)) };
    }) : [];
    const saved = actions.saveRecipe({
      id: draft.id || null,
      kind: draft.kind,
      skillId: draft.skillId,
      name: String(draft.name).trim(),
      level: Math.max(1, Math.min(50, Math.round(Number(draft.level) || 1))),
      tier: Number(draft.tier) || 1,
      energy: Math.max(1, Math.round(Number(draft.energy) || 1)),
      fee: Math.max(0, Number(draft.fee) || 0),
      note: draft.note || '',
      outputs: outputs,
      materials: materials
    });
    setCurrentId(saved.id);
    setMode('view');
    setErrors([]);
    Taro.showToast({ title: '已保存', icon: 'none' });
  }

  function removeRecipe() {
    Taro.showModal({
      title: '删除自定义配方',
      content: '删除后无法恢复，内置配方不受影响。',
      confirmText: '删除',
      confirmColor: '#f43f5e',
      success: function (res) {
        if (res.confirm) {
          actions.deleteRecipe(currentId);
          Taro.showToast({ title: '已删除', icon: 'none' });
          setTimeout(function () { Taro.navigateBack(); }, 300);
        }
      }
    });
  }

  function resetRecipe() {
    Taro.showModal({
      title: '恢复示例配方',
      content: '将丢弃本地修改，恢复当前版本示例数据。',
      success: function (res) {
        if (res.confirm) {
          actions.resetRecipe(currentId);
          setMode('view');
          Taro.showToast({ title: '已恢复示例', icon: 'none' });
        }
      }
    });
  }

  if (!isNew && !recipe) {
    return (
      <View className='page'>
        <TopBar showTitle={false} />
        <Empty title='配方不存在' desc='可能已被删除，返回列表后重试。' />
      </View>
    );
  }

  /* ---------------- 编辑 ---------------- */
  if (mode === 'edit' && draft) {
    const outChoices = choices(draft.kind === 'gather' ? 'material' : 'product');
    const matChoices = choices('material');
    const skillNames = DATA.skills.map(function (s) { return s.name; });
    const skillIdx = Math.max(0, DATA.skills.findIndex(function (s) { return s.id === draft.skillId; }));
    return (
      <View className='page'>
        <TopBar showTitle={false} />
        <View className='card'>
          <View className='card-head'>
            <View className='flex1'>
              <Text className='page-h1'>{draft.id ? '编辑配方' : '新增配方'}</Text>
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
              <Input className='input' value={draft.name} placeholder='例如：玄元星平衫 / 采集·马草坡'
                placeholderStyle='color:#475569' onInput={function (e) { setDraft(Object.assign({}, draft, { name: e.detail.value })); }} />
            </View>

            <View className='form-grid'>
              <View className='form-field'>
                <Text className='form-label'>技艺</Text>
                <Picker mode='selector' range={skillNames} value={skillIdx}
                  onChange={function (e) {
                    const s = DATA.skills[Number(e.detail.value)];
                    const next = Object.assign({}, draft, { skillId: s.id });
                    if (!draft.id) next.kind = s.type === 'gather' ? 'gather' : 'craft';
                    setDraft(next);
                  }}>
                  <View className='picker'><Text>{skillOf(draft.skillId).name}</Text><Text className='arrow'>⌄</Text></View>
                </Picker>
              </View>
              <View className='form-field'>
                <Text className='form-label'>类型</Text>
                <Picker mode='selector' range={['制造配方', '采集点']} value={draft.kind === 'gather' ? 1 : 0}
                  onChange={function (e) {
                    const kind = Number(e.detail.value) === 1 ? 'gather' : 'craft';
                    setDraft(Object.assign({}, draft, { kind: kind, materials: kind === 'craft' && !draft.materials.length ? [{ item: '', qty: 1, newName: '' }] : draft.materials }));
                  }}>
                  <View className='picker'><Text>{draft.kind === 'gather' ? '采集点' : '制造配方'}</Text><Text className='arrow'>⌄</Text></View>
                </Picker>
              </View>
              <View className='form-field'>
                <Text className='form-label'>品阶</Text>
                <Picker mode='selector' range={DATA.tiers.map(function (t) { return t.name; })} value={Math.max(0, Number(draft.tier) - 1)}
                  onChange={function (e) { setDraft(Object.assign({}, draft, { tier: Number(e.detail.value) + 1 })); }}>
                  <View className='picker'><Text>{tierOf(draft.tier).name}</Text><Text className='arrow'>⌄</Text></View>
                </Picker>
              </View>
              <View className='form-field'>
                <Text className='form-label'>需求等级（1–50）</Text>
                <Input className='input' type='number' value={String(draft.level)} onInput={function (e) { setDraft(Object.assign({}, draft, { level: e.detail.value })); }} />
              </View>
              <View className='form-field'>
                <Text className='form-label'>单次精力</Text>
                <Input className='input' type='number' value={String(draft.energy)} onInput={function (e) { setDraft(Object.assign({}, draft, { energy: e.detail.value })); }} />
              </View>
              <View className='form-field'>
                <Text className='form-label'>手续费（金）</Text>
                <Input className='input' type='digit' value={String(draft.fee)} onInput={function (e) { setDraft(Object.assign({}, draft, { fee: e.detail.value })); }} />
              </View>
            </View>

            <View className='form-field'>
              <Text className='form-label'>备注（选填）</Text>
              <Input className='input' value={draft.note} placeholder='材料来源、暴击、署名等'
                placeholderStyle='color:#475569' onInput={function (e) { setDraft(Object.assign({}, draft, { note: e.detail.value })); }} />
            </View>

            <View className='section-h mt'>
              <Text className='t'>{draft.kind === 'gather' ? '单次产出' : '产物'}</Text>
              <Text className='more' onClick={function () { setDraft(Object.assign({}, draft, { outputs: draft.outputs.concat([{ item: '', qty: 1, newName: '' }]) })); }}>＋ 添加</Text>
            </View>
            {draft.outputs.map(function (o, i) {
              return (
                <View className='item-block' key={i}>
                  <View className='item-line'>
                    <Picker mode='selector' range={['＋ 新建物品…'].concat(outChoices.map(labelOf))} value={o.item === '__new__' ? 0 : itemIndex(outChoices, o.item) + 1}
                      onChange={function (e) {
                        const idx = Number(e.detail.value);
                        if (idx === 0) updateOutput(i, { item: '__new__' });
                        else {
                          const it = outChoices[idx - 1];
                          updateOutput(i, { item: it.id });
                          if (!draft.id) setDraft(function (prev) { return Object.assign({}, prev, { tier: it.tier }); });
                        }
                      }}>
                      <View className='picker'><Text>{o.item === '__new__' ? '＋ 新建物品…' : (findItem(state, o.item) ? labelOf(findItem(state, o.item)) : '选择产物')}</Text><Text className='arrow'>⌄</Text></View>
                    </Picker>
                  </View>
                  {o.item === '__new__' ? (
                    <Input className='input input-sm mt' value={o.newName || ''} placeholder='新产物名称'
                      placeholderStyle='color:#475569' onInput={function (e) { updateOutput(i, { newName: e.detail.value }); }} />
                  ) : null}
                  <View className='item-line mt'>
                    <Input className='input input-sm flex1' type='number' value={String(o.qty)} placeholder='数量'
                      placeholderStyle='color:#475569' onInput={function (e) { updateOutput(i, { qty: e.detail.value }); }} />
                    <View className='del' onClick={function () {
                      if (draft.outputs.length <= 1) { Taro.showToast({ title: '至少保留一个产物', icon: 'none' }); return; }
                      setDraft(Object.assign({}, draft, { outputs: draft.outputs.filter(function (_, j) { return j !== i; }) }));
                    }}>×</View>
                  </View>
                </View>
              );
            })}

            {draft.kind === 'craft' ? (
              <View>
                <View className='section-h mt'>
                  <Text className='t'>材料</Text>
                  <Text className='more' onClick={function () { setDraft(Object.assign({}, draft, { materials: draft.materials.concat([{ item: '', qty: 1, newName: '' }]) })); }}>＋ 添加</Text>
                </View>
                {draft.materials.map(function (m, i) {
                  const it = findItem(state, m.item);
                  return (
                    <View className='item-block' key={i}>
                      <View className='item-line'>
                        <Picker mode='selector' range={['＋ 新建物品…'].concat(matChoices.map(labelOf))} value={m.item === '__new__' ? 0 : itemIndex(matChoices, m.item) + 1}
                          onChange={function (e) {
                            const idx = Number(e.detail.value);
                            if (idx === 0) updateMaterial(i, { item: '__new__' });
                            else updateMaterial(i, { item: matChoices[idx - 1].id });
                          }}>
                          <View className='picker'><Text>{m.item === '__new__' ? '＋ 新建物品…' : (it ? labelOf(it) : '选择材料')}</Text><Text className='arrow'>⌄</Text></View>
                        </Picker>
                      </View>
                      {m.item === '__new__' ? (
                        <Input className='input input-sm mt' value={m.newName || ''} placeholder='新材料名称'
                          placeholderStyle='color:#475569' onInput={function (e) { updateMaterial(i, { newName: e.detail.value }); }} />
                      ) : null}
                      <View className='item-line mt'>
                        <Input className='input input-sm flex1' type='number' value={String(m.qty)} placeholder='数量'
                          placeholderStyle='color:#475569' onInput={function (e) { updateMaterial(i, { qty: e.detail.value }); }} />
                        <View className='del' onClick={function () {
                          setDraft(Object.assign({}, draft, { materials: draft.materials.filter(function (_, j) { return j !== i; }) }));
                        }}>×</View>
                      </View>
                    </View>
                  );
                })}
                <Text className='tiny dim'>改数量；单价在行情页维护。</Text>
              </View>
            ) : null}

            <View className='btn-row mt-lg'>
              <View className='btn btn-primary' onClick={save}>保存配方</View>
              <View className='btn btn-ghost' onClick={cancelEdit}>取消</View>
              {draft.id && draft.custom ? <View className='btn btn-danger' onClick={removeRecipe}>删除</View> : null}
            </View>
          </View>
        </View>
        <DataNote />
      </View>
    );
  }

  /* ---------------- 查看 ---------------- */
  const basisText = state.settings.basis === 'min' ? '取最低（仅成本）' : '市场价';
  const parts = calc.materials.map(function (m, i) {
    return { name: m.name, value: m.sub, color: ['#1d6fe0', '#2e9e78', '#e88a2e', '#a75be0', '#e04a7a'][i % 5] };
  });
  if (calc.fee > 0) parts.push({ name: '手续费', value: calc.fee, color: '#64748b' });
  const totalParts = parts.reduce(function (s, p) { return s + p.value; }, 0) || 1;

  return (
    <View className='page'>
      <TopBar showTitle={false} />

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='page-h1'>{recipe.name}</Text>
            <View className='row mt' style={{ flexWrap: 'wrap' }}>
              <Text className='badge badge-outline'>{sk.name}</Text>
              <Text className='badge badge-neutral' style={{ marginLeft: '8rpx' }}>{tierOf(recipe.tier).name}</Text>
              <Text className='badge badge-neutral' style={{ marginLeft: '8rpx' }}>Lv.{recipe.level}</Text>
              {recipe.verified ? <Text className='badge badge-positive' style={{ marginLeft: '8rpx' }}>配方已核验</Text> : null}
              {recipe.custom ? <Text className='badge badge-custom' style={{ marginLeft: '8rpx' }}>自定义</Text> : null}
            </View>
          </View>
        </View>
        <View className='card-body'>
          {calc.missing ? <View className='notice'><Text className='ic'>!</Text><Text>有未定价项，收益按 0 计，结果会被低估。</Text></View> : null}

          <View className='kpi-grid'>
            <View className='kpi' style={{ width: '31.5%' }}>
              <Text className='kpi-label'>总成本</Text>
              <Text className='kpi-value' style={{ fontSize: '34rpx', lineHeight: '44rpx' }}>{fmt(calc.totalCost, 2)}</Text>
              <Text className='kpi-meta'>金</Text>
            </View>
            <View className='kpi' style={{ width: '31.5%' }}>
              <Text className='kpi-label'>产值</Text>
              <Text className='kpi-value' style={{ fontSize: '34rpx', lineHeight: '44rpx' }}>{fmt(calc.outputValue, 2)}</Text>
              <Text className='kpi-meta'>金</Text>
            </View>
            <View className='kpi' style={{ width: '31.5%' }}>
              <Text className='kpi-label'>单次利润</Text>
              <Text className={'kpi-value ' + (calc.profit >= 0 ? 'pos' : 'neg')} style={{ fontSize: '34rpx', lineHeight: '44rpx' }}>{fmtSigned(calc.profit, 2)}</Text>
              <Text className='kpi-meta'>金</Text>
            </View>
          </View>
          <View className='row-between mt'>
            <Text className='tiny dim'>精力收益</Text>
            <Text className={'small strong ' + (calc.perEnergy >= 0 ? 'pos' : 'neg')}>{calc.perEnergy == null ? '—' : fmt(calc.perEnergy, 2)} 金/精力</Text>
          </View>
          <View className='row-between mt'>
            <Text className='tiny dim'>成本口径</Text>
            <Text className='tiny dim'>{basisText}</Text>
          </View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>产物与售价</Text></View></View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {calc.outputs.map(function (o) {
            return (
              <View className='price-line' key={o.itemId}>
                <View className='main'>
                  <Text className='nm'>{o.name}</Text>
                  <Text className='ds'>数量 {o.qtyMin != null && o.qtyMax != null && o.qtyMax > o.qtyMin ? o.qtyMin + '~' + o.qtyMax : o.qty}{o.chance != null && o.chance < 0.999 ? ' · 掉率 ' + (o.chance * 100).toFixed(o.chance < 0.1 ? 1 : 0) + '%' : ''}{o.missing ? ' · 缺价' : ''}</Text>
                </View>
                <View style={{ textAlign: 'right' }}>
                  <PriceInput value={o.missing ? '' : o.unit} onSave={function (v) { savePrice(o.itemId, v); }} />
                  <Text className='price-state'>小计 {fmt(o.sub, 2)} 金</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {recipe.kind === 'craft' ? (
        <View className='card'>
          <View className='card-head'><View className='flex1'><Text className='card-title'>材料清单</Text><Text className='card-sub'>可直接改价 · 成本构成</Text></View></View>
          <View className='card-body' style={{ paddingTop: '4rpx' }}>
            {calc.materials.map(function (m, i) {
              const p = priceOf(state, m.itemId, state.serverId);
              return (
                <View className='price-line' key={m.itemId + i}>
                  <View className='main'>
                    <Text className='nm'>{m.name}</Text>
                    <Text className='ds'>数量 {m.qty} · 计入 {fmt(m.unit, 2)} 金{m.source === 'craft' ? ' · 自制' : ''}{m.missing ? ' · 缺价' : ''}</Text>
                  </View>
                  <View style={{ textAlign: 'right' }}>
                    <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(m.itemId, v); }} />
                    <Text className='price-state'>小计 {fmt(m.sub, 2)} 金</Text>
                  </View>
                </View>
              );
            })}
            <View className='divider' />
            <Text className='tiny dim'>成本构成</Text>
            <View style={{ marginTop: '8rpx' }}>
              {parts.map(function (p, i) {
                return (
                  <View className='bar-row' key={i}>
                    <View className='bar-label'><Text className='n'>{p.name}</Text></View>
                    <View className='bar-track'><View className='bar-fill' style={{ width: Math.max(1, (p.value / totalParts) * 100) + '%', background: p.color }} /></View>
                    <Text className='bar-val'>{fmt(p.value, 2)}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      ) : null}

      <View className='card'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>精力与口径</Text></View></View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          <View className='kv'><Text className='k'>单次精力</Text><Text className='v'>{fmtInt(calc.energy)} 点</Text></View>
          <View className='kv'><Text className='k'>手续费</Text><Text className='v'>{fmt(calc.fee, 2)} 金</Text></View>
          <View className='kv'><Text className='k'>材料成本</Text><Text className='v'>{fmt(calc.materialCost, 2)} 金</Text></View>
          <View className='kv'><Text className='k'>满 {fmtInt(state.settings.energyBudget)} 精力可做</Text><Text className='v'>{calc.energy > 0 ? Math.floor(state.settings.energyBudget / calc.energy) : 0} 次</Text></View>
          <View className='kv'><Text className='k'>毛利率</Text><Text className='v'>{calc.margin == null ? '—' : fmtPct(calc.margin, 1)}</Text></View>
          <Text className='tiny dim mt' style={{ display: 'block', lineHeight: '30rpx' }}>
            售价已扣 {fmtPct(state.settings.taxRate, 0)} 税；未计暴击与署名溢价。
          </Text>
          {recipe.note ? <Text className='tiny dim mt' style={{ display: 'block' }}>备注：{recipe.note}</Text> : null}
          <Text className='tiny dim mt' style={{ display: 'block' }}>来源：{recipe.origin || '示例配方'}</Text>
        </View>
      </View>

      <View className='btn-row'>
        <View className='btn btn-primary' onClick={startEdit}>编辑配方</View>
        {recipe.custom ? <View className='btn btn-danger' onClick={removeRecipe}>删除</View> : <View className='btn btn-ghost' onClick={resetRecipe}>恢复示例</View>}
      </View>
      <DataNote />
    </View>
  );
}

export default withTheme(Recipe);
