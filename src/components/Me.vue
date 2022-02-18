<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CV_PDF_URL } from '../utils/constants'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <picture class="rounded-full" alt="Víctor Fernández" width="200" height="200">
      <source srcset="/me.webp" type="image/webp" />
      <source srcset="/me.jpg" type="image/jpg" />
      <img class="rounded-full" src="/me.jpg" alt="Víctor Fernández" width="200" height="200" />
    </picture>
    <h1 class="mt-2 text-4xl md:text-6xl font-bold xl:whitespace-nowrap">
      {{ t('home.me.title')
      }}<span class="relative">
        <a :href="CV_PDF_URL" class="font-extrabold select-none" target="_blank"> Víctor Fernández</a>
        <picture loading="lazy" class="pdf-chalk">
          <source srcset="/chalk.webp" type="image/webp" />
          <source srcset="/chalk.png" type="image/png" />
          <img src="/chalk.png" alt="Chalk" width="213" height="260" loading="lazy" />
        </picture>
      </span>
    </h1>

    <div class="mt-6">
      <p>{{ t('home.me.description.0') }}</p>
      <p>{{ t('home.me.description.1') }}</p>
      <p v-html="t('home.me.description.2', { company: '<a href=https://www.shuttlecloud.com>ShuttleCloud</a>' })"></p>
    </div>
    <div class="mt-6 rounded-social-buttons">
      <a
        class="bg-transparent mr-1"
        target="_blank"
        href="https://www.linkedin.com/in/victor-fernandez-gabriel-8850baaa/"
        rel="noopener"
      >
        <span class="social-button linkedin"></span>
      </a>
      <a class="bg-transparent mr-1" target="_blank" href="https://github.com/victor141516" rel="noopener">
        <span class="social-button github"></span>
      </a>
      <a class="bg-transparent mr-1" target="_blank" href="mailto:victor.fernandez.gabriel@gmail.com" rel="noopener">
        <span class="social-button email"></span>
      </a>
      <a class="bg-transparent mr-1" target="_blank" href="https://t.me/victor141516" rel="noopener">
        <span class="social-button telegram"></span>
      </a>
      <a class="bg-transparent" target="_blank" href="https://twitter.com/victor141516" rel="noopener">
        <span class="social-button twitter"></span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
$social-button-scale: 1rem;
$social-button-size: 4 * $social-button-scale;
$social-button-border-width: 1 * $social-button-scale;
$social-button-font-size: 2 * $social-button-scale;

$social-brand-twitter: #55acee;
$social-brand-linkedin: #007bb5;
$social-brand-github: #000000;
$social-brand-email: #32506d;
$social-brand-telegram: #0088cc;

@mixin social-button($brand-color, $brand-icon, $icon-size) {
  background: $brand-color;

  &:before {
    font-family: 'FontAwesome';
    content: $brand-icon;
    font-size: $icon-size;
  }
  &:hover {
    color: $brand-color;
    background: white;
    border-color: $brand-color;
  }
}

.rounded-social-buttons {
  @apply text-center flex;

  .social-button {
    @apply flex items-center justify-center hover:-translate-y-1 transition-transform;
    cursor: pointer;
    width: $social-button-size;
    height: $social-button-size;
    padding: 0;
    text-decoration: none;
    text-align: center;
    color: white;
    font-weight: normal;
    border-radius: 100%;

    &.twitter {
      @include social-button($social-brand-twitter, '\f099', $social-button-font-size);
    }

    &.linkedin {
      @include social-button($social-brand-linkedin, '\f0e1', $social-button-font-size);
    }

    &.github {
      @include social-button($social-brand-github, '\f09b', 2 * $social-button-font-size);
    }

    &.telegram {
      @include social-button($social-brand-telegram, '\f3fe', 2 * $social-button-font-size);
    }

    &.email {
      @include social-button($social-brand-email, '\f01c', $social-button-font-size);
    }
  }
}

.pdf-chalk {
  @apply absolute w-20 -top-20 ml-3 -rotate-12 sm:-ml-20 md:w-30 md:ml-8 md:rotate-0 lg:ml-8 xl:-ml-15;
  @media (min-width: 529px) and (max-width: 640px) {
    @apply -ml-18;
  }
}
</style>
