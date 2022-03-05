<script setup lang="ts">
import {reactive, ref} from 'vue'
import {FormulaError, FormulaHelpers, Types} from "../../src/formula";

defineProps<{ msg: string }>()

const count = ref(0)
const isLoading = ref(false);
const clickEvent = () => {
  isLoading.value = !isLoading.value
};
const selectedValues = ref<String>('2');
const checkedValues = reactive(['2', '3']);
const inputValue = ref<String>('测试文本');

const selectedSizeValue = ref<String>('small');
const selectedThemeValue = ref<String>('primary');

const customFunctions = reactive({
  CHAR21: (number) => {
    number = FormulaHelpers.accept(number, Types.NUMBER);
    if (number > 255 || number < 1)
      throw FormulaError.VALUE;
    return String.fromCharCode(number + 21);
  },
  CHAR22: (number) => {
    number = FormulaHelpers.accept(number, Types.NUMBER);
    if (number > 255 || number < 1)
      throw FormulaError.VALUE;
    return String.fromCharCode(number + 22);
  }
})

const gridData = reactive([{
  name: 'sheet 1ABC',
  r: 10,
  c: 20,
  status: 0,
  index: 0,
  order: 0,
  hide: 0,
  config: {
    freeze: {
      l: 2,
      t: 3,
      r: 9,
      b: 12
    },
    merge: [{
      r: 2,
      c: 3,
      rs: 3,
      cs: 4
    }],
    rh: [{
      r: 2,
      h: 48
    }, {
      r:4,
      h: 48
    }],
    cw: [{
      c: 3,
      w: 120
    }, {
      c: 7,
      w: 148
    }],
    rv: [{
      r: 7,
      v: 0
    }, {
      r: 8,
      v: 0
    }],
    cv: [{
      c: 7,
      v: 0
    }],
    border: [{
      type: 'cell',
      r: 7,
      c: 7,
      v: {
        l: {
          s: 1,
          cl: 'red'
        },
        r: {
          s: 1,
          cl: 'rgba(99,99,99,0.7)'
        },
        t: {
          s: 1,
          cl: 'rgb(200,200,200)'
        },
        b: {
          s: 1,
          cl: '#56789A'
        },
      }
    }, {
      type: 'range',
      r: [8, 9],
      c: [4, 6],
      bt: 'border-all',
      s: 1,
      cl: 'cyan'
    }]
  },
  data: [
    {
      r: 1,
      c: 2,
      name: 'B1',
      v: '35'
    },
    {
      r: 1,
      c: 3,
      name: 'C1',
      v: '=3 / 0'
    },
    {
      r: 1,
      c: 4,
      name: 'D1',
      v: '= 1 - EXP(C1 ^ 3)'
    },
    {
      r: 10,
      c: 20,
      name: 'T10',
      v: '=D1 + 3'
    },
    {
      r: 2,
      c: 4,
      name: 'D2',
      v: '=SUM(B1, T10) + AD50'
    },
    {
      r: 7,
      c: 4,
      name: 'D7',
      v: '值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1'
    },
    {
      r: 50,
      c: 30,
      name: 'AD50',
      v: '=2  *D2 + C1* 1.7'
    },
    {
      r: 45,
      c: 30,
      name: 'AD45',
      v: '=CHAR21(B1)'
    }
  ]
}, {
  name: 'sheet 2',
  r: 15,
  c: 25,
  status: 0,
  index: 1,
  order: 1,
  hide: 0,
  data: []
}]);
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

  <vma-grid :data="gridData" :size="selectedSizeValue" :type="selectedThemeValue"
            :minDimensions="[3000, 80]"
            :functions="customFunctions"
            resizeColumn resizeRow style="width: 100%; height: 800px;"></vma-grid>


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

  <vma-grid-checkbox-group v-model="checkedValues" size="mini" type="warning">
    <vma-grid-checkbox size="large" label="2">大型尺寸</vma-grid-checkbox>
    <vma-grid-checkbox label="3">默认尺寸</vma-grid-checkbox>
    <vma-grid-checkbox size="normal" label="4">默认尺寸</vma-grid-checkbox>
    <vma-grid-checkbox size="small" label="5" content="小型尺寸FromContent"></vma-grid-checkbox>
    <vma-grid-checkbox size="mini" label="6">迷你尺寸</vma-grid-checkbox>
  </vma-grid-checkbox-group>

  <vma-grid-textarea size="mini" placeholder="迷你尺寸--disabled" disabled :rows="1" />
  <vma-grid-textarea size="small" placeholder="小尺寸--readonly" readonly type="primary" />
  <vma-grid-textarea placeholder="默认尺寸" v-model="inputValue" wrap :rows="16" type="success" />
  <vma-grid-textarea
      size="large"
      placeholder="大尺寸--初始化rows=4"
      :rows="4"
      :wrap="false"
      v-model="inputValue"
      type="danger"
  />
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
