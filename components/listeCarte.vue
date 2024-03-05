<template>
    <div class="flex flex-col mt-16">
            <div class="flex justify-around items-center mt-10">
                <Carte 
                v-for="carte of cartes"
                :key="carte.id" 
                :carte="carte"
                :class="{ 'carteActive': carte.id === carteActiveId }"
                />
            </div>
            <div class="flex items-center min-w-full mt-10 justify-center">
                <img src="../images/left.png" @click="changeCarte(-1)" class="w-12 mt-8 mr-4">
                <img src="../images/right.png" @click="changeCarte(+1)" class="w-12 mt-8 ml-4">
            </div>
    </div>
</template>

<script setup lang="ts">
import Carte from './carte.vue';
import type { CarteInterface } from '~/interfaces/carte.interface';
import { defineProps } from 'vue';
import carteData from '~/data/carteData';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const props = defineProps<{
    cartes: CarteInterface[];
}>();

let carteActiveId = ref(2);



const changeCarte = (number: number) => {
    const newCarteId = carteActiveId.value + number;
    if (newCarteId >= 1 && newCarteId <= props.cartes.length) {
        carteActiveId.value = newCarteId;
    }
}






</script>


<style scoped>

.active{
    background-color: aliceblue;
}

.isActive{
    background-color: aliceblue;
}

.carteActive{
    opacity: 0.75;
    scale: 1.2;
}

</style>