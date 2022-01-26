<template>
<section class="">
  <div class="reviewTitle">
    <h2 class="reviewT text-center text-3xl text-red-600 py-16 px-2">Still not convinced, check out what my clients are saying...</h2>

  </div>
  
  <div class="grid md:grid-cols-3 md:m-6 md:p-6 text-gray-800">
    <div class="reviewText pb-6" v-for="review in reviews" :key="review.id">
      <p class="review1 italic tracking-wide mx-6">"{{ review.review }}"</p>
      <p class="review1 text-right pr-8 text-lg font-bold">{{ review.name }}</p>
    </div>
  </div>
</section>
</template>

<script>
const { ref }=require('@vue/reactivity')
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function() {
    this.reviewScroll();
    this.reviewScroll2();
  },
  methods: {
    reviewScroll() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.reviewTitle',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.reviewT', { x : innerWidth * 1, opacity: 0, duration: 1.2, ease: "back.out(1.7)"})
    },
    reviewScroll2() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.reviewText',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.review1', { y : 500, opacity: 0, duration: 1.2, ease: "back.out(1.7)"})
    }
  },
  setup() {
    const reviews = ref([
      {
        name: 'Ollie.B - Nutrition Client',
        review: 'Alley nutrition where do I start.... I started my programme with Daniel like every other new beginning full of doubt and disbelief thinking I\'ll be back in here in 6 weeks weighing exactly the same as when I started, but how wrong I was. I found his programme and directions very easy to follow with some fantastic meals tasting absolutely divine, whenever I needed help he\'d be right on the other end of phone guiding me all the way through it, I stuck to the plan and trained as much as I could and 6 weeks later I was 10kg down lean leaner and meaner than ever. Anyone looking to start this plan I would highly recommend, stick to it and I promise you\'ll see results..... THANKS ALLEY NUTRITION!'
      },
      {
        name: 'Louise.A - Online PT and Nutrition',
        review: 'I’ve never done an online training program before and was a bit skeptical. Daniel made it really easy to follow and keep track. I started to see results quickly and the habit tracking really helped me keep on plan. I’ve come out stronger than I have ever been and my knowledge of training and nutrition has gone through the roof!'
      },
      {
        name: 'Karina.L - Nutrition Client',
        review: 'I feel like I’ve had so much support from the start - at first I’ll admit seeing how much food was on my meal plans was a bit scary as I do not usually eat that much.\nAlong with my weekly check in’s and able to feel that I could ask any questions at any time… kept me super focused, really enjoying all aspects, and having so much more energy/better fitness.\nWhen I had ‘a week off’ at the end of 6 weeks, I went to the supermarket to do my weekly food shop & automically went for foods that were on the last meals plans, so completely changing my eating habits without me even realising until I got home and unpacked the shopping. \nFrom pretty much not eating any carbs to eating more than I’ve never eaten and losing weight/ changing shape, I’ve definitely found out that carbs are good and I’ll not return to my former fat self by eating them '
      },
    ])
    return { reviews }
  }
}
</script>

<style>

</style>