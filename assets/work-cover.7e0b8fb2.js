import{d as F,r as v,a0 as h,j as n,o as R,b,w as d,k as a,a as r,t as x,l as u,E as y,_ as I,p as M,f as B}from"./index.5a90395c.js";import{u as A}from"./material.85a80f57.js";import{u as E}from"./mixShear.0f781a9f.js";import j from"./background-config.61fe2eab.js";import{I as N}from"./ImportMeterial.9b103172.js";import{t as H,d as T}from"./index.0e306189.js";import"./creative.ea528d59.js";import"./keyword.011c6f30.js";import"./MediumPreview.37c6af48.js";import"./index.browser.2b0920b0.js";import"./AliCloudUpload.13488d40.js";import"./Pagination.554cb32d.js";import"./audio.531569af.js";const q=s=>(M("data-v-76263ec6"),s=s(),B(),s),z={class:"selectMaterial"},G={class:"top"},J={class:"selected"},K=q(()=>r("span",null,"\u9009\u62E9\u7D20\u6750",-1)),L=F({__name:"work-cover",setup(s,{expose:C}){const m=v(),p=v(),k=A(),D=E(),{selectMaterals:_,screen:f}=h(k),{form:e}=h(D),g=()=>{f.value.type="image",f.value.uploadedData=["image"],_.value=e.value.data.VideoCover,m.value.drawer=!0},w=l=>{if(!l)return;let c=[...e.value.data.VideoCover,..._.value],i={};e.value.data.VideoCover=c.reduce((o,t)=>(i[t.id]||(i[t.id]=o.push(t)),o),[]).map(o=>T(o)),y.success("\u7D20\u6750\u5BFC\u5165\u6210\u529F")},S=l=>{e.value.data.VideoCover=e.value.data.VideoCover.filter(c=>c.id!==l.id)};return C({formRef:p}),(l,c)=>{const i=n("DArrowRight"),o=n("el-icon"),t=n("el-form-item"),V=n("el-form");return R(),b(V,{class:"inForm",ref_key:"formRef",ref:p,model:u(e),rules:u(H),"label-width":"82"},{default:d(()=>[a(t,{label:"\u5DF2\u9009\u7D20\u6750",prop:"data.VideoCover"},{default:d(()=>[r("div",z,[r("div",G,[r("span",J,"\u5DF2\u9009\uFF1A"+x(u(e).data.VideoCover.length),1),r("div",{class:"pick",onClick:g},[K,a(o,null,{default:d(()=>[a(i)]),_:1})])]),a(j,{backgrounds:u(e).data.VideoCover,onHandleDelete:S},null,8,["backgrounds"])])]),_:1}),a(N,{ref_key:"meterialRef",ref:m,onCloseDrawer:w},null,512)]),_:1},8,["model","rules"])}}}),re=I(L,[["__scopeId","data-v-76263ec6"]]);export{re as default};