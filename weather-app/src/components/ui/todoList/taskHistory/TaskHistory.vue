<script setup lang="ts">
  interface CompletedTask {
    id: number;
    title: string;
    completedAt: string;
    weather: string;
  }

  defineProps<{ history: CompletedTask[] }>();
</script>

<template>
  <div>
    <h2>Завершенные задачи</h2>
    <ul v-if="history.length">
      <li v-for="task in history" :key="task.id">
        <span>{{ task.title }}</span> - <small>{{ task.completedAt }} ({{ task.weather }}°C)</small>
      </li>
    </ul>
    <p v-else>Еще нет завершенных задач</p>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  small {
    color: gray;
  }
</style>
