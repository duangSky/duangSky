import{u as o}from"./useECharts.e19f33e8.js";import{b as r}from"./props.6057752a.js";import{d as s,r as a,s as i,_ as n,o as u,c as p,O as c}from"./index.5a90395c.js";const l=s({props:r,setup(){const t=a(null),{setOptions:e}=o(t);return i(()=>{e({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),{chartRef:t}}});function d(t,e,f,m,h,x){return u(),p("div",{ref:"chartRef",style:c({height:t.height,width:t.width})},null,4)}const _=n(l,[["render",d]]);export{_ as default};
