<template>
    <div class="flex">
        <Avis v-for="avis of aviss" :key="avis.id" :avis="avis" class="mx-2"/>
    </div>



</template>

<script setup lang="ts">

import Avis from './avis.vue';
import type { avisInterface } from '~/interfaces/avis.interface';


const props = defineProps<{
    aviss: avisInterface[];
}>();

</script>

<style scoped>

</style>