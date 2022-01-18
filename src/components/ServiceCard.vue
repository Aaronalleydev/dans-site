<template>

<div style="">
<h2 class="text-4xl text-center text-red-700 font-bold mt-16">How I can help you...</h2>
</div>
<div class="serviceContainer grid grid-cols-1 md:grid-cols-2 gap-20">
<div class="serviceCard">
  <router-link :to=" {name: 'Contact'}">
    <div class="bgImg2 bg-center bg-cover h-96 flex items-end justify-center">
    <p class="bg-gray-900 bg-opacity-50 h-16 pt-4 text-white font-bold text-xl w-full text-center">Training and nutrition plan</p>
    </div>
  </router-link>
</div>
<div class="serviceCard">
  <router-link :to=" {name: 'Contact'}">
    <div class="bgImg bg-center bg-cover h-96 flex items-end justify-center">
    <p class="bg-gray-900 bg-opacity-50 h-16 pt-4 text-white font-bold text-xl w-full text-center">12 week nutrition plan</p>
    </div>
  </router-link>
</div>
</div>
  <div class="service-card grid mx-2 md:grid-cols-2 md:gap-28 md:mx-16 overflow-hidden">
    <div v-for="card in cardsData" :key="card.id">
      <SingleCard :card="card" />
    </div>
  </div>
</template>

<script>
// import { ref } from '@vue/reactivity'
import SingleCard from '../components/singleCard.vue'
export default {
  components: { SingleCard },
  props: ['cardsData'],
  setup() {}
}
</script>

<style>
.bgImg {
  background-image: url('../assets/img/foodHero.jpeg');
  background-position: center;
}

.bgImg2 {
  background-image: url('../assets/img/hero2.jpeg');
  background-position: center;
}


</style>