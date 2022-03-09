import { computed, nextTick } from 'vue'
import {
  VmaGridGlobalHooksHandlers,
  VmaGridCtxMenuMethods,
  VmaGridCtxMenuPrivateMethods,
} from '../../../types'
import { DomTools } from '../../utils/doms'
import { Column } from '../../grid/src/helper/Column'

const gridCtxMenuHook: VmaGridGlobalHooksHandlers.HookOptions = {
  setupGrid(vmaCalcGrid) {
    const { uId, reactiveData } = vmaCalcGrid

    const { refGrid } = vmaCalcGrid.getRefs()
    // const { refGrid } = getRefs()

    /* const computeCanHandleRow = computed(() => {
      let canHandleRow = true
      // if (reactiveData.sort.length > 0) {
      //   canHandleRow = false
      //   return canHandleRow
      // }
      // if (reactiveData.filterStore.filter.length) {
      //   for (const o in reactiveData.filterStore.filter) {
      //     if (reactiveData.filterStore.filter[o].filterTargetContent.length) {
      //       canHandleRow = false
      //       return canHandleRow
      //     }
      //   }
      // }
      return canHandleRow
    }) */

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
      type: 'column-indicator' | 'row-indicator' | 'corner' | 'cell',
      param: any,
    ) => {
      const list = []
      if (type === 'corner') {
        const options = []
        options.push({
          name: '插入首列',
          code: 'insertFirstColumn',
          disabled: false,
          visible: true,
        })
        options.push({
          name: '插入首行',
          code: 'insertFirstRow',
          disabled: false,
          visible: true,
        })
        options.push({
          name: '显示所有列',
          code: 'showAllColumns',
          disabled: false,
          visible: true,
        })
        options.push({
          name: '显示所有行',
          code: 'showAllRows',
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
          name: '删除列',
          code: 'deleteColumn',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        // options = []
        // options.push({
        //   name: '固定列',
        //   code: 'fixColumn',
        //   disabled: false,
        //   visible: true,
        //   param: param,
        // })
        // options.push({
        //   name: '取消固定列',
        //   code: 'unfixColumn',
        //   disabled: false,
        //   visible: true,
        //   param: param,
        // })
        // list.push(options)
        options = []
        options.push({
          name: '隐藏列',
          code: 'hideColumn',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '显示列',
          code: 'showColumn',
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
          name: '删除行',
          code: 'deleteRow',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
        // TODO 固定行/取消固定行
        // options = []
        // options.push({
        //   name: '固定行',
        //   code: 'fixRow',
        //   disabled: false,
        //   visible: true,
        // })
        // options.push({
        //   name: '取消固定行',
        //   code: 'unfixRow',
        //   disabled: false,
        //   visible: true,
        // })
        // list.push(options)
        options = []
        options.push({
          name: '隐藏行',
          code: 'hideRow',
          disabled: false,
          visible: true,
          param,
        })
        options.push({
          name: '显示行',
          code: 'showAllRows',
          disabled: false,
          visible: true,
          param,
        })
        list.push(options)
      }
      if (type === 'cell') {
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
            // vmaCalcGrid.updateColumn(
            //   'insertColumnBefore',
            //   menu.param.cidx,
            //   menu.param.ridx,
            //   menu.param.columnInfoBefore,
            //   menu.param.columnInfoAfter
            // )
          } else if (menu.code === 'insertColumnAfter') {
            // vmaCalcGrid.updateColumn(
            //   'insertColumnAfter',
            //   menu.param.cidx,
            //   menu.param.ridx,
            //   menu.param.columnInfoBefore,
            //   menu.param.columnInfoAfter
            // )
          } else if (menu.code === 'deleteColumn') {
            // vmaCalcGrid.updateColumn(
            //   'deleteColumn',
            //   menu.param.cidx,
            //   menu.param.ridx,
            //   menu.param.columnInfoBefore,
            //   menu.param.columnInfoAfter
            // )
          } else if (menu.code === 'hideColumn') {
            // vmaCalcGrid.updateColumn(
            //   'hideColumn',
            //   menu.param.cidx,
            //   menu.param.ridx,
            //   menu.param.columnInfoBefore,
            //   menu.param.columnInfoAfter
            // )
          } else if (menu.code === 'showColumn') {
            // vmaCalcGrid.updateColumn('showColumn', null, null, null, null)
          } else if (menu.code === 'fixColumn') {
            // vmaCalcGrid.updateColumn(
            //   'fixColumn',
            //   menu.param.cidx,
            //   menu.param.ridx,
            //   menu.param.columnInfoBefore,
            //   menu.param.columnInfoAfter
            // )
          } else if (menu.code === 'unfixColumn') {
            // vmaCalcGrid.updateColumn(
            //   'unfixColumn',
            //   menu.param.cidx,
            //   menu.param.ridx,
            //   menu.param.columnInfoBefore,
            //   menu.param.columnInfoAfter
            // )
          } else if (menu.code === 'hideRow') {
            // const riStartIndex = menu.param.rowInfoBefore.index
            // const riEndIndex = menu.param.rowInfoAfter.index
            // vmaCalcGrid.hideRow(menu.param.cidx, menu.param.ridx, riStartIndex, riEndIndex)
          } else if (menu.code === 'showAllRows') {
            // vmaCalcGrid.showAllRows().then(() => {
            //   vmaCalcGrid.filterDataByFilterStore().then(() => {
            //     vmaCalcGrid.setSortCaret()
            //   })
            // })
          } else if (menu.code === 'insertRowBefore') {
            // const riIndex = menu.param.rowInfoBefore.index
            // console.log(menu.param.rowInfoBefore)
            // // 前插入行
            // vmaCalcGrid.addRow(riIndex, 'before')
          } else if (menu.code === 'insertRowAfter') {
            // const riIndex = menu.param.rowInfoBefore.index
            // // 后插入行
            // vmaCalcGrid.addRow(riIndex, 'after')
          } else if (menu.code === 'deleteRow') {
            // const riIndex = menu.param.rowInfoBefore.index
            // // 后插入行
            // vmaCalcGrid.deleteRow(riIndex)
          } else if (menu.code === 'insertFirstColumn') {
            // vmaCalcGrid.updateColumn(
            //   'insertFirstColumn',
            //   reactiveData.gridFixedColumnConfig.length > 0
            //     ? '' + reactiveData.gridFixedColumnConfig[0].colIndex
            //     : '1',
            //   '1',
            //   null,
            //   null
            // )
          } else if (menu.code === 'insertFirstRow') {
            // // 插入首行
            // vmaCalcGrid.addRow(0, 'before')
          } else if (menu.code === 'showAllColumns') {
            // vmaCalcGrid.updateColumn('showColumn', null, null, null, null)
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
        const refElem = refGrid.value
        const columnTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `column-indicator`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.getAttribute('uid') === uId,
        )
        const rowTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `row-indicator`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.getAttribute('uid') === uId,
        )
        const cornerTargetNode = DomTools.getEventTargetNode(
          evnt,
          refElem,
          `corner-indicator`,
          (target: any) =>
            target.parentNode.parentNode.parentNode.getAttribute('uid') === uId,
        )
        console.log(columnTargetNode, rowTargetNode, cornerTargetNode)
        if (
          cornerTargetNode.flag /* && vmaCalcGrid.props.gridContextHeaderMenu */
        ) {
          openCtxMenu(evnt, 'corner', {})
        }
        if (
          columnTargetNode.flag /* && vmaCalcGrid.props.gridContextHeaderMenu */
        ) {
          /* if (
            reactiveData.gridComputedColumnConfig &&
            reactiveData.gridComputedColumnConfig.length
          ) {
            // 在reactiveData.computedColumnConfigs中寻找 columnTargetNode.targetElem 对应的cidx和ridx
            const targetElemColumnIndex = columnTargetNode.targetElem.getAttribute('cidx')
            const targetElemRowIndex = columnTargetNode.targetElem.getAttribute('ridx')
            // 找到之后根据direction插入gridColumns
            // 找到之后根据direction插入新的列定义到reactiveData.computedColumnConfigs
            // 同时要计算新的colspan，递归一直到顶
            // 若是复杂列配置的情况
            if (columnTargetNode.targetElem.getAttribute('cidx').indexOf('_') >= 0) {
              const idxArr = columnTargetNode.targetElem.getAttribute('cidx').split('_')
              const targetColumnInfoIndexBefore = idxArr[0]
              let targetColumnInfoBefore: ColumnInfo | null = null
              const targetColumnInfoIndexAfter = idxArr[idxArr.length - 1]
              let targetColumnInfoAfter: ColumnInfo | null = null
              for (const o in reactiveData.gridComputedColumnConfig) {
                if (
                  reactiveData.gridComputedColumnConfig[o].index ===
                  parseInt(targetColumnInfoIndexBefore)
                ) {
                  targetColumnInfoBefore = reactiveData.gridComputedColumnConfig[o]
                }
                if (
                  reactiveData.gridComputedColumnConfig[o].index ===
                  parseInt(targetColumnInfoIndexAfter)
                ) {
                  targetColumnInfoAfter = reactiveData.gridComputedColumnConfig[o]
                }
              }
              if (targetColumnInfoBefore && targetColumnInfoAfter) {
                openCtxMenu(evnt, 'column-indicator', {
                  cidx: targetElemColumnIndex,
                  ridx: targetElemRowIndex,
                  columnInfoBefore: targetColumnInfoBefore,
                  columnInfoAfter: targetColumnInfoAfter,
                })
              }
            } else {
              for (const o in reactiveData.gridComputedColumnConfig) {
                if (
                  reactiveData.gridComputedColumnConfig[o].index ===
                  parseInt(columnTargetNode.targetElem.getAttribute('cidx'))
                ) {
                  openCtxMenu(evnt, 'column-indicator', {
                    cidx: targetElemColumnIndex,
                    ridx: targetElemRowIndex,
                    columnInfoBefore: reactiveData.gridComputedColumnConfig[o],
                    columnInfoAfter: reactiveData.gridComputedColumnConfig[o],
                  })
                  break
                }
              }
            }
          } else {
            // 简单列的情况
            const targetElemColumnIndex = columnTargetNode.targetElem.getAttribute('cidx')
            const targetElemRowIndex = columnTargetNode.targetElem.getAttribute('ridx')
            for (const o in reactiveData.gridComputedColumnConfig) {
              if (
                reactiveData.gridComputedColumnConfig[o].index ===
                parseInt(columnTargetNode.targetElem.getAttribute('cidx'))
              ) {
                openCtxMenu(evnt, 'column-indicator', {
                  cidx: targetElemColumnIndex,
                  ridx: targetElemRowIndex,
                  columnInfoBefore: reactiveData.gridComputedColumnConfig[o],
                  columnInfoAfter: reactiveData.gridComputedColumnConfig[o],
                })
                break
              }
            }
          } */
        }
        if (rowTargetNode.flag /* && vmaCalcGrid.props.gridContextRowMenu */) {
          // const targetElemRowIndex = rowTargetNode.targetElem.getAttribute('ridx')
          // const item = reactiveData.gridDisplayRowData.find(
          //   (item) => item._index === parseInt(rowTargetNode.targetElem.getAttribute('ridx'))
          // )
          // if (item) {
          //   openCtxMenu(evnt, 'row-indicator', {
          //     cidx: null,
          //     ridx: targetElemRowIndex,
          //     rowInfoBefore: item,
          //     rowInfoAfter: item,
          //   })
          // }
          // for (const o in reactiveData.gridDisplayRowData) {
          //   if (
          //     reactiveData.gridDisplayRowData.get(parseInt(o))._index ===
          //     parseInt(rowTargetNode.targetElem.getAttribute('ridx'))
          //   ) {
          //     openCtxMenu(evnt, 'row-indicator', {
          //       cidx: null,
          //       ridx: targetElemRowIndex,
          //       rowInfoBefore: reactiveData.gridRows[o],
          //       rowInfoAfter: reactiveData.gridRows[o],
          //     })
          //     break
          //   }
          // }
        }
      },
    }

    return { ...ctxMenuMethods, ...ctxMenuPrivateMethods }
  },
}

export default gridCtxMenuHook
