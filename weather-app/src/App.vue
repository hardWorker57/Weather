
<script setup lang="ts">
  //@ts-ignore
  import Header from './layout/Header.vue';

</script>

<template>
  <div class="container">
    <Header/>
    <RouterView/>
  </div>
</template>

<style scoped>
  .container {
    max-width: 85%;
    margin-inline: auto;
  }
  @media screen and (max-width: 768px) {
    .container {
      max-width: 95%;
    }
  }
</style>
