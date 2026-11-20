# 启动引导页

微信端启动页：`pages/guide/index`，是 `app.json` 的第一个页面；小红书端不注册。

## 配置

编辑 `src/shared/guideConfig.js`：

```js
export const GUIDE_ENABLED = true;   // false 可关闭引导页
export const GUIDE_SECONDS = 5;      // 默认倒计时秒数，1–15
export const GUIDE_TARGET = '/pages/overview/index';

export const GUIDE_AD_ENABLED = false;
export const GUIDE_AD_UNIT_ID = '';  // 微信流量主广告位 ID
```

## 行为

- 右上角「跳过 Ns」立即进入总览
- 倒计时结束自动 `switchTab` 到总览
- 引导页使用自定义导航栏，隐藏原生 TabBar
- 不展示广告，除非 `GUIDE_AD_ENABLED=true` 且填写 `GUIDE_AD_UNIT_ID`

## 广告注意

- 需要先开通微信流量主并创建广告位
- 广告内容、位置和启动页形式必须符合微信审核规范
- 建议先不启用广告提交审核，通过后再配置广告位；不要做强制等待或诱导点击
