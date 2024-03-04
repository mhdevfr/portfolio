<template>
    <div class="flex flex-col">
            <div class="flex justify-around items-center mt-10">
                <Carte v-for="carte of cartes" :key="carte.id" :carte="carte"/>
            </div>
            <div class="flex items-center min-w-full justify-center">
                <button @click="changeCarte(-1)"  class="bg-slate-700 rounded-full h-3 w-3 hover:bg-gray-300"></button>
                <button @click="changeCarte(0)" class="bg-slate-700 rounded-full h-3 w-3 my-8 mx-4 hover:bg-gray-300"></button>
                <button @click="changeCarte(+1)" class="bg-slate-700 rounded-full h-3 w-3 hover:bg-gray-300"></button>
            </div>
    </div>
</template>

<script setup lang="ts">
import Carte from './carte.vue';
import type { CarteInterface } from '~/interfaces/carte.interface';
import { defineProps } from 'vue';
import carteData from '~/data/carteData';

const props = defineProps<{
    cartes: CarteInterface[];
}>();


const changeCarte = (number: Number) => {
    if(number === -1){
        console.log('ceci est un test')
    } else if(number === 0){
        console.log('ceci est un 2nd ')
    } else {
        console.log('ceci est le dernier');
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
    border: 1px solid aliceblue;
    opacity: 1;
    scale: 1.2;
}

</style>