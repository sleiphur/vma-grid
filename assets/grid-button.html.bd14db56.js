import{_ as g,d as h,r as o,b as r,e as m,o as k,c as F,f as t,w as n,g as d,h as i}from"./app.61ebdab2.js";const D=h({name:"Button",setup(){const u=o(!1),a=o("\u6D4B\u8BD5\u6587\u672C"),l=o("2"),s=r(["2","3"]),c=r([{name:"sheet 1",r:10,c:20,status:0,index:0,order:0,hide:0,config:{freeze:{l:2,t:3,r:9,b:12},merge:[{r:2,c:3,rs:3,cs:4}],rh:[{r:2,h:24},{r:4,h:48}],cw:[{c:3,w:120},{c:7,w:148}],rv:[{r:7,v:0},{r:8,v:0}],cv:[{c:7,v:0}],border:[{type:"cell",r:7,c:7,v:{l:{s:1,cl:"red"},r:{s:1,cl:"rgba(99,99,99,0.7)"},t:{s:1,cl:"rgb(200,200,200)"},b:{s:1,cl:"#56789A"}}},{type:"range",r:[8,9],c:[4,6],bt:"border-all",s:1,cl:"cyan"}]},data:[{r:1,c:2,v:"123"},{r:10,c:20,v:123},{r:7,c:4,v:"\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1"}]},{name:"sheet 2",r:15,c:25,status:0,index:1,order:1,hide:0,data:[]}]);return{isLoading:u,selectedValues:l,checkedValues:s,clickEvent:()=>{u.value=!u.value},changeMethod:(p,_)=>{console.log("changeMethod"),console.log(_),console.log(p)},gridData:c,inputValue:a}}}),f=d("h3",{id:"_1",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#_1","aria-hidden":"true"},"#"),i(" 1")],-1),v=i("\u70B9\u51FB\u8FD9\u91CC"),B=i("\u70B9\u51FB\u8FD9\u91CC"),y=i("\u70B9\u51FB\u8FD9\u91CC"),E=i("\u70B9\u51FB\u8FD9\u91CC"),A=i("\u70B9\u51FB\u8FD9\u91CC"),b=i("\u70B9\u51FB\u8FD9\u91CC"),z=i("\u70B9\u51FB\u8FD9\u91CC"),x=i(" \u8FF7\u4F60\u5C3A\u5BF8\u6309\u94AE"),w=i("\u8FF7\u4F60\u5C3A\u5BF8\u6309\u94AE"),V=i("\u5927\u5C3A\u5BF8\u6309\u94AE"),L=i("\u5927\u5C3A\u5BF8\u6309\u94AE"),$=i("\u9ED8\u8BA4\u5C3A\u5BF8\u6309\u94AE");function M(u,a,l,s,c,C){const e=m("vma-grid-button");return k(),F("div",null,[f,t(e,{plain:"",type:"primary",size:"mini","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[v]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"small","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[B]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"normal","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[y]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[E]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"x-large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[A]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"xx-large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[b]),_:1},8,["onClick"]),t(e,{plain:"",type:"primary",size:"xxx-large","loading-text":"\u52A0\u8F7D\u4E2D...",onClick:u.clickEvent},{default:n(()=>[z]),_:1},8,["onClick"]),t(e,{loading:u.isLoading,disabled:u.isLoading,type:"default",size:"mini","loading-text":"\u52A0\u8F7D\u4E2D..."},{default:n(()=>[x]),_:1},8,["loading","disabled"]),t(e,{plain:"",loading:u.isLoading,type:"warning",size:"mini","loading-text":"\u52A0\u8F7D\u4E2D..."},{default:n(()=>[w]),_:1},8,["loading"]),t(e,{round:"",type:"primary",size:"large",icon:"bookmark"},{default:n(()=>[V]),_:1}),t(e,{plain:"",round:"",type:"primary",size:"mini",icon:"bookmark"},{default:n(()=>[L]),_:1}),t(e,{round:"",plain:"",type:"success",icon:"bookmark","icon-position":"right"},{default:n(()=>[$]),_:1}),t(e,{type:"warning",size:"small",icon:"bookmark"}),t(e,{type:"danger",round:"",disabled:"",size:"small",icon:"bookmark"})])}var T=g(D,[["render",M],["__file","grid-button.html.vue"]]);export{T as default};