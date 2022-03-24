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
      r: 4,
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
      v: 0 // 0 隐藏行 1 显示行 若配置为1，因为行默认显示，则该配置不起作用
    }, {
      r: 8,
      v: 0
    }],
    cv: [{
      c: 7,
      v: 0  // 0 隐藏列 1 显示列 若配置为1，因为列默认显示，则该配置不起作用
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
      v: '一小段测试文本'
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
  <vma-grid :data="gridData" :size="selectedSizeValue" :type="selectedThemeValue"
            :minDimensions="[100, 500]"
            :functions="customFunctions"
            resizeColumn resizeRow style="width: 100%; height: calc(100vh - 18px);"></vma-grid>
</template>

<style scoped>
</style>
