import{d as p,r as s,j as l,o as v,b as u,a as t,O as f,l as m,cl as w,z as C,k as r,w as k,a5 as y,q as x,_ as $}from"./index.5a90395c.js";const b=["src"],h=p({__name:"video-preview",setup(B,{expose:i}){const e=s(!1),a=s(""),n=s("16 / 9");return i({show:e,taskId:a,ratio:n}),(I,o)=>{const c=l("Close"),_=l("el-icon");return e.value?(v(),u(y,{key:0,to:"body"},[t("div",{class:"asdf",id:"J_prismPlayer",onClick:o[1]||(o[1]=d=>e.value=!1)},[t("iframe",{style:f({aspectRatio:n.value}),src:`${m(w)}?id=${a.value}`,frameborder:"no",height:"93%"},null,12,b),t("div",{class:"closeIco",onClick:o[0]||(o[0]=C(d=>e.value=!1,["stop"]))},[r(_,null,{default:k(()=>[r(c)]),_:1})])])])):x("",!0)}}}),P=$(h,[["__scopeId","data-v-16ac6e2d"]]);export{P as default};