import{_ as g,d as h,r as o,a as c,b as m,o as k,e as F,f as t,w as i,F as D,g as d,h as n}from"./app.8eaa6846.js";const f=h({name:"Button",setup(){const u=o(!1),a=o("\u6D4B\u8BD5\u6587\u672C"),l=o("2"),s=c(["2","3"]),r=c([{name:"sheet 1",r:10,c:20,status:0,index:0,order:0,hide:0,config:{freeze:{l:2,t:3,r:9,b:12},merge:[{r:2,c:3,rs:3,cs:4}],rh:[{r:2,h:24},{r:4,h:48}],cw:[{c:3,w:120},{c:7,w:148}],rv:[{r:7,v:0},{r:8,v:0}],cv:[{c:7,v:0}],border:[{type:"cell",r:7,c:7,v:{l:{s:1,cl:"red"},r:{s:1,cl:"rgba(99,99,99,0.7)"},t:{s:1,cl:"rgb(200,200,200)"},b:{s:1,cl:"#56789A"}}},{type:"range",r:[8,9],c:[4,6],bt:"border-all",s:1,cl:"cyan"}]},data:[{r:1,c:2,v:"123"},{r:10,c:20,v:123},{r:7,c:4,v:"\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1"}]},{name:"sheet 2",r:15,c:25,status:0,index:1,order:1,hide:0,data:[]}]);return{isLoading:u,selectedValues:l,checkedValues:s,clickEvent:()=>{u.value=!u.value},changeMethod:(p,_)=>{console.log("changeMethod"),console.log(_),console.log(p)},gridData:r,inputValue:a}}}),B=d("h3",{id:"_1",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#_1","aria-hidden":"true"},"#"),n(" 1")],-1),v=n("\u70B9\u51FB\u8FD9\u91CC"),y=n("\u70B9\u51FB\u8FD9\u91CC"),E=n("\u70B9\u51FB\u8FD9\u91CC"),A=n("\u70B9\u51FB\u8FD9\u91CC"),b=n("\u70B9\u51FB\u8FD9\u91CC"),z=n("\u70B9\u51FB\u8FD9\u91CC"),x=n("\u70B9\u51FB\u8FD9\u91CC"),w=n(" \u8FF7\u4F60\u5C3A\u5BF8\u6309\u94AE"),V=n("\u8FF7\u4F60\u5C3A\u5BF8\u6309\u94AE"),L=n("\u5927\u5C3A\u5BF8\u6309\u94AE"),$=n("\u5927\u5C3A\u5BF8\u6309\u94AE"),M=n("\u9ED8\u8BA4\u5C3A\u5BF8\u6309\u94AE");function N(u,a,l,s,r,C){const e=m("vma-grid-button");return k(),F(D,null,[B,t(e,{plain:"",type:"primary",size:"mini","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[v]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"small","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[y]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"normal","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[E]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[A]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"x-large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[b]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"xx-large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[z]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"xxx-large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:i(()=>[x]),_:1},8,["onClick"]),t(e,{loading:u.isLoading,disabled:u.isLoading,type:"default",size:"mini","loading-text":"\u52A0\u8F7D\u4E2D..."},{default:i(()=>[w]),_:1},8,["loading","disabled"]),t(e,{plain:"",loading:u.isLoading,type:"warning",size:"mini","loading-text":"\u52A0\u8F7D\u4E2D..."},{default:i(()=>[V]),_:1},8,["loading"]),t(e,{round:"",type:"primary",size:"large",icon:"bookmark"},{default:i(()=>[L]),_:1}),t(e,{plain:"",round:"",type:"primary",size:"mini",icon:"bookmark"},{default:i(()=>[$]),_:1}),t(e,{round:"",plain:"",type:"success",icon:"bookmark","icon-position":"right"},{default:i(()=>[M]),_:1}),t(e,{type:"warning",size:"small",icon:"bookmark"}),t(e,{type:"danger",round:"",disabled:"",size:"small",icon:"bookmark"})],64)}var j=g(f,[["render",N],["__file","grid-button.html.vue"]]);export{j as default};