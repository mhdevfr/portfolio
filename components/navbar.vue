<template>
  <div class="h-screen flex items-center" v-motion-slide-visible-left>
    <ul
      class="bg-black flex flex-col width m-10 text-white rounded-full w-16 text-center justify-center h-2/3 items-center"
    >
      <li class="mb-10"><a href="#" class="">🏠 Accueil</a></li>
      <li class="mb-10"><a href="#">📦 Projets</a></li>
      <li class="mb-10"><a href="#">💻 Skills</a></li>
      <li class="mb-10"><a href="#">📔 Bio</a></li>
      <li class="mb-10"><a href="#" size="">🧾 F.A.Q</a></li>
      <li class="mb-10"><a href="#">💬 Contact</a></li>
      <a href="https://github.com/mhdevfr"
        ><img src="./../images/icons8-github-50-2.png" width="20px"
      /></a>
      <li class="mb-10"><a href="#"></a></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
a {
  font-size: 10px;
}
</style>
