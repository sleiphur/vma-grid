import { BodyFixedType, HeaderFixedType } from '../../../../types/grid'

// eslint-disable-next-line @typescript-eslint/naming-convention
export class Row {
  index?: number

  type?: string // header row | body row | footer row

  height?: number

  renderHeight?: number | string

  minHeight?: number

  visible?: boolean

  fixed?: boolean

  fixedType?: HeaderFixedType | BodyFixedType | null

  constructor(
    index: number,
    type: string | null,
    height: number | null,
    renderHeight: number | string | null,
    minHeight: number | null,
    visible: boolean | null,
    fixed: boolean | null,
    fixedType: HeaderFixedType | BodyFixedType | null,
  ) {
    Object.assign(this, {
      index,
      type,
      height,
      renderHeight,
      minHeight,
      visible,
      fixed,
      fixedType,
    })
  }
}
