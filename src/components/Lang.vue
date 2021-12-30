<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import esFlag from '../assets/es-flag.png'
import enFlag from '../assets/en-flag.png'

const { locale } = useI18n()
const newLang = computed(() => ({ es: enFlag, en: esFlag }[locale.value]))
const changeLocale = () => {
  const newLocale = { es: 'en', en: 'es' }[locale.value]!
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
    <img
      @click="changeLocale"
      :src="newLang"
      class="transition-transform hover:translate-y-1 hover:scale-110 hover:rotate-6"
    />
  </div>
</template>
