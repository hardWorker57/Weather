<script setup lang="ts">
	import { computed, onMounted, onUnmounted, ref } from 'vue';
	const isDayTheme = ref<boolean>(true)
  const formattedTime = ref<string>('');

	import { useThemeStore } from '../../stores/ThemeStore';
	import { RouterLink } from 'vue-router';
	const store = useThemeStore();

	const toggleTheme = () => {
		store.toggleTheme();
		isDayTheme.value = !isDayTheme.value;
	}

	const updateTime = () => {
		formattedTime.value = new Intl.DateTimeFormat('ru-RU', {
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date());
	};
	const formattedDate = computed(() => {
    return new Intl.DateTimeFormat('ru-RU', {
      month: 'short',
      day: '2-digit',
      weekday: 'short'
    }).format(new Date());
  });

	onMounted(() => {
		updateTime();
		const interval = setInterval(updateTime, 45000);
		onUnmounted(() => clearInterval(interval));
	});
</script>

<template>
	<div class="nav">
		<div class="nav_title">
			<RouterLink to="/">Прогноз погоды</RouterLink>
			<span>{{ formattedDate }} {{ formattedTime }}</span>
		</div>
		<div class="nav_title">
			<RouterLink to="/todo">Todo</RouterLink>
		</div>
		<div class="theme" @click="toggleTheme" v-if="isDayTheme"><font-awesome-icon :icon="['fas', 'sun']" size="2x"/></div>
		<div class="theme" @click="toggleTheme" v-else><font-awesome-icon :icon="['fas', 'moon']" size="2x"/></div>
	</div>
</template>

<style scoped>
	.nav {
		display: flex;
		align-items: start;
		gap: 1.3em;
		.nav_title {
			padding-top: 1rem;
			display: flex;
			align-items: flex-end;
			flex-direction: column;
			font-size: 2.2em;
			@media screen and (max-width: 768px) {
				
			}
			span {
				font-size: medium;
			}
		}
	}
	.theme {
		cursor: pointer;
		padding: 2rem .5rem .5rem .5rem;
	}
	@media screen and (max-width: 768px) {
		.nav {
			.nav_title {
				font-size: 1.5em;
			}
		}
	}
</style>