import { shallowMount } from '@vue/test-utils';
import HomePage from '@/components/HomePage.vue';

describe('HomePage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomePage);
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a title', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Welcome to the Home Page');
  });

  it('renders a list of recipes', () => {
    const recipes = wrapper.findAll('.recipe');
    expect(recipes.length).toBeGreaterThan(0);
  });

  it('calls fetchRecipes on mount', () => {
    const fetchRecipesSpy = jest.spyOn(HomePage.methods, 'fetchRecipes');
    shallowMount(HomePage);
    expect(fetchRecipesSpy).toHaveBeenCalled();
  });

  it('displays an error message when fetchRecipes fails', async () => {
    wrapper.setData({ error: 'Failed to fetch recipes' });
    await wrapper.vm.$nextTick();
    const errorMessage = wrapper.find('.error-message');
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe('Failed to fetch recipes');
  });
});
