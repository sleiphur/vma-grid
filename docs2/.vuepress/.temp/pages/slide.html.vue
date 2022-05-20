<template><!-- markdownlint-disable MD024 MD033 -->
<p>@slidestart</p>
<!-- .slide: data-transition="slide" -->
<h2 id="slide-demo" tabindex="-1"><a class="header-anchor" href="#slide-demo" aria-hidden="true">#</a> Slide Demo</h2>
<!-- .element: class="r-fit-text" -->
<p>A simple slide demo and useful hints.</p>
<!-- .element: class="r-fit-text" -->
<blockquote>
<p>By Mr.Hope. Please scroll mousewheel down to the next slide</p>
</blockquote>
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="marking-slides" tabindex="-1"><a class="header-anchor" href="#marking-slides" aria-hidden="true">#</a> Marking Slides</h2>
<!-- .element: class="r-fit-text" -->
<p><a href="#/1/1">👇</a></p>
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="marking-slides-1" tabindex="-1"><a class="header-anchor" href="#marking-slides-1" aria-hidden="true">#</a> Marking Slides</h2>
<!-- .element: class="r-fit-text" -->
<p>Use <code v-pre>---</code> to mark horizontal slides</p>
<!-- .element: class="fragment fade-in" -->
<p>Use <code v-pre>--</code> to sperate vertical slides in a horizontal slide.</p>
<!-- .element: class="fragment fade-in" -->
<p>Use <code v-pre>&lt;!-- .slide: ... --&gt;</code> to add attributes to slide</p>
<!-- .element: class="fragment fade-in" -->
<p>Use <code v-pre>&lt;!-- .element: ... --&gt;</code> to add attributes to the previous html element</p>
<!-- .element: class="fragment fade-in" -->
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2>
<!-- .element: class="r-fit-text" -->
<p>You can use all kinds of markup in slides.</p>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-1" tabindex="-1"><a class="header-anchor" href="#markdown-1" aria-hidden="true">#</a> Markdown</h2>
<p>You can use all kinds of markup in slides.</p>
<h3 id="this-is-a-h3" tabindex="-1"><a class="header-anchor" href="#this-is-a-h3" aria-hidden="true">#</a> This is a H3</h3>
<p>Headings will transform to UPPERCASE by default.</p>
<p>Here is paragraph with some <strong>bold</strong>, <em>italic</em>, <s>strikethrough</s> text and a <a href="https://mrhope.site" target="_blank" rel="noopener noreferrer">link<ExternalLinkIcon/></a>, and it can auto break itself so you don’t need to worry the length.</p>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-2" tabindex="-1"><a class="header-anchor" href="#markdown-2" aria-hidden="true">#</a> Markdown</h2>
<p>You can use all kinds of markup in slides.</p>
<p>List is <code v-pre>inline-block</code> by default.</p>
<ul>
<li>Item</li>
<li>Item</li>
<li>Item</li>
</ul>
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-3" tabindex="-1"><a class="header-anchor" href="#markdown-3" aria-hidden="true">#</a> Markdown</h2>
<p>You can use all kinds of markup in slides.</p>
<p>Code block will get auto highlight if you enable <code v-pre>highlight</code> plugin.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-4" tabindex="-1"><a class="header-anchor" href="#markdown-4" aria-hidden="true">#</a> Markdown</h2>
<p>You can use all kinds of markup in slides.</p>
<p>You can also write math equation using tex syntax if you enable <code v-pre>math</code> plugin.</p>
<p>$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$</p>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-5" tabindex="-1"><a class="header-anchor" href="#markdown-5" aria-hidden="true">#</a> Markdown</h2>
<p>You can use all kinds of markup in slides.</p>
<p>⚠<strong>Note</strong>: Table, hr and other unstandard Markdown syntax is not supported.</p>
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-auto-animate  -->
<h2 id="layout-1" tabindex="-1"><a class="header-anchor" href="#layout-1" aria-hidden="true">#</a> Layout</h2>
<!-- .element: class="r-fit-text" -->
<p>👆 The <code v-pre>r-fit-text</code> class makes text as large as possible without overflowing the slide.</p>
<p>--</p>
<!-- .slide: data-auto-animate  -->
<h2 id="layout-2" tabindex="-1"><a class="header-anchor" href="#layout-2" aria-hidden="true">#</a> Layout</h2>
<p><img src="/logo.svg" alt="Logo"></p>
<!-- .element: class="r-stretch" -->
<p>👆 The <code v-pre>r-stretch</code> class helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide.</p>
<p>--</p>
<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->
<h2 id="layout-3" tabindex="-1"><a class="header-anchor" href="#layout-3" aria-hidden="true">#</a> Layout</h2>
<h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h3>
<p>Cutom background by adding <code v-pre>data-background</code> attribute to slide.</p>
<hr>
<!-- .slide: data-auto-animate -->
<h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="fragment-1" tabindex="-1"><a class="header-anchor" href="#fragment-1" aria-hidden="true">#</a> Fragment</h2>
<!-- .element: class="r-fit-text" -->
<p>Fragments are used to highlight or incrementally reveal individual elements on a slide.</p>
<p>Add <code v-pre>fragment</code> and animation class to element.</p>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="fragment-2" tabindex="-1"><a class="header-anchor" href="#fragment-2" aria-hidden="true">#</a> Fragment</h2>
<h3 id="animation-class" tabindex="-1"><a class="header-anchor" href="#animation-class" aria-hidden="true">#</a> Animation class</h3>
<ul>
<li><code v-pre>fade-in</code></li>
</ul>
<!-- .element: class="fragment fade-in" -->
<ul>
<li><code v-pre>fade-out</code></li>
</ul>
<!-- .element: class="fragment fade-out" -->
<ul>
<li><code v-pre>fade-up</code></li>
</ul>
<!-- .element: class="fragment fade-up" -->
<!-- list break -->
<ul>
<li><code v-pre>fade-down</code></li>
</ul>
<!-- .element: class="fragment fade-down" -->
<ul>
<li><code v-pre>fade-left</code></li>
</ul>
<!-- .element: class="fragment fade-left" -->
<ul>
<li><code v-pre>fade-right</code></li>
</ul>
<!-- .element: class="fragment fade-right" -->
<!-- list break -->
<ul>
<li><code v-pre>fade-in-then-out</code></li>
</ul>
<!-- .element: class="fragment fade-in-then-out" -->
<ul>
<li><code v-pre>fade-in-then-semi-out</code></li>
</ul>
<!-- .element: class="fragment fade-in-then-semi-out" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="fragment-3" tabindex="-1"><a class="header-anchor" href="#fragment-3" aria-hidden="true">#</a> Fragment</h2>
<h3 id="animation-class-1" tabindex="-1"><a class="header-anchor" href="#animation-class-1" aria-hidden="true">#</a> Animation class</h3>
<ul>
<li><code v-pre>grow</code></li>
</ul>
<!-- .element: class="fragment grow" -->
<ul>
<li><code v-pre>shrink</code></li>
</ul>
<!-- .element: class="fragment shrink" -->
<ul>
<li><code v-pre>strike</code></li>
</ul>
<!-- .element: class="fragment strike" -->
<!-- list break -->
<ul>
<li><code v-pre>highlight-red</code></li>
</ul>
<!-- .element: class="fragment highlight-red" -->
<ul>
<li><code v-pre>highlight-green</code></li>
</ul>
<!-- .element: class="fragment highlight-green" -->
<ul>
<li><code v-pre>highlight-blue</code></li>
</ul>
<!-- .element: class="fragment highlight-blue" -->
<!-- list break -->
<ul>
<li><code v-pre>highlight-current-red</code></li>
</ul>
<!-- .element: class="fragment highlight-current-red" -->
<ul>
<li><code v-pre>highlight-current-green</code></li>
</ul>
<!-- .element: class="fragment highlight-current-green" -->
<ul>
<li><code v-pre>highlight-current-blue</code></li>
</ul>
<!-- .element: class="fragment highlight-current-blue" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="fragment-4" tabindex="-1"><a class="header-anchor" href="#fragment-4" aria-hidden="true">#</a> Fragment</h2>
<h3 id="mutiple-fragments" tabindex="-1"><a class="header-anchor" href="#mutiple-fragments" aria-hidden="true">#</a> Mutiple fragments</h3>
<p>Multiple fragments can be applied to the same element sequentially by wrapping it</p>
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      Fade in > Turn red > Fade out
    </span>
  </span>
