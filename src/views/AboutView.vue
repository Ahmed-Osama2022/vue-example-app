<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import api from '@/lib/api'

const about = ref(null)
const loading = ref(true)
const error = ref('')

const endpoint = `${api.defaults.baseURL}/about`

const email = computed(() => about.value?.contact?.email ?? '')
const mailtoHref = computed(() => (email.value ? `mailto:${email.value}` : '#'))

// Static maps so Tailwind can see the class names at build time.
const icons = {
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  clock: 'M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z',
  users:
    'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a3 3 0 11-3-3',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
}

const avatarColors = {
  rose: 'from-rose-400 to-orange-400',
  sky: 'from-sky-400 to-indigo-500',
  emerald: 'from-emerald-400 to-teal-500',
  violet: 'from-violet-400 to-fuchsia-500',
}

function iconPath(name) {
  return icons[name] ?? icons.bolt
}

function avatarColor(name) {
  return avatarColors[name] ?? 'from-slate-500 to-slate-700'
}

function describeError(err) {
  if (!err.response) {
    return 'Could not reach the server. Make sure the API is running, then try again.'
  }

  if (err.response.status === 404) {
    return 'The about endpoint was not found (404). Check the API base URL.'
  }

  if (err.response.status >= 500) {
    return `The server ran into a problem (${err.response.status}). Please try again in a moment.`
  }

  return `Request failed with status ${err.response.status}.`
}

async function loadAbout() {
  loading.value = true
  error.value = ''

  try {
    const { data } = await api.get('/about')
    // Accept either { data: {...} } or a bare object.
    about.value = data.data ?? data
    if (about.value?.meta?.title) document.title = about.value.meta.title
  } catch (err) {
    about.value = null
    error.value = describeError(err)
  } finally {
    loading.value = false
  }
}

onMounted(loadAbout)
</script>

