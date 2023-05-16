import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { IndeedTest } from './IndeedTest';

export default {
  title: 'Components/IndeedTest',
  component: IndeedTest,
} as Meta<typeof IndeedTest>;

const Template: StoryFn<typeof IndeedTest> = (args) => <IndeedTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  jobTitle: 'エンジニア',
};
