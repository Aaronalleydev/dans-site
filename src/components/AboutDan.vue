<template>
<section class="">
  
  <div class="box2 flex flex-col lg:flex-row items-center  m-6 rounded-xl mt-16">
    <img src="../assets/img/about.jpeg" alt="A balck and white picture of Daniel weight lifting in the gym" class="img1 border rounded-xl w-full lg:w-2/3 h-96 object-fit">
    <div class="px-6 text-gray-800 text-lg">
      
      <div class="pb-8 box1">
          <h2 class="text1 text-4xl text-red-600 font-bold text-center pt-8 pb-6 underline">About Me...</h2>
          <p class="text1 leading-8 tracking-wide">A qualified personal trainer, registered nutritionist and boxing coach. I come from an endurance & combat sport background. Working with clients in the UK, Europe & North America as well as face to face in one of the leading health clubs in Europe. My goal is to work with you to achieve your goals whether that is sports performance, weight loss or a lifestyle change.</p>
          
          <br>
          
          <p class="text1 leading-8 tracking-wide">I truly believe in educating you to understand how to reach your full potential and smash through any goals we have! We will put a flexible training and nutrition plan in place that will help you enjoy your training, nutrition and life at the same time. Together we will find the right mix of exercise and nutrition to improve your lifestyle.</p> 
          <br>
          <div class="text1">
          <p>Together we will:</p>
          <p><b class="text-red-600 text-2xl">T</b>ailor plans to suit you and your lifestyle</p>
          <p><b class="text-red-600 text-2xl">E</b>ducate you with the tools to go beyond the program</p>
          <p><b class="text-red-600 text-2xl">A</b>nalyse your current lifestyle to help you achieve the best you</p>
          <p><b class="text-red-600 text-2xl">M</b>otivate daily and track habits to push you to the next level</p>
          </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function() {
    this.scrollAnimation();
    this.scrollAnimation1();
  },
  methods: {
    scrollAnimation() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.box1',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.text1', { x : innerWidth * 1, opacity: 0, duration: 1.2, ease: "power2.out"})
    },
    scrollAnimation1() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.box2',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.img1', { x : -500, opacity: 0, duration: 1.2, ease: "power2.out"})
    }
  }
}
</script>

<style>
.fade-enter-from {
    opacity: 0;
    transform: translateY(100px);
}

.fade-enter-active {
    transition: all 1s ease;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 3s ease;
}
</style>