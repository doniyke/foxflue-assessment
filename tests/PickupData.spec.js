import { mount } from '@vue/test-utils';
import PickupData from '../components/PickupData.vue';



describe('PickupData.vue', () => {
    it('renders without errors', async () => {
        // Mount the PaymentDetails component
        const wrapper = mount(PickupData);
    
        // Wait for the component to render (add an await)
        await wrapper.vm.$nextTick();
    
        // Assert that the component is rendered without errors
        expect(wrapper.exists()).toBe(true);
    });
});
