<script setup lang="ts">
import { DateTime } from 'luxon'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const FEATURES = {
  TSF: 1,
  Vue: 2,
  TSB: 3,
  Node: 4,
  Python: 5,
  Docker: 6,
}

const repos = [
  {
    name: 'telepyzza',
    url: 'https://github.com/victor141516/telepyzza',
    date: 1525392000,
    features: [FEATURES.Python, FEATURES.Docker],
    tier: 1,
  },
  {
    name: 'NodeSession',
    url: 'https://github.com/victor141516/NodeSession',
    date: 1601078400,
    features: [FEATURES.TSB, FEATURES.Node],
    tier: 2,
  },
  {
    name: 'git-o',
    url: 'https://github.com/victor141516/git-o',
    date: 1575504000,
    features: [],
    tier: 3,
  },
  {
    name: 'agnosticVCR',
    url: 'https://github.com/victor141516/agnosticVCR',
    date: 1594252800,
    features: [FEATURES.Node, FEATURES.Docker],
    tier: 2,
  },
  {
    name: 'SearStars',
    url: 'https://github.com/victor141516/SearStars',
    date: 1599955200,
    features: [FEATURES.TSF, FEATURES.Vue],
    tier: 2,
  },
  {
    name: 'oauth-as-a-service',
    url: 'https://github.com/victor141516/oauth-as-a-service',
    date: 1570233600,
    features: [FEATURES.Node, FEATURES.Docker],
    tier: 1,
  },
  {
    name: 'google-image-search-telegram',
    url: 'https://github.com/victor141516/google-image-search-telegram',
    date: 1505779200,
    features: [FEATURES.Python, FEATURES.Docker],
    tier: 1,
  },
  {
    name: 'myFus',
    url: 'https://github.com/victor141516/myFus',
    date: 1537747200,
    features: [FEATURES.Python, FEATURES.Docker],
    tier: 1,
  },
  {
    name: 'geocoding-telegram-bot',
    url: 'https://github.com/victor141516/geocoding-telegram-bot',
    date: 1561852800,
    features: [FEATURES.Python, FEATURES.Docker],
    tier: 2,
  },
  {
    name: 'Redpie',
    url: 'https://github.com/victor141516/Redpie',
    date: 1526947200,
    features: [FEATURES.Python],
    tier: 3,
  },
  {
    name: 'Xplid',
    url: 'https://github.com/victor141516/Xplid',
    date: 1637452800,
    features: [FEATURES.Vue, FEATURES.TSF],
    tier: 3,
  },
  {
    name: 'manfred-filter',
    url: 'https://github.com/victor141516/manfred-filter',
    date: 1634860800,
    features: [FEATURES.TSB, FEATURES.Docker],
    tier: 3,
  },
  {
    name: 'BlitX',
    url: 'https://github.com/victor141516/BlitX',
    date: 1590364800,
    features: [FEATURES.Node, FEATURES.TSB, FEATURES.TSF, FEATURES.Vue],
    tier: 2,
  },
  {
    name: 'taskimo',
    url: 'https://github.com/victor141516/taskimo',
    date: 1633824000,
    features: [FEATURES.TSF, FEATURES.Vue],
    tier: 1,
  },
  {
    name: 'forodieciocho',
    url: 'https://github.com/victor141516/forodieciocho',
    date: 1621814400,
    features: [FEATURES.Docker, FEATURES.Node, FEATURES.TSB, FEATURES.TSF, FEATURES.Vue],
    tier: 2,
  },
  {
    name: 'TorrenteStreamer',
    url: 'https://github.com/victor141516/TorrenteStreamer',
    date: 1486857600,
    features: [FEATURES.Docker, FEATURES.Node, FEATURES.Python, FEATURES.TSB, FEATURES.TSF],
    tier: 2,
  },
  {
    name: 'FileY',
    url: 'https://github.com/victor141516/FileY',
    date: 1624579200,
    features: [FEATURES.Docker, FEATURES.TSB],
    tier: 1,
  },
  {
    name: 'esender',
    url: 'https://github.com/victor141516/esender',
    date: 1533772800,
    features: [FEATURES.Docker, FEATURES.Python],
    tier: 2,
  },
  {
    name: 'Gmail-gettt',
    url: 'https://github.com/victor141516/Gmail-gettt',
    date: 1531267200,
    features: [FEATURES.Docker, FEATURES.Python],
    tier: 2,
  },
].sort((a, b) => {
  if (b.tier !== a.tier) {
    return a.tier - b.tier
  } else {
    return b.date - a.date
  }
})

const formatDate = (ts: number) => {
  const { years, months, days } = DateTime.now()
    .diff(DateTime.fromMillis(ts * 1000), ['days', 'months', 'years'])
    .toObject()
  let unit = days === 1 ? 'day' : 'days'
  let n = days
  if (years! > 0) [unit, n] = [years === 1 ? 'year' : 'years', years]
  else if (months! > 0) [unit, n] = [months === 1 ? 'month' : 'months', months]
  return t('home.stuffMade.dateTemplate', { n, unit: t(`home.stuffMade.${unit}`), ago: t('home.stuffMade.ago') })
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

      <template v-for="({ name, url, date, features, tier }, index) in repos">
        <template v-if="tier <= showingTier">
          <div class="col-start-1 flex items-center">
            <a class="flex-1 flex items-center justify-center" target="_blank" :href="url">
              <div class="rounded-social-buttons scale-50">
                <span class="bg-transparent"
                  ><span class="social-button github hover:!transform-none before:text-[65px]"></span
                ></span>
              </div>
              <span class="w-0 flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{{ name }}</span>
            </a>
            <div class="relative">
              <i
                @mouseover="descriptionIndexToShow = index"
                @mouseleave="descriptionIndexToShow = null"
                class="px-2 fas fa-info-circle cursor-pointer"
              ></i>
              <div
                v-if="descriptionIndexToShow === index"
                class="
                  absolute
                  top-[-150%]
                  left-[calc(100%_+_10px)]
                  p-2
                  bg-gray-800
                  rounded-md
                  shadow-lg shadow-gray-900
                  w-64
                "
              >
                <p v-html="t(`home.stuffMade.descriptions.${name}`)"></p>
              </div>
            </div>
          </div>
          <span class="flex items-center justify-center">{{ formatDate(date) }}</span>
          <span class="flex items-center justify-center" v-for="i in 6">{{ features!.includes(i) ? '✅' : '' }}</span>
        </template>
      </template>
    </div>
    <div v-if="showingTier !== 3" class="mt-4 flex items-center justify-center cursor-pointer" @click="showMoreTier">
      <i class="fas fa-chevron-circle-down text-4xl"></i><span class="ml-4">Show more</span>
    </div>
  </div>
</template>
