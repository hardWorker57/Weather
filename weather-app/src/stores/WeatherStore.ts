import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

const API_KEY = "12e8fe3be4e7d2c6712cb58cd55ec05f";

export const useWeatherStore = defineStore("weatherStore", () => {
  const city = ref<string>("");
  const hourlyForecast = ref<any[]>([]);
  const weatherRes = ref(null);

  async function fetchWeatherByCity(cityName: string) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );

      if (response.data.length === 0) {
        throw new Error("City not found");
      }

      const { lat, lon } = response.data[0];

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      weatherRes.value = weatherResponse.data;
      hourlyForecast.value = weatherResponse.data.list;
      city.value = cityName;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const weekendForecast = computed(() => {
    if (!hourlyForecast.value || hourlyForecast.value.length === 0) return [];
    const weekendData = hourlyForecast.value.filter((forecast) => {
      return forecast.dt_txt.includes("18:00:00");
    });
    weekendData.unshift(hourlyForecast.value[0]);

    return weekendData;
  });

  return {
    weatherRes,
    city,
    hourlyForecast,
    weekendForecast,
    fetchWeatherByCity,
  };
});