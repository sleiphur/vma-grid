import hooks from './hooks'

export class VmaGridInstance {
  readonly version = '3.7.4'

  readonly hooks = hooks
}

export const VmaGrid = new VmaGridInstance()

export default VmaGrid
