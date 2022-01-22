<template>
<div class="">
  <div class="reviewTitle">
    <h1 class="reviewT text-center text-3xl text-red-600 py-16 px-2">Still not convinced, check out what my clients are saying...</h1>

  </div>
  
  <div class="grid md:grid-cols-3 md:m-6 md:p-6 text-gray-800">
    <div class="reviewText pb-6" v-for="review in reviews" :key="review.id">
      <p class="review1 italic tracking-wide mx-6">"{{ review.review }}"</p>
      <p class="review1 text-right pr-8 text-lg font-bold">{{ review.name }}</p>
    </div>
  </div>
</div>
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
        name: 'Harvey Walbanger',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis posuere velit, a ultrices ante. Ut semper convallis orci, eget commodo orci fringilla facilisis. Nam tincidunt vehicula lorem, consectetur varius lacus tincidunt eu. Nulla facilisi. Vestibulum maximus lacus non ex accumsan fringilla. Donec sed magna egestas, auctor libero eget, molestie. '
      },
      {
        name: 'prince andrew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis posuere velit, a ultrices ante. Ut semper convallis orci, eget commodo orci fringilla facilisis. Nam tincidunt vehicula lorem, consectetur varius lacus tincidunt eu. Nulla facilisi. Vestibulum maximus lacus non ex accumsan fringilla. Donec sed magna egestas, auctor libero eget, molestie. '
      },
      {
        name: 'Epstein',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis posuere velit, a ultrices ante. Ut semper convallis orci, eget commodo orci fringilla facilisis. Nam tincidunt vehicula lorem, consectetur varius lacus tincidunt eu. Nulla facilisi. Vestibulum maximus lacus non ex accumsan fringilla. Donec sed magna egestas, auctor libero eget, molestie.'
      },
    ])
    return { reviews }
  }
}
</script>

<style>

</style>