import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSystem } from './ui-design-system';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiDesignSystem> = {
  component: UiDesignSystem,
  title: 'UiDesignSystem',
};
export default meta;
type Story = StoryObj<typeof UiDesignSystem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiDesignSystem!/gi)).toBeTruthy();
  },
};
