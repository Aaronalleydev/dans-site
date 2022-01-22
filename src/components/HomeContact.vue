<template>
  <div class="contactBox bg-gray-100 grid md:grid-cols-2 sm:w-4/5 m-auto rounded-lg sm:mb-28">
  

    <form ref="form" class="flex flex-col items-center py-6" @submit.prevent="sendEmail">
      <div v-if="success" class="bg-black opacity-40 text-green-500 text-lg p-2 rounded-lg">
       <h3>Success! your message has been sent and Dan will be in contact soon</h3>
      </div>
      <div v-if="error">
        <h3>Phone not long enough</h3>
      </div>
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
    <p class="flex pb-6"><span class="pi pi-phone px-2 md:px-4 text-red-600" style="font-size: 2rem;" ></span> 07818717323</p>

    <p class="flex text-blue-700"><span class="pi pi-at px-4 pb-8 text-xl md:text-3xl text-red-600 pt-1 md:pt-0" style=";" ></span><a href="mailto:dan@alleystrengthandnutrition.com">dan@alleystrengthandnutrition.com</a></p>
    </div>
  </div>
          
</template>

<script>
import emailjs from '@emailjs/browser';
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactUs',
  mounted: function() {
    this.contactScroll();
    // this.scrollAnimation1();
  },

  data() {
    return {
      name: '',
      email: '',
      message: '',
      phone: '',
      success: false, 
      error: false
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_k83s41z', 'template_1cmnvat', e.target, 'user_UqRVX4pGgfVEH1FQ5B2PU', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        })
        this.success = true
      } catch (error) {
          console.log({error})
      }

      if(this.phone.length < 10) {
        this.error = true
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      this.phone = ''
    },
    contactScroll() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.contactBox',
          start: 'top bottom',
          end: 'bottom top',
        }
      })
      .from('.contactBox', { x : innerWidth * 1, opacity: 0, duration: 1.2, ease: "back.out(1.7)"})
    },
    // reviewScroll2() {
    //   gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.reviewText',
    //       start: 'top bottom',
    //       end: 'bottom top',
    //     }
    //   })
    //   .from('.review1', { y : 500, opacity: 0, duration: 1.2, ease: "back.out(1.7)"})
    // }
  }
}
</script>

<style scoped>
</style>