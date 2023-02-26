<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDarkMode } from '../utils/screen'

const { locale } = useI18n()
const swapDirection = { es: 'en', en: 'es' } as Record<string, string>
const changeLocale = () => {
  const newLocale = swapDirection[locale.value]!
  locale.value = newLocale
}
watch(
  locale,
  () => {
    document.children[0].setAttribute('lang', locale.value)
  },
  { immediate: true },
)

const darkMode = useDarkMode()
</script>

<template>
  <div class="flex items-center">
    <div class="cursor-pointer flex aspect-auto mr-2">
      <span class="text-xl select-none" @click="darkMode = !darkMode">{{ darkMode ? '🌞' : '🌚' }}</span>
    </div>
    <div class="cursor-pointer flex aspect-auto w-12">
      <picture
        @click="changeLocale"
        :alt="`${swapDirection[locale]} flag`"
        class="select-none"
        height="40"
        width="40"
        loading="lazy"
      >
        <source :srcset="`/${swapDirection[locale]}-flag.webp`" type="image/webp" />
        <source :srcset="`/${swapDirection[locale]}-flag.png`" type="image/png" />
        <img
          :src="`/${swapDirection[locale]}-flag.png`"
          :alt="`${swapDirection[locale]} flag`"
          height="40"
          width="40"
          loading="lazy"
        />
      </picture>
    </div>
  </div>
</template>
