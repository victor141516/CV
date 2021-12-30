<script setup lang="ts">
import Lang from '../components/Lang.vue'
import Me from '../components/Me.vue'
</script>

<template>
  <div class="flex flex-col w-11/12 md:w-3/4 2xl:w-1/2 mx-auto h-[100vh]">
    <Lang class="ml-auto px-2"></Lang>
    <div class="flex-1 flex justify-center pb-[10%]">
      <Me class="my-auto"></Me>
    </div>
    <div class="flex-0 mx-auto mt-auto mb-10 text-6xl rotate-90">
      <span>➜</span>
    </div>
  </div>
</template>
