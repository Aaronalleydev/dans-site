import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  }
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
