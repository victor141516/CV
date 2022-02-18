<script setup lang="ts">
import HeaderPrefs from '../components/HeaderPrefs.vue'
import Me from '../components/Me.vue'
import { height } from '../utils/screen'
</script>

<template>
  <div class="w-full">
    <div
      class="flex flex-col w-11/12 md:w-3/4 2xl:w-1/2 mx-auto"
      :style="`height: ${height ? height + 'px' : '100vh'}`"
    >
      <HeaderPrefs class="ml-auto px-2"></HeaderPrefs>
      <div class="flex-1 flex justify-center pb-[10%]">
        <Me class="my-auto"></Me>
      </div>
      <div class="flex-0 mx-auto mt-auto mb-10 text-6xl rotate-90">
        <span>➜</span>
      </div>
    </div>
  </div>
</template>
