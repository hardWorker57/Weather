<script setup lang="ts">
import { useWeatherStore } from '@/stores/WeatherStore';
import { onMounted, ref } from 'vue';
import debounce from 'lodash/debounce';


	const weatherStore = useWeatherStore();
	const searchCity = ref<string>('');
	const search = debounce(async () => {
		if(searchCity.value.trim()) {
			await weatherStore.fetchWeatherByCity(searchCity.value);
		}
	}, 600);
	onMounted(() => {
		searchCity.value = 'Bishkek';
		search();
	});

</script>

<template>
	<div class="search">
		<div class="search_icon"><font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2x" /></div>
		<input type="search" @input="search" v-model="searchCity" placeholder="Искать город...">
	</div>
</template>

<style scoped>
  .search {
		display: flex;
		align-items: center;
		gap: .6rem;
    background-color: var(--color-background-mute);
		padding: .5rem 1.5rem;
		border-radius: 2rem;
		transition: all 0.2s ease;
		
		.search_icon {
			cursor: pointer;
		}
		input {
			color: var(--color-text);
			padding: .5rem 0;
			outline: none;
			font-size: large;
			border: none;
			background-color: transparent;
		}
	}
	.search:hover {
		background-color: var(--color-border);
	}
	@media screen and (max-width: 768px) {
		.search {
			padding: .5rem 1rem;
			input {
				font-size: small;
				max-width: 5em;
			}
		}
	}
</style>