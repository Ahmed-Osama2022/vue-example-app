<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <RouterLink to="/" class="flex items-center gap-2 font-bold tracking-tight">
          <span class="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-400 to-emerald-400"></span>
          Example
        </RouterLink>
        <div class="flex items-center gap-6 text-sm">
          <RouterLink to="/" class="text-slate-400 transition hover:text-white">Home</RouterLink>
          <RouterLink
            to="/about"
            class="rounded-lg bg-white/10 px-4 py-2 font-medium text-white transition hover:bg-white/20"
          >
            About
          </RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
