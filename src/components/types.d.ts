import { type ComponentInternalInstance, type StyleValue } from 'vue';

export type menuBehaviorType = 'click' | 'hover';

export interface IconProps {
  size?: number;
}

export interface DividerProps {
  type?: 'vertical' | 'horizontal';
}

export interface MenuItemProps {
  icon?: ComponentInternalInstance;
  label?: string | number;
  items?: MenuItemProps[];
  style?: StyleValue;
  shortcut?: string;
  component?: ComponentInternalInstance;
  separator?: boolean;
  command?: () => {};
  stopPropagation?: boolean;
}

declare module 'Vue3Menu' {
  export interface Vue3MenuProps {
    items: MenuItemProps[];
    appendTo?: string;
    anchor?: any;
    offset?: any;
    behavior?: menuBehaviorType;
    customClassName?: string;
    context?: boolean;
  }

  export interface Vue3MenuEvents {
    hide: [];
    show: [];
    action: [];
    mouseEnter: [event: MouseEvent];
    mouseLeave: [event: MouseEvent];
  }

  export class Vue3Menu extends Vue {
    props: Vue3MenuProps;
    events: Vue3MenuEvents;
  }
}