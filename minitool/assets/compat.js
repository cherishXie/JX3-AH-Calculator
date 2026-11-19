/* Chrome 61 / WebView 61 基线能力检测；只加兼容类，不改业务。 */
(function () {
  'use strict';

  window.__MINITOOL__ = true;
  var root = document.documentElement;

  function supportsFlexGap() {
    try {
      var flex = document.createElement('div');
      flex.style.position = 'absolute';
      flex.style.visibility = 'hidden';
      flex.style.display = 'flex';
      flex.style.flexDirection = 'column';
      flex.style.rowGap = '1px';
      flex.appendChild(document.createElement('div'));
      flex.appendChild(document.createElement('div'));
      document.body.appendChild(flex);
      var supported = flex.scrollHeight === 1;
      document.body.removeChild(flex);
      return supported;
    } catch (error) { return false; }
  }

  function supports(property, value) {
    try { return !!(window.CSS && window.CSS.supports && window.CSS.supports(property, value)); }
    catch (error) { return false; }
  }

  if (!supportsFlexGap()) root.classList.add('no-flex-gap');
  if (!supports('color', 'color-mix(in srgb, #000 50%, #fff)')) root.classList.add('no-color-mix');
  if (!supports('inset', '0')) root.classList.add('no-inset');
  if (!supports('backdrop-filter', 'blur(2px)')) root.classList.add('no-backdrop');

  function updateHeight() {
    try { root.style.setProperty('--app-height', window.innerHeight + 'px'); } catch (error) {}
  }
  updateHeight();

  /* 顶部安全区：状态栏 / 刘海。
     容器客户端 9.49+ 提供 getWindowInfo，可拿到 statusBarHeight / safeArea / screenTop；
     静态首屏先按 0 渲染，拿到真实值后写入 --safe-top，避免顶部栏压在状态栏下面。 */
  var safeTopApplied = -1;
  var safeLeftApplied = -1;
  var safeRightApplied = -1;

  function readCssSafeTop() {
    var probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;visibility:hidden;pointer-events:none;padding-top:constant(safe-area-inset-top)';
    document.documentElement.appendChild(probe);
    var value = parseFloat(window.getComputedStyle(probe).paddingTop) || 0;
    if (!value) {
      probe.style.paddingTop = 'env(safe-area-inset-top, 0px)';
      value = parseFloat(window.getComputedStyle(probe).paddingTop) || 0;
    }
    if (probe.parentNode) probe.parentNode.removeChild(probe);
    return value || 0;
  }

  function computeInsets(info, cssTop) {
    var statusTop = cssTop || 0;
    var left = 0;
    var right = 0;
    if (info) {
      var safeArea = info.safeArea || {};
      if (typeof safeArea.top === 'number') statusTop = Math.max(statusTop, safeArea.top);
      var status = typeof info.statusBarHeight === 'number' ? info.statusBarHeight : 0;
      var screenTop = typeof info.screenTop === 'number' ? info.screenTop : 0;
      statusTop = Math.max(statusTop, status - screenTop);

      /* 容器自带的返回 / 分享按钮浮在页面之上：
         顶部栏保持贴顶，只在左右两侧留出按钮宽度，避免整体下沉产生大片空白。 */
      var width = typeof info.windowWidth === 'number' ? info.windowWidth : 0;
      var basePad = width <= 768 ? 12 : (width <= 860 ? 16 : 24);
      var headerBottom = statusTop + 72;
      var buttons = info.menuButtons;
      if (buttons && width) {
        ['back', 'me', 'share'].forEach(function (key) {
          var rect = buttons[key];
          if (!rect || typeof rect.left !== 'number' || typeof rect.top !== 'number' || typeof rect.bottom !== 'number') return;
          if (rect.bottom <= statusTop || rect.top >= headerBottom) return;
          if (key === 'back') {
            left = Math.max(left, rect.right + 8 - basePad);
          } else {
            right = Math.max(right, width - rect.left + 8 - basePad);
          }
        });
      }
    }
    return {
      top: Math.max(0, Math.round(statusTop)),
      statusTop: Math.max(0, Math.round(statusTop)),
      left: Math.max(0, Math.round(left)),
      right: Math.max(0, Math.round(right))
    };
  }

  function applyInsets(insets) {
    var top = Math.max(0, Math.round((insets && insets.top) || 0));
    var statusTop = Math.max(0, Math.round((insets && insets.statusTop) || 0));
    var left = Math.max(0, Math.round((insets && insets.left) || 0));
    var right = Math.max(0, Math.round((insets && insets.right) || 0));
    if (top === safeTopApplied && left === safeLeftApplied && right === safeRightApplied) return;
    safeTopApplied = top;
    safeLeftApplied = left;
    safeRightApplied = right;
    try {
      var root = document.documentElement;
      root.style.setProperty('--safe-top', top + 'px');
      root.style.setProperty('--safe-status-top', statusTop + 'px');
      root.style.setProperty('--safe-left', left + 'px');
      root.style.setProperty('--safe-right', right + 'px');
    } catch (error) {}
  }

  function refreshSafeTop() {
    var cssTop = readCssSafeTop();
    var miniTool = window.xhs && window.xhs.miniTool;
    if (!miniTool || typeof miniTool.getWindowInfo !== 'function') {
      applyInsets({ top: cssTop, statusTop: cssTop });
      return;
    }
    if (safeTopApplied < 0) applyInsets({ top: cssTop, statusTop: cssTop });
    var settled = false;
    function finish(info) {
      if (settled) return;
      settled = true;
      applyInsets(computeInsets(info, cssTop));
    }
    try {
      var request = miniTool.getWindowInfo();
      if (request && typeof request.then === 'function') {
        request.then(finish).catch(function () { settled = true; });
      }
    } catch (error) { /* 低版本或未注入容器时保持 CSS 兜底 */ }
  }

  refreshSafeTop();
  window.addEventListener('resize', refreshSafeTop);
  window.addEventListener('orientationchange', function () { setTimeout(refreshSafeTop, 250); });
}());
