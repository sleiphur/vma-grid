import {
  ComponentOptions,
  createCommentVNode,
  defineComponent,
  h,
  inject,
  resolveComponent,
  Teleport,
} from 'vue'

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

    const IconComponent = resolveComponent('VmaGridIcon') as ComponentOptions
    const ColorPickerComponent = resolveComponent(
      'VmaGridColorPicker',
    ) as ComponentOptions

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

    const rendererSuffixComp = (comp: string, menu: any) => {
      if (comp === 'colorPicker') {
        return h(ColorPickerComponent, {
          readonly: false,
          value:
            menu.code === 'cellFrontColor'
              ? $vmaCalcGrid.getCell(
                  menu.code,
                  menu.param.row,
                  menu.param.col,
                ) || '#000000'
              : $vmaCalcGrid.getCell(menu.code, menu.param.row, menu.param.col),
          defaultColor: menu.code === 'cellFrontColor' ? '#000000' : null,
          onChange: (evnt: MouseEvent, color: string) => {
            $vmaCalcGrid.updateCell(
              menu.code,
              menu.param.row,
              menu.param.col,
              menu.param.eRow,
              menu.param.eCol,
              color,
            )
          },
        })
      }
      return createCommentVNode()
    }

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
                            h(
                              'i',
                              {
                                class: ['link-prefix', option.prefixIcon],
                              },
                              option.prefixIcon
                                ? h(IconComponent, {
                                    name: option.prefixIcon,
                                    size: 'mini',
                                    translateY: 1,
                                  })
                                : createCommentVNode(),
                            ),
                            h(
                              'span',
                              {
                                class: 'link-content',
                              },
                              option.name,
                            ),
                            h(
                              'i',
                              {
                                class: [
                                  'link-suffix',
                                  hasChildMenus
                                    ? option.suffixIcon || 'angle-right'
                                    : option.suffixIcon,
                                ],
                              },
                              [
                                option.suffixComp
                                  ? rendererSuffixComp(
                                      option.suffixComp,
                                      option,
                                    )
                                  : createCommentVNode(),
                                hasChildMenus
                                  ? h(IconComponent, {
                                      name: option.suffixIcon || 'angle-right',
                                      size: 'mini',
                                      translateY: 1,
                                    })
                                  : option.suffixIcon
                                  ? h(IconComponent, {
                                      name: option.suffixIcon,
                                      size: 'mini',
                                      translateY: 1,
                                    })
                                  : createCommentVNode(),
                              ],
                            ),
                          ],
                        ),
                        hasChildMenus
                          ? h(
                              'ul',
                              {
                                class: [
                                  'sub-group-wrapper',
                                  {
                                    'is--show':
                                      option === ctxMenuStore.selected,
                                  },
                                ],
                              },
                              option.children.map((child: any, cIndex: any) =>
                                child.visible
                                  ? h(
                                      'li',
                                      {
                                        class: [
                                          {
                                            'link--disabled': child.disabled,
                                            'link--active':
                                              child ===
                                              ctxMenuStore.selectChild,
                                          },
                                        ],
                                        key: `${optionsIndex}_${optionIndex}_${cIndex}`,
                                      },
                                      h(
                                        'a',
                                        {
                                          class: 'link',
                                          onClick(evnt: Event) {
                                            $vmaCalcGrid.ctxMenuLinkEvent(
                                              evnt,
                                              child,
                                            )
                                          },
                                          onMouseover(evnt: Event) {
                                            $vmaCalcGrid.ctxMenuMouseoverEvent(
                                              evnt,
                                              option,
                                              child,
                                            )
                                          },
                                          onMouseout(evnt: Event) {
                                            $vmaCalcGrid.ctxMenuMouseoutEvent(
                                              evnt,
                                              option,
                                            )
                                          },
                                        },
                                        [
                                          h(
                                            'i',
                                            {
                                              class: [
                                                'link-prefix',
                                                child.prefixIcon,
                                              ],
                                            },
                                            child.prefixIcon
                                              ? h(IconComponent, {
                                                  name: child.prefixIcon,
                                                  size: 'mini',
                                                  translateY: 1,
                                                })
                                              : createCommentVNode(),
                                          ),
                                          h(
                                            'span',
                                            {
                                              class: 'link-content',
                                              style: {
                                                fontFamily: child.item,
                                              },
                                            },
                                            child.name,
                                          ),
                                          h('i', {
                                            class: [
                                              'link-suffix',
                                              option.suffixIcon,
                                            ],
                                          }),
                                        ],
                                      ),
                                    )
                                  : null,
                              ),
                            )
                          : null,
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
