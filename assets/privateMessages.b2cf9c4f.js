var le=Object.defineProperty,ne=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var q=(f,i,t)=>i in f?le(f,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[i]=t,H=(f,i)=>{for(var t in i||(i={}))ce.call(i,t)&&q(f,t,i[t]);if(P)for(var t of P(i))ie.call(i,t)&&q(f,t,i[t]);return f},J=(f,i)=>ne(f,ue(i));var N=(f,i,t)=>new Promise((s,v)=>{var y=e=>{try{u(t.next(e))}catch(h){v(h)}},V=e=>{try{u(t.throw(e))}catch(h){v(h)}},u=e=>e.done?s(e.value):Promise.resolve(e.value).then(y,V);u((t=t.apply(f,i)).next())});import{d as z,u as re,r as D,s as _e,g as Q,j as m,v as W,o as c,c as p,a as _,k as a,w as n,m as de,F as O,y as R,b as X,A as Z,x as ee,t as E,q as K,l as M,_ as Y,G as S,E as T,n as A}from"./index.5a90395c.js";import{s as te,d as me,a as pe,e as ve,f as ge,i as fe,h as ye}from"./account.f146a620.js";import{f as j}from"./dateUtil.67c53eed.js";import{t as he}from"./element-china-area-data.31b4d230.js";const Ce={class:"message_left"},be={class:"message_left_top"},De={class:"message_left_account_list","infinite-scroll-immediate":!1,style:{overflow:"auto"}},Ve=["onClick"],Fe={class:"message_left_item_avatar"},xe=["src"],ke={key:0,class:"message_left_item_avatar_status"},we={class:"message_left_item_info"},$e={class:"message_left_item_name"},Be={class:"message_left_item_name_text"},Ie={key:0},Ee={key:1},Te={class:"message_left_item_dec"},Le=z({__name:"messageLeft",props:{account:{type:Object,default:{}},accountType:{type:String,default:"account"}},emits:["selectCustomer"],setup(f,{expose:i,emit:t}){re();const s=f,v=D([]),y=D(""),V=D([]),u=D("");_e(()=>{});const e=o=>{r(o),v.value=[]},h=o=>S().startOf("day").unix()==S(o).startOf("day").unix(),w=t,F=D({}),g=o=>{F.value=o,d(o),w("selectCustomer",o)},d=o=>{let x={unreadnum:0,id:o.id},B=v.value.find(I=>I.id==o.id);B.unreadnum=0,te(x).then(I=>{I.code==200||T.error(I.msg)})},l=Q({page:1,limit:12,count:0}),C=D(!1),k=()=>{y.value==""&&(l.page=1,v.value=[]),r(s.account.open_id)},$=()=>{l.page++,!(l.page>Math.floor(l.count/l.limit))&&r(s.account.open_id)},r=o=>{let x={filter:{},op:{}};return y.value!=""&&(x.filter.nickname=y.value,x.op.nickname="like",v.value=[],console.log("search")),new Promise((B,I)=>{me(H({open_id:o,action_type:1,page:l.page,limit:l.limit},x)).then(L=>{L.code==200?(L.data.list.forEach(G=>{v.value.push(G)}),l.count=L.data.count,g(v.value[0]),B(L.code)):(B(L.code),T.warning(L.msg))})})};return(()=>N(this,null,function*(){var B;let o={stat:["task"],filter:{type:"douyin"},op:{},page:l.page,limit:999};C.value=!0;const x=yield pe(o);x.code==200?(V.value=x.data.list,u.value=(B=V.value.find(I=>I.open_id==s.account.open_id))==null?void 0:B.open_id):(C.value=!1,T.warning(x.msg))}))(),i({getCustomerList:r,customerData:v}),(o,x)=>{const B=m("Search"),I=m("el-icon"),L=m("el-input"),G=m("el-option"),ae=m("el-select"),se=W("infinite-scroll");return c(),p("div",Ce,[_("div",be,[a(L,{modelValue:y.value,"onUpdate:modelValue":x[0]||(x[0]=b=>y.value=b),class:"search",style:{width:"48%"},placeholder:"\u641C\u7D22\u6635\u79F0",size:"small",onKeyup:de(k,["enter"])},{prefix:n(()=>[a(I,{size:"18",color:"#666666"},{default:n(()=>[a(B)]),_:1})]),_:1},8,["modelValue","onKeyup"]),a(ae,{modelValue:u.value,"onUpdate:modelValue":x[1]||(x[1]=b=>u.value=b),style:{width:"48%"},placeholder:"\u9009\u62E9\u8D26\u53F7",onChange:e},{default:n(()=>[(c(!0),p(O,null,R(V.value,b=>(c(),X(G,{key:b.open_id,label:b.nickname,value:b.open_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),Z((c(),p("div",De,[(c(!0),p(O,null,R(v.value,(b,oe)=>(c(),p("div",{class:ee(["message_left_account_list_item",{active:F.value.id==b.id}]),key:oe,onClick:ct=>g(b)},[_("div",Fe,[_("img",{src:b.avatar,alt:""},null,8,xe),b.unreadnum?(c(),p("div",ke,[_("span",null,E(b.unreadnum),1)])):K("",!0)]),_("div",we,[_("div",$e,[_("div",Be,E(b.nickname),1),h(b.update_time)?(c(),p("span",Ie,E(M(j)(b.update_time,"HH:mm")),1)):(c(),p("span",Ee,E(M(j)(b.update_time,"YYYY-MM-DD")),1))]),_("p",Te,E(b.lastmessage?b.lastmessage:"\u6682\u65E0"),1)])],10,Ve))),128))])),[[se,$]])])}}}),Ae=Y(Le,[["__scopeId","data-v-e66a60d4"]]);const Me={class:"message_center"},Ue={class:"message_center_top"},Oe={key:0,class:"message_center_top_userinfo"},Re={key:1,class:"message_center_top_tip"},Se={class:"message_center_info"},je={class:"message_center_info_item_avatar"},ze=["src"],Ye=["src"],Ge={class:"item_content"},He={class:"message_center_info_item_content"},Ne={key:0,class:"message_center_info_item_time"},Ke={key:1,class:"message_center_info_item_time"},Pe={class:"message_center_bottom"},qe={class:"repalyCode"},Je=["src"],Qe=z({__name:"messageCenter",props:{account:{type:Object,default:{}},activeCustomer:{type:Object,default:{}},accountType:{type:String,default:"account"}},setup(f,{expose:i}){const t=f,s=D(1),v=D(""),y=D(!1),V=g=>S().startOf("day").unix()==S(g).startOf("day").unix(),u=D(""),e=D([]),h=g=>{ve(g).then(d=>{d.code==200?e.value=d.data.reverse():T.warning(d.msg)})},w=()=>{if(!u.value){T.warning("\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u5185\u5BB9");return}if(!s.value){y.value=!0;return}let g=e.value[e.value.length-1];ge({id:t.accountType=="account"?t.account.id:t.account.account_id,toUserId:t.activeCustomer.open_id,content:u.value,msg_id:g==null?void 0:g.msg_id,conversation_id:g==null?void 0:g.conversation_id}).then(d=>{d.code==200?(u.value="",h({id:t.accountType=="account"?t.account.id:t.account.account_id,openId:t.activeCustomer.open_id})):T.warning(d.msg)})};return i({getCustomerInfo:h,accountIsGetChat:({enterprise_open_id:g,open_id:d})=>{fe({account:"",enterprise_open_id:g,open_id:d}).then(l=>{var C;l.code==200?(s.value=l.isrepaly,v.value=(C=l.repalycode.data)==null?void 0:C.base64):T.warning(l.msg)})}}),(g,d)=>{const l=m("el-scrollbar"),C=m("el-input"),k=m("el-button"),$=m("el-dialog");return c(),p("div",Me,[_("div",Ue,[t.activeCustomer.id?(c(),p("div",Oe," \u4E0E "+E(t.activeCustomer.nickname)+" \u7684\u79C1\u4FE1 ",1)):K("",!0),s.value?K("",!0):(c(),p("div",Re," \u5F53\u524D\u7528\u6237\u4E0D\u53EF\u76F4\u63A5\u79C1\u4FE1 "))]),a(l,{class:"message_center_content",style:{height:"505px"}},{default:n(()=>[_("div",Se,[(c(!0),p(O,null,R(e.value,(r,U)=>(c(),p("div",{class:ee(["message_center_info_item",{right:r.type!=1}]),key:U},[_("div",je,[r.fromopenid==t.account.open_id?(c(),p("img",{key:0,src:t.account.avatar,alt:""},null,8,ze)):(c(),p("img",{key:1,src:t.activeCustomer.avatar,alt:""},null,8,Ye))]),_("div",Ge,[_("div",He,E(r.content),1)]),V(r.createtime)?(c(),p("div",Ne,E(M(j)(r.createtime,"HH:mm")),1)):(c(),p("div",Ke,E(M(j)(r.createtime,"YYYY-MM-DD")),1))],2))),128))])]),_:1}),_("div",Pe,[a(C,{type:"textarea",rows:5,placeholder:"\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u5185\u5BB9\u2026",modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=r=>u.value=r),"show-word-limit":!1},null,8,["modelValue"]),a(k,{type:"primary",size:"small",onClick:w},{default:n(()=>[A("\u53D1\u9001")]),_:1})]),a($,{title:"\u8BF7\u7528\u6296\u97F3APP\u626B\u63CF\u5F53\u524D\u4E8C\u7EF4\u7801\u8FDB\u884C\u79C1\u4FE1",modelValue:y.value,"onUpdate:modelValue":d[1]||(d[1]=r=>y.value=r),width:"350px"},{default:n(()=>[_("div",qe,[_("img",{src:v.value,alt:""},null,8,Je)])]),_:1},8,["modelValue"])])}}}),We=Y(Qe,[["__scopeId","data-v-8133dd94"]]);const Xe={class:"message_right"},Ze={class:"message_right_top"},et={class:"message_right_avatar"},tt=["src"],at={class:"message_right_form"},st=z({__name:"messageRight",props:{activeCustomer:{type:Object,default:{}},accountType:{type:String,default:"account"}},setup(f,{expose:i}){const t=f,s=D({}),v=Q([{value:0,label:"\u610F\u5411\u5BA2\u6237"},{value:1,label:"\u7559\u8D44\u5BA2\u6237"},{value:2,label:"\u5DF2\u6C9F\u901A"},{value:3,label:"\u5DF2\u8DDF\u8FDB"},{value:4,label:"\u5DF2\u5408\u4F5C"}]),y=u=>{ye({id:u}).then(e=>{s.value=e.data})},V=u=>{let e=J(H({},u),{id:t.activeCustomer.id});te(e).then(h=>{h.code==200?(T.success("\u4FDD\u5B58\u6210\u529F"),y(t.activeCustomer.id)):T.error(h.msg)})};return i({getCustomerInfoData:y}),(u,e)=>{const h=m("el-option"),w=m("el-select"),F=m("el-form-item"),g=m("el-cascader"),d=m("el-input"),l=m("el-radio"),C=m("el-radio-group"),k=m("el-image"),$=m("el-button"),r=m("el-popover"),U=m("el-form");return c(),p("div",Xe,[_("div",Ze,[_("div",et,[_("img",{src:s.value.avatar,alt:""},null,8,tt)])]),_("div",at,[a(U,{model:s.value,ref:"form","label-width":"50px",inline:!1,size:""},{default:n(()=>[a(F,{label:"\u72B6\u6001"},{default:n(()=>[a(w,{style:{width:"250px"},modelValue:s.value.leads_type,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value.leads_type=o),"value-key":"",placeholder:"",clearable:"",filterable:"",onChange:e[1]||(e[1]=()=>{})},{default:n(()=>[(c(!0),p(O,null,R(v,o=>(c(),X(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(F,{label:"\u5730\u533A"},{default:n(()=>[a(g,{size:"large",options:M(he),modelValue:s.value.city,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value.city=o),style:{width:"100%"},clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5730\u533A"},null,8,["options","modelValue"])]),_:1}),a(F,{label:"\u59D3\u540D"},{default:n(()=>[a(d,{modelValue:s.value.realname,"onUpdate:modelValue":e[3]||(e[3]=o=>s.value.realname=o),placeholder:"",size:"small",clearable:"",onChange:e[4]||(e[4]=()=>{})},null,8,["modelValue"])]),_:1}),a(F,{label:"\u6027\u522B"},{default:n(()=>[a(C,{modelValue:s.value.gender,"onUpdate:modelValue":e[5]||(e[5]=o=>s.value.gender=o)},{default:n(()=>[a(l,{label:0,value:0},{default:n(()=>[A("\u672A\u77E5")]),_:1}),a(l,{label:1,value:1},{default:n(()=>[A("\u7537")]),_:1}),a(l,{label:2,value:2},{default:n(()=>[A("\u5973")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(F,{label:"\u7535\u8BDD"},{default:n(()=>[a(d,{modelValue:s.value.telephone,"onUpdate:modelValue":e[6]||(e[6]=o=>s.value.telephone=o),placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD",size:"small",onChange:e[7]||(e[7]=()=>{})},null,8,["modelValue"])]),_:1}),a(F,{label:"\u5907\u6CE8"},{default:n(()=>[a(d,{type:"textarea",rows:4,modelValue:s.value.note,"onUpdate:modelValue":e[8]||(e[8]=o=>s.value.note=o),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",size:"small",clearable:"",onChange:e[9]||(e[9]=()=>{})},null,8,["modelValue"])]),_:1}),a(F,{label:""},{default:n(()=>[a(r,{placement:"top-start",title:"",width:200,trigger:"hover"},{reference:n(()=>[a($,{class:"m-2"},{default:n(()=>[A("\u79C1\u4FE1\u7801")]),_:1})]),default:n(()=>[_("div",null,[a(k,{src:s.value.homecode,fit:"cover"},null,8,["src"])])]),_:1}),a(r,{placement:"top-start",title:"",width:200,trigger:"hover"},{reference:n(()=>[a($,{class:"m-2"},{default:n(()=>[A("\u4E3B\u9875\u7801")]),_:1})]),default:n(()=>[_("div",null,[a(k,{src:s.value.repalycode,fit:"cover"},null,8,["src"])])]),_:1})]),_:1}),a(F,null,{default:n(()=>[a($,{type:"primary",style:{width:"240px","margin-left":"5px"},onClick:e[10]||(e[10]=o=>V(s.value))},{default:n(()=>[A("\u4FDD\u5B58")]),_:1})]),_:1})]),_:1},8,["model"])])])}}}),ot=Y(st,[["__scopeId","data-v-3fca1a22"]]);const lt={class:"message_container"},nt={class:"message_content"},ut=z({__name:"privateMessages",props:{account:{type:Object,default:{}}},setup(f,{expose:i}){const t=f,s=D("account"),v=D(!1),y=D(),V=D({}),u=D(),e=D();let h=null;const w=D(!1),F=l=>{if(V.value.id!=l.id&&(clearInterval(h),console.log("clearCustomer")),l){V.value=l,u.value.getCustomerInfo({id:s.value=="account"?t.account.id:t.account.account_id,openId:l.open_id}),e.value.getCustomerInfoData(l.id),u.value.accountIsGetChat({enterprise_open_id:l.enterprise_open_id,open_id:l.open_id});let C=0;const k=60;if(h=setInterval(()=>{u.value.getCustomerInfo({id:s.value=="account"?t.account.id:t.account.account_id,openId:V.value.open_id}),C++,C>=k&&clearInterval(h)},5e3),y.value.customerData.length==0){clearInterval(h);return}}},g=()=>N(this,null,function*(){y.value.customerData=[],u.value.messagesList=[],w.value=!0,yield y.value.getCustomerList(t.account.open_id),w.value=!1}),d=()=>{clearInterval(h)};return i({dialogVisible:v,accountType:s}),(l,C)=>{const k=m("el-dialog"),$=W("loading");return c(),p("div",lt,[a(k,{title:"\u79C1\u4FE1",width:"1400px",top:"10vh",modelValue:v.value,"onUpdate:modelValue":C[0]||(C[0]=r=>v.value=r),onOpened:C[1]||(C[1]=r=>g()),onClose:C[2]||(C[2]=r=>d())},{default:n(()=>[Z((c(),p("div",nt,[a(Ae,{ref_key:"messageLeftRef",ref:y,onSelectCustomer:F,account:t.account,accountType:s.value},null,8,["account","accountType"]),a(We,{ref_key:"messageCenterRef",ref:u,activeCustomer:V.value,account:t.account,accountType:s.value},null,8,["activeCustomer","account","accountType"]),a(ot,{ref_key:"messageRightRef",ref:e,activeCustomer:V.value,accountType:s.value},null,8,["activeCustomer","accountType"])])),[[$,w.value]])]),_:1},8,["modelValue"])])}}}),pt=Y(ut,[["__scopeId","data-v-a442d87c"]]);export{pt as p};
