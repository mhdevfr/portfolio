<template>
    <div class="flex h-screen w-full justify-center items-center">
      <div class="w-3/4 bg-transparent h-5/6 rounded-xl flex items-start">
          <div class="flex-col flex w-full h-full">
              <div class="w-full h-1/3  rounded-xl flex mb-2">
                  <div class="w-1/2 bg-black h-full text-white rounded-lg mr-2 p-4">
                      <h1>Mes Outils</h1>
                      <div class="flex mt-2 h-16 justify-center p-2 w-full flex-wrap items-center">
                          <Icon name="uil:github" size="64" /> 
                          <Icon name="vscode-icons:file-type-git2" class="bg-white rounded-xl" size="64" />
                          <Icon name="vscode-icons:file-type-vscode" size="64" />
                          <Icon name="ri:copilot-fill" size="64" />
                          <Icon name="ri:openai-fill" size="64" />
                          <Icon name="skill-icons:gitlab-light" size="64" />
                      </div>
                  </div>
                  <div class="w-1/2 bg-black h-full rounded-lg text-white pb-4 p-4">
                      <h1>Mes technologies</h1>
                      <div class="mt-2 flex h-16 items-center w-full flex-wrap justify-center">
                          <img src="../images/css.png" alt="css" class="w-16"/>
                          <img src="../images/html.png" alt="html" class="w-16"/>
                          <img src="../images/js.png" alt="js" class="w-16"/>
                          <img src="../images/vue.png" alt="vue" class="w-16"/>
                          <img src="../images/tailwind.png" alt="tailwind" class="w-16"/>
                          <img src="../images/true.png" alt="nuxt" class="w-16"/>
                      </div>
                  </div>
              </div>
              <div class="w-full h-1/3 bg-black rounded-xl">
              </div>
              <div class="w-full h-1/3 bg-black rounded-xl mt-2">
              </div>
          </div>
          <div class="h-full w-2/4 bg-black rounded-xl flex text-white flex-col p-2 ml-2">
              <div class="h-1/4 p-4">
                  <h1 class="text-xl">Explorez mes projets</h1>
                  <p class="mt-2">Après 1 an d'apprentissage et de développement j'ai pu développer un tas de projets web</p>
              </div>
              <ProjectsCarousel class="h-1/2"/>
              <div class="p-4 mt-2 text-black">
                  <p>Description du projet </p>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import langueBar from "./langNav.vue";
  import ProjectsCarousel from "./projectsCarousel.vue";
  </script>
  