<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <img class="rounded-full" src="/me.jpg" alt="Víctor Fernández" width="200" height="200" />
    <h1 class="mt-2 text-4xl md:text-6xl font-bold">
      {{ t('home.me.title') }}<span class="font-extrabold text-blue-500"> Víctor Fernández</span>
    </h1>
    <div class="mt-6">
      <p>{{ t('home.me.description.0') }}</p>
      <p>{{ t('home.me.description.1') }}</p>
      <p v-html="t('home.me.description.2', { company: '<a href=https://www.shuttlecloud.com>ShuttleCloud</a>' })"></p>
    </div>
    <div class="mt-6 rounded-social-buttons">
      <a
        class="bg-transparent"
        target="_blank"
        href="https://www.linkedin.com/in/victor-fernandez-gabriel-8850baaa/"
        rel="noopener"
      >
        <span class="social-button linkedin"></span>
      </a>
      <a class="bg-transparent" target="_blank" href="https://github.com/victor141516" rel="noopener">
        <span class="social-button github before:text-[50px]"></span>
      </a>
      <a class="bg-transparent" target="_blank" href="mailto:victor.fernandez.gabriel@gmail.com" rel="noopener">
        <span class="social-button email"></span>
      </a>
      <a class="bg-transparent" target="_blank" href="https://t.me/victor141516" rel="noopener">
        <span class="social-button telegram before:text-[50px]"></span>
      </a>
      <a class="bg-transparent" target="_blank" href="https://twitter.com/victor141516" rel="noopener">
        <span class="social-button twitter"></span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
$social-button-size: 3.125rem;
$social-button-border-width: 0.125rem;
$social-button-font-size: 1.5625rem;
$social-button-line-height: 2em;
$social-button-border-radius: 1.6875rem;
$social-button-margin: 0.25rem;

$social-brand-twitter: #55acee;
$social-brand-linkedin: #007bb5;
$social-brand-github: #000000;
$social-brand-email: #32506d;
$social-brand-telegram: #0088cc;
$white: #fff;

@mixin social-button($brand-color, $brand-icon) {
  background: $brand-color;

  &:before {
    font-family: 'FontAwesome';
    content: $brand-icon;
  }
  &:hover {
    color: $brand-color;
    background: $white;
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
    border: $social-button-border-width solid transparent;
    padding: 0;
    text-decoration: none;
    text-align: center;
    color: $white;
    font-size: $social-button-font-size;
    font-weight: normal;
    line-height: $social-button-line-height;
    border-radius: $social-button-border-radius;
    margin-right: $social-button-margin;
    margin-bottom: $social-button-margin;

    &.twitter {
      @include social-button($social-brand-twitter, '\f099');
    }

    &.linkedin {
      @include social-button($social-brand-linkedin, '\f0e1');
    }

    &.github {
      @include social-button($social-brand-github, '\f09b');
    }

    &.telegram {
      @include social-button($social-brand-telegram, '\f3fe');
    }

    &.email {
      @include social-button($social-brand-email, '\f01c');
    }
  }
}
</style>
