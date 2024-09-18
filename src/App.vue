<template>
  <div class="cooking-page-home">
    <h1>Welcome to Rachel's Recipe Website!</h1>
    <img alt="" src="./assets/cooking-photo-home-page.jpg">
    <p>
      Whether you're a seasoned home cook or a newbie to the kitchen, we've got you covered with loads of healthy, delicious, easy to make recipes.
    </p>
    <RecipeSearch />

    <FilteredView />
  </div>
</template>

<script>
import FilteredView from './components/FilteredView.vue'
import RecipeSearch from './components/RecipeSearch.vue'


export default {
  name: 'App',
  components: {
    FilteredView,
    RecipeSearch
  }
}
</script>

<style>
body {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
}

.cooking-page-home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
