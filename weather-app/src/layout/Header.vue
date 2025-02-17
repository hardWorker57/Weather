<script setup>
  import Navigation from '@/components/ui/Navigation.vue';
  import Search from '@/components/ui/Search.vue';

</script>

<template>
  <div class="header">
    <Navigation/>
    <Search/>
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>