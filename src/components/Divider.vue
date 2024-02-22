<script lang="ts" setup>
  import { DividerProps } from './types';

  withDefaults(defineProps<DividerProps>(), {
    type: 'vertical',
  });
</script>

<template>
  <div
      :class="[$style.divider, $style[type]]"
  />
</template>

<style module>
  .divider {
    color: currentColor;
    border-block-start: 1px solid rgba(0, 0, 0, 0.12);
  }

  .horizontal {
    margin: 4px 0;
    border-inline-start: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    min-width: 100%;
  }

  .vertical {
    margin: 0 8px;
    height: 1em;
    border-inline-start: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>