<template>
    <div class="min-h-screen min-w-1/2 flex items-center justify-around">
        <div class="group h-96 w-96 [perspective: 1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                    <img src="../images/milan.jpeg" class="rounded-xl h-full object-cover shadow-black/40 w-full">
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                        <h1 class="text-3xl my-8">Milan Herbé</h1>
                        <p class="mx-auto text-lg my-4">💻 Développeur Web</p>
                        <p class="text-lg">👨🏻‍💻 : Actuellement étudiant</p>
                        <button class="bg-slate-700 h-8 w-1/3 text-xs mx-auto my-8 rounded">Me contactez</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">


</script> 

