import{_ as g,d as b,r as n,b as C,e as h,o as f,c as B,f as e,w as a,g as _,h as t}from"./app.61ebdab2.js";const p=b({name:"Button",setup(){const o=n(!1),l=n("\u6D4B\u8BD5\u6587\u672C"),r=n("2"),d=C(["2","3"]),i=C([{name:"sheet 1",r:10,c:20,status:0,index:0,order:0,hide:0,config:{freeze:{l:2,t:3,r:9,b:12},merge:[{r:2,c:3,rs:3,cs:4}],rh:[{r:2,h:24},{r:4,h:48}],cw:[{c:3,w:120},{c:7,w:148}],rv:[{r:7,v:0},{r:8,v:0}],cv:[{c:7,v:0}],border:[{type:"cell",r:7,c:7,v:{l:{s:1,cl:"red"},r:{s:1,cl:"rgba(99,99,99,0.7)"},t:{s:1,cl:"rgb(200,200,200)"},b:{s:1,cl:"#56789A"}}},{type:"range",r:[8,9],c:[4,6],bt:"border-all",s:1,cl:"cyan"}]},data:[{r:1,c:2,v:"123"},{r:10,c:20,v:123},{r:7,c:4,v:"\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1\u503C1"}]},{name:"sheet 2",r:15,c:25,status:0,index:1,order:1,hide:0,data:[]}]);return{isLoading:o,selectedValues:r,checkedValues:d,clickEvent:()=>{o.value=!o.value},changeMethod:(c,s)=>{console.log("changeMethod"),console.log(s),console.log(c)},gridData:i,inputValue:l}}}),v=_("h3",{id:"_3",tabindex:"-1"},[_("a",{class:"header-anchor",href:"#_3","aria-hidden":"true"},"#"),t(" 3")],-1),F=t("\u5927\u578B\u5C3A\u5BF8"),V=t("\u9ED8\u8BA4\u5C3A\u5BF8"),k=t("\u9ED8\u8BA4\u5C3A\u5BF8"),A=t("\u8FF7\u4F60\u5C3A\u5BF8"),x=t("\u5927\u578B\u5C3A\u5BF8"),z=t("\u9ED8\u8BA4\u5C3A\u5BF8"),D=t("\u9ED8\u8BA4\u5C3A\u5BF8"),E=t("\u8FF7\u4F60\u5C3A\u5BF8");function w(o,l,r,d,i,m){const u=h("vma-grid-checkbox"),c=h("vma-grid-checkbox-group");return f(),B("div",null,[v,e(c,{modelValue:o.checkedValues,"onUpdate:modelValue":l[0]||(l[0]=s=>o.checkedValues=s),size:"mini",type:"warning"},{default:a(()=>[e(u,{size:"large",label:"2"},{default:a(()=>[F]),_:1}),e(u,{label:"3"},{default:a(()=>[V]),_:1}),e(u,{size:"normal",label:"4"},{default:a(()=>[k]),_:1}),e(u,{size:"small",label:"5",content:"\u5C0F\u578B\u5C3A\u5BF8FromContent"}),e(u,{size:"mini",label:"6"},{default:a(()=>[A]),_:1})]),_:1},8,["modelValue"]),e(c,{modelValue:o.checkedValues,"onUpdate:modelValue":l[1]||(l[1]=s=>o.checkedValues=s),onChange:o.changeMethod},{default:a(()=>[e(u,{size:"large",disabled:"",label:"2"},{default:a(()=>[x]),_:1}),e(u,{label:"3",type:"primary"},{default:a(()=>[z]),_:1}),e(u,{size:"xx-large",label:"4"},{default:a(()=>[D]),_:1}),e(u,{size:"small",label:"5",content:"\u5C0F\u578B\u5C3A\u5BF8FromContent"}),e(u,{size:"mini",label:"6",disabled:""},{default:a(()=>[E]),_:1})]),_:1},8,["modelValue","onChange"])])}var M=g(p,[["render",w],["__file","grid-checkbox.html.vue"]]);export{M as default};
