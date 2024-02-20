<script setup lang="ts">
  import Menu from './components/Menu.vue';

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
    }]
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