<template>
    <div class="h-64 min-w-96 text-left bg-gradient-to-br from-green-800 to-emerald-400 rounded-lg backdrop-blur-sm opacity-50">
      <h1 class="m-4">{{ avis.title }}</h1>
      <img :src="avis.image" class="m-4"/>
      <p class="min-h-10 m-4">Avis : {{ avis.avis }}</p>
      <h3 class="m-4">Working at : {{ avis.work }}</h3>
    </div>
</template>
  
<script setup lang="ts">

import type { avisInterface } from '~/interfaces/avis.interface';


defineProps<{
    avis: avisInterface
}>()

</script>
  

  