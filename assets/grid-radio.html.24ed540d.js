import{d as f,r as n,a as _,b as m,o as b,e as g,f as e,w as a,F as p,g as C,h as u}from"./app.89e300c2.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";const v=f({name:"Button",setup(){const s=n(!1),t=n("\u6D4B\u8BD5\u6587\u672C"),r=n("2"),i=_(["2","3"]),c=_([{name:"sheet 1",r:10,c:20,status:0,index:0,order:0,hide:0,config:{freeze:{l:2,t:3,r:9,b:12},merge:[{r:2,c:3,rs:3,cs:4}],rh:[{r:2,h:24},{r:4,h:48}],cw:[{c:3,w:120},{c:7,w:148}],rv:[{r:7,v:0},{r:8,v:0}],cv:[{c:7,v:0}],border:[{type:"cell",r:7,c:7,v:{l:{s:1,cl:"red"},r:{s:1,cl:"rgba(99,99,99,0.7)"},t:{s:1,cl:"rgb(200,200,200)"},b:{s:1,cl:"#56789A"}}},{type:"range",r:[8,9],c:[4,6],bt:"border-all",s:1,cl:"cyan"}]},data:[{r:1,c:2,v:"123"},{r:10,c:20,v:123},{r:7,c:4,v:"\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1"}]},{name:"sheet 2",r:15,c:25,status:0,index:1,order:1,hide:0,data:[]}]);return{isLoading:s,selectedValues:r,checkedValues:i,clickEvent:()=>{s.value=!s.value},changeMethod:(d,o)=>{console.log("changeMethod"),console.log(o),console.log(d)},gridData:c,inputValue:t}}}),z=C("h3",{id:"_2",tabindex:"-1"},[C("a",{class:"header-anchor",href:"#_2","aria-hidden":"true"},"#"),u(" 2")],-1),y=u("\u9009\u98791"),w=u("\u9009\u98792"),B=u("\u9009\u98793"),k=u("\u9009\u98795"),M=u("\u9009\u98791"),U=u("\u9009\u98792"),$=u("\u9009\u98793"),D=u("\u9009\u98795"),E=u("\u9009\u98791"),N=u("\u9009\u98792"),x=u("\u9009\u98793"),F=u("\u9009\u98795"),A=u("\u9009\u98791"),L=u("\u9009\u98792"),R=u("\u9009\u98793"),T=u("\u9009\u98795");function j(s,t,r,i,c,h){const l=m("vma-grid-radio"),d=m("vma-grid-radio-group");return b(),g(p,null,[z,e(d,{size:"mini",type:"danger",modelValue:s.selectedValues,"onUpdate:modelValue":t[0]||(t[0]=o=>s.selectedValues=o),onChange:s.changeMethod},{default:a(()=>[e(l,{size:"large",label:"1"},{default:a(()=>[y]),_:1}),e(l,{label:"2"},{default:a(()=>[w]),_:1}),e(l,{size:"normal",label:"3",disabled:""},{default:a(()=>[B]),_:1}),e(l,{label:"4",size:"small",content:"\u9009\u98794*"}),e(l,{size:"mini",label:"5"},{default:a(()=>[k]),_:1})]),_:1},8,["modelValue","onChange"]),e(d,{size:"normal",type:"warning",modelValue:s.selectedValues,"onUpdate:modelValue":t[1]||(t[1]=o=>s.selectedValues=o)},{default:a(()=>[e(l,{size:"large",label:"1"},{default:a(()=>[M]),_:1}),e(l,{label:"2"},{default:a(()=>[U]),_:1}),e(l,{size:"normal",label:"3",disabled:""},{default:a(()=>[$]),_:1}),e(l,{label:"4",size:"small",content:"\u9009\u98794*"}),e(l,{size:"mini",label:"5"},{default:a(()=>[D]),_:1})]),_:1},8,["modelValue"]),e(d,{size:"small",modelValue:s.selectedValues,"onUpdate:modelValue":t[2]||(t[2]=o=>s.selectedValues=o)},{default:a(()=>[e(l,{size:"large",label:"1"},{default:a(()=>[E]),_:1}),e(l,{label:"2"},{default:a(()=>[N]),_:1}),e(l,{size:"normal",label:"3",disabled:""},{default:a(()=>[x]),_:1}),e(l,{label:"4",size:"small",content:"\u9009\u98794*"}),e(l,{size:"mini",label:"5"},{default:a(()=>[F]),_:1})]),_:1},8,["modelValue"]),e(d,{type:"primary",modelValue:s.selectedValues,"onUpdate:modelValue":t[3]||(t[3]=o=>s.selectedValues=o)},{default:a(()=>[e(l,{size:"xxx-large",label:"1"},{default:a(()=>[A]),_:1}),e(l,{label:"2"},{default:a(()=>[L]),_:1}),e(l,{size:"normal",label:"3",disabled:""},{default:a(()=>[R]),_:1}),e(l,{label:"4",size:"small",content:"\u9009\u98794*"}),e(l,{size:"mini",label:"5"},{default:a(()=>[T]),_:1})]),_:1},8,["modelValue"])],64)}var H=V(v,[["render",j]]);export{H as default};