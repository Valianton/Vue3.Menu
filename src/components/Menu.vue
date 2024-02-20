<script lang="ts" setup>
  import { nextTick, onBeforeUnmount, onMounted, ref, StyleValue, useAttrs } from 'vue';

  import Divider from './Divider.vue';
  import Menu from './Menu.vue';
  import IconMenuRight from './IconMenuRight.vue';
  import MenuItem from './MenuItem.vue';
  import { menuBehaviorType, MenuItemProps } from '../types';
  import ScrollArea from './ScrollArea.vue';

  /**
   * @todo: создать неявную взаимосвязь между menu. Когда есть три вложенности меню и пользователь открыл последнюю из них
   * и нажал по ней, все три вложенности должны быть закрыты
   */
  const props = withDefaults(defineProps<{
    items: MenuItemProps[]
    appendTo?: string
    anchor?: any
    offset?:  any
    behavior?: menuBehaviorType
    customClassName?: string
    context?: boolean
  }>(), {
    appendTo: 'body',
    anchor: [0, 1],
    offset: [0, 0],
    behavior: 'click',
  });

  const emits = defineEmits<{
    hide: []
    show: []
    action: []
    mouseEnter: [event: MouseEvent]
    mouseLeave: [event: MouseEvent]
  }>();

  const attrs = useAttrs();
  const styles = attrs.style as StyleValue;
  const customScrollRef = ref<typeof ScrollArea>();
  const menuRef = ref();
  const subMenuRef = ref<{ [key: string]: typeof Menu }>({});
  const teleportRef = ref();
  /**
   * Флаг отображения меню.
   * @todo: потом начать использовать рендер, чтобы избежать условий v-if в шаблоне
   */
  const menuShown = ref(false);

  /**
   * Коэффициент максимальной высоты видимой области для меню. Значение не может быть больше одного.
   * Высота видимой области браузера умножается на этот коэффициент
   */
  const maxVisibleHeightRatio = 0.8;
  const focusedClassName = 'focused';
  let menuInitialHeight: number;
  /**
   * Текущий открытый компонент подменю
   */
  let openedSubMenu: typeof Menu | null = null;
  const setSubMenuRef = (el: any, index: number) => {
    subMenuRef.value[index] = el;
  };
  const getParentNode = () => {
    return teleportRef.value.parentNode;
  };

  /**
   * Получение высоты по-умолчанию.
   * В случае, если пункты меню будут динамическими, этот метод нужно будет сновы вызвать
   */
  const getMenuInitialHeight = (): number => {
    menuRef.value.style.visibility = 'hidden';
    menuRef.value.style.display = 'flex';
    let result = 0;

    const scrollElement = customScrollRef.value?.scrollElement;
    if (scrollElement) {
      scrollElement.style.height = 'auto';
      result = scrollElement.offsetHeight;
    }

    menuRef.value.style.display = 'none';
    menuRef.value.style.visibility = '';

    return result;
  };

  const isOutsideContainer = (target: HTMLElement) => {
    return !menuRef.value.contains(target);
  };

  const onClickOutside = (event: MouseEvent) => {
    if (!menuRef.value) {
      return;
    }

    if (openedSubMenu) {
      const isOutside = openedSubMenu.isOutsideContainer(event.target);
      if (!isOutside) {
        return;
      }
    }

    const parentNode = getParentNode();
    const isNoParentContainer = !parentNode.contains(event.target);
    if ((props.context || (event.target && isOutsideContainer(event.target as HTMLElement))) && isNoParentContainer) {
      hide();
    }
  };

  const bindScrollContainer = () => {
    if (customScrollRef.value?.scrollElement) {
      const scrollElement = customScrollRef.value.scrollElement;
      if (scrollElement) {
        scrollElement.addEventListener('scroll', onScrollMenuContainer);
      }
    }
  };

  const unbindScrollContainer = () => {
    if (customScrollRef.value?.scrollElement) {
      const scrollElement = customScrollRef.value.scrollElement;
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', onScrollMenuContainer);
      }
    }
  };

  const bindClickOutside = () => {
    document.body.addEventListener('mousedown', onClickOutside);
  };

  const unbindClickOutside = () => {
    document.body.removeEventListener('mousedown', onClickOutside);
  };

  const onScrollMenuContainer = () => {
    if (openedSubMenu) {
      openedSubMenu.hide();
    }
  };

  const scrollAreaHeight = ref('');
  const show = (event?: PointerEvent | undefined) => {
    menuShown.value = true;
    /**
     * Это нужно, чтобы не хранить в DOM все меню и подменю
     * @todo: написать render для template, чтобы избавиться от множества v-if в шаблоне
     * const render = () => {
     *     return h('div', []);
     *   };
     *   <render/>
     */
    nextTick(() => {
      const parentNode = getParentNode();
      const height = parentNode.offsetHeight;
      const width = parentNode.offsetWidth;
      const [anchorLeft, anchorTop] = props.anchor;
      const [offsetLeft, offsetTop] = props.offset;
      const parentRect = parentNode.getBoundingClientRect();
      const parentLeft = parentRect.left + offsetLeft;
      const parentTop = parentRect.top + offsetTop;
      const top = (height * anchorTop) + parentTop + window.scrollY;
      const left = (width * anchorLeft) + parentLeft + window.scrollX;
      const visibleHeight = (window.innerHeight - window.scrollY - top) * maxVisibleHeightRatio;

      menuInitialHeight = menuInitialHeight || getMenuInitialHeight();
      const menuHeight = menuInitialHeight > visibleHeight ? visibleHeight : menuInitialHeight;

      if (props.context && event) {
        menuRef.value.style.top = event.clientY + 'px';
        menuRef.value.style.left = event.clientX + 'px';
      } else {
        menuRef.value.style.top = top + 'px';
        menuRef.value.style.left = left + 'px';
        parentNode.classList.add(focusedClassName);
      }

      if (customScrollRef.value?.scrollElement) {
        customScrollRef.value.scrollElement.style.height = menuHeight + 'px';
      }
      scrollAreaHeight.value = menuHeight + 'px';
      menuRef.value.style.display = 'flex';

      bindScrollContainer();
      bindClickOutside();
      emits('show');
    });
  };

  const hide = () => {
    const parentNode = getParentNode();

    parentNode.classList.remove(focusedClassName);
    menuRef.value.style.display = 'none';
    menuShown.value = false;

    unbindScrollContainer();
    unbindClickOutside();

    openedSubMenu = null;
    emits('hide');
  };

  const onHideSubMenu = () => {
    openedSubMenu = null;
  };

  const onShowSubMenu = (index: number) => {
    openedSubMenu = subMenuRef.value[index];
  };

  const onItemAction = () => {
    emits('action');
    hide();
  };

  const onClickMenuItem = (menuItem: MenuItemProps) => {
    menuItem.command?.();
    if (!menuItem.items || menuItem.command) {
      hide();
      emits('action');
    }
  };

  const onMouseEnterSubMenu = (index: number) => {
    const subMenu = subMenuRef.value[index];

    if (openedSubMenu === subMenu) {
      return;
    }

    if (openedSubMenu) {
      openedSubMenu.hide();
    }

    if (subMenu) {
      subMenu.show();
    }
  };

  const onClickParent = () => {
    menuShown.value ? hide() : show();
  };

  const onContextMenuParent = (event: PointerEvent) => {
    event.preventDefault();
    show(event);
  };

  onMounted(() => {
    const parentNode = getParentNode();
    if (props.context) {
      parentNode.addEventListener('contextmenu', onContextMenuParent);
    } else {
      parentNode.addEventListener('click', onClickParent);
    }
  });

  onBeforeUnmount(() => {
    const parentNode = getParentNode();
    if (props.context) {
      parentNode.removeEventListener('contextmenu', onContextMenuParent);
    } else {
      parentNode.removeEventListener('click', onClickParent);
    }
  });

  defineExpose({
    hide,
    show,
    getParentNode,
    isOutsideContainer,
  });

