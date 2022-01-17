<script setup lang="ts">
import { DateTime } from 'luxon'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Repos } from '../sections/StuffMade.vue'

const props = defineProps<{
  repos: Repos
  features: Record<string, number>
}>()
const repos = props.repos

const { t } = useI18n()

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

const showingTier = ref(1)
const showMoreTier = () => (showingTier.value += 1)
const descriptionIndexToShow = ref<number | null>(null)
</script>

<template>
  <div class="py-12 flex flex-col items-center justify-center">
    <h2 class="text-2xl font-bold">{{ t('home.stuffMade.title') }}</h2>

    <div class="mt-4 grid grid-cols-[3fr_2fr_repeat(6,1fr)] xl:w-2/3">
      <span class="flex items-center justify-center row-span-2 border-r border-white">{{
        t('home.stuffMade.project')
      }}</span>
      <span class="flex items-center justify-center row-span-2">{{ t('home.stuffMade.date') }}</span>
      <span class="flex items-center justify-center col-span-2 border-b border-r border-white">Frontend</span>
      <span class="flex items-center justify-center col-span-4 border-b border-white">Backend</span>
      <span class="flex items-center justify-center col-start-3 border-r border-white">TypeScript</span>
      <span class="flex items-center justify-center border-r border-white px-4">Vue.js</span>
      <span class="flex items-center justify-center border-r border-white">TypeScript</span>
      <span class="flex items-center justify-center border-r border-white">Node.js</span>
      <span class="flex items-center justify-center border-r border-white">Python</span>
      <span class="flex items-center justify-center">Docker</span>

      <template v-for="tierLoop in 3">
        <template
          v-for="({ name, url, date, features }, index) in repos.filter(
            (e) => e.tier === tierLoop && tierLoop <= showingTier,
          )"
          class="flex flex-col"
        >
          <div class="col-start-1 flex items-center">
            <a class="flex-1 flex items-center justify-center" target="_blank" :href="url">
              <div class="rounded-social-buttons scale-50">
                <span class="bg-transparent"
                  ><span class="social-button github hover:!transform-none before:text-[65px]"></span
                ></span>
              </div>
              <span class="w-0 flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{{ name }}</span>
            </a>
            <div
              @mouseover="descriptionIndexToShow = index"
              @mouseleave="descriptionIndexToShow = null"
              class="relative"
            >
              <i class="px-2 fas fa-info-circle cursor-pointer"></i>
              <div class="pl-2 absolute top-[-150%] left-[100%]" v-if="descriptionIndexToShow === index">
                <div class="p-2 bg-slate-400 rounded-md shadow-lg shadow-slate-800 w-64">
                  <p class="text-gray-900" v-html="t(`home.stuffMade.descriptions.${name}`)"></p>
                </div>
              </div>
            </div>
          </div>
          <span class="flex items-center justify-center">{{ formatDate(date) }}</span>
          <span class="flex items-center justify-center" v-for="i in 6">{{ features!.includes(i) ? '✅' : '' }}</span>
        </template>
      </template>
    </div>
    <div v-if="showingTier !== 3" class="mt-4 flex items-center justify-center cursor-pointer" @click="showMoreTier">
      <i class="fas fa-chevron-circle-down text-4xl"></i><span class="ml-4">{{ t('home.stuffMade.showMore') }}</span>
    </div>
  </div>
</template>
