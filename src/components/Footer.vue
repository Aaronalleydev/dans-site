<template>
<div class="border border-2 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between mt-16 sm:mt-8">
    <router-link to="/" class="p-2 mr-4 inline-flex items-center">
    <img src="../assets/img/logoNew.png" alt="" class="md:w-36 h-24 object-cover">
    </router-link>
    
    <div class="text-red-600 font-bold">
      <router-link :to="{ name: 'Home'}" class="m-6">Home</router-link>
      <router-link :to="{ name: 'Services'}" class="mr-6">Services</router-link>
      <router-link :to="{ name: 'Contact'}" class="mr-6">Contact</router-link>
      <router-link :to="{ name: 'TC'}" class="mr-6">T+C's</router-link>
      <router-link :to="{ name: 'TC'}">Privacy</router-link>
    </div>
    <p class="text-xs pt-4 mr-4">Created by <a href="#" class="text-blue-400">Alley Web Dev</a> for Alley Strength and nutrition</p>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>