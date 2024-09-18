import axios from 'axios';

// Create the Axios instance to set base configurations like base URL and headers.
const apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY;
const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: apiKey
  }
});

// Searches for recipes based on query, cuisine, and pagination
export const searchRecipes = (query, cuisine, offset = 0) => {
  return api.get('/complexSearch', {
    params: {
      query: query,
      cuisine: cuisine,
      number: 5, // 5 results per page
      offset: offset // Pagination offset
    }
  });
};

// Recipe details based on recipe ID
export const getRecipeDetails = (id) => {
  return api.get(`/${id}/information`);
};
