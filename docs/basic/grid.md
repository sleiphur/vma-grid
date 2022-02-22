### 3.1

• **尺寸**：
<vma-grid-radio-group :size="selectedSizeValue" :type="selectedThemeValue" v-model="selectedSizeValue" style="display: inline-block;">
  <vma-grid-radio label="mini">mini</vma-grid-radio>
  <vma-grid-radio label="small">small</vma-grid-radio>
  <vma-grid-radio label="normal">normal</vma-grid-radio>
  <vma-grid-radio label="large">large</vma-grid-radio>
  <vma-grid-radio label="x-large">x-large</vma-grid-radio>
  <vma-grid-radio label="xx-large">xx-large</vma-grid-radio>
  <vma-grid-radio label="xxx-large">xxx-large</vma-grid-radio>
</vma-grid-radio-group>

• **颜色主题**：
<vma-grid-radio-group :size="selectedSizeValue" :type="selectedThemeValue" v-model="selectedThemeValue" style="display: inline-block;">
    <vma-grid-radio label="default">default</vma-grid-radio>
    <vma-grid-radio label="primary">primary</vma-grid-radio>
    <vma-grid-radio label="success">success</vma-grid-radio>
    <vma-grid-radio label="warning">warning</vma-grid-radio>
    <vma-grid-radio label="danger">danger</vma-grid-radio>
</vma-grid-radio-group>

<vma-grid :data="gridData" :size="selectedSizeValue" :type="selectedThemeValue" resizeColumn resizeRow style="width: 100%; height: 800px;"></vma-grid>

<script lang="ts">
  import {defineComponent, reactive, ref} from 'vue';
  export default defineComponent({
    name: 'Button',
    setup() {
      const isLoading = ref(false);
      const inputValue = ref<String>('测试文本');
      const selectedValues = ref<String>('2');
      const checkedValues = reactive(['2', '3']);

      const selectedSizeValue = ref<String>('small');
      const selectedThemeValue = ref<String>('primary');

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
                v: '123'
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
                r: 36,
                c: 30,
                name: 'AD36',
                v: 768
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

      const clickEvent = () => {
        isLoading.value = !isLoading.value
      };

      const changeMethod = (msg, event) => {
        console.log('changeMethod');
        console.log(event);
        console.log(msg);
      };

      return {
        isLoading,
        selectedValues,
        selectedSizeValue,
        selectedThemeValue,
        checkedValues,
        clickEvent,
        changeMethod,
        gridData,
        inputValue,
      }
    },
  })
</script>
