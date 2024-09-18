<template>
  <h2>Let's get cookin'!</h2>
  <div class="search-bar">
    <label for="search-bar">What do you want to make today?</label>
    <input type="text" id="search-bar" placeholder="Search" /> 
  </div>
  <button>Search</button>
</template>
<script>
export default {
  name: 'RecipeSearch',
}
</script>
<style>
  h2 {
    font-size: 2rem;
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
    width: 250px;
    margin-bottom: 1rem;
  }  
</style>