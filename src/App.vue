<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RouteLoadingBar from '@/components/RouteLoadingBar.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <RouteLoadingBar />

    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <RouterLink
          to="/"
          class="flex items-center gap-2 font-bold tracking-tight transition hover:opacity-80"
        >
          <span class="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-400 to-emerald-400"></span>
          Example
        </RouterLink>

        <div class="flex items-center gap-1">
          <RouterLink v-slot="{ href, navigate, isExactActive }" to="/" custom>
            <a
              :href="href"
              :aria-current="isExactActive ? 'page' : undefined"
              class="rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              :class="
                isExactActive
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              "
              @click="navigate"
            >
              Home
            </a>
          </RouterLink>

          <RouterLink v-slot="{ href, navigate, isActive }" to="/about" custom>
            <a
              :href="href"
              :aria-current="isActive ? 'page' : undefined"
              class="rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              :class="
                isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
              "
              @click="navigate"
            >
              About
            </a>
          </RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
