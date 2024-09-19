import { shallowMount } from '@vue/test-utils';
import RecipeComponent from '../../src/components/RecipeDetailsPage.vue'; // Update the path as needed
import { searchRecipes } from '@/services/api.js';

jest.mock('@/services/api.js'); // Mock the API call

describe('RecipeComponent.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(RecipeComponent);
  });

  it('renders the component with the correct heading and text', () => {
    expect(wrapper.find('h1').text()).toBe("Welcome to Rachel's Recipe Website!");
    expect(wrapper.find('p').text()).toContain("Whether you're a seasoned home cook");
  });

  it('should update the search query and cuisine selection', async () => {
    const input = wrapper.find('input');
    const select = wrapper.find('select');
    
    await input.setValue('pasta');
    await select.setValue('italian');

    expect(wrapper.vm.searchQuery).toBe('pasta');
    expect(wrapper.vm.cuisines).toBe('italian');
  });

  it('should call handleSearch when search button is clicked', async () => {
    const mockRecipes = [{ id: 1, title: 'Spaghetti Bolognese', image: 'image.jpg' }];
    searchRecipes.mockResolvedValue({ data: { results: mockRecipes } });

    const button = wrapper.find('button[type="submit"]');
    await button.trigger('click');

    expect(searchRecipes).toHaveBeenCalledWith('pasta', 'italian', 0);
    expect(wrapper.vm.recipes).toEqual(mockRecipes);
  });

  it('shows a loading message while fetching data', async () => {
    wrapper.setData({ loading: true });
    await wrapper.vm.$nextTick();
    
    expect(wrapper.text()).toContain('Loading some delicious results...');
  });

  it('displays an error message if the API call fails', async () => {
    searchRecipes.mockRejectedValue(new Error('API Error'));
    await wrapper.vm.handleSearch();

    expect(wrapper.vm.errorMsg).toBe('Hmm, something went wrong in retrieving these recipes...');
    expect(wrapper.text()).toContain('Hmm, something went wrong in retrieving these recipes...');
  });

  it('paginates when Next Page is clicked', async () => {
    wrapper.setData({ page: 1 });
    const nextPageButton = wrapper.find('.pagination-section button:last-child');
    
    await nextPageButton.trigger('click');
    
    expect(wrapper.vm.page).toBe(2);
    expect(searchRecipes).toHaveBeenCalledWith('', '', 5); // Offset for page 2
  });
});
