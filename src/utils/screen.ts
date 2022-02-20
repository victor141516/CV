import { ref, watch } from 'vue'

export const height = ref(window.innerHeight)
export const width = ref(window.innerWidth)
const reset = () => {
  if (window.innerHeight !== height.value) height.value = window.innerHeight
  if (width.value !== window.innerWidth) width.value = window.innerWidth
}
window.addEventListener('resize', reset)

const darkMode = ref(true)
export function useDarkMode() {
  const localStorageDarkMode = localStorage.getItem('dark-mode')
  if (!localStorageDarkMode) {
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    localStorage.setItem('dark-mode', preferredDark ? 'true' : 'false')
  }
  darkMode.value = localStorage.getItem('dark-mode') === 'true'
  watch(
    darkMode,
    () => {
      localStorage.setItem('dark-mode', darkMode.value ? 'true' : 'false')
      document.body.classList.toggle('dark', darkMode.value)
      document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light')
    },
    { immediate: true },
  )
  return darkMode
}
