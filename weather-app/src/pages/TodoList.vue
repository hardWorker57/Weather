<script setup lang="ts">
  import TaskForm from "@/components/ui/todoList/taskForm/TaskForm.vue";
  import TaskHistory from "@/components/ui/todoList/taskHistory/TaskHistory.vue";
  import TaskList from "@/components/ui/todoList/taskList/TaskList.vue";
  import { useWeatherStore } from "@/stores/WeatherStore";
  import { ref, onMounted } from "vue";

  interface Task {
    id: number;
    title: string;
    completed: boolean;
  }

  interface CompletedTask extends Task {
    completedAt: string;
    weather: string;
  }

  const tasks = ref<Task[]>([]);
  const history = ref<CompletedTask[]>([]);
  const weatherStore = useWeatherStore();

  onMounted(() => {
    tasks.value = JSON.parse(localStorage.getItem("tasks") || "[]");
    history.value = JSON.parse(localStorage.getItem("history") || "[]");
  });

  const addTask = (title: string) => {
    if (!title.trim()) return;
    tasks.value.push({ id: Date.now(), title, completed: false });
    saveTasks();
  };

  const deleteTask = (id: number) => {
    tasks.value = tasks.value.filter(task => task.id !== id);
    saveTasks();
  };
  const markCompleted = (id: number) => {
    const task = tasks.value.find(task => task.id === id);
    if (!task) return;

    const completedTask: CompletedTask = {
      ...task,
      completedAt: new Date().toLocaleString(),
      weather: weatherStore?.hourlyForecast[1]?.weather[0].main + " " + Math.round(weatherStore?.hourlyForecast[1]?.main?.temp).toString(),
    };

    history.value.push(completedTask);
    tasks.value = tasks.value.filter(task => task.id !== id);

    saveTasks();
    saveHistory();
  };

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  const saveHistory = () => {
    localStorage.setItem("history", JSON.stringify(history.value));
  };
</script>

<template>
  <div class="container">
    <h1>TODO List</h1>
    <TaskForm @add-task="addTask" />
    <TaskList
      :tasks="tasks"
      @delete-task="deleteTask"
      @mark-completed="markCompleted"
    />
    <TaskHistory :history="history" />
  </div>
</template>

<style>
  .container {
    max-width: 90%;
    margin: auto;
    text-align: center;
  }
</style>
