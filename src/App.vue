<template>
<div class="wrapper">

    <TopNav />
  <router-view />
    <Footer />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Footer from './components/Footer.vue'
export default {
  components: { TopNav, Footer }
}
</script>


<style>

</style>
