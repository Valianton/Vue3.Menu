<script lang="ts" setup>
  import { MenuItemProps } from './types';

  defineProps<MenuItemProps>();
</script>

<template>
  <div class="menu-item">
    <component
        v-if="icon"
        class="menu-item-icon"
        :is="icon"
    />
    <div
        class="menu-item-caption"
        :style="style"
    >
      {{ label }}
    </div>
    <span
        v-if="shortcut"
        class="menu-item-shortcut"
    >
      {{ shortcut }}
    </span>
  </div>
</template>