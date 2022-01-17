<script setup lang="ts">
import { DateTime } from 'luxon'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { width } from '../utils/screen'

import { currentDepth, Period } from './Timeline.vue'

const props = defineProps<{ period: Period; myDepth: number; expanded: boolean }>()
const period = props.period
const myDepth = props.myDepth
const forceExpanded = props.expanded

const { locale } = useI18n()
const p = DateTime.fromISO
const f = (d: DateTime) => d.setLocale(locale.value).toFormat('MMM yyyy')

function rotateArrow(ev: MouseEvent) {
  const path = ev.composedPath() as HTMLElement[]
  let element = path[0]
  if (element.tagName === 'I') {
    element = path[1]
  }
  const classes = (ev.composedPath()[0] as HTMLElement).classList
  classes.toggle('!rotate-180')
}

let chosenColor: string
const getColor = () => {
  if (!chosenColor) {
    const colors = [
      'bg-slate-600',
      'bg-gray-600',
      'bg-zinc-600',
      'bg-neutral-600',
      'bg-stone-600',
      'bg-red-600',
      'bg-orange-600',
      'bg-amber-600',
      'bg-yellow-600',
      'bg-lime-600',
      'bg-green-600',
      'bg-emerald-600',
      'bg-cyan-600',
      'bg-blue-600',
      'bg-indigo-600',
      'bg-violet-600',
      'bg-purple-600',
      'bg-fuchsia-600',
      'bg-pink-600',
      'bg-rose-600',
    ]
    chosenColor = colors[Math.floor(Math.random() * colors.length)]
  }
  return chosenColor
}

const changeDepth = () => {
  if (forceExpanded) return
  if (currentDepth.value === myDepth) {
    currentDepth.value = myDepth + (period.periods ? 1 : 0)
  } else {
    currentDepth.value = myDepth
  }
}
const isActiveDepth = computed(() => myDepth === currentDepth.value)
const isExpanded = computed(() => {
  if (forceExpanded) return true
  else return isActiveDepth.value
})

const columnWidth = ref(500)
watch(
  width,
  () => {
    columnWidth.value = Math.min(500, width.value - 75)
  },
  { immediate: true },
)
const columnWidthPx = computed(() => `${columnWidth.value}${columnWidth.value === 0 ? '' : 'px'}`)
</script>

<template>
  <div class="flex mt-10 px-2">
    <div
      class="grid gap-y-4 snap-center md:ml-0"
      :class="{
        'grid-dynamic-width': isExpanded,
        'grid-cols-[0_1.25rem]': !isExpanded,
      }"
    >
      <div
        v-for="(e, i) in period.events"
        class="z-10 col-start-2 justify-self-end flex flex-col pointer-events-none"
        :style="`grid-row-start: ${i + 1}`"
      >
        <span class="flex text-4xl rotate-[-18deg] translate-x-[0.7rem] -translate-y-3">📍</span>
        <span v-if="i !== 0 && isExpanded" class="text-xs -mt-4 translate-x-12" style="writing-mode: vertical-lr">{{
          f(e.timestamp)
        }}</span>
      </div>

      <div
        @click="changeDepth"
        class="relative w-2 rounded-full justify-self-end mr-1 col-start-2 row-start-1 transition-all"
        :class="[getColor(), forceExpanded ? '' : 'cursor-pointer']"
        :style="`grid-area: 1 / 2 / ${(period.events?.length ?? 0) + 1} / span 1`"
      >
        <span class="absolute text-sm whitespace-nowrap -top-7 -left-4">{{ f(period.start) }}</span>
        <span
          class="w-0 ml-4 whitespace-nowrap justify-self-start transition-all"
          :class="{
            'text-xs text-gray-300 dark:text-gray-400': !isExpanded,
            'text-lg text-gray-500 dark:text-gray-200': isExpanded,
          }"
          style="writing-mode: vertical-lr"
          >{{ period.name }}</span
        >
      </div>
      <transition-group name="mutis" :duration="500">
        <article
          v-if="isExpanded"
          v-for="(event, i) in period.events"
          :key="event.name"
          class="col-start-1 m-0 px-4 pb-4 transition-all w-[500px] h-max max-w-[500px]"
          :style="`grid-row-start: ${i + 1}`"
        >
          <header class="py-2 font-bold">
            <span>{{ event.name }}</span>
          </header>
          <p class="-mt-5 text-md">{{ event.description }}</p>
          <details class="border-0 mb-0 pb-0" v-if="event.bullets">
            <summary
              class="after:hidden text-center pt-2 pb-0 transition-transform origin-center rotate-0"
              @click="rotateArrow"
            >
              <i class="fas fa-angle-down text-2xl leading-3 pointer-events-none mb-2"></i>
            </summary>
            <ul class="pl-4 mt-4">
              <li v-for="b in event.bullets">
                {{ b }}
              </li>
            </ul>
          </details>
        </article>
      </transition-group>
    </div>
    <div v-if="period.periods" :class="myDepth + 1 === currentDepth ? 'ml-10 lg:ml-16' : 'ml-10'">
      <TimelinePeriod
        v-for="p in period.periods"
        :my-depth="myDepth + 1"
        :period="p"
        :expanded="forceExpanded"
      ></TimelinePeriod>
    </div>
  </div>
</template>

<style scoped>
.mutis-enter-from,
.mutis-leave-to {
  @apply translate-x-[120%] opacity-0;
}

.mutis-leave-from {
  @apply translate-x-[-120%] opacity-100;
}

.transition-all {
  transition-duration: 500ms !important;
}
.grid-dynamic-width {
  grid-template-columns: v-bind(columnWidthPx) 1.25rem;
}

article {
  width: v-bind(columnWidthPx);
}
</style>
