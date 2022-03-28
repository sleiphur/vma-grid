import{b as l,o as n,e as i,g as e,f as d,w as o,F as c,c as s,h as t}from"./app.e03e3658.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const u={},f=s('<h1 id="module-index" tabindex="-1"><a class="header-anchor" href="#module-index" aria-hidden="true">#</a> Module: index</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>',3),_=t("DepParser"),m=t("FormulaError"),p=t("FormulaParser"),b=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),g=t("SSF"),x=e("h3",{id:"variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variables","aria-hidden":"true"},"#"),t(" Variables")],-1),y=t("Address"),v=t("Criteria"),C=t("Factorials"),T=t("FormulaHelpers"),k=t("MAX_COLUMN"),F=t("MAX_ROW"),L=t("ReversedTypes"),N=t("Types"),R=t("WildCard"),D=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="ssf" tabindex="-1"><a class="header-anchor" href="#ssf" aria-hidden="true">#</a> SSF</h3><p>\u2022 <strong>SSF</strong>: <code>any</code></p><h2 id="variables-1" tabindex="-1"><a class="header-anchor" href="#variables-1" aria-hidden="true">#</a> Variables</h2><h3 id="address" tabindex="-1"><a class="header-anchor" href="#address" aria-hidden="true">#</a> Address</h3><p>\u2022 <code>Const</code> <strong>Address</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>columnNameToNumber</code></td><td style="text-align:left;">(<code>columnName</code>: <code>any</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>columnNumberToName</code></td><td style="text-align:left;">(<code>number</code>: <code>any</code>) =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>extend</code></td><td style="text-align:left;">(<code>range1</code>: <code>any</code>, <code>range2</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>isCellRef</code></td><td style="text-align:left;">(<code>param</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>isRangeRef</code></td><td style="text-align:left;">(<code>param</code>: <code>any</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',9),M={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L103",target:"_blank",rel:"noopener noreferrer"},w=t("src/formula/formulas/helpers.ts:103"),A=s('<hr><h3 id="criteria" tabindex="-1"><a class="header-anchor" href="#criteria" aria-hidden="true">#</a> Criteria</h3><p>\u2022 <code>Const</code> <strong>Criteria</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parse</code></td><td style="text-align:left;">(<code>criteria</code>: <code>any</code>) =&gt; { <code>match</code>: <code>boolean</code> ; <code>op</code>: <code>string</code> = &#39;wc&#39;; <code>value</code>: <code>RegExp</code> } | { <code>match</code>: <code>undefined</code> ; <code>op</code>: <code>any</code> ; <code>value</code>: <code>any</code> }</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',6),O={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L488",target:"_blank",rel:"noopener noreferrer"},E=t("src/formula/formulas/helpers.ts:488"),S=s('<hr><h3 id="factorials" tabindex="-1"><a class="header-anchor" href="#factorials" aria-hidden="true">#</a> Factorials</h3><p>\u2022 <code>Const</code> <strong>Factorials</strong>: <code>number</code>[]</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',4),W={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L19",target:"_blank",rel:"noopener noreferrer"},P=t("src/formula/formulas/helpers.ts:19"),V=e("hr",null,null,-1),X=e("h3",{id:"formulahelpers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#formulahelpers","aria-hidden":"true"},"#"),t(" FormulaHelpers")],-1),j=e("p",null,[t("\u2022 "),e("code",null,"Const"),t(),e("strong",null,"FormulaHelpers"),t(": "),e("code",null,"FormulaHelpers")],-1),H=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),B={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L465",target:"_blank",rel:"noopener noreferrer"},U=t("src/formula/formulas/helpers.ts:465"),I=e("hr",null,null,-1),q=e("h3",{id:"max-column",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#max-column","aria-hidden":"true"},"#"),t(" MAX_COLUMN")],-1),z=e("p",null,[t("\u2022 "),e("code",null,"Const"),t(),e("strong",null,"MAX_COLUMN"),t(": "),e("code",null,"16384")],-1),G=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),J={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/index.ts#L17",target:"_blank",rel:"noopener noreferrer"},K=t("src/formula/index.ts:17"),Q=e("hr",null,null,-1),Y=e("h3",{id:"max-row",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#max-row","aria-hidden":"true"},"#"),t(" MAX_ROW")],-1),Z=e("p",null,[t("\u2022 "),e("code",null,"Const"),t(),e("strong",null,"MAX_ROW"),t(": "),e("code",null,"1048576")],-1),$=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),t(" Defined in")],-1),ee={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/index.ts#L16",target:"_blank",rel:"noopener noreferrer"},te=t("src/formula/index.ts:16"),de=s('<hr><h3 id="reversedtypes" tabindex="-1"><a class="header-anchor" href="#reversedtypes" aria-hidden="true">#</a> ReversedTypes</h3><p>\u2022 <code>Const</code> <strong>ReversedTypes</strong>: <code>any</code> = <code>{}</code></p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',4),ae={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L98",target:"_blank",rel:"noopener noreferrer"},oe=t("src/formula/formulas/helpers.ts:98"),re=e("hr",null,null,-1),se=e("h3",{id:"types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#types","aria-hidden":"true"},"#"),t(" Types")],-1),le=e("p",null,[t("\u2022 "),e("code",null,"Const"),t(),e("strong",null,"Types"),t(": "),e("code",null,"NumberDic")],-1),ne=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),t(" Defined in")],-1),ie={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L8",target:"_blank",rel:"noopener noreferrer"},ce=t("src/formula/formulas/helpers.ts:8"),he=s('<hr><h3 id="wildcard" tabindex="-1"><a class="header-anchor" href="#wildcard" aria-hidden="true">#</a> WildCard</h3><p>\u2022 <code>Const</code> <strong>WildCard</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>isWildCard</code></td><td style="text-align:left;">(<code>obj</code>: <code>any</code>) =&gt; <code>boolean</code></td></tr><tr><td style="text-align:left;"><code>toRegex</code></td><td style="text-align:left;">(<code>lookupText</code>: <code>any</code>, <code>flags?</code>: <code>any</code>) =&gt; <code>RegExp</code></td></tr></tbody></table><h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>',6),ue={href:"https://github.com/sleiphur/vma-grid/blob/b718223/src/formula/formulas/helpers.ts#L467",target:"_blank",rel:"noopener noreferrer"},fe=t("src/formula/formulas/helpers.ts:467");function _e(me,pe){const a=l("RouterLink"),r=l("ExternalLinkIcon");return n(),i(c,null,[f,e("ul",null,[e("li",null,[d(a,{to:"/formula/classes/index.DepParser.html"},{default:o(()=>[_]),_:1})]),e("li",null,[d(a,{to:"/formula/classes/index.FormulaError.html"},{default:o(()=>[m]),_:1})]),e("li",null,[d(a,{to:"/formula/classes/index.FormulaParser.html"},{default:o(()=>[p]),_:1})])]),b,e("ul",null,[e("li",null,[d(a,{to:"/formula/modules/#ssf"},{default:o(()=>[g]),_:1})])]),x,e("ul",null,[e("li",null,[d(a,{to:"/formula/modules/#address"},{default:o(()=>[y]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#criteria"},{default:o(()=>[v]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#factorials"},{default:o(()=>[C]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#formulahelpers"},{default:o(()=>[T]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#max_column"},{default:o(()=>[k]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#max_row"},{default:o(()=>[F]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#reversedtypes"},{default:o(()=>[L]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#types"},{default:o(()=>[N]),_:1})]),e("li",null,[d(a,{to:"/formula/modules/#wildcard"},{default:o(()=>[R]),_:1})])]),D,e("p",null,[e("a",M,[w,d(r)])]),A,e("p",null,[e("a",O,[E,d(r)])]),S,e("p",null,[e("a",W,[P,d(r)])]),V,X,j,H,e("p",null,[e("a",B,[U,d(r)])]),I,q,z,G,e("p",null,[e("a",J,[K,d(r)])]),Q,Y,Z,$,e("p",null,[e("a",ee,[te,d(r)])]),de,e("p",null,[e("a",ae,[oe,d(r)])]),re,se,le,ne,e("p",null,[e("a",ie,[ce,d(r)])]),he,e("p",null,[e("a",ue,[fe,d(r)])])],64)}var xe=h(u,[["render",_e]]);export{xe as default};