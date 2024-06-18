<template>
  <div
    id="right"
    class="h-full rounded-lg flex flex-col justify-center items-center"
  >
    <Terminal id="component" />
  </div>
</template>

<script setup lang="ts">
import Terminal from "./terminal.vue";
</script>

<style scoped>
#right {
  perspective: 1000px;
}

#component {
  transform: rotateX(30deg) rotateY(245deg);
  transform-style: preserve-3d;
}
</style>
