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
  window.addEventListener('resize', updateHeight);
  window.addEventListener('orientationchange', function () { setTimeout(updateHeight, 200); });
}());
