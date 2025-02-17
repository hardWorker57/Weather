import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faHome, faMagnifyingGlass, faSun, faMoon, faLocationDot, faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons"

library.add(faHome, faMagnifyingGlass, faSun, faMoon, faLocationDot, faTemperatureThreeQuarters)

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.documentElement.setAttribute('data-theme', 'light');
}

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
