<template>  
  <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">  
    <FirstPart/>
  </div>
  <hr>
  <div class="relative inset-0 w-full bg-black bg-[linear-gradient(to_right,#ececec12_1px,transparent_1px),linear-gradient(to_bottom,#ececec12_1px,transparent_1px)] bg-[size:24px_24px]">  
    <SecondPart/>
  </div>
</template>

<script setup>
  import FirstPart from './components/firstPart.vue';
  import SecondPart from './components/secondPart.vue';
</script>

<style>
</style>
