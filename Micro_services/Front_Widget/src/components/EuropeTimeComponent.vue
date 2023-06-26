<script setup>
import axios from "axios";
import { ref } from "vue";

const CityTime = ref (""); // stocke la réponse HTTP
const fraise = ref ("") // stocke la ville

async function GetEuropeTime () {
	CityTime.value =""
	console.log ("cette fraise",fraise.value)

	const response = await axios.get
	("http://localhost:3006/time/europe/" + fraise.value);
	CityTime.value = response.data
}

console.log ("cette city",CityTime)

</script>


<template>

<div class="EuropeanTime">
	<h1>Europe Time !</h1>
    <div v-if="CityTime">
	    <h1>{{ CityTime.hour }} : {{ CityTime.minute }}</h1>
    </div>
    <div v-else="">
 </div>

	    <input class="InputTime" v-model="fraise" type="text" placeholder="Choose an European city!">
	<div>
		<button class="button-75" @click = "GetEuropeTime ()" id="button">click </button>
	</div>
</div>

</template>

<style scoped>

.EuropeanTime{
	font-family: 'Noto Sans', sans-serif;
	display: flex;
	margin-top:20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	gap: 20px;
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