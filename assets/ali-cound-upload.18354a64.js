var r=(n,c,u)=>new Promise((a,t)=>{var s=e=>{try{o(u.next(e))}catch(l){t(l)}},i=e=>{try{o(u.throw(e))}catch(l){t(l)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,i);o((u=u.apply(n,c)).next())});import{u as g}from"./aitools.ae73576d.js";import{d as y,r as p,o as C,c as v,a as k,N as A}from"./index.5a90395c.js";const B={class:"aliCound"},_=["multiple","accept"],U=y({__name:"ali-cound-upload",props:{accept:{type:String,required:!0},multiple:{type:Boolean,default:!0},beforeUpload:{type:Function,default:function(){}},progressUpload:{type:Function,default:function(){}},uploadSuccessed:{type:Function,default:function(){}},uploadFailed:{type:Function,default:function(){}}},setup(n,{expose:c}){const u=p(),a=p([]),t=n,s=()=>{console.log("click",t.accept),u.value.click()},i=o=>r(this,null,function*(){if(!!!t.beforeUpload(o.target.files)){console.error("\u4E0A\u4F20\u9A8C\u8BC1\u5931\u8D25\uFF01");return}if(a.value=o.target.files,!a.value){console.log("\u8BF7\u5148\u9009\u62E9\u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6!");return}console.log(a.value);const l=new FormData;for(const F of a.value)l.append("file",F);let{code:d,data:f,msg:m}=yield g(l);d==200?t.uploadSuccessed(f):t.uploadFailed(m),o.target.value=""});return c({handleFileClick:s}),(o,e)=>(C(),v("div",B,[k("input",{ref_key:"fileInput",ref:u,type:"file",multiple:n.multiple,accept:t.accept,onChange:e[0]||(e[0]=l=>i(l)),style:{display:"none"}},null,40,_),A(o.$slots,"fileUpload")]))}});export{U as default};
