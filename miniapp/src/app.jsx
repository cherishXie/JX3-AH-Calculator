import { Component } from 'react';
import { actions, getState } from './store';
import { syncRemotePrices } from './shared/remotePrices';
import './app.css';

class App extends Component {
  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      syncRemotePrices(actions, false, getState()).then(function (res) {
        if (res && !res.ok && !res.skipped) {
          console.warn('[cloud prices]', res.error || 'sync failed');
        }
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default App;
