import { useEffect, useState } from 'react';
import { View, Text, Input, Picker, Textarea, ScrollView } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import { useStore } from '../../store';
import { DATA } from '../../shared/engine';
import { fmt, fmtTime } from '../../shared/format';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';

export default function Settings() {
  const [state, actions] = useStore();
  const router = useRouter();
  const [newName, setNewName] = useState('');
  const [newRegion, setNewRegion] = useState('');
  const [budget, setBudget] = useState(String(state.settings.energyBudget));
  const [gatherEnergy, setGatherEnergy] = useState(String(state.settings.gatherEnergy));
  const [craftEnergy, setCraftEnergy] = useState(String(state.settings.craftEnergy));
  const [tax, setTax] = useState(String(Number(((state.settings.taxRate || 0) * 100).toFixed(1))));
  const [backup, setBackup] = useState('');
  const [importText, setImportText] = useState('');
  const [syncing, setSyncing] = useState(false);

  function copyText(text, okText) {
    try {
      const res = Taro.setClipboardData({ data: text });
      if (res && res.then) {
        res.then(function () {
          Taro.showToast({ title: okText || '已复制', icon: 'none' });
        }).catch(function () {
          Taro.showToast({ title: '剪贴板不可用，请手动复制', icon: 'none' });
        });
      } else {
        Taro.showToast({ title: okText || '已复制', icon: 'none' });
      }
    } catch (e) {
      Taro.showToast({ title: '剪贴板不可用，请手动复制', icon: 'none' });
    }
  }

  useEffect(function () {
    if (router.params && router.params.section === 'data') {
      setTimeout(function () {
        try {
          const res = Taro.pageScrollTo({ selector: '#data-section', duration: 250 });
          if (res && res.catch) res.catch(function () {});
        } catch (e) { /* 某些平台不支持 selector */ }
      }, 300);
    }
  }, []);

  function addServer() {
    const id = actions.addServer(newName, newRegion);
    if (!id) {
      Taro.showToast({ title: newName.trim() ? '服务器名称重复' : '请输入服务器名称', icon: 'none' });
      return;
    }
    actions.setServer(id);
    setNewName('');
    setNewRegion('');
    Taro.showToast({ title: '已新增并切换', icon: 'none' });
  }

  function removeServer(s) {
    if (state.servers.length <= 1) {
      Taro.showToast({ title: '至少保留一个服务器', icon: 'none' });
      return;
    }
    Taro.showModal({
      title: '移除服务器',
      content: '将删除「' + s.name + '」的全部已填价格，配方库不变。',
      confirmColor: '#f43f5e',
      success: function (res) {
        if (res.confirm) {
          actions.removeServer(s.id);
          Taro.showToast({ title: '已移除', icon: 'none' });
        }
      }
    });
  }

  function saveNum(key, value, label) {
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0) {
      Taro.showToast({ title: label + '需为非负数字', icon: 'none' });
      return;
    }
    actions.setSetting(key, key === 'energyBudget' ? Math.round(n) : Math.max(1, Math.round(n)));
    Taro.showToast({ title: label + '已保存', icon: 'none' });
  }

  async function syncCloud() {
    if (syncing) return;
    if (!isCloudConfigured()) {
      Taro.showToast({ title: '未配置云环境', icon: 'none' });
      return;
    }
    setSyncing(true);
    Taro.showLoading({ title: '同步行情...' });
    const res = await syncRemotePrices(actions, true, state);
    Taro.hideLoading();
    setSyncing(false);
    if (res.ok) Taro.showToast({ title: '行情已更新', icon: 'none' });
    else if (res.skipped) Taro.showToast({ title: '未配置云环境', icon: 'none' });
    else Taro.showToast({ title: res.error || '同步失败', icon: 'none' });
  }

  function saveTax(value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0 || n > 100) {
      Taro.showToast({ title: '税率需在 0–100% 之间', icon: 'none' });
      setTax(String(Number(((state.settings.taxRate || 0) * 100).toFixed(1))));
      return;
    }
    actions.setTaxRate(n);
    Taro.showToast({ title: '交易税已保存', icon: 'none' });
  }

  function copyBackup() {
    const data = actions.exportJSON();
    setBackup(data);
    copyText(data, '备份已复制到剪贴板');
  }

  function importBackup() {
    if (!importText.trim()) {
      Taro.showToast({ title: '请粘贴备份 JSON', icon: 'none' });
      return;
    }
    try {
      actions.importJSON(importText);
      Taro.showToast({ title: '备份已导入', icon: 'none' });
      setImportText('');
    } catch (e) {
      Taro.showToast({ title: e.message || '导入失败', icon: 'none' });
    }
  }

  function resetPrices() {
    Taro.showModal({
      title: '清空本服价格',
      content: '将删除当前服务器所有手动校准价格，恢复示例价。',
      confirmColor: '#f43f5e',
      success: function (res) {
        if (res.confirm) {
          actions.clearServerPrices(state.serverId);
          Taro.showToast({ title: '已清空本服价格', icon: 'none' });
        }
      }
    });
  }

  function resetCatalog() {
    Taro.showModal({
      title: '恢复示例配方库',
      content: '将移除自定义配方/物品，并恢复当前版本示例。价格记录保留。',
      confirmColor: '#f43f5e',
      success: function (res) {
        if (res.confirm) {
          actions.resetCatalog();
          Taro.showToast({ title: '已恢复示例配方', icon: 'none' });
        }
      }
    });
  }

  function resetAll() {
    Taro.showModal({
      title: '重置全部数据',
      content: '将清除本机全部配方、价格、服务器与设置。此操作不可撤销。',
      confirmColor: '#f43f5e',
      success: function (res) {
        if (res.confirm) {
          actions.resetAll();
          Taro.showToast({ title: '已重置全部数据', icon: 'none' });
        }
      }
    });
  }

  const platform = process.env.TARO_ENV === 'xhs' ? '小红书小程序' : process.env.TARO_ENV === 'weapp' ? '微信小程序' : 'H5';

  return (
    <View className='page'>
      <TopBar title='设置与数据' subtitle={'当前构建：' + platform} />

      <View className='card'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>服务器</Text><Text className='card-sub'>每个服务器一套独立价格 · {state.servers.length} 个</Text></View></View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {state.servers.map(function (s) {
            return (
              <View className='server-row' key={s.id}>
                <View>
                  <Text className='nm'>{s.name}</Text>
                  <Text className='rg'>{s.region}</Text>
                  {s.id === state.serverId ? <Text className='tag-current'>当前</Text> : null}
                </View>
                <View className='ops'>
                  {s.id === state.serverId ? null : (
                    <View className='btn btn-ghost btn-sm' onClick={function () { actions.setServer(s.id); Taro.showToast({ title: '已切换', icon: 'none' }); }}>切换</View>
                  )}
                  <View className='btn btn-danger btn-sm' style={{ marginLeft: '8rpx' }} onClick={function () { removeServer(s); }}>移除</View>
                </View>
              </View>
            );
          })}
          <View className='divider' />
          <View className='form-field'>
            <Text className='form-label'>新增服务器</Text>
            <Input className='input input-sm' value={newName} placeholder='服务器名称' placeholderStyle='color:#475569'
              onInput={function (e) { setNewName(e.detail.value); }} />
          </View>
          <View className='row'>
            <Input className='input input-sm flex1' value={newRegion} placeholder='大区（选填）' placeholderStyle='color:#475569'
              onInput={function (e) { setNewRegion(e.detail.value); }} />
            <View className='btn btn-primary btn-sm ml' onClick={addServer}>新增并切换</View>
          </View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>精力与口径</Text></View></View>
        <View className='card-body'>
          <View className='form-field'>
            <Text className='form-label'>精力预算（模拟用）</Text>
            <Input className='input' type='number' value={budget} onInput={function (e) { setBudget(e.detail.value); }}
              onBlur={function () { saveNum('energyBudget', budget, '精力预算'); }} />
          </View>
          <View className='form-field'>
            <Text className='form-label'>交易税率（%）</Text>
            <Input className='input tax-rate' type='digit' value={tax} onInput={function (e) { setTax(e.detail.value); }}
              onBlur={function () { saveTax(tax); }} />
            <Text className='tiny dim'>默认 5%，所有产物售价按此税率扣除；可改为 0% 查看税前收益。</Text>
          </View>
          <View className='form-grid'>
            <View className='form-field'>
              <Text className='form-label'>新建采集默认精力</Text>
              <Input className='input' type='number' value={gatherEnergy} onInput={function (e) { setGatherEnergy(e.detail.value); }}
                onBlur={function () { saveNum('gatherEnergy', gatherEnergy, '采集精力'); }} />
            </View>
            <View className='form-field'>
              <Text className='form-label'>新建制造默认精力</Text>
              <Input className='input' type='number' value={craftEnergy} onInput={function (e) { setCraftEnergy(e.detail.value); }}
                onBlur={function () { saveNum('craftEnergy', craftEnergy, '制造精力'); }} />
            </View>
          </View>
          <View className='form-field'>
            <Text className='form-label'>默认成本口径</Text>
            <Picker mode='selector' range={['市场价', '取最低（仅成本）']} value={state.settings.basis === 'min' ? 1 : 0}
              onChange={function (e) { actions.setSetting('basis', Number(e.detail.value) === 1 ? 'min' : 'market'); }}>
              <View className='picker'><Text>{state.settings.basis === 'min' ? '取最低（仅成本）' : '市场价'}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
          </View>
          <Text className='tiny dim'>「取最低」只优化材料成本，不把自制中间产物消耗的精力计入最终配方。</Text>
        </View>
      </View>

      <View className='card' id='data-section'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>数据与备份</Text><Text className='card-sub'>{isCloudConfigured() ? '本地存储 · 可选云端行情' : '本地存储 · 不联网'}</Text></View></View>
        <View className='card-body'>
          <View className='kv'><Text className='k'>数据版本</Text><Text className='v'>{DATA.meta.version} · {DATA.meta.catalogVersion}</Text></View>
          <View className='kv'><Text className='k'>核验日期</Text><Text className='v'>{DATA.meta.verifiedAt}</Text></View>
          <View className='kv'><Text className='k'>物品 / 配方 / 服务器</Text><Text className='v'>{state.items.length} / {state.recipes.length} / {state.servers.length}</Text></View>
          <View className='kv'><Text className='k'>自定义配方</Text><Text className='v'>{state.recipes.filter(function (r) { return r.custom; }).length} 个</Text></View>
          <View className='kv'><Text className='k'>云端行情</Text><Text className='v'>{!isCloudConfigured() ? '未配置云环境' : state.marketMeta ? fmtTime(Date.parse(state.marketMeta.priceUpdatedAt)) : '未同步'}</Text></View>

          <View className='btn-row mt'>
            {isCloudConfigured() ? <View className='btn btn-ghost btn-sm' onClick={syncCloud}>{syncing ? '同步中' : '同步行情'}</View> : null}
            <View className='btn btn-ghost btn-sm' onClick={copyBackup}>复制 JSON 备份</View>
            <View className='btn btn-ghost btn-sm' onClick={resetPrices}>清空本服价格</View>
            <View className='btn btn-ghost btn-sm' onClick={resetCatalog}>恢复示例配方</View>
            <View className='btn btn-danger btn-sm' onClick={resetAll}>重置全部</View>
          </View>
          {backup ? (
            <View className='mt'>
              <Text className='tiny dim' style={{ display: 'block', marginBottom: '6rpx' }}>备份已生成（{backup.length} 字符）。若剪贴板不可用，可长按下面文本全选复制。</Text>
              <Textarea className='textarea' value={backup} maxlength={300000} onInput={function () {}} />
            </View>
          ) : null}

          <View className='divider' />
          <View className='form-field'>
            <Text className='form-label'>导入备份（粘贴 JSON）</Text>
            <Textarea className='textarea' value={importText} placeholder='粘贴从 Web 版或小程序导出的备份 JSON'
              placeholderStyle='color:#475569' maxlength={300000} onInput={function (e) { setImportText(e.detail.value); }} />
          </View>
          <View className='btn-row'>
            <View className='btn btn-primary btn-sm' onClick={importBackup}>覆盖并导入</View>
            <View className='btn btn-ghost btn-sm' onClick={function () { setImportText(''); }}>清空</View>
          </View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'><View className='flex1'><Text className='card-title'>数据说明与来源</Text></View></View>
        <View className='card-body'>
          <View className='notice' style={{ background: 'rgba(59,130,246,.07)', borderColor: 'rgba(59,130,246,.25)' }}>
            <Text className='ic' style={{ color: '#7ab8ff' }}>i</Text>
            <Text>制造配方/等级/精力/材料/产出范围来自 JX3BOX 技艺助手 API（2026-11-18）；产出价优先用样本价，缺失/异常时按成本估算示例。旧版本（90/100/130 级）数值不适用。</Text>
          </View>
          <Text className='tiny dim' style={{ display: 'block', marginBottom: '8rpx' }}>
            当前版本：苍生铸世 50 级。制造技艺：锻造、缝纫、制药、烹饪、梓匠；采集：神农、采金、庖丁。紫色以上产物带署名，制造暴击与市场深度未自动计入；交易税按设置税率扣除。
          </Text>
          {DATA.meta.sources.map(function (s, i) {
            return (
              <View className='server-row' key={i}>
                <View className='flex1'>
                  <Text className='nm'>{s.label}</Text>
                  <Text className='rg' style={{ display: 'block', marginLeft: 0, lineHeight: '26rpx' }}>{s.note}</Text>
                </View>
                <View className='ops'>
                  <View className='btn btn-ghost btn-sm' onClick={function () {
                    copyText(s.url, '链接已复制');
                  }}>复制链接</View>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View className='data-note'>
        小程序端采用 View 图表（排行条）而非 Canvas，保证微信 / 小红书两端渲染一致；Web 端保留 SVG 散点与箱线图。
      </View>
    </View>
  );
}
