var h=(k,g,s)=>new Promise((d,r)=>{var n=o=>{try{i(s.next(o))}catch(c){r(c)}},f=o=>{try{i(s.throw(o))}catch(c){r(c)}},i=o=>o.done?d(o.value):Promise.resolve(o.value).then(n,f);i((s=s.apply(k,g)).next())});import{_ as q,d as W,h as U,r as a,i as j,W as G,j as v,o as y,b as x,w as u,a as p,t as b,k as l,n as D,q as A,E as w}from"./index.5a90395c.js";import{_ as I}from"./AliVideo.084ed262.js";import K from"./create-script-pop.f4508e0c.js";import $ from"./appart-detail.f0c93e52.js";import{g as H,a as J}from"./aitools.ae73576d.js";import"./lodash.a9e36c73.js";import"./tag-collapse.be14901a.js";import"./useCopyToClipboard.fba770f6.js";const L={class:"detail_top mb-4"},O={class:"left"},Q={class:"name"},X={class:"size"},Y={class:"video_cover"},Z={class:"btns"},z=W({__name:"apartDetail",setup(k){const g=U(),s=a(""),d=a(0),r=a(""),n=a(!1),f=a(),i=a([]),o=a([]),c=a([]),B=a(!1),V=j(),m=a(),C=a(),F=a(!0);(()=>h(this,null,function*(){let{code:t,data:e,msg:_}=yield H({id:V.query.id});t==200?(s.value=e.name,d.value=e.size,r.value=e.media_url,i.value=e.tag_parent,o.value=e.tag,c.value=e.result.splitVideoPartResults):w.error(_),B.value=!0}))();const M=t=>{f.value.seek(t)},P=t=>{let e=1024;return t<e?t+"B":t<Math.pow(e,2)?(t/e).toFixed(2)+"KB":t<Math.pow(e,3)?(t/Math.pow(e,2)).toFixed(2)+"MB":t<Math.pow(e,4)?(t/Math.pow(e,3)).toFixed(2)+"G":(t/Math.pow(e,4)).toFixed(2)+"T"},R=()=>{if(n.value){w.warning("\u811A\u672C\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");return}n.value=!0,m.value.dialogVisible=!0,E()},E=()=>h(this,null,function*(){if(!F)return;F.value=!1;let{code:t,msg:e}=yield J({id:V.query.id});t==200?C.value=setTimeout(()=>{E()},1e3):t==201?(m.value.dialogVisible=!1,n.value=!1,setTimeout(()=>{g.push("/make/video/mineScript")},1e3)):(w.error(e),m.value.dialogVisible=!1,n.value=!1),F.value=!0});return G(()=>{C.value&&clearTimeout(C.value)}),(t,e)=>{const _=v("el-button"),S=v("el-col"),T=v("el-row"),N=v("PageWrapper");return y(),x(N,{regain:"\u62C6\u89E3\u8BE6\u60C5"},{default:u(()=>[p("div",L,[p("div",O,[p("div",Q,"\u89C6\u9891\u540D\u79F0\uFF1A"+b(s.value),1),p("div",X,"\u6587\u4EF6\u5927\u5C0F\uFF1A"+b(P(d.value)),1)]),l(_,{type:"primary"},{default:u(()=>[D("\u62C6\u89E3\u65B0\u89C6\u9891")]),_:1})]),l(T,{gutter:45},{default:u(()=>[l(S,{xs:24,sm:24,md:12,lg:7,xl:7},{default:u(()=>[p("div",Y,[r.value?(y(),x(I,{key:0,ref_key:"AliVideoRef",ref:f,url:r.value},null,8,["url"])):A("",!0)])]),_:1}),l(S,{xs:24,sm:24,md:12,lg:17,xl:17},{default:u(()=>[B.value?(y(),x($,{key:0,notPop:!0,scripts:i.value,tags:o.value,orals:c.value,onSetPlaylie:M},null,8,["scripts","tags","orals"])):A("",!0),p("div",Z,[l(_,{plain:""},{default:u(()=>[D("\u80CC\u666F\u97F3\u4E50\u63D0\u53D6")]),_:1}),l(_,{plain:"",onClick:R},{default:u(()=>[D("\u751F\u6210\u811A\u672C")]),_:1})]),l(K,{ref_key:"createScriptRef",ref:m},null,512)]),_:1})]),_:1})]),_:1})}}}),ce=q(z,[["__scopeId","data-v-3e921f14"]]);export{ce as default};
