<script lang="ts" setup>
  import IconSvg from './IconSvg.vue';
  import { IconProps } from '../types';

  withDefaults(defineProps<IconProps>(), { size: 20});
</script>
<template>
  <IconSvg :size="size">
    <path d="M10,17L15,12L10,7V17Z"/>
  </IconSvg>
</template>