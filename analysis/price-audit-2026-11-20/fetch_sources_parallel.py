import urllib.parse, urllib.request, json, re, html, ssl, os
from concurrent.futures import ThreadPoolExecutor, as_completed
from lib import ITEMS
ctx=ssl._create_unverified_context()
CACHE='raw/item-sources.json'
data=json.load(open(CACHE)) if os.path.exists(CACHE) else {}
def clean(s):
    s=re.sub(r'<[^>]+>','',s or ''); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
names=sorted({it['name'] for it in ITEMS.values() if it['kind']=='material'})
todo=[n for n in names if n not in data]
def fetch(n):
    url='https://node.jx3box.com/item/search?keyword='+urllib.parse.quote(n)+'&client=std&per_page=20'
    try:
        d=json.load(urllib.request.urlopen(url,timeout=6,context=ctx))
        rows=d.get('data',{}).get('data',[])
        exact=[r for r in rows if r.get('Name')==n]
        rec=[]
        for r in (exact or [])[:3]:
            rec.append(dict(id=r.get('id'),name=r.get('Name'),quality=r.get('Quality'),
                            desc=clean(r.get('Desc'))[:300],sources=[g.get('label') for g in (r.get('GetSource') or [])],
                            price=r.get('Price')))
        return n,rec
    except Exception as e:
        return n,[{'error':str(e)}]
print('todo',len(todo))
with ThreadPoolExecutor(max_workers=10) as ex:
    futs={ex.submit(fetch,n):n for n in todo}
    for k,f in enumerate(as_completed(futs),1):
        n,rec=f.result(); data[n]=rec
        print(k,n,rec[0]['sources'] if rec and 'sources' in rec[0] else (rec[0].get('error') if rec else 'NO MATCH'),flush=True)
        if k%10==0: json.dump(data,open(CACHE,'w'),ensure_ascii=False,indent=1)
json.dump(data,open(CACHE,'w'),ensure_ascii=False,indent=1)
print('cached',len(data))
