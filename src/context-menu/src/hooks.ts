import { computed, nextTick } from 'vue'
import { VmaGridGlobalHooksHandlers, VmaGridConstructor } from '../../../types'
import {
  VmaGridCtxMenuMethods,
  VmaGridCtxMenuPrivateMethods,
} from '../../../types/context-menu'
import { DomTools } from '../../utils/doms'
import { Column } from '../../grid/src/helper/Column'

const gridCtxMenuHook: VmaGridGlobalHooksHandlers.HookOptions = {
  setupGrid(vmaCalcGrid: VmaGridConstructor) {
    const { uId, reactiveData } = vmaCalcGrid

    const { refGrid } = vmaCalcGrid.getRefs()

    let ctxMenuMethods = {} as VmaGridCtxMenuMethods
    let ctxMenuPrivateMethods = {} as VmaGridCtxMenuPrivateMethods
    ctxMenuMethods = {
      closeMenu() {
        Object.assign(reactiveData.ctxMenuStore, {
          visible: false,
          selected: null,
          selectChild: null,
          showChild: false,
        })
        return nextTick()
      },
    }
    const openCtxMenu = (
      evnt: any,
      type: 'column-indicator' | 'row-indicator' | 'grid-corner' | 'cell',
      param: any,
    ) => {
      const list = []
      if (type === 'grid-corner') {
        let options = []
        options.push({
          name: '插入首行',
          code: 'insertFirstRow',
          disabled: false,
          visible: true,
        })
        options.push({
          name: '插入首列',
          code: 'insertFirstColumn',
          disabled: false,
          visible: true,
        })
        list.push(options)
        options = []
        options.push({
          name: '显示所有行',
          code: 'showAllRows',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '显示所有列',
          code: 'showAllColumns',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '清除固定',
          code: 'clearFix',
          disabled: false,
          visible: true,
        })
        list.push(options)
      }
      if (type === 'column-indicator') {
        let options = []
        options.push({
          name: '向前插入一列',
          code: 'insertColumnBefore',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '向后插入一列',
          code: 'insertColumnAfter',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '固定列',
          code: 'fixColumn',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '删除列',
          code: 'deleteColumn',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '隐藏列',
          code: 'hideColumn',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '显示所有列',
          code: 'showAllColumns',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
      }
      if (type === 'row-indicator') {
        let options = []
        options.push({
          name: '向上插入一行',
          code: 'insertRowBefore',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '向下插入一行',
          code: 'insertRowAfter',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '固定行',
          code: 'fixRow',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '删除行',
          code: 'deleteRow',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '隐藏行',
          code: 'hideRow',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '显示所有行',
          code: 'showAllRows',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
      }
      if (type === 'cell') {
        let options = []
        options.push({
          name: '复制',
          code: 'copyCell',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '粘贴',
          code: 'pasteCell',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '格式',
          code: 'cellFormat',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '字体字号',
          code: 'cellFont',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '颜色',
          code: 'cellFrontColor',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '填充',
          code: 'cellBackColor',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        options = []
        options.push({
          name: '固定单元格',
          code: 'fixCell',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
      }
      evnt.preventDefault()
      const { scrollTop, scrollLeft, visibleHeight, visibleWidth } =
        DomTools.getDomNode()
      const top = evnt.clientY + scrollTop
      const left = evnt.clientX + scrollLeft
      Object.assign(reactiveData.ctxMenuStore, {
        visible: true,
        selected: null,
        list,
        selectChild: null,
        showChild: false,
        style: {
          top: `${top}px`,
          left: `${left}px`,
        },
      })
    }
    ctxMenuPrivateMethods = {
      ctxMenuLinkEvent(evnt: any, menu: any): void {
        if (menu && !menu.disabled) {
          if (menu.code === 'insertColumnBefore') {
            vmaCalcGrid.updateColumn(
              'insertColumnBefore',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'insertColumnAfter') {
            vmaCalcGrid.updateColumn(
              'insertColumnAfter',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'deleteColumn') {
            vmaCalcGrid.updateColumn(
              'deleteColumn',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'hideColumn') {
            vmaCalcGrid.updateColumn(
              'hideColumn',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'showAllColumns') {
            vmaCalcGrid.updateColumn(
              'showAllColumns',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'fixColumn') {
            // TODO 固定列
          } else if (menu.code === 'unfixColumn') {
            // TODO 取消固定列
          } else if (menu.code === 'hideRow') {
            vmaCalcGrid.updateRow('hideRow', menu.param.row, menu.param.col)
          } else if (menu.code === 'showAllRows') {
            vmaCalcGrid.updateRow('showAllRows', menu.param.row, menu.param.col)
          } else if (menu.code === 'insertRowBefore') {
            vmaCalcGrid.updateRow(
              'insertRowBefore',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'insertRowAfter') {
            vmaCalcGrid.updateRow(
              'insertRowAfter',
              menu.param.row,
              menu.param.col,
            )
          } else if (menu.code === 'deleteRow') {
            vmaCalcGrid.updateRow('deleteRow', menu.param.row, menu.param.col)
          } else if (menu.code === 'insertFirstColumn') {
            // TODO 插入首列
          } else if (menu.code === 'insertFirstRow') {
            // TODO 插入首行
          }
        }
        if (ctxMenuMethods.closeMenu) {
          ctxMenuMethods.closeMenu()
        }
      },
      ctxMenuMouseoutEvent(evnt: any, option: any): void {
        const { ctxMenuStore } = reactiveData
        if (!option.children) {
          ctxMenuStore.selected = null
        }
        ctxMenuStore.selectChild = null
      },
      ctxMenuMouseoverEvent(evnt: any, option: any, child?: any): void {
        const menuElem = evnt.currentTarget
        const { ctxMenuStore } = reactiveData
        evnt.preventDefault()
        evnt.stopPropagation()
        ctxMenuStore.selected = option
        ctxMenuStore.selectChild = child
      },
      handleContextmenuEvent: (evnt: any): void => {
        // 右键事件发生时，关闭单元格编辑器
        reactiveData.currentCellEditorActive = false
        const refElem = refGrid.value
        const columnTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `column-indicator`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.parentNode.getAttribute(
              'uid',
            ) === uId,
        )
        const rowTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `row-indicator`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute(
              'uid',
            ) === uId,
        )
        const cornerTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `grid-corner`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.parentNode.getAttribute(
              'uid',
            ) === uId,
        )
        const cellTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `normal`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.parentNode.getAttribute(
              'uid',
            ) === uId,
        )
        if (
          cornerTargetNode.flag /* && vmaCalcGrid.props.gridContextHeaderMenu */
        ) {
          console.log(cornerTargetNode.targetElem)
          openCtxMenu(evnt, 'grid-corner', {
            row: cornerTargetNode.targetElem.getAttribute('row'),
            col: cornerTargetNode.targetElem.getAttribute('col'),
          })
        }
        if (
          cellTargetNode.flag /* && vmaCalcGrid.props.gridContextHeaderMenu */
        ) {
          openCtxMenu(evnt, 'cell', {})
        }
        if (
          columnTargetNode.flag /* && vmaCalcGrid.props.gridContextHeaderMenu */
        ) {
          openCtxMenu(evnt, 'column-indicator', {
            row: columnTargetNode.targetElem.getAttribute('row'),
            col: columnTargetNode.targetElem.getAttribute('col'),
          })
        }
        if (rowTargetNode.flag /* && vmaCalcGrid.props.gridContextRowMenu */) {
          openCtxMenu(evnt, 'row-indicator', {
            row: rowTargetNode.targetElem.getAttribute('row'),
            col: rowTargetNode.targetElem.getAttribute('col'),
          })
        }
      },
    }

    return { ...ctxMenuMethods, ...ctxMenuPrivateMethods }
  },
}

export default gridCtxMenuHook
