---
icon: edit
date: 2022-04-23
category:
  - Grid
tag:
  - 基础表格
---


# Grid initialization data

## Default data type initialization

<vma-grid :data="gridData"
:minDimensions="[10, 10]"
resizeColumn
resizeRow
style="height: 400px;">
</vma-grid>

:::: code-group

::: code-group-item ts

```typescript
data: [
    {r: 1, c: 2, name: 'B1', v: '35'},
    {r: 1, c: 3, name: 'C1', v: '=3 / 6'},
    {r: 1, c: 4, name: 'D1', v: '= 1 - EXP(C1 ^ 3)'},
    {r: 1, c: 5, name: 'E1', v: '=D1 + 3'},
]
```

:::

::::

## Tabular data type initialization in the form of a two-dimensional array

### Regular 2D array data

<vma-grid :data="gridTableTypeData"
:minDimensions="[10, 10]"
resizeColumn
resizeRow
style="height: 400px;">
</vma-grid>


:::: code-group

::: code-group-item ts

```typescript
dataType: 'table'
data: [
    [20111120001, 101, '1001', `=SUM(A1 , B1 )`, `=SUM(A1 , C1 )`, '男/女', '张三1 ', null, undefined, ''],
    [20111120002, 102, '1002', `=SUM(A2 , B2 )`, `=SUM(A2 , C2 )`, '男/女', '张三2 ', null, undefined, ''],
    [20111120003, 103, '1003', `=SUM(A3 , B3 )`, `=SUM(A3 , C3 )`, '男/女', '张三3 ', null, undefined, ''],
    [20111120004, 104, '1004', `=SUM(A4 , B4 )`, `=SUM(A4 , C4 )`, '男/女', '张三4 ', null, undefined, ''],
    [20111120005, 105, '1005', `=SUM(A5 , B5 )`, `=SUM(A5 , C5 )`, '男/女', '张三5 ', null, undefined, ''],
    [20111120006, 106, '1006', `=SUM(A6 , B6 )`, `=SUM(A6 , C6 )`, '男/女', '张三6 ', null, undefined, ''],
    [20111120007, 107, '1007', `=SUM(A7 , B7 )`, `=SUM(A7 , C7 )`, '男/女', '张三7 ', null, undefined, ''],
    [20111120008, 108, '1008', `=SUM(A8 , B8 )`, `=SUM(A8 , C8 )`, '男/女', '张三8 ', null, undefined, ''],
    [20111120009, 109, '1009', `=SUM(A9 , B9 )`, `=SUM(A9 , C9 )`, '男/女', '张三9 ', null, undefined, ''],
    [20111120010, 110, '1010', `=SUM(A10: B10)`, `=SUM(A10: C10)`, '男/女', '张三10', null, undefined, ''],
    [20111120011, 111, '1011', `=SUM(A11: B11)`, `=SUM(A11: C11)`, '男/女', '张三11', null, undefined, ''],
    [20111120012, 112, '1012', `=SUM(A12: B12)`, `=SUM(A12: C12)`, '男/女', '张三12', null, undefined, ''],
    [20111120013, 113, '1013', `=SUM(A13: B13)`, `=SUM(A13: C13)`, '男/女', '张三13', null, undefined, ''],
    [20111120014, 114, '1014', `=SUM(A14: B14)`, `=SUM(A14: C14)`, '男/女', '张三14', null, undefined, ''],
    [20111120015, 115, '1015', `=SUM(A15: B15)`, `=SUM(A15: C15)`, '男/女', '张三15', null, undefined, ''],
    [20111120016, 116, '1016', `=SUM(A16: B16)`, `=SUM(A16: C16)`, '男/女', '张三16', null, undefined, ''],
    [20111120017, 117, '1017', `=SUM(A17: B17)`, `=SUM(A17: C17)`, '男/女', '张三17', null, undefined, ''],
    [20111120018, 118, '1018', `=SUM(A18: B18)`, `=SUM(A18: C18)`, '男/女', '张三18', null, undefined, ''],
    [20111120019, 119, '1019', `=SUM(A19: B19)`, `=SUM(A19: C19)`, '男/女', '张三19', null, undefined, ''],
    [20111120020, 120, '1020', `=SUM(A20: B20)`, `=SUM(A20: C20)`, '男/女', '张三20', null, undefined, ''],
    [20111120021, 121, '1021', `=SUM(A21, B21)`, `=SUM(A21, C21)`, '男/女', '张三21', null, undefined, ''],
    [20111120022, 122, '1022', `=SUM(A22, B22)`, `=SUM(A22, C22)`, '男/女', '张三22', null, undefined, ''],
    [20111120023, 123, '1023', `=SUM(A23, B23)`, `=SUM(A23, C23)`, '男/女', '张三23', null, undefined, ''],
    [20111120024, 124, '1024', `=SUM(A24, B24)`, `=SUM(A24, C24)`, '男/女', '张三24', null, undefined, ''],
    [20111120025, 125, '1025', `=SUM(A25, B25)`, `=SUM(A25, C25)`, '男/女', '张三25', null, undefined, ''],
    [20111120026, 126, '1026', `=SUM(A26, B26)`, `=SUM(A26, C26)`, '男/女', '张三26', null, undefined, ''],
    [20111120027, 127, '1027', `=SUM(A27, B27)`, `=SUM(A27, C27)`, '男/女', '张三27', null, undefined, ''],
    [20111120028, 128, '1028', `=SUM(A28, B28)`, `=SUM(A28, C28)`, '男/女', '张三28', null, undefined, ''],
    [20111120029, 129, '1029', `=SUM(A29, B29)`, `=SUM(A29, C29)`, '男/女', '张三29', null, undefined, ''],
    [20111120030, 130, '1030', `=SUM(A30, B30)`, `=SUM(A30, C30)`, '男/女', '张三30', null, undefined, ''],
]
```

