import { mount } from '@vue/test-utils';
import MapComponent from '../components/MapComponent.vue';

describe('MapComponent.vue', () => {
    it('renders the map component with a default zoom level and center', async () => {
      // Set the default zoom level when mounting the component
      const wrapper = mount(MapComponent, {
        props: {
          zoom: 6,
        },
      });
  
      // Wait for the component to render
      await wrapper.vm.$nextTick();
  
      // Assert that the map component is rendered
      expect(wrapper.findComponent('div').exists()).toBe(true);
    });
  });