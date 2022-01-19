<template>
<h1 class="text-center text-3xl text-red-800 py-16">Still not convinced, check out what my clients are saying...</h1>

<div class="grid md:grid-cols-3 md:m-6 md:p-6 text-gray-800">
  <div class="pb-6" v-for="review in reviews" :key="review.id">
    <p class="italic tracking-wide mx-6">"{{ review.review }}"</p>
    <p class="text-right pr-8 text-lg font-bold">{{ review.name }}</p>
  </div>
</div>
  
</template>

<script>
const { ref }=require('@vue/reactivity')

export default {
  setup() {
    const reviews = ref([
      {
        name: 'Harvey Walbanger',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis posuere velit, a ultrices ante. Ut semper convallis orci, eget commodo orci fringilla facilisis. Nam tincidunt vehicula lorem, consectetur varius lacus tincidunt eu. Nulla facilisi. Vestibulum maximus lacus non ex accumsan fringilla. Donec sed magna egestas, auctor libero eget, molestie. '
      },
      {
        name: 'prince andrew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis posuere velit, a ultrices ante. Ut semper convallis orci, eget commodo orci fringilla facilisis. Nam tincidunt vehicula lorem, consectetur varius lacus tincidunt eu. Nulla facilisi. Vestibulum maximus lacus non ex accumsan fringilla. Donec sed magna egestas, auctor libero eget, molestie. '
      },
      {
        name: 'Epstein',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis posuere velit, a ultrices ante. Ut semper convallis orci, eget commodo orci fringilla facilisis. Nam tincidunt vehicula lorem, consectetur varius lacus tincidunt eu. Nulla facilisi. Vestibulum maximus lacus non ex accumsan fringilla. Donec sed magna egestas, auctor libero eget, molestie.'
      },
    ])
    return { reviews }
  }
}
</script>

<style>

</style>