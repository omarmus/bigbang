import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from './';

const meta: ComponentMeta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    disabled: false,
    children: 'Hello',
    onClick: () => { console.log('Hello world')}
  },
};