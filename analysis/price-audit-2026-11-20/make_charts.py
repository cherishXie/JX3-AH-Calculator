import json, math, os
os.environ.setdefault('MPLCONFIGDIR', os.path.join(os.path.dirname(__file__), '.mplconfig'))
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib import font_manager
for f in ['/System/Library/Fonts/Hiragino Sans GB.ttc','/System/Library/Fonts/PingFang.ttc','/System/Library/Fonts/STHeiti Light.ttc']:
    if os.path.exists(f):
        try: font_manager.fontManager.addfont(f)
        except Exception: pass
plt.rcParams['font.sans-serif']=['Hiragino Sans GB','PingFang SC','Heiti TC','Arial Unicode MS']
plt.rcParams['axes.unicode_minus']=False
plt.rcParams['figure.dpi']=150
plt.rcParams['savefig.dpi']=200
plt.rcParams['axes.spines.top']=False
plt.rcParams['axes.spines.right']=False
plt.rcParams['axes.grid']=True
plt.rcParams['grid.alpha']=0.18
plt.rcParams['grid.linestyle']='--'

D=json.load(open('out/trends.json'))
T=json.load(open('out/tables.json'))['recipes']
times=D['times']; START=5
import datetime as dt
def parse(s): return dt.datetime.fromisoformat(s[:19])
xs=[parse(t) for t in times[START:]]

# 1 class index rebased
fig,ax=plt.subplots(figsize=(10.5,5.4))
colors={'一线材料':'#D99A2B','中间材料':'#2AA5B8','成品':'#A75BE0'}
for cl in ['一线材料','中间材料','成品']:
    vals=D['index'][cl][START:]
    reb=[v/vals[0]*100 for v in vals]
    ax.plot(xs,reb,label=cl,color=colors[cl],lw=2.1)
    ax.annotate(f"{reb[-1]:.0f}",(xs[-1],reb[-1]),textcoords='offset points',xytext=(8,0),color=colors[cl],fontsize=10,fontweight='bold',va='center')
ax.axhline(100,color='#888',lw=0.8)
ax.set_title('三类物品价格指数（2026-11-19 10:15 = 100，梦江南，目录修订后）',fontsize=13,loc='left')
ax.set_ylabel('价格指数')
ax.legend(frameon=False,ncol=3,loc='lower left')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%m-%d %H:%M'))
ax.xaxis.set_major_locator(mdates.HourLocator(interval=6))
fig.autofmt_xdate(rotation=0,ha='center')
fig.tight_layout(); fig.savefig('charts/01_class_index.png'); plt.close(fig)

# 2 skill perE
fig,ax=plt.subplots(figsize=(10.5,5.4))
skc={'duanzao':'#1D6FE0','fengren':'#A75BE0','zhiyao':'#2AA5B8','pengren':'#E06A2E','zijiang':'#7A9E2E'}
skn={'duanzao':'锻造','fengren':'缝纫','zhiyao':'制药','pengren':'烹饪','zijiang':'梓匠'}
for sk in skc:
    vals=D['skills'][sk]['perE'][START:]
    ax.plot(xs,vals,label=skn[sk],color=skc[sk],lw=2.1)
    ax.annotate(f"{vals[-1]:.1f}",(xs[-1],vals[-1]),textcoords='offset points',xytext=(8, {'duanzao':0,'fengren':8,'zhiyao':-8,'pengren':6,'zijiang':-6}[sk]),color=skc[sk],fontsize=10,fontweight='bold',va='center')
ax.axhline(0,color='#333',lw=0.9)
ax.set_title('各技艺固定配方篮子：中位精力收益（金/精力，梦江南，目录修订后）',fontsize=13,loc='left')
ax.set_ylabel('中位 金/精力')
ax.legend(frameon=False,ncol=5,loc='lower left',fontsize=9)
ax.xaxis.set_major_formatter(mdates.DateFormatter('%m-%d %H:%M'))
ax.xaxis.set_major_locator(mdates.HourLocator(interval=6))
fig.autofmt_xdate(rotation=0,ha='center')
fig.tight_layout(); fig.savefig('charts/02_skill_perenergy.png'); plt.close(fig)

# 3 scatter
fig,ax=plt.subplots(figsize=(10.5,6.2))
gcol={'A':'#2E9E78','B':'#E09A2B','C':'#9AA4B2'}
for g in ['C','B','A']:
    pts=[r for r in T if r['grade']==g and r['perE_cur'] is not None]
    ax.scatter([r['out_cov'] for r in pts],[r['perE_cur'] for r in pts],s=[max(18,min(140,r['energy']/6)) for r in pts],c=gcol[g],alpha=0.75,edgecolors='white',linewidths=0.6,label={'A':'A 可落地','B':'B 小批量/薄市','C':'C 纸面/不可落地'}[g])
for r in sorted([r for r in T if r['perE_cur']],key=lambda x:-x['perE_cur'])[:14]:
    ax.annotate(r['name'],(r['out_cov'],r['perE_cur']),textcoords='offset points',xytext=(5,4),fontsize=8,color='#333')
ax.axvline(8,color='#2E9E78',lw=0.9,ls=':')
ax.axhline(0,color='#333',lw=0.8)
ax.set_xlim(0,18); ax.set_ylim(-3,38)
ax.set_xlabel('成品报价覆盖区服数（17 服，越多越像有真实需求）')
ax.set_ylabel('当前 金/精力（2026-11-20 23:07）')
ax.set_title('精力收益 vs 成品流动性：右上角才是“又能赚又卖得掉”',fontsize=13,loc='left')
ax.legend(frameon=False,loc='upper right')
fig.tight_layout(); fig.savefig('charts/03_grade_scatter.png'); plt.close(fig)

# 4 portfolio bars
skills=['duanzao','fengren','zhiyao','pengren','zijiang']
A={'duanzao':(722,400),'fengren':(14670,2062),'zhiyao':(11470,2700),'pengren':(13894,2995),'zijiang':(4963,3000)}
AB={'duanzao':(8410,910),'fengren':(25115,2845),'zhiyao':(15688,2970),'pengren':(16448,3000),'zijiang':(6187,2986)}
fig,ax=plt.subplots(figsize=(10.5,5.4))
x=range(len(skills)); w=0.36
ax.bar([i-w/2 for i in x],[A[s][0] for s in skills],width=w,color='#9CCFC0',label='仅 A 级')
ax.bar([i+w/2 for i in x],[AB[s][0] for s in skills],width=w,color='#4B5563',label='A+B 级')
for i,s in enumerate(skills):
    ax.text(i-w/2,A[s][0]+400,f"{A[s][0]:,}\n{A[s][1]}E",ha='center',va='bottom',fontsize=8,color='#2E7D64')
    ax.text(i+w/2,AB[s][0]+400,f"{AB[s][0]:,}\n{AB[s][1]}E",ha='center',va='bottom',fontsize=8,color='#333')
ax.set_xticks(list(x)); ax.set_xticklabels([skn[s] for s in skills])
ax.set_ylabel('3000 精力可落地利润（金）')
ax.set_title('3000 精力压力测试：限售后各技艺能吃掉多少精力、赚多少',fontsize=13,loc='left')
from matplotlib.patches import Patch
ax.legend(handles=[Patch(facecolor='#9CCFC0',label='仅 A 级'),Patch(facecolor='#4B5563',label='A+B 级')],frameon=False,loc='upper left')
ax.set_ylim(0,29000)
fig.tight_layout(); fig.savefig('charts/04_portfolio.png'); plt.close(fig)
print('charts done')
