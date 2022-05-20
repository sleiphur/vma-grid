<template><h1 id="class-formulaerror" tabindex="-1"><a class="header-anchor" href="#class-formulaerror" aria-hidden="true">#</a> Class: FormulaError</h1>
<p><RouterLink to="/formula/modules/">index</RouterLink>.FormulaError</p>
<p>Formula Error.</p>
<h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>
<ul>
<li>
<p><code v-pre>Error</code></p>
<p>↳ <strong><code v-pre>FormulaError</code></strong></p>
</li>
</ul>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaError.html#constructor">constructor</RouterLink></li>
</ul>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaError.html#_details">_details</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#_error">_error</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#cause">cause</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#message">message</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#stack">stack</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#arg_missing">ARG_MISSING</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#div0">DIV0</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#error">ERROR</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#na">NA</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#name">NAME</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#not_implemented">NOT_IMPLEMENTED</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#null">NULL</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#num">NUM</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#ref">REF</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#too_many_args">TOO_MANY_ARGS</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#value">VALUE</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#errormap">errorMap</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#preparestacktrace">prepareStackTrace</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#stacktracelimit">stackTraceLimit</RouterLink></li>
</ul>
<h3 id="accessors" tabindex="-1"><a class="header-anchor" href="#accessors" aria-hidden="true">#</a> Accessors</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaError.html#details">details</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#error-1">error</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#name-1">name</RouterLink></li>
</ul>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3>
<ul>
<li><RouterLink to="/formula/classes/index.FormulaError.html#equals">equals</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#tostring">toString</RouterLink></li>
<li><RouterLink to="/formula/classes/index.FormulaError.html#capturestacktrace">captureStackTrace</RouterLink></li>
</ul>
<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2>
<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3>
<p>• <strong>new FormulaError</strong>(<code v-pre>error</code>, <code v-pre>msg?</code>, <code v-pre>details?</code>)</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>
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
<td style="text-align:left"><code v-pre>error</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left">error code, i.e. #NUM!</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>msg?</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>details?</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4>
<p>Error.constructor</p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:48</p>
<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2>
<h3 id="details" tabindex="-1"><a class="header-anchor" href="#details" aria-hidden="true">#</a> _details</h3>
<p>• <code v-pre>Private</code> <code v-pre>Optional</code> <strong>_details</strong>: <code v-pre>Record</code>&lt;<code v-pre>string</code>, <code v-pre>unknown</code>&gt;</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:40</p>
<hr>
<h3 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> _error</h3>
<p>• <code v-pre>Private</code> <code v-pre>Optional</code> <strong>_error</strong>: <code v-pre>string</code></p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:38</p>
<hr>
<h3 id="cause" tabindex="-1"><a class="header-anchor" href="#cause" aria-hidden="true">#</a> cause</h3>
<p>• <code v-pre>Optional</code> <strong>cause</strong>: <code v-pre>Error</code></p>
<h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4>
<p>Error.cause</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>
<p>node_modules/typescript/lib/lib.es2022.error.d.ts:26</p>
<hr>
<h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h3>
<p>• <strong>message</strong>: <code v-pre>string</code></p>
<h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a> Inherited from</h4>
<p>Error.message</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>
<p>node_modules/typescript/lib/lib.es5.d.ts:1023</p>
<hr>
<h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> stack</h3>
<p>• <code v-pre>Optional</code> <strong>stack</strong>: <code v-pre>string</code></p>
<h4 id="inherited-from-2" tabindex="-1"><a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a> Inherited from</h4>
<p>Error.stack</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>
<p>node_modules/typescript/lib/lib.es5.d.ts:1024</p>
<hr>
<h3 id="arg-missing" tabindex="-1"><a class="header-anchor" href="#arg-missing" aria-hidden="true">#</a> ARG_MISSING</h3>
<p>▪ <code v-pre>Static</code> <strong>ARG_MISSING</strong>: <code v-pre>Function</code></p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:34</p>
<hr>
<h3 id="div0" tabindex="-1"><a class="header-anchor" href="#div0" aria-hidden="true">#</a> DIV0</h3>
<p>▪ <code v-pre>Static</code> <strong>DIV0</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:16</p>
<hr>
<h3 id="error-1" tabindex="-1"><a class="header-anchor" href="#error-1" aria-hidden="true">#</a> ERROR</h3>
<p>▪ <code v-pre>Static</code> <strong>ERROR</strong>: <code v-pre>Function</code></p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:36</p>
<hr>
<h3 id="na" tabindex="-1"><a class="header-anchor" href="#na" aria-hidden="true">#</a> NA</h3>
<p>▪ <code v-pre>Static</code> <strong>NA</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:18</p>
<hr>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> NAME</h3>
<p>▪ <code v-pre>Static</code> <strong>NAME</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:20</p>
<hr>
<h3 id="not-implemented" tabindex="-1"><a class="header-anchor" href="#not-implemented" aria-hidden="true">#</a> NOT_IMPLEMENTED</h3>
<p>▪ <code v-pre>Static</code> <strong>NOT_IMPLEMENTED</strong>: <code v-pre>Function</code></p>
<h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:30</p>
<hr>
<h3 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> NULL</h3>
<p>▪ <code v-pre>Static</code> <strong>NULL</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-12" tabindex="-1"><a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:22</p>
<hr>
<h3 id="num" tabindex="-1"><a class="header-anchor" href="#num" aria-hidden="true">#</a> NUM</h3>
<p>▪ <code v-pre>Static</code> <strong>NUM</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-13" tabindex="-1"><a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:24</p>
<hr>
<h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> REF</h3>
<p>▪ <code v-pre>Static</code> <strong>REF</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-14" tabindex="-1"><a class="header-anchor" href="#defined-in-14" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:26</p>
<hr>
<h3 id="too-many-args" tabindex="-1"><a class="header-anchor" href="#too-many-args" aria-hidden="true">#</a> TOO_MANY_ARGS</h3>
<p>▪ <code v-pre>Static</code> <strong>TOO_MANY_ARGS</strong>: <code v-pre>Function</code></p>
<h4 id="defined-in-15" tabindex="-1"><a class="header-anchor" href="#defined-in-15" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:32</p>
<hr>
<h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> VALUE</h3>
<p>▪ <code v-pre>Static</code> <strong>VALUE</strong>: <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></p>
<h4 id="defined-in-16" tabindex="-1"><a class="header-anchor" href="#defined-in-16" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:28</p>
<hr>
<h3 id="errormap" tabindex="-1"><a class="header-anchor" href="#errormap" aria-hidden="true">#</a> errorMap</h3>
<p>▪ <code v-pre>Static</code> <strong>errorMap</strong>: <code v-pre>Map</code>&lt;<code v-pre>any</code>, <code v-pre>any</code>&gt;</p>
<h4 id="defined-in-17" tabindex="-1"><a class="header-anchor" href="#defined-in-17" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:14</p>
<hr>
<h3 id="preparestacktrace" tabindex="-1"><a class="header-anchor" href="#preparestacktrace" aria-hidden="true">#</a> prepareStackTrace</h3>
<p>▪ <code v-pre>Static</code> <code v-pre>Optional</code> <strong>prepareStackTrace</strong>: (<code v-pre>err</code>: <code v-pre>Error</code>, <code v-pre>stackTraces</code>: <code v-pre>CallSite</code>[]) =&gt; <code v-pre>any</code></p>
<h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4>
<p>▸ (<code v-pre>err</code>, <code v-pre>stackTraces</code>): <code v-pre>any</code></p>
<p>Optional override for formatting stack traces</p>
<p><strong><code v-pre>see</code></strong> https://v8.dev/docs/stack-trace-api#customizing-stack-traces</p>
<h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>err</code></td>
<td style="text-align:left"><code v-pre>Error</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stackTraces</code></td>
<td style="text-align:left"><code v-pre>CallSite</code>[]</td>
</tr>
</tbody>
</table>
<h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5>
<p><code v-pre>any</code></p>
<h4 id="inherited-from-3" tabindex="-1"><a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a> Inherited from</h4>
<p>Error.prepareStackTrace</p>
<h4 id="defined-in-18" tabindex="-1"><a class="header-anchor" href="#defined-in-18" aria-hidden="true">#</a> Defined in</h4>
<p>node_modules/@types/node/globals.d.ts:11</p>
<hr>
<h3 id="stacktracelimit" tabindex="-1"><a class="header-anchor" href="#stacktracelimit" aria-hidden="true">#</a> stackTraceLimit</h3>
<p>▪ <code v-pre>Static</code> <strong>stackTraceLimit</strong>: <code v-pre>number</code></p>
<h4 id="inherited-from-4" tabindex="-1"><a class="header-anchor" href="#inherited-from-4" aria-hidden="true">#</a> Inherited from</h4>
<p>Error.stackTraceLimit</p>
<h4 id="defined-in-19" tabindex="-1"><a class="header-anchor" href="#defined-in-19" aria-hidden="true">#</a> Defined in</h4>
<p>node_modules/@types/node/globals.d.ts:13</p>
<h2 id="accessors-1" tabindex="-1"><a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a> Accessors</h2>
<h3 id="details-1" tabindex="-1"><a class="header-anchor" href="#details-1" aria-hidden="true">#</a> details</h3>
<p>• <code v-pre>get</code> <strong>details</strong>(): <code v-pre>undefined</code> | <code v-pre>Record</code>&lt;<code v-pre>string</code>, <code v-pre>unknown</code>&gt;</p>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>undefined</code> | <code v-pre>Record</code>&lt;<code v-pre>string</code>, <code v-pre>unknown</code>&gt;</p>
<h4 id="defined-in-20" tabindex="-1"><a class="header-anchor" href="#defined-in-20" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:6</p>
<p>• <code v-pre>set</code> <strong>details</strong>(<code v-pre>value</code>): <code v-pre>void</code></p>
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
<td style="text-align:left"><code v-pre>value</code></td>
<td style="text-align:left"><code v-pre>undefined</code> | <code v-pre>Record</code>&lt;<code v-pre>string</code>, <code v-pre>unknown</code>&gt;</td>
</tr>
</tbody>
</table>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>void</code></p>
<h4 id="defined-in-21" tabindex="-1"><a class="header-anchor" href="#defined-in-21" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:10</p>
<hr>
<h3 id="error-2" tabindex="-1"><a class="header-anchor" href="#error-2" aria-hidden="true">#</a> error</h3>
<p>• <code v-pre>get</code> <strong>error</strong>(): <code v-pre>undefined</code> | <code v-pre>string</code></p>
<p>Get the error name.</p>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>undefined</code> | <code v-pre>string</code></p>
<p>formula error</p>
<h4 id="defined-in-22" tabindex="-1"><a class="header-anchor" href="#defined-in-22" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:65</p>
<hr>
<h3 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1" aria-hidden="true">#</a> name</h3>
<p>• <code v-pre>get</code> <strong>name</strong>(): <code v-pre>string</code></p>
<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>string</code></p>
<h4 id="overrides-1" tabindex="-1"><a class="header-anchor" href="#overrides-1" aria-hidden="true">#</a> Overrides</h4>
<p>Error.name</p>
<h4 id="defined-in-23" tabindex="-1"><a class="header-anchor" href="#defined-in-23" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:69</p>
<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2>
<h3 id="equals" tabindex="-1"><a class="header-anchor" href="#equals" aria-hidden="true">#</a> equals</h3>
<p>▸ <strong>equals</strong>(<code v-pre>err</code>): <code v-pre>boolean</code></p>
<p>Return true if two errors are same.</p>
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
<td style="text-align:left"><code v-pre>err</code></td>
<td style="text-align:left"><code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>boolean</code></p>
<p>if two errors are same.</p>
<h4 id="defined-in-24" tabindex="-1"><a class="header-anchor" href="#defined-in-24" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:78</p>
<hr>
<h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h3>
<p>▸ <strong>toString</strong>(): <code v-pre>string</code></p>
<p>Return the formula error in string representation.</p>
<h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>string</code></p>
<p>the formula error in string representation.</p>
<h4 id="defined-in-25" tabindex="-1"><a class="header-anchor" href="#defined-in-25" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/error.ts:86</p>
<hr>
<h3 id="capturestacktrace" tabindex="-1"><a class="header-anchor" href="#capturestacktrace" aria-hidden="true">#</a> captureStackTrace</h3>
<p>▸ <code v-pre>Static</code> <strong>captureStackTrace</strong>(<code v-pre>targetObject</code>, <code v-pre>constructorOpt?</code>): <code v-pre>void</code></p>
<p>Create .stack property on a target object</p>
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
<td style="text-align:left"><code v-pre>targetObject</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>constructorOpt?</code></td>
<td style="text-align:left"><code v-pre>Function</code></td>
</tr>
</tbody>
</table>
<h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4>
<p><code v-pre>void</code></p>
<h4 id="inherited-from-5" tabindex="-1"><a class="header-anchor" href="#inherited-from-5" aria-hidden="true">#</a> Inherited from</h4>
<p>Error.captureStackTrace</p>
<h4 id="defined-in-26" tabindex="-1"><a class="header-anchor" href="#defined-in-26" aria-hidden="true">#</a> Defined in</h4>
<p>node_modules/@types/node/globals.d.ts:4</p>
</template>
