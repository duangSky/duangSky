var ce=Object.defineProperty;var X=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var Y=(n,r,t)=>r in n?ce(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,Z=(n,r)=>{for(var t in r||(r={}))_e.call(r,t)&&Y(n,t,r[t]);if(X)for(var t of X(r))pe.call(r,t)&&Y(n,t,r[t]);return n};var N=(n,r,t)=>new Promise((A,e)=>{var y=f=>{try{d(t.next(f))}catch(F){e(F)}},C=f=>{try{d(t.throw(f))}catch(F){e(F)}},d=f=>f.done?A(f.value):Promise.resolve(f.value).then(y,C);d((t=t.apply(n,r)).next())});import{d as z,j as c,o as D,b as S,w as a,k as l,c as O,y as T,a as s,x as me,F as U,_ as P,r as h,T as fe,n as G,E as I,a0 as q,i as ve,W as be,l as m,q as he,t as ee,p as Ce,f as De}from"./index.5a90395c.js";import{u as ye}from"./mixShear.0f781a9f.js";import{u as ke}from"./material.85a80f57.js";import{u as Ae}from"./audio.e4943d80.js";import Fe from"./work-material.804e73f4.js";import Ve from"./work-cover.7e0b8fb2.js";import{o as ge,a as we}from"./oral-dub.690c2ba4.js";import{b as Se}from"./aitools.ae73576d.js";import{H as Me}from"./HotMusic.c1d9e9b3.js";import{I as Ee}from"./ImportMeterial.9b103172.js";import Re from"./background-music.c6be600d.js";import{p as Be}from"./make.3dd199c4.js";import{t as Oe}from"./index.0e306189.js";import"./creative.ea528d59.js";import"./keyword.011c6f30.js";import"./Pagination.554cb32d.js";import"./material-card.f7d63667.js";import"./MediumPreview.37c6af48.js";import"./background-config.61fe2eab.js";import"./music-card.2b625142.js";import"./dateUtil.67c53eed.js";import"./index.89ddba91.js";import"./index.browser.2b0920b0.js";import"./AliCloudUpload.13488d40.js";import"./audio.531569af.js";const Ie={class:"selectedIco"},xe=z({__name:"oral-list",props:{orals:{type:Array,default:[]},slescted:{type:Array,defalut:[]}},emits:["handleSelect"],setup(n,{expose:r,emit:t}){const A=t,e=n,y=d=>{A("handleSelect",d)},C=d=>e.slescted.some(f=>f.Voice===d.Voice);return r({isSelected:C}),(d,f)=>{const F=c("Check"),B=c("el-icon"),M=c("el-col"),E=c("el-row"),R=c("el-scrollbar");return D(),S(R,null,{default:a(()=>[l(E,null,{default:a(()=>[(D(!0),O(U,null,T(n.orals,V=>(D(),S(M,{span:12,key:V.Voice,onClick:_=>y(V)},{default:a(()=>[s("div",{class:me(["item",{selected:C(V)}])},[l(ge,{oral:V},null,8,["oral"]),s("div",Ie,[l(B,null,{default:a(()=>[l(F)]),_:1})])],2)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})}}}),Te=P(xe,[["__scopeId","data-v-5fd3b2f8"]]);const Ue={class:"addBtn"},$e=z({__name:"OralDub",emits:["handleAddOral"],setup(n,{expose:r,emit:t}){const A=h(!1),e=h(),y=h([]),C=h(""),d=h([]),f=t,F=()=>{B()},B=()=>N(this,null,function*(){let{code:_,data:v,msg:w}=yield Se();_==200?(C.value=v.VoiceGroups[0].Type,y.value=v.VoiceGroups,console.log(y.value)):I.error(w)}),M=fe(()=>{let _=y.value.find(v=>v.Type===C.value);return console.log((_==null?void 0:_.VoiceList)||[]),(_==null?void 0:_.VoiceList)||[]}),E=_=>{e.value.isSelected(_)?d.value=d.value.filter(v=>v.Voice!==_.Voice):d.value.push(_)},R=()=>{f("handleAddOral",d.value),I.success("\u6DFB\u52A0\u6210\u529F"),A.value=!1},V=()=>{d.value=[]};return r({drawer:A}),(_,v)=>{const w=c("el-tab-pane"),$=c("el-tabs"),H=c("el-button"),x=c("el-drawer");return D(),S(x,{modelValue:A.value,"onUpdate:modelValue":v[1]||(v[1]=g=>A.value=g),title:"\u9009\u62E9\u53E3\u64AD\u914D\u97F3",size:"420",onOpen:F,onClose:V},{default:a(()=>[l($,{modelValue:C.value,"onUpdate:modelValue":v[0]||(v[0]=g=>C.value=g)},{default:a(()=>[(D(!0),O(U,null,T(y.value,g=>(D(),S(w,{key:g.Type,label:g.Type,name:g.Type},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),l(Te,{ref_key:"oralsRef",ref:e,orals:M.value,slescted:d.value,onHandleSelect:E},null,8,["orals","slescted"]),s("div",Ue,[l(H,{type:"primary",onClick:R},{default:a(()=>[G("\u6DFB\u52A0\u53E3\u64AD\u914D\u97F3")]),_:1})])]),_:1},8,["modelValue"])}}}),He=P($e,[["__scopeId","data-v-07345c78"]]);const W=n=>(Ce("data-v-1b22d30e"),n=n(),De(),n),je={class:"third"},Le={class:"workMaterial"},Ne={class:"wordCover"},qe={class:"oralDub"},Ge={class:"top"},ze={class:"selected"},Pe=W(()=>s("span",null,"\u9009\u62E9\u914D\u97F3",-1)),We={class:"backgroundMusic"},Je={class:"top"},Ke={class:"selected"},Qe=W(()=>s("span",null,"\u70ED\u95E8\u97F3\u4E50",-1)),Xe=W(()=>s("span",null,"\u4E0A\u4F20\u97F3\u4E50",-1)),Ye={class:"foot_btns"},Ze=z({__name:"third-config",emits:["handleStepChange"],setup(n,{emit:r}){const t=ye(),A=ke(),{form:e}=q(t),{selectMaterals:y,screen:C}=q(A),d=Ae(),{audioRef:f}=q(d),{handleInit:F}=d,B=r,M=ve(),E=h(),R=h(),V=h(),_=h(),v=h(),w=h(),$=h([{value:1,label:"\u667A\u80FD\u7D20\u6750"},{value:2,label:"\u7D20\u6750\u7EC4\u6A21\u5F0F"},{value:3,label:"\u7D20\u6750\u6A21\u5F0F"}]),H=h([{value:0,label:"\u667A\u80FD\u5C01\u9762"},{value:1,label:"\u81EA\u5B9A\u4E49\u5C01\u9762"}]),x=u=>{e.value.data[u]=[],u==="Material"&&(e.value.data.MaterialGroup=[])},g=()=>{R.value.drawer=!0},le=u=>{let o=[...e.value.data.VoiceSubtitle,...u],b={};e.value.data.VoiceSubtitle=o.reduce((k,p)=>(b[p.Voice]||(b[p.Voice]=k.push(p)),k),[])},oe=()=>{V.value.drawer=!0},te=u=>{let o=[...e.value.data.Audio,...u],b={};e.value.data.Audio=o.reduce((k,p)=>(b[p.id]||(b[p.id]=k.push(p)),k),[])},ae=()=>{C.value.type="audio",C.value.uploadedData=["audio"],y.value=e.value.data.Audio,_.value.drawer=!0},ue=u=>{e.value.data.Audio=e.value.data.Audio.filter(o=>o.id!==u.id)},se=u=>{if(!u)return;let o=[...e.value.data.Audio,...y.value],b={};e.value.data.Audio=o.reduce((k,p)=>(b[p.id]||(b[p.id]=k.push(p)),k),[]),I.success("\u7D20\u6750\u5BFC\u5165\u6210\u529F")},J=u=>{B("handleStepChange",u)},ne=()=>N(this,null,function*(){try{yield E.value.validate(),yield v.value.formRef.validate(),w.value&&(yield w.value.formRef.validate()),console.log("\u4FDD\u5B58\u9884\u89C8",e.value);let u=Z({},e.value);M.query.id&&(u.id=M.query.id),console.log(u);let{code:o,msg:b}=yield Be(u);o==200?(I.success("\u4EFB\u52A1\u4FDD\u5B58\u6210\u529F"),J(1)):I.error(b)}catch(u){console.log(u,e.value)}}),re=()=>{F()};return be(()=>{F()}),(u,o)=>{const b=c("el-option"),k=c("el-select"),p=c("el-form-item"),K=c("el-switch"),j=c("DArrowRight"),L=c("el-icon"),de=c("el-form"),ie=c("el-scrollbar"),Q=c("el-button");return D(),O("div",je,[l(ie,null,{default:a(()=>[l(de,{class:"outForm",ref_key:"formRef",ref:E,model:m(e),rules:m(Oe)},{default:a(()=>[l(p,{label:"\u4F5C\u54C1\u7D20\u6750\u914D\u7F6E",prop:"data.MaterialConfig"},{default:a(()=>[s("div",Le,[l(k,{modelValue:m(e).data.MaterialConfig,"onUpdate:modelValue":o[0]||(o[0]=i=>m(e).data.MaterialConfig=i),onChange:o[1]||(o[1]=i=>x("Material"))},{default:a(()=>[(D(!0),O(U,null,T($.value,i=>(D(),S(b,{key:i.value,value:i.value,label:i.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),l(Fe,{ref_key:"workMaterialRef",ref:v},null,512)])]),_:1}),l(p,{label:"\u4F5C\u54C1\u5C01\u9762\u7D20\u6750",prop:"video_cover"},{default:a(()=>[s("div",Ne,[l(k,{modelValue:m(e).video_cover,"onUpdate:modelValue":o[2]||(o[2]=i=>m(e).video_cover=i),onChange:o[3]||(o[3]=i=>x("VideoCover"))},{default:a(()=>[(D(!0),O(U,null,T(H.value,i=>(D(),S(b,{key:i.value,value:i.value,label:i.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),m(e).video_cover?(D(),S(Ve,{key:0,ref_key:"workCoverRef",ref:w},null,512)):he("",!0)])]),_:1}),l(p,{label:"\u53E3\u64AD\u914D\u97F3",prop:"voice_subtitle"},{default:a(()=>[s("div",qe,[s("div",Ge,[l(K,{modelValue:m(e).voice_subtitle,"onUpdate:modelValue":o[4]||(o[4]=i=>m(e).voice_subtitle=i)},null,8,["modelValue"]),s("span",ze,"\u5DF2\u9009\uFF1A"+ee(m(e).data.VoiceSubtitle.length||"\u5168\u90E8"),1),s("div",{class:"pick",onClick:g},[Pe,l(L,null,{default:a(()=>[l(j)]),_:1})])]),l(we,{orals:m(e).data.VoiceSubtitle},null,8,["orals"])])]),_:1}),l(p,{label:"\u80CC\u666F\u97F3\u4E50",prop:"audio"},{default:a(()=>[s("div",We,[s("div",Je,[l(K,{modelValue:m(e).audio,"onUpdate:modelValue":o[5]||(o[5]=i=>m(e).audio=i)},null,8,["modelValue"]),s("span",Ke,"\u5DF2\u9009\uFF1A"+ee(m(e).data.Audio.length||"\u5168\u90E8"),1),s("div",{class:"pick hot",onClick:oe},[Qe,l(L,null,{default:a(()=>[l(j)]),_:1})]),s("div",{class:"pick",onClick:ae},[Xe,l(L,null,{default:a(()=>[l(j)]),_:1})])]),l(Re,{musics:m(e).data.Audio,onHandleDelete:ue},null,8,["musics"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),s("div",Ye,[l(Q,{plain:"",onClick:o[6]||(o[6]=i=>J(-1))},{default:a(()=>[G("\u4E0A\u4E00\u6B65")]),_:1}),l(Q,{type:"primary",onClick:ne},{default:a(()=>[G("\u4FDD\u5B58\u4EFB\u52A1")]),_:1})]),s("audio",{ref_key:"audioRef",ref:f,onEnded:re},null,544),l(He,{ref_key:"oralDubRed",ref:R,onHandleAddOral:le},null,512),l(Me,{ref_key:"hotMusicRef",ref:V,onHandleAddMusic:te},null,512),l(Ee,{ref_key:"importMeterial",ref:_,onCloseDrawer:se},null,512)])}}}),gl=P(Ze,[["__scopeId","data-v-1b22d30e"]]);export{gl as default};
