(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;

  var secure = location.protocol === 'https:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';
  if (!secure) return;

  var meta = document.querySelector('meta[name="app-version"]');
  var APP_VERSION = meta ? (meta.getAttribute('content') || '') : '';
  // 未构建的本地文件（占位符）不启用更新提示。
  if (!APP_VERSION || APP_VERSION.indexOf('__') === 0) return;

  var registration = null;
  var reloading = false;
  var banner = null;

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatDate(value) {
    if (!value) return '';
    var match = String(value).match(/^\d{4}-\d{2}-\d{2}/);
    return match ? match[0] : '';
  }

  function removeBanner() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }

  function render(data) {
    removeBanner();

    var notes = Array.isArray(data.notes) && data.notes.length
      ? data.notes.slice(0, 4)
      : ['修复已知问题，优化加载与交互'];

    var root = document.createElement('div');
    root.id = 'pwa-update';
    root.className = 'pwa-update';
    root.setAttribute('role', 'status');
    root.setAttribute('aria-live', 'polite');

    var list = notes.map(function (note) {
      return '<li>' + escapeHtml(note) + '</li>';
    }).join('');

    root.innerHTML =
      '<div class="pwa-update__head">' +
        '<span class="pwa-update__tag">更新</span>' +
        '<span class="pwa-update__head-text">发现新版本</span>' +
        '<span class="pwa-update__date">' + escapeHtml(formatDate(data.date)) + '</span>' +
      '</div>' +
      '<div class="pwa-update__title">' + escapeHtml(data.title || '本次更新内容') + '</div>' +
      '<ul class="pwa-update__notes">' + list + '</ul>' +
      '<div class="pwa-update__actions">' +
        '<button type="button" class="pwa-update__later">稍后</button>' +
        '<button type="button" class="pwa-update__go">立即更新</button>' +
      '</div>';

    root.querySelector('.pwa-update__later').addEventListener('click', function () {
      try { sessionStorage.setItem('pwa-later:' + data.latest, '1'); } catch (e) { /* ignore */ }
      removeBanner();
    });

    root.querySelector('.pwa-update__go').addEventListener('click', function () {
      applyUpdate();
    });

    document.body.appendChild(root);
    banner = root;
  }

  function applyUpdate() {
    if (registration && registration.waiting) {
      reloading = true;
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      return;
    }
    location.reload();
  }

  function fetchUpdates() {
    return fetch('./updates.json?t=' + Date.now(), { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) return null;
        return response.json();
      })
      .catch(function () { return null; });
  }

  function announce() {
    fetchUpdates().then(function (data) {
      if (data && data.latest) {
        if (data.latest === APP_VERSION) return;
        try {
          if (sessionStorage.getItem('pwa-later:' + data.latest)) return;
        } catch (e) { /* ignore */ }
        render(data);
        return;
      }
      // 拉不到更新说明时给一个兜底提示，仍然让用户能更新。
      render({
        latest: 'new',
        date: '',
        title: '发现新版本',
        notes: ['修复已知问题，优化加载与交互']
      });
    });
  }

  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (reloading) location.reload();
  });

  navigator.serviceWorker.register('./sw.js', {
    scope: './',
    updateViaCache: 'none'
  }).then(function (reg) {
    registration = reg;

    if (reg.waiting) announce();

    reg.addEventListener('updatefound', function () {
      var installing = reg.installing;
      if (!installing) return;
      installing.addEventListener('statechange', function () {
        if (installing.state === 'installed' && navigator.serviceWorker.controller) {
          announce();
        }
      });
    });

    // 兜底：部分浏览器在 register 返回前就完成安装。
    setTimeout(function () {
      if (reg.waiting) announce();
    }, 3000);

    setTimeout(function () {
      reg.update().catch(function () { /* ignore */ });
    }, 1200);

    setInterval(function () {
      reg.update().catch(function () { /* ignore */ });
    }, 15 * 60 * 1000);

    window.__JX3_PWA__ = {
      registration: reg,
      announce: announce,
      check: function () { return reg.update(); }
    };
  }).catch(function (error) {
    if (window.console) console.warn('[pwa] service worker registration failed', error);
  });

  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && registration) {
      registration.update().catch(function () { /* ignore */ });
    }
  });
})();
