<template><h1 id="module-index" tabindex="-1"><a class="header-anchor" href="#module-index" aria-hidden="true">#</a> Module: index</h1>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>
<ul>
<li><RouterLink to="/formula/classes/index.DepParser.html">DepParser</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html">FormulaError</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html">FormulaParser</RouterLink></li>
</ul>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<ul>
<li><RouterLink to="/formula/modules/#ssf">SSF</RouterLink></li>
</ul>
<h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3>
<ul>
<li><RouterLink to="/formula/modules/#address">Address</RouterLink></li>
<li><RouterLink to="/formula/modules/#criteria">Criteria</RouterLink></li>
<li><RouterLink to="/formula/modules/#factorials">Factorials</RouterLink></li>
<li><RouterLink to="/formula/modules/#formulahelpers">FormulaHelpers</RouterLink></li>
<li><RouterLink to="/formula/modules/#max_column">MAX_COLUMN</RouterLink></li>
<li><RouterLink to="/formula/modules/#max_row">MAX_ROW</RouterLink></li>
<li><RouterLink to="/formula/modules/#reversedtypes">ReversedTypes</RouterLink></li>
<li><RouterLink to="/formula/modules/#types">Types</RouterLink></li>
<li><RouterLink to="/formula/modules/#wildcard">WildCard</RouterLink></li>
</ul>
<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2>
<h3 id="ssf" tabindex="-1"><a class="header-anchor" href="#ssf" aria-hidden="true">#</a> SSF</h3>
<p>• <strong>SSF</strong>: <code v-pre>any</code></p>
<h2 id="variables-1" tabindex="-1"><a class="header-anchor" href="#variables-1" aria-hidden="true">#</a> Variables</h2>
<h3 id="address" tabindex="-1"><a class="header-anchor" href="#address" aria-hidden="true">#</a> Address</h3>
<p>• <code v-pre>Const</code> <strong>Address</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>columnNameToNumber</code></td>
<td style="text-align:left">(<code v-pre>columnName</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>columnNumberToName</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extend</code></td>
<td style="text-align:left">(<code v-pre>range1</code>: <code v-pre>any</code>, <code v-pre>range2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isCellRef</code></td>
<td style="text-align:left">(<code v-pre>param</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isRangeRef</code></td>
<td style="text-align:left">(<code v-pre>param</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:103</p>
<hr>
<h3 id="criteria" tabindex="-1"><a class="header-anchor" href="#criteria" aria-hidden="true">#</a> Criteria</h3>
<p>• <code v-pre>Const</code> <strong>Criteria</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>parse</code></td>
<td style="text-align:left">(<code v-pre>criteria</code>: <code v-pre>any</code>) =&gt; { <code v-pre>match</code>: <code v-pre>boolean</code> ; <code v-pre>op</code>: <code v-pre>string</code> = 'wc'; <code v-pre>value</code>: <code v-pre>RegExp</code>  } | { <code v-pre>match</code>: <code v-pre>undefined</code> ; <code v-pre>op</code>: <code v-pre>any</code> ; <code v-pre>value</code>: <code v-pre>any</code>  }</td>
</tr>
</tbody>
</table>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:488</p>
<hr>
<h3 id="factorials" tabindex="-1"><a class="header-anchor" href="#factorials" aria-hidden="true">#</a> Factorials</h3>
<p>• <code v-pre>Const</code> <strong>Factorials</strong>: <code v-pre>number</code>[]</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:19</p>
<hr>
<h3 id="formulahelpers" tabindex="-1"><a class="header-anchor" href="#formulahelpers" aria-hidden="true">#</a> FormulaHelpers</h3>
<p>• <code v-pre>Const</code> <strong>FormulaHelpers</strong>: <code v-pre>FormulaHelpers</code></p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:465</p>
<hr>
<h3 id="max-column" tabindex="-1"><a class="header-anchor" href="#max-column" aria-hidden="true">#</a> MAX_COLUMN</h3>
<p>• <code v-pre>Const</code> <strong>MAX_COLUMN</strong>: <code v-pre>16384</code></p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/index.ts:17</p>
<hr>
<h3 id="max-row" tabindex="-1"><a class="header-anchor" href="#max-row" aria-hidden="true">#</a> MAX_ROW</h3>
<p>• <code v-pre>Const</code> <strong>MAX_ROW</strong>: <code v-pre>1048576</code></p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/index.ts:16</p>
<hr>
<h3 id="reversedtypes" tabindex="-1"><a class="header-anchor" href="#reversedtypes" aria-hidden="true">#</a> ReversedTypes</h3>
<p>• <code v-pre>Const</code> <strong>ReversedTypes</strong>: <code v-pre>any</code> = <code v-pre>{}</code></p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:98</p>
<hr>
<h3 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h3>
<p>• <code v-pre>Const</code> <strong>Types</strong>: <code v-pre>NumberDic</code></p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:8</p>
<hr>
<h3 id="wildcard" tabindex="-1"><a class="header-anchor" href="#wildcard" aria-hidden="true">#</a> WildCard</h3>
<p>• <code v-pre>Const</code> <strong>WildCard</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>isWildCard</code></td>
<td style="text-align:left">(<code v-pre>obj</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>toRegex</code></td>
<td style="text-align:left">(<code v-pre>lookupText</code>: <code v-pre>any</code>, <code v-pre>flags?</code>: <code v-pre>any</code>) =&gt; <code v-pre>RegExp</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/helpers.ts:467</p>
</template>
