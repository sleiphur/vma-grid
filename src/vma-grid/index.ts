import hooks from './hooks'

export class VmaGridInstance {
  readonly version = '0.5.6'

  readonly hooks = hooks
}

export const VmaGrid = new VmaGridInstance()

export default VmaGrid
