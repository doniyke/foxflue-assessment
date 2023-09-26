import { mount } from '@vue/test-utils';
import DevicesInspection from '../components/DevicesInspection.vue';

describe('DevicesInspection.vue', () => {
  it('displays device information', async () => {
    // Define a sample devices array
    const devices = [
      {
        name: 'iPhone 13 Pro Max',
        description: '128GB - Unlocked - Flawless',
        offer: 'Estimated offer $750',
        image: 'apple-iphone-13-pro-max-01.jpg',
      },
      {
        name: 'iPhone 13',
        description: '128GB - Unlocked - Good',
        offer: 'Estimated offer $550',
        image: 'iphone13.jpg',
      },
    ];

    // Create a wrapper for the DevicesInspection component
    const wrapper = mount(DevicesInspection, {
      props: {
        devices,
      },
    });

    // Assert that device information is displayed for each device
    for (const device of devices) {
      expect(wrapper.text()).toContain(device.name);
      expect(wrapper.text()).toContain(device.description);
      expect(wrapper.text()).toContain(device.offer);
    }
  });
  
});

  
  
