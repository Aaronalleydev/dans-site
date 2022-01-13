<template>
<div class="grid grid-cols-2 grid-rows-2 max-w-screen-xl m-auto bg-red-100">
  <div class="row-span-2">
    <img class="" src="../assets/img/AlleyLogoClear.png" alt="A picture of dan">
  </div>
  <div class="bgImg flex flex-col justify-center items-center">
    <h1 class="text-4xl">Hero section text</h1>
    <p>Super catchy tag line</p>
  </div>
  <div class="flex justify-center items-center">
    <button class="bg-indigo-700 text-4xl p-3 rounded-full text-red-700 font-bold uppercase">Call to action</button>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.bgImg {
  background-image: url('../assets/img/hero3.jpeg');
  opacity: 0.8;
}
</style>