<template>
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
  background-image: url('../assets/img/service1.jpeg');
  background-position: center;
}


</style>