<template>
  <div class="home">
    <HeroSection />
    <AboutDan />
    <ServiceCard :cardsData="cardsData" />
    <Review />
    <Socials />
    <HomeContact />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '../components/HeroSection.vue'
import AboutDan from '../components/AboutDan.vue'
import ServiceCard from '../components/ServiceCard.vue'
import Review from '../components/Review.vue'
import Socials from '../components/Socials.vue'
import HomeContact from '../components/HomeContact.vue'
import { ref } from '@vue/reactivity';


export default {
  name: "Home",
  components: { HeroSection, AboutDan, ServiceCard, Review, Socials, HomeContact },
  setup() {
    const cardsData = ref([
      {
        title: 'Training and nutrition plan', 
        price: '£99 monthly subscription', 
        who: ['If you have an understanding of the gym and want a customized program to follow to reach your goals. This plan will also help with your nutritional knowledge and goals', 'if you have sport specific goals and need a push in the right direction', 'Want a better understanding of different training methods and nutritional information.'], 
        whatYouGet: ['Weekly Check-ins', 'Bespoke training program', 'Customized calories and macros to hit your goals', 'Free copy of my 7-step nutrition guide', 'Daily/weekly/monthly habit tracking.', 'Access to my training app - MyPTHub', 'Via the app - Workout logging, demonstration videos, nutrition tracking (I receive live updates)', 'Unlimited messaging support', 'Monthly review', 'Access to my nutrition platform (Extra cost)'],
        id: 1},
      { img: require('../assets/img/food.jpeg'),
        title: '12 week nutrition Plan', 
      price: '£200', 
      who: ['Someone who wants to gain a deeper understanding of their nutrition and how it can help their goals. If your looking to set up habits that will last long term and not just a quick fix diet plan then this is for you'], 
      whatYouGet: ['7 step nutrition guide', '12 week bespoke nutrition plan', 'Sample meal plans - 2 per week for 6 weeks.', ' Daily/weekly/monthly habit tracking.', 'Daily/weekly/monthly habit tracking.']},
      
    ])

    return { cardsData }
  }
};
</script>

<style>
  
</style>
