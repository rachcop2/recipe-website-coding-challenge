<template>
  <div class="cooking-page-home">
    <h1>Welcome to Rachel's Recipe Website!</h1>
    <img alt="" src="./assets/cooking-photo-home-page.jpg">
    <p>
      Whether you're a seasoned home cook or a newbie to the kitchen, we've got you covered with loads of healthy, delicious, easy to make recipes.
    </p>
    <h2>Let's get cookin'!</h2>

    <!-- Search Bar / Filters -->
    <div class="search-bar">
      <form @submit.prevent="handleSearch">
        <label for="search-bar">What do you want to make today?</label>
        <input type="text" id="search-bar" placeholder="Search recipes" v-model="searchQuery"/> 
        <select v-model="cuisines">
          <option value="">Select all</option>
          <option value="chinese">Asian</option>
          <option value="carribean">Caribbean</option>
          <option value="greek">Greek</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="southern">Southern</option>
        </select>
      </form>
    </div>
    <button type="submit">Search</button> 
    
    <!-- Loading results & error in retrieving information -->
    <div v-if="isLoading">Loading some delicious results...</div>
    <div v-if="loadError">{{ errorMsg }}</div>

    <!-- Search Results -->
    <h2>The results are delicious!</h2>
    <div v-if="recipes.length > 0">
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <a :href="'/recipe/' + recipe.id">
            <img :src="recipe.image" alt="The intended results of the recipe once completed" />
            <h3>{{ recipe.title }}</h3>>
          </a>
        </li>
      </ul>
    </div>

    <!-- Pagination -->
    <div class="pagination-section">
      <button @click="changePage(-1)" :disabled="page === 1">Previous Page</button>
      <button @click="changePage(1)">Next Page</button>
    </div>
  </div>
</template>

<script>
  // Import the API data from spoontacular API
  import { searchRecipes } from '@/services/api.js'; 

  export default {
    name: 'App',
    data () {
      return {
        searchQuery: '',
        cuisines:'',
        recipes: [],
        page: 1,
        loading: false,
        errorMsg: null,
      };
    },
    methods: {
      async handleSearch() {
        this.loading = true;
        this.error = null;
        try {
          const offset = (this.page -1) * 5;
          const response = await searchRecipes(this.searchQuery, this.cuisines, offset);
          this.recipes = response.data.results;
        } catch (errorMsg) {
          this.errorMsg = "Hmm, something went wrong in retrieving these recipes..."
        } finally {
          this.loading = false;
        }
      },
      changePage(direction) {
        this.page += direction;
        this.handleSearch();
      }
    },
  };

</script>

<style>
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    margin-top: 2rem;
    text-align: center;
  }

  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  input {
    width: 350px;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }  

  button {
    background-color: forestgreen;
    height: 50px;
    width: 150px;
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;

    &:focus {
      border: 5px solid goldenrod;
      outline-offset: 5px;
    }

    &:hover {
      background-color: green;
    }

    &:active {
      background-color: greenyellow;
      color: black;
    }
  }
</style>
