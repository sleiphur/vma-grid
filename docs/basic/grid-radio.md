### 2

<vma-grid-radio-group size="mini" type="danger" v-model="selectedValues" v-on:change="changeMethod">
  <vma-grid-radio size="large" label="1">选项1</vma-grid-radio>
  <vma-grid-radio label="2">选项2</vma-grid-radio>
  <vma-grid-radio size="normal" label="3" disabled>选项3</vma-grid-radio>
  <vma-grid-radio label="4" size="small" content="选项4*"></vma-grid-radio>
  <vma-grid-radio size="mini" label="5">选项5</vma-grid-radio>
</vma-grid-radio-group>
<vma-grid-radio-group size="normal" type="warning" v-model="selectedValues">
  <vma-grid-radio size="large" label="1">选项1</vma-grid-radio>
  <vma-grid-radio label="2">选项2</vma-grid-radio>
  <vma-grid-radio size="normal" label="3" disabled>选项3</vma-grid-radio>
  <vma-grid-radio label="4" size="small" content="选项4*"></vma-grid-radio>
  <vma-grid-radio size="mini" label="5">选项5</vma-grid-radio>
</vma-grid-radio-group>
<vma-grid-radio-group size="small" v-model="selectedValues">
  <vma-grid-radio size="large" label="1">选项1</vma-grid-radio>
  <vma-grid-radio label="2">选项2</vma-grid-radio>
  <vma-grid-radio size="normal" label="3" disabled>选项3</vma-grid-radio>
  <vma-grid-radio label="4" size="small" content="选项4*"></vma-grid-radio>
  <vma-grid-radio size="mini" label="5">选项5</vma-grid-radio>
</vma-grid-radio-group>

<vma-grid-radio-group type="primary" v-model="selectedValues">
  <vma-grid-radio size="xxx-large" label="1">选项1</vma-grid-radio>
  <vma-grid-radio label="2">选项2</vma-grid-radio>
  <vma-grid-radio size="normal" label="3" disabled>选项3</vma-grid-radio>
  <vma-grid-radio label="4" size="small" content="选项4*"></vma-grid-radio>
  <vma-grid-radio size="mini" label="5">选项5</vma-grid-radio>
</vma-grid-radio-group>


<script lang="ts">
  import {defineComponent, reactive, ref} from 'vue';
  export default defineComponent({
    name: 'Button',
    setup() {
      const isLoading = ref(false);
      const inputValue = ref<String>('测试文本');
      const selectedValues = ref<String>('2');
      const checkedValues = reactive(['2', '3']);

      const gridData = reactive([{
        name: 'sheet 1',
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
                h: 24
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
                v: '123'
            }, 
            {
                r: 10, 
                c: 20, 
                v: 123
            }, 
            {
                r: 7, 
                c: 4, 
                v: '值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1值1'
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
        checkedValues,
        clickEvent,
        changeMethod,
        gridData,
        inputValue,
      }
    },
  })
</script>
