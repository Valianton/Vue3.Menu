import { ComponentInternalInstance, StyleValue } from 'vue';

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