import{d as A}from"./vuedraggable.umd.dc61d486.js";import{d as I,a0 as z,r as k,ab as g,U,j as n,o as p,b,w as u,k as c,l as V,c as x,t as y,x as j,y as D,F as R,a as f,_ as Z,p as N,f as K}from"./index.5a90395c.js";import{u as L}from"./imgText.df790733.js";import{p as $,i as q}from"./index.2523f7b1.js";import{g as G}from"./index.0e306189.js";const H=_=>(N("data-v-07436cf8"),_=_(),K(),_),J=["onClick"],M={class:"down"},O=H(()=>f("span",null,"\u6362\u4E00\u7EC4",-1)),P=I({__name:"work-title",setup(_){const C=L(),{form:a,makeData:T}=z(C),i=k(g(q)),m=k(""),w=l=>a.value.data.VideoTitle.some(e=>e===l),E=l=>{l.isAdd=!l.isAdd},v=()=>{let l=g(T.value);a.value.data.Zhuci.length&&(l.zhuci=a.value.data.Zhuci.map(t=>({name:t})));let e=G(l,a.value.data.VideoTitle,a.value.data.VideoTitle);a.value.data.VideoTitle.forEach((t,d)=>{let o=i.value.find(h=>h.label===t);(o==null?void 0:o.type)==="select"&&(e[d]=o.label)}),m.value=e.join("")};return v(),U(()=>[i.value,a.value.keyword,a.value.data.Zhuci],([l])=>{l.forEach((e,t)=>{if(e.type==="select"&&e.index!==t){let d=i.value[e.index];i.value[e.index]=e,i.value[t]=d}}),a.value.data.VideoTitle=l.filter(e=>e.isAdd).map(e=>e.label),v()},{deep:!0}),(l,e)=>{const t=n("el-option"),d=n("el-select"),o=n("el-form-item"),h=n("el-input"),B=n("Refresh"),F=n("el-icon"),S=n("el-form");return p(),b(S,{class:"inForm","label-width":"82"},{default:u(()=>[c(o,{label:"\u7EC4\u5408\u89C4\u5219"},{default:u(()=>[c(V(A),{class:"btns",animation:"300",list:i.value,group:"people",itemKey:"id",filter:".select"},{item:u(({element:s})=>[s.type==="button"?(p(),x("div",{key:0,class:j(["btn",{choose:w(s.label)}]),onClick:r=>E(s)},y(s.name),11,J)):(p(),b(d,{key:1,class:"select",modelValue:s.label,"onUpdate:modelValue":r=>s.label=r,size:"small",placeholder:"\u65E0",clearable:""},{default:u(()=>[(p(!0),x(R,null,D(V($),r=>(p(),b(t,{key:r.value,value:r.value,label:r.label},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))]),_:1},8,["list"])]),_:1}),c(o,{label:"\u793A\u4F8B"},{default:u(()=>[c(h,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=s=>m.value=s),type:"textarea",rows:3,resize:"none"},null,8,["modelValue"])]),_:1}),c(o,null,{default:u(()=>[f("div",M,[f("div",{class:"refresh",onClick:v},[c(F,null,{default:u(()=>[c(B)]),_:1}),O]),f("span",null,"\u5B57\u6570\uFF1A"+y(m.value.length),1)])]),_:1})]),_:1})}}}),le=Z(P,[["__scopeId","data-v-07436cf8"]]);export{le as default};