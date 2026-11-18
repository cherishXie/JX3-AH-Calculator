/* 剑网三物价助手 · PWA service worker
 * 构建时 __APP_VERSION__ 会被替换成当前提交版本。
 * 新版本安装后不自动 skipWaiting，等页面上的更新提示确认后再切换。
 */
const VERSION = '__APP_VERSION__';
const CACHE = 'jx3-shell-' + VERSION;
const SHELL = [
  './',
  './index.html',
  './assets/styles.css',
  './assets/pwa.css',
  './assets/data.js',
  './assets/core.js',
  './assets/charts.js',
  './assets/app.js',
  './assets/pwa.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(SHELL.map((url) => new Request(url, { cache: 'reload' })));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key.indexOf('jx3-shell-') === 0 && key !== CACHE).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // 版本/更新说明永远走网络，避免被缓存成旧内容。
  if (url.pathname.endsWith('/version.json') || url.pathname.endsWith('/updates.json')) {
    event.respondWith(fetch(request, { cache: 'no-store' }));
    return;
  }

  // 下载包不塞进 shell 缓存。
  if (url.pathname.includes('/downloads/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put('./index.html', copy)).catch(() => {});
          }
          return response;
        })
        .catch(() => caches.match('./index.html').then((hit) => hit || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((hit) => {
      if (hit) return hit;
      return fetch(request).then((response) => {
        if (response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return response;
      });
    })
  );
});
