import { Component } from 'react';
import { actions, getState } from './store';
import { syncRemotePrices } from './shared/remotePrices';
import { applyTheme, getTheme } from './shared/theme';
import './app.css';

class App extends Component {
  componentDidMount() {
    applyTheme(getTheme(getState()));
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
