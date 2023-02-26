import { ViteSSG } from 'vite-ssg/single-page'
import { createI18n } from 'vue-i18n'
import '@picocss/pico/css/pico.classless.min.css'

import './index.scss'
import App from './App.vue'
import { texts, preferredLanguage } from './i18n'
import { useCapturePrint } from './utils/keyboard'

const i18n = createI18n({
  legacy: false,
  locale: preferredLanguage.value,
  messages: texts,
})

export const createApp = ViteSSG(App, ({ app, isClient }) => {
  app.use(i18n)
  if (isClient) useCapturePrint()
})
