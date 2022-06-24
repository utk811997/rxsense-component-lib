import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './index';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button'
    }
  }
};

const iconDetails = {
  url: 'https://qa.singlecare.com/content/images/icons/search-icon.svg',
  size: {
    height: '24px',
    width: '24px',
  },
};

export default meta;
const Template: Story<ButtonProps> = (args) => <Button {...args}/>
export const Primary = Template.bind({});
export const PrimaryWithIcon = Template.bind({});
export const PrimaryLong = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
    disabled: true
}
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary'
}
PrimaryWithIcon.args = {
  children: 'Primary Icon',
  containsIcon: true,
  icon:iconDetails
}
PrimaryLong.args = {
  children: 'Primary Long',
  longButton: true
}
