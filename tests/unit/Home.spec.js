import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { searchRecipes } from '@/services/api.js';

jest.mock('@/services/api.js', () => ({
  searchRecipes: jest.fn(),
}));

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it('renders the component correctly', () => {
    expect(wrapper.find('h1').text()).toBe("Welcome to Rachel's Recipe Website!");
  });

  it('updates searchQuery when input changes', async () => {
    const input = wrapper.find('#search-bar');
    await input.setValue('Pasta');
    expect(wrapper.vm.searchQuery).toBe('Pasta');
  });

  it('updates cuisines when select changes', async () => {
    const select = wrapper.find('#cuisine-opts');
    await select.setValue('italian');
    expect(wrapper.vm.cuisines).toBe('italian');
  });

  it('calls handleSearch on form submit', async () => {
    const handleSearch = jest.spyOn(wrapper.vm, 'handleSearch');
    await wrapper.find('form').trigger('submit.prevent');
    expect(handleSearch).toHaveBeenCalled();
  });

  it('displays loading message when loading', async () => {
    await wrapper.setData({ loading: true });
    expect(wrapper.find('p[tabindex="0"]').text()).toBe('Loading some delicious results...');
  });

  it('displays recipes when search results are available', async () => {
    const recipes = [
      { id: 1, title: 'Recipe 1', image: 'image1.jpg' },
      { id: 2, title: 'Recipe 2', image: 'image2.jpg' },
    ];
    await wrapper.setData({ recipes });
    expect(wrapper.findAll('.results-list li').length).toBe(2);
  });

  it('calls searchRecipes API method when handleSearch is called', async () => {
    searchRecipes.mockResolvedValue({ data: { results: [] } });
    await wrapper.vm.handleSearch();
    expect(searchRecipes).toHaveBeenCalled();
  });
});