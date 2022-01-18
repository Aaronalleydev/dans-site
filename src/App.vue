<template>


    <TopNav />
    <div class="wrapper">
  <router-view />
  </div>
    <Footer />
</template>

<script>
import TopNav from './components/TopNav.vue'
import Footer from './components/Footer.vue'
export default {
  components: { TopNav, Footer }
}
</script>


<style>
  /* .wrapper {
    background-image: url('./assets/img/cool-background.png');
  } */
</style>
