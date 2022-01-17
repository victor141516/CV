<script setup lang="ts">
import { DateTime } from 'luxon'
import TimelinePeriod from './TimelinePeriod.vue'

export interface Event {
  name: string
  description: string
  bullets?: string[]
  timestamp: DateTime
}
export interface Period {
  start: DateTime
  end?: DateTime
  name: string
  events?: Event[]
  periods?: Period[]
}

const props = defineProps<{ timeline: Period[]; defaultDepth?: number; expanded: boolean; depthInView?: number }>()
const timeline = props.timeline
const defaultDepth = props.defaultDepth
const expanded = props.expanded ?? true
const depthInView = props.depthInView
if (defaultDepth) {
  currentDepth.value = defaultDepth
}
const containerElement = ref<HTMLElement>()
const maxDepth = computed(() => {
  let depth = 0
  const wrap = (tl: Period[]) => {
    depth += 1
    tl.forEach((tle) => {
      if (tle.periods) wrap(tle.periods)
    })
  }
  wrap(timeline)
  return depth
})
onMounted(() => {
  if (depthInView) {
    const e = containerElement.value!
    const columnWidth = e.scrollWidth / maxDepth.value
    const scrollPos = columnWidth * depthInView
    e.parentElement!.scrollLeft = scrollPos
  }
})
</script>

<script lang="ts">
import { computed, onMounted, ref } from 'vue'
export const currentDepth = ref(0)
</script>

<template>
  <div ref="containerElement">
    <TimelinePeriod v-for="period in timeline" :my-depth="0" :period="period" :expanded="expanded"></TimelinePeriod>
  </div>
</template>
