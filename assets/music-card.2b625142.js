import{d as k,a0 as x,T as V,j as u,o as a,c as m,a as t,l as n,b as v,w as p,k as l,z as $,t as d,q as B,_ as S}from"./index.5a90395c.js";import{u as F}from"./audio.e4943d80.js";import{g as E}from"./dateUtil.67c53eed.js";const U={class:"musicCard"},I=["onClick"],O={class:"intro"},b={class:"title text-ellipsis-1"},j={class:"author text-ellipsis-1"},D={class:"duration"},N={key:0,class:"use"},R=k({__name:"music-card",props:{music:{type:Object,defalut:{}},isShowUse:{type:Boolean,defalut:!1}},setup(e){const f=F(),{audioRef:o,musicStatus:s,statusId:c}=x(f),i=e,h=V(()=>c.value===i.music.id),y=()=>{h.value||(s.value=!1,o.value.src=i.music.media_url,c.value=i.music.id),s.value?(o.value.pause(),s.value=!1):(o.value.play(),s.value=!0)};return(P,g)=>{const C=u("VideoPause"),_=u("el-icon"),r=u("VideoPlay");return a(),m("div",U,[t("div",{class:"icon",onClick:$(y,["stop"])},[n(s)&&n(c)===e.music.id?(a(),v(_,{key:0},{default:p(()=>[l(C)]),_:1})):(a(),v(_,{key:1},{default:p(()=>[l(r)]),_:1}))],8,I),t("div",O,[t("span",b,d(e.music.title),1),t("span",j,d(e.music.author||"\u65E0\u6B4C\u624B\u4FE1\u606F"),1)]),t("div",D,d(`(${e.music.duration}s)`),1),e.isShowUse?(a(),m("div",N,"\u4E0B\u8F7D\u5E76\u4F7F\u7528")):B("",!0)])}}}),W=S(R,[["__scopeId","data-v-45d3012a"]]);const T={class:"musicCard"},q={class:"avatar"},z=["onClick"],A={class:"intro"},M={class:"title text-ellipsis-1"},G={class:"author text-ellipsis-1"},H={key:0,class:"use"},J=k({__name:"music-card",props:{music:{type:Object,defalut:{}},isShowUse:{type:Boolean,defalut:!1}},setup(e){const f=F(),{audioRef:o,musicStatus:s,statusId:c}=x(f),i=e,h=()=>{y.value||(s.value=!1,o.value.src=i.music.url,c.value=i.music.id),s.value?(o.value.pause(),s.value=!1):(o.value.play(),s.value=!0)},y=V(()=>c.value===i.music.id);return(P,g)=>{const C=u("el-avatar"),_=u("VideoPause"),r=u("el-icon"),w=u("VideoPlay");return a(),m("div",T,[t("div",q,[l(C,{size:46,src:e.music.cover,shape:"square"},null,8,["src"]),t("div",{class:"icon",onClick:$(h,["stop"])},[n(s)&&n(c)===e.music.id?(a(),v(r,{key:0},{default:p(()=>[l(_)]),_:1})):(a(),v(r,{key:1},{default:p(()=>[l(w)]),_:1}))],8,z)]),t("div",A,[t("span",M,d(e.music.title),1),t("span",G,d(n(E)(e.music.duration/1e3)),1)]),e.isShowUse?(a(),m("div",H,"\u4E0B\u8F7D\u5E76\u4F7F\u7528")):B("",!0)])}}}),X=S(J,[["__scopeId","data-v-a53ade9e"]]);export{X as a,W as m};