</script>

<template>
  <Teleport
      ref="teleportRef"
      to="body"
  >
    <transition name="p-connected-overlay">
      <div
          v-if="menuShown"
          :class="['epic-menu', attrs.class, customClassName]"
          :style="styles"
          ref="menuRef"
          @mouseenter="emits('mouseEnter', $event)"
          @mouseleave="emits('mouseLeave', $event)"
      >
        <ScrollArea ref="customScrollRef">
          <template
              v-for="(menuItem, index) in items"
              :key="index"
          >
            <Divider
                v-if="menuItem.separator"
                type="horizontal"
            />
            <component
                v-else-if="menuItem.component"
                :is="menuItem.component"
                @click="!menuItem.stopPropagation && onClickMenuItem(menuItem)"
            />
            <a
                v-else
                class="menu-item-container"
                tabindex="-1"
                aria-hidden="true"
                @click="onClickMenuItem(menuItem)"
                @mousedown.stop
                @mouseenter="onMouseEnterSubMenu(index)"
            >
              <component
                  :is="MenuItem"
                  v-bind="menuItem"
              />
              <template v-if="menuItem.items">
                <IconMenuRight
                    class="menu-item-arrow"
                />
                <Menu
                    :ref="(el: any) => setSubMenuRef(el, index)"
                    :items="menuItem.items"
                    :anchor="[1, 0]"
                    :offset="[0, 0]"
                    behavior="hover"
                    @hide="onHideSubMenu"
                    @show="() => onShowSubMenu(index)"
                    @action="onItemAction"
                />
              </template>
            </a>
          </template>
        </ScrollArea>
      </div>
    </transition>
  </Teleport>
</template>