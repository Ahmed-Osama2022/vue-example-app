import { computed, reactive, ref } from 'vue'

/**
 * Shared loading state.
 *
 * Any part of the app can start/stop loading with a key. Multiple operations
 * (route navigation, API requests, etc.) can overlap; the loading UI stays
 * visible until the last one finishes.
 *
 *   const { start, stop } = useLoading()
 *   const key = start('something')
 *   ...
 *   stop(key)
 */
const active = reactive(new Set())

const MIN_VISIBLE_TIME = 350
const HIDE_DELAY = 150

const visible = ref(false)
let visibleSince = 0
let hideTimer = null

function clearHideTimer() {
  if (hideTimer !== null) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}

export function useLoading() {
  const isLoading = computed(() => active.size > 0)

  function start(key = Symbol('loading')) {
    clearHideTimer()
    active.add(key)

    if (!visible.value) {
      visible.value = true
      visibleSince = Date.now()
    }

    return key
  }

  function stop(key) {
    if (key !== undefined) active.delete(key)
    if (active.size > 0) return

    // Keep the bar on screen briefly so quick navigations don't flash.
    const elapsed = Date.now() - visibleSince
    const wait = Math.max(0, MIN_VISIBLE_TIME - elapsed) + HIDE_DELAY

    clearHideTimer()
    hideTimer = setTimeout(() => {
      hideTimer = null
      if (active.size === 0) visible.value = false
    }, wait)
  }

  return { isLoading, visible, start, stop }
}
