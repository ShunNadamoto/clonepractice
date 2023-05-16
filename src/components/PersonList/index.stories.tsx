import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { PersonList } from './PersonList';

export default {
  title: 'Components/PersonList',
  component: PersonList,
} as Meta<typeof PersonList>;

const Template: StoryFn<typeof PersonList> = (args) => <PersonList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '松岡',
  age: 41,
  note: 'プログラミング勉強中',
};
