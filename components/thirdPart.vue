<template>
    <div class="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 class="text-white text-4xl">Mes recommandations</h1>
        <hr class="max-h-16 my-8 w-5/6">
        <Avisliste :aviss="avisData" class="w-3/4 flex overflow-hidden"/>
    </div>
</template>



<script setup lang=ts>
    import Avisliste from './avisListe.vue';
    import avisData from '~/data/avisData';

</script>


<style scoped>
</style>