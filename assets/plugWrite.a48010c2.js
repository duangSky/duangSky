var D=Object.defineProperty,k=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var f=(t,e,u)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,v=(t,e)=>{for(var u in e||(e={}))A.call(e,u)&&f(t,u,e[u]);if(g)for(var u of g(e))V.call(e,u)&&f(t,u,e[u]);return t},E=(t,e)=>k(t,x(e));var C=(t,e,u)=>new Promise((p,l)=>{var c=o=>{try{a(u.next(o))}catch(s){l(s)}},_=o=>{try{a(u.throw(o))}catch(s){l(s)}},a=o=>o.done?p(o.value):Promise.resolve(o.value).then(c,_);a((u=u.apply(t,e)).next())});import h from"./PageLayout.315a6bcb.js";import N from"./CreateWrite.c595f8c3.js";import{q as P}from"./aitools.ae73576d.js";import{_ as W,d as S,r as m,j as d,v as q,o as L,b as R,w as n,k as r,a as U,n as z,A as j}from"./index.5a90395c.js";import"./AIToolPop.b04822dd.js";import"./useCopyToClipboard.fba770f6.js";const H={class:"btn"},I=S({__name:"plugWrite",setup(t){const e=m(!1),u=m(""),p=m(),l=m({keyword:"",productName:"",productSellingPoint:""}),c={keyword:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",trigger:"blur"}],productName:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0",trigger:"blur"}],productSellingPoint:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u5356\u70B9",trigger:"blur"}]},_=()=>C(this,null,function*(){try{yield p.value.validate(),u.value="",e.value=!0,P({data:E(v({},l.value),{sse:1}),onopen:()=>e.value=!1,onmessage:a=>{u.value+=JSON.parse(a.data).content},finallyHandler:()=>e.value=!1})}catch(a){console.log(a)}});return(a,o)=>{const s=d("el-input"),F=d("el-form-item"),B=d("el-button"),w=d("el-form"),y=d("PageWrapper"),b=q("selfLoading");return L(),R(y,{regain:"\u5C0F\u7EA2\u4E66\u63A8\u5E7F\u6587\u6848"},{default:n(()=>[r(h,null,{set:n(()=>[r(w,{ref_key:"ruleFormRef",ref:p,model:l.value,rules:c,"label-position":"top"},{default:n(()=>[r(F,{label:"\u5173\u952E\u8BCD",prop:"keyword"},{default:n(()=>[r(s,{modelValue:l.value.keyword,"onUpdate:modelValue":o[0]||(o[0]=i=>l.value.keyword=i),type:"textarea",maxlength:"50","show-word-limit":"",resize:"none",rows:4,placeholder:"\u53EF\u586B\u5199\u54C1\u724C\u540D\u79F0\u3001\u516C\u53F8\u7B80\u79F0\u7B49\u76F8\u5173\u5173\u952E\u8BCD\uFF0C\u4E0D\u540C\u5173\u952E\u8BCD\u4E4B\u95F4\u4EE5\u987F\u53F7\u9694\u5F00"},null,8,["modelValue"])]),_:1}),r(F,{label:"\u4EA7\u54C1\u540D\u79F0",prop:"productName"},{default:n(()=>[r(s,{modelValue:l.value.productName,"onUpdate:modelValue":o[1]||(o[1]=i=>l.value.productName=i),maxlength:"50","show-word-limit":"",placeholder:"\u586B\u5199\u5177\u4F53\u7684\u4EA7\u54C1\u540D\u79F0\uFF0C\u4E0D\u540C\u4EA7\u54C1\u4E4B\u95F4\u4EE5\u987F\u53F7\u9694\u5F00"},null,8,["modelValue"])]),_:1}),r(F,{label:"\u4EA7\u54C1\u5356\u70B9",prop:"productSellingPoint"},{default:n(()=>[r(s,{modelValue:l.value.productSellingPoint,"onUpdate:modelValue":o[2]||(o[2]=i=>l.value.productSellingPoint=i),type:"textarea",maxlength:"50","show-word-limit":"",resize:"none",rows:4,placeholder:"\u586B\u5199\u4EA7\u54C1\u4F18\u52BF\u3001\u4EAE\u70B9\u3001\u7279\u8272\u7B49\uFF0C\u4E0D\u540C\u5356\u70B9\u4E4B\u95F4\u4EE5\u987F\u53F7\u9694\u5F00"},null,8,["modelValue"])]),_:1}),U("div",H,[r(B,{type:"primary",loading:e.value,style:{width:"350px"},onClick:_},{default:n(()=>[z("\u7ACB\u5373\u751F\u6210")]),_:1},8,["loading"])])]),_:1},8,["model"])]),preview:n(()=>[j(r(N,{"element-loading-background":"rgba(122, 122, 122, 0.8)",writes:u.value},null,8,["writes"]),[[b,e.value]])]),_:1})]),_:1})}}}),X=W(I,[["__scopeId","data-v-ec69027c"]]);export{X as default};