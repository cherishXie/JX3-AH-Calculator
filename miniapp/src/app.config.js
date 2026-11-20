/* 微信端额外提供五行石/公式编辑；小红书端保持原有 4 Tab，避免影响现有工具布局 */
const IS_WEAPP = process.env.TARO_ENV === 'weapp';

const PAGES = [];
if (IS_WEAPP) PAGES.push('pages/guide/index');
PAGES.push(
  'pages/overview/index',
  'pages/skills/index',
  'pages/prices/index',
  'pages/analysis/index'
);

if (IS_WEAPP) PAGES.push('pages/stones/index', 'pages/stone-formula/index', 'pages/trends/index', 'pages/server-trends/index');

PAGES.push('pages/breakthrough/index', 'pages/recipe/index', 'pages/settings/index');

const TAB_LIST = [
  { pagePath: 'pages/overview/index', text: '总览', iconPath: 'assets/tabs/home-light.png', selectedIconPath: 'assets/tabs/home-on-light.png' },
  { pagePath: 'pages/skills/index', text: '技艺', iconPath: 'assets/tabs/skills-light.png', selectedIconPath: 'assets/tabs/skills-on-light.png' },
  { pagePath: 'pages/prices/index', text: '价格', iconPath: 'assets/tabs/prices-light.png', selectedIconPath: 'assets/tabs/prices-on-light.png' },
  { pagePath: 'pages/analysis/index', text: '分析', iconPath: 'assets/tabs/analysis-light.png', selectedIconPath: 'assets/tabs/analysis-on-light.png' }
];

if (IS_WEAPP) {
  TAB_LIST.push({ pagePath: 'pages/stones/index', text: '五行石', iconPath: 'assets/tabs/stones-light.png', selectedIconPath: 'assets/tabs/stones-on-light.png' });
}

export default {
  pages: PAGES,
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#f5f5f5',
    navigationBarTitleText: '精力做什么',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f5f5f5'
  },
  tabBar: {
    color: '#64748B',
    selectedColor: '#0F172A',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: TAB_LIST
  }
};
