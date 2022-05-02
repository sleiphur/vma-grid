<template>



  <vma-grid :data="gridData" :size="selectedSizeValue" :type="selectedThemeValue"
            :minDimensions="[10, 10]"
            :functions="customFunctions"
            resizeColumn resizeRow style="width: 100%; height: calc(100vh - 50px);"></vma-grid>

  <div style="height: 10px; width: 100%;"></div>

  <vma-grid-radio-group type="primary" v-model="selectedDataTypeValues" v-on:change="selectedDataTypChangeMethod">
    <vma-grid-radio label="1">使用Map数据结构的数据初始化表格</vma-grid-radio>
    <vma-grid-radio label="2">使用普通二位数组数据结构的数据初始化表格</vma-grid-radio>
    <vma-grid-radio label="3">使用带对象定义的二位数组数据结构的数据初始化表格</vma-grid-radio>
  </vma-grid-radio-group>

</template>

<script lang="ts">
import {defineComponent, onMounted, ref, reactive, computed} from 'vue'
import {FormulaError, FormulaHelpers, Types} from "../../src/formula";

export default defineComponent({
  name: 'GridHeaderGroup',
  setup() {
    const isLoading = ref(false);
    const clickEvent = () => {
      isLoading.value = !isLoading.value
    };

    const selectedDataTypeValues = ref<String>('1');

    const selectedDataTypChangeMethod = (msg: any, event: any) => {
      Object.assign(gridData , reactive([{
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
        dataType: computeDataType.value,
        data: computeData.value,
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
      }]));
      console.log(gridData)
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
      [2011112000, 100, 21, 2, '1000', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三0 ', ''],
      [2011112001, 101, 21, 2, '1001', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三1 ', ''],
      [2011112002, 102, 21, 2, '1002', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三2 ', ''],
      [2011112003, 103, 21, 2, '1003', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三3 ', ''],
      [2011112004, 104, 21, 2, '1004', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三4 ', ''],
      [2011112005, 105, 21, 2, '1005', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三5 ', ''],
      [2011112006, 106, 21, 2, '1006', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三6 ', ''],
      [2011112007, 107, 21, 2, '1007', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三7 ', ''],
      [2011112008, 108, 21, 2, '1008', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1) `, '男/女', '张三8 ', ''],
      [2011112009, 109, 21, 2, '1009', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三9 ', ''],
      [2011112010, 110, 21, 2, '1010', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三10', ''],
      [2011112011, 111, 21, 2, '1011', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三11', ''],
      [2011112012, 112, 21, 2, '1012', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三12', ''],
      [2011112013, 113, 21, 2, '1013', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三13', ''],
      [2011112014, 114, 21, 2, '1014', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三14', ''],
      [2011112015, 115, 21, 2, '1015', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三15', ''],
      [2011112016, 116, 21, 2, '1016', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三16', ''],
      [2011112017, 117, 21, 2, '1017', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三17', ''],
      [2011112018, 118, 21, 2, '1018', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三18', ''],
      [2011112019, 119, 21, 2, '1019', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三19', ''],
      [2011112020, 120, 21, 2, '1020', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三20', ''],
      [2011112021, 121, 21, 2, '1021', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三21', ''],
      [2011112022, 122, 21, 2, '1022', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三22', ''],
      [2011112023, 123, 21, 2, '1023', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三23', ''],
      [2011112024, 124, 21, 2, '1024', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三24', ''],
      [2011112025, 125, 21, 2, '1025', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三25', ''],
      [2011112026, 126, 21, 2, '1026', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三26', ''],
      [2011112027, 127, 21, 2, '1027', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三27', ''],
      [2011112028, 128, 21, 2, '1028', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三28', ''],
      [2011112029, 129, 21, 2, '1029', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三29', ''],
    ]

    const tableTypeAdvancedGridData = [
      [2011112000, {v: 100, fs: 16, ff: 'Verdana', ol: 1, bl: 1, bg: '#0071be', fc: '#f2f2f2',}, 31, 2, '1000', '测试数据', `=SUM(${getNextColumnIndex(1)}1 , ${getNextColumnIndex(2)}1) `, '男/女', '张三0 ', ''],
      [2011112001, 101, 31, 2, '1001', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三1 ', ''],
      [2011112002, 102, 31, 2, '1002', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三2 ', ''],
      [2011112003, 103, 31, 2, '1003', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三3 ', ''],
      [2011112004, 104, 31, 2, '1004', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三4 ', ''],
      [2011112005, 105, 31, 2, '1005', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三5 ', ''],
      [2011112006, 106, 31, 2, '1006', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三6 ', ''],
      [2011112007, 107, 31, 2, '1007', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三7 ', ''],
      [2011112008, 108, 31, 2, '1008', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三8 ', ''],
      [2011112009, 109, 31, 2, '1009', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三9 ', ''],
      [2011112010, 110, 31, 2, '1010', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三10', ''],
      [2011112011, 111, 31, 2, '1011', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三11', ''],
      [2011112012, 112, 31, 2, '1012', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三12', ''],
      [2011112013, 113, 31, 2, '1013', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三13', ''],
      [2011112014, 114, 31, 2, '1014', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三14', ''],
      [2011112015, 115, 31, 2, '1015', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三15', ''],
      [2011112016, 116, 31, 2, '1016', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三16', ''],
      [2011112017, 117, 31, 2, '1017', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三17', ''],
      [2011112018, 118, 31, 2, '1018', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三18', ''],
      [2011112019, 119, 31, 2, '1019', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三19', ''],
      [2011112020, 120, 31, 2, '1020', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三20', ''],
      [2011112021, 121, 31, 2, '1021', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三21', ''],
      [2011112022, 122, 31, 2, '1022', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三22', ''],
      [2011112023, 123, 31, 2, '1023', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三23', ''],
      [2011112024, 124, 31, 2, '1024', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三24', ''],
      [2011112025, 125, 31, 2, '1025', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三25', ''],
      [2011112026, 126, 31, 2, '1026', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三26', ''],
      [2011112027, 127, 31, 2, '1027', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三27', ''],
      [2011112028, 128, 31, 2, '1028', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三28', ''],
      [2011112029, 129, 31, 2, '1029', '测试数据', `=SUM(${getNextColumnIndex(1)}1, ${getNextColumnIndex(2)}1)`, '男/女', '张三29', ''],
    ]

    const mapTypeGridData = [
      {r: 1, c: 1, v: '35'},
      {r: 1, c: 2, v: '24862', fs: 12, cf: {fd: 'yyyy-mm-dd', t: 'dd'}},
      {r: 1, c: 3, v: '=3.123 / 10', fs: 18, ff: 'Verdana', cf: {fd: '#,##0.00%', t: 'dp'}},
      {r: 1, c: 4, v: '= 1 - EXP(C1 ^ 3)', bg: '#e6e0ec', cf: {fd: '#,##0.00;-#,##0.00;0', t: 'dn'}},
      {r: 10, c: 15, v: '=D1 + 3'},
      {r: 2, c: 4, v: '=SUM(B1, C10) + A5',},
      {r: 7, c: 4, v: '一小段测试文本3', fs: 16, ff: '华文行楷', ol: 1, cl: 1, ul: 1, it: 1, bl: 1, bg: '#0071be', fc: '#f2f2f2', bdt: true,},
      {r: 6, c: 4, v: '一小段测试文本2', fs: 16, ff: '华文隶书', it: 1, ul: 1, ol: 1, fc: '#0071be', bg: '#f2f2f2', bdl: true, bdb: true, av: 'bottom', ah: 'right',},
      {r: 5, c: 4, v: '一小段测试文本1', fs: 26, ff: '华文新魏', bl: 1, dbt: true,},
      {r: 20, c: 10, v: '=2  *D2 + C1* 1.7',},
      {r: 21, c: 10, v: '=CHAR21(A1)',}
    ]

    const computeDataType = computed((): string => {
      if (selectedDataTypeValues.value === '1') {
        return 'map'
      } else {
        return 'table'
      }
    })

    const computeData = computed((): any => {
      if (selectedDataTypeValues.value === '1') {
        return mapTypeGridData
      } else if (selectedDataTypeValues.value === '2') {
        return tableTypeGridData
      } else {
        return tableTypeAdvancedGridData
      }
    })

    let gridData = reactive([{
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
      dataType: computeDataType.value,
      data: computeData.value,
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


    return {gridData, selectedSizeValue, selectedThemeValue, customFunctions, selectedDataTypeValues, selectedDataTypChangeMethod}
  }
});

</script>

<style scoped>
</style>
