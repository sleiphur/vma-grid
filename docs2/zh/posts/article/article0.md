---
icon: edit
date: 2022-04-19
category:
  - Grid
tag:
  - 基础表格
---

# 表格配置属性

## editable

表格是否可编辑，布尔值，默认true

## type

表格风格，可选值default/primary/success/warning/danger， 默认primary

## size
表格尺寸，可选值xxx-large/xx-large/x-large/large/normal/small/mini，默认normal

## border
表格边框线，可选值full/normal/outer/inner/none，默认full

## alignH
表格中单元格水平对齐位置，可选值left/center/right，默认center

## alignV
表格中单元格垂直对齐位置，可选值top/center/bottom，默认center

## minDimensions
表格初始化行列数量，数字数组如[10, 20]，表示一个10行20列的表格，默认[10, 10]

## resizeColumn
表格列宽是否可以调整，布尔值，默认true

## resizeRow
表格行高是否可以调整，布尔值，默认true

## gridRowHeight
指定表格行高，数字值，无默认值

## gridColumnWidth
指定表格列宽，数字值，无默认值

## functions
自定义表格公式，见// TODO