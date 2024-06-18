<template>
    <div class="flex flex-col justify-center h-full w-full" id="fullpage">
        <div class="relative inset-0 w-full bg-[linear-gradient(to_right,#ececec12_1px,transparent_1px),linear-gradient(to_bottom,#ececec12_1px,transparent_1px)] bg-[size:24px_24px]">  
            <div class="flex items-center min-h-screen justify-center  bg-indigo-950" id="firstMain">
                <navbar class="absolute top-4"/>
                <Desc class="w-1/4 h-full"/>
                <BentoComponent class="w-1/2 h-full rounded-lg" id="bento"/>
            </div>
            </div>
            <div class="relative inset-0 w-full bg-indigo-950">  
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
        
            </div>
            <div class="relative inset-0 w-full bg-indigo-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]">
                <div class="min-h-screen min-w-full flex  items-center justify-around text-gray-200">
                    <div class="min-w-96 rounded" id="bio">
                        <h1 class="text-3xl my-4">Ma bio :</h1>
                        <p class="max-w-96 text-lg"
                        v-motion-slide-visible-top 
                        >
                            Passionné par le potentiel infini du web, je suis un développeur web 
                            créatif et curieux. Fort d'une expérience solide dans la conception et la réalisation 
                            de sites web dynamiques, je m'efforce de créer des expériences utilisateur exceptionnelles. 
                            Ma passion pour la technologie et mon engagement envers l'innovation me motivent à relever 
                            chaque nouveau défi avec enthousiasme. Mon objectif ? Transformer des idées en réalité digitale, 
                            une ligne de code à la fois.</p>
                        <div class="flex items-center justify-end">
                            <img src="../images/icons8-github-50.png" class="w-8 h-8">
                            <img src="../images/icons8-linkedin-50 (1).png" class="w-12 h-12">
                        </div>
                    </div>
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
                                    <button class="bg-slate-700 h-8 w-1/3 text-xs mx-auto my-8 rounded">Me contacter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
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
    </div>
</template>
<script setup>
</script>
<style scoped>
#firstMain {
    background-image: radial-gradient(white 0.25px, rgb(30, 27, 75) 0.75px);
    background-size: 50px 50px;
    perspective: 1000px;
}
#bento {
    transform: rotateX(20deg) rotateY(340deg);
    transform-style: preserve-3d;
}

</style>