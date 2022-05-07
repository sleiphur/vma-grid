import { PropType } from 'vue'
import { VmaGridPropTypes } from '../../../../types/grid'

export default {
  id: String as PropType<VmaGridPropTypes.Id>,

  editable: {
    type: Boolean as PropType<VmaGridPropTypes.Editable>,
    default: true,
  },

  type: {
    type: String as PropType<VmaGridPropTypes.Type>,
    default: 'primary',
  },

  size: {
    type: String as PropType<VmaGridPropTypes.Size>,
    default: 'normal',
  },

  border: {
    type: String as PropType<VmaGridPropTypes.Border>,
    default: 'full',
  },

  data: Array as PropType<VmaGridPropTypes.Data>,

  alignH: {
    type: String as PropType<VmaGridPropTypes.AlignHorizontal>,
    default: 'center',
  },
  alignV: {
    type: String as PropType<VmaGridPropTypes.AlignVertical>,
    default: 'center',
  },

  minDimensions: {
    type: Array as PropType<VmaGridPropTypes.MinDimensions>,
    default: [10, 10], // [row, column]
  },

  resizeColumn: {
    type: Boolean as PropType<VmaGridPropTypes.ResizeColumn>,
    default: true,
  },

  resizeRow: {
    type: Boolean as PropType<VmaGridPropTypes.ResizeRow>,
    default: true,
  },

  gridRowHeight: {
    type: Number as PropType<VmaGridPropTypes.GridDefaultRowHeight>,
  },

  gridColumnWidth: {
    type: Number as PropType<VmaGridPropTypes.GridDefaultColumnWidth>,
  },

  loading: {
    type: Boolean as PropType<VmaGridPropTypes.Loading>,
    default: false,
  },

  functions: {
    type: Object as PropType<VmaGridPropTypes.CustomFunction>,
    default: null,
  },

  scrollY: {
    type: Object as PropType<VmaGridPropTypes.ScrollY>,
    default: {
      enable: true,
      gt: 60,
      oSize: 0,
    },
  },
}
