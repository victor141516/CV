import '@picocss/pico/css/pico.classless.min.css'
import { ViteSSG } from 'vite-ssg/single-page'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import { preferredLanguage, texts } from './i18n'
import './index.scss'
import { useCapturePrint } from './utils/keyboard'

const i18n = createI18n({
  legacy: false,
  locale: preferredLanguage.value,
  messages: texts,
})

export const createApp = ViteSSG(App, ({ app, isClient }) => {
  app.use(i18n)
  if (isClient) {
    useCapturePrint()
  }
})
