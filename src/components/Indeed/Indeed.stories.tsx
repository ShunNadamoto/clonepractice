import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Indeed } from './Indeed';
import { Secondary } from '@/stories/Button.stories';

export default {
  title: 'Components/Indeed',
  component: Indeed,
} as Meta<typeof Indeed>;

const Template: StoryFn<typeof Indeed> = (args) => <Indeed {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  jobTitle: 'エンジニア',
  companyName: 'タナピズム株式会社',
  place: '広島市',
  tagList1: ['駅近5分以内', '交通費支給'],
  tagList2: [
    { name: '月給16万円', imgType: 'salery' },
    { name: '契約社員', imgType: 'jobType' },
    { name: '休憩60分', imgType: 'time' },
  ],
  application: 'プロフィールだけでカンタン応募',
  isDisplayResponseTag: false,
  descripution: '【ITシステムの総合相談窓口事業】',
  sponsor: 'なし',
};
