var m=(p,r,u)=>new Promise((a,l)=>{var c=e=>{try{o(u.next(e))}catch(t){l(t)}},_=e=>{try{o(u.throw(e))}catch(t){l(t)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(c,_);o((u=u.apply(p,r)).next())});import y from"./PageLayout.315a6bcb.js";import E from"./CreateWrite.c595f8c3.js";import{z as B}from"./aitools.ae73576d.js";import{_ as k,d as D,r as d,j as i,v as b,o as x,b as h,w as n,k as s,a as V,n as R,A,E as W}from"./index.5a90395c.js";import"./AIToolPop.b04822dd.js";import"./useCopyToClipboard.fba770f6.js";const L={class:"btn"},N=D({__name:"videoRefer",setup(p){const r=d(!1),u=d(),a=d({keyword:""}),l=d(""),c={keyword:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",trigger:"blur"}]},_=()=>m(this,null,function*(){try{yield u.value.validate(),l.value="",r.value=!0;let{code:o,data:e,msg:t}=yield B(a.value);o==200?l.value=e.content:W.error(t),r.value=!1}catch(o){console.log(o)}});return(o,e)=>{const t=i("el-input"),f=i("el-form-item"),v=i("el-button"),g=i("el-form"),C=i("PageWrapper"),w=b("selfLoading");return x(),h(C,{regain:"\u77ED\u89C6\u9891\u6807\u9898\u6587\u6848"},{default:n(()=>[s(y,null,{set:n(()=>[s(g,{ref_key:"ruleFormRef",ref:u,model:a.value,rules:c,"label-position":"top"},{default:n(()=>[s(f,{label:"\u5173\u952E\u8BCD",prop:"keyword"},{default:n(()=>[s(t,{modelValue:a.value.keyword,"onUpdate:modelValue":e[0]||(e[0]=F=>a.value.keyword=F),type:"textarea",maxlength:"200","show-word-limit":"",resize:"none",rows:6,placeholder:"\u53EF\u586B\u5199\u4EA7\u54C1\u540D\u79F0\u3001\u4EA7\u54C1\u5356\u70B9\u3001\u54C1\u724C/\u516C\u53F8\u540D\u79F0\u7B49\u76F8\u5173\u7684\u5173\u952E\u8BCD\uFF0C\u4E0D\u540C\u5173\u952E\u8BCD\u4E4B\u95F4\u4EE5\u987F\u53F7\u9694\u5F00"},null,8,["modelValue"])]),_:1}),V("div",L,[s(v,{type:"primary",loading:r.value,style:{width:"350px"},onClick:_},{default:n(()=>[R("\u7ACB\u5373\u751F\u6210")]),_:1},8,["loading"])])]),_:1},8,["model"])]),preview:n(()=>[A(s(E,{"element-loading-background":"rgba(122, 122, 122, 0.8)",writes:l.value},null,8,["writes"]),[[w,r.value]])]),_:1})]),_:1})}}}),U=k(N,[["__scopeId","data-v-45f76342"]]);export{U as default};
