<script setup lang="ts">
import { DateTime } from 'luxon'
import { useI18n } from 'vue-i18n'
import { nextTick, ref, watch } from 'vue'

import Timeline, { Period } from '../components/Timeline.vue'

const p = DateTime.fromISO
const { t, locale } = useI18n()

const timeline = ref<Period[]>([])

function setTimeline() {
  timeline.value = [
    {
      start: p('2011-09'),
      end: p('2017-09'),
      name: t('home.work.timeline.0.name'),
      events: [
        {
          timestamp: p('2011-09'),
          name: t('home.work.timeline.0.events.0.name'),
          description: t('home.work.timeline.0.events.0.description'),
        },
      ],
    },
    {
      start: p('2015-06'),
      name: t('home.work.timeline.1.name'),
      periods: [
        {
          start: p('2015-06'),
          end: p('2017-09'),
          name: t('home.work.timeline.1.periods.0.name'),
          events: [
            {
              timestamp: p('2015-06'),
              name: t('home.work.timeline.1.periods.0.events.0.name'),
              description: t('home.work.timeline.1.periods.0.events.0.description'),
              bullets: [
                t('home.work.timeline.1.periods.0.events.0.bullets.0'),
                t('home.work.timeline.1.periods.0.events.0.bullets.1'),
                t('home.work.timeline.1.periods.0.events.0.bullets.2'),
              ],
            },
            {
              timestamp: p('2016-06'),
              name: t('home.work.timeline.1.periods.0.events.1.name'),
              description: t('home.work.timeline.1.periods.0.events.1.description'),
              bullets: [
                t('home.work.timeline.1.periods.0.events.1.bullets.0'),
                t('home.work.timeline.1.periods.0.events.1.bullets.1'),
                t('home.work.timeline.1.periods.0.events.1.bullets.2'),
              ],
            },
            {
              timestamp: p('2017-02'),
              name: t('home.work.timeline.1.periods.0.events.2.name'),
              description: t('home.work.timeline.1.periods.0.events.2.description'),
              bullets: [
                t('home.work.timeline.1.periods.0.events.2.bullets.0'),
                t('home.work.timeline.1.periods.0.events.2.bullets.1'),
                t('home.work.timeline.1.periods.0.events.2.bullets.2'),
                t('home.work.timeline.1.periods.0.events.2.bullets.3'),
              ],
            },
          ],
        },
        {
          start: p('2017-09'),
          end: p('2018-08'),
          name: t('home.work.timeline.1.periods.1.name'),
          events: [
            {
              timestamp: p('2017-09'),
              name: t('home.work.timeline.1.periods.1.events.0.name'),
              description: t('home.work.timeline.1.periods.1.events.0.description'),
              bullets: [
                t('home.work.timeline.1.periods.1.events.0.bullets.0'),
                t('home.work.timeline.1.periods.1.events.0.bullets.1'),
                t('home.work.timeline.1.periods.1.events.0.bullets.2'),
                t('home.work.timeline.1.periods.1.events.0.bullets.3'),
                t('home.work.timeline.1.periods.1.events.0.bullets.4'),
                t('home.work.timeline.1.periods.1.events.0.bullets.5'),
              ],
            },
            {
              timestamp: p('2017-11'),
              name: t('home.work.timeline.1.periods.1.events.1.name'),
              description: t('home.work.timeline.1.periods.1.events.1.description'),
              bullets: [
                t('home.work.timeline.1.periods.1.events.1.bullets.0'),
                t('home.work.timeline.1.periods.1.events.1.bullets.1'),
                t('home.work.timeline.1.periods.1.events.1.bullets.2'),
              ],
            },
          ],
        },
        {
          start: p('2018-08'),
          end: p('2021-05'),
          name: t('home.work.timeline.1.periods.2.name'),
          events: [
            {
              timestamp: p('2018-08'),
              name: t('home.work.timeline.1.periods.2.events.0.name'),
              description: t('home.work.timeline.1.periods.2.events.0.description'),
              bullets: [
                t('home.work.timeline.1.periods.2.events.0.bullets.0'),
                t('home.work.timeline.1.periods.2.events.0.bullets.1'),
                t('home.work.timeline.1.periods.2.events.0.bullets.2'),
                t('home.work.timeline.1.periods.2.events.0.bullets.3'),
              ],
            },
          ],
          periods: [
            {
              start: p('2019-10'),
              end: p('2020-04'),
              name: t('home.work.timeline.1.periods.2.periods.0.name'),
              events: [
                {
                  timestamp: p('2019-10'),
                  name: t('home.work.timeline.1.periods.2.periods.0.events.0.name'),
                  description: t('home.work.timeline.1.periods.2.periods.0.events.0.description'),
                  bullets: [
                    t('home.work.timeline.1.periods.2.periods.0.events.0.bullets.0'),
                    t('home.work.timeline.1.periods.2.periods.0.events.0.bullets.1'),
                    t('home.work.timeline.1.periods.2.periods.0.events.0.bullets.2'),
                  ],
                },
              ],
            },
          ],
        },
        {
          start: p('2020-05'),
          end: p('2021-07'),
          name: t('home.work.timeline.1.periods.3.name'),
          events: [
            {
              timestamp: p('2020-05'),
              name: t('home.work.timeline.1.periods.3.events.0.name'),
              description: t('home.work.timeline.1.periods.3.events.0.description'),
              bullets: [
                t('home.work.timeline.1.periods.3.events.0.bullets.0'),
                t('home.work.timeline.1.periods.3.events.0.bullets.1'),
                t('home.work.timeline.1.periods.3.events.0.bullets.2'),
                t('home.work.timeline.1.periods.3.events.0.bullets.3'),
              ],
            },
          ],
        },
        {
          start: p('2021-05'),
          name: t('home.work.timeline.1.periods.4.name'),
          events: [
            {
              timestamp: p('2021-05'),
              name: t('home.work.timeline.1.periods.4.events.0.name'),
              description: t('home.work.timeline.1.periods.4.events.0.description'),
              bullets: [
                t('home.work.timeline.1.periods.4.events.0.bullets.0'),
                t('home.work.timeline.1.periods.4.events.0.bullets.1'),
                t('home.work.timeline.1.periods.4.events.0.bullets.2'),
                t('home.work.timeline.1.periods.4.events.0.bullets.3'),
                t('home.work.timeline.1.periods.4.events.0.bullets.4'),
                t('home.work.timeline.1.periods.4.events.0.bullets.5'),
              ],
            },
          ],
        },
      ],
    },
    {
      name: t('home.work.timeline.2.name'),
      start: p('2022-05'),
      periods: [
        {
          name: t('home.work.timeline.2.periods.0.name'),
          start: p('2022-05'),
          events: [
            {
              timestamp: p('2022-05'),
              name: t('home.work.timeline.2.periods.0.events.0.name'),
              description: t('home.work.timeline.2.periods.0.events.0.description'),
            },
          ],
        },
      ],
    },
  ]
}

setTimeline()
watch(locale, () => {
  setTimeline()
  showTimeline.value = false
  nextTick(() => {
    showTimeline.value = true
  })
})
const showTimeline = ref(true)
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12">
    <h2>{{ t('home.work.title') }}</h2>
    <div v-if="showTimeline" class="mt-4 w-full flex justify-center overflow-x-auto snap-x lg:snap-none">
      <Timeline
        class="w-full 2xl:w-[unset]"
        :timeline="timeline"
        :default-depth="1"
        :expanded="true"
        :depth-in-view="1"
      ></Timeline>
    </div>
  </div>
</template>
