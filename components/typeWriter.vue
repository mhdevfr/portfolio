<template>
    <VueWriter :array="message" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
</template>
  
  
<script setup lang="ts">
  import VueWriter from 'vue-writer';
  let message = ['Développeur,','Auto-Ditacte,','Front-End,']
</script>
  