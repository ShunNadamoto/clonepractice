import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { SelectAge } from './SelectAge';

export default {
  title: 'Components/SelectAge',
  component: SelectAge,
} as Meta<typeof SelectAge>;

const Template: StoryFn<typeof SelectAge> = () => <SelectAge />;

export const Primary = Template.bind({});
