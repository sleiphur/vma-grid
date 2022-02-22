// eslint-disable-next-line @typescript-eslint/naming-convention
export class Cell {
  r?: number

  c?: number

  rs?: number

  cs?: number

  fd?: any // 计算依赖

  v?: any // 原始值

  mv?: any // 计算结果值

  s?: boolean // 计算状态，已计算：true；未计算：false

  se?: any // 计算错误 null 未无错误

  t?: number // 计算时间戳

  constructor(
    r: number,
    c: number,
    v: any,
    mv: any,
    fd: any,
    s: boolean | null,
    se: any,
    t: number | null,
    rs: number | null,
    cs: number | null,
  ) {
    Object.assign(this, {
      r,
      c,
      v,
      mv,
      fd,
      s,
      se,
      t,
      rs,
      cs,
    })
  }
}
