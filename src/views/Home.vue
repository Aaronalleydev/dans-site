<template>
  <div class="home">
    <HeroSection />
    <AboutDan />
    <HomeService />
    <Review />
    <Socials />
    <h1 class="text-2xl text-center py-6 text-red-600 font-bold">Ready to get started or want to find out more</h1>
    <HomeContact />
    <CalorieCalc />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '../components/HeroSection.vue'
import AboutDan from '../components/AboutDan.vue'
import HomeService from '../components/HomeService.vue'
import Review from '../components/Review.vue'
import Socials from '../components/Socials.vue'
import HomeContact from '../components/HomeContact.vue'
import CalorieCalc from '../components/CalorieCalc.vue'



export default {
  name: "Home",
  components: { HeroSection, AboutDan, HomeService, Review, Socials, HomeContact, CalorieCalc },
  setup() {}
};
</script>

<style>
  
</style>
