<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';

  const props = defineProps<{ delay?: number }>();

  const elementRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (elementRef.value) {
      gsap.fromTo(
        elementRef.value,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, ease: 'ease', delay: props.delay || .5 }
      );
    }
  });
</script>

<template>
  <div ref="elementRef">
    <slot></slot>
  </div>
</template>