</span>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="fragment-5" tabindex="-1"><a class="header-anchor" href="#fragment-5" aria-hidden="true">#</a> Fragment</h2>
<h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h3>
<p>Order can be changed using the <code v-pre>data-fragment-index</code> attribute.</p>
<p>Multiple elements can appear at the same index.</p>
<ul>
<li>Appears last</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="3"-->
<ul>
<li>Appears second</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="2"-->
<!-- list break -->
<ul>
<li>Appears first</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="1"-->
<ul>
<li>Appears second</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="2"-->
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="transition-1" tabindex="-1"><a class="header-anchor" href="#transition-1" aria-hidden="true">#</a> Transition</h2>
<!-- .element: class="r-fit-text" -->
<p>Transition can be changed by setting the <code v-pre>transition</code> config option globally or <code v-pre>data-transition</code> attribute on specific slide.</p>
<p>Possible values:</p>
<ul>
<li>none</li>
<li>fade</li>
<li>slide</li>
</ul>
<!-- list break -->
<ul>
<li>convex</li>
<li>concave</li>
<li>zoom</li>
</ul>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="transition-2" tabindex="-1"><a class="header-anchor" href="#transition-2" aria-hidden="true">#</a> Transition</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="auto-animate" tabindex="-1"><a class="header-anchor" href="#auto-animate" aria-hidden="true">#</a> Auto animate</h3>
<p><code v-pre>data-auto-animate</code> can be added on nearby slides to make an animation on unchanged elements.</p>
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3>
<p>By enabling <code v-pre>highlight</code> plugin, you can highlight code blocks.</p>
<p>You can use <code v-pre>[a-b|c-d]</code> syntax to highlight lines by steps.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> x<span class="token punctuation">;</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="functions-2" tabindex="-1"><a class="header-anchor" href="#functions-2" aria-hidden="true">#</a> Functions</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h3>
<p>Press <code v-pre>Esc</code> or <code v-pre>O</code> to enter overview mode when the presentation is active</p>
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="functions-3" tabindex="-1"><a class="header-anchor" href="#functions-3" aria-hidden="true">#</a> Functions</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="full-screen" tabindex="-1"><a class="header-anchor" href="#full-screen" aria-hidden="true">#</a> Full Screen</h3>
<p>Press <code v-pre>F</code> or <code v-pre>F11</code> to enter fullscreen when the presentation is active</p>
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="functions-4" tabindex="-1"><a class="header-anchor" href="#functions-4" aria-hidden="true">#</a> Functions</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> Zoom</h3>
<p>Hold down the <code v-pre>alt</code> key (<code v-pre>ctrl</code> in Linux) and click on any element to zoom towards it.</p>
<p>Click again to zoom back out.</p>
<hr>
<!-- .element: class="r-fit-text" -->
<h2 id="the-end" tabindex="-1"><a class="header-anchor" href="#the-end" aria-hidden="true">#</a> The End</h2>
<p>@slideend</p>
</template>
