import { Component } from 'react';
import Taro from '@tarojs/taro';
import { actions, getState } from './store';
import { syncRemotePrices } from './shared/remotePrices';
import { PRICE_AUTO_SYNC_MS } from './shared/cloudConfig';
import { applyTheme, getTheme } from './shared/theme';
import './app.css';

function setupMiniUpdate() {
  if (process.env.TARO_ENV !== 'weapp' || !Taro.getUpdateManager) return;
  try {
    const manager = Taro.getUpdateManager();
    manager.onUpdateReady(function () {
      Taro.showModal({
        title: '小程序更新',
        content: '新版本已准备好，是否重启应用？',
        success: function (res) { if (res.confirm) manager.applyUpdate(); }
      });
    });
  } catch (e) { /* 低版本基础库不支持时忽略 */ }
}

class App extends Component {
  componentDidMount() {
    applyTheme(getTheme(getState()));
    setupMiniUpdate();
    this.startPriceSync();
  }

  componentDidShow() {
    applyTheme(getTheme(getState()));
    // 从后台回到前台时立即强制刷新，避免继续使用旧行情。
    this.startPriceSync();
  }

  componentDidHide() {
    this.stopPriceSync();
  }

  componentWillUnmount() {
    this.stopPriceSync();
  }

  syncPrices(force) {
    if (process.env.TARO_ENV !== 'weapp') return;
    syncRemotePrices(actions, force, getState());
  }

  startPriceSync() {
    if (process.env.TARO_ENV !== 'weapp') return;
    this.syncPrices(true);
    if (this.priceTimer) clearInterval(this.priceTimer);
    // 停留在任意页面时，前台每分钟自动检查一次云端行情。
    this.priceTimer = setInterval(() => this.syncPrices(true), PRICE_AUTO_SYNC_MS);
  }

  stopPriceSync() {
    if (this.priceTimer) {
      clearInterval(this.priceTimer);
      this.priceTimer = null;
    }
  }

  render() {
    return this.props.children;
  }
}

export default App;
