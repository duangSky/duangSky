import{a2 as i,r as u,U as t}from"./index.5a90395c.js";const n=i("imgText",()=>{const o=u({diqu:[],pinpai:[],zhuci:[],houzhui:[],maidian:[],kaichang:[],jieshao:[],jiewei:[]}),a=u({name:"",process:"none",border:"",background:"",use_mode:"",keyword:"",video_tags_num:5,video_tags_position:0,video_cover:0,audio_douyin:!0,audio_kuaishou:!0,data:{Border:[],Background:[],BorderText:{one:[],two:[],three:[],four:[]},BackgroundText:{one:[],two:[],three:[],four:[]},Zhuci:[],VideoTitle:["diqu","","pinpai","","zhuci","","houzhui","","maidian","\u3002","kaichang","\uFF0C","jieshao","\uFF0C","jiewei"],VideoTags:"random",MaterialConfig:1,Material:[],Scene:[[]],NumMode:1,AppointNum:"",RandomNum:[],MaterialUseMode:0,PublishNum:"\u4E0D\u9650\u5236",VideoCover:[],AudioDouyin:[],AudioKuaishou:[]}});return t(()=>[a.value.data.MaterialConfig,a.value.data.NumMode,a.value.data.AppointNum,a.value.data.RandomNum,a.value.data.MaterialUseMode,a.value.data.Material,a.value.data.Scene],()=>{if(a.value.data.MaterialUseMode===0){a.value.data.PublishNum="\u4E0D\u9650\u5236";return}if(a.value.data.MaterialConfig===1){let e=a.value.data.Material.length;a.value.data.NumMode===1?a.value.data.PublishNum=`${parseInt(e/(a.value.data.AppointNum?Number(a.value.data.AppointNum):1))}`:a.value.data.PublishNum=`${parseInt(e/a.value.data.RandomNum[1])||""} - ${parseInt(e/a.value.data.RandomNum[0])||""}`}else a.value.data.PublishNum=`${Math.min.apply(null,a.value.data.Scene.map(e=>e.length))}`},{deep:!0}),{form:a,makeData:o,firstClear:()=>{a.value.data.Border=[],a.value.data.Background=[],a.value.data.BorderText={one:[],two:[],three:[],four:[]},a.value.data.BackgroundText={one:[],two:[],three:[],four:[]}},handleClearAll:()=>{a.value.name="",a.value.process="none",a.value.border="",a.value.background="",a.value.use_mode="",a.value.keyword="",a.value.video_tags_num=5,a.value.video_tags_position=0,a.value.video_cover=0,a.value.audio_douyin=!0,a.value.audio_kuaishou=!0,a.value.data={Border:[],Background:[],BorderText:{one:[],two:[],three:[],four:[]},BackgroundText:{one:[],two:[],three:[],four:[]},Zhuci:[],VideoTitle:["diqu","","pinpai","","zhuci","","houzhui","","maidian","\u3002","kaichang","\uFF0C","jieshao","\uFF0C","jiewei"],VideoTags:"random",MaterialConfig:1,Material:[],Scene:[[]],NumMode:1,AppointNum:"",RandomNum:[],MaterialUseMode:0,PublishNum:"\u4E0D\u9650\u5236",VideoCover:[],AudioDouyin:[],AudioKuaishou:[]}}}});export{n as u};
