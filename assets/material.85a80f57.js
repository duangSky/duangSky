var S=Object.defineProperty,A=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var j=(e,i,t)=>i in e?S(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,C=(e,i)=>{for(var t in i||(i={}))B.call(i,t)&&j(e,t,i[t]);if(k)for(var t of k(i))J.call(i,t)&&j(e,t,i[t]);return e},w=(e,i)=>A(e,b(i));var f=(e,i,t)=>new Promise((r,g)=>{var h=o=>{try{c(t.next(o))}catch(n){g(n)}},_=o=>{try{c(t.throw(o))}catch(n){g(n)}},c=o=>o.done?r(o.value):Promise.resolve(o.value).then(h,_);c((t=t.apply(e,i)).next())});import{a2 as N,r as s,E as m}from"./index.5a90395c.js";import{a as O,b as T}from"./creative.ea528d59.js";import{l as x}from"./keyword.011c6f30.js";const D=e=>({id:e.id,type:e.type,media_id:e.media_id,title:e.title,group_name:e.group_name,cover_url:e.cover_url,media_url:e.media_url,duration:e.duration,time:e.cut_duration,interval:[e.cut_start,e.cut_end],ratio:e.ratio,width:e.width,height:e.height,tags_zhuci:e.tags_zhuci,tags_diqu:e.tags_diqu,tags_miaoshu:e.tags_miaoshu,tags_jingtou:e.tags_jingtou,file_hash:e.file_hash}),U=N("material",()=>{const e=s(""),i=s({page:1,limit:50}),t=s({type:"",ratio:"",tags_zhuci:[],tags_diqu:[],tags_miaoshu:[],tags_jingtou:[],uploadedData:["audio","video","image"]}),r=s([]),g=s(!1),h=s([]),_=s({}),c=s(0),o=s(!1),n=s([]),p=s([]),v=s(!1),q=a=>{o.value=a,a&&(n.value=[],v.value=!1)},y=a=>{n.value=a;let l=a.length===r.value.length;v.value=l};return{groupId:e,isBulk:o,pages:i,checklist:n,selectMaterals:p,checkAll:v,loading:g,screen:t,materials:r,keywords:h,system_tags:_,total:c,setBulk:q,getlistMedia:()=>f(void 0,null,function*(){g.value=!0,r.value=[];let a=w(C({},i.value),{filter:{},op:{}});if(console.log(a),t.value.type&&(a.filter.type=t.value.type,a.op.type="in"),t.value.ratio&&(a.filter.ratio=[t.value.ratio],a.op.ratio="in"),t.value.tags_zhuci.length){let z=t.value.tags_zhuci.map(M=>M[1]);a.filter.tags_zhuci=JSON.stringify(z),a.op.tags_zhuci="in"}t.value.tags_diqu.length&&(a.filter.tags_diqu=JSON.stringify(t.value.tags_diqu),a.op.tags_diqu="in"),t.value.tags_miaoshu.length&&(a.filter.tags_miaoshu=JSON.stringify(t.value.tags_miaoshu),a.op.tags_miaoshu="in"),t.value.tags_jingtou.length&&(a.filter.tags_jingtou=JSON.stringify(t.value.tags_jingtou),a.op.tags_jingtou="in"),e.value&&(a.filter.group=e.value,a.op.group="in");let{code:l,data:u,msg:d}=yield O(a).catch(()=>{g.value=!1});l==200?(r.value=u.list,c.value=u.total):m.error(d),g.value=!1}),getkeywords:()=>f(void 0,null,function*(){let{code:a,data:l,msg:u}=yield x({page:1,limit:30});a==200?h.value=l.list:m.error(u)}),getBaseTags:()=>f(void 0,null,function*(){let{code:a,data:l,msg:u}=yield T();a==200?_.value=l:m.error(u)}),handleCheckAllChange:a=>{let l=[];a&&(l=r.value.map(u=>u.id)),y(l)},handleCheckAllMaterals:a=>{let l=[];a&&(l=r.value.map(d=>D(d))),p.value=l;let u=l.length===r.value.length;v.value=u},handleChangeCheckbox:y,handleClearScreen:()=>{t.value={type:"",ratio:"",tags_zhuci:[],tags_diqu:[],tags_miaoshu:[],tags_jingtou:[],uploadedData:["audio","video","image"]}}}});export{D as s,U as u};
