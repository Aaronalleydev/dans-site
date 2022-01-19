<template>
  <div class="bg-gray-100 grid md:grid-cols-2 w-4/5 m-auto rounded-lg sm:mb-28">

    <form ref="form" class="flex flex-col items-center py-6" @submit.prevent="sendEmail">
    <h2 class="text-red-600 text-center text-xl py-6">Get in touch</h2>
    <label for="name">Name:</label>
    <input type="text" v-model="name" required placeholder="Enter name" name="name" class="lg:w-2/3 text-center rounded-xl m-2 p-1">
    <label for="email">Email:</label>
    <input type="email" v-model="email" required placeholder="Enter email" name="email" class="lg:w-2/3 text-center rounded-xl m-2 p-1">
    <label for="phone">Phone:</label>
    <input type="tel" placeholder="Phone number (optional)" name="phone" class="lg:w-2/3 text-center rounded-xl m-2 p-1" v-model="phone">
    <label for="enquiry">Enquiry:</label>
    <textarea placeholder="let us know what you are interested in (optional)" class="lg:w-2/3 text-center rounded-xl m-2 p-2" name="message" v-model="message"></textarea>
    <button class="bg-red-600 rounded-full p-2 mt-4 text-white font-bold">Send enquiry</button>
    </form>
    <div class="flex flex-col items-center justify-center">
    <h1 class=" pb-6 md:pb-20 text-xl text-red-600">Or contact:</h1>
    <p class="flex pb-6"><span class="pi pi-phone px-4 text-red-600" style="font-size: 2rem;" ></span> 07818717323</p>
    <p class="flex text-blue-700"><span class="pi pi-at px-4 pb-8" style="font-size: 2rem; color: red;" ></span><a href="mailto:dan@alleystrengthandnutrition.com">dan@alleystrengthandnutrition.com</a></p>
    </div>
  </div>
          
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      phone: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_q2rm7sr', 'template_7vu6rk9', e.target, 'user_5GWPVMEnCl3udBldbi1s5', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
        console.log('it works!!!')
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      this.phone = ''
    },
  }
}
</script>

<style scoped>
</style>