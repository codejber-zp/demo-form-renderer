import type { Meta, StoryObj } from '@storybook/react';
import { UiHeader } from './ui-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiHeader> = {
  component: UiHeader,
  title: 'UiDesignSystem',
};
export default meta;
type Story = StoryObj<typeof UiHeader>;

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
