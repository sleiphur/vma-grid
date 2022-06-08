# Class: DepParser

[index](../modules/index.md).DepParser

## Table of contents

### Constructors

- [constructor](index.DepParser.md#constructor)

### Properties

- [data](index.DepParser.md#data)
- [functions](index.DepParser.md#functions)
- [onVariable](index.DepParser.md#onvariable)
- [parser](index.DepParser.md#parser)
- [position](index.DepParser.md#position)
- [utils](index.DepParser.md#utils)

### Methods

- [callFunction](index.DepParser.md#callfunction)
- [checkFormulaResult](index.DepParser.md#checkformularesult)
- [getCell](index.DepParser.md#getcell)
- [getRange](index.DepParser.md#getrange)
- [getVariable](index.DepParser.md#getvariable)
- [parse](index.DepParser.md#parse)
- [retrieveRef](index.DepParser.md#retrieveref)

## Constructors

### constructor

• **new DepParser**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Defined in

src/formula/grammar/dependency/hooks.ts:25

## Properties

### data

• `Private` **data**: `any`

#### Defined in

src/formula/grammar/dependency/hooks.ts:9

___

### functions

• `Private` **functions**: `Object`

#### Defined in

src/formula/grammar/dependency/hooks.ts:15

___

### onVariable

• `Private` **onVariable**: `any`

#### Defined in

src/formula/grammar/dependency/hooks.ts:13

___

### parser

• `Private` **parser**: `Parsing`

#### Defined in

src/formula/grammar/dependency/hooks.ts:17

___

### position

• `Private` **position**: `any`

#### Defined in

src/formula/grammar/dependency/hooks.ts:19

___

### utils

• `Private` **utils**: `Utils`

#### Defined in

src/formula/grammar/dependency/hooks.ts:11

## Methods

### callFunction

▸ **callFunction**(`name`, `args`): `Object`

Call an excel function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | Function name. |
| `args` | `any` | Arguments that pass to the function. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ref` | {} |
| `value` | `number` |

#### Defined in

src/formula/grammar/dependency/hooks.ts:128

___

### checkFormulaResult

▸ **checkFormulaResult**(`result`): `void`

Check and return the appropriate formula result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

#### Returns

`void`

#### Defined in

src/formula/grammar/dependency/hooks.ts:141

___

### getCell

▸ **getCell**(`ref`): `number`

Get value from the cell reference

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`number`

#### Defined in

src/formula/grammar/dependency/hooks.ts:45

___

### getRange

▸ **getRange**(`ref`): `number`[][]

Get values from the range reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`number`[][]

#### Defined in

src/formula/grammar/dependency/hooks.ts:71

___

### getVariable

▸ **getVariable**(`name`): [`FormulaError`](index.FormulaError.md) \| ``0``

TODO:
Get references or values from a user defined variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

[`FormulaError`](index.FormulaError.md) \| ``0``

#### Defined in

src/formula/grammar/dependency/hooks.ts:96

___

### parse

▸ **parse**(`inputText`, `position`, `ignoreError?`): `any`

Parse an excel formula and return the dependencies

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputText` | `any` | `undefined` |
| `position` | `any` | `undefined` |
| `ignoreError` | `boolean` | `false` |

#### Returns

`any`

>}

#### Defined in

src/formula/grammar/dependency/hooks.ts:153

___

### retrieveRef

▸ **retrieveRef**(`valueOrRef`): `any`

Retrieve values from the given reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueOrRef` | `any` |

#### Returns

`any`

#### Defined in

src/formula/grammar/dependency/hooks.ts:112
