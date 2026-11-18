/* 小工具本地缓存适配：优先 window.xhs.miniTool Storage，浏览器预览回退 localStorage。 */
(function () {
  'use strict';

  var KEY = 'jx3-ledger-v1';
  var memory = Object.create(null);
  var local = null;
  try { local = window.localStorage; } catch (error) { local = null; }

  function readLocal(key) {
    try { return local ? local.getItem(key) : null; } catch (error) { return null; }
  }

  function remember(key, value) {
    memory[key] = value;
    try { if (local) local.setItem(key, value); } catch (error) { /* 容量或权限限制时仅保留内存 */ }
  }

  function get(key) {
    if (Object.prototype.hasOwnProperty.call(memory, key)) return memory[key];
    return readLocal(key);
  }

  function miniTool() {
    return window.xhs && window.xhs.miniTool;
  }

  function set(key, value) {
    remember(key, value);
    var mt = miniTool();
    if (mt && typeof mt.setStorage === 'function') {
      try {
        var result = mt.setStorage({ key: key, data: value });
        if (result && typeof result.catch === 'function') result.catch(function () {});
      } catch (error) { /* 持久化失败时内存仍可继续本次会话 */ }
    }
  }

  function remove(key) {
    delete memory[key];
    try { if (local) local.removeItem(key); } catch (error) {}
    var mt = miniTool();
    if (mt && typeof mt.removeStorage === 'function') {
      try {
        var result = mt.removeStorage({ key: key });
        if (result && typeof result.catch === 'function') result.catch(function () {});
      } catch (error) {}
    }
  }

  function hydrate() {
    var mt = miniTool();
    if (!mt || typeof mt.getStorage !== 'function') return Promise.resolve();
    return new Promise(function (resolve) {
      var settled = false;
      function finish() {
        if (settled) return;
        settled = true;
        resolve();
      }
      // 容器 API 异常时不要阻塞首屏；800ms 后使用本地/内存兜底。
      setTimeout(finish, 800);
      try {
        var request = mt.getStorage({ key: KEY });
        if (!request || typeof request.then !== 'function') { finish(); return; }
        request.then(function (result) {
          var stored = result && typeof result.data === 'string' ? result.data : '';
          if (stored) {
            memory[KEY] = stored;
            try { if (local) local.setItem(KEY, stored); } catch (error) {}
          } else {
            // 一次性迁移浏览器旧数据；迁移后仍以 Storage 为主。
            var legacy = readLocal(KEY);
            if (legacy) {
              try { mt.setStorage({ key: KEY, data: legacy }); } catch (error) {}
            }
          }
          finish();
        }).catch(function () { finish(); });
      } catch (error) { finish(); }
    });
  }

  window.__JX3Storage = { get: get, set: set, remove: remove };
  window.__JX3StorageReady = hydrate();
}());
