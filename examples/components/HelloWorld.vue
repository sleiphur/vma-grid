<template>
  <vma-grid :data="gridData" :size="selectedSizeValue" :type="selectedThemeValue"
            :minDimensions="[10, 10]"
            :functions="customFunctions"
            resizeColumn resizeRow style="width: 100%; height: calc(100vh - 18px);"></vma-grid>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, reactive} from 'vue'
import {FormulaError, FormulaHelpers, Types} from "../../src/formula";

export default defineComponent({
  name: 'GridHeaderGroup',
  setup() {
    const isLoading = ref(false);
    const clickEvent = () => {
      isLoading.value = !isLoading.value
    };

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

    const tableTypeGridData = [
        [20111120000000000000, 100, null, undefined, '1000', '测试数据', `=SUM(${getNextColumnIndex(1)}1 , ${getNextColumnIndex(1)}2) `, '男/女', '张三0 ', ''],
        [20111120000000000001, 101, null, undefined, '1001', '测试数据', `=SUM(${getNextColumnIndex(2)}1 , ${getNextColumnIndex(2)}2) `, '男/女', '张三1 ', ''],
        [20111120000000000002, 102, null, undefined, '1002', '测试数据', `=SUM(${getNextColumnIndex(3)}1 , ${getNextColumnIndex(3)}2) `, '男/女', '张三2 ', ''],
        [20111120000000000003, 103, null, undefined, '1003', '测试数据', `=SUM(${getNextColumnIndex(4)}1 , ${getNextColumnIndex(4)}2) `, '男/女', '张三3 ', ''],
        [20111120000000000004, 104, null, undefined, '1004', '测试数据', `=SUM(${getNextColumnIndex(5)}1 , ${getNextColumnIndex(5)}2) `, '男/女', '张三4 ', ''],
        [20111120000000000005, 105, null, undefined, '1005', '测试数据', `=SUM(${getNextColumnIndex(6)}1 , ${getNextColumnIndex(6)}2) `, '男/女', '张三5 ', ''],
        [20111120000000000006, 106, null, undefined, '1006', '测试数据', `=SUM(${getNextColumnIndex(7)}1 , ${getNextColumnIndex(7)}2) `, '男/女', '张三6 ', ''],
        [20111120000000000007, 107, null, undefined, '1007', '测试数据', `=SUM(${getNextColumnIndex(8)}1 , ${getNextColumnIndex(8)}2) `, '男/女', '张三7 ', ''],
        [20111120000000000008, 108, null, undefined, '1008', '测试数据', `=SUM(${getNextColumnIndex(9)}1 , ${getNextColumnIndex(9)}2) `, '男/女', '张三8 ', ''],
        [20111120000000000009, 109, null, undefined, '1009', '测试数据', `=SUM(${getNextColumnIndex(10)}1, ${getNextColumnIndex(10)}2)`, '男/女', '张三9 ', ''],
        [20111120000000000010, 110, null, undefined, '1010', '测试数据', `=SUM(${getNextColumnIndex(11)}1, ${getNextColumnIndex(11)}2)`, '男/女', '张三10', ''],
        [20111120000000000011, 111, null, undefined, '1011', '测试数据', `=SUM(${getNextColumnIndex(12)}1, ${getNextColumnIndex(12)}2)`, '男/女', '张三11', ''],
        [20111120000000000012, 112, null, undefined, '1012', '测试数据', `=SUM(${getNextColumnIndex(13)}1, ${getNextColumnIndex(13)}2)`, '男/女', '张三12', ''],
        [20111120000000000013, 113, null, undefined, '1013', '测试数据', `=SUM(${getNextColumnIndex(14)}1, ${getNextColumnIndex(14)}2)`, '男/女', '张三13', ''],
        [20111120000000000014, 114, null, undefined, '1014', '测试数据', `=SUM(${getNextColumnIndex(15)}1, ${getNextColumnIndex(15)}2)`, '男/女', '张三14', ''],
        [20111120000000000015, 115, null, undefined, '1015', '测试数据', `=SUM(${getNextColumnIndex(16)}1, ${getNextColumnIndex(16)}2)`, '男/女', '张三15', ''],
        [20111120000000000016, 116, null, undefined, '1016', '测试数据', `=SUM(${getNextColumnIndex(17)}1, ${getNextColumnIndex(17)}2)`, '男/女', '张三16', ''],
        [20111120000000000017, 117, null, undefined, '1017', '测试数据', `=SUM(${getNextColumnIndex(18)}1, ${getNextColumnIndex(18)}2)`, '男/女', '张三17', ''],
        [20111120000000000018, 118, null, undefined, '1018', '测试数据', `=SUM(${getNextColumnIndex(19)}1, ${getNextColumnIndex(19)}2)`, '男/女', '张三18', ''],
        [20111120000000000019, 119, null, undefined, '1019', '测试数据', `=SUM(${getNextColumnIndex(20)}1, ${getNextColumnIndex(20)}2)`, '男/女', '张三19', ''],
        [20111120000000000020, 120, null, undefined, '1020', '测试数据', `=SUM(${getNextColumnIndex(21)}1, ${getNextColumnIndex(21)}2)`, '男/女', '张三20', ''],
        [20111120000000000021, 121, null, undefined, '1021', '测试数据', `=SUM(${getNextColumnIndex(22)}1, ${getNextColumnIndex(22)}2)`, '男/女', '张三21', ''],
        [20111120000000000022, 122, null, undefined, '1022', '测试数据', `=SUM(${getNextColumnIndex(23)}1, ${getNextColumnIndex(23)}2)`, '男/女', '张三22', ''],
        [20111120000000000023, 123, null, undefined, '1023', '测试数据', `=SUM(${getNextColumnIndex(24)}1, ${getNextColumnIndex(24)}2)`, '男/女', '张三23', ''],
        [20111120000000000024, 124, null, undefined, '1024', '测试数据', `=SUM(${getNextColumnIndex(25)}1, ${getNextColumnIndex(25)}2)`, '男/女', '张三24', ''],
        [20111120000000000025, 125, null, undefined, '1025', '测试数据', `=SUM(${getNextColumnIndex(26)}1, ${getNextColumnIndex(26)}2)`, '男/女', '张三25', ''],
        [20111120000000000026, 126, null, undefined, '1026', '测试数据', `=SUM(${getNextColumnIndex(27)}1, ${getNextColumnIndex(27)}2)`, '男/女', '张三26', ''],
        [20111120000000000027, 127, null, undefined, '1027', '测试数据', `=SUM(${getNextColumnIndex(28)}1, ${getNextColumnIndex(28)}2)`, '男/女', '张三27', ''],
        [20111120000000000028, 128, null, undefined, '1028', '测试数据', `=SUM(${getNextColumnIndex(29)}1, ${getNextColumnIndex(29)}2)`, '男/女', '张三28', ''],
        [20111120000000000029, 129, null, undefined, '1029', '测试数据', `=SUM(${getNextColumnIndex(30)}1, ${getNextColumnIndex(30)}2)`, '男/女', '张三29', ''],
    ]

    const tableTypeAdvancedGridData = [
      [20111120000000000000, {v: 100, fs: 16, ff: 'Verdana', ol: 1, bl: 1, bg: '#0071be', fc: '#f2f2f2',}, null, undefined, '1000', '测试数据', `=SUM(${getNextColumnIndex(1)}1 , ${getNextColumnIndex(1)}2) `, '男/女', '张三0 ', ''],
      [20111120000000000001, 101, null, undefined, '1001', '测试数据', `=SUM(${getNextColumnIndex(2)}1 , ${getNextColumnIndex(2)}2) `, '男/女', '张三1 ', ''],
      [20111120000000000002, 102, null, undefined, '1002', '测试数据', `=SUM(${getNextColumnIndex(3)}1 , ${getNextColumnIndex(3)}2) `, '男/女', '张三2 ', ''],
      [20111120000000000003, 103, null, undefined, '1003', '测试数据', `=SUM(${getNextColumnIndex(4)}1 , ${getNextColumnIndex(4)}2) `, '男/女', '张三3 ', ''],
      [20111120000000000004, 104, null, undefined, '1004', '测试数据', `=SUM(${getNextColumnIndex(5)}1 , ${getNextColumnIndex(5)}2) `, '男/女', '张三4 ', ''],
      [20111120000000000005, 105, null, undefined, '1005', '测试数据', `=SUM(${getNextColumnIndex(6)}1 , ${getNextColumnIndex(6)}2) `, '男/女', '张三5 ', ''],
      [20111120000000000006, 106, null, undefined, '1006', '测试数据', `=SUM(${getNextColumnIndex(7)}1 , ${getNextColumnIndex(7)}2) `, '男/女', '张三6 ', ''],
      [20111120000000000007, 107, null, undefined, '1007', '测试数据', `=SUM(${getNextColumnIndex(8)}1 , ${getNextColumnIndex(8)}2) `, '男/女', '张三7 ', ''],
      [20111120000000000008, 108, null, undefined, '1008', '测试数据', `=SUM(${getNextColumnIndex(9)}1 , ${getNextColumnIndex(9)}2) `, '男/女', '张三8 ', ''],
      [20111120000000000009, 109, null, undefined, '1009', '测试数据', `=SUM(${getNextColumnIndex(10)}1, ${getNextColumnIndex(10)}2)`, '男/女', '张三9 ', ''],
      [20111120000000000010, 110, null, undefined, '1010', '测试数据', `=SUM(${getNextColumnIndex(11)}1, ${getNextColumnIndex(11)}2)`, '男/女', '张三10', ''],
      [20111120000000000011, 111, null, undefined, '1011', '测试数据', `=SUM(${getNextColumnIndex(12)}1, ${getNextColumnIndex(12)}2)`, '男/女', '张三11', ''],
      [20111120000000000012, 112, null, undefined, '1012', '测试数据', `=SUM(${getNextColumnIndex(13)}1, ${getNextColumnIndex(13)}2)`, '男/女', '张三12', ''],
      [20111120000000000013, 113, null, undefined, '1013', '测试数据', `=SUM(${getNextColumnIndex(14)}1, ${getNextColumnIndex(14)}2)`, '男/女', '张三13', ''],
      [20111120000000000014, 114, null, undefined, '1014', '测试数据', `=SUM(${getNextColumnIndex(15)}1, ${getNextColumnIndex(15)}2)`, '男/女', '张三14', ''],
      [20111120000000000015, 115, null, undefined, '1015', '测试数据', `=SUM(${getNextColumnIndex(16)}1, ${getNextColumnIndex(16)}2)`, '男/女', '张三15', ''],
      [20111120000000000016, 116, null, undefined, '1016', '测试数据', `=SUM(${getNextColumnIndex(17)}1, ${getNextColumnIndex(17)}2)`, '男/女', '张三16', ''],
      [20111120000000000017, 117, null, undefined, '1017', '测试数据', `=SUM(${getNextColumnIndex(18)}1, ${getNextColumnIndex(18)}2)`, '男/女', '张三17', ''],
      [20111120000000000018, 118, null, undefined, '1018', '测试数据', `=SUM(${getNextColumnIndex(19)}1, ${getNextColumnIndex(19)}2)`, '男/女', '张三18', ''],
      [20111120000000000019, 119, null, undefined, '1019', '测试数据', `=SUM(${getNextColumnIndex(20)}1, ${getNextColumnIndex(20)}2)`, '男/女', '张三19', ''],
      [20111120000000000020, 120, null, undefined, '1020', '测试数据', `=SUM(${getNextColumnIndex(21)}1, ${getNextColumnIndex(21)}2)`, '男/女', '张三20', ''],
      [20111120000000000021, 121, null, undefined, '1021', '测试数据', `=SUM(${getNextColumnIndex(22)}1, ${getNextColumnIndex(22)}2)`, '男/女', '张三21', ''],
      [20111120000000000022, 122, null, undefined, '1022', '测试数据', `=SUM(${getNextColumnIndex(23)}1, ${getNextColumnIndex(23)}2)`, '男/女', '张三22', ''],
      [20111120000000000023, 123, null, undefined, '1023', '测试数据', `=SUM(${getNextColumnIndex(24)}1, ${getNextColumnIndex(24)}2)`, '男/女', '张三23', ''],
      [20111120000000000024, 124, null, undefined, '1024', '测试数据', `=SUM(${getNextColumnIndex(25)}1, ${getNextColumnIndex(25)}2)`, '男/女', '张三24', ''],
      [20111120000000000025, 125, null, undefined, '1025', '测试数据', `=SUM(${getNextColumnIndex(26)}1, ${getNextColumnIndex(26)}2)`, '男/女', '张三25', ''],
      [20111120000000000026, 126, null, undefined, '1026', '测试数据', `=SUM(${getNextColumnIndex(27)}1, ${getNextColumnIndex(27)}2)`, '男/女', '张三26', ''],
      [20111120000000000027, 127, null, undefined, '1027', '测试数据', `=SUM(${getNextColumnIndex(28)}1, ${getNextColumnIndex(28)}2)`, '男/女', '张三27', ''],
      [20111120000000000028, 128, null, undefined, '1028', '测试数据', `=SUM(${getNextColumnIndex(29)}1, ${getNextColumnIndex(29)}2)`, '男/女', '张三28', ''],
      [20111120000000000029, 129, null, undefined, '1029', '测试数据', `=SUM(${getNextColumnIndex(30)}1, ${getNextColumnIndex(30)}2)`, '男/女', '张三29', ''],
    ]

    const mapTypeGridData = [
      { r: 1,   c: 2,   v: '24862',             fs: 12,         cf: { fd: 'yyyy-mm-dd', t: 'd' }},
      { r: 1,   c: 3,   v: '=3.123 / 10',           fs: 18,         ff: 'Verdana',                        cf: { fd: '#,##0.00%', t: 'n' }},
      { r: 1,   c: 4,   v: '= 1 - EXP(C1 ^ 3)', bg: '#e6e0ec',  cf: { fd: '##.0000', t: 'n' }},
      { r: 10,  c: 15,  v: '=D1 + 3'  },
      { r: 2,   c: 4,   v: '=SUM(B1, T10) + AD50',  },
      { r: 7,   c: 4,   v: '一小段测试文本3',      fs: 16,         ff: '华文行楷',   ol: 1,   cl: 1,      ul: 1,   it: 1,          bl: 1,           bg: '#0071be',   fc: '#f2f2f2',    bdt: true,  },
      { r: 6,   c: 4,   v: '一小段测试文本2',      fs: 16,         ff: '华文隶书',   it: 1,   ul: 1,      ol: 1,   fc: '#0071be',  bg: '#f2f2f2',   bdl: true,       bdb: true,        av: 'bottom',   ah: 'right',  },
      { r: 5,   c: 4,   v: '一小段测试文本1',      fs: 26,         ff: '华文新魏',   bl: 1,   dbt: true,  },
      { r: 20,  c: 10,  v: '=2  *D2 + C1* 1.7',  },
      { r: 21,  c: 10,  v: '=CHAR21(B1)', }
    ]

    const gridData = reactive([{
      name: 'sheet 1ABC',
      r: 10,
      c: 10,
      status: 0,
      index: 0,
      order: 0,
      hide: 0,
      config: {
        merge: [
          {r: 2, c: 3, rs: 3, cs: 4,},
          {r: 10, c: 12, rs: 6, cs: 5,},
        ],
        rh: [
          {r: 3, h: 48,},
          {r: 5, h: 48,},
        ],
        cw: [
          {c: 3, w: 120,},
          {c: 4, w: 200,}],
        rv: [// 0 隐藏行 1 显示行 若配置为1，因为行默认显示，则该配置不起作用
          {r: 8, v: 0,},
          {r: 9, v: 0,}
        ],
        cv: [// 0 隐藏列 1 显示列 若配置为1，因为列默认显示，则该配置不起作用
          {c: 8, v: 0,}
        ],
      },
      // 初始化数据， map类型， 适合零散的数据初始化
      dataType: 'map',
      data: mapTypeGridData,
      // 或者也可以使用：初始化数据， table类型， 与传统表格数据类似
      // dataType: 'table',
      // data: tableTypeGridData
      // 或者也可以使用：初始化数据， table类型， 数据可以预置复杂属性
      // dataType: 'table',
      // data: tableTypeAdvancedGridData
      // TODO 扩展数据到控件如button、radiobox、checkbox、datetime、select、switch等
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
    })


    return {gridData, selectedSizeValue, selectedThemeValue, customFunctions}
  }
});

</script>

<style scoped>
</style>
