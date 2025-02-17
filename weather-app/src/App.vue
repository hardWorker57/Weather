
<script setup lang="ts">
  //@ts-ignore
  import { onMounted, ref } from 'vue';
  //@ts-ignore
  import Header from './layout/Header.vue';
  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  });
</script>

<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <RouterView name="loader"/>
  </div>
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