:::

::::

### 2D array data containing objects

<vma-grid :data="gridAdvancedTableTypeData"
:minDimensions="[10, 10]"
resizeColumn
resizeRow
style="height: 400px;">
</vma-grid>


:::: code-group

::: code-group-item ts

```typescript
dataType: 'table'
data: [
    [20111120001, 101, {v: '1001', it: 1, bl: 1, bg: '#0071be', fc: '#f2f2f2',}, `=SUM(A1 , B1 )`, `=SUM(A1 , C1 )`, '男/女', '张三1 ', null, undefined, ''],
    [20111120002, 102, '1002', `=SUM(A2 , B2 )`, `=SUM(A2 , C2 )`, '男/女', '张三2 ', null, undefined, ''],
    [20111120003, 103, '1003', `=SUM(A3 , B3 )`, `=SUM(A3 , C3 )`, '男/女', '张三3 ', null, undefined, ''],
    [20111120004, 104, '1004', `=SUM(A4 , B4 )`, `=SUM(A4 , C4 )`, '男/女', '张三4 ', null, undefined, ''],
    [20111120005, 105, '1005', `=SUM(A5 , B5 )`, `=SUM(A5 , C5 )`, '男/女', '张三5 ', null, undefined, ''],
    [20111120006, 106, '1006', `=SUM(A6 , B6 )`, `=SUM(A6 , C6 )`, '男/女', '张三6 ', null, undefined, ''],
    [20111120007, 107, '1007', `=SUM(A7 , B7 )`, `=SUM(A7 , C7 )`, '男/女', '张三7 ', null, undefined, ''],
    [20111120008, 108, '1008', `=SUM(A8 , B8 )`, `=SUM(A8 , C8 )`, '男/女', '张三8 ', null, undefined, ''],
    [20111120009, 109, '1009', `=SUM(A9 , B9 )`, `=SUM(A9 , C9 )`, '男/女', '张三9 ', null, undefined, ''],
    [20111120010, 110, '1010', `=SUM(A10: B10)`, `=SUM(A10: C10)`, '男/女', '张三10', null, undefined, ''],
    [20111120011, 111, '1011', `=SUM(A11: B11)`, `=SUM(A11: C11)`, '男/女', '张三11', null, undefined, ''],
    [20111120012, 112, '1012', `=SUM(A12: B12)`, `=SUM(A12: C12)`, '男/女', '张三12', null, undefined, ''],
    [20111120013, 113, '1013', `=SUM(A13: B13)`, `=SUM(A13: C13)`, '男/女', '张三13', null, undefined, ''],
    [20111120014, 114, '1014', `=SUM(A14: B14)`, `=SUM(A14: C14)`, '男/女', '张三14', null, undefined, ''],
    [20111120015, 115, '1015', `=SUM(A15: B15)`, `=SUM(A15: C15)`, '男/女', '张三15', null, undefined, ''],
    [20111120016, 116, '1016', `=SUM(A16: B16)`, `=SUM(A16: C16)`, '男/女', '张三16', null, undefined, ''],
    [20111120017, 117, '1017', `=SUM(A17: B17)`, `=SUM(A17: C17)`, '男/女', '张三17', null, undefined, ''],
    [20111120018, 118, '1018', `=SUM(A18: B18)`, `=SUM(A18: C18)`, '男/女', '张三18', null, undefined, ''],
    [20111120019, 119, '1019', `=SUM(A19: B19)`, `=SUM(A19: C19)`, '男/女', '张三19', null, undefined, ''],
    [20111120020, 120, '1020', `=SUM(A20: B20)`, `=SUM(A20: C20)`, '男/女', '张三20', null, undefined, ''],
    [20111120021, 121, '1021', `=SUM(A21, B21)`, `=SUM(A21, C21)`, '男/女', '张三21', null, undefined, ''],
    [20111120022, 122, '1022', `=SUM(A22, B22)`, `=SUM(A22, C22)`, '男/女', '张三22', null, undefined, ''],
    [20111120023, 123, '1023', `=SUM(A23, B23)`, `=SUM(A23, C23)`, '男/女', '张三23', null, undefined, ''],
    [20111120024, 124, '1024', `=SUM(A24, B24)`, `=SUM(A24, C24)`, '男/女', '张三24', null, undefined, ''],
    [20111120025, 125, '1025', `=SUM(A25, B25)`, `=SUM(A25, C25)`, '男/女', '张三25', null, undefined, ''],
    [20111120026, 126, '1026', `=SUM(A26, B26)`, `=SUM(A26, C26)`, '男/女', '张三26', null, undefined, ''],
    [20111120027, 127, '1027', `=SUM(A27, B27)`, `=SUM(A27, C27)`, '男/女', '张三27', null, undefined, ''],
    [20111120028, 128, '1028', `=SUM(A28, B28)`, `=SUM(A28, C28)`, '男/女', '张三28', null, undefined, ''],
    [20111120029, 129, '1029', `=SUM(A29, B29)`, `=SUM(A29, C29)`, '男/女', '张三29', null, undefined, ''],
    [20111120030, 130, '1030', `=SUM(A30, B30)`, `=SUM(A30, C30)`, '男/女', '张三30', null, undefined, ''],
]
```

