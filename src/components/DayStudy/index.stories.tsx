import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { DayStudy } from './DayStudy';

export default {
  title: 'Components/DayStudy',
  component: DayStudy,
} as Meta<typeof DayStudy>;

const Template: StoryFn<typeof DayStudy> = (args) => <DayStudy {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  testName: 'あああ',
  testAge: 20,

  testOnClick: () => alert('onClickボタンが押されました'),
};
