<template>
<div class="wrapper bg-red-100">

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