:::

::::


<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
    name: 'GridInitDoc',
    setup() {
      const gridData = reactive([{
        name: 'sheet 1',
        r: 10,
        c: 10,
        status: 0,
        index: 0,
        order: 0,
        hide: 0,
        config: {},
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
                v: '=3 / 6'
            },
            {
                r: 1,
                c: 4,
                name: 'D1',
                v: '= 1 - EXP(C1 ^ 3)'
            },
            {
                r: 1,
                c: 5,
                name: 'E1',
                v: '=D1 + 3'
            },
        ]
      }]);
      const getNextColumnIndex = (length) => {
            let nLength = length;
            let p = '';
            do {
              nLength--;
              const n = nLength % 26;
              p += String.fromCharCode(n + 65);
              nLength = Math.trunc((nLength - n) / 26);
            } while (nLength > 0);
            return p.split('').reverse().join('');
          };
      const gridTableTypeData = reactive([{
        name: 'sheet 1',
        r: 10,
        c: 10,
        status: 0,
        index: 0,
        order: 0,
        hide: 0,
        config: {},
        dataType: 'table',
        data: [
            [20111120001, 101, '1001', `=SUM(A1 , B1 )`, `=SUM(A1 , C1 )`, '男/女', '张三1 ', null, undefined, ''],
            [20111120002, 102, '1002', `=SUM(A2 , B2 )`, `=SUM(A2 , C2 )`, '男/女', '张三2 ', null, undefined, ''],
            [20111120003, 103, '1003', `=SUM(A3 , B3 )`, `=SUM(A3 , C3 )`, '男/女', '张三3 ', null, undefined, ''],
            [20111120004, 104, '1004', `=SUM(A4 , B4 )`, `=SUM(A4 , C4 )`, '男/女', '张三4 ', null, undefined, ''],
            [20111120005, 105, '1005', `=SUM(A5 , B5 )`, `=SUM(A5 , C5 )`, '男/女', '张三5 ', null, undefined, ''],
            [20111120006, 106, '1006', `=SUM(A6 , B6 )`, `=SUM(A6 , C6 )`, '男/女', '张三6 ', null, undefined, ''],
            [20111120007, 107, '1007', `=SUM(A7 , B7 )`, `=SUM(A7 , C7 )`, '男/女', '张三7 ', null, undefined, ''],
            [20111120008, 108, '1008', `=SUM(A8 , B8 )`, `=SUM(A8 , C8 )`, '男/女', '张三8 ', null, undefined, ''],
            [20111120009, 109, '1009', `=SUM(A9 , B9 )`, `=SUM(A9 , C9 )`, '男/女', '张三9 ', null, undefined, ''],
            [20111120010, 110, '1010', `=SUM(A10: B10)`, `=SUM(A10: C10)`, '男/女', '张三10', null, undefined, ''],
            [20111120011, 111, '1011', `=SUM(A11: B11)`, `=SUM(A11: C11)`, '男/女', '张三11', null, undefined, ''],
            [20111120012, 112, '1012', `=SUM(A12: B12)`, `=SUM(A12: C12)`, '男/女', '张三12', null, undefined, ''],
            [20111120013, 113, '1013', `=SUM(A13: B13)`, `=SUM(A13: C13)`, '男/女', '张三13', null, undefined, ''],
            [20111120014, 114, '1014', `=SUM(A14: B14)`, `=SUM(A14: C14)`, '男/女', '张三14', null, undefined, ''],
            [20111120015, 115, '1015', `=SUM(A15: B15)`, `=SUM(A15: C15)`, '男/女', '张三15', null, undefined, ''],
            [20111120016, 116, '1016', `=SUM(A16: B16)`, `=SUM(A16: C16)`, '男/女', '张三16', null, undefined, ''],
            [20111120017, 117, '1017', `=SUM(A17: B17)`, `=SUM(A17: C17)`, '男/女', '张三17', null, undefined, ''],
            [20111120018, 118, '1018', `=SUM(A18: B18)`, `=SUM(A18: C18)`, '男/女', '张三18', null, undefined, ''],
            [20111120019, 119, '1019', `=SUM(A19: B19)`, `=SUM(A19: C19)`, '男/女', '张三19', null, undefined, ''],
            [20111120020, 120, '1020', `=SUM(A20: B20)`, `=SUM(A20: C20)`, '男/女', '张三20', null, undefined, ''],
            [20111120021, 121, '1021', `=SUM(A21, B21)`, `=SUM(A21, C21)`, '男/女', '张三21', null, undefined, ''],
            [20111120022, 122, '1022', `=SUM(A22, B22)`, `=SUM(A22, C22)`, '男/女', '张三22', null, undefined, ''],
            [20111120023, 123, '1023', `=SUM(A23, B23)`, `=SUM(A23, C23)`, '男/女', '张三23', null, undefined, ''],
            [20111120024, 124, '1024', `=SUM(A24, B24)`, `=SUM(A24, C24)`, '男/女', '张三24', null, undefined, ''],
            [20111120025, 125, '1025', `=SUM(A25, B25)`, `=SUM(A25, C25)`, '男/女', '张三25', null, undefined, ''],
            [20111120026, 126, '1026', `=SUM(A26, B26)`, `=SUM(A26, C26)`, '男/女', '张三26', null, undefined, ''],
            [20111120027, 127, '1027', `=SUM(A27, B27)`, `=SUM(A27, C27)`, '男/女', '张三27', null, undefined, ''],
            [20111120028, 128, '1028', `=SUM(A28, B28)`, `=SUM(A28, C28)`, '男/女', '张三28', null, undefined, ''],
            [20111120029, 129, '1029', `=SUM(A29, B29)`, `=SUM(A29, C29)`, '男/女', '张三29', null, undefined, ''],
            [20111120030, 130, '1030', `=SUM(A30, B30)`, `=SUM(A30, C30)`, '男/女', '张三30', null, undefined, ''],
        ]
      }]);

    const gridAdvancedTableTypeData = reactive([{
        name: 'sheet 1',
        r: 10,
        c: 10,
        status: 0,
        index: 0,
        order: 0,
        hide: 0,
        config: {},
        dataType: 'table',
        data: [
            [20111120001, 101, {v: '1001', it: 1, bl: 1, bg: '#0071be', fc: '#f2f2f2',}, `=SUM(A1 , B1 )`, `=SUM(A1 , C1 )`, '男/女', '张三1 ', null, undefined, ''],
            [20111120002, 102, '1002', `=SUM(A2 , B2 )`, `=SUM(A2 , C2 )`, '男/女', '张三2 ', null, undefined, ''],
            [20111120003, 103, '1003', `=SUM(A3 , B3 )`, `=SUM(A3 , C3 )`, '男/女', '张三3 ', null, undefined, ''],
            [20111120004, 104, '1004', `=SUM(A4 , B4 )`, `=SUM(A4 , C4 )`, '男/女', '张三4 ', null, undefined, ''],
            [20111120005, 105, '1005', `=SUM(A5 , B5 )`, `=SUM(A5 , C5 )`, '男/女', '张三5 ', null, undefined, ''],
            [20111120006, 106, '1006', `=SUM(A6 , B6 )`, `=SUM(A6 , C6 )`, '男/女', '张三6 ', null, undefined, ''],
            [20111120007, 107, '1007', `=SUM(A7 , B7 )`, `=SUM(A7 , C7 )`, '男/女', '张三7 ', null, undefined, ''],
            [20111120008, 108, '1008', `=SUM(A8 , B8 )`, `=SUM(A8 , C8 )`, '男/女', '张三8 ', null, undefined, ''],
            [20111120009, 109, '1009', `=SUM(A9 , B9 )`, `=SUM(A9 , C9 )`, '男/女', '张三9 ', null, undefined, ''],
            [20111120010, 110, '1010', `=SUM(A10: B10)`, `=SUM(A10: C10)`, '男/女', '张三10', null, undefined, ''],
            [20111120011, 111, '1011', `=SUM(A11: B11)`, `=SUM(A11: C11)`, '男/女', '张三11', null, undefined, ''],
            [20111120012, 112, '1012', `=SUM(A12: B12)`, `=SUM(A12: C12)`, '男/女', '张三12', null, undefined, ''],
            [20111120013, 113, '1013', `=SUM(A13: B13)`, `=SUM(A13: C13)`, '男/女', '张三13', null, undefined, ''],
            [20111120014, 114, '1014', `=SUM(A14: B14)`, `=SUM(A14: C14)`, '男/女', '张三14', null, undefined, ''],
            [20111120015, 115, '1015', `=SUM(A15: B15)`, `=SUM(A15: C15)`, '男/女', '张三15', null, undefined, ''],
            [20111120016, 116, '1016', `=SUM(A16: B16)`, `=SUM(A16: C16)`, '男/女', '张三16', null, undefined, ''],
            [20111120017, 117, '1017', `=SUM(A17: B17)`, `=SUM(A17: C17)`, '男/女', '张三17', null, undefined, ''],
            [20111120018, 118, '1018', `=SUM(A18: B18)`, `=SUM(A18: C18)`, '男/女', '张三18', null, undefined, ''],
            [20111120019, 119, '1019', `=SUM(A19: B19)`, `=SUM(A19: C19)`, '男/女', '张三19', null, undefined, ''],
            [20111120020, 120, '1020', `=SUM(A20: B20)`, `=SUM(A20: C20)`, '男/女', '张三20', null, undefined, ''],
            [20111120021, 121, '1021', `=SUM(A21, B21)`, `=SUM(A21, C21)`, '男/女', '张三21', null, undefined, ''],
            [20111120022, 122, '1022', `=SUM(A22, B22)`, `=SUM(A22, C22)`, '男/女', '张三22', null, undefined, ''],
            [20111120023, 123, '1023', `=SUM(A23, B23)`, `=SUM(A23, C23)`, '男/女', '张三23', null, undefined, ''],
            [20111120024, 124, '1024', `=SUM(A24, B24)`, `=SUM(A24, C24)`, '男/女', '张三24', null, undefined, ''],
            [20111120025, 125, '1025', `=SUM(A25, B25)`, `=SUM(A25, C25)`, '男/女', '张三25', null, undefined, ''],
            [20111120026, 126, '1026', `=SUM(A26, B26)`, `=SUM(A26, C26)`, '男/女', '张三26', null, undefined, ''],
            [20111120027, 127, '1027', `=SUM(A27, B27)`, `=SUM(A27, C27)`, '男/女', '张三27', null, undefined, ''],
            [20111120028, 128, '1028', `=SUM(A28, B28)`, `=SUM(A28, C28)`, '男/女', '张三28', null, undefined, ''],
            [20111120029, 129, '1029', `=SUM(A29, B29)`, `=SUM(A29, C29)`, '男/女', '张三29', null, undefined, ''],
            [20111120030, 130, '1030', `=SUM(A30, B30)`, `=SUM(A30, C30)`, '男/女', '张三30', null, undefined, ''],
        ]
      }]);

      return {
        gridData,
        gridTableTypeData,
        gridAdvancedTableTypeData,
      }
    },
  })
</script>

