import { createRouter, createWebHistory } from "vue-router";
import Forecast from "@/components/ui/forecast/Forecast.vue";
import TodoList from "@/pages/TodoList.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Forecast,
    },
    {
      path: '/todo',
      component: TodoList,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    }
  ],
});

export default router;