<template>
  <div>
    <h1>Welcome to Rachel's Recipe Website!</h1>
      <img alt="" src="../assets/cooking-photo-home-page.jpg" class="recipe-image">
      <p>
        Whether you're a seasoned home cook or a newbie to the kitchen, we've got you covered with loads of healthy, delicious, easy to make recipes.
      </p>
    <h2>Let's get cookin'!</h2>
    <div class="search-recipes">
      <form @submit.prevent="handleSearch">
        <div class="search-section">
          <label for="search-bar">What do you want to make today?</label>
          <input type="text" id="search-bar" placeholder="Search recipes" v-model="searchQuery"/> 
        </div>
        <div class="dropdown-section">
          <label for="cuisine-opts">Choose a type of cuisine, or Select All for more inspiration!</label>
          <select v-model="cuisines" id="cuisine-opts">
            <option value="">Select all</option>
            <option value="chinese">Asian</option>
            <option value="carribean">Caribbean</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="southern">Southern</option>
          </select>
        </div>
      </form>
    </div>
    <button type="submit" @click="handleSearch()" value="Search" class="search-button">Search</button> 

    <!-- Loading results & error in retrieving information -->
    <p v-if="loading" tabindex="0">Loading some delicious results...</p>
    <p v-if="loadError" tabindex="0">{{ errorMsg }}</p>

    <!-- Search Results -->
    <div v-if="recipes.length > 0">
      <h2>The results are looking delicious!</h2>
      <ul class="results-list">
        <li v-for="recipe in recipes" :key="recipe.id">
          <a :href="'/recipe/' + recipe.id">
            <!-- No alt text required as these are decorative. TODO at a later date to dynamically add some descriptive content for recipes? -->
            <img :src="recipe.image" alt="" />
            <h3>{{ recipe.title }}</h3>>
          </a>
        </li>
      </ul>
    </div>

    <!-- Pagination -->
    <div class="pagination-section">
      <button @click="changePage(-1)" :disabled="page === 1">&lt;&lt; Previous Page</button>
      <button @click="changePage(1)">Next Page &gt;&gt;</button>
    </div>
  </div>
</template>

<script>  
  // Import the API data from spoontacular API
  import { searchRecipes } from '@/services/api.js'; 

  export default {
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
  }
</script>
<style lang="scss">
  .results-list {
    list-style-type: none;
  }
</style>