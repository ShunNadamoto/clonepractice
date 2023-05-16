import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { AccordionMenu } from './AccordionMenu';

export default {
  title: 'Components/AccordionMenu',
  component: AccordionMenu,
} as Meta<typeof AccordionMenu>;

const Template: StoryFn<typeof AccordionMenu> = (args) => <AccordionMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'テスト',
  description: 'あああああ',
};
