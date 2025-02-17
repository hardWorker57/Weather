import { defineStore } from "pinia";

interface WeatherState {
  theme: string;
}

export const useThemeStore = defineStore("weather", {
  state: (): WeatherState => ({
    theme: localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      document.documentElement.setAttribute("data-theme", this.theme);
    },
  },
});