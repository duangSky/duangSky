var p=(c,l,o)=>new Promise((_,r)=>{var m=e=>{try{a(o.next(e))}catch(s){r(s)}},d=e=>{try{a(o.throw(e))}catch(s){r(s)}},a=e=>e.done?_(e.value):Promise.resolve(e.value).then(m,d);a((o=o.apply(c,l)).next())});import{o as F}from"./aitools.ae73576d.js";import{g as y}from"./config.a0a543ec.js";import{d as C,r as g,v as x,A as k,o as i,c as n,F as D,y as B,a as t,t as u,x as E,l as h,q as N,_ as S,E as v}from"./index.5a90395c.js";const A={class:"history"},V={class:"top"},q={class:"name"},w={class:"type"},z={class:"read"},H={class:"mp3"},T=["src"],I={key:0,class:"save"},L=["onClick"],M={key:1,class:"empty"},U=C({__name:"sound-history",props:{historys:{type:Array,require:!0}},emits:["loadNext"],setup(c,{emit:l}){const o=g(!0),_=l,r=d=>p(this,null,function*(){if(!o.value)return;o.value=!1;let{code:a,msg:e}=yield F({id:d.id});a==200?v.success("\u4FDD\u5B58\u58F0\u97F3\u6210\u529F"):v.error(e),o.value=!0}),m=()=>{_("loadNext")};return(d,a)=>{const e=x("infinite-scroll");return k((i(),n("div",A,[c.historys.length?(i(!0),n(D,{key:0},B(c.historys,(s,f)=>(i(),n("div",{class:"h_item",key:f},[t("div",V,[t("span",q,u(s.voice_name),1),t("span",{class:E(["type",h(y)(s.status).className])},u(h(y)(s.status).txt),3)]),t("div",w,[t("span",null,u(s.gender==="male"?"\u7537":"\u5973"),1),t("span",null,u(s.voice_desc),1)]),t("div",z,u(s.audio_info[0].audioText),1),t("div",H,[t("audio",{controls:"",src:s.audio_info[0].audioUrl},null,8,T)]),s.status===3?(i(),n("div",I,[t("span",{onClick:$=>r(s)},"\u4FDD\u5B58\u58F0\u97F3",8,L)])):N("",!0)]))),128)):(i(),n("div",M,"\u751F\u6210\u7684\u58F0\u97F3\u5C06\u5728\u8FD9\u91CC\u5C55\u793A\u5594\uFF5E"))])),[[e,m]])}}}),K=S(U,[["__scopeId","data-v-7299263e"]]);export{K as default};