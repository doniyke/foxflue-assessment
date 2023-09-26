// Import necessary dependencies
import { mount } from '@vue/test-utils';
import CustomerData from '../components/CustomerData.vue';

globalThis.navigator = {
    geolocation: {
      getCurrentPosition: () => {},
    },
};

describe('CustomerData.vue', () => {
  it('displays customer information', async () => {
    // Create a wrapper for the CustomerData component
    const wrapper = mount(CustomerData, {
      props: {
        // You can pass any props here if needed
      },
    });

    // Assert that customer information is displayed
    expect(wrapper.text()).toContain('Customer');
    expect(wrapper.text()).toContain('Christopher Nunez');
    expect(wrapper.text()).toContain('+1 (516) 812-9200');
  });

  it('displays a loading placeholder when distance is not available', async () => {
    // Create a wrapper for the CustomerData component without distance prop
    const wrapper = mount(CustomerData, {
      props: {
        distance: null,
      },
    });

    // Assert that the loading placeholder is displayed
    expect(wrapper.find('.animated-background').exists()).toBe(true);
  });
});
