<template>
  <div class="recipe-details-page">
    <p v-if="loading" tabindex="0">Delicious details incoming!</p>
    <p v-if="error" tabindex="0">{{ errorMsg }}</p>

    <div v-if="recipe">
      <h1>{{ recipe.title }}</h1>
      <img :src="recipe.image" alt="The intended results of the recipe once completed" />

      <h2>Health Information</h2>
      <p>Vegan: {{ recipe.vegan ? 'Yes' : 'No' }}</p>
      <p>Dairy-Free: {{ recipe.dairyFree ? 'Yes' : 'No' }}</p>

      <h2>List of Ingredients</h2>
      <ul>
        <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
          {{ ingredient.name }}: {{ ingredient.amount }} {{ ingredient.unit }}
        </li>
      </ul>

      <h2>Cooking Instructions</h2>
      <p v-html="recipe.instructions"></p>
    </div>
  </div>
</template>
<script>
  import { getRecipeDetails } from '@/services/api.js'; // Import the API call

  export default {
    data() {
      return {
        recipe: null,
        loading: true,
        errorMsg: null,
      };
    },
    async created() {
      const recipeId = this.$route.params.id
      try {
        const response = await getRecipeDetails(recipeId);
        this.recipe = response.data;
      } catch (errorMsg) {
        this.errorMsg = "Hmm, something went wrong in retrieving this recipe...";
      } finally {
        this.loading = false;
      }
    }
  };
</script>
<style>
  
</style>