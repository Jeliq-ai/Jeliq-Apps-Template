import type { Meta, StoryObj } from '@storybook/react';
import { TestButton } from './index';

const meta: Meta<typeof TestButton> = {
  title: 'Components/TestButton',
  component: TestButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Default: Story = {
  args: {
    label: 'Click me',
  },
};

export const WithClickHandler: Story = {
  args: {
    label: 'Click me',
    onClick: () => alert('Button clicked!'),
  },
};
