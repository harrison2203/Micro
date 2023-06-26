<script setup>
import AffirmationComponent from '../components/AffirmationComponent.vue';
import CodePostalComponent from '../components/CodePostalComponent.vue';
import EuropeTimeComponent from '../components/EuropeTimeComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
	
<div class="Parent">

	<header>
	<div class="Interaction">
		<HeaderComponent />
	</div>
	</header>
	
	<div class="MainPage">
		<div class="Affirmation">
			<AffirmationComponent/>
		</div>

		<div class="EuropeTime">
			<EuropeTimeComponent/>
		</div>

		<div class="CityName">
			<CodePostalComponent/>
		</div>
	</div>

</div>
  </template>
  

  <style scoped>

.Parent{
	background-color: beige;
	padding-right: 300px;
	padding-left: 300px;
	padding-top: 100px;
}
.MainPage{
	display: flex;
	flex-direction:column;
	gap: 30px;
	/* grid-template-columns: auto auto; */
}

.Affirmation{
    background-color: rgb(206, 198, 188)
}

.EuropeTime{
	background-color: rgb(206, 198, 188)
}

.CityName{
	background-color: rgb(206, 198, 188);
	margin-bottom: 30px;
}

</style>