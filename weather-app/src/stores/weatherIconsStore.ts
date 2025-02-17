import {defineStore} from "pinia";

export const useWeatherIconStore = defineStore("weatherIcons", () => {
  
  const iconsMap = {
    "Clouds": "/src/assets/images/clouds.gif",
    "Rain": "/src/assets/images/rain.gif",
    "Clear": "/src/assets/images/sun.gif",
    "Storm": "/src/assets/images/storm.gif",
    "Night": "/src/assets/images/night.gif",
    "Foggy": "/src/assets/images/Foggy.gif",
    "Snow": "/src/assets/images/weather.gif"
  }
  
  return {
    iconsMap
  }
})