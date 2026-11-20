import urllib.request, json, ssl, os
from concurrent.futures import ThreadPoolExecutor, as_completed
from lib import ITEMS
ctx=ssl._create_unverified_context()
src=json.load(open('raw/item-sources.json'))
CACHE='raw/item-details.json'
data=json.load(open(CACHE)) if os.path.exists(CACHE) else {}
ids=[]
for name,recs in src.items():
    for r in recs:
        if r.get('id'): ids.append((name,r['id']))
ids=sorted(set(ids))
todo=[(n,i) for n,i in ids if i not in data]
def fetch(pair):
    n,i=pair
    url=f'https://node.jx3box.com/item/{i}?client=std'
    try:
        d=json.load(urllib.request.urlopen(url,timeout=5,context=ctx))
        it=d.get('data',{}).get('item',{})
        return i,dict(name=it.get('Name'),sources=[g.get('label') for g in (it.get('GetSource') or [])],desc=it.get('Desc'),price=it.get('Price'),quality=it.get('Quality'))
    except Exception as e:
        return i,{'error':str(e)}
print('todo',len(todo))
with ThreadPoolExecutor(max_workers=12) as ex:
    for k,f in enumerate(as_completed([ex.submit(fetch,p) for p in todo]),1):
        i,rec=f.result(); data[i]=rec
        if k%20==0: json.dump(data,open(CACHE,'w'),ensure_ascii=False,indent=1)
json.dump(data,open(CACHE,'w'),ensure_ascii=False,indent=1)
print('cached',len(data))
