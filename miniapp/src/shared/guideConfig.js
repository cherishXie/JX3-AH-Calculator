/**
 * 小程序启动引导页配置。
 *
 * GUIDE_SECONDS：默认倒计时秒数，可改为 3 / 8 / 10 等。
 * GUIDE_ENABLED：设为 false 可完全关闭引导页。
 * GUIDE_AD_ENABLED + GUIDE_AD_UNIT_ID：后续接入微信流量主广告时填写。
 *   未配置广告单元时不会渲染 <Ad>，适合先提交审核。
 */
export const GUIDE_ENABLED = true;
export const GUIDE_SECONDS = 5;
export const GUIDE_TARGET = '/pages/overview/index';

export const GUIDE_AD_ENABLED = false;
export const GUIDE_AD_UNIT_ID = '';

export function guideSeconds() {
  const n = Number(GUIDE_SECONDS);
  return Number.isFinite(n) ? Math.max(1, Math.min(15, Math.round(n))) : 5;
}
