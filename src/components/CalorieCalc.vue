<template>
  <section class="calorieBox my-16 rounded-3xl">
  <form @submit.prevent="getBmr" class="grid m-auto w-4/5">
    <div class="flex flex-col items-center justify-center bg-red-500 p-14 rounded-tl-xl rounded-tr-xl shadow-lg">
    <h2 class="text-2xl text-gray-800 font-bold mb-4">Calorie Calculator</h2>
    <label class="text-gray-800 text-lg font-bold" for="weight">Weight</label>
    <input type="text" class="p-1 m-2 w-full text-center rounded-lg focus:bg-blue-100" required placeholder="Weight(KG)" name="weight" v-model="weight">
    <label class="text-gray-800 text-lg font-bold" for="height">Height</label>
    <input type="text" class="p-1 m-2 w-full text-center rounded-lg focus:bg-blue-100" required placeholder="Height(cm)" name="height" v-model="height">
    <label class="text-gray-800 text-lg font-bold" for="age">Age</label>
    <input type="text" class="p-1 m-2 w-full text-center rounded-lg focus:bg-blue-100" required placeholder="Age" name="age" v-model="age">

    <label class="text-gray text-lg font-bold" for="gender">Gender</label>
    <select class="bg-white p-1 m-2 w-full text-center rounded-lg focus:bg-blue-100" name="gender" id="gender" v-model="gender">
      <option value="disabled" disabled>Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    <label class="text-gray-800 text-lg font-bold" for="activity">Activity Level</label>
    <select class="bg-white p-1 m-2 w-full text-center rounded-lg focus:bg-blue-100" name="acitivity" id="activity" v-model="activity">
      <option value="disabled" disabled>Activity</option>
      <option value="sedentary">Sedentary(little or no weekly excercise)</option>
      <option value="light">Light activity(1-3 days a week)</option>
      <option value="moderate">Moderate activity(3-5 days a week)</option>
      <option value="very">Very active(6-7 days a week)</option>
      <option value="extra">Extra active(Hard sports/job + 2 x training a week)</option>
    </select>
    <button class="bg-red-700 text-white text-xl py-3 px-3 rounded-full mt-4">Calculate</button>
    </div>
    <div v-if="bmr" class="bg-red-400 p-6 text-lg text-gray-800 flex flex-col justify-center rounded-br-xl rounded-bl-xl shadow-lg">
      <p class="p-2">Your BMR(Basal Metabolic Rate) is the amount of calories your body burns daily if you were to do no activity at all.</p>
      <p class="p-2">Your BMR is: <span class="text-2xl text-blue-700 font-bold">{{ bmr }}</span> calories</p>
      <p class="p-2">Your daily calories is the amount of calories needed to maintain your current weight based off your current activity levels</p>
      <p class="p-2">Daily Calories: <span class="text-2xl text-blue-700 font-bold">{{ daily }}</span></p>
  </div>
  </form>
  </section>
</template>

<script>
// import { computed } from '@vue/reactivity'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
   mounted: function() {
    this.calorieScroll();
    // this.scrollAnimation1();
  },
  data() { 
    return {
      weight: null,
      height: null,
      age: null, 
      gender: null,
      activity: null,
      bmr: null,
      daily: null
    }
  },
  methods: {
    getBmr() {
      if( this.gender == 'male' && this.activity == 'sedentary') {
        this.bmr = Math.floor(66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age))
        this.daily = Math.floor(this.bmr * 1.2)
      } else if(this.gender == 'male' && this.activity == 'light'){
        this.bmr = Math.floor(66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age))
        this.daily = Math.floor(this.bmr * 1.375)
      } else if(this.gender == 'male' && this.activity == 'moderate'){
        this.bmr = Math.floor(66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age))
        this.daily = Math.floor(this.bmr * 1.55)
      } else if(this.gender == 'male' && this.activity == 'very'){
        this.bmr = Math.floor(66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age))
        this.daily = Math.floor(this.bmr * 1.725)
      }else if(this.gender == 'male' && this.activity == 'extra'){
        this.bmr = Math.floor(66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age))
        this.daily = Math.floor(this.bmr * 1.9)
      } else if (this.gender == 'female' && this.activity == 'sedentary') {
        this.bmr = Math.floor(655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age))
        this.daily = Math.floor(this.bmr * 1.2)
      } else if (this.gender == 'female' && this.activity == 'light') {
        this.bmr = Math.floor(655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age))
        this.daily = Math.floor(this.bmr * 1.375)
      } else if (this.gender == 'female' && this.activity == 'moderate') {
        this.bmr = Math.floor(655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age))
        this.daily = Math.floor(this.bmr * 1.55)
      } else if (this.gender == 'female' && this.activity == 'very') {
        this.bmr = Math.floor(655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age))
        this.daily = Math.floor(this.bmr * 1.725)
      } else if (this.gender == 'female' && this.activity == 'extra') {
        this.bmr = Math.floor(655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age))
        this.daily = Math.floor(this.bmr * 1.9)
      }
      this.weight = null
      this.height = null
      this.gender = null
      this.activity = null
      this.age = null
    },
    calorieScroll() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.calorieBox',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.calorieBox', { x : innerWidth * -1, opacity: 0, duration: 1.2, ease: "back.out(1.7)"})
    }
  }
}
</script>

<style>

</style>