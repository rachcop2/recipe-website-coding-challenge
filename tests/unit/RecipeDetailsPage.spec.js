import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import RecipeDetailsPage from '@/views/RecipeDetailsPage.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const routes = [
  {
    path: '/recipe/:id',
    name: 'RecipeDetails',
    component: RecipeDetailsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

describe('RecipeDetailsPage.vue', () => {
  let wrapper;
  let mock;

  beforeEach(async () => {
    // Create a new instance of MockAdapter for each test
    mock = new MockAdapter(axios);

    // Mock the Axios GET request
    mock.onGet('/api/recipe/1').reply(200, {
      id: 1,
      title: 'Test Recipe',
      extendedIngredients: [
        { id: 1, name: 'ingredient1', amount: 1, unit: 'cup' },
        { id: 2, name: 'ingredient2', amount: 2, unit: 'tbsp' }
      ],
      instructions: 'Test instructions'
    });

    // Mock the route params
    router.push({ name: 'RecipeDetails', params: { id: 1 } });
    await router.isReady();

    wrapper = shallowMount(RecipeDetailsPage, {
      global: {
        plugins: [router]
      }
    });

    // Wait for the component to update after the Axios call
    await wrapper.vm.$nextTick();
  });

  afterEach(() => {
    // Reset the mock after each test
    mock.reset();
  });

  it('renders the recipe title', async () => {
    expect(wrapper.find('.recipe-title').text()).toBe('Test Recipe');
  });

  it('renders the recipe ingredients', async () => {
    const ingredients = wrapper.findAll('.ingredients li');
    expect(ingredients.length).toBe(2);
    expect(ingredients.at(0).text()).toBe('ingredient1: 1 cup');
    expect(ingredients.at(1).text()).toBe('ingredient2: 2 tbsp');
  });
});