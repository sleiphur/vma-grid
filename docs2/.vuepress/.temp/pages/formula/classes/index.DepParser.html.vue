<template><h1 id="class-depparser" tabindex="-1"><a class="header-anchor" href="#class-depparser" aria-hidden="true">#</a> Class: DepParser</h1>
<p><RouterLink to="/formula/modules/">index</RouterLink>.DepParser</p>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>
<ul>
<li><RouterLink to="/formula/classes/index.DepParser.html#constructor">constructor</RouterLink></li>
</ul>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<ul>
<li><RouterLink to="/formula/classes/index.DepParser.html#data">data</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#functions">functions</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#onvariable">onVariable</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#parser">parser</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#position">position</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#utils">utils</RouterLink></li>
</ul>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3>
<ul>
<li><RouterLink to="/formula/classes/index.DepParser.html#callfunction">callFunction</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#checkformularesult">checkFormulaResult</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#getcell">getCell</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#getrange">getRange</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#getvariable">getVariable</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#parse">parse</RouterLink></li>
<li><RouterLink to="/formula/classes/index.DepParser.html#retrieveref">retrieveRef</RouterLink></li>
</ul>
<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2>
<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3>
<p>• <strong>new DepParser</strong>(<code v-pre>config</code>)</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>config</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:25</p>
<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3>
<p>• <code v-pre>Private</code> <strong>data</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:9</p>
<hr>
<h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> functions</h3>
<p>• <code v-pre>Private</code> <strong>functions</strong>: <code v-pre>Object</code></p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:15</p>
<hr>
<h3 id="onvariable" tabindex="-1"><a class="header-anchor" href="#onvariable" aria-hidden="true">#</a> onVariable</h3>
<p>• <code v-pre>Private</code> <strong>onVariable</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:13</p>
<hr>
<h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> parser</h3>
<p>• <code v-pre>Private</code> <strong>parser</strong>: <code v-pre>Parsing</code></p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:17</p>
<hr>
<h3 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h3>
<p>• <code v-pre>Private</code> <strong>position</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:19</p>
<hr>
<h3 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> utils</h3>
<p>• <code v-pre>Private</code> <strong>utils</strong>: <code v-pre>Utils</code></p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:11</p>
<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2>
<h3 id="callfunction" tabindex="-1"><a class="header-anchor" href="#callfunction" aria-hidden="true">#</a> callFunction</h3>
<p>▸ <strong>callFunction</strong>(<code v-pre>name</code>, <code v-pre>args</code>): <code v-pre>Object</code></p>
<p>Call an excel function.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left">Function name.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>args</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left">Arguments that pass to the function.</td>
</tr>
</tbody>
</table>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>Object</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ref</code></td>
<td style="text-align:left">{}</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>value</code></td>
<td style="text-align:left"><code v-pre>number</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:128</p>
<hr>
<h3 id="checkformularesult" tabindex="-1"><a class="header-anchor" href="#checkformularesult" aria-hidden="true">#</a> checkFormulaResult</h3>
<p>▸ <strong>checkFormulaResult</strong>(<code v-pre>result</code>): <code v-pre>void</code></p>
<p>Check and return the appropriate formula result.</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>result</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>void</code></p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:141</p>
<hr>
<h3 id="getcell" tabindex="-1"><a class="header-anchor" href="#getcell" aria-hidden="true">#</a> getCell</h3>
<p>▸ <strong>getCell</strong>(<code v-pre>ref</code>): <code v-pre>number</code></p>
<p>Get value from the cell reference</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ref</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>number</code></p>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:45</p>
<hr>
<h3 id="getrange" tabindex="-1"><a class="header-anchor" href="#getrange" aria-hidden="true">#</a> getRange</h3>
<p>▸ <strong>getRange</strong>(<code v-pre>ref</code>): <code v-pre>number</code>[][]</p>
<p>Get values from the range reference.</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ref</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>number</code>[][]</p>
<h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:71</p>
<hr>
<h3 id="getvariable" tabindex="-1"><a class="header-anchor" href="#getvariable" aria-hidden="true">#</a> getVariable</h3>
<p>▸ <strong>getVariable</strong>(<code v-pre>name</code>): <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink> | <code v-pre>0</code></p>
<p>TODO:
Get references or values from a user defined variable.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>
<p><RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink> | <code v-pre>0</code></p>
<h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:96</p>
<hr>
<h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> parse</h3>
<p>▸ <strong>parse</strong>(<code v-pre>inputText</code>, <code v-pre>position</code>, <code v-pre>ignoreError?</code>): <code v-pre>any</code></p>
<p>Parse an excel formula and return the dependencies</p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>inputText</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left"><code v-pre>undefined</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>position</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left"><code v-pre>undefined</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ignoreError</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<blockquote>
<p>}</p>
</blockquote>
<h4 id="defined-in-12" tabindex="-1"><a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:153</p>
<hr>
<h3 id="retrieveref" tabindex="-1"><a class="header-anchor" href="#retrieveref" aria-hidden="true">#</a> retrieveRef</h3>
<p>▸ <strong>retrieveRef</strong>(<code v-pre>valueOrRef</code>): <code v-pre>any</code></p>
<p>Retrieve values from the given reference.</p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>valueOrRef</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-13" tabindex="-1"><a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/dependency/hooks.ts:112</p>
</template>
