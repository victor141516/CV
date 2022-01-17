import { ref } from 'vue'

export const height = ref(window.innerHeight)
export const width = ref(window.innerWidth)
const reset = () => {
  if (window.innerHeight !== height.value) height.value = window.innerHeight
  if (width.value !== window.innerWidth) width.value = window.innerWidth
}
window.addEventListener('resize', reset)
