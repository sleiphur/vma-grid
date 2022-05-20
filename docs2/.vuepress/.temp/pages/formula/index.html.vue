<template><h1 id="vue-3-typescript-vite" tabindex="-1"><a class="header-anchor" href="#vue-3-typescript-vite" aria-hidden="true">#</a> Vue 3 + Typescript + Vite</h1>
<p>This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 <code v-pre>&lt;script setup&gt;</code> SFCs, check out the <a href="https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup" target="_blank" rel="noopener noreferrer">script setup docs<ExternalLinkIcon/></a> to learn more.</p>
<h2 id="recommended-ide-setup" tabindex="-1"><a class="header-anchor" href="#recommended-ide-setup" aria-hidden="true">#</a> Recommended IDE Setup</h2>
<ul>
<li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode<ExternalLinkIcon/></a> + <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Volar<ExternalLinkIcon/></a></li>
</ul>
<h2 id="type-support-for-vue-imports-in-ts" tabindex="-1"><a class="header-anchor" href="#type-support-for-vue-imports-in-ts" aria-hidden="true">#</a> Type Support For <code v-pre>.vue</code> Imports in TS</h2>
<p>Since TypeScript cannot handle type information for <code v-pre>.vue</code> imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in <code v-pre>.vue</code> imports (for example to get props validation when using manual <code v-pre>h(...)</code> calls), you can enable Volar's <code v-pre>.vue</code> type support plugin by running <code v-pre>Volar: Switch TS Plugin on/off</code> from VSCode command palette.</p>
</template>
