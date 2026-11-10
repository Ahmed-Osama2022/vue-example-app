<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
    <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
      Welcome to
      <span class="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Example</span>
    </h1>
    <p class="mt-6 max-w-xl text-lg text-slate-400">
      A small demo app built with Vue 3, Vue Router, and Tailwind CSS.
    </p>
    <RouterLink
      to="/about"
      class="mt-10 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
    >
      Learn about us
    </RouterLink>
  </section>
</template>
