<template>
<section class="text-center h-screen">
  <h1 class="text-xl"><span class="text-4xl text-red-600">Oops!!!</span> This page doesn't exist</h1>
  <p class="pt-4">Go back or click <router-link :to="{ name: 'Home'}" class="text-blue-600"> here</router-link> to go back to the homepage.</p>
</section>
  
</template>

<script>
export default {

}
</script>

<style>

</style>