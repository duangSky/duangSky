import{d as y,a0 as x,j as e,o as _,c as b,a as c,z as k,k as a,w as i,t as C,_ as S,b as h,y as V,F as g}from"./index.5a90395c.js";import{u as D}from"./mixShear.0f781a9f.js";import{u as w}from"./audio.e4943d80.js";const j={class:"oralCard"},B={class:"avatar mask"},F=["onClick"],I={class:"intro"},M={class:"name text-ellipsis-1"},N={class:"desc text-ellipsis-1"},O=y({__name:"oral-card",props:{oral:{type:Object,defalut:{}}},setup(o){const d=w(),{audioRef:s,statusId:n,musicStatus:t}=x(d),r=o,u=()=>{t.value&&(t.value=!1),n.value&&(n.value=""),s.value.src=r.oral.VoiceUrl,s.value.play()};return(m,f)=>{const p=e("VideoPlay"),l=e("el-icon"),v=e("el-avatar");return _(),b("div",j,[c("div",B,[c("div",{class:"turn",onClick:k(u,["stop"])},[a(l,null,{default:i(()=>[a(p)]),_:1})],8,F),a(v,{src:o.oral.CoverUrl},null,8,["src"])]),c("div",I,[c("span",M,C(o.oral.Name),1),c("span",N,C(o.oral.Desc),1)])])}}}),P=S(O,[["__scopeId","data-v-aad5774e"]]);const $=y({__name:"oral-dub",props:{orals:{type:Array,default:[]}},setup(o){const d=D(),{form:s}=x(d),n=t=>{console.log(t),s.value.data.VoiceSubtitle=s.value.data.VoiceSubtitle.filter(r=>r.Voice!==t.Voice)};return(t,r)=>{const u=e("CircleCloseFilled"),m=e("el-icon"),f=e("el-col"),p=e("el-row");return _(),h(p,null,{default:i(()=>[(_(!0),b(g,null,V(o.orals,l=>(_(),h(f,{xl:3,lg:4,md:6,sm:8,sx:12,key:l.Voice},{default:i(()=>[a(m,{class:"close",onClick:v=>n(l)},{default:i(()=>[a(u)]),_:2},1032,["onClick"]),a(P,{oral:l},null,8,["oral"])]),_:2},1024))),128))]),_:1})}}}),z=S($,[["__scopeId","data-v-347a5d9c"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as a,U as b,P as o};
