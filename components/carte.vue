<template>
    <div class="h-96 w-80 text-left bg-blue-400 rounded">
      <h1 class="m-4">{{ carte.title }}</h1>
      <img :src="carte.image" />
      <p class="min-h-10 m-4">Description : {{ carte.description }}</p>
      <h3 class="m-4">Mes outils utilisés : {{ carte.outils }}</h3>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { CarteInterface } from '~/interfaces/carte.interface';
  
  defineProps<{
    carte: CarteInterface
  }>()
  </script>
  
  <style scoped>
    .m-4{
        margin: 8px;
    }
  </style>
  