import{M as V}from"./MediumPreview.37c6af48.js";import{d as B,r as F,j as s,o,b as c,w as l,c as P,y as $,a as t,k as a,t as d,q as m,F as D,_ as N}from"./index.5a90395c.js";const M={class:"content"},R={class:"img"},b=["src","onClick"],j={class:"txt"},q={class:"title text-ellipsis-1"},A={class:"tip"},E=B({__name:"material-card",props:{materials:{type:Array,default:[]}},emits:["handleDelete"],setup(_,{emit:p}){const i=F(),u=p,f=n=>{u("handleDelete",n)},C=n=>{i.value.index=n,i.value.handleOpen()};return(n,I)=>{const h=s("CircleCloseFilled"),r=s("el-icon"),k=s("Picture"),y=s("VideoCamera"),v=s("el-col"),x=s("el-row");return o(),c(x,null,{default:l(()=>[(o(!0),P(D,null,$(_.materials,(e,g)=>(o(),c(v,{class:"item",xl:3,lg:4,md:6,sm:8,sx:12,key:e.id},{default:l(()=>[t("div",M,[t("div",R,[t("img",{src:e.cover_url,alt:"",onClick:w=>C(g)},null,8,b)]),a(r,{class:"close",onClick:w=>f(e)},{default:l(()=>[a(h)]),_:2},1032,["onClick"])]),t("div",j,[t("span",q,d(e.title),1),t("div",A,[e.type==="image"?(o(),c(r,{key:0},{default:l(()=>[a(k)]),_:1})):m("",!0),e.type==="video"?(o(),c(r,{key:1},{default:l(()=>[a(y)]),_:1})):m("",!0),t("span",null,d(`${e.width}*${e.height}`),1)])])]),_:2},1024))),128)),a(V,{ref_key:"previewRef",ref:i,files:_.materials},null,8,["files"])]),_:1})}}}),S=N(E,[["__scopeId","data-v-e0dff086"]]);export{S as default};
