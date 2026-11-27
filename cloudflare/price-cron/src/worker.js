const OWNER = 'cherishXie';
const REPO = 'JX3-AH-Calculator';
const WORKFLOW = 'update-jx3-prices.yml';
const FEEDBACK_MAX = 2000;
const FEEDBACK_CONTEXT_MAX = 4000;

async function triggerPriceUpdate(env) {
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW}/dispatches`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'jx3-price-cloud-cron',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ref: 'main' })
    }
  );

  if (!response.ok) {
    const body = await response.text();
    console.error('GitHub dispatch failed', response.status, body);
    throw new Error(`GitHub dispatch failed: ${response.status}`);
  }
  console.log('GitHub workflow_dispatch sent');
}

function allowedOrigin(origin) {
  if (!origin) return true;
  if (origin === 'https://cherishxie.github.io') return true;
  try {
    const url = new URL(origin);
    return (url.hostname === 'localhost' || url.hostname === '127.0.0.1') &&
      (url.protocol === 'http:' || url.protocol === 'https:');
  } catch (err) {
    return false;
  }
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || 'https://cherishxie.github.io',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
    'Content-Type': 'application/json; charset=utf-8'
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: corsHeaders(origin)
  });
}

function textLine(value, max) {
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim().slice(0, max || 500);
}

function buildFeedbackBody(text, context) {
  const c = context && typeof context === 'object' ? context : {};
  const rows = [
    ['页面', c.page],
    ['页面标题', c.title],
    ['区服', c.server],
    ['应用版本', c.appVersion],
    ['数据版本', c.dataVersion],
    ['行情更新', c.priceUpdatedAt],
    ['视口', c.viewport],
    ['语言 / 时区', [c.language, c.timezone].filter(Boolean).join(' / ')],
    ['PWA 模式', c.standalone ? 'standalone' : 'browser'],
    ['设备', [c.platform, c.hardwareConcurrency ? c.hardwareConcurrency + ' 核' : '', c.deviceMemory ? c.deviceMemory + ' GB' : ''].filter(Boolean).join(' / ')],
    ['网络', c.connection],
    ['匿名客户端', c.clientId],
    ['浏览器', c.userAgent],
    ['时间', c.createdAt]
  ];
  const body = '## 用户反馈\n\n' + text + '\n\n---\n### 页面环境\n' +
    rows.filter(function (row) { return row[1]; }).map(function (row) {
      return '- ' + row[0] + '：' + textLine(row[1], 700);
    }).join('\n') + '\n';
  return body.slice(0, FEEDBACK_CONTEXT_MAX + 2400);
}

async function createIssueDirect(env, payload) {
  if (!env.GITHUB_TOKEN) throw new Error('missing GITHUB_TOKEN');
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'jx3-feedback-worker',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: payload.title, body: payload.body })
  });
  if (!response.ok) {
    const body = await response.text();
    console.error('GitHub issue create failed', response.status, body);
    throw new Error(`GitHub issue create failed: ${response.status}`);
  }
  console.log('GitHub issue created directly');
}

async function handleFeedback(request, env) {
  const origin = request.headers.get('Origin') || '';
  if (origin && !allowedOrigin(origin)) {
    return new Response('forbidden', { status: 403 });
  }
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method not allowed' }, 405, origin);
  }

  // 简单按 IP 限流：每个边缘节点 60 秒最多一次，防止公开接口被刷。
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  let cache = null;
  try { cache = caches.default; } catch (err) { cache = null; }
  if (cache) {
    const key = new Request('https://feedback-rate.internal/' + encodeURIComponent(ip));
    if (await cache.match(key)) {
      return json({ ok: false, error: '提交太频繁，请 1 分钟后再试' }, 429, origin);
    }
    await cache.put(key, new Response('1', { headers: { 'Cache-Control': 'max-age=60' } }));
  }

  let data;
  try {
    data = await request.json();
  } catch (err) {
    return json({ ok: false, error: 'invalid json' }, 400, origin);
  }
  // 蜜罐字段：机器人通常会把隐藏字段填满。
  if (data && data.website) return json({ ok: true }, 200, origin);
  const text = String((data && data.text) || '').trim();
  if (!text) return json({ ok: false, error: '反馈内容不能为空' }, 400, origin);
  if (text.length > FEEDBACK_MAX) {
    return json({ ok: false, error: '反馈内容最多 ' + FEEDBACK_MAX + ' 字' }, 400, origin);
  }
  const title = ('[反馈] ' + (text.split('\n').map(function (line) { return line.trim(); }).filter(Boolean)[0] || '用户反馈')).slice(0, 100);
  const body = buildFeedbackBody(text, data && data.context);
  try {
    await createIssueDirect(env, { title: title, body: body });
  } catch (err) {
    console.error('Feedback submit failed', err.message);
    return json({ ok: false, error: '自动提交暂不可用，请稍后再试或使用 GitHub 预填页' }, 502, origin);
  }
  return json({ ok: true }, 200, origin);
}

export default {
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(triggerPriceUpdate(env));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/feedback') return handleFeedback(request, env);
    if (request.method === 'POST' && url.pathname === '/trigger') {
      const key = request.headers.get('x-trigger-key') || '';
      if (!env.TRIGGER_KEY || key !== env.TRIGGER_KEY) {
        return new Response('forbidden', { status: 403 });
      }
      await triggerPriceUpdate(env);
      return new Response('triggered', { status: 200 });
    }
    return new Response('jx3 price cloud cron', { status: 200 });
  }
};
