import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s,a as r,t as i,F as t,d as e,o as l}from"./app.b41e3990.js";const p={},o=e(`<p>Every document page in VuePress is rendered by Markdown.</p><p>You need to build your document or blog page by creating and writing Markdown in the corresponding path.</p><h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction" aria-hidden="true">#</a> Markdown introduction</h2><p>If you are a new learner and don\u2019t know how to write Markdown, please read <a href="https://vuepress-theme-hope.github.io/v2/basic/markdown/README.html" target="_blank" rel="noopener noreferrer">Markdown Intro</a> and <a href="https://vuepress-theme-hope.github.io/v2/basic/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo</a>.</p><p>::: info Frontmatter</p><p>Frontmatter is a important concept in VuePress. If you don\u2019t know it, you need to read <a href="https://vuepress-theme-hope.github.io/v2/basic/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction</a>.</p><p>:::</p><h2 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement" aria-hidden="true">#</a> VuePress Enhancement</h2><p>To enrich document writing, VuePress has extended Markdown syntax.</p><p>For these extensions, please read <a href="https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress</a>.</p><h2 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement" aria-hidden="true">#</a> Theme Enhancement</h2><h3 id="enable-all" tabindex="-1"><a class="header-anchor" href="#enable-all" aria-hidden="true">#</a> Enable all</h3><p>You can set <code>themeconfig.plugins.htmlEnhance.enableAll</code> to enable all features of the <a href="https://vuepress-theme-hope.github.io/v2/md-enhance/" target="_blank" rel="noopener noreferrer">md-enhance</a> plugin.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
  themeConfig: {
    plugins: {
      mdEnhance: {
        enableAll: true,
      },
    },
  },
};
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="new-feature" tabindex="-1"><a class="header-anchor" href="#new-feature" aria-hidden="true">#</a> New Feature</h2><h3 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h3><p>::: v-pre</p>`,17),u=e(`<p>:::</p><p>::: info Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown">link</a>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const a = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p><p>::: tip Custom Title</p><p>A custom tip container</p><p>:::</p><p>::: warning Custom Title</p><p>A custom warning container</p><p>:::</p><p>::: danger Custom Title</p><p>A custom danger container</p><p>:::</p><p>::: details Custom Title</p><p>A custom details container</p><p>:::</p><p>:::: details Code</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: v-pre

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>::::</p><h3 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h3><p>:::: code-group</p><p>::: code-group-item yarn</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yarn add -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p><p>::: code-group-item npm:active</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm i -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p><p>::::</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/code-group.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript" aria-hidden="true">#</a> Superscript and Subscript</h3><p>19^th^ H~2~O</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> Align</h3><p>::: center</p><p>I am center</p><p>:::</p><p>::: right</p><p>I am right align</p><p>:::</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h3><p>This text has footnote[^first].</p><p>[^first]: This is footnote content</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> Mark</h3><p>You can mark ==important words== .</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> Tasklist</h3><ul><li><p>[x] Plan A</p></li><li><p>[ ] Plan B</p></li><li><p><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail</a></p></li></ul><h3 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h3><p>::: chart A Scatter Chart</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;type&quot;: &quot;scatter&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;Scatter Dataset&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: -10, &quot;y&quot;: 0 },
          { &quot;x&quot;: 0, &quot;y&quot;: 10 },
          { &quot;x&quot;: 10, &quot;y&quot;: 5 },
          { &quot;x&quot;: 0.5, &quot;y&quot;: 5.5 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;x&quot;: {
        &quot;type&quot;: &quot;linear&quot;,
        &quot;position&quot;: &quot;bottom&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>:::</p><ul><li><a href="%5Bchart.md%5D(https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html)">View Detail</a></li></ul><h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h3><div class="language-flow ext-flow line-numbers-mode"><pre class="language-flow"><code>cond=&gt;condition: Process?
process=&gt;operation: Process
e=&gt;end: End

cond(yes)-&gt;process-&gt;e
cond(no)-&gt;e
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h3><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>flowchart TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
    one --&gt; two
    three --&gt; two
    two --&gt; c2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="tex" tabindex="-1"><a class="header-anchor" href="#tex" aria-hidden="true">#</a> Tex</h3><p>$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo" aria-hidden="true">#</a> Code Demo</h3><p>::: demo A normal demo</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;h1&gt;VuePress Theme Hope&lt;/h1&gt;
&lt;p&gt;Is &lt;span id=&quot;very&quot;&gt;very&lt;/span&gt; powerful!&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document.querySelector(&quot;#very&quot;).addEventListener(&quot;click&quot;, () =&gt; {
  alert(&quot;Very powerful!&quot;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>span {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>:::</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h3 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> Presentation</h3><p>@slidestart</p><h2 id="slide-1" tabindex="-1"><a class="header-anchor" href="#slide-1" aria-hidden="true">#</a> Slide 1</h2><p>A paragraph with some text and a <a href="https://mrhope.site" target="_blank" rel="noopener noreferrer">link</a></p><hr><h2 id="slide-2" tabindex="-1"><a class="header-anchor" href="#slide-2" aria-hidden="true">#</a> Slide 2</h2><ul><li>Item 1</li><li>Item 2</li></ul><hr><h2 id="slide-3-1" tabindex="-1"><a class="header-anchor" href="#slide-3-1" aria-hidden="true">#</a> Slide 3.1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const a = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>--</p><h2 id="slide-3-2" tabindex="-1"><a class="header-anchor" href="#slide-3-2" aria-hidden="true">#</a> Slide 3.2</h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul>`,86);function d(n,c){return l(),s(t,null,[o,r("p",null,"Safely use "+i(n.variable)+" in markdown.",1),u],64)}var m=a(p,[["render",d],["__file","markdown.html.vue"]]);export{m as default};
