import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'App.vue';           // Home Page component
import RecipeDetailsPage from '@/components/RecipeDetail.vue'; // Recipe Detail Page component

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },                 // Home page (default path)
  { path: '/recipe/:id', component: RecipeDetailsPage } // Dynamic path for recipe details
];

const router = new VueRouter({
  routes
});

export default router;
