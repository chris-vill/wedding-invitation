import type { Meta, StoryObj } from "@storybook/vue3";

import NavItem from "./nav-item.vue";

const meta = {
  component: NavItem,
} satisfies Meta<typeof NavItem>;

export default meta;

export const Primary: Story = {
  render: () => ({
    components: { NavItem },
    template: "<NavItem />",
  }),
};

type Story = StoryObj<typeof meta>;
