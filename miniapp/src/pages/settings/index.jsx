import withTheme from '../../components/withTheme';
import { useState } from 'react';
import { View, Text, Input, Picker, Textarea } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import Seg from '../../components/Seg';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import { useStore } from '../../store';
import { DATA } from '../../shared/engine';
import { fmtTime } from '../../shared/format';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import { applyTheme } from '../../shared/theme';
import release from '../../shared/release.json';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';
const THEME_OPTIONS = [{ value: 'light', label: '亮色' }, { value: 'dark', label: '暗色' }, { value: 'tech', label: '科技风' }];

function Settings() {
  const [state, actions] = useStore();
  const [newName, setNewName] = useState('');
  const [newRegion, setNewRegion] = useState('');
  const [budget, setBudget] = useState(String(state.settings.energyBudget));
  const [gatherEnergy, setGatherEnergy] = useState(String(state.settings.gatherEnergy));
  const [craftEnergy, setCraftEnergy] = useState(String(state.settings.craftEnergy));
  const [tax, setTax] = useState(String(Number(((state.settings.taxRate || 0) * 100).toFixed(1))));
  const [backup, setBackup] = useState('');
  const [importText, setImportText] = useState('');
  const [syncing, setSyncing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  useDidShow(function () {
    try {
      const section = Taro.getStorageSync('settingsSection');
      if (section === 'data') {
        setShowPanel(true);
        Taro.removeStorageSync('settingsSection');
      }
    } catch (e) {}
  });

  const servers = state.servers || [];
  const notes = (release && release.notes) || [];
  const sources = (DATA.meta && DATA.meta.sources) || [];
  const server = servers.find(function (s) { return s.id === state.serverId; }) || servers[0] || { name: '—', region: '' };
  const serverIdx = Math.max(0, servers.findIndex(function (s) { return s.id === state.serverId; }));
  const serverRange = servers.map(function (s) { return s.name + ' · ' + (s.region || '自定义'); });
  const updateText = state.marketMeta ? fmtTime(Date.parse(state.marketMeta.priceUpdatedAt)) : fmtTime(Date.parse(DATA.meta.priceUpdatedAt));

  function changeTheme(value) {
    actions.setTheme(value);
    applyTheme(value);
    Taro.showToast({ title: value === 'light' ? '已切换为亮色' : value === 'dark' ? '已切换为暗色' : '已切换为科技风', icon: 'none' });
  }

  function copyText(text, okText) {
    try {
      const res = Taro.setClipboardData({ data: text });
      if (res && res.then) {
        res.then(function () { Taro.showToast({ title: okText || '已复制', icon: 'none' }); })
          .catch(function () { Taro.showToast({ title: '剪贴板不可用', icon: 'none' }); });
      } else {
        Taro.showToast({ title: okText || '已复制', icon: 'none' });
      }
    } catch (e) {
      Taro.showToast({ title: '剪贴板不可用', icon: 'none' });
    }
  }

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
    if (res.ok && res.stale) Taro.showToast({ title: '云端较旧，已用包内价', icon: 'none' });
    else if (res.ok) Taro.showToast({ title: '行情已更新', icon: 'none' });
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
    copyText(data, '备份已复制');
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
      content: '将删除当前服务器所有手动校准价格，恢复包内报价/示例价。',
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

  function go(url) {
    Taro.navigateTo({ url: url });
  }

  return (
    <View className='v2-page'>
      <PageHeader
        meta={'行情 ' + updateText}
        actions={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-icon-btn' onClick={syncCloud}>{syncing ? '…' : '↻'}</View>
        }
      />

      <View className='v2-hero'>
        <View className='v2-kicker'>我的 · 本机数据</View>
        <View className='v2-h1'>{server.name}</View>
        <View className='v2-hero-sub'>{server.region || '自定义'} · 行情 {updateText} · {state.items.length} 物品 / {state.recipes.length} 配方</View>
      </View>

      <View className='v2-card-pad' style={{ marginTop: '18rpx', background: 'var(--card)', border: '1rpx solid var(--border)' }}>
        <View className='v2-flex'>
          <View style={{ flex: 1, minWidth: 0 }}>
            <View className='v2-row-nm'>当前区服</View>
            <View className='v2-row-ds'>切换后所有收益、行情与走势按该服重算</View>
          </View>
          <Picker mode='selector' range={serverRange} value={serverIdx}
            onChange={function (e) {
              const next = servers[Number(e.detail.value)];
              if (next) {
                actions.setServer(next.id);
                Taro.showToast({ title: '已切换到 ' + next.name, icon: 'none' });
              }
            }}>
            <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn sm ghost'>切换</View>
          </Picker>
        </View>
      </View>

      <Section title='分析中心' sub='精力收益、走势、区服与突破'>
        <View className='v2-rows'>
          <View className='v2-row' onClick={function () { go('/pages/analysis/index'); }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>精力收益分析</Text>
              <Text className='v2-row-ds'>可做/谨慎/不可做 · 组合 · 双制品对比</Text>
            </View>
            <Text className='v2-row-chev'>›</Text>
          </View>
          {IS_WEAPP ? (
            <View className='v2-row' onClick={function () { go('/pages/trends/index'); }}>
              <View className='v2-row-main'>
                <Text className='v2-row-nm'>物价走势</Text>
                <Text className='v2-row-ds'>本服历史节点 · 涨跌榜 · 单品曲线</Text>
              </View>
              <Text className='v2-row-chev'>›</Text>
            </View>
          ) : null}
          {IS_WEAPP ? (
            <View className='v2-row' onClick={function () { go('/pages/server-trends/index'); }}>
              <View className='v2-row-main'>
                <Text className='v2-row-nm'>区服趋势</Text>
                <Text className='v2-row-ds'>17 服净广度 · 区服榜 · 跨服涨跌</Text>
              </View>
              <Text className='v2-row-chev'>›</Text>
            </View>
          ) : null}
          <View className='v2-row' onClick={function () { go('/pages/breakthrough/index'); }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>突破升级 1→50</Text>
              <Text className='v2-row-ds'>8 技艺 · 30/35/40/45 晋秩 · 三种排序</Text>
            </View>
            <Text className='v2-row-chev'>›</Text>
          </View>
        </View>
      </Section>

      <Section title='价格与行情' sub='本机价格空间'>
        {IS_WEAPP ? (
          <View className='v2-row' onClick={function () { go('/market/pages/directory/index'); }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>行情目录</Text>
              <Text className='v2-row-ds'>672 项家园 / 强化 / 消耗品</Text>
            </View>
            <Text className='v2-row-chev'>›</Text>
          </View>
        ) : null}
        <View className='v2-row' onClick={function () { Taro.switchTab({ url: '/pages/prices/index' }); }}>
          <View className='v2-row-main'>
            <Text className='v2-row-nm'>行情校准</Text>
            <Text className='v2-row-ds'>{state.items.length} 项 · 搜索 / 改价 / 批量录入</Text>
          </View>
          <Text className='v2-row-chev'>›</Text>
        </View>
      </Section>

      <Section title='设置' sub='外观 · 精力 · 服务器 · 备份'>
        <View className='v2-rows'>
          <View className='v2-row' onClick={function () { setShowPanel(!showPanel); }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>设置与数据</Text>
              <Text className='v2-row-ds'>{state.settings.energyBudget} 精力 · 税 {Math.round((state.settings.taxRate || 0) * 100)}% · {state.settings.theme === 'tech' ? '科技风' : state.settings.theme === 'dark' ? '暗色' : '亮色'}</Text>
            </View>
            <Text className='v2-row-chev'>{showPanel ? '⌃' : '›'}</Text>
          </View>
          <View className='v2-row' onClick={function () { setShowPanel(true); }}>
            <View className='v2-row-main'>
              <Text className='v2-row-nm'>数据说明与版本</Text>
              <Text className='v2-row-ds'>更新说明 · 数据来源 · 免责声明</Text>
            </View>
            <Text className='v2-row-chev'>›</Text>
          </View>
        </View>
      </Section>

      {showPanel ? (
        <View className='settings-panel'>
          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>外观</Text></View></View>
            <View className='card-body'>
              <Seg value={state.settings.theme || 'tech'} options={THEME_OPTIONS} onChange={changeTheme} />
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
                <Input className='input' type='digit' value={tax} onInput={function (e) { setTax(e.detail.value); }}
                  onBlur={function () { saveTax(tax); }} />
              </View>
              <View className='form-grid'>
                <View className='form-field'>
                  <Text className='form-label'>新采集默认精力</Text>
                  <Input className='input' type='number' value={gatherEnergy} onInput={function (e) { setGatherEnergy(e.detail.value); }}
                    onBlur={function () { saveNum('gatherEnergy', gatherEnergy, '采集精力'); }} />
                </View>
                <View className='form-field'>
                  <Text className='form-label'>新制造默认精力</Text>
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
            </View>
          </View>

          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>服务器</Text></View></View>
            <View className='card-body' style={{ paddingTop: '6rpx' }}>
              {servers.map(function (s) {
                return (
                  <View className='server-row' key={s.id}>
                    <View className='flex1'>
                      <Text className='nm'>{s.name}</Text>
                      <Text className='rg'>{s.region}</Text>
                      {s.id === state.serverId ? <Text className='tag-current'>当前</Text> : null}
                    </View>
                    <View className='ops'>
                      {s.id === state.serverId ? null : (
                        <View className='btn btn-ghost btn-sm' onClick={function () { actions.setServer(s.id); }}>切换</View>
                      )}
                      <View className='btn btn-danger btn-sm' onClick={function () { removeServer(s); }}>移除</View>
                    </View>
                  </View>
                );
              })}
              <View className='divider' />
              <View className='form-field'>
                <Text className='form-label'>新增服务器</Text>
                <Input className='input' value={newName} placeholder='服务器名称' placeholderStyle='color:var(--muted-2)'
                  onInput={function (e) { setNewName(e.detail.value); }} />
              </View>
              <View className='row'>
                <Input className='input flex1' value={newRegion} placeholder='大区（选填）' placeholderStyle='color:var(--muted-2)'
                  onInput={function (e) { setNewRegion(e.detail.value); }} />
                <View className='btn btn-primary ml' onClick={addServer}>新增</View>
              </View>
            </View>
          </View>

          <View className='card' id='data-section'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>数据与备份</Text><Text className='card-sub'>{isCloudConfigured() ? '本地存储 · 可选云端行情' : '本地存储 · 不联网'}</Text></View></View>
            <View className='card-body'>
              <View className='kv'><Text className='k'>数据版本</Text><Text className='v'>{DATA.meta && DATA.meta.catalogVersion}</Text></View>
              <View className='kv'><Text className='k'>物品 / 配方</Text><Text className='v'>{(state.items || []).length} / {(state.recipes || []).length}</Text></View>
              <View className='kv'><Text className='k'>云端行情</Text><Text className='v'>{!isCloudConfigured() ? '未配置' : state.marketMeta ? fmtTime(Date.parse(state.marketMeta.priceUpdatedAt)) : '未同步'}</Text></View>
              <View className='btn-row mt'>
                {isCloudConfigured() ? <View className='btn btn-ghost btn-sm' onClick={syncCloud}>{syncing ? '同步中' : '同步行情'}</View> : null}
                <View className='btn btn-ghost btn-sm' onClick={copyBackup}>复制备份</View>
                <View className='btn btn-ghost btn-sm' onClick={resetPrices}>清空本服价格</View>
                <View className='btn btn-ghost btn-sm' onClick={resetCatalog}>恢复示例配方</View>
                <View className='btn btn-danger btn-sm' onClick={resetAll}>重置全部</View>
              </View>
              {backup ? (
                <View className='mt'>
                  <Text className='settings-note' style={{ display: 'block', marginBottom: '8rpx' }}>备份已生成（{backup.length} 字符），如剪贴板不可用可长按复制。</Text>
                  <Textarea className='textarea' value={backup} maxlength={300000} onInput={function () {}} />
                </View>
              ) : null}
              <View className='divider' />
              <View className='form-field'>
                <Text className='form-label'>导入备份（粘贴 JSON）</Text>
                <Textarea className='textarea' value={importText} placeholder='粘贴从 Web 版或小程序导出的备份 JSON'
                  placeholderStyle='color:var(--muted-2)' maxlength={300000} onInput={function (e) { setImportText(e.detail.value); }} />
              </View>
              <View className='btn-row'>
                <View className='btn btn-primary btn-sm' onClick={importBackup}>覆盖并导入</View>
                <View className='btn btn-ghost btn-sm' onClick={function () { setImportText(''); }}>清空</View>
              </View>
            </View>
          </View>

          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>更新与数据说明</Text><Text className='card-sub'>{release.version} · {release.date}</Text></View></View>
            <View className='card-body'>
              <Text className='card-title' style={{ display: 'block', fontSize: '30rpx' }}>{release.title}</Text>
              {notes.map(function (note, i) {
                return <Text key={i} className='settings-note' style={{ display: 'block', marginTop: '8rpx' }}>· {note}</Text>;
              })}
              <View className='divider' />
              {sources.map(function (s, i) {
                return (
                  <View className='server-row' key={i}>
                    <View className='flex1'>
                      <Text className='nm'>{s.label}</Text>
                      <Text className='rg' style={{ display: 'block', marginLeft: 0, lineHeight: '32rpx' }}>{s.note}</Text>
                    </View>
                    <View className='btn btn-ghost btn-sm' onClick={function () { copyText(s.url, '链接已复制'); }}>复制</View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      ) : null}

      <View className='data-note'>价格与配置仅存本机</View>
    </View>
  );
}

export default withTheme(Settings);
