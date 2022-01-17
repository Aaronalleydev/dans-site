<template>
  <div class="card bg-red-200 flex flex-col items-center shadow-2xl m-2 text-gray-900">
    <div class="w-full h-1/3 rounded-lg shadow-lg">
      <img class="w-full h-full rounded-t-lg" :src="card.img" alt="">
    </div>
    <div>
    <h3 class="text-3xl text-red-900 text-center font-bold capitalize pt-4">{{ card.title }}</h3>
    <h4 class="text-center text-lg font-bold text-gray-800 pt-4">{{ card.price}}</h4>
    <h4 class="font-bold text-2xl py-4 px-2">Who's this for</h4>
    <ul>
      <h4 v-for="item in card.who" :key="item" class="p-2 m-2 text-lg">- {{ item }}</h4>
    </ul>
    <h4 class="font-bold text-2xl py-4 px-2">What you get</h4>
    <ul>
      <li v-for="item in card.whatYouGet" :key="item" class="px-2 text-lg"> - {{ item }}</li>
    </ul>
    </div>
    <router-link :to="{ name: 'Contact' }">
    <button class="border-red-800 border-4 rounded-full p-2 m-2 text-2xl">Get started</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style>

</style>