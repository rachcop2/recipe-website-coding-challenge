<template>
  <div class="recipe-details-page">
    <p v-if="loading" tabindex="0">Delicious details incoming!</p>
    <p v-if="error" tabindex="0">{{ errorMsg }}</p>

    <div v-if="recipe">
      <h1>{{ recipe.title }}</h1>
      <img :src="recipe.image" alt="The intended results of the recipe once completed" class="recipe-image" />
      <div class="health-information">
        <h2>Health Information</h2>
        <p>Vegan: {{ recipe.vegan ? 'Yes' : 'No' }}</p>
        <p>Dairy-Free: {{ recipe.dairyFree ? 'Yes' : 'No' }}</p>
      </div>  

      <div class="how-to-make">
        <div class="ingredients">
        <h2>List of Ingredients</h2>
          <ul>
            <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
              {{ ingredient.name }}: {{ ingredient.amount }} {{ ingredient.unit }}
            </li>
          </ul>
        </div>
        <div class="instructions">
          <h2>Cooking Instructions</h2>
          <p v-html="recipe.instructions"></p>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
  import { getRecipeDetails } from '@/services/api.js'; // Import the API call

  export default {
    name: 'RecipeDetailsPage',
    props: {
      error: {
        type: String,
        default: null
      }
    },
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

<style scoped lang="scss">
  .health-information {
    h2, p {
      text-align: center;
    }
  }

  ul, p {
    text-align: left;
  }

  img.recipe-image {
      height: 250px;
      width: 300px;
    }

  // Tablet/Desktop styling
  @media screen and (min-width: 1100px) {
    p {
      font-size: 1.5rem;
    }

    h2 {
      text-align: left;
    }

    .how-to-make {
      display: flex;
      margin: 0 3rem;

      .ingredients,
      .instructions {
        width: 50%;
        font-size: 1.5rem;
        text-align: left;

      }

      .ingredients {
        width: 40%;
      }

      .instructions {
        width: 60%;
      }
    }

    img.recipe-image {
      height: 375px;
      width: 450px;
    }
  }
</style>