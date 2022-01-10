<template>
<nav class="bg-red-100 border-red-200 px-2">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
      <router-link class="" to="/">
      <span>Alley strength and nutrition</span>
      </router-link>
  <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
      <li><router-link class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" to="/">Home</router-link></li>
      <li><router-link class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" to="/about">About</router-link></li>
    </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>