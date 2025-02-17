<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <RouterLink to="/">Вернуться на главную</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 5rem;
  margin: 0;
}

p {
  font-size: 1.5rem;
  margin: 10px 0;
}

a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

a:hover {
  background-color: #35495e;
}
</style>
