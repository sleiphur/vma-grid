<template>
  <vma-grid :data="gridData" :size="selectedSizeValue" :type="selectedThemeValue"
            :minDimensions="[1, 1]"
            :functions="customFunctions"
            resizeColumn resizeRow style="width: 100%; height: calc(100vh - 18px);"></vma-grid>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, reactive} from 'vue'
import {FormulaError, FormulaHelpers, Types} from "../../src/formula";

export default defineComponent({
  name: 'GridHeaderGroup',
  setup() {


    // defineProps<{ msg: string }>()

    const count = ref(0)
    const isLoading = ref(false);
    const clickEvent = () => {
      isLoading.value = !isLoading.value
    };
    const selectedValues = ref<String>('2');
    const checkedValues = reactive(['2', '3']);
    const inputValue = ref<String>('测试文本');

    const selectedSizeValue = ref<String>('normal');
    const selectedThemeValue = ref<String>('primary');

    const customFunctions = reactive({
      CHAR21: (number: any) => {
        number = FormulaHelpers.accept(number, Types.NUMBER);
        if (number > 255 || number < 1)
          throw FormulaError.VALUE;
        return String.fromCharCode(number + 21);
      },
      CHAR22: (number: any) => {
        number = FormulaHelpers.accept(number, Types.NUMBER);
        if (number > 255 || number < 1)
          throw FormulaError.VALUE;
        return String.fromCharCode(number + 22);
      }
    })

    const mockList = (rowSize: number, columnSize: number): Promise<any[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let dataList = []
          for (let i = 0; i < rowSize; i++) {
            for (let j = 0; j < columnSize; j++) {
              dataList.push({
                r: i + 1,
                c: j + 1,
                v: 100,
              })
            }
          }
          resolve(dataList)
        }, 5000)
      })
    }

    const getNextColumnIndex = (length: number): string => {
      let nLength: number = length
      let p = ''
      do {
        nLength--
        const n = nLength % 26
        p += String.fromCharCode(n + 65)
        nLength = Math.trunc((nLength - n) / 26)
      } while (nLength > 0)
      return p.split('').reverse().join('')
    }

    let dataList = []
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        dataList.push({
          r: i + 1,
          c: j + 1,
          v: `=sum(${getNextColumnIndex(Number('' + (1 + Math.random() * 20)))}${parseInt('' + (1 + Math.random() * 20))}, ${getNextColumnIndex(Number('' + (1 + Math.random() * 20)))}${parseInt('' + (1 + Math.random() * 20))})`,
        })
      }
    }

    let gridData = reactive([{
      name: 'sheet 1ABC',
      r: 1,
      c: 1,
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
          c: 4,
          w: 200
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
      data: dataList
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

    onMounted(() => {
      // mockList(100, 100).then((result) => {
      //   gridData = reactive([{
      //     name: 'sheet 1ABC',
      //     r: 1,
      //     c: 1,
      //     status: 0,
      //     index: 0,
      //     order: 0,
      //     hide: 0,
      //     config: {
      //       freeze: {
      //         l: 2,
      //         t: 3,
      //         r: 9,
      //         b: 12
      //       },
      //       merge: [{
      //         r: 2,
      //         c: 3,
      //         rs: 3,
      //         cs: 4
      //       }],
      //       rh: [{
      //         r: 2,
      //         h: 48
      //       }, {
      //         r: 4,
      //         h: 48
      //       }],
      //       cw: [{
      //         c: 3,
      //         w: 120
      //       }, {
      //         c: 4,
      //         w: 200
      //       }],
      //       rv: [{
      //         r: 7,
      //         v: 0 // 0 隐藏行 1 显示行 若配置为1，因为行默认显示，则该配置不起作用
      //       }, {
      //         r: 8,
      //         v: 0
      //       }],
      //       cv: [{
      //         c: 7,
      //         v: 0  // 0 隐藏列 1 显示列 若配置为1，因为列默认显示，则该配置不起作用
      //       }],
      //       border: [{
      //         type: 'cell',
      //         r: 7,
      //         c: 7,
      //         v: {
      //           l: {
      //             s: 1,
      //             cl: 'red'
      //           },
      //           r: {
      //             s: 1,
      //             cl: 'rgba(99,99,99,0.7)'
      //           },
      //           t: {
      //             s: 1,
      //             cl: 'rgb(200,200,200)'
      //           },
      //           b: {
      //             s: 1,
      //             cl: '#56789A'
      //           },
      //         }
      //       }, {
      //         type: 'range',
      //         r: [8, 9],
      //         c: [4, 6],
      //         bt: 'border-all',
      //         s: 1,
      //         cl: 'cyan'
      //       }]
      //     },
      //     data: result
      //   }, {
      //     name: 'sheet 2',
      //     r: 15,
      //     c: 25,
      //     status: 0,
      //     index: 1,
      //     order: 1,
      //     hide: 0,
      //     data: []
      //   }]);
      //   console.log(gridData)
      // })
    })


    return {gridData, selectedSizeValue, selectedThemeValue, customFunctions}
  }
});

</script>

<style scoped>
</style>
