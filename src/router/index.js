import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import TC from "../views/TC.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Alley strength and Nutrition',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of Alley Strength and nutrition'
        },
        {
          property: 'og:description',
          content: 'Alley Strength and Nutrition, providing online personal training, strength plans and nutritions plans, based in Watford but serving customers across the UK'
        }
      ]
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/terms",
    name: "TC",
    component: TC
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
