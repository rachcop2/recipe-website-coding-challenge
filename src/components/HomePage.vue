<template>
  <div>
    <h1>Welcome to Rachel's Recipe Website!</h1>
      <img alt="" src="../assets/cooking-photo-home-page.jpg" class="recipe-image">
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
    <button type="submit" @click="handleSearch()">Search</button> 

    <!-- Loading results & error in retrieving information -->
    <div v-if="isLoading">Loading some delicious results...</div>
    <div v-if="loadError">{{ errorMsg }}</div>

    <!-- Search Results -->
    <div v-if="recipes.length > 0">
      <h2>The results are delicious!</h2>
      <ul class="results-list">
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