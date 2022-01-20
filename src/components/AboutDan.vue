<template>
<div class="">
  
  <div class="flex flex-col lg:flex-row items-center  m-6 rounded-xl mt-16">
    <img src="../assets/img/about.jpeg" alt="" class="border rounded-xl w-full lg:w-2/3 h-96 object-fit">
    <div class="px-6 text-gray-800 text-lg">
      <h1 class="text-4xl text-red-600 font-bold text-center pt-8 pb-6 underline">About Me...</h1>
      <div class="pb-8">
        <p class="leading-8 tracking-wide">A qualified personal trainer, registered nutritionist and boxing coach. I come from an endurance & combat sport background. Working with clients in the UK, Europe & North America as well as face to face in one of the leading health clubs in Europe. My goal is to work with you to achieve your goals whether that is sports performance, weight loss or a lifestyle change.</p>
        <br>
        <p class="leading-8 tracking-wide">I truly believe in a flexible approach to training and nutrition and want to help educate and show you how you can enjoy your training, nutrition and life at the same time. Together we will find the right mix of exercise and nutrition to improve your lifestyle.</p> 
    </div>
    <router-link class="flex justify-center" :to="{ name: 'About'}">
      <button class="bg-red-600 rounded-full py-2 px-3 text-white">See more</button>
      </router-link>
    
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>