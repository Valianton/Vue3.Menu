<script lang="ts" setup>

  import { IconProps } from '../types';

  withDefaults(defineProps<IconProps>(), {
    size: 18,
  });
</script>

<template>
  <svg
      :height="size"
      :width="size"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
  >
    <slot/>
  </svg>
</template>