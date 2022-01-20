<template>
  <div style="">
<h2 class="text-4xl text-center text-red-600 font-bold mt-16 mb-16">How I can help you...</h2>
</div>
<div class="serviceContainer grid grid-cols-1 md:grid-cols-2 gap-20 m-8">
<div class="serviceCard shadow-xl">
  <router-link :to=" {name: 'Services'}">
    <div class="bgImg2 lg:bg-center lg:bg-cover h-96 flex items-end justify-center rounded-lg">
    <p class="bg-gray-900 bg-opacity-50 h-16 sm:pt-4  text-white font-bold text-xl w-full text-center">Online Training and Nutrition plan</p>
    </div>
  </router-link>
</div>
<div class="serviceCard shadow-xl">
  <router-link :to=" {name: 'Services'}">
    <div class="bgImg bg-center bg-cover h-96 flex items-end justify-center rounded-lg">
    <p class="bg-gray-900 bg-opacity-50 h-16 pt-4 text-white font-bold text-xl w-full text-center">12 week nutrition plan</p>
    </div>
  </router-link>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>