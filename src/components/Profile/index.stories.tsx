import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Profile } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as Meta<typeof Profile>;

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  profileImgUrl: 'aaa',
  brandImgUrl: 'hhh',
  title: 'ddd',
  industryName: '美容師',
  companyName: '資生堂',
  tagList: ['システムの機能不備を解消したい', '運用コストを削減したい'],
};
