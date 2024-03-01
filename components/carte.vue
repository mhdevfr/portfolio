<template>
    <div>
        <div class="w-3/12 h-1/2 bg-transparent rounded flex flex-col items-center bg-neutral-700 opacity-50 backdrop-blur-sm justify-center ">
            <h1 class="min-h-16">{{ carte.titre }}</h1>
            <img src="" class="max-w-80 rounded">
            <p class="min-h-40">Description : {{ carte.description }}</p>
            <h3>Outils utilisés : {{ carte.outils }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>


