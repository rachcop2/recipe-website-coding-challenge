import { createWebHistory, createRouter } from "vue-router"
// import HomePage from '@/views/Home.vue';           // Home Page component
// import RecipeDetailsPage from '@/views/Home.vue'; // Recipe Detail Page component
import Home from "@/views/Home.vue"
import RecipeDetailsPage from "@/views/RecipeDetailsPage.vue"

const routes = [
  {
    path: "/recipe-website-coding-challenge/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe/:id",
    name: "RecipeDetailsPage",
    component: RecipeDetailsPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

