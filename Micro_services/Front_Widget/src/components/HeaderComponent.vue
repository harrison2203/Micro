<script setup>
import { computed, inject } from 'vue';

const store = inject('store');
const name = computed(() => store.state.name);
</script>


<template>
  <div class="Header">
    <h2>Bienvenue : </h2>
    <h1>{{ name }}</h1>
  </div>
</template>


<style scoped>

.Header{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
	background-color: beige;
  font-family: 'Noto Sans', sans-serif;
}

</style>