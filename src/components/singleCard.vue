<template>
<div class="container mt-16 h-full pt-12 sm:pt-0">
  <div class="card bg-gray-100 flex flex-col items-center justify-between shadow-xl text-gray-900 h-full">
    <div>
    <h3 class="text-3xl text-red-600 text-center font-bold capitalize pt-4">{{ card.title }}</h3>
    <h4 class="text-center text-lg font-bold text-gray-800 pt-4 border-b-2 border-gray-200 pb-4">{{ card.price}}</h4>
    <h4 class="font-bold text-2xl py-4 px-2">Who's this for</h4>
    <ul>
      <li v-for="item in card.who" :key="item" class="p-2 mx-6 text-lg list-disc"> {{ item }}</li>
    </ul>
    <h4 class="font-bold text-2xl py-4 px-2">What you get</h4>
    <ul>
      <li v-for="item in card.whatYouGet" :key="item" class="px-2 mx-6 text-lg list-disc">{{ item }}</li>
    </ul>
    </div>
    <div class="mb-12">
    <router-link :to="{ name: 'Contact' }">
    <button class="bg-red-600 hover:bg-red-500 rounded-full p-2 m-12 text-white text-2xl">Get started</button>
    </router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style>

</style>