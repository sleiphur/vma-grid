<template><p>Every document page in VuePress is rendered by Markdown.</p>
<p>You need to build your document or blog page by creating and writing Markdown in the corresponding path.</p>
<!-- more -->
<h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction" aria-hidden="true">#</a> Markdown introduction</h2>
<p>If you are a new learner and don’t know how to write Markdown, please read <a href="https://vuepress-theme-hope.github.io/v2/basic/markdown/README.html" target="_blank" rel="noopener noreferrer">Markdown Intro<ExternalLinkIcon/></a> and <a href="https://vuepress-theme-hope.github.io/v2/basic/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo<ExternalLinkIcon/></a>.</p>
<div class="custom-container info"><p class="custom-container-title">Frontmatter</p>
<p>Frontmatter is a important concept in VuePress. If you don’t know it, you need to read <a href="https://vuepress-theme-hope.github.io/v2/basic/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction<ExternalLinkIcon/></a>.</p>
</div>
<h2 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement" aria-hidden="true">#</a> VuePress Enhancement</h2>
<p>To enrich document writing, VuePress has extended Markdown syntax.</p>
<p>For these extensions, please read <a href="https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress<ExternalLinkIcon/></a>.</p>
<h2 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement" aria-hidden="true">#</a> Theme Enhancement</h2>
<h3 id="enable-all" tabindex="-1"><a class="header-anchor" href="#enable-all" aria-hidden="true">#</a> Enable all</h3>
<p>You can set <code v-pre>themeconfig.plugins.htmlEnhance.enableAll</code> to enable all features of the <a href="https://vuepress-theme-hope.github.io/v2/md-enhance/" target="_blank" rel="noopener noreferrer">md-enhance<ExternalLinkIcon/></a> plugin.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enableAll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new-feature" tabindex="-1"><a class="header-anchor" href="#new-feature" aria-hidden="true">#</a> New Feature</h2>
<h3 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h3>
<p>::: v-pre</p>
<p>Safely use {{ variable }} in markdown.</p>
<p>:::</p>
<div class="custom-container info"><p class="custom-container-title">Custom Title</p>
<p>A custom information container with <code v-pre>code</code>, <a href="#markdown">link</a>.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Custom Title</p>
<p>A custom tip container</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Custom Title</p>
<p>A custom warning container</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">Custom Title</p>
<p>A custom danger container</p>
</div>
<details class="custom-block details"><summary>Custom Title</summary>
<p>A custom details container</p>
</details>
<details class="custom-block details"><summary>Code</summary>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h3>
<p>:::: code-group</p>
<p>::: code-group-item yarn</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>
<p>::: code-group-item npm:active</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>
<p>::::</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/code-group.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript" aria-hidden="true">#</a> Superscript and Subscript</h3>
<p>19^th^ H~2~O</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> Align</h3>
<p>::: center</p>
<p>I am center</p>
<p>:::</p>
<p>::: right</p>
<p>I am right align</p>
<p>:::</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h3>
<p>This text has footnote[^first].</p>
<p>[^first]: This is footnote content</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> Mark</h3>
<p>You can mark ==important words== .</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> Tasklist</h3>
<ul>
<li>
<p>[x] Plan A</p>
</li>
<li>
<p>[ ] Plan B</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h3>
<p>::: chart A Scatter Chart</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"scatter"</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"datasets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Scatter Dataset"</span><span class="token punctuation">,</span>
        <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"rgb(255, 99, 132)"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"scales"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"x"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"linear"</span><span class="token punctuation">,</span>
        <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"bottom"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="%5Bchart.md%5D(https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html)">View Detail</a></li>
</ul>
<h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h3>
<div class="language-flow ext-flow line-numbers-mode"><pre v-pre class="language-flow"><code>cond<span class="token operator">=></span>condition<span class="token operator">:</span> Process<span class="token operator">?</span>
process<span class="token operator">=></span>operation<span class="token operator">:</span> Process
e<span class="token operator">=></span>end<span class="token operator">:</span> End

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>process<span class="token operator">-</span><span class="token operator">></span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h3>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--></span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--></span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--></span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--></span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--></span> two
    three <span class="token arrow operator">--></span> two
    two <span class="token arrow operator">--></span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="tex" tabindex="-1"><a class="header-anchor" href="#tex" aria-hidden="true">#</a> Tex</h3>
<p>$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right}
$$</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo" aria-hidden="true">#</a> Code Demo</h3>
<p>::: demo A normal demo</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>very<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>very<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> powerful!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#very"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Very powerful!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h3 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> Presentation</h3>
<p>@slidestart</p>
<h2 id="slide-1" tabindex="-1"><a class="header-anchor" href="#slide-1" aria-hidden="true">#</a> Slide 1</h2>
<p>A paragraph with some text and a <a href="https://mrhope.site" target="_blank" rel="noopener noreferrer">link<ExternalLinkIcon/></a></p>
<hr>
<h2 id="slide-2" tabindex="-1"><a class="header-anchor" href="#slide-2" aria-hidden="true">#</a> Slide 2</h2>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<hr>
<h2 id="slide-3-1" tabindex="-1"><a class="header-anchor" href="#slide-3-1" aria-hidden="true">#</a> Slide 3.1</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p>
<h2 id="slide-3-2" tabindex="-1"><a class="header-anchor" href="#slide-3-2" aria-hidden="true">#</a> Slide 3.2</h2>
<p>$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$</p>
<p>@slideend</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
</template>
