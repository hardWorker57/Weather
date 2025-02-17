<script setup lang="ts">
  import { defineProps, defineEmits } from "vue";

  interface Task {
    id: number;
    title: string;
    completed: boolean;
  }

  const props = defineProps<{ tasks: Task[] }>();
  const emit = defineEmits(["delete-task", "mark-completed"]);

  const deleteTask = (id: number) => emit("delete-task", id);
  const markCompleted = (id: number) => emit("mark-completed", id);
</script>

<template>
  <div>
    <h2>Задачи</h2>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.id">
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
        <button @click="markCompleted(task.id)">✔</button>
        <button @click="deleteTask(task.id)">✖</button>
      </li>
    </ul>
    <p v-else>Еще нет задач</p>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  button {
    margin-left: 10px;
  }
</style>
