import { defineComponent, h, inject, ref, Ref, Teleport } from 'vue'

import {
  VmaGridConstructor,
  VmaGridMethods,
  VmaGridPrivateMethods,
} from '../../../types'
import {
  VmaCtxMenuPrivateRef,
  VmaGridCtxMenuConstructor,
} from '../../../types/context-menu'
import { Guid } from '../../utils/guid'

export default defineComponent({
  name: 'VmaGridCtxMenu',
  props: {
    value: String,
  },
  emits: ['change'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    const $vmaCalcGrid = inject(
      '$vmaCalcGrid',
      {} as VmaGridConstructor & VmaGridMethods & VmaGridPrivateMethods,
    )

    const { reactiveData } = $vmaCalcGrid
    const { refGridCtxMenu } = $vmaCalcGrid.getRefs()
    const { ctxMenuStore } = reactiveData

    const refMaps: VmaCtxMenuPrivateRef = {}

    const $ctxMenu = {
      uId: Guid.create().toString(),
      props,
      context,
      getRefs: () => refMaps,
    } as unknown as VmaGridCtxMenuConstructor

    const renderVN = () =>
      h(Teleport, { to: 'body', disabled: false }, [
        h(
          'div',
          {
            ref: refGridCtxMenu,
            class: [
              'vma-grid-context-menu',
              {
                'is--visible': ctxMenuStore.visible,
              },
            ],
            style: ctxMenuStore.style,
          },
          ctxMenuStore.list.map((options: any, optionsIndex: any) =>
            h(
              'ul',
              {
                class: 'group-wrapper',
                key: optionsIndex,
              },
              options.map((option: any, optionIndex: any) => {
                const hasChildMenus = option.children && option.children.length
                return !option.visible
                  ? null
                  : h(
                      'li',
                      {
                        class: [
                          '',
                          {
                            'link--disabled': option.disabled,
                            'link--active': option === ctxMenuStore.selected,
                          },
                        ],
                        key: `${optionsIndex}_${optionIndex}`,
                      },
                      [
                        h(
                          'a',
                          {
                            class: 'link',
                            onClick(evnt: Event) {
                              $vmaCalcGrid.ctxMenuLinkEvent(evnt, option)
                            },
                            onMouseover(evnt: Event) {
                              $vmaCalcGrid.ctxMenuMouseoverEvent(evnt, option)
                            },
                            onMouseout(evnt: Event) {
                              $vmaCalcGrid.ctxMenuMouseoutEvent(evnt, option)
                            },
                          },
                          [
                            h('i', {
                              class: ['link-prefix', option.prefixIcon],
                            }),
                            h(
                              'span',
                              {
                                class: 'link-content',
                              },
                              option.name,
                            ),
                            h('i', {
                              class: [
                                'link-suffix',
                                hasChildMenus
                                  ? option.suffixIcon || 'suffix--has-child'
                                  : option.suffixIcon,
                              ],
                            }),
                          ],
                        ),
                      ],
                    )
              }),
            ),
          ),
        ),
      ])

    $ctxMenu.renderVN = renderVN
    return $ctxMenu
  },
  render() {
    return this.renderVN()
  },
})
