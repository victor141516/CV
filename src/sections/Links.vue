<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface LinkItem {
  title: string
  image: string
  link: string
  description: string
}

const { t } = useI18n()

const links: LinkItem[] = [
  {
    title: 'incolumitas',
    link: 'https://incolumitas.com/',
    image: 'incolumnitas',
    description: 'El blog de Nikolai Tschacher, un experto en scraping y detección de scrapers y bots',
  },
  {
    title: 'LiveOverflow',
    link: 'https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w',
    image: 'LiveOverflow',
    description: 'Explica tanto conceptos de programación/hacking como casos prácticos de hacking',
  },
  {
    title: 'Kofybrek',
    link: 'https://www.youtube.com/c/Kofybrek',
    image: 'Kofybrek',
    description:
      'Un chico que hace vídeos graciosos de los proyectos que programa, explicando los problemas que ha tenido',
  },
  {
    title: '3Blue1Brown',
    link: 'https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw',
    image: '3Blue1Brown',
    description: 'Explica conceptos matemáticos con animaciones muy fáciles de entender',
  },
  {
    title: 'HackerNews',
    link: 'https://news.ycombinator.com/',
    image: 'hackernews',
    description: 'Una de las webs de noticias de ciencia, hacking y programación más conocidas',
  },
  {
    title: 'MiduDev',
    link: 'https://midu.dev/',
    image: 'midudev',
    description: 'Hace cursos de programación de frotend y explica bastante bien',
  },

  {
    title: 'Google Web Updates',
    link: 'https://developers.google.com/web',
    image: 'webdev',
    description: 'La web de Google donde escriben sobre los últimos cambios tanto de estándares como de Chrome',
  },
]
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12">
    <h2>{{ t('home.links.title') }}</h2>
    <div class="mt-4 w-full overflow-x-auto py-8 px-4 flex snap-x">
      <div v-for="{ title, link, image, description } in links" class="min-w-[12rem] w-1/4 mx-4 snap-center">
        <div
          class="h-full rounded-lg bg-slate-200 dark:bg-gray-900 border-slate-200 border dark:border-slate-700 shadow hover:shadow-xl transition-shadow"
        >
          <a :href="link" rel="noopener">
            <div
              class="px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-t-lg flex flex-col items-center justify-center"
            >
              <figure>
                <picture class="rounded-full mx-auto" :alt="title" width="120" height="120" loading="lazy">
                  <source :srcset="`/${image}.webp`" type="image/webp" />
                  <source :srcset="`/${image}.jpg`" type="image/jpg" />
                  <img
                    class="rounded-full mx-auto"
                    src="/me.jpg"
                    :alt="title"
                    width="120"
                    height="120"
                    loading="lazy"
                  />
                </picture>
                <figcaption class="text-center text-gray-600 dark:text-gray-300">{{ title }}</figcaption>
              </figure>
            </div>
            <div class="px-4 py-3">
              <p class="text-sm">{{ description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
