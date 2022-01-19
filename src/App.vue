<script setup lang="ts">
import AboutMe from './sections/AboutMe.vue'
import Head from './sections/Head.vue'
import Links from './sections/Links.vue'
import StuffMade from './sections/StuffMade.vue'
import Work from './sections/Work.vue'
</script>

<template>
  <Head class="vi-bg-odd"></Head>
  <AboutMe id="about-me" class="vi-bg-even"></AboutMe>
  <StuffMade id="stuff-made" class="vi-bg-odd"></StuffMade>
  <Work id="work" class="vi-bg-even"></Work>
  <Links id="links" class="vi-bg-odd"></Links>
</template>
