var A=(e,h,s)=>new Promise((g,i)=>{var m=t=>{try{u(s.next(t))}catch(f){i(f)}},k=t=>{try{u(s.throw(t))}catch(f){i(f)}},u=t=>t.done?g(t.value):Promise.resolve(t.value).then(m,k);u((s=s.apply(e,h)).next())});import{d as q,a0 as z,r as O,j as c,v as D,o as p,c as _,A as F,x as G,l as w,a as d,k as o,w as n,n as C,t as E,J as R,q as j,F as N,y as J,z as H,_ as K,B as Q,E as M,p as U,f as W}from"./index.5a90395c.js";import{u as X}from"./material.85a80f57.js";import{c as Y}from"./creative.ea528d59.js";import Z from"./material-group-pop.5469c6cf.js";import"./keyword.011c6f30.js";import"./lodash.a9e36c73.js";import"./config.d0c812d6.js";const ee=e=>(U("data-v-6ef8838c"),e=e(),W(),e),oe={class:"material_group"},te={class:"name"},le=ee(()=>d("span",null,"\u5168\u90E8",-1)),ne={class:"filelist","infinite-scroll-immediate":!1},se=["onClick"],ae={class:"name"},ie={class:"text-ellipsis-1"},ue={class:"num"},re=q({__name:"material-group",props:{showAll:{type:Boolean,default:!0},showTotal:{type:Boolean,default:!0},fileGroup:{type:Array,default:[]},fileTotal:{type:Number,default:0},activeName:{type:String,required:!0},groupLoading:{type:Boolean,default:!1}},emits:["nextPage","renewGroup"],setup(e,{emit:h}){const s=h,g=X(),{groupId:i,loading:m}=z(g),{getlistMedia:k}=g,u=O(),t=r=>{m.value||(i.value=r,k())},f=()=>{s("nextPage")},S=r=>{u.value.dialogVisible=!0,u.value.groupId=r},b=r=>{Q.alert("\u5220\u9664\u7D20\u6750\u7EC4\u540E\u7D20\u6750\u7EC4\u4E0B\u7684\u7D20\u6750\u4E5F\u4F1A\u6E05\u7A7A\uFF0C\u786E\u5B9A\u5220\u9664\u8BE5\u7D20\u6750\u7EC4\uFF1F","\u63D0\u793A",{type:"warning",showCancelButton:!0}).then(()=>A(this,null,function*(){let{code:a,msg:v}=yield Y({id:r});a==200?(M.success("\u5220\u9664\u6210\u529F"),s("renewGroup"),i.value===r&&t("")):M.error(v)})).catch(()=>{console.log("\u53D6\u6D88\u5220\u9664")})};return(r,a)=>{const v=c("FolderOpened"),y=c("el-icon"),I=c("MoreFilled"),x=c("el-dropdown-item"),T=c("el-dropdown-menu"),$=c("el-dropdown"),P=c("el-scrollbar"),V=D("infinite-scroll"),L=D("loading");return p(),_(N,null,[F((p(),_("div",oe,[e.showAll?(p(),_("div",{key:0,class:G(["all",{select:w(i)==="",disable:w(m)}]),onClick:a[0]||(a[0]=l=>t(""))},[d("div",te,[o(y,null,{default:n(()=>[o(v)]),_:1}),C("\xA0 "),le]),F(d("div",{class:"num"},E(e.fileTotal),513),[[R,e.showTotal]])],2)):j("",!0),o(P,null,{default:n(()=>[F((p(),_("div",ne,[(p(!0),_(N,null,J(e.fileGroup,l=>(p(),_("div",{class:G(["item",{select:w(i)===l.id,disable:w(m)}]),key:l.id,onClick:B=>t(l.id)},[d("div",ae,[o(y,null,{default:n(()=>[o(v)]),_:1}),C("\xA0 "),d("span",ie,E(l.name),1)]),d("div",ue,[d("span",null,E(l.medianum),1),o($,{trigger:"click"},{dropdown:n(()=>[o(T,null,{default:n(()=>[o(x,{icon:"EditPen",onClick:B=>S(l.id)},{default:n(()=>[C("\u7F16\u8F91")]),_:2},1032,["onClick"]),o(x,{icon:"Delete",onClick:B=>b(l.id)},{default:n(()=>[C("\u5220\u9664")]),_:2},1032,["onClick"])]),_:2},1024)]),default:n(()=>[o(y,{onClick:a[1]||(a[1]=H(()=>{},["stop"]))},{default:n(()=>[o(I)]),_:1})]),_:2},1024)])],10,se))),128))])),[[V,f]])]),_:1})])),[[L,e.groupLoading]]),o(Z,{ref_key:"groupPop",ref:u,activeName:e.activeName,onRenewGroup:a[2]||(a[2]=l=>s("renewGroup"))},null,8,["activeName"])],64)}}}),we=K(re,[["__scopeId","data-v-6ef8838c"]]);export{we as default};