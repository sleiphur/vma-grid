import { BodyFixedType, HeaderFixedType } from '../../../../types/grid'

// eslint-disable-next-line @typescript-eslint/naming-convention
export class Column {
  index?: number

  type?: string // header column | body column | footer column

  width?: number

  renderWidth?: number | string

  minWidth?: number

  visible?: boolean

  fixed?: boolean

  fixedType?: HeaderFixedType | BodyFixedType | null

  constructor(
    index: number,
    type: string | null,
    width: number | null,
    renderWidth: number | string | null,
    minWidth: number | null,
    visible: boolean | null,
    fixed: boolean | null,
    fixedType: HeaderFixedType | BodyFixedType | null,
  ) {
    Object.assign(this, {
      index,
      type,
      width,
      renderWidth,
      minWidth,
      visible,
      fixed,
      fixedType,
    })
  }
}
