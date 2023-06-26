<script setup>
import axios from "axios";
import { ref } from "vue";

let affirmation = ref(null);

function fetchAffirmation ()  { 
    axios.get("http://localhost:3004/affirmation")
    .then ((response) => {
    console.log ('La reponse', response)
    affirmation.value = response.data.affirmation
    console.log ('the affirmation',affirmation)
})
};

console.log (affirmation)

</script>

<template>
  <div class="FirstCard">
      <h1>Positive phrase of the day!</h1>
      <p class="TitleAffirmation">{{ affirmation}}</p><br>

    <div class="ButtonCss">
       <button @click="fetchAffirmation()" class="button-75">Click!</button>
    </div>
  </div>

</template>

<style scoped>

.FirstCard{
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  border: 1px solid #d0d0d0;

/* margin-top: 30px;
margin-left: 30px;
margin-right:30px; */

}
.TitleAffirmation {
  font-size: 20px;
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
  align-items: center;
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