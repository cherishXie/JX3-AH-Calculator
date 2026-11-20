/* 物价走势数据订阅：同一时刻只发起一次云端/缓存加载，组件间共享结果。 */
import { useEffect, useState } from 'react';
import { getTrendData, getTrendMeta, loadTrendData } from './trends';

let loading = null;

export function useTrendData() {
  const [data, setData] = useState(getTrendData());
  const [meta, setMeta] = useState(getTrendMeta());

  useEffect(function () {
    let alive = true;
    if (!loading) {
      loading = loadTrendData(false).catch(function () { return null; });
    }
    loading.then(function () {
      if (!alive) return;
      setData(getTrendData());
      setMeta(getTrendMeta());
    });
    return function () { alive = false; };
  }, []);

  return { data: data, meta: meta };
}
