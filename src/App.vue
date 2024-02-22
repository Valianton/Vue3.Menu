<script setup lang="ts">
  import Menu from './components/Menu.vue';
  // import { Vue3Menu as Menu } from '../dist/vue3menu.js';
  // import Menu from 'https://raw.githubusercontent.com/Valianton/Vue3.Menu/main/dist/assets/index-DLW6ZMhC.js';

  const items = [{
    label: 'Upload from computer',
    items: [{
      label: 'Upload from computer',
    }, {
      label: 'Search the web',
    }, {
      separator: true,
    }, {
      label: 'Drive',
    }, {
      label: 'Photos',
    }, {
      label: 'Bu URL',
    }, {
      label: 'Camera',
    }],
  }, {
    label: 'Search the web',
  }, {
    separator: true,
  }, {
    label: 'Drive',
  }, {
    label: 'Photos',
  }, {
    label: 'Bu URL',
  }, {
    label: 'Camera',
  }];
</script>

<template>
  <div>
    123
    <Menu
        :items="items"
    />
  </div>
</template>