<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const lines = computed(() => new Array(5).fill(null).map((_, i) => t(`home.aboutMe.lines.${i}`)))
</script>

<template>
  <div class="py-12 flex flex-col items-center justify-center">
    <h2 class="text-2xl font-bold">{{ t('home.aboutMe.title') }}</h2>
    <div class="mt-4 text-center">
      <p v-for="line in lines">{{ line }}</p>
    </div>
  </div>
</template>
