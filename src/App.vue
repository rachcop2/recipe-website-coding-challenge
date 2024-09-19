<template>
  <div class="cooking-page-home">
    <HomePage />
    <RecipeDetailsPage />
  </div>
</template>

<script>

  import RecipeDetailsPage from './components/RecipeDetailsPage.vue';
  import HomePage from './components/HomePage.vue';

  export default {
    name: 'App',
    components: {
      HomePage,
      RecipeDetailsPage,
    },
  };
</script>

<style lang="scss">
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    text-align: center;
  }

  .logo {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: flex-start;
  }

  footer {
    margin-top: 3rem;
    padding: 2rem;
  }

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
