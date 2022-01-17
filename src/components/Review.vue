<template>
<h1 class="text-center text-3xl text-red-800 py-16">Still not convinced, check out what my clients are saying...</h1>

<div class="flex items-center justify-center">
<vueper-slides class="w-2/3 bg-red-200 text-sm">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" :class="text"/>
  </vueper-slides>
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
      content: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, ipsum et varius rutrum, dui leo lacinia lacus, ac auctor purus felis id nunc. Vivamus euismod libero risus, sit amet accumsan neque laoreet quis. Mauris malesuada nunc et lectus luctus congue. Fusce ornare viverra eros, vitae fringilla erat finibus et. Phasellus molestie mi eu iaculis dictum. Aenean sit amet semper eros. Integer sit amet nisi faucibus, lacinia diam in, rutrum velit. Nullam condimentum orci ut lacus ullamcorper, ac rhoncus tellus feugiat. Praesent auctor nisi ac mauris feugiat, ornare fermentum odio gravida. Duis ac velit arcu. Nulla finibus eros nec justo.'"
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