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
  onClickTestButton: () => alert('aaa'),
  humanList: [
    { name: 'あああ', age: 20 },
    { name: 'uuu', age: 34 },
  ],
};