<template>
  <div class="bg-slate-950 text-slate-100">
    <!-- Loading skeleton -->
    <div v-if="loading" class="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32" aria-busy="true">
      <div class="flex flex-col items-center">
        <div class="h-6 w-28 animate-pulse rounded-full bg-white/5"></div>
        <div class="mt-8 h-12 w-full max-w-2xl animate-pulse rounded-xl bg-white/5"></div>
        <div class="mt-3 h-12 w-2/3 max-w-md animate-pulse rounded-xl bg-white/5"></div>
        <div class="mt-6 h-4 w-full max-w-xl animate-pulse rounded bg-white/5"></div>
        <div class="mt-2 h-4 w-4/5 max-w-lg animate-pulse rounded bg-white/5"></div>
        <div class="mt-10 flex gap-3">
          <div class="h-11 w-36 animate-pulse rounded-xl bg-white/10"></div>
          <div class="h-11 w-32 animate-pulse rounded-xl bg-white/5"></div>
        </div>
      </div>
      <div class="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div v-for="n in 4" :key="n" class="h-20 animate-pulse rounded-xl bg-white/5"></div>
      </div>
      <div class="mt-20 grid gap-12 lg:grid-cols-2">
        <div class="space-y-4">
          <div class="h-4 w-24 animate-pulse rounded bg-white/5"></div>
          <div class="h-8 w-3/4 animate-pulse rounded bg-white/5"></div>
          <div class="h-4 w-full animate-pulse rounded bg-white/5"></div>
          <div class="h-4 w-5/6 animate-pulse rounded bg-white/5"></div>
        </div>
        <div class="h-64 animate-pulse rounded-3xl bg-white/5"></div>
      </div>
      <span class="sr-only">Loading about page…</span>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div class="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center">
        <div
          class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400"
        >
          <svg viewBox="0 0 24 24" fill="none" class="h-7 w-7">
            <path
              d="M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1 class="mt-6 text-xl font-semibold text-white">We couldn't load this page</h1>
        <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ error }}</p>
        <p class="mt-3 break-all font-mono text-xs text-slate-600">GET {{ endpoint }}</p>
        <button
          type="button"
          class="mt-8 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          @click="loadAbout"
        >
          Try again
        </button>
      </div>
    </div>

    <!-- Content -->
    <template v-else-if="about">
      <!-- Hero -->
      <section class="relative overflow-hidden">
        <div
          class="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
        ></div>
        <div
          class="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
        ></div>

        <div class="relative mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pt-32">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            {{ about.hero.badge }}
          </span>

          <h1 class="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {{ about.hero.title }}
            <span
              class="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent"
            >
              {{ about.hero.highlight }}
            </span>
          </h1>

          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {{ about.hero.description }}
          </p>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
            <RouterLink
              :to="about.hero.primaryCta.to"
              class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              {{ about.hero.primaryCta.label }}
            </RouterLink>
            <a
              :href="mailtoHref"
              class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              {{ about.hero.secondaryCta.label }}
            </a>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="border-y border-white/10 bg-white/[0.03]">
        <dl class="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-10 sm:grid-cols-4">
          <div v-for="stat in about.stats" :key="stat.label" class="px-4 py-4 text-center">
            <dt class="text-3xl font-bold tracking-tight text-white">{{ stat.value }}</dt>
            <dd class="mt-1 text-sm text-slate-400">{{ stat.label }}</dd>
          </div>
        </dl>
      </section>

      <!-- Mission -->
      <section class="mx-auto max-w-6xl px-6 py-24">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              {{ about.mission.eyebrow }}
            </p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {{ about.mission.title }}
            </h2>
            <p
              v-for="paragraph in about.mission.paragraphs"
              :key="paragraph"
              class="mt-6 leading-relaxed text-slate-400"
            >
              {{ paragraph }}
            </p>
          </div>

          <div class="relative">
            <div
              class="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-emerald-500/20 blur-2xl"
            ></div>
            <div class="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur">
              <svg viewBox="0 0 24 24" fill="none" class="h-10 w-10 text-indigo-400">
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 01-4-.84L3 20l1.2-3.6A7.9 7.9 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <blockquote class="mt-6 text-xl font-medium leading-relaxed text-slate-200">
                “{{ about.mission.quote.text }}”
              </blockquote>
              <div class="mt-6 flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-orange-400 text-sm font-bold text-white"
                >
                  {{ about.mission.quote.initials }}
                </div>
                <div>
                  <p class="text-sm font-semibold text-white">{{ about.mission.quote.author }}</p>
                  <p class="text-xs text-slate-400">{{ about.mission.quote.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="border-t border-white/10 bg-white/[0.02] py-24">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              {{ about.valuesSection.eyebrow }}
            </p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {{ about.valuesSection.title }}
            </h2>
          </div>

          <div class="mt-12 grid gap-6 sm:grid-cols-2">
            <div
              v-for="value in about.values"
              :key="value.title"
              class="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-indigo-400/40 hover:bg-slate-900"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500/20"
              >
                <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
                  <path
                    :d="iconPath(value.icon)"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="mt-5 text-lg font-semibold text-white">{{ value.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ value.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="mx-auto max-w-6xl px-6 py-24">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          {{ about.timelineSection.eyebrow }}
        </p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ about.timelineSection.title }}
        </h2>

        <ol class="mt-12 space-y-8 border-l border-white/10 pl-8">
          <li v-for="item in about.timeline" :key="item.year" class="relative">
            <span
              class="absolute -left-[2.35rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-indigo-400 ring-4 ring-slate-950"
            ></span>
            <div class="flex flex-wrap items-baseline gap-3">
              <span class="font-mono text-sm font-semibold text-indigo-400">{{ item.year }}</span>
              <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
            </div>
            <p class="mt-1 max-w-2xl text-sm leading-relaxed text-slate-400">{{ item.text }}</p>
          </li>
        </ol>
      </section>

      <!-- Team -->
      <section class="border-t border-white/10 bg-white/[0.02] py-24">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              {{ about.teamSection.eyebrow }}
            </p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {{ about.teamSection.title }}
            </h2>
            <p class="mt-4 text-slate-400">{{ about.teamSection.description }}</p>
          </div>

          <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="person in about.team"
              :key="person.name"
              class="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center transition hover:-translate-y-1 hover:border-white/20"
            >
              <div
                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white"
                :class="avatarColor(person.avatarColor)"
              >
                {{ person.initials }}
              </div>
              <h3 class="mt-4 font-semibold text-white">{{ person.name }}</h3>
              <p class="mt-1 text-sm text-slate-400">{{ person.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="mx-auto max-w-6xl px-6 py-24">
        <div
          class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-emerald-600/10 px-8 py-16 text-center"
        >
          <div
            class="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl"
          ></div>
          <div class="relative">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ about.cta.title }}</h2>
            <p class="mx-auto mt-4 max-w-xl text-slate-300">{{ about.cta.description }}</p>
            <div class="mt-8 flex flex-wrap justify-center gap-3">
              <a
                :href="mailtoHref"
                class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                {{ email }}
              </a>
              <RouterLink
                to="/"
                class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Back home
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <footer class="border-t border-white/10 py-8">
        <p class="text-center text-sm text-slate-500">{{ about.contact.footerNote }}</p>
      </footer>
    </template>
  </div>
</template>
