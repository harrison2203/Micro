<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const store = inject('store');
const router = useRouter();

function Inscription() {
  store.commit('setName', name.value) 
    if (name.value.length === 0) {
       window.alert ("you have to put your name")
    } else {
    router.push({ name: 'test' }); // Naviguer vers la vue InteractionView
    }
  }

</script>

<template>

<div class="FirstContainer">

  <div class="Titre">
  <h1>Bienvenue !</h1>
  </div>

  <div class="Form">
  <form>
    <label class="Name">Enter your name!</label>
    <input class="input" type="text" placeholder="enter name" autocomplete="current-password" v-model="name" /><br />

    <button @click="Inscription" class="button-75">Continue</button>
  </form>
  </div>
</div>

</template>

<style scoped>

*{
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input[type=text]:focus {
  border: 2px solid #555;
  border-radius: 4px;
}
.FirstContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans', sans-serif;
}

.Form{
  display:flex;
  background-color:bisque;
  margin: 20px;
  padding: 10px;
}

.Name{
  font-family: 'Noto Sans', sans-serif;
  font-size: 17px;
  display:flex;
  align-items:center;
}
.button-75 {
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-75:active {
  outline: 0;
}
.button-75:hover {
  outline: 0;
}
.button-75 span {
  transition: all 200ms;
}
.button-75:hover span {
  transform: scale(.9);
  opacity: .75;
}
@media screen and (max-width: 991px) {
  .button-75 {
    font-size: 15px;
    height: 50px;
  }
  .button-75 span {
    line-height: 50px;
  }
}
</style>