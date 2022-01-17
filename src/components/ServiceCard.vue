<template>
<h2 class="text-4xl text-center text-red-800 font-bold">Services</h2>
  <div class="service-card grid md:grid-cols-3 gap-6 m-4">
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