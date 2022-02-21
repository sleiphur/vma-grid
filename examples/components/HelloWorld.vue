<script setup lang="ts">
import { ref } from 'vue'
import VmaGridFoobar from "../../src/foobar/src/foobar";
import VmaGridIcon from "../../src/icon/src/icon";

defineProps<{ msg: string }>()

const count = ref(0)
const isLoading = ref(false);
const clickEvent = () => {
  isLoading.value = !isLoading.value
};
const selectedValues = ref<String>('2');
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <vma-grid-foobar type="bar" style="width: 100px; height: 100px;">测试</vma-grid-foobar>
  <vma-grid-icon name="bookmark" size="mini" type="default"></vma-grid-icon>
  <vma-grid-loading size="mini">测试</vma-grid-loading>
  <vma-grid-button plain type="primary" size="mini" loading-text="加载中..." @click="clickEvent">点击这里</vma-grid-button>

  <vma-grid-radio-group size="small" type="primary" v-model="selectedValues">
    <vma-grid-radio size="large" label="1">选项1</vma-grid-radio>
    <vma-grid-radio label="2">选项2</vma-grid-radio>
    <vma-grid-radio size="normal" label="3" disabled>选项3</vma-grid-radio>
    <vma-grid-radio label="4" size="small" content="选项4*"></vma-grid-radio>
    <vma-grid-radio size="mini" label="5">选项5</vma-grid-radio>
  </vma-grid-radio-group>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
