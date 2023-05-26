import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { IndeedPractice } from './IndeedPractice';

export default {
  title: 'Components/IndeedPractice',
  component: IndeedPractice,
} as Meta<typeof IndeedPractice>;

const Template: StoryFn<typeof IndeedPractice> = (args) => <IndeedPractice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  jobTitle: '事務',
  onClickButton: () => alert('ボタンが押されました'),
  personList: [{ name: '松岡', age: 41, gender: '男性' }],
  foodsList: [{ rice: '寿司', bread: 'アンパン', noodle: 'ラーメン' }],
};
