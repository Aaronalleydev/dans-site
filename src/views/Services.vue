<template>
  <h1 class="text-4xl text-red-600 font-bold text-center">Our plans</h1>
  <p class="text-gray-800 text-lg text-center leading-8 tracking-wide px-4 py-4">These plans have been created to enable you to reach your fitness and nutrition goals whatever they may be. Whether you are training for an event and want to get that extra couple % to perform at your best on the day, you take part in ongoing sports that require you to be at your peak all the time or if you just want to feel better and fitter in yourself on a day-to-day basis.</p>
  <p class="text-gray-800 text-lg text-center leading-8 tracking-wide">If you're looking for something that's not covered in the plans please contact me using the contact page and we can have a chat about what we can do for you.</p>
  <ServiceCard :cardsData="cardsData"/>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'
const { ref }=require('@vue/reactivity')
  export default {
  components: { ServiceCard },
  setup() {
    const cardsData = ref([
      {
        title: 'Online Training and Nutrition plan', 
        price: '£99 monthly subscription', 
        who: ['You have an understanding of the gym and want a customised program to follow to reach your goals. This plan will also educate and help with your nutritional and programing knowledge', 'And/Or you have sport specific goals and need a push in the right direction.', 'And/Or you want a better understanding of different training methods and nutritional information.'], 
        whatYouGet: ['Onboarding call', 'Weekly Check-ins', 'Bespoke training program', 'Customized calories and macros to hit your goals', 'Daily/weekly/monthly habit tracking.', 'Access to my training app - MyPTHub', 'Via the app - Workout logging, demonstration videos, nutrition tracking, Unlimited messaging support', 'Monthly review', 'Access to my nutrition platform (Extra cost)'],
        },
      { 
        title: '12 week nutrition Plan', 
        price: '£200', 
        who: ["You want to gain a deeper understanding of your nutrition and how it can help you achieve your goals. If you're looking to set habits that will last long term and not just a quick fix diet plan then this is for you."], 
        whatYouGet: ['Onboarding call', '12 week bespoke nutrition plan', 'Sample meal plans', ' Daily/weekly/monthly habit tracking.', 'Access to my nutrition app - with access to 100\'s of meals, a weekly meal planner, habit tracker, nutritional information and a live chat function with me.', 'Weekly nutritional information emails', 'Weekly check-ins', 'Monthly reviews', 'Daily messaging support']},
        
    ])

    return { cardsData }
  }
  }
</script>

<style>

</style>