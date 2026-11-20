const path = require('path');

const outputRoot = 'dist/' + (process.env.TARO_ENV || 'weapp');

const config = {
  projectName: 'jingli-zuoshenme',
  date: '2026-11-18',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: outputRoot,
  plugins: [
    '@tarojs/plugin-platform-xhs'
  ],
  defineConstants: {},
  copy: {
    // 主题切换需要在运行时引用亮/暗两套 Tab 图标；静态 tabBar 只能声明一套。
    patterns: [
      { from: 'src/assets/tabs', to: outputRoot + '/assets/tabs' }
    ],
    options: {}
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  cache: { enable: false },
  mini: {
    postcss: {
      pxtransform: { enable: true, config: {} },
      url: { enable: true, config: { limit: 1024 } },
      cssModules: { enable: false }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: { mode: 'hash' }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
