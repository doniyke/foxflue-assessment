import { mount } from '@vue/test-utils';
import PaymentDetails from '../components/PaymentDetails.vue';



describe('PaymentDetails.vue', () => {
    it('renders without errors', async () => {
        // Mount the PaymentDetails component
        const wrapper = mount(PaymentDetails);
    
        // Wait for the component to render (add an await)
        await wrapper.vm.$nextTick();
    
        // Assert that the component is rendered without errors
        expect(wrapper.exists()).toBe(true);
    });
});
