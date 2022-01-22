<template>
<div class="hServicesHeader">
  <h2 class="serviceHeader text-4xl text-center text-red-600 font-bold mt-16 mb-16">How I can help you...</h2>
</div>
<div class="serviceContainer grid grid-cols-1 md:grid-cols-2 gap-20 m-8">
<div class="serviceCard shadow-xl">
  <router-link :to=" {name: 'Services'}">
    <div class="bgImg2 lg:bg-center lg:bg-cover h-96 flex items-end justify-center rounded-lg shadow-2xl shadow-red-600">
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
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function() {
    this.serviceScroll();
    this.servicesScroll1();
  },
  methods: {
    serviceScroll() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.hServicesHeader',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.serviceHeader', { y : innerWidth * 1, opacity: 0, duration: 1.2, ease: "power1.out"})
    },
    
    servicesScroll1() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.serviceContainer',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.serviceCard', { y : 500, opacity: 0, duration: 1.2 , ease: "power1.out"})
    }
  }
  }
</script>

<style>

</style>