<template>
    <div class="flex flex-col min-h-screen w-full">
        <Navbar/>
        <div>
            <Cartes :cartes="cartesData"/>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Navbar from './langNav.vue';
import Cartes from './cartes.vue';
import cartesData from './../data/carteData';
</script>
