<template><h1 id="module-formulas" tabindex="-1"><a class="header-anchor" href="#module-formulas" aria-hidden="true">#</a> Module: formulas</h1>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3>
<ul>
<li><RouterLink to="/formula/modules/formulas.html#datefunctions">DateFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#distributionfunctions">DistributionFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#engineeringfunctions">EngineeringFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#financialfunctions">FinancialFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#infofunctions">InfoFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#logicalfunctions">LogicalFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#mathfunctions">MathFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#referencefunctions">ReferenceFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#statisticalfunctions">StatisticalFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#textfunctions">TextFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#trigfunctions">TrigFunctions</RouterLink></li>
<li><RouterLink to="/formula/modules/formulas.html#webfunctions">WebFunctions</RouterLink></li>
</ul>
<h2 id="variables-1" tabindex="-1"><a class="header-anchor" href="#variables-1" aria-hidden="true">#</a> Variables</h2>
<h3 id="datefunctions" tabindex="-1"><a class="header-anchor" href="#datefunctions" aria-hidden="true">#</a> DateFunctions</h3>
<p>• <code v-pre>Const</code> <strong>DateFunctions</strong>: <code v-pre>Object</code></p>
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
<td style="text-align:left"><code v-pre>DATE</code></td>
<td style="text-align:left">(<code v-pre>year</code>: <code v-pre>any</code>, <code v-pre>month</code>: <code v-pre>any</code>, <code v-pre>day</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DATEDIF</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>endDate</code>: <code v-pre>any</code>, <code v-pre>unit</code>: <code v-pre>any</code>) =&gt; <code v-pre>undefined</code> | <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DATEVALUE</code></td>
<td style="text-align:left">(<code v-pre>dateText</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DAY</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DAYS</code></td>
<td style="text-align:left">(<code v-pre>endDate</code>: <code v-pre>any</code>, <code v-pre>startDate</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DAYS360</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>endDate</code>: <code v-pre>any</code>, <code v-pre>method</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>EDATE</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>months</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>EOMONTH</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>months</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HOUR</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISOWEEKNUM</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MINUTE</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MONTH</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NETWORKDAYS</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>endDate</code>: <code v-pre>any</code>, <code v-pre>holidays</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NETWORKDAYS.INTL</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>endDate</code>: <code v-pre>any</code>, <code v-pre>weekend</code>: <code v-pre>any</code>, <code v-pre>holidays</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NOW</code></td>
<td style="text-align:left">() =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SECOND</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TIME</code></td>
<td style="text-align:left">(<code v-pre>hour</code>: <code v-pre>any</code>, <code v-pre>minute</code>: <code v-pre>any</code>, <code v-pre>second</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TIMEVALUE</code></td>
<td style="text-align:left">(<code v-pre>timeText</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TODAY</code></td>
<td style="text-align:left">() =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>WEEKDAY</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>, <code v-pre>returnType</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>WEEKNUM</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>, <code v-pre>returnType</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>WORKDAY</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>days</code>: <code v-pre>any</code>, <code v-pre>holidays</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>WORKDAY.INTL</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>days</code>: <code v-pre>any</code>, <code v-pre>weekend</code>: <code v-pre>any</code>, <code v-pre>holidays</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>YEAR</code></td>
<td style="text-align:left">(<code v-pre>serialOrString</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>YEARFRAC</code></td>
<td style="text-align:left">(<code v-pre>startDate</code>: <code v-pre>any</code>, <code v-pre>endDate</code>: <code v-pre>any</code>, <code v-pre>basis</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/date.ts:202</p>
<hr>
<h3 id="distributionfunctions" tabindex="-1"><a class="header-anchor" href="#distributionfunctions" aria-hidden="true">#</a> DistributionFunctions</h3>
<p>• <code v-pre>Const</code> <strong>DistributionFunctions</strong>: <code v-pre>Object</code></p>
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
<td style="text-align:left"><code v-pre>BETA.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>beta</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>, <code v-pre>a</code>: <code v-pre>any</code>, <code v-pre>b</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BETA.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>beta</code>: <code v-pre>any</code>, <code v-pre>a</code>: <code v-pre>any</code>, <code v-pre>b</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BINOM.DIST</code></td>
<td style="text-align:left">(<code v-pre>numberS</code>: <code v-pre>any</code>, <code v-pre>trials</code>: <code v-pre>any</code>, <code v-pre>probabilityS</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BINOM.DIST.RANGE</code></td>
<td style="text-align:left">(<code v-pre>trials</code>: <code v-pre>any</code>, <code v-pre>probabilityS</code>: <code v-pre>any</code>, <code v-pre>numberS</code>: <code v-pre>any</code>, <code v-pre>numberS2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BINOM.INV</code></td>
<td style="text-align:left">(<code v-pre>trials</code>: <code v-pre>any</code>, <code v-pre>probabilityS</code>: <code v-pre>any</code>, <code v-pre>alpha</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHISQ.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>degFreedom</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHISQ.DIST.RT</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>degFreedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHISQ.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>degFreedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHISQ.INV.RT</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>degFreedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHISQ.TEST</code></td>
<td style="text-align:left">(<code v-pre>actualRange</code>: <code v-pre>any</code>, <code v-pre>expectedRange</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CONFIDENCE.NORM</code></td>
<td style="text-align:left">(<code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>std</code>: <code v-pre>any</code>, <code v-pre>size</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CONFIDENCE.T</code></td>
<td style="text-align:left">(<code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>std</code>: <code v-pre>any</code>, <code v-pre>size</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CORREL</code></td>
<td style="text-align:left">(<code v-pre>array1</code>: <code v-pre>any</code>, <code v-pre>array2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COVARIANCE.P</code></td>
<td style="text-align:left">(<code v-pre>array1</code>: <code v-pre>any</code>, <code v-pre>array2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COVARIANCE.S</code></td>
<td style="text-align:left">(<code v-pre>array1</code>: <code v-pre>any</code>, <code v-pre>array2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEVSQ</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>EXPON.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>lambda</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>F.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>d1</code>: <code v-pre>any</code>, <code v-pre>d2</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>F.DIST.RT</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>d1</code>: <code v-pre>any</code>, <code v-pre>d2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>F.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>d1</code>: <code v-pre>any</code>, <code v-pre>d2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>F.INV.RT</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>d1</code>: <code v-pre>any</code>, <code v-pre>d2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>F.TEST</code></td>
<td style="text-align:left">(<code v-pre>array1</code>: <code v-pre>any</code>, <code v-pre>array2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FISHER</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FISHERINV</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FORECAST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>knownYs</code>: <code v-pre>any</code>, <code v-pre>knownXs</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FORECAST.ETS</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FORECAST.ETS.CONFINT</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FORECAST.ETS.SEASONALITY</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FORECAST.ETS.STAT</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FORECAST.LINEAR</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>knownYs</code>: <code v-pre>any</code>, <code v-pre>knownXs</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FREQUENCY</code></td>
<td style="text-align:left">(<code v-pre>dataArray</code>: <code v-pre>any</code>, <code v-pre>binsArray</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GAMMA</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GAMMA.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>beta</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GAMMA.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>beta</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GAMMALN</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GAMMALN.PRECISE</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GAUSS</code></td>
<td style="text-align:left">(<code v-pre>z</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GEOMEAN</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GROWTH</code></td>
<td style="text-align:left">(<code v-pre>knownY</code>: <code v-pre>any</code>, <code v-pre>knownX</code>: <code v-pre>any</code>, <code v-pre>newX</code>: <code v-pre>any</code>, <code v-pre>useConst</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HARMEAN</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HYPGEOM.DIST</code></td>
<td style="text-align:left">(<code v-pre>sample_s</code>: <code v-pre>any</code>, <code v-pre>number_sample</code>: <code v-pre>any</code>, <code v-pre>population_s</code>: <code v-pre>any</code>, <code v-pre>number_pop</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>INTERCEPT</code></td>
<td style="text-align:left">(<code v-pre>knownYs</code>: <code v-pre>any</code>, <code v-pre>knownXs</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>KURT</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LINEST</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LOGEST</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LOGNORM.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>mean</code>: <code v-pre>any</code>, <code v-pre>standard_dev</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LOGNORM.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>mean</code>: <code v-pre>any</code>, <code v-pre>standard_dev</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MODE.MULT</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MODE.SNGL</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NEGBINOM.DIST</code></td>
<td style="text-align:left">(<code v-pre>number_f</code>: <code v-pre>any</code>, <code v-pre>number_s</code>: <code v-pre>any</code>, <code v-pre>probability_s</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NORM.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>mean</code>: <code v-pre>any</code>, <code v-pre>standard_dev</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NORM.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>mean</code>: <code v-pre>any</code>, <code v-pre>standard_dev</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NORM.S.DIST</code></td>
<td style="text-align:left">(<code v-pre>z</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NORM.S.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PEARSON</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERCENTILE.EXC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERCENTILE.INC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERCENTRANK.EXC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERCENTRANK.INC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERMUTATIONA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PHI</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>POISSON.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>mean</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PROB</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>QUARTILE.EXC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>QUARTILE.INC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RANK.AVG</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RANK.EQ</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RSQ</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SKEW</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SKEW.P</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SLOPE</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STANDARDIZE</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>mean</code>: <code v-pre>any</code>, <code v-pre>standard_dev</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STDEV.P</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STDEV.S</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STDEVA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STDEVPA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STEYX</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>deg_freedom</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T.DIST.2T</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>deg_freedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T.DIST.RT</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>deg_freedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T.INV</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>deg_freedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T.INV.2T</code></td>
<td style="text-align:left">(<code v-pre>probability</code>: <code v-pre>any</code>, <code v-pre>deg_freedom</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T.TEST</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TREND</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TRIMMEAN</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>VAR.P</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>VAR.S</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>VARA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>VARPA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>WEIBULL.DIST</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>alpha</code>: <code v-pre>any</code>, <code v-pre>beta</code>: <code v-pre>any</code>, <code v-pre>cumulative</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Z.TEST</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/distribution.ts:11</p>
<hr>
<h3 id="engineeringfunctions" tabindex="-1"><a class="header-anchor" href="#engineeringfunctions" aria-hidden="true">#</a> EngineeringFunctions</h3>
<p>• <code v-pre>Const</code> <strong>EngineeringFunctions</strong>: <code v-pre>Object</code></p>
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
<td style="text-align:left"><code v-pre>BESSELI</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>n</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BESSELJ</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>n</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BESSELK</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>n</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BESSELY</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>n</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BIN2DEC</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BIN2HEX</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BIN2OCT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BITAND</code></td>
<td style="text-align:left">(<code v-pre>number1</code>: <code v-pre>any</code>, <code v-pre>number2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BITLSHIFT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>shiftAmount</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BITOR</code></td>
<td style="text-align:left">(<code v-pre>number1</code>: <code v-pre>any</code>, <code v-pre>number2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BITRSHIFT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>shiftAmount</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BITXOR</code></td>
<td style="text-align:left">(<code v-pre>number1</code>: <code v-pre>any</code>, <code v-pre>number2</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COMPLEX</code></td>
<td style="text-align:left">(<code v-pre>realNum</code>: <code v-pre>any</code>, <code v-pre>iNum</code>: <code v-pre>any</code>, <code v-pre>suffix?</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEC2BIN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEC2HEX</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places?</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEC2OCT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DELTA</code></td>
<td style="text-align:left">(<code v-pre>number1</code>: <code v-pre>any</code>, <code v-pre>number2</code>: <code v-pre>any</code>) =&gt; <code v-pre>0</code> | <code v-pre>1</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ERF</code></td>
<td style="text-align:left">(<code v-pre>lowerLimit</code>: <code v-pre>any</code>, <code v-pre>upperLimit</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ERFC</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GESTEP</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>step</code>: <code v-pre>any</code>) =&gt; <code v-pre>0</code> | <code v-pre>1</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HEX2BIN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HEX2DEC</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HEX2OCT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMABS</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMAGINARY</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMARGUMENT</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMCONJUGATE</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMCOS</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMCOSH</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMCOT</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMCSC</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMCSCH</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMDIV</code></td>
<td style="text-align:left">(<code v-pre>iNumber1</code>: <code v-pre>any</code>, <code v-pre>iNumber2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMEXP</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMLN</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMLOG10</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMLOG2</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMPOWER</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>, <code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMPRODUCT</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMREAL</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSEC</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSECH</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSIN</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSINH</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSQRT</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSUB</code></td>
<td style="text-align:left">(<code v-pre>iNumber1</code>: <code v-pre>any</code>, <code v-pre>iNumber2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMSUM</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IMTAN</code></td>
<td style="text-align:left">(<code v-pre>iNumber</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>OCT2BIN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code> | <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>OCT2DEC</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>OCT2HEX</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>places</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/engineering.ts:51</p>
<hr>
<h3 id="financialfunctions" tabindex="-1"><a class="header-anchor" href="#financialfunctions" aria-hidden="true">#</a> FinancialFunctions</h3>
<p>• <code v-pre>Const</code> <strong>FinancialFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-3" tabindex="-1"><a class="header-anchor" href="#type-declaration-3" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ACCRINT</code></td>
<td style="text-align:left">(<code v-pre>issue</code>: <code v-pre>any</code>, <code v-pre>firstInterest</code>: <code v-pre>any</code>, <code v-pre>settlement</code>: <code v-pre>any</code>, <code v-pre>rate</code>: <code v-pre>any</code>, <code v-pre>par</code>: <code v-pre>any</code>, <code v-pre>frequency</code>: <code v-pre>any</code>, <code v-pre>basis</code>: <code v-pre>any</code>, <code v-pre>calcMethod</code>: <code v-pre>any</code>) =&gt; <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/financial.ts:5</p>
<hr>
<h3 id="infofunctions" tabindex="-1"><a class="header-anchor" href="#infofunctions" aria-hidden="true">#</a> InfoFunctions</h3>
<p>• <code v-pre>Const</code> <strong>InfoFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-4" tabindex="-1"><a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>CELL</code></td>
<td style="text-align:left">(<code v-pre>infoType</code>: <code v-pre>any</code>, <code v-pre>reference</code>: <code v-pre>any</code>) =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ERROR.TYPE</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>INFO</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISBLANK</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISERR</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISERROR</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISEVEN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISLOGICAL</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISNA</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISNONTEXT</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISNUMBER</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISREF</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISTEXT</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>N</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>never</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TYPE</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>1</code> | <code v-pre>2</code> | <code v-pre>4</code> | <code v-pre>16</code> | <code v-pre>64</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/information.ts:20</p>
<hr>
<h3 id="logicalfunctions" tabindex="-1"><a class="header-anchor" href="#logicalfunctions" aria-hidden="true">#</a> LogicalFunctions</h3>
<p>• <code v-pre>Const</code> <strong>LogicalFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-5" tabindex="-1"><a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>AND</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code> | <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FALSE</code></td>
<td style="text-align:left">() =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IF</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>logicalTest</code>: <code v-pre>any</code>, <code v-pre>valueIfTrue</code>: <code v-pre>any</code>, <code v-pre>valueIfFalse</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IFERROR</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>, <code v-pre>valueIfError</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IFS</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NOT</code></td>
<td style="text-align:left">(<code v-pre>logical</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>OR</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code> | <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SWITCH</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TRUE</code></td>
<td style="text-align:left">() =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>XOR</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code> | <RouterLink to="/formula/classes/index.FormulaError.html"><code v-pre>FormulaError</code></RouterLink></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>IFNA</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>, <code v-pre>valueIfNa</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/logical.ts:32</p>
<hr>
<h3 id="mathfunctions" tabindex="-1"><a class="header-anchor" href="#mathfunctions" aria-hidden="true">#</a> MathFunctions</h3>
<p>• <code v-pre>Const</code> <strong>MathFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-6" tabindex="-1"><a class="header-anchor" href="#type-declaration-6" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ABS</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>AGGREGATE</code></td>
<td style="text-align:left">(<code v-pre>functionNum</code>: <code v-pre>any</code>, <code v-pre>options</code>: <code v-pre>any</code>, <code v-pre>ref1</code>: <code v-pre>any</code>, ...<code v-pre>refs</code>: <code v-pre>any</code>) =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ARABIC</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BASE</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>radix</code>: <code v-pre>any</code>, <code v-pre>minLength</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CEILING</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CEILING.MATH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>, <code v-pre>mode</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CEILING.PRECISE</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COMBIN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>numberChosen</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COMBINA</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>numberChosen</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DECIMAL</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>radix</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEGREES</code></td>
<td style="text-align:left">(<code v-pre>radians</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>EVEN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>EXP</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FACT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FACTDOUBLE</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FLOOR</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FLOOR.MATH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>, <code v-pre>mode</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FLOOR.PRECISE</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GCD</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>INT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ISO.CEILING</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>significance</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LCM</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LOG</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>base</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LOG10</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MDETERM</code></td>
<td style="text-align:left">(<code v-pre>array</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MINVERSE</code></td>
<td style="text-align:left">(<code v-pre>array</code>: <code v-pre>any</code>) =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MMULT</code></td>
<td style="text-align:left">(<code v-pre>array1</code>: <code v-pre>any</code>, <code v-pre>array2</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code>[]</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MOD</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>divisor</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MROUND</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>multiple</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MULTINOMIAL</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MUNIT</code></td>
<td style="text-align:left">(<code v-pre>dimension</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code>[][]</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ODD</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PI</code></td>
<td style="text-align:left">() =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>POWER</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>power</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PRODUCT</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>QUOTIENT</code></td>
<td style="text-align:left">(<code v-pre>numerator</code>: <code v-pre>any</code>, <code v-pre>denominator</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RADIANS</code></td>
<td style="text-align:left">(<code v-pre>degrees</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RAND</code></td>
<td style="text-align:left">() =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RANDBETWEEN</code></td>
<td style="text-align:left">(<code v-pre>bottom</code>: <code v-pre>any</code>, <code v-pre>top</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ROMAN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>form</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ROUND</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>digits</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ROUNDDOWN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>digits</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ROUNDUP</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>digits</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SERIESSUM</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>n</code>: <code v-pre>any</code>, <code v-pre>m</code>: <code v-pre>any</code>, <code v-pre>coefficients</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SIGN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>0</code> | <code v-pre>1</code> | <code v-pre>-1</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SQRT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SQRTPI</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUBTOTAL</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUM</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMIF</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>range</code>: <code v-pre>any</code>, <code v-pre>criteria</code>: <code v-pre>any</code>, <code v-pre>sumRange</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMIFS</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMPRODUCT</code></td>
<td style="text-align:left">(<code v-pre>array1</code>: <code v-pre>any</code>, ...<code v-pre>arrays</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMSQ</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMX2MY2</code></td>
<td style="text-align:left">(<code v-pre>arrayX</code>: <code v-pre>any</code>, <code v-pre>arrayY</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMX2PY2</code></td>
<td style="text-align:left">(<code v-pre>arrayX</code>: <code v-pre>any</code>, <code v-pre>arrayY</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUMXMY2</code></td>
<td style="text-align:left">(<code v-pre>arrayX</code>: <code v-pre>any</code>, <code v-pre>arrayY</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TRUNC</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/math.ts:32</p>
<hr>
<h3 id="referencefunctions" tabindex="-1"><a class="header-anchor" href="#referencefunctions" aria-hidden="true">#</a> ReferenceFunctions</h3>
<p>• <code v-pre>Const</code> <strong>ReferenceFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-7" tabindex="-1"><a class="header-anchor" href="#type-declaration-7" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ADDRESS</code></td>
<td style="text-align:left">(<code v-pre>rowNumber</code>: <code v-pre>any</code>, <code v-pre>columnNumber</code>: <code v-pre>any</code>, <code v-pre>absNum</code>: <code v-pre>any</code>, <code v-pre>a1</code>: <code v-pre>any</code>, <code v-pre>sheetText</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>AREAS</code></td>
<td style="text-align:left">(<code v-pre>refs</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHOOSE</code></td>
<td style="text-align:left">(<code v-pre>indexNum</code>: <code v-pre>any</code>, ...<code v-pre>values</code>: <code v-pre>any</code>) =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COLUMN</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>obj</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COLUMNS</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>obj</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HLOOKUP</code></td>
<td style="text-align:left">(<code v-pre>lookupValue</code>: <code v-pre>any</code>, <code v-pre>tableArray</code>: <code v-pre>any</code>, <code v-pre>rowIndexNum</code>: <code v-pre>any</code>, <code v-pre>rangeLookup</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>INDEX</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>ranges</code>: <code v-pre>any</code>, <code v-pre>rowNum</code>: <code v-pre>any</code>, <code v-pre>colNum</code>: <code v-pre>any</code>, <code v-pre>areaNum</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MATCH</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ROW</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>obj</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ROWS</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>obj</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TRANSPOSE</code></td>
<td style="text-align:left">(<code v-pre>array</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>VLOOKUP</code></td>
<td style="text-align:left">(<code v-pre>lookupValue</code>: <code v-pre>any</code>, <code v-pre>tableArray</code>: <code v-pre>any</code>, <code v-pre>colIndexNum</code>: <code v-pre>any</code>, <code v-pre>rangeLookup</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/reference.ts:14</p>
<hr>
<h3 id="statisticalfunctions" tabindex="-1"><a class="header-anchor" href="#statisticalfunctions" aria-hidden="true">#</a> StatisticalFunctions</h3>
<p>• <code v-pre>Const</code> <strong>StatisticalFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-8" tabindex="-1"><a class="header-anchor" href="#type-declaration-8" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>AVEDEV</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>AVERAGE</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>AVERAGEA</code></td>
<td style="text-align:left">(...<code v-pre>numbers</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>AVERAGEIF</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>range</code>: <code v-pre>any</code>, <code v-pre>criteria</code>: <code v-pre>any</code>, <code v-pre>averageRange</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>AVERAGEIFS</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COUNT</code></td>
<td style="text-align:left">(...<code v-pre>ranges</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COUNTIF</code></td>
<td style="text-align:left">(<code v-pre>range</code>: <code v-pre>any</code>, <code v-pre>criteria</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LARGE</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MAX</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MAXA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MAXIFS</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MEDIAN</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MIN</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MINA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MINIFS</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERMUT</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PERMUTATIONA</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SMALL</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/statistical.ts:8</p>
<hr>
<h3 id="textfunctions" tabindex="-1"><a class="header-anchor" href="#textfunctions" aria-hidden="true">#</a> TextFunctions</h3>
<p>• <code v-pre>Const</code> <strong>TextFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-9" tabindex="-1"><a class="header-anchor" href="#type-declaration-9" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ASC</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BAHTTEXT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CHAR</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CLEAN</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CODE</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CONCAT</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CONCATENATE</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DBCS</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DOLLAR</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>decimals</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>EXACT</code></td>
<td style="text-align:left">(<code v-pre>text1</code>: <code v-pre>any</code>, <code v-pre>text2</code>: <code v-pre>any</code>) =&gt; <code v-pre>boolean</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FIND</code></td>
<td style="text-align:left">(<code v-pre>findText</code>: <code v-pre>any</code>, <code v-pre>withinText</code>: <code v-pre>any</code>, <code v-pre>startNum</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FINDB</code></td>
<td style="text-align:left">(<code v-pre>findText</code>: <code v-pre>any</code>, <code v-pre>withinText</code>: <code v-pre>any</code>, <code v-pre>startNum</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FIXED</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>, <code v-pre>decimals</code>: <code v-pre>any</code>, <code v-pre>noCommas</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LEFT</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>numChars</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LEFTB</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>numChars</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LEN</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LENB</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LOWER</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MID</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>startNum</code>: <code v-pre>any</code>, <code v-pre>numChars</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>MIDB</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>startNum</code>: <code v-pre>any</code>, <code v-pre>numChars</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>NUMBERVALUE</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>decimalSeparator</code>: <code v-pre>any</code>, <code v-pre>groupSeparator</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PHONETIC</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PROPER</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>REPLACE</code></td>
<td style="text-align:left">(<code v-pre>old_text</code>: <code v-pre>any</code>, <code v-pre>start_num</code>: <code v-pre>any</code>, <code v-pre>num_chars</code>: <code v-pre>any</code>, <code v-pre>new_text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>REPLACEB</code></td>
<td style="text-align:left">(<code v-pre>old_text</code>: <code v-pre>any</code>, <code v-pre>start_num</code>: <code v-pre>any</code>, <code v-pre>num_chars</code>: <code v-pre>any</code>, <code v-pre>new_text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>REPT</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>number_times</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RIGHT</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>numChars</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RIGHTB</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>, <code v-pre>numChars</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SEARCH</code></td>
<td style="text-align:left">(<code v-pre>findText</code>: <code v-pre>any</code>, <code v-pre>withinText</code>: <code v-pre>any</code>, <code v-pre>startNum</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SEARCHB</code></td>
<td style="text-align:left">(<code v-pre>findText</code>: <code v-pre>any</code>, <code v-pre>withinText</code>: <code v-pre>any</code>, <code v-pre>startNum</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SUBSTITUTE</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>never</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>T</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TEXT</code></td>
<td style="text-align:left">(<code v-pre>value</code>: <code v-pre>any</code>, <code v-pre>formatText</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TEXTJOIN</code></td>
<td style="text-align:left">(...<code v-pre>params</code>: <code v-pre>any</code>) =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TRIM</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>UNICHAR</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>UNICODE</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>any</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/text.ts:46</p>
<hr>
<h3 id="trigfunctions" tabindex="-1"><a class="header-anchor" href="#trigfunctions" aria-hidden="true">#</a> TrigFunctions</h3>
<p>• <code v-pre>Const</code> <strong>TrigFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-10" tabindex="-1"><a class="header-anchor" href="#type-declaration-10" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ACOS</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ACOSH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ACOT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ACOTH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ASIN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ASINH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ATAN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ATAN2</code></td>
<td style="text-align:left">(<code v-pre>x</code>: <code v-pre>any</code>, <code v-pre>y</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ATANH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COS</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COSH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COT</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COTH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CSC</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CSCH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SEC</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SECH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SIN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>SINH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TAN</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TANH</code></td>
<td style="text-align:left">(<code v-pre>number</code>: <code v-pre>any</code>) =&gt; <code v-pre>number</code></td>
</tr>
</tbody>
</table>
<h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/trigonometry.ts:8</p>
<hr>
<h3 id="webfunctions" tabindex="-1"><a class="header-anchor" href="#webfunctions" aria-hidden="true">#</a> WebFunctions</h3>
<p>• <code v-pre>Const</code> <strong>WebFunctions</strong>: <code v-pre>Object</code></p>
<h4 id="type-declaration-11" tabindex="-1"><a class="header-anchor" href="#type-declaration-11" aria-hidden="true">#</a> Type declaration</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ENCODEURL</code></td>
<td style="text-align:left">(<code v-pre>text</code>: <code v-pre>any</code>) =&gt; <code v-pre>string</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>FILTERXML</code></td>
<td style="text-align:left">() =&gt; <code v-pre>void</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>WEBSERVICE</code></td>
<td style="text-align:left">(<code v-pre>context</code>: <code v-pre>any</code>, <code v-pre>url</code>: <code v-pre>any</code>) =&gt; <code v-pre>Promise</code>&lt;<code v-pre>string</code>&gt;</td>
</tr>
</tbody>
</table>
<h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a> Defined in</h4>
<p>src/formula/formulas/functions/web.ts:6</p>
</template>
