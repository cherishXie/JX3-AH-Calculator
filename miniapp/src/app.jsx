import { Component } from 'react';
import Taro from '@tarojs/taro';
import { actions, getState } from './store';
import { syncRemotePrices } from './shared/remotePrices';
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
    if (process.env.TARO_ENV === 'weapp') {
      // 自动同步失败时静默回退到本地行情；手动同步会在价格页给出提示。
      syncRemotePrices(actions, false, getState());
    }
  }

  render() {
    return this.props.children;
  }
}

export default App;
