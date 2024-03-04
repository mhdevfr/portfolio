<template>
        <div class="min-h-screen min-w-full flex flex-col justify-center ml-40 border-gray-700">
            <h1 class="text-7xl mt-12 text-white ">Let's Talk</h1>
            <form class="flex flex-col">
                <input class="bg-transparent border-b-2 w-3/12 mt-8" type="text" placeholder="Votre prénom">
                <div class="flex">
                    <input class="bg-transparent border-b-2 w-3/12 my-8" type="text" placeholder="Le sujet">
                    <img src="../images/icons8-github-50-2.png" class="w-10 h-10 mt-10 ml-96">
                    <img src="../images/icons8-linkedin-50 (1).png" class="w-10 h-10 mt-10 ml-96">
                </div>
                <input class="bg-transparent border-2 min-h-96 my-8 w-3/4" type="text" placeholder="le contenu de votre message">
            </form>
        </div>
</template>

<script setup lang="ts">

</script>

<style>

input{
    outline: none;
}

</style>