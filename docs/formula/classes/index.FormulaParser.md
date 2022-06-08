# Class: FormulaParser

[index](../modules/index.md).FormulaParser

A Excel Formula Parser & Evaluator

## Table of contents

### Constructors

- [constructor](index.FormulaParser.md#constructor)

### Properties

- [async](index.FormulaParser.md#async)
- [functions](index.FormulaParser.md#functions)
- [funsNeedContext](index.FormulaParser.md#funsneedcontext)
- [funsNeedContextAndNoDataRetrieve](index.FormulaParser.md#funsneedcontextandnodataretrieve)
- [funsNullAs0](index.FormulaParser.md#funsnullas0)
- [funsPreserveRef](index.FormulaParser.md#funspreserveref)
- [isTest](index.FormulaParser.md#istest)
- [logs](index.FormulaParser.md#logs)
- [onCell](index.FormulaParser.md#oncell)
- [onRange](index.FormulaParser.md#onrange)
- [onVariable](index.FormulaParser.md#onvariable)
- [parser](index.FormulaParser.md#parser)
- [position](index.FormulaParser.md#position)
- [utils](index.FormulaParser.md#utils)

### Accessors

- [allTokens](index.FormulaParser.md#alltokens)

### Methods

- [\_callFunction](index.FormulaParser.md#_callfunction)
- [callFunction](index.FormulaParser.md#callfunction)
- [callFunctionAsync](index.FormulaParser.md#callfunctionasync)
- [checkFormulaResult](index.FormulaParser.md#checkformularesult)
- [getCell](index.FormulaParser.md#getcell)
- [getRange](index.FormulaParser.md#getrange)
- [getVariable](index.FormulaParser.md#getvariable)
- [parse](index.FormulaParser.md#parse)
- [parseAsync](index.FormulaParser.md#parseasync)
- [retrieveRef](index.FormulaParser.md#retrieveref)
- [supportedFunctions](index.FormulaParser.md#supportedfunctions)

## Constructors

### constructor

• **new FormulaParser**(`config?`, `isTest?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `config?` | `any` | `undefined` | - |
| `isTest` | `boolean` | `false` | is in testing environment |

#### Defined in

src/formula/grammar/hooks.ts:53

## Properties

### async

• `Private` **async**: `any`

#### Defined in

src/formula/grammar/hooks.ts:47

___

### functions

• `Private` **functions**: `any`

#### Defined in

src/formula/grammar/hooks.ts:29

___

### funsNeedContext

• `Private` **funsNeedContext**: `string`[]

#### Defined in

src/formula/grammar/hooks.ts:39

___

### funsNeedContextAndNoDataRetrieve

• `Private` **funsNeedContextAndNoDataRetrieve**: `string`[]

#### Defined in

src/formula/grammar/hooks.ts:37

___

### funsNullAs0

• `Private` **funsNullAs0**: `string`[]

#### Defined in

src/formula/grammar/hooks.ts:35

___

### funsPreserveRef

• `Private` **funsPreserveRef**: `string`[]

#### Defined in

src/formula/grammar/hooks.ts:41

___

### isTest

• `Private` **isTest**: `boolean`

#### Defined in

src/formula/grammar/hooks.ts:23

___

### logs

• `Private` **logs**: `any`

#### Defined in

src/formula/grammar/hooks.ts:21

___

### onCell

• `Private` **onCell**: `any`

#### Defined in

src/formula/grammar/hooks.ts:33

___

### onRange

• `Private` **onRange**: `any`

#### Defined in

src/formula/grammar/hooks.ts:31

___

### onVariable

• `Private` **onVariable**: `any`

#### Defined in

src/formula/grammar/hooks.ts:27

___

### parser

• `Private` **parser**: `Parsing`

#### Defined in

src/formula/grammar/hooks.ts:43

___

### position

• `Private` **position**: `any`

#### Defined in

src/formula/grammar/hooks.ts:45

___

### utils

• `Private` **utils**: `Utils`

#### Defined in

src/formula/grammar/hooks.ts:25

## Accessors

### allTokens

• `Static` `get` **allTokens**(): `TokenType`[]

Get all lexing token names. Webpack needs this.

#### Returns

`TokenType`[]

- All token names that should not be minimized.

#### Defined in

src/formula/grammar/hooks.ts:135

## Methods

### \_callFunction

▸ **_callFunction**(`name`, `args`): `any`

Call an excel function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | Function name. |
| `args` | `any` | Arguments that pass to the function. |

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:199

___

### callFunction

▸ **callFunction**(`name`, `args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `args` | `any` |

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:268

___

### callFunctionAsync

▸ **callFunctionAsync**(`name`, `args`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `args` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/formula/grammar/hooks.ts:259

___

### checkFormulaResult

▸ **checkFormulaResult**(`result`, `allowReturnArray?`): `any`

Check and return the appropriate formula result.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `result` | `any` | `undefined` |
| `allowReturnArray` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:301

___

### getCell

▸ **getCell**(`ref`): `any`

Get value from the cell reference

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:144

___

### getRange

▸ **getRange**(`ref`): `any`

Get values from the range reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:156

___

### getVariable

▸ **getVariable**(`name`): [`FormulaError`](index.FormulaError.md) \| { `ref`: `any`  }

TODO:
Get references or values from a user defined variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

[`FormulaError`](index.FormulaError.md) \| { `ref`: `any`  }

#### Defined in

src/formula/grammar/hooks.ts:169

___

### parse

▸ **parse**(`inputText`, `position?`, `allowReturnArray?`): `any`

Parse an excel formula.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputText` | `any` | `undefined` |
| `position?` | `any` | `undefined` |
| `allowReturnArray` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:363

___

### parseAsync

▸ **parseAsync**(`inputText`, `position?`, `allowReturnArray?`): `Promise`<`any`\>

Parse an excel formula asynchronously.
Use when providing custom async functions.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputText` | `any` | `undefined` |
| `position?` | `any` | `undefined` |
| `allowReturnArray` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/formula/grammar/hooks.ts:396

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

src/formula/grammar/hooks.ts:183

___

### supportedFunctions

▸ **supportedFunctions**(): `any`

Return currently supported functions.

#### Returns

`any`

#### Defined in

src/formula/grammar/hooks.ts:280
