<script setup>
import { useLoading } from '@/composables/useLoading'

const { visible } = useLoading()
</script>

<template>
  <Transition name="loading-bar">
    <div
      v-if="visible"
      class="fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-indigo-500/20"
      role="progressbar"
      aria-label="Loading"
    >
      <div class="loading-bar__fill"></div>
    </div>
  </Transition>
</template>

<style scoped>
.loading-bar__fill {
  position: absolute;
  inset: 0;
  width: 40%;
  background: linear-gradient(90deg, #818cf8, #22d3ee, #34d399);
  box-shadow: 0 0 10px rgba(129, 140, 248, 0.8);
  animation: loading-slide 1.1s ease-in-out infinite;
}

@keyframes loading-slide {
  0% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(360%);
  }
}

.loading-bar-enter-active,
.loading-bar-leave-active {
  transition: opacity 200ms ease;
}

.loading-bar-enter-from,
.loading-bar-leave-to {
  opacity: 0;
}
</style>
