<template>
    <VueWriter :array="message" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
</template>
  
  
<script setup lang="ts">
  import VueWriter from 'vue-writer';
  let message = ['développeur,','autodidacte,','front-end,','étudiant...']
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Madimi+One&family=Micro+5&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Micro+5&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Micro+5&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
.is-typed {
  font-family: "Lobster", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  color: rgb(131, 206, 108);
}

.is-typed span.typed {
  color: black;  
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.cursor.typing {
  animation: none;
}
@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

</style>