# Class: FormulaError

[index](../modules/index.md).FormulaError

Formula Error.

## Hierarchy

- `Error`

  ↳ **`FormulaError`**

## Table of contents

### Constructors

- [constructor](index.FormulaError.md#constructor)

### Properties

- [\_details](index.FormulaError.md#_details)
- [\_error](index.FormulaError.md#_error)
- [message](index.FormulaError.md#message)
- [stack](index.FormulaError.md#stack)
- [ARG\_MISSING](index.FormulaError.md#arg_missing)
- [DIV0](index.FormulaError.md#div0)
- [ERROR](index.FormulaError.md#error)
- [NA](index.FormulaError.md#na)
- [NAME](index.FormulaError.md#name)
- [NOT\_IMPLEMENTED](index.FormulaError.md#not_implemented)
- [NULL](index.FormulaError.md#null)
- [NUM](index.FormulaError.md#num)
- [REF](index.FormulaError.md#ref)
- [TOO\_MANY\_ARGS](index.FormulaError.md#too_many_args)
- [VALUE](index.FormulaError.md#value)
- [errorMap](index.FormulaError.md#errormap)
- [prepareStackTrace](index.FormulaError.md#preparestacktrace)
- [stackTraceLimit](index.FormulaError.md#stacktracelimit)

### Accessors

- [details](index.FormulaError.md#details)
- [error](index.FormulaError.md#error)
- [name](index.FormulaError.md#name)

### Methods

- [equals](index.FormulaError.md#equals)
- [toString](index.FormulaError.md#tostring)
- [captureStackTrace](index.FormulaError.md#capturestacktrace)

## Constructors

### constructor

• **new FormulaError**(`error`, `msg?`, `details?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | error code, i.e. #NUM! |
| `msg?` | `any` | - |
| `details?` | `any` | - |

#### Overrides

Error.constructor

#### Defined in

src/formula/formulas/error.ts:48

## Properties

### \_details

• `Private` `Optional` **\_details**: `Record`<`string`, `unknown`\>

#### Defined in

src/formula/formulas/error.ts:40

___

### \_error

• `Private` `Optional` **\_error**: `string`

#### Defined in

src/formula/formulas/error.ts:38

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### ARG\_MISSING

▪ `Static` **ARG\_MISSING**: `Function`

#### Defined in

src/formula/formulas/error.ts:34

___

### DIV0

▪ `Static` **DIV0**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:16

___

### ERROR

▪ `Static` **ERROR**: `Function`

#### Defined in

src/formula/formulas/error.ts:36

___

### NA

▪ `Static` **NA**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:18

___

### NAME

▪ `Static` **NAME**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:20

___

### NOT\_IMPLEMENTED

▪ `Static` **NOT\_IMPLEMENTED**: `Function`

#### Defined in

src/formula/formulas/error.ts:30

___

### NULL

▪ `Static` **NULL**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:22

___

### NUM

▪ `Static` **NUM**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:24

___

### REF

▪ `Static` **REF**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:26

___

### TOO\_MANY\_ARGS

▪ `Static` **TOO\_MANY\_ARGS**: `Function`

#### Defined in

src/formula/formulas/error.ts:32

___

### VALUE

▪ `Static` **VALUE**: [`FormulaError`](index.FormulaError.md)

#### Defined in

src/formula/formulas/error.ts:28

___

### errorMap

▪ `Static` **errorMap**: `Map`<`any`, `any`\>

#### Defined in

src/formula/formulas/error.ts:14

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Accessors

### details

• `get` **details**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Defined in

src/formula/formulas/error.ts:6

• `set` **details**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

src/formula/formulas/error.ts:10

___

### error

• `get` **error**(): `undefined` \| `string`

Get the error name.

#### Returns

`undefined` \| `string`

formula error

#### Defined in

src/formula/formulas/error.ts:65

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

#### Defined in

src/formula/formulas/error.ts:69

## Methods

### equals

▸ **equals**(`err`): `boolean`

Return true if two errors are same.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`boolean`

if two errors are same.

#### Defined in

src/formula/formulas/error.ts:78

___

### toString

▸ **toString**(): `string`

Return the formula error in string representation.

#### Returns

`string`

the formula error in string representation.

#### Defined in

src/formula/formulas/error.ts:86

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
