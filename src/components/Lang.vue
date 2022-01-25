<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

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
</script>

<template>
  <div class="cursor-pointer flex aspect-auto w-12">
    <picture
      @click="changeLocale"
      :alt="`${swapDirection[locale]} flag`"
      class="transition-transform hover:translate-y-1 hover:scale-110 hover:rotate-6"
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
</template>
