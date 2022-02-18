import { CV_PDF_URL } from './constants'

export function useCapturePrint() {
  const pressedKeys = new Set()

  function onChange(event: KeyboardEvent) {
    if (pressedKeys.has('Control') && pressedKeys.has('p')) {
      event.preventDefault()
      window.location.replace(CV_PDF_URL)
    }
  }

  window.addEventListener('keydown', (e) => {
    pressedKeys.add(e.key)
    onChange(e)
  })

  window.addEventListener('keyup', (e) => pressedKeys.delete(e.key))
}
