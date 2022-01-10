<template>
    <TopNav />
  <router-view />
</template>

<script>
import TopNav from './components/TopNav.vue'
export default {
  components: { TopNav }
}
</script>


<style>

body {
  background-color: #F87171;
}
#app {
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
