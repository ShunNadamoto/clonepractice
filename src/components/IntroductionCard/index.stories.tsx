import { StoryFn, Meta } from '@storybook/react';
import Rwact from 'react';

import { IntroductionCard } from './IntroductionCard';

export default {
  title: 'Components/IntroductionCard',
  component: IntroductionCard,
} as Meta<typeof IntroductionCard>;

const Template: StoryFn<typeof IntroductionCard> = (args) => <IntroductionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text1: 'フリーランス講師',
  text2: '佐藤一郎',
  imageUrl: 'https://isara.life/wp-content/themes/isara_v2/img/keisuke_someya.jpg',
};
