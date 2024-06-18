<template>
  <div class="h-16 flex w-3/4 items-center rounded-xl mt-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 " v-motion-slide-visible-left>
    <div class="flex w-full justify-around items-center ">
      <NuxtLink to="/" class="text-white">Milan H</NuxtLink>
      <NuxtLink to="/" class="text-white">Home</NuxtLink>
      <NuxtLink to="/" class="text-white">Projects</NuxtLink>
      <NuxtLink to="/" class="text-white">Bio</NuxtLink>
      <NuxtLink to="/fifthPart" class="text-white px-8 py-2 bg-indigo-600 rounded-lg">Talk to me</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
*{
  scroll-behavior: smooth;
}
</style>
