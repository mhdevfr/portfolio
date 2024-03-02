
<template>
    <div>
        <ListeCarte
        :cartes="cartes"
        />
    </div>
</template>

<script setup lang=ts>
import { defineProps } from 'vue';
import ListeCarte from './listeCarte.vue';
import type { CarteInterface } from '~/interfaces/carte.interface';

const props = defineProps<{
    cartes: CarteInterface[]
}>()


</script>