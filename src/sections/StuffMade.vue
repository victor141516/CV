<script setup lang="ts">
export type Repo = {
  name: string
  url: string
  date: number
  features: number[]
  tier: number
}

import StuffMadeDesktop from '../components/StuffMadeDesktop.vue'
import StuffMadeMobile from '../components/StuffMadeMobile.vue'

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
    name: 'YourArch',
    url: 'https://github.com/victor141516/YourArch',
    date: 1641600000,
    features: [FEATURES.Node, FEATURES.Docker, FEATURES.TSB, FEATURES.Vue],
    tier: 1,
  },
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
}) as Repo[]
</script>

<template>
  <div>
    <StuffMadeDesktop :repos="repos" :features="FEATURES" class="hidden md:flex"></StuffMadeDesktop>
    <StuffMadeMobile :repos="repos" :features="FEATURES" class="flex md:hidden"></StuffMadeMobile>
  </div>
</template>
