<template>
<div>
<h2 class="text-4xl text-center text-red-700 font-bold mt-16">How I can help you...</h2>
</div>
  <div class="service-card grid md:grid-cols-2 md:gap-28 md:mx-16 overflow-hidden">
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

</style>