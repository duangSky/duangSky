import{d as w,a0 as v,r as C,j as n,o as S,b as R,w as u,k as a,a as r,t as I,l as d,E as x,_ as y,p as A,f as B}from"./index.5a90395c.js";import{u as M}from"./material.85a80f57.js";import{u as T}from"./imgText.df790733.js";import{I as j}from"./ImportMeterial.9b103172.js";import{d as E}from"./index.0e306189.js";import N from"./background-config.61fe2eab.js";import{t as H}from"./index.2523f7b1.js";import"./creative.ea528d59.js";import"./keyword.011c6f30.js";import"./index.browser.2b0920b0.js";import"./AliCloudUpload.13488d40.js";import"./Pagination.554cb32d.js";import"./audio.531569af.js";import"./MediumPreview.37c6af48.js";const q=s=>(A("data-v-66c62ebb"),s=s(),B(),s),z={class:"materialSelect"},G={class:"top"},J={class:"choose"},K=q(()=>r("span",null,"\u6DFB\u52A0\u5C01\u9762",-1)),L=w({__name:"material-cover",setup(s,{expose:h}){const g=M(),D=T(),{selectMaterals:m,screen:p}=v(g),{form:e}=v(D),_=C(),f=C(),b=()=>{p.value.type="image",p.value.uploadedData=["image"],m.value=e.value.data.VideoCover,f.value.drawer=!0},k=l=>{if(!l)return;let i=[...e.value.data.VideoCover,...m.value],c={};e.value.data.VideoCover=i.reduce((o,t)=>(c[t.id]||(c[t.id]=o.push(t)),o),[]).map(o=>E(o)),x.success("\u7D20\u6750\u5BFC\u5165\u6210\u529F")},F=l=>{e.value.data.VideoCover=e.value.data.VideoCover.filter(i=>i.id!==l.id)};return h({formRef:_}),(l,i)=>{const c=n("DArrowRight"),o=n("el-icon"),t=n("el-form-item"),V=n("el-form");return S(),R(V,{class:"inForm",ref_key:"formRef",ref:_,model:d(e),rules:d(H),"label-width":"72"},{default:u(()=>[a(t,{label:"\u5DF2\u9009\u7D20\u6750",prop:"data.VideoCover"},{default:u(()=>[r("div",z,[r("div",G,[r("span",J,"\u5DF2\u9009\uFF1A"+I(d(e).data.VideoCover.length),1),r("div",{class:"pick",onClick:b},[K,a(o,null,{default:u(()=>[a(c)]),_:1})])]),a(N,{backgrounds:d(e).data.VideoCover,onHandleDelete:F},null,8,["backgrounds"])])]),_:1}),a(j,{ref_key:"meterialRef",ref:f,onCloseDrawer:k},null,512)]),_:1},8,["model","rules"])}}}),se=y(L,[["__scopeId","data-v-66c62ebb"]]);export{se as default};
