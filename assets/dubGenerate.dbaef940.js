var E=(C,n,t)=>new Promise((r,c)=>{var d=e=>{try{a(t.next(e))}catch(u){c(u)}},i=e=>{try{a(t.throw(e))}catch(u){c(u)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(d,i);a((t=t.apply(C,n)).next())});import V from"./dub-item.7ed1f200.js";import y from"./dub-set.ebfd43f1.js";import F from"./ai-creat-drawer.8389b67b.js";import{b as k}from"./aitools.ae73576d.js";import{_ as B,d as D,r as m,j as f,o as _,b,w as o,a as s,k as l,n as v,c as I,y as S,F as w,q as G,E as N}from"./index.5a90395c.js";const L={class:"dub"},P={class:"left"},U={class:"btns"},W={class:"ipts"},j={class:"right"},q=D({__name:"dubGenerate",setup(C){const n=m(),t=m([]),r=m([{txt:"\u5496\u5561\u5385\u5C45\u7136\u5728\u8FEA\u6851\u7279\u7684\u5E97\u91CC\u4E0D\u4F46\u80FD\u559D\u5230\u8FEA\u6851\u7279\u9650\u5B9A\u7684\u827E\u745E\u5361"},{txt:""}]),c=()=>{n.value.drawer=!0},d=()=>E(this,null,function*(){let{code:a,data:e,msg:u}=yield k();a==200?(t.value=e.VoiceGroups[0].VoiceList,console.log(t.value)):N.error(u)}),i=()=>{r.value.push({txt:""})};return d(),(a,e)=>{const u=f("el-button"),g=f("el-input"),x=f("PageWrapper");return _(),b(x,{regain:"AI\u914D\u97F3\u751F\u6210"},{default:o(()=>[s("div",L,[s("div",P,[s("div",U,[l(u,{onClick:i},{default:o(()=>[v("\u6DFB\u52A0\u5206\u6BB5")]),_:1}),l(u,null,{default:o(()=>[v("\u4E00\u952E\u6E05\u7A7A")]),_:1}),l(u,{type:"primary",onClick:c},{default:o(()=>[v("AI\u4E00\u952E\u521B\u4F5C")]),_:1})]),s("div",W,[(_(!0),I(w,null,S(r.value,(p,h)=>(_(),b(V,{key:h,item:p},{ipt:o(()=>[l(g,{modelValue:p.txt,"onUpdate:modelValue":A=>p.txt=A,maxlength:"300",type:"textarea",autosize:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["item"]))),128))])]),s("div",j,[t.value.length?(_(),b(y,{key:0,dubSell:t.value},null,8,["dubSell"])):G("",!0)])]),l(F,{ref_key:"AICreat",ref:n},null,512)]),_:1})}}}),O=B(q,[["__scopeId","data-v-532bf2cd"]]);export{O as default};