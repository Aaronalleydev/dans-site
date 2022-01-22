<template>


    <TopNav />
    
  <router-view > 
    
  </router-view>
 
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
/* Route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
