<script setup lang="ts">
  import { ref, computed } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Autoplay } from "swiper/modules";
  import 'swiper/css';
  import 'swiper/css/navigation';
  import type { Swiper as SwiperInstance } from "swiper";
  import { useWeatherStore } from "@/stores/WeatherStore";
import FadeIn from "../../animations/FadeIn.vue";
  
  const swiperRef = ref<SwiperInstance | null>(null);
  const weatherStore = useWeatherStore();

  const weekendForecast = computed(() => weatherStore.weekendForecast);
</script>

<template>
  <FadeIn :delay="2" class="forecast_slider">
    <button class="swiper-button-prev"></button>
    <button class="swiper-button-next"></button>
    <swiper
      ref="swiperRef"
      :modules="[Navigation, Autoplay]"
      class="forecast_slider_swiper"
      :slides-per-view="1"
      :space-between="50"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :loop="true"
      :autoplay="{
        delay: 5000,
      }"
    >
      <swiper-slide :key="forecast.dt" v-for="forecast in weekendForecast" class="forecast_slide">
        <div class="forecast_location">
          <h3> {{ weatherStore?.city }}</h3>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <p>
            {{ forecast?.weather[0].main === "Clouds" ? "Облачно" : forecast?.weather[0].main }}
          </p>
        </div>
        <div class="forecast_temperature">
          <font-awesome-icon :icon="['fas', 'temperature-three-quarters']" />
          <p>{{ Math.round(forecast?.main.temp) }}°C</p>
          <div class="forecast_icon"></div>
        </div>
        <div class="forecast_date">
          <p>{{ new Date(forecast.dt * 1000).toLocaleDateString("ru-RU", { weekday: "short", day: "numeric", month: "short" }) }}</p>
        </div>
        <div class="forecast_parameters">
          <div class="forecast_parameter">
            <p>Влажность</p>
            <p>{{ Math.round(forecast?.main.humidity) }}%</p>
          </div>
          <div class="forecast_parameter">
            <p>Видимость</p>
            <p>{{ Math.round(forecast?.visibility)/1000 }}км</p>
          </div>
          <div class="forecast_parameter">
            <p>Давление</p>
            <p>{{ Math.round(forecast?.main.pressure) }}гПа</p>
          </div>
          <div class="forecast_parameter">
            <p>Ветер</p>
            <p>{{ Math.round(forecast?.wind.speed) }}м/с</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </FadeIn>
</template>

<style scoped>
  .forecast_slider {
    min-height: 32rem;
    width: min(95%, 55rem);
    margin-inline: auto;
    
    .forecast_slider_swiper {
      padding: 4rem 2rem;
    }
    .forecast_slide {
      color: white;
      min-height: 24rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 2rem;
      transition: all 0.4s ease;
      cursor: pointer;
      padding: 2rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: var(--color-background-image);
      
      .forecast_location {
        font-size: 1.8em;
        display: flex;
        gap: .5em;
        align-items: center;
      }
      .forecast_temperature {
        display: flex;
        font-size: 2.8em;
        justify-content: center;
        gap: .5em;
        align-items: center;
      }
      .forecast_date {
        font-size: 1.4em;
      }
      .forecast_parameters {
        padding-inline: 3em;
        display: flex;
        justify-content: space-between;
        .forecast_parameter {
          font-size: 1.5em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
    .forecast_slide:hover {
      background-position: right;
      transform: scale(1.04) skewY(3deg);
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: transparent;
      color: var(--color-text);
      border: none;
      padding: 10px 15px;
      cursor: pointer;
    }
    .swiper-button-prev {
      left: 17vw;
    }
    .swiper-button-next {
      right: 17vw;
    }
  }
  @media screen and (max-width: 768px) {
    .forecast_slider {
      .forecast_slide {
        padding-inline: .5rem;
        width: 100%;
        .forecast_parameters {
          .forecast_parameter {
            font-size: 1.2em;
          }
        }
      }
    }
  }
</style>