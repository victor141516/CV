<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Head from './sections/Head.vue'

const AboutMe = defineAsyncComponent(() => import('./sections/AboutMe.vue'))
const Links = defineAsyncComponent(() => import('./sections/Links.vue'))
const StuffMade = defineAsyncComponent(() => import('./sections/StuffMade.vue'))
const Work = defineAsyncComponent(() => import('./sections/Work.vue'))
</script>

<template>
  <Head class="vi-bg-odd"></Head>
  <AboutMe id="about-me" class="vi-bg-even"></AboutMe>
  <StuffMade id="stuff-made" class="vi-bg-odd"></StuffMade>
  <Work id="work" class="vi-bg-even"></Work>
  <Links id="links" class="vi-bg-odd"></Links>
</template>
