var w=(V,C,d)=>new Promise((h,e)=>{var c=i=>{try{F(d.next(i))}catch(f){e(f)}},x=i=>{try{F(d.throw(i))}catch(f){e(f)}},F=i=>i.done?h(i.value):Promise.resolve(i.value).then(c,x);F((d=d.apply(V,C)).next())});import{d as J,a0 as y,h as K,r as v,ab as L,T as Q,j as g,v as W,o as D,b as S,w as _,A as X,c as Y,a as l,q as Z,t as s,l as n,k as r,n as ee,_ as ae,E as te}from"./index.5a90395c.js";import{u as le}from"./mixShear.0f781a9f.js";import{u as ue}from"./material.85a80f57.js";import{f as oe}from"./make.3dd199c4.js";import{c as ne,a as se,g as T,h as ie}from"./index.0e306189.js";import re from"./live-preview.59156950.js";import{c as de}from"./index.ae708507.js";import"./creative.ea528d59.js";import"./keyword.011c6f30.js";import"./plat_xhs.a7d0325b.js";const ce={class:"content"},pe={class:"head"},me={class:"details"},ve={class:"foot"},_e=J({__name:"mix-task-pop",setup(V,{expose:C}){const d=le(),h=ue(),{form:e,makeData:c}=y(d),{getkeywords:x}=h,{keywords:F}=y(h),{handleClear:i}=d,f=K(),B=v(!1),A=v(""),E=v(!1),k=v(!1),u=v({plat:"douyin",title:"",oral:"",topic:""}),M=v(L(se)),N=()=>{console.log("\u6253\u5F00\u62BD\u5C49"),R(),x()},R=()=>w(this,null,function*(){E.value=!0;let{code:o,data:a,msg:p}=yield oe({id:A.value});if(o==200){for(let t in e.value)t==="scene_title"||t==="video_title"||t==="voice_subtitle"||t==="audio"?e.value[t]=!!a[t]:e.value[t]=a[t];U()}else te.error(p);E.value=!1,k.value=!0}),U=()=>{let o=F.value.find(a=>a.id===e.value.keyword);for(let a in c.value)c.value[a]=o[a];j(),z(),O()},j=()=>{let o=T(c.value,e.value.data.Title,e.value.data.Title);u.value.title=o.join("")},z=()=>{let o=T(c.value,e.value.data.Subtitle,e.value.data.Subtitle);e.value.data.Subtitle.forEach((a,p)=>{let t=M.value.find(b=>b.label===a);(t==null?void 0:t.type)==="select"&&(o[p]=t.label)}),u.value.oral=o.join("")},O=()=>{let o=ie(c.value,e.value.data.VideoTags,e.value.video_tags_num);u.value.topic=o},P=()=>{console.log("\u5173\u95ED\u62BD\u5C49"),i()},I=Q(()=>Math.round(u.value.oral.length/3.5)),q=()=>{f.push(`/make/video/mixShear/mixShearEdit?id=${A.value}`)};return C({drawer:B,mixId:A}),(o,a)=>{const p=g("el-input"),t=g("el-form-item"),b=g("el-form"),$=g("el-button"),G=g("el-drawer"),H=W("loading");return D(),S(G,{modelValue:B.value,"onUpdate:modelValue":a[3]||(a[3]=m=>B.value=m),title:"\u67E5\u770B\u4EFB\u52A1",onOpen:N,onClosed:P},{default:_(()=>[X((D(),Y("div",ce,[l("div",pe,[k.value?(D(),S(re,{key:0,preview:u.value},null,8,["preview"])):Z("",!0),l("div",me,[l("span",null,"\u4EFB\u52A1\u540D\u79F0\uFF1A"+s(n(e).name),1),l("span",null,"\u89C6\u9891\u6BD4\u4F8B\uFF1A"+s(n(e).ratio),1),l("span",null,"\u7D20\u6750\u6BD4\u4F8B\uFF1A"+s(n(de)(n(e).scene_ratio)),1),l("span",null,"\u80CC\u666F\u6A21\u5F0F\uFF1A"+s(n(ne)(n(e).background)),1),l("span",null,"\u80CC\u666F\u6570\u91CF\uFF1A"+s(n(e).data.Background.length),1),l("span",null,"\u7D20\u6750\u6570\u91CF\uFF1A"+s(n(e).data.Material.length),1),l("span",null,"\u5C01\u9762\u6570\u91CF\uFF1A"+s(n(e).data.VideoCover.length),1),l("span",null,"\u97F3\u4E50\u6570\u91CF\uFF1A"+s(n(e).data.Audio.length||"\u5168\u90E8"),1),l("span",null,"\u53E3\u64AD\u6570\u91CF\uFF1A"+s(n(e).data.VoiceSubtitle.length||"\u5168\u90E8"),1),l("span",null,"\u4F5C\u54C1\u65F6\u957F\uFF1A\u2248 "+s(I.value)+"s",1)])]),r(b,{model:u.value,"label-position":"top"},{default:_(()=>[r(t,{label:"\u6807\u9898\u793A\u4F8B"},{default:_(()=>[r(p,{modelValue:u.value.title,"onUpdate:modelValue":a[0]||(a[0]=m=>u.value.title=m),type:"textarea",resize:"none",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u53E3\u64AD\u6587\u6848\u793A\u4F8B"},{default:_(()=>[r(p,{modelValue:u.value.oral,"onUpdate:modelValue":a[1]||(a[1]=m=>u.value.oral=m),type:"textarea",rows:4,resize:"none",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u4F5C\u54C1\u53D1\u5E03\u6807\u9898/\u8BDD\u9898"},{default:_(()=>[r(p,{modelValue:u.value.topic,"onUpdate:modelValue":a[2]||(a[2]=m=>u.value.topic=m),type:"textarea",rows:4,resize:"none",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),l("div",ve,[r($,{type:"primary",onClick:q},{default:_(()=>[ee("\u7F16\u8F91\u4EFB\u52A1")]),_:1})])])),[[H,E.value]])]),_:1},8,["modelValue"])}}}),Ve=ae(_e,[["__scopeId","data-v-abda7728"]]);export{Ve as default};