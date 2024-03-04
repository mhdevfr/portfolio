<template>
    <div class="h-96 w-80 text-left bg-neutral-400 rounded-lg backdrop-blur-sm opacity-50">
      <h1 class="m-4">{{ carte.title }}</h1>
      <img :src="carte.image" class="mx-auto opacity-100 w-5/6" id="img"/>
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

.carteActive{
    border: 1px solid aliceblue;
    opacity: 1;
    scale: 1.2;

}

  </style>
  