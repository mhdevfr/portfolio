<template>
    <div class="relative inset-0 min-w-screen bg-indigo-950 overflow-x-hidden">
        <div class="min-h-screen min-w-full flex flex-col justify-center ml-40 border-gray-700">
            <h1 class="text-7xl mt-12 text-white ">Let's Talk</h1>
            <form class="flex flex-col">
                <input class="bg-transparent border-b-2 w-3/12 mt-8 text-white" type="text" placeholder="Votre prénom">
                <div class="flex">
                    <input class="bg-transparent border-b-2 w-3/12 my-8 text-white" type="text" placeholder="Le sujet">
                    <img src="../images/icons8-github-50-2.png" class="w-10 h-10 mt-10 ml-96">
                    <img src="../images/icons8-linkedin-100.png" class="w-10 h-10 mt-10 ml-24">
                    <img src="../images/icons8-courrier-60.png" class="w-10 h-10 mt-10 ml-24">
                </div>
                <input class="bg-transparent border-2 min-h-96 my-8 w-3/4 text-white" type="text" placeholder="le contenu de votre message">
                <input type="submit" class="submit bg-white w-32 h-8 hover:bg-green-400 transition:500">
            </form>
        </div>
        <div class="flex flex-row justify-center items-center bg-black-300 min-h-36 text-white">
            <h2>©copyright 2023-2024 Milan Herbé </h2>
          </div>
    </div>
        
</template>

<script setup lang="ts">

</script>

<style>

input{
    outline: none;
}



</style>