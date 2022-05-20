# Module: index

## Table of contents

### Classes

- [DepParser](../classes/index.DepParser.md)
- [FormulaError](../classes/index.FormulaError.md)
- [FormulaParser](../classes/index.FormulaParser.md)

### Properties

- [SSF](index.md#ssf)

### Variables

- [Address](index.md#address)
- [Criteria](index.md#criteria)
- [Factorials](index.md#factorials)
- [FormulaHelpers](index.md#formulahelpers)
- [MAX\_COLUMN](index.md#max_column)
- [MAX\_ROW](index.md#max_row)
- [ReversedTypes](index.md#reversedtypes)
- [Types](index.md#types)
- [WildCard](index.md#wildcard)

## Properties

### SSF

• **SSF**: `any`

## Variables

### Address

• `Const` **Address**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columnNameToNumber` | (`columnName`: `any`) => `number` |
| `columnNumberToName` | (`number`: `any`) => `string` |
| `extend` | (`range1`: `any`, `range2`: `any`) => `any` |
| `isCellRef` | (`param`: `any`) => `any` |
| `isRangeRef` | (`param`: `any`) => `any` |

#### Defined in

src/formula/formulas/helpers.ts:103

___

### Criteria

• `Const` **Criteria**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parse` | (`criteria`: `any`) => { `match`: `boolean` ; `op`: `string` = 'wc'; `value`: `RegExp`  } \| { `match`: `undefined` ; `op`: `any` ; `value`: `any`  } |

#### Defined in

src/formula/formulas/helpers.ts:488

___

### Factorials

• `Const` **Factorials**: `number`[]

#### Defined in

src/formula/formulas/helpers.ts:19

___

### FormulaHelpers

• `Const` **FormulaHelpers**: `FormulaHelpers`

#### Defined in

src/formula/formulas/helpers.ts:465

___

### MAX\_COLUMN

• `Const` **MAX\_COLUMN**: ``16384``

#### Defined in

src/formula/index.ts:17

___

### MAX\_ROW

• `Const` **MAX\_ROW**: ``1048576``

#### Defined in

src/formula/index.ts:16

___

### ReversedTypes

• `Const` **ReversedTypes**: `any` = `{}`

#### Defined in

src/formula/formulas/helpers.ts:98

___

### Types

• `Const` **Types**: `NumberDic`

#### Defined in

src/formula/formulas/helpers.ts:8

___

### WildCard

• `Const` **WildCard**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isWildCard` | (`obj`: `any`) => `boolean` |
| `toRegex` | (`lookupText`: `any`, `flags?`: `any`) => `RegExp` |

#### Defined in

src/formula/formulas/helpers.ts:467
