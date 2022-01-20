<template>
<div class="w-full bg-center bg-cover h-screen bgImg">
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-10">
            <div class="text-center bg-gray-900 p-6 bg-opacity-50 rounded-xl">
                <transition 
                appear 
                name="fade"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                >
                <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Online Personal Training, Sports and <span class="text-red-500 underline">Nutrition Coach</span></h1>
                </transition>
                <h2 class="md:text-xl font-semibold text-white lg:text-2xl pt-4">One to One personalised coaching to take you to the next level</h2>
                <router-link :to="{ name: 'Contact'}">
                <button class="w-full px-4 py-2 mt-4 text-sm md:text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-red-600 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">Get Started</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const beforeEnter = () => {
            console.log('before enter')
        }
        const enter = () => {
            console.log('enter')
        }
        const afterEnter = () => {
            console.log('after enter')
        }
        return { beforeEnter, enter, afterEnter }
    }
}
</script>

<style scoped>
.bgImg {
  background-image: url('../assets/img/hero3.jpeg');
  background-position: center;
  /* background-repeat: no-repeat;
  /* background-position: center; */
  /* background-size: cover;
  opacity: 0.8;
  height: 100%; */
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.fade-enter-active {
    transition: all 1s ease;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 3s ease;
}
</style>