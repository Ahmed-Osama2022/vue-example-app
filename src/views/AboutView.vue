<script setup>
const stats = [
  { value: '2021', label: 'Founded' },
  { value: '12k+', label: 'Happy users' },
  { value: '40+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
]

const values = [
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Move fast',
    text: 'We ship small, focused improvements every week instead of waiting for the perfect release.',
  },
  {
    icon: 'M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z',
    title: 'Stay simple',
    text: 'Great tools get out of the way. We obsess over removing steps, not adding them.',
  },
  {
    icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a3 3 0 11-3-3',
    title: 'Build together',
    text: 'Our roadmap is shaped in the open. Customers are our best product managers.',
  },
  {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Earn trust',
    text: 'Privacy first, no dark patterns, and a clear price. Your data stays yours.',
  },
]

const milestones = [
  { year: '2021', title: 'A weekend prototype', text: 'Two friends, one laptop, and a spreadsheet full of complaints about clunky tools.' },
  { year: '2022', title: 'First 1,000 users', text: 'Launched publicly and grew entirely through word of mouth.' },
  { year: '2024', title: 'The team grows', text: 'A small remote team across three time zones, still shipping every week.' },
  { year: '2026', title: 'Here and now', text: 'Over 12,000 teams use the product to do their best work.' },
]

const team = [
  { name: 'Amara Okafor', role: 'Co-founder & CEO', initials: 'AO', color: 'from-rose-400 to-orange-400' },
  { name: 'Liam Chen', role: 'Co-founder & CTO', initials: 'LC', color: 'from-sky-400 to-indigo-500' },
  { name: 'Sofia Marchetti', role: 'Head of Design', initials: 'SM', color: 'from-emerald-400 to-teal-500' },
  { name: 'Noah Williams', role: 'Lead Engineer', initials: 'NW', color: 'from-violet-400 to-fuchsia-500' },
]
</script>

<template>
  <div class="bg-slate-950 text-slate-100">
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
          About us
        </span>

        <h1 class="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          We build tools that
          <span class="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            get out of the way
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          A small, independent team on a simple mission: make everyday work feel lighter.
          No bloat, no noise — just software that does its job well.
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <RouterLink
            to="/"
            class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Try the product
          </RouterLink>
          <a
            href="mailto:hello@example.com"
            class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
          >
            Say hello
          </a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="border-y border-white/10 bg-white/[0.03]">
      <dl class="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-10 sm:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="px-4 py-4 text-center">
          <dt class="text-3xl font-bold tracking-tight text-white">{{ stat.value }}</dt>
          <dd class="mt-1 text-sm text-slate-400">{{ stat.label }}</dd>
        </div>
      </dl>
    </section>

    <!-- Mission -->
    <section class="mx-auto max-w-6xl px-6 py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Our mission</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Software should feel like a good colleague
          </h2>
          <p class="mt-6 leading-relaxed text-slate-400">
            Most tools ask for more than they give back: more setup, more tabs, more meetings.
            We started this company because we believed the opposite was possible — a product that
            quietly handles the busywork so people can focus on the part only they can do.
          </p>
          <p class="mt-4 leading-relaxed text-slate-400">
            Today that idea is used by teams in more than forty countries. We're still independent,
            still profitable, and still shipping every single week.
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
              “The best compliment we get is that people forget the product is there.
              That's the whole design goal.”
            </blockquote>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-orange-400 text-sm font-bold text-white"
              >
                AO
              </div>
              <div>
                <p class="text-sm font-semibold text-white">Amara Okafor</p>
                <p class="text-xs text-slate-400">Co-founder & CEO</p>
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
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">What we believe</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Four rules we don't break</h2>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2">
          <div
            v-for="value in values"
            :key="value.title"
            class="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-indigo-400/40 hover:bg-slate-900"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500/20"
            >
              <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
                <path
                  :d="value.icon"
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
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Our story</p>
      <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From side project to daily habit</h2>

      <ol class="mt-12 space-y-8 border-l border-white/10 pl-8">
        <li v-for="item in milestones" :key="item.year" class="relative">
          <span
            class="absolute -left-[2.35rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-indigo-400 ring-4 ring-slate-950"
          ></span>
          <div class="flex flex-wrap items-baseline gap-3">
            <span class="text-sm font-mono font-semibold text-indigo-400">{{ item.year }}</span>
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
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">The people</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Small team, big care</h2>
          <p class="mt-4 text-slate-400">
            Remote by default, curious by nature. These are the faces behind the product.
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="person in team"
            :key="person.name"
            class="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white"
              :class="person.color"
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
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Let's make work feel lighter</h2>
          <p class="mx-auto mt-4 max-w-xl text-slate-300">
            Questions, ideas, or just want to chat? We read every message and usually reply within a day.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              hello@example.com
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
      <p class="text-center text-sm text-slate-500">
        © {{ new Date().getFullYear() }} Example Inc. Built with Vue and Tailwind CSS.
      </p>
    </footer>
  </div>
</template>
