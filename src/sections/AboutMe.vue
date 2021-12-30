<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const lines = computed(() => new Array(5).fill(null).map((_, i) => t(`home.aboutMe.lines.${i}`)))
</script>

<template>
  <div class="py-12 bg-sky-600 flex flex-col items-center justify-center">
    <h2 class="text-2xl font-bold !text-gray-100">{{ t('home.aboutMe.title') }}</h2>
    <div class="mt-2 text-center">
      <p class="!text-gray-100" v-for="line in lines">{{ line }}</p>
    </div>
  </div>
</template>
