import {defineStore} from "pinia";

export const useWeatherIconStore = defineStore("weatherIcons", () => {
  
  const iconsMap = {
    "Clouds": "@/assets/images/clouds.gif",
    "Rain": "@/assets/images/rain.gif",
    "Clear": "@/assets/images/sun.gif",
    "Storm": "@/assets/images/storm.gif",
    "Night": "@/assets/images/night.gif",
    "Foggy": "@/assets/images/Foggy.gif",
    "Snow": "@/assets/images/weather.gif"
  }
  
  return {
    iconsMap
  }
})