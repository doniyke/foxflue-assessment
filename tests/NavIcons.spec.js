import { mount } from '@vue/test-utils';
import NavIcons from '../components/NavIcons.vue';

describe('NavIcons.vue', () => {
  it('renders navigation buttons with icons and labels', async () => {
    // Mount the NavIcons component
    const wrapper = mount(NavIcons);

    // Wait for the component to render
    await wrapper.vm.$nextTick();

    // Assert the content of each button
    const buttons = wrapper.findAll('button');

    // expect(buttons.length).toBe(5);

    expect(buttons[0].text()).toContain('Chats');
    expect(buttons[1].text()).toContain('Schedule');
    expect(buttons[2].text()).toContain('Pickups');
    expect(buttons[3].text()).toContain('Earnings');
    expect(buttons[4].text()).toContain('Account');

    expect(buttons[2].classes()).toContain('text-blue-500');
  });
});
