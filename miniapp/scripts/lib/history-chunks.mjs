/**
 * 云开发 databaseupdate 的单次 query 上限约 512KB，超过会被截断并报
 * “SymanticError: no action found”。这里把一天的历史拆成多篇文档：
 *   history_DATE       meta + base（+ chunks 字段）
 *   history_DATE_sN    第 N 片 samples
 */
export const SAFE_QUERY_BYTES = 420 * 1024;
export const CHUNK_BYTES = 380 * 1024;

export function queryOf(docId, data) {
  return 'db.collection("prices").doc("' + docId + '").set({data:' + JSON.stringify(data) + '})';
}

export function buildHistoryDocs(date, day) {
  const mainId = 'history_' + date;
  if (Buffer.byteLength(queryOf(mainId, day)) <= SAFE_QUERY_BYTES) {
    return [{ id: mainId, data: day }];
  }
  const head = Object.assign({}, day, { samples: [] });
  const groups = [];
  let cur = [], curBytes = 0;
  for (const sample of day.samples || []) {
    const size = Buffer.byteLength(JSON.stringify(sample)) + 1;
    if (cur.length && curBytes + size > CHUNK_BYTES) { groups.push(cur); cur = []; curBytes = 0; }
    cur.push(sample); curBytes += size;
  }
  if (cur.length) groups.push(cur);
  head.chunks = groups.length;
  head.sampleCount = (day.samples || []).length;
  const docs = [{ id: mainId, data: head }];
  groups.forEach(function (list, i) {
    docs.push({ id: mainId + '_s' + i, data: { schemaVersion: day.schemaVersion, date: date, part: i, samples: list } });
  });
  return docs;
}
