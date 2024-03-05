<template>
    <div class="h-96 w-80 text-left bg-white opacity-50 text-black rounded-lg backdrop-blur-sm blur-sm ">
      <h1 class="m-4 text-center">{{ carte.title }}</h1>
      <img :src="carte.image" class="mx-auto opacity-100 w-5/6" id="img"/>
      <p class="min-h-10 m-4 text-sm"><h1>Description</h1> - {{ carte.description }}</p>
      <h3 class="m-4 mb-8 text-sm"><h1>Outils utilisés</h1> - {{ carte.outils }}</h3>
      <a href="#" class="bg-green-400 p-2 m-2 rounded">Voir plus</a>
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
    opacity: 1;
    scale: 1.2;
    filter: blur(0px);
    transition: 1s;
}

  </style>
  