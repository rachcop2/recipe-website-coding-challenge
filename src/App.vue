<template>
  <router-view />
</template>

<script>
  // import RecipeDetailsPage from './views/RecipeDetailsPage.vue';
  // import HomePage from './views/HomePage.vue';

  export default {
    name: 'App',
    // components: {
    //   HomePage,
    //   RecipeDetailsPage,
    // },
  };
</script>

<style lang="scss">
  body {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    text-align: center;
    overflow-x: hidden;
    padding: 1.50rem;
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

  h3 {
    font-size: 1.75rem;
  }
</style>
