<template>
<h1 class="text-center text-3xl text-red-800 py-16">Still not convinced, check out what my clients are saying...</h1>

<div class="hidden md:flex items-center justify-center">
<vueper-slides class=" w-full md:w-2/3 bg-red-200 text-xs md:text-sm">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
  </vueper-slides>
</div>

<div>
  <h1 class="md:hidden text-center">Review section</h1>
</div>
  
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
  slides: [
    {
      title: 'Jenny, Block',
      content: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, ipsum et varius rutrum, dui leo lacinia lacus, ac auctor purus felis id nunc. Vivamus euismod libero risus, sit amet accumsan neque laoreet quis. Mauris malesuada nunc et lectus luctus congue. Fusce ornare viverra eros, vitae fringilla erat finibus et. '"
    },
    {
      title: 'Slide #2',
      content: 'Slide content.'
    },
    {
      title: 'Slide #3',
      content: 'Slide content.'
    },
    {
      title: 'Slide #4',
      content: 'Slide content.'
    }
  ]
}),

text: 62 + 'px' 
}
</script>

<style>
  .vueperslide__title {
    font-weight: bolder;
    padding: 4px;
  }

  .vueperslide__content {
    padding: 25px;
  }

</style>