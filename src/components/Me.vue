<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CV_PDF_URL, SOCIAL_LINKS } from '../utils/constants'
import { useDarkMode } from '../utils/screen'
import { socialImages } from '../utils/socialImages'
import { socialItems } from '../utils/types'

const { t, locale } = useI18n()
const darkMode = useDarkMode()

const socialExtraClasses = {
  github: 'mr-1',
  inbox: 'bg-[#32506d] p-2 mr-1',
  linkedIn: 'bg-[#0A66C2] p-3 mr-1',
  telegram: 'dark:bg-white bg-[#0088CC] mr-1',
  twitter: 'bg-[#1D9BF0] p-3',
}
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <picture class="rounded-full" alt="Víctor Fernández" width="200" height="200">
      <source srcset="/me.webp" type="image/webp" />
      <source srcset="/me.jpg" type="image/jpg" />
      <img class="rounded-full" src="/me.jpg" alt="Víctor Fernández" width="200" height="200" />
    </picture>
    <h1 class="mt-2 text-4xl md:text-6xl font-bold xl:whitespace-nowrap relative">
      {{ t('home.me.title') }}
      <a
        :href="CV_PDF_URL[locale as 'es' | 'en'] ?? CV_PDF_URL.en"
        class="font-extrabold select-none"
        target="_blank"
        download="Victor Fernandez - CV.pdf"
        >Víctor <br class="block xl:hidden" />Fernández</a
      >
      <picture loading="lazy" class="pdf-chalk" :class="locale">
        <source :srcset="`/chalk${darkMode ? '' : '-black'}.webp`" type="image/webp" />
        <source :srcset="`/chalk${darkMode ? '' : '-black'}.png`" type="image/png" />
        <img :src="`/chalk${darkMode ? '' : '-black'}.png`" alt="Chalk" width="213" height="260" loading="lazy" />
      </picture>
    </h1>

    <div class="mt-6 h-[10em] [@media(min-width:400px)_and_(max-width:640px)]:h-[8em] sm:h-[6em]">
      <p>{{ t('home.me.description.0') }}</p>
      <p>{{ t('home.me.description.1') }}</p>
      <p v-html="t('home.me.description.2', { company: '<a href=https://www.revieve.com/>Revieve</a>' })"></p>
    </div>
    <div class="mt-6 rounded-social-buttons">
      <a
        class="social-button"
        :class="socialExtraClasses[social]"
        target="_blank"
        rel="noopener"
        v-html="socialImages[social].value"
        :href="SOCIAL_LINKS[social]"
        v-for="social of socialItems"
      ></a>
    </div>
  </div>
</template>

<style lang="scss">
.rounded-social-buttons {
  @apply flex;

  .social-button {
    @apply flex items-center justify-center rounded-full cursor-pointer hover:-translate-y-1 transition-transform;
    width: 64px;
    height: 64px;
  }
}

.pdf-chalk {
  @apply absolute w-20 -top-20 -rotate-12
    md:w-30 md:rotate-0 md:-mt-4;

  &.es {
    @apply ml-0 sm:ml-0 md:ml-5;
  }

  &.en {
    @apply mt-3 -ml-3 rotate-12
      sm:rotate-12
      md:-mt-5 md:-ml-5 md:rotate-0
      lg:-ml-10;
  }
}
</style>
