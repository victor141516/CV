<script setup lang="ts">
import { DateTime } from 'luxon'
import { useI18n } from 'vue-i18n'
import { Repos } from '../sections/StuffMade.vue'

const props = defineProps<{
  repos: Repos
  features: Record<string, number>
}>()
const FEATURES = props.features
const repos = props.repos

const featureNames = {
  [FEATURES.TSF]: 'TypeScript',
  [FEATURES.Vue]: 'Vue.js',
  [FEATURES.TSB]: 'TypeScript',
  [FEATURES.Node]: 'Node.js',
  [FEATURES.Python]: 'Python',
  [FEATURES.Docker]: 'Docker',
}

const formatDate = (ts: number) => {
  const { years, months, days } = DateTime.now()
    .diff(DateTime.fromMillis(ts * 1000), ['days', 'months', 'years'])
    .toObject()
  let unit = days === 1 ? 'day' : 'days'
  let n = days
  if (years! > 0) [unit, n] = [years === 1 ? 'year' : 'years', years]
  else if (months! > 0) [unit, n] = [months === 1 ? 'month' : 'months', months]
  return t('home.stuffMade.dateTemplate', {
    n: Math.round(n!),
    unit: t(`home.stuffMade.${unit}`),
    ago: t('home.stuffMade.ago'),
  })
}

const { t } = useI18n()
</script>

<template>
  <div class="py-12 flex flex-col">
    <h2 class="text-2xl text-center font-bold">{{ t('home.stuffMade.title') }}</h2>
    <div class="flex flex-row flex-nowrap overflow-x-auto snap-x px-[10vw]">
      <article v-for="repo in repos" class="snap-center min-w-[75vw] min-h-max mx-2">
        <header class="mb-0 py-1 flex items-center">
          <a class="flex-1 flex items-center" target="_blank" :href="repo.url"
            ><div class="rounded-social-buttons scale-50">
              <span class="bg-transparent"
                ><span class="social-button github hover:!transform-none before:text-[65px]"></span
              ></span>
            </div>
            <span>{{ repo.name }}</span></a
          >
          <span class="text-sm ml-2">{{ formatDate(repo.date) }}</span>
        </header>
        <div class="pt-4 flex flex-col h-full">
          <p v-html="t(`home.stuffMade.descriptions.${repo.name}`)"></p>
          <div class="flex pb-4 mt-auto ml-auto">
            <span class="bg-slate-600 rounded-sm px-1 text-sm mx-1" v-for="feature in repo.features">{{
              featureNames[feature]
            }}</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
