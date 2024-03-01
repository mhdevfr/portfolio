<template>
    <div class="flex flex-col min-h-screen w-full">
        <Navbar/>
        <carte/>
    </div>
</template>

<script setup lang='ts'>
import Navbar from './langNav.vue';
import cartesVue from './cartes.vue';
import carte from './carte.vue'
</script>