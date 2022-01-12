<template>
<nav class="flex items center bg-red-300 p-3 flex-wrap">
  <router-link to="/" class="p-2 mr-4 inline-flex items-center">
  <img src="../assets/img/AlleyLogoClear.png" alt="" class="w-36 h-24">
  </router-link>
  <button @click="menuOpen" class="text-red-900 inline-flex items-center p-3 roundeed lg:hidden ml-auto">
    <span class="material-icons">menu</span>
  </button>
  <div :class="{toggleNav: open}" class="text-center text-xl w-full lg:inline-flex lg:flex-grow lg:w-auto lg:pt-5" id="navigation">
    <div class="lg:inline-flex lg:flex-row lg:ml-auto">
      <ul class="flex flex-col lg:flex-row">
        <li v-for="link in links" :key="link">
          <router-link class="lg:inline-flex lg:w-auto px-3 py-5 lg:text-2xl rounded text-red-900 uppercase font-bold hover:text-white" :to="link.link">{{ link.name }}</router-link></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    let open = ref(true)
    let links = [
      {name: 'Home', link: '/'},
      {name: 'About', link: '/about'},
      {name: 'Contact', link: '/contact'},
    ]

    const menuOpen = () => {
      open.value = !open.value
    }

    return { links, open, menuOpen }
  }
}
</script>

<style>
li .router-link-active {
  padding-bottom: 0;
  border-bottom: 2px solid red;
  border-bottom-width: 90;
}

.toggleNav {
  display: none;
} 
</style>