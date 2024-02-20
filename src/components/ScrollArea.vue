<script lang="ts" setup>
  import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'radix-vue';
  import { computed, ref } from 'vue';

  withDefaults(defineProps<{
    scrollHideDelay?: number
  }>(), {
    scrollHideDelay: 200,
  });

  const scrollAreaViewportRef = ref();
  const scrollElement = computed(() => scrollAreaViewportRef.value.$refs.viewportElement);

  defineExpose({
    scrollElement,
  });
</script>

<template>
  <ScrollAreaRoot
      class="ScrollAreaRoot"
      :scroll-hide-delay="scrollHideDelay"
  >
    <ScrollAreaViewport ref="scrollAreaViewportRef">
      <slot/>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
        class="scroll-area-scrollbar"
        orientation="vertical"
    >
      <ScrollAreaThumb class="scrollbar-area-thumb"/>
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>