<template>
    <div class="flex justify-around items-center mt-10">
        <Carte v-for="carte of cartes" :key="carte.title" :carte="carte"/>
    </div>
</template>

<script setup lang="ts">
import Carte from './carte.vue';
import type { CarteInterface } from '~/interfaces/carte.interface';
import { defineProps } from 'vue';

const props = defineProps<{
    cartes: CarteInterface[];
}>();
</script>
