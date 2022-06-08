# Module: formulas

## Table of contents

### Variables

- [DateFunctions](formulas.md#datefunctions)
- [DistributionFunctions](formulas.md#distributionfunctions)
- [EngineeringFunctions](formulas.md#engineeringfunctions)
- [FinancialFunctions](formulas.md#financialfunctions)
- [InfoFunctions](formulas.md#infofunctions)
- [LogicalFunctions](formulas.md#logicalfunctions)
- [MathFunctions](formulas.md#mathfunctions)
- [ReferenceFunctions](formulas.md#referencefunctions)
- [StatisticalFunctions](formulas.md#statisticalfunctions)
- [TextFunctions](formulas.md#textfunctions)
- [TrigFunctions](formulas.md#trigfunctions)
- [WebFunctions](formulas.md#webfunctions)

## Variables

### DateFunctions

• `Const` **DateFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DATE` | (`year`: `any`, `month`: `any`, `day`: `any`) => `number` |
| `DATEDIF` | (`startDate`: `any`, `endDate`: `any`, `unit`: `any`) => `undefined` \| `number` |
| `DATEVALUE` | (`dateText`: `any`) => `number` |
| `DAY` | (`serialOrString`: `any`) => `number` |
| `DAYS` | (`endDate`: `any`, `startDate`: `any`) => `number` |
| `DAYS360` | (`startDate`: `any`, `endDate`: `any`, `method`: `any`) => `number` |
| `EDATE` | (`startDate`: `any`, `months`: `any`) => `number` |
| `EOMONTH` | (`startDate`: `any`, `months`: `any`) => `number` |
| `HOUR` | (`serialOrString`: `any`) => `number` |
| `ISOWEEKNUM` | (`serialOrString`: `any`) => `number` |
| `MINUTE` | (`serialOrString`: `any`) => `number` |
| `MONTH` | (`serialOrString`: `any`) => `number` |
| `NETWORKDAYS` | (`startDate`: `any`, `endDate`: `any`, `holidays`: `any`) => `number` |
| `NETWORKDAYS.INTL` | (`startDate`: `any`, `endDate`: `any`, `weekend`: `any`, `holidays`: `any`) => `number` |
| `NOW` | () => `number` |
| `SECOND` | (`serialOrString`: `any`) => `number` |
| `TIME` | (`hour`: `any`, `minute`: `any`, `second`: `any`) => `number` |
| `TIMEVALUE` | (`timeText`: `any`) => `number` |
| `TODAY` | () => `number` |
| `WEEKDAY` | (`serialOrString`: `any`, `returnType`: `any`) => `number` |
| `WEEKNUM` | (`serialOrString`: `any`, `returnType`: `any`) => `number` |
| `WORKDAY` | (`startDate`: `any`, `days`: `any`, `holidays`: `any`) => `number` |
| `WORKDAY.INTL` | (`startDate`: `any`, `days`: `any`, `weekend`: `any`, `holidays`: `any`) => `number` |
| `YEAR` | (`serialOrString`: `any`) => `number` |
| `YEARFRAC` | (`startDate`: `any`, `endDate`: `any`, `basis`: `any`) => `number` |

#### Defined in

src/formula/formulas/functions/date.ts:202

___

### DistributionFunctions

• `Const` **DistributionFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BETA.DIST` | (`x`: `any`, `alpha`: `any`, `beta`: `any`, `cumulative`: `any`, `a`: `any`, `b`: `any`) => `any` |
| `BETA.INV` | (`probability`: `any`, `alpha`: `any`, `beta`: `any`, `a`: `any`, `b`: `any`) => `any` |
| `BINOM.DIST` | (`numberS`: `any`, `trials`: `any`, `probabilityS`: `any`, `cumulative`: `any`) => `any` |
| `BINOM.DIST.RANGE` | (`trials`: `any`, `probabilityS`: `any`, `numberS`: `any`, `numberS2`: `any`) => `number` |
| `BINOM.INV` | (`trials`: `any`, `probabilityS`: `any`, `alpha`: `any`) => `number` |
| `CHISQ.DIST` | (`x`: `any`, `degFreedom`: `any`, `cumulative`: `any`) => `any` |
| `CHISQ.DIST.RT` | (`x`: `any`, `degFreedom`: `any`) => `number` |
| `CHISQ.INV` | (`probability`: `any`, `degFreedom`: `any`) => `any` |
| `CHISQ.INV.RT` | (`probability`: `any`, `degFreedom`: `any`) => `any` |
| `CHISQ.TEST` | (`actualRange`: `any`, `expectedRange`: `any`) => `number` |
| `CONFIDENCE.NORM` | (`alpha`: `any`, `std`: `any`, `size`: `any`) => `number` |
| `CONFIDENCE.T` | (`alpha`: `any`, `std`: `any`, `size`: `any`) => `number` |
| `CORREL` | (`array1`: `any`, `array2`: `any`) => `any` |
| `COVARIANCE.P` | (`array1`: `any`, `array2`: `any`) => `number` |
| `COVARIANCE.S` | (`array1`: `any`, `array2`: `any`) => `any` |
| `DEVSQ` | (...`numbers`: `any`) => `number` |
| `EXPON.DIST` | (`x`: `any`, `lambda`: `any`, `cumulative`: `any`) => `any` |
| `F.DIST` | (`x`: `any`, `d1`: `any`, `d2`: `any`, `cumulative`: `any`) => `any` |
| `F.DIST.RT` | (`x`: `any`, `d1`: `any`, `d2`: `any`) => `number` |
| `F.INV` | (`probability`: `any`, `d1`: `any`, `d2`: `any`) => `any` |
| `F.INV.RT` | (`probability`: `any`, `d1`: `any`, `d2`: `any`) => `any` |
| `F.TEST` | (`array1`: `any`, `array2`: `any`) => `number` |
| `FISHER` | (`x`: `any`) => `number` |
| `FISHERINV` | (`x`: `any`) => `number` |
| `FORECAST` | (`x`: `any`, `knownYs`: `any`, `knownXs`: `any`) => `number` |
| `FORECAST.ETS` | () => `void` |
| `FORECAST.ETS.CONFINT` | () => `void` |
| `FORECAST.ETS.SEASONALITY` | () => `void` |
| `FORECAST.ETS.STAT` | () => `void` |
| `FORECAST.LINEAR` | (`x`: `any`, `knownYs`: `any`, `knownXs`: `any`) => `number` |
| `FREQUENCY` | (`dataArray`: `any`, `binsArray`: `any`) => `any` |
| `GAMMA` | (`x`: `any`) => `any` |
| `GAMMA.DIST` | (`x`: `any`, `alpha`: `any`, `beta`: `any`, `cumulative`: `any`) => `any` |
| `GAMMA.INV` | (`probability`: `any`, `alpha`: `any`, `beta`: `any`) => `any` |
| `GAMMALN` | (`x`: `any`) => `any` |
| `GAMMALN.PRECISE` | (`x`: `any`) => `any` |
| `GAUSS` | (`z`: `any`) => `number` |
| `GEOMEAN` | (...`numbers`: `any`) => `any` |
| `GROWTH` | (`knownY`: `any`, `knownX`: `any`, `newX`: `any`, `useConst`: `any`) => `any` |
| `HARMEAN` | (...`numbers`: `any`) => `number` |
| `HYPGEOM.DIST` | (`sample_s`: `any`, `number_sample`: `any`, `population_s`: `any`, `number_pop`: `any`, `cumulative`: `any`) => `number` |
| `INTERCEPT` | (`knownYs`: `any`, `knownXs`: `any`) => `number` |
| `KURT` | (...`numbers`: `any`) => `number` |
| `LINEST` | () => `void` |
| `LOGEST` | () => `void` |
| `LOGNORM.DIST` | (`x`: `any`, `mean`: `any`, `standard_dev`: `any`, `cumulative`: `any`) => `any` |
| `LOGNORM.INV` | (`probability`: `any`, `mean`: `any`, `standard_dev`: `any`) => `any` |
| `MODE.MULT` | () => `void` |
| `MODE.SNGL` | () => `void` |
| `NEGBINOM.DIST` | (`number_f`: `any`, `number_s`: `any`, `probability_s`: `any`, `cumulative`: `any`) => `any` |
| `NORM.DIST` | (`x`: `any`, `mean`: `any`, `standard_dev`: `any`, `cumulative`: `any`) => `any` |
| `NORM.INV` | (`probability`: `any`, `mean`: `any`, `standard_dev`: `any`) => `any` |
| `NORM.S.DIST` | (`z`: `any`, `cumulative`: `any`) => `any` |
| `NORM.S.INV` | (`probability`: `any`) => `any` |
| `PEARSON` | () => `void` |
| `PERCENTILE.EXC` | () => `void` |
| `PERCENTILE.INC` | () => `void` |
| `PERCENTRANK.EXC` | () => `void` |
| `PERCENTRANK.INC` | () => `void` |
| `PERMUTATIONA` | () => `void` |
| `PHI` | (`x`: `any`) => `number` |
| `POISSON.DIST` | (`x`: `any`, `mean`: `any`, `cumulative`: `any`) => `any` |
| `PROB` | () => `void` |
| `QUARTILE.EXC` | () => `void` |
| `QUARTILE.INC` | () => `void` |
| `RANK.AVG` | () => `void` |
| `RANK.EQ` | () => `void` |
| `RSQ` | () => `void` |
| `SKEW` | () => `void` |
| `SKEW.P` | () => `void` |
| `SLOPE` | () => `void` |
| `STANDARDIZE` | (`x`: `any`, `mean`: `any`, `standard_dev`: `any`) => `number` |
| `STDEV.P` | () => `void` |
| `STDEV.S` | () => `void` |
| `STDEVA` | () => `void` |
| `STDEVPA` | () => `void` |
| `STEYX` | () => `void` |
| `T.DIST` | (`x`: `any`, `deg_freedom`: `any`, `cumulative`: `any`) => `any` |
| `T.DIST.2T` | (`x`: `any`, `deg_freedom`: `any`) => `number` |
| `T.DIST.RT` | (`x`: `any`, `deg_freedom`: `any`) => `number` |
| `T.INV` | (`probability`: `any`, `deg_freedom`: `any`) => `any` |
| `T.INV.2T` | (`probability`: `any`, `deg_freedom`: `any`) => `number` |
| `T.TEST` | () => `void` |
| `TREND` | () => `void` |
| `TRIMMEAN` | () => `void` |
| `VAR.P` | () => `void` |
| `VAR.S` | () => `void` |
| `VARA` | () => `void` |
| `VARPA` | () => `void` |
| `WEIBULL.DIST` | (`x`: `any`, `alpha`: `any`, `beta`: `any`, `cumulative`: `any`) => `number` |
| `Z.TEST` | () => `void` |

#### Defined in

src/formula/formulas/functions/distribution.ts:11

___

### EngineeringFunctions

• `Const` **EngineeringFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BESSELI` | (`x`: `any`, `n`: `any`) => `any` |
| `BESSELJ` | (`x`: `any`, `n`: `any`) => `any` |
| `BESSELK` | (`x`: `any`, `n`: `any`) => `any` |
| `BESSELY` | (`x`: `any`, `n`: `any`) => `any` |
| `BIN2DEC` | (`number`: `any`) => `number` |
| `BIN2HEX` | (`number`: `any`, `places`: `any`) => `string` |
| `BIN2OCT` | (`number`: `any`, `places`: `any`) => `string` |
| `BITAND` | (`number1`: `any`, `number2`: `any`) => `number` |
| `BITLSHIFT` | (`number`: `any`, `shiftAmount`: `any`) => `number` |
| `BITOR` | (`number1`: `any`, `number2`: `any`) => `number` |
| `BITRSHIFT` | (`number`: `any`, `shiftAmount`: `any`) => `number` |
| `BITXOR` | (`number1`: `any`, `number2`: `any`) => `number` |
| `COMPLEX` | (`realNum`: `any`, `iNum`: `any`, `suffix?`: `any`) => `any` |
| `DEC2BIN` | (`number`: `any`, `places`: `any`) => `string` |
| `DEC2HEX` | (`number`: `any`, `places?`: `any`) => `any` |
| `DEC2OCT` | (`number`: `any`, `places`: `any`) => `any` |
| `DELTA` | (`number1`: `any`, `number2`: `any`) => ``0`` \| ``1`` |
| `ERF` | (`lowerLimit`: `any`, `upperLimit`: `any`) => `any` |
| `ERFC` | (`x`: `any`) => `any` |
| `GESTEP` | (`number`: `any`, `step`: `any`) => ``0`` \| ``1`` |
| `HEX2BIN` | (`number`: `any`, `places`: `any`) => `string` |
| `HEX2DEC` | (`number`: `any`) => `number` |
| `HEX2OCT` | (`number`: `any`, `places`: `any`) => `any` |
| `IMABS` | (`iNumber`: `any`) => `number` |
| `IMAGINARY` | (`iNumber`: `any`) => `number` |
| `IMARGUMENT` | (`iNumber`: `any`) => `number` |
| `IMCONJUGATE` | (`iNumber`: `any`) => `any` |
| `IMCOS` | (`iNumber`: `any`) => `any` |
| `IMCOSH` | (`iNumber`: `any`) => `any` |
| `IMCOT` | (`iNumber`: `any`) => `any` |
| `IMCSC` | (`iNumber`: `any`) => `any` |
| `IMCSCH` | (`iNumber`: `any`) => `any` |
| `IMDIV` | (`iNumber1`: `any`, `iNumber2`: `any`) => `any` |
| `IMEXP` | (`iNumber`: `any`) => `any` |
| `IMLN` | (`iNumber`: `any`) => `any` |
| `IMLOG10` | (`iNumber`: `any`) => `any` |
| `IMLOG2` | (`iNumber`: `any`) => `any` |
| `IMPOWER` | (`iNumber`: `any`, `number`: `any`) => `any` |
| `IMPRODUCT` | (...`params`: `any`) => `any` |
| `IMREAL` | (`iNumber`: `any`) => `number` |
| `IMSEC` | (`iNumber`: `any`) => `any` |
| `IMSECH` | (`iNumber`: `any`) => `any` |
| `IMSIN` | (`iNumber`: `any`) => `any` |
| `IMSINH` | (`iNumber`: `any`) => `any` |
| `IMSQRT` | (`iNumber`: `any`) => `any` |
| `IMSUB` | (`iNumber1`: `any`, `iNumber2`: `any`) => `any` |
| `IMSUM` | (...`params`: `any`) => `any` |
| `IMTAN` | (`iNumber`: `any`) => `any` |
| `OCT2BIN` | (`number`: `any`, `places`: `any`) => `string` \| [`FormulaError`](../classes/index.FormulaError.md) |
| `OCT2DEC` | (`number`: `any`) => `number` |
| `OCT2HEX` | (`number`: `any`, `places`: `any`) => `any` |

#### Defined in

src/formula/formulas/functions/engineering.ts:51

___

### FinancialFunctions

• `Const` **FinancialFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ACCRINT` | (`issue`: `any`, `firstInterest`: `any`, `settlement`: `any`, `rate`: `any`, `par`: `any`, `frequency`: `any`, `basis`: `any`, `calcMethod`: `any`) => [`FormulaError`](../classes/index.FormulaError.md) |

#### Defined in

src/formula/formulas/functions/financial.ts:5

___

### InfoFunctions

• `Const` **InfoFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CELL` | (`infoType`: `any`, `reference`: `any`) => `void` |
| `ERROR.TYPE` | (`value`: `any`) => `number` |
| `INFO` | () => `void` |
| `ISBLANK` | (`value`: `any`) => `boolean` |
| `ISERR` | (`value`: `any`) => `boolean` |
| `ISERROR` | (`value`: `any`) => `boolean` |
| `ISEVEN` | (`number`: `any`) => `boolean` |
| `ISLOGICAL` | (`value`: `any`) => `boolean` |
| `ISNA` | (`value`: `any`) => `boolean` |
| `ISNONTEXT` | (`value`: `any`) => `boolean` |
| `ISNUMBER` | (`value`: `any`) => `boolean` |
| `ISREF` | (`value`: `any`) => `boolean` |
| `ISTEXT` | (`value`: `any`) => `boolean` |
| `N` | (`value`: `any`) => `any` |
| `NA` | () => `never` |
| `TYPE` | (`value`: `any`) => ``1`` \| ``2`` \| ``4`` \| ``16`` \| ``64`` |

#### Defined in

src/formula/formulas/functions/information.ts:20

___

### LogicalFunctions

• `Const` **LogicalFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND` | (...`params`: `any`) => `boolean` \| [`FormulaError`](../classes/index.FormulaError.md) |
| `FALSE` | () => `boolean` |
| `IF` | (`context`: `any`, `logicalTest`: `any`, `valueIfTrue`: `any`, `valueIfFalse`: `any`) => `any` |
| `IFERROR` | (`value`: `any`, `valueIfError`: `any`) => `any` |
| `IFS` | (...`params`: `any`) => `any` |
| `NOT` | (`logical`: `any`) => `boolean` |
| `OR` | (...`params`: `any`) => `boolean` \| [`FormulaError`](../classes/index.FormulaError.md) |
| `SWITCH` | (...`params`: `any`) => `void` |
| `TRUE` | () => `boolean` |
| `XOR` | (...`params`: `any`) => `boolean` \| [`FormulaError`](../classes/index.FormulaError.md) |
| `IFNA` | (`value`: `any`, `valueIfNa`: `any`) => `any` |

#### Defined in

src/formula/formulas/functions/logical.ts:32

___

### MathFunctions

• `Const` **MathFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABS` | (`number`: `any`) => `number` |
| `AGGREGATE` | (`functionNum`: `any`, `options`: `any`, `ref1`: `any`, ...`refs`: `any`) => `void` |
| `ARABIC` | (`text`: `any`) => `any` |
| `BASE` | (`number`: `any`, `radix`: `any`, `minLength`: `any`) => `string` |
| `CEILING` | (`number`: `any`, `significance`: `any`) => `any` |
| `CEILING.MATH` | (`number`: `any`, `significance`: `any`, `mode`: `any`) => `any` |
| `CEILING.PRECISE` | (`number`: `any`, `significance`: `any`) => `any` |
| `COMBIN` | (`number`: `any`, `numberChosen`: `any`) => `number` |
| `COMBINA` | (`number`: `any`, `numberChosen`: `any`) => `number` |
| `DECIMAL` | (`text`: `any`, `radix`: `any`) => `number` |
| `DEGREES` | (`radians`: `any`) => `number` |
| `EVEN` | (`number`: `any`) => `any` |
| `EXP` | (`number`: `any`) => `number` |
| `FACT` | (`number`: `any`) => `any` |
| `FACTDOUBLE` | (`number`: `any`) => `any` |
| `FLOOR` | (`number`: `any`, `significance`: `any`) => `any` |
| `FLOOR.MATH` | (`number`: `any`, `significance`: `any`, `mode`: `any`) => `any` |
| `FLOOR.PRECISE` | (`number`: `any`, `significance`: `any`) => `any` |
| `GCD` | (...`params`: `any`) => `number` |
| `INT` | (`number`: `any`) => `number` |
| `ISO.CEILING` | (`number`: `any`, `significance`: `any`) => `any` |
| `LCM` | (...`params`: `any`) => `number` |
| `LN` | (`number`: `any`) => `number` |
| `LOG` | (`number`: `any`, `base`: `any`) => `number` |
| `LOG10` | (`number`: `any`) => `number` |
| `MDETERM` | (`array`: `any`) => `any` |
| `MINVERSE` | (`array`: `any`) => `void` |
| `MMULT` | (`array1`: `any`, `array2`: `any`) => `any`[] |
| `MOD` | (`number`: `any`, `divisor`: `any`) => `number` |
| `MROUND` | (`number`: `any`, `multiple`: `any`) => `any` |
| `MULTINOMIAL` | (...`numbers`: `any`) => `number` |
| `MUNIT` | (`dimension`: `any`) => `number`[][] |
| `ODD` | (`number`: `any`) => `number` |
| `PI` | () => `number` |
| `POWER` | (`number`: `any`, `power`: `any`) => `number` |
| `PRODUCT` | (...`numbers`: `any`) => `number` |
| `QUOTIENT` | (`numerator`: `any`, `denominator`: `any`) => `number` |
| `RADIANS` | (`degrees`: `any`) => `number` |
| `RAND` | () => `number` |
| `RANDBETWEEN` | (`bottom`: `any`, `top`: `any`) => `number` |
| `ROMAN` | (`number`: `any`, `form`: `any`) => `string` |
| `ROUND` | (`number`: `any`, `digits`: `any`) => `number` |
| `ROUNDDOWN` | (`number`: `any`, `digits`: `any`) => `number` |
| `ROUNDUP` | (`number`: `any`, `digits`: `any`) => `number` |
| `SERIESSUM` | (`x`: `any`, `n`: `any`, `m`: `any`, `coefficients`: `any`) => `any` |
| `SIGN` | (`number`: `any`) => ``0`` \| ``1`` \| ``-1`` |
| `SQRT` | (`number`: `any`) => `number` |
| `SQRTPI` | (`number`: `any`) => `number` |
| `SUBTOTAL` | () => `void` |
| `SUM` | (...`params`: `any`) => `number` |
| `SUMIF` | (`context`: `any`, `range`: `any`, `criteria`: `any`, `sumRange`: `any`) => `number` |
| `SUMIFS` | () => `void` |
| `SUMPRODUCT` | (`array1`: `any`, ...`arrays`: `any`) => `number` |
| `SUMSQ` | (...`params`: `any`) => `number` |
| `SUMX2MY2` | (`arrayX`: `any`, `arrayY`: `any`) => `number` |
| `SUMX2PY2` | (`arrayX`: `any`, `arrayY`: `any`) => `number` |
| `SUMXMY2` | (`arrayX`: `any`, `arrayY`: `any`) => `number` |
| `TRUNC` | (`number`: `any`) => `number` |

#### Defined in

src/formula/formulas/functions/math.ts:32

___

### ReferenceFunctions

• `Const` **ReferenceFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADDRESS` | (`rowNumber`: `any`, `columnNumber`: `any`, `absNum`: `any`, `a1`: `any`, `sheetText`: `any`) => `string` |
| `AREAS` | (`refs`: `any`) => `number` |
| `CHOOSE` | (`indexNum`: `any`, ...`values`: `any`) => `void` |
| `COLUMN` | (`context`: `any`, `obj`: `any`) => `any` |
| `COLUMNS` | (`context`: `any`, `obj`: `any`) => `number` |
| `HLOOKUP` | (`lookupValue`: `any`, `tableArray`: `any`, `rowIndexNum`: `any`, `rangeLookup`: `any`) => `any` |
| `INDEX` | (`context`: `any`, `ranges`: `any`, `rowNum`: `any`, `colNum`: `any`, `areaNum`: `any`) => `any` |
| `MATCH` | () => `void` |
| `ROW` | (`context`: `any`, `obj`: `any`) => `any` |
| `ROWS` | (`context`: `any`, `obj`: `any`) => `number` |
| `TRANSPOSE` | (`array`: `any`) => `any` |
| `VLOOKUP` | (`lookupValue`: `any`, `tableArray`: `any`, `colIndexNum`: `any`, `rangeLookup`: `any`) => `any` |

#### Defined in

src/formula/formulas/functions/reference.ts:14

___

### StatisticalFunctions

• `Const` **StatisticalFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AVEDEV` | (...`numbers`: `any`) => `number` |
| `AVERAGE` | (...`numbers`: `any`) => `number` |
| `AVERAGEA` | (...`numbers`: `any`) => `number` |
| `AVERAGEIF` | (`context`: `any`, `range`: `any`, `criteria`: `any`, `averageRange`: `any`) => `number` |
| `AVERAGEIFS` | () => `void` |
| `COUNT` | (...`ranges`: `any`) => `number` |
| `COUNTIF` | (`range`: `any`, `criteria`: `any`) => `number` |
| `LARGE` | () => `void` |
| `MAX` | () => `void` |
| `MAXA` | () => `void` |
| `MAXIFS` | () => `void` |
| `MEDIAN` | () => `void` |
| `MIN` | () => `void` |
| `MINA` | () => `void` |
| `MINIFS` | () => `void` |
| `PERMUT` | () => `void` |
| `PERMUTATIONA` | () => `void` |
| `SMALL` | () => `void` |

#### Defined in

src/formula/formulas/functions/statistical.ts:8

___

### TextFunctions

• `Const` **TextFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ASC` | (`text`: `any`) => `any` |
| `BAHTTEXT` | (`number`: `any`) => `any` |
| `CHAR` | (`number`: `any`) => `string` |
| `CLEAN` | (`text`: `any`) => `any` |
| `CODE` | (`text`: `any`) => `any` |
| `CONCAT` | (...`params`: `any`) => `string` |
| `CONCATENATE` | (...`params`: `any`) => `string` |
| `DBCS` | (`text`: `any`) => `any` |
| `DOLLAR` | (`number`: `any`, `decimals`: `any`) => `any` |
| `EXACT` | (`text1`: `any`, `text2`: `any`) => `boolean` |
| `FIND` | (`findText`: `any`, `withinText`: `any`, `startNum`: `any`) => `any` |
| `FINDB` | (`findText`: `any`, `withinText`: `any`, `startNum`: `any`) => `any` |
| `FIXED` | (`number`: `any`, `decimals`: `any`, `noCommas`: `any`) => `any` |
| `LEFT` | (`text`: `any`, `numChars`: `any`) => `any` |
| `LEFTB` | (`text`: `any`, `numChars`: `any`) => `any` |
| `LEN` | (`text`: `any`) => `any` |
| `LENB` | (`text`: `any`) => `any` |
| `LOWER` | (`text`: `any`) => `any` |
| `MID` | (`text`: `any`, `startNum`: `any`, `numChars`: `any`) => `any` |
| `MIDB` | (`text`: `any`, `startNum`: `any`, `numChars`: `any`) => `any` |
| `NUMBERVALUE` | (`text`: `any`, `decimalSeparator`: `any`, `groupSeparator`: `any`) => `number` |
| `PHONETIC` | () => `void` |
| `PROPER` | (`text`: `any`) => `any` |
| `REPLACE` | (`old_text`: `any`, `start_num`: `any`, `num_chars`: `any`, `new_text`: `any`) => `any` |
| `REPLACEB` | (`old_text`: `any`, `start_num`: `any`, `num_chars`: `any`, `new_text`: `any`) => `any` |
| `REPT` | (`text`: `any`, `number_times`: `any`) => `string` |
| `RIGHT` | (`text`: `any`, `numChars`: `any`) => `any` |
| `RIGHTB` | (`text`: `any`, `numChars`: `any`) => `any` |
| `SEARCH` | (`findText`: `any`, `withinText`: `any`, `startNum`: `any`) => `any` |
| `SEARCHB` | (`findText`: `any`, `withinText`: `any`, `startNum`: `any`) => `any` |
| `SUBSTITUTE` | (...`params`: `any`) => `never` |
| `T` | (`value`: `any`) => `string` |
| `TEXT` | (`value`: `any`, `formatText`: `any`) => `any` |
| `TEXTJOIN` | (...`params`: `any`) => `void` |
| `TRIM` | (`text`: `any`) => `any` |
| `UNICHAR` | (`number`: `any`) => `string` |
| `UNICODE` | (`text`: `any`) => `any` |

#### Defined in

src/formula/formulas/functions/text.ts:46

___

### TrigFunctions

• `Const` **TrigFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ACOS` | (`number`: `any`) => `number` |
| `ACOSH` | (`number`: `any`) => `number` |
| `ACOT` | (`number`: `any`) => `number` |
| `ACOTH` | (`number`: `any`) => `number` |
| `ASIN` | (`number`: `any`) => `number` |
| `ASINH` | (`number`: `any`) => `number` |
| `ATAN` | (`number`: `any`) => `number` |
| `ATAN2` | (`x`: `any`, `y`: `any`) => `number` |
| `ATANH` | (`number`: `any`) => `number` |
| `COS` | (`number`: `any`) => `number` |
| `COSH` | (`number`: `any`) => `number` |
| `COT` | (`number`: `any`) => `number` |
| `COTH` | (`number`: `any`) => `number` |
| `CSC` | (`number`: `any`) => `number` |
| `CSCH` | (`number`: `any`) => `number` |
| `SEC` | (`number`: `any`) => `number` |
| `SECH` | (`number`: `any`) => `number` |
| `SIN` | (`number`: `any`) => `number` |
| `SINH` | (`number`: `any`) => `number` |
| `TAN` | (`number`: `any`) => `number` |
| `TANH` | (`number`: `any`) => `number` |

#### Defined in

src/formula/formulas/functions/trigonometry.ts:8

___

### WebFunctions

• `Const` **WebFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ENCODEURL` | (`text`: `any`) => `string` |
| `FILTERXML` | () => `void` |
| `WEBSERVICE` | (`context`: `any`, `url`: `any`) => `Promise`<`string`\> |

#### Defined in

src/formula/formulas/functions/web.ts:6
