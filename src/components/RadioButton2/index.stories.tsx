import { StoryFn, Meta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { RadioButton2 } from './RadioButton2';

export default {
  title: 'Components/RadioButton2',
  component: RadioButton2,
} as Meta<typeof RadioButton2>;

const Template: StoryFn<typeof RadioButton2> = (args) => <RadioButton2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: '',
  value: 'orange',
  checked: true,
  onChange: (e: ChangeEvent<HTMLInputElement>) => null,
  labelName: 'みかん',
};
