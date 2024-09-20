import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import RecipeDetailsPage from "@/views/RecipeDetailsPage.vue"

const routes = [
  {
    path: "/",
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

