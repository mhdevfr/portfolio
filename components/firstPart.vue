
<template>
    <div class="relative inset-0 w-full bg-[linear-gradient(to_right,#ececec12_1px,transparent_1px),linear-gradient(to_bottom,#ececec12_1px,transparent_1px)] bg-[size:24px_24px]">  
    <div class="flex items-center min-h-screen justify-center  bg-indigo-950" id="firstMain">
        <Desc class="w-1/4 h-full"/>
        <BentoComponent class="w-1/2 h-full rounded-lg" id="bento"/>
    </div>
    </div>
</template>

<script setup>







</script>

<style>
    #firstMain {
        background-image: radial-gradient(white 0.25px, rgb(30, 27, 75) 0.75px);
        background-size: 50px 50px;
        perspective: 1000px;
    }
    #bento {
        transform: rotateX(30deg) rotateY(335deg);
        transform-style: preserve-3d;
    }
</style>