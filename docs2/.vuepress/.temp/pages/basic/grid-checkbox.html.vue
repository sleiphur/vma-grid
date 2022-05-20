<template><h3 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h3>
<vma-grid-checkbox-group v-model="checkedValues" size="mini" type="warning">
  <vma-grid-checkbox size="large" label="2">大型尺寸</vma-grid-checkbox>
  <vma-grid-checkbox label="3">默认尺寸</vma-grid-checkbox>
  <vma-grid-checkbox size="normal" label="4">默认尺寸</vma-grid-checkbox>
  <vma-grid-checkbox size="small" label="5" content="小型尺寸FromContent"></vma-grid-checkbox>
  <vma-grid-checkbox size="mini" label="6">迷你尺寸</vma-grid-checkbox>
</vma-grid-checkbox-group>
<vma-grid-checkbox-group v-model="checkedValues" @change="changeMethod" >
    <vma-grid-checkbox size="large" disabled label="2">大型尺寸</vma-grid-checkbox>
    <vma-grid-checkbox label="3" type="primary">默认尺寸</vma-grid-checkbox>
    <vma-grid-checkbox size="xx-large" label="4">默认尺寸</vma-grid-checkbox>
    <vma-grid-checkbox size="small" label="5" content="小型尺寸FromContent"></vma-grid-checkbox>
    <vma-grid-checkbox size="mini" label="6" disabled>迷你尺寸</vma-grid-checkbox>
</vma-grid-checkbox-group>
</template>

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
