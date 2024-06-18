<template>  
  <div class="relative inset-0 w-full bg-[linear-gradient(to_right,#ececec12_1px,transparent_1px),linear-gradient(to_bottom,#ececec12_1px,transparent_1px)] bg-[size:24px_24px]">  
    <FirstPart/>
  </div>
  <div class="relative inset-0 w-full bg-indigo-950">  
    <SecondPart/>
  </div>
  <div>
    <FourthPart class="relative inset-0 w-full bg-indigo-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]"/>
  </div>
  <div class="relative inset-0 min-w-screen bg-indigo-950 overflow-x-hidden">
    <FifthPart/>
    <div class="flex flex-row justify-center items-center bg-black-300 min-h-36 text-white">
      <h2>©copyright 2023-2024 Milan Herbé </h2>
    </div>
  </div>

</template>
<script setup>
  import FirstPart from './components/firstPart.vue';
  import SecondPart from './components/secondPart.vue';
  import FourthPart from './components/fourthPart.vue'
  import FifthPart from './components/fifthPart.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

h1{
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

</style>
