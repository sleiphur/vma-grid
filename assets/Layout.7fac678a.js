var p=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var u=(o,e,a)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,i=(o,e)=>{for(var a in e||(e={}))v.call(e,a)&&u(o,a,e[a]);if(m)for(var a of m(e))c.call(e,a)&&u(o,a,e[a]);return o};import{f as d,k as s,q as f,s as g,l as b,t as y,v as h,x as D,r,y as S,z as L}from"./app.9dcda924.js";import{S as P}from"./SkipLink.f538d980.js";var B=d({name:"FadeSlideY",setup(o,{slots:e}){const a=g(),n=a.resolve,l=a.pending;return()=>s(f,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:l},()=>{var t;return(t=e.default)===null||t===void 0?void 0:t.call(e)})}}),T=d({name:"Layout",setup(){const o=L(),e=b(),a=S(),n=y(),l=h(),t=D(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[s(P),s(r("CommonWrapper"),{},i(i({default:()=>n.value.home?s(r("HomePage")):s(B,()=>s(r("NormalPage"),{key:a.value.path}))},t.value!=="none"?{navScreenBottom:()=>s(r("BloggerInfo"))}:{}),!l.value&&t.value==="always"?{sidebar:()=>s(r("BloggerInfo"))}:{}))]}});export{T as default};