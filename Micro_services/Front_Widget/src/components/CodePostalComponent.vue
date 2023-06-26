<script setup>
import axios from "axios";
import { ref } from "vue";

const CityOutput = ref ("")
const InputPostalCode= ref ("")

async function GetYourCity () {
	CityOutput.value = ""

	const response = await axios.get
	("http://localhost:3005/cityname/"+ InputPostalCode.value);
	CityOutput.value = response.data [0]
}

console.log ('Voici la ville', CityOutput)

</script>


<template>

<div class="PostalCode">
	<h1>Put a Postal Code!</h1>
	<div class="ConditionalRendering" v-if="CityOutput"></div>
	<h1>{{ CityOutput.nom}}</h1>
	<input class="InputTime" v-model="InputPostalCode" type="text" placeholder="choose city">


	<div class="ButtonCss">
       <button @click="GetYourCity()" class="button-75">Click!</button>
    </div>

</div>

</template>

<style scoped>

.PostalCode{
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  border: 1px solid #d0d0d0;
}
.input[type=text]:focus {
  border: 2px solid #555;
  border-radius: 4px;
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
  margin-top:20px;
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