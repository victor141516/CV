import { useDark, useWindowSize } from '@vueuse/core'

export const { width, height } = useWindowSize()

const darkMode = useDark({
  onChanged(dark: boolean) {
    if (typeof window !== 'undefined') {
      const htmlElement = document.documentElement
      htmlElement.setAttribute('data-theme', dark ? 'dark' : 'light')
      htmlElement.classList.toggle('dark', dark)
    }
  },
})
export const useDarkMode = () => darkMode
