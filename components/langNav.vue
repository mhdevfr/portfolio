<template>
    <div class="flex flex-col justify-items-center items-center w-full">
        <h1 class="text-white text-2xl mt-8">Mes outils de travail</h1>
        <div id="pictures" 
            class="max-h-16 my-8 w-3/12 animate-pulse mx-auto bg-slate-800 rounded-full flex justify-center items-center z-50">
            <div class="blur-3xl bg-green-500 absolute w-1/2 h-1/2 rounded-full opacity-20 -z-50"></div>
        <img src="./../images/react.png">
        <img src="./../images/js.png">
        <img src="./../images/tailwind.png">
        <img src="./../images/vue.png">
        <img src="./../images/php.png">
        <img src="./../images/figma.png">
        </div>

    </div>
</template>

<script setup>

</script>

<style>

#pictures img{
    width:48px;
}

</style>