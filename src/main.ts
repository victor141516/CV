import { createApp } from 'vue'
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

const app = createApp(App)
app.use(i18n)
app.mount('#app')

useCapturePrint()
