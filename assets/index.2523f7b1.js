const a=u=>({none:"\u65E0",border:"\u8FB9\u6846",background:"\u80CC\u666F"})[u],r=[{value:"custom",label:"\u81EA\u5B9A\u4E49\u8FB9\u6846"}],t=[{value:"one",label:"\u5355\u8FB9\u6846"},{value:"many",label:"\u591A\u8FB9\u6846"}],d=[{value:"custom",label:"\u81EA\u5B9A\u4E49\u80CC\u666F"}],s=[{value:"one",label:"\u5355\u80CC\u666F"},{value:"many",label:"\u591A\u80CC\u666F"}],i={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",trigger:"blur"}],process:[{required:!0,message:"\u8BF7\u9009\u62E9\u52A0\u5DE5\u6A21\u5F0F",trigger:"change"}],border:[{required:!0,message:"\u8BF7\u9009\u62E9\u8FB9\u6846\u6A21\u5F0F",trigger:"change"}],background:[{required:!0,message:"\u8BF7\u9009\u62E9\u80CC\u666F\u6A21\u5F0F",trigger:"change"}],use_mode:[{required:!0,message:"\u8BF7\u9009\u62E9\u4F7F\u7528\u6A21\u5F0F",trigger:"change"}],"data.Border":[{required:!0,message:"\u8BF7\u9009\u62E9\u8FB9\u6846",trigger:"change"}],"data.Background":[{required:!0,message:"\u8BF7\u9009\u62E9\u80CC\u666F",trigger:"change"}]},l={keyword:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u952E\u8BCD\u7EC4",trigger:"change"}],"data.VideoTitle":[{required:!0,message:"\u8BF7\u8BBE\u7F6E\u53D1\u5E03\u4F5C\u54C1\u6807\u9898\u914D\u7F6E",trigger:"change"}],"data.VideoTags":[{required:!0,message:"\u8BF7\u8BBE\u7F6E\u53D1\u5E03\u4F5C\u54C1\u8BDD\u9898\u914D\u7F6E",trigger:"change"}]},g={"data.MaterialConfig":[{required:!0,message:"\u8BF7\u9009\u62E9\u7D20\u6750\u6DFB\u52A0\u6A21\u5F0F",trigger:"change"}],"data.Material":[{required:!0,message:"\u8BF7\u9009\u62E9\u7D20\u6750",trigger:"change"}],"data.Scene[0]":[{required:!0,message:"\u8BF7\u6DFB\u52A0\u7D20\u6750",trigger:"change"}],"data.Scene[1]":[{required:!0,message:"\u8BF7\u6DFB\u52A0\u7D20\u6750",trigger:"change"}],"data.Scene[2]":[{required:!0,message:"\u8BF7\u6DFB\u52A0\u7D20\u6750",trigger:"change"}],"data.Scene[3]":[{required:!0,message:"\u8BF7\u6DFB\u52A0\u7D20\u6750",trigger:"change"}],"data.Scene[4]":[{required:!0,message:"\u8BF7\u6DFB\u52A0\u7D20\u6750",trigger:"change"}],"data.NumMode":[{required:!0,message:"\u8BF7\u9009\u62E9\u5355\u56FE\u6587\u4F7F\u7528\u7D20\u6750\u6A21\u5F0F",trigger:"change"}],"data.AppointNum":[{required:!0,message:"\u8BF7\u9009\u62E9\u6307\u5B9A\u53D1\u5E03\u6570",trigger:"change"}],"data.RandomNum[0]":[{required:!0,message:"\u8BF7\u9009\u62E9\u968F\u673A\u53D1\u5E03\u8303\u56F4",trigger:"change"}],"data.RandomNum[1]":[{required:!0,message:"\u8BF7\u9009\u62E9\u968F\u673A\u53D1\u5E03\u8303\u56F4",trigger:"change"}],"data.MaterialUseMode":[{required:!0,message:"\u8BF7\u9009\u62E9\u7D20\u6750\u4F7F\u7528\u6A21\u5F0F",trigger:"change"}],"data.PublishNum":[{required:!0,message:"\u8BF7\u8F93\u5165\u53EF\u53D1\u6570\u91CF",trigger:"blur"}],"data.VideoCover":[{required:!0,message:"\u8BF7\u6DFB\u52A0\u5C01\u9762\u7D20\u6750",trigger:"change"}],video_cover:[{required:!0,message:"\u8BF7\u9009\u62E9\u5C01\u9762\u7D20\u6750",trigger:"change"}],audio_douyin:[{required:!0,message:"\u8BF7\u9009\u62E9\u6296\u97F3\u80CC\u666F\u97F3\u4E50",trigger:"change"}],audio_kuaishou:[{required:!0,message:"\u8BF7\u9009\u62E9\u5FEB\u624B\u80CC\u666F\u97F3\u4E50",trigger:"change"}]},n=[{id:1,name:"\u5730\u533A\u8BCD",label:"diqu",isAdd:!0,type:"button",index:0},{id:11,name:",",label:"",isAdd:!0,type:"select",index:1},{id:2,name:"\u54C1\u724C\u8BCD",label:"pinpai",isAdd:!0,type:"button",index:2},{id:22,name:",",label:"",isAdd:!0,type:"select",index:3},{id:3,name:"\u4EA7\u54C1\u8BCD",label:"zhuci",isAdd:!0,type:"button",index:4},{id:33,name:",",label:"",isAdd:!0,type:"select",index:5},{id:4,name:"\u5173\u8054\u8BCD",label:"houzhui",isAdd:!0,type:"button",index:6},{id:44,name:",",label:"",isAdd:!0,type:"select",index:7},{id:5,name:"\u5356\u70B9\u8BCD",label:"maidian",isAdd:!0,type:"button",index:8},{id:55,name:",",label:"\u3002",isAdd:!0,type:"select",index:9},{id:6,name:"\u5F00\u573A\u767D",label:"kaichang",isAdd:!0,type:"button",index:10},{id:66,name:",",label:",",isAdd:!0,type:"select",index:11},{id:7,name:"\u5185\u5BB9\u4ECB\u7ECD",label:"jieshao",isAdd:!0,type:"button",index:12},{id:77,name:",",label:",",isAdd:!0,type:"select",index:13},{id:8,name:"\u7ED3\u5C3E",label:"jiewei",isAdd:!0,type:"button",index:14}],F=[{value:"\uFF0C",label:"\uFF0C"},{value:"\u3001",label:"\u3001"},{value:"\u3002",label:"\u3002"}],o=[{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:10,label:10},{value:20,label:20}],c=[{value:"random",label:"\u968F\u673A\u7EC4\u5408"},{value:"zhuci",label:"\u4EA7\u54C1"},{value:"diqu+zhuci",label:"\u5730\u533A+\u4EA7\u54C1"},{value:"zhuci+houzhui",label:"\u4EA7\u54C1+\u5173\u8054"},{value:"diqu+zhuci+houzhui",label:"\u5730\u533A+\u4EA7\u54C1+\u5173\u8054"}],B=[{value:1,label:"\u7D20\u6750\u6A21\u5F0F"},{value:2,label:"\u573A\u666F\u6A21\u5F0F"}],b=[{value:1,label:"\u6307\u5B9A\u6570\u91CF"},{value:2,label:"\u968F\u673A\u6570\u91CF"}],m=[{value:0,label:"\u91CD\u590D\u4F7F\u7528"},{value:1,label:"\u4E0D\u91CD\u590D\u4F7F\u7528"}],A=[{value:0,label:"\u9ED8\u8BA4"},{value:1,label:"\u81EA\u5B9A\u4E49\u5C01\u9762"}];export{t as a,r as b,a as c,d,s as e,i as f,m as g,A as h,n as i,o as j,B as m,F as p,c as r,l as s,g as t,b as u};
