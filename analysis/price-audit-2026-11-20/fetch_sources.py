import urllib.parse, urllib.request, json, re, html, time, ssl, os
from lib import ITEMS, CLASS
ctx=ssl._create_unverified_context()
CACHE='raw/item-sources.json'
data=json.load(open(CACHE)) if os.path.exists(CACHE) else {}
def clean(s):
    s=re.sub(r'<[^>]+>','',s or ''); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
names=sorted({it['name'] for it in ITEMS.values() if it['kind']=='material'})
for n in names:
    if n in data: continue
    url='https://node.jx3box.com/item/search?keyword='+urllib.parse.quote(n)+'&client=std&per_page=20'
    try:
        d=json.load(urllib.request.urlopen(url,timeout=20,context=ctx))
        rows=d.get('data',{}).get('data',[])
        exact=[r for r in rows if r.get('Name')==n]
        rec=[]
        for r in (exact or [])[:3]:
            rec.append(dict(id=r.get('id'),name=r.get('Name'),quality=r.get('Quality'),
                            desc=clean(r.get('Desc'))[:300],sources=[g.get('label') for g in (r.get('GetSource') or [])],
                            price=r.get('Price')))
        data[n]=rec
        print(n,len(rec),rec[0]['sources'] if rec else 'NO MATCH')
    except Exception as e:
        data[n]=[{'error':str(e)}]
        print(n,'ERR',e)
    time.sleep(0.15)
json.dump(data,open(CACHE,'w'),ensure_ascii=False,indent=1)
print('cached',len(data))
