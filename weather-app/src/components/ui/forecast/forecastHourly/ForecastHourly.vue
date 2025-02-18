<script setup lang="ts">
  import { useWeatherIconStore } from '@/stores/weatherIconsStore';
  import { useWeatherStore } from '@/stores/WeatherStore';
  import { ref } from 'vue';
import SlideIn from '../../animations/SlideIn.vue';
  
  const hoursData = ref([1, 2, 3, 4, 5, 6, 7]);
  const weatherStore = useWeatherStore();
  const weatherIconStore = useWeatherIconStore();
  type WeatherMainType = 'Clouds' | 'Rain' | 'Clear' | 'Storm' | 'Night' | 'Foggy' | 'Snow';

</script>

<template>
  <div class="forecast_hourly">
    <SlideIn v-for="hour in hoursData" :key="hour" :delay="hour * 0.1" class="forecast_hourly_item">
      <div class="forecast_hourly_date">{{ new Date(weatherStore?.hourlyForecast[hour]?.dt * 1000).getHours() }}:00</div>
      <div class="forecast_hourly_icon">
        <!-- <img :src="weatherIconStore?.iconsMap[(weatherStore?.hourlyForecast[hour]?.weather[0]?.main as WeatherMainType)]" alt="icon"> -->
        <img src="/src/assets/images/clouds.gif" alt="icon">
      </div>
      <div class="forecast_hourly_temp">{{ Math.round(weatherStore?.hourlyForecast[hour]?.main?.temp) }}°</div>
    </SlideIn>
  </div>
</template>

<style scoped>
  .forecast_hourly {
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: .8rem;
    
    .forecast_hourly_item {
      color: white;
      display: flex;
      gap: .4rem;
      flex-direction: column;
      align-items: center;
      padding: .9rem 1.5rem;
      border-radius: 2rem;
      background-color: var(--color-heading);
      cursor: pointer;
      transition: all 0.3s ease;
      
      .forecast_hourly_icon {
        img {
          max-width: 4rem;
          background: transparent;
        }
      }
    }
    .forecast_hourly_item:hover {
      transform: scale(1.1);
    }
  }
</style>