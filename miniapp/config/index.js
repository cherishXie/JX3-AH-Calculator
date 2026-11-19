const path = require('path');

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
  outputRoot: 'dist/' + (process.env.TARO_ENV || 'weapp'),
  plugins: [
    '@tarojs/plugin-platform-xhs'
  ],
  defineConstants: {},
  copy: {
    patterns: [],
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
