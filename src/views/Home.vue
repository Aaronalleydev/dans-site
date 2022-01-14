<template>
  <div class="home">
    <HeroSection />
    <AboutDan />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '../components/HeroSection.vue'
import AboutDan from '../components/AboutDan.vue'


export default {
  name: "Home",
  components: { HeroSection, AboutDan },
};
</script>
