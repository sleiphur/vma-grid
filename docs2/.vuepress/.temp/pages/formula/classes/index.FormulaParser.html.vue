<template><h1 id="class-formulaparser" tabindex="-1"><a class="header-anchor" href="#class-formulaparser" aria-hidden="true">#</a> Class: FormulaParser</h1>
<p><RouterLink to="/formula/modules/">index</RouterLink>.FormulaParser</p>
<p>A Excel Formula Parser &amp; Evaluator</p>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#constructor">constructor</RouterLink></li>
</ul>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#async">async</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#functions">functions</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#funsneedcontext">funsNeedContext</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#funsneedcontextandnodataretrieve">funsNeedContextAndNoDataRetrieve</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#funsnullas0">funsNullAs0</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#funspreserveref">funsPreserveRef</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#istest">isTest</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#logs">logs</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#oncell">onCell</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#onrange">onRange</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#onvariable">onVariable</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#parser">parser</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#position">position</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#utils">utils</RouterLink></li>
</ul>
<h3 id="accessors" tabindex="-1"><a class="header-anchor" href="#accessors" aria-hidden="true">#</a> Accessors</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#alltokens">allTokens</RouterLink></li>
</ul>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#_callfunction">_callFunction</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#callfunction">callFunction</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#callfunctionasync">callFunctionAsync</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#checkformularesult">checkFormulaResult</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#getcell">getCell</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#getrange">getRange</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#getvariable">getVariable</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#parse">parse</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#parseasync">parseAsync</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#retrieveref">retrieveRef</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaParser.html#supportedfunctions">supportedFunctions</RouterLink></li>
</ul>
<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2>
<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3>
<p>• <strong>new FormulaParser</strong>(<code v-pre>config?</code>, <code v-pre>isTest?</code>)</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Default value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>config?</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left"><code v-pre>undefined</code></td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isTest</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">is in testing environment</td>
</tr>
</tbody>
</table>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:53</p>
<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2>
<h3 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h3>
<p>• <code v-pre>Private</code> <strong>async</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:47</p>
<hr>
<h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> functions</h3>
<p>• <code v-pre>Private</code> <strong>functions</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:29</p>
<hr>
<h3 id="funsneedcontext" tabindex="-1"><a class="header-anchor" href="#funsneedcontext" aria-hidden="true">#</a> funsNeedContext</h3>
<p>• <code v-pre>Private</code> <strong>funsNeedContext</strong>: <code v-pre>string</code>[]</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:39</p>
<hr>
<h3 id="funsneedcontextandnodataretrieve" tabindex="-1"><a class="header-anchor" href="#funsneedcontextandnodataretrieve" aria-hidden="true">#</a> funsNeedContextAndNoDataRetrieve</h3>
<p>• <code v-pre>Private</code> <strong>funsNeedContextAndNoDataRetrieve</strong>: <code v-pre>string</code>[]</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:37</p>
<hr>
<h3 id="funsnullas0" tabindex="-1"><a class="header-anchor" href="#funsnullas0" aria-hidden="true">#</a> funsNullAs0</h3>
<p>• <code v-pre>Private</code> <strong>funsNullAs0</strong>: <code v-pre>string</code>[]</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:35</p>
<hr>
<h3 id="funspreserveref" tabindex="-1"><a class="header-anchor" href="#funspreserveref" aria-hidden="true">#</a> funsPreserveRef</h3>
<p>• <code v-pre>Private</code> <strong>funsPreserveRef</strong>: <code v-pre>string</code>[]</p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:41</p>
<hr>
<h3 id="istest" tabindex="-1"><a class="header-anchor" href="#istest" aria-hidden="true">#</a> isTest</h3>
<p>• <code v-pre>Private</code> <strong>isTest</strong>: <code v-pre>boolean</code></p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:23</p>
<hr>
<h3 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> logs</h3>
<p>• <code v-pre>Private</code> <strong>logs</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:21</p>
<hr>
<h3 id="oncell" tabindex="-1"><a class="header-anchor" href="#oncell" aria-hidden="true">#</a> onCell</h3>
<p>• <code v-pre>Private</code> <strong>onCell</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:33</p>
<hr>
<h3 id="onrange" tabindex="-1"><a class="header-anchor" href="#onrange" aria-hidden="true">#</a> onRange</h3>
<p>• <code v-pre>Private</code> <strong>onRange</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:31</p>
<hr>
<h3 id="onvariable" tabindex="-1"><a class="header-anchor" href="#onvariable" aria-hidden="true">#</a> onVariable</h3>
<p>• <code v-pre>Private</code> <strong>onVariable</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:27</p>
<hr>
<h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> parser</h3>
<p>• <code v-pre>Private</code> <strong>parser</strong>: <code v-pre>Parsing</code></p>
<h4 id="defined-in-12" tabindex="-1"><a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:43</p>
<hr>
<h3 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h3>
<p>• <code v-pre>Private</code> <strong>position</strong>: <code v-pre>any</code></p>
<h4 id="defined-in-13" tabindex="-1"><a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:45</p>
<hr>
<h3 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> utils</h3>
<p>• <code v-pre>Private</code> <strong>utils</strong>: <code v-pre>Utils</code></p>
<h4 id="defined-in-14" tabindex="-1"><a class="header-anchor" href="#defined-in-14" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:25</p>
<h2 id="accessors-1" tabindex="-1"><a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a> Accessors</h2>
<h3 id="alltokens" tabindex="-1"><a class="header-anchor" href="#alltokens" aria-hidden="true">#</a> allTokens</h3>
<p>• <code v-pre>Static</code> <code v-pre>get</code> <strong>allTokens</strong>(): <code v-pre>TokenType</code>[]</p>
<p>Get all lexing token names. Webpack needs this.</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>TokenType</code>[]</p>
<ul>
<li>All token names that should not be minimized.</li>
</ul>
<h4 id="defined-in-15" tabindex="-1"><a class="header-anchor" href="#defined-in-15" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:135</p>
<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2>
<h3 id="callfunction" tabindex="-1"><a class="header-anchor" href="#callfunction" aria-hidden="true">#</a> _callFunction</h3>
<p>▸ <strong>_callFunction</strong>(<code v-pre>name</code>, <code v-pre>args</code>): <code v-pre>any</code></p>
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
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-16" tabindex="-1"><a class="header-anchor" href="#defined-in-16" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:199</p>
<hr>
<h3 id="callfunction-1" tabindex="-1"><a class="header-anchor" href="#callfunction-1" aria-hidden="true">#</a> callFunction</h3>
<p>▸ <strong>callFunction</strong>(<code v-pre>name</code>, <code v-pre>args</code>): <code v-pre>any</code></p>
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
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>args</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-17" tabindex="-1"><a class="header-anchor" href="#defined-in-17" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:268</p>
<hr>
<h3 id="callfunctionasync" tabindex="-1"><a class="header-anchor" href="#callfunctionasync" aria-hidden="true">#</a> callFunctionAsync</h3>
<p>▸ <strong>callFunctionAsync</strong>(<code v-pre>name</code>, <code v-pre>args</code>): <code v-pre>Promise</code>&lt;<code v-pre>any</code>&gt;</p>
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
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>args</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>Promise</code>&lt;<code v-pre>any</code>&gt;</p>
<h4 id="defined-in-18" tabindex="-1"><a class="header-anchor" href="#defined-in-18" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:259</p>
<hr>
<h3 id="checkformularesult" tabindex="-1"><a class="header-anchor" href="#checkformularesult" aria-hidden="true">#</a> checkFormulaResult</h3>
<p>▸ <strong>checkFormulaResult</strong>(<code v-pre>result</code>, <code v-pre>allowReturnArray?</code>): <code v-pre>any</code></p>
<p>Check and return the appropriate formula result.</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>
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
<td style="text-align:left"><code v-pre>result</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left"><code v-pre>undefined</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>allowReturnArray</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-19" tabindex="-1"><a class="header-anchor" href="#defined-in-19" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:301</p>
<hr>
<h3 id="getcell" tabindex="-1"><a class="header-anchor" href="#getcell" aria-hidden="true">#</a> getCell</h3>
<p>▸ <strong>getCell</strong>(<code v-pre>ref</code>): <code v-pre>any</code></p>
<p>Get value from the cell reference</p>
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
<td style="text-align:left"><code v-pre>ref</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-20" tabindex="-1"><a class="header-anchor" href="#defined-in-20" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:144</p>
<hr>
<h3 id="getrange" tabindex="-1"><a class="header-anchor" href="#getrange" aria-hidden="true">#</a> getRange</h3>
<p>▸ <strong>getRange</strong>(<code v-pre>ref</code>): <code v-pre>any</code></p>
<p>Get values from the range reference.</p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4>
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
<h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-21" tabindex="-1"><a class="header-anchor" href="#defined-in-21" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:156</p>
<hr>
<h3 id="getvariable" tabindex="-1"><a class="header-anchor" href="#getvariable" aria-hidden="true">#</a> getVariable</h3>
<p>▸ <strong>getVariable</strong>(<code v-pre>name</code>): <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink> | { <code v-pre>ref</code>: <code v-pre>any</code>  }</p>
<p>TODO:
Get references or values from a user defined variable.</p>
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
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4>
<p><RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink> | { <code v-pre>ref</code>: <code v-pre>any</code>  }</p>
<h4 id="defined-in-22" tabindex="-1"><a class="header-anchor" href="#defined-in-22" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:169</p>
<hr>
<h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> parse</h3>
<p>▸ <strong>parse</strong>(<code v-pre>inputText</code>, <code v-pre>position?</code>, <code v-pre>allowReturnArray?</code>): <code v-pre>any</code></p>
<p>Parse an excel formula.</p>
<h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a> Parameters</h4>
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
<td style="text-align:left"><code v-pre>position?</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left"><code v-pre>undefined</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>allowReturnArray</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-23" tabindex="-1"><a class="header-anchor" href="#defined-in-23" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:363</p>
<hr>
<h3 id="parseasync" tabindex="-1"><a class="header-anchor" href="#parseasync" aria-hidden="true">#</a> parseAsync</h3>
<p>▸ <strong>parseAsync</strong>(<code v-pre>inputText</code>, <code v-pre>position?</code>, <code v-pre>allowReturnArray?</code>): <code v-pre>Promise</code>&lt;<code v-pre>any</code>&gt;</p>
<p>Parse an excel formula asynchronously.
Use when providing custom async functions.</p>
<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4>
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
<td style="text-align:left"><code v-pre>position?</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left"><code v-pre>undefined</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>allowReturnArray</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>Promise</code>&lt;<code v-pre>any</code>&gt;</p>
<h4 id="defined-in-24" tabindex="-1"><a class="header-anchor" href="#defined-in-24" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:396</p>
<hr>
<h3 id="retrieveref" tabindex="-1"><a class="header-anchor" href="#retrieveref" aria-hidden="true">#</a> retrieveRef</h3>
<p>▸ <strong>retrieveRef</strong>(<code v-pre>valueOrRef</code>): <code v-pre>any</code></p>
<p>Retrieve values from the given reference.</p>
<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4>
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
<h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-25" tabindex="-1"><a class="header-anchor" href="#defined-in-25" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:183</p>
<hr>
<h3 id="supportedfunctions" tabindex="-1"><a class="header-anchor" href="#supportedfunctions" aria-hidden="true">#</a> supportedFunctions</h3>
<p>▸ <strong>supportedFunctions</strong>(): <code v-pre>any</code></p>
<p>Return currently supported functions.</p>
<h4 id="returns-11" tabindex="-1"><a class="header-anchor" href="#returns-11" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>any</code></p>
<h4 id="defined-in-26" tabindex="-1"><a class="header-anchor" href="#defined-in-26" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/grammar/hooks.ts:280</p>
</template>
