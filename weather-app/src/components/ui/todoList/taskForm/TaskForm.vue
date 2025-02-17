<script setup lang="ts">
  import { ref, defineEmits } from "vue";

  const emit = defineEmits(["add-task"]);
  const taskTitle = ref<string>("");

  const submitTask = () => {
    if (!taskTitle.value.trim()) return;
    emit("add-task", taskTitle.value);
    taskTitle.value = "";
  };
</script>

<template>
  <div class="task-form">
    <input v-model="taskTitle" placeholder="Введите задачу..." @keyup.enter="submitTask" />
    <button @click="submitTask">Add</button>
  </div>
</template>


<style scoped>
  .task-form {
    display: flex;
    gap: 10px;
  }
  input {
    flex: 1;
    padding: 8px;
  }
  button {
    padding: 8px;
  }
</style>
