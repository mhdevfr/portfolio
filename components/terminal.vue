<template>
<div class="w-1/2 mx-auto flex items-center" 

    v-motion="{
        initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }">  
    
  <div class="w-full shadow-2xl h-full subpixel-antialiased rounded bg-black border-black mx-auto ">
    <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                    </div>
                        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                        </div>
                    <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                </div>
<div class="mx-auto pr-16" id="terminaltitle">
    <p class="text-center text-sm">Terminal</p>
     </div>
         </div>
            <div class="pl-1 pt-1 h-full text-green-200 font-mono text-xs bg-black" ref="terminal">
              <div v-if="!textMe">
                <p class="pb-1">Last changes: {{ onejan }} by Milan</p>
                <p class="pb-5">ubuntu:portfolio mhdev$</p>
                <p class="pb-1">Initialization...</p>
                <p class="pb-1">Making new portfolio...</p>
                <p class="pb-1">$//**//**//**//**//$</p>
                <p class="pb-10">Project Vue, Nuxt, Tailwind Created</p>
                <p class="pb-1">Ready to have a look.</p>
              </div>
              <div v-if="textMe">
                <p>Salut moi c'est Milan !</p>
              </div>
                <div class="flex justify-center h-full items-center">
                  <button @click="textMe" class="bg-green-400 m-8 text-black text-xl p-4 rounded-lg">
                  <Icon name="pepicons-pop:text-bubbles" />
                  Text me
                </button>
                </div>
            </div>
  </div> 
</div>

</template>

<script setup>
const textMe = ref(false);
</script>

<style scoped>


</style>