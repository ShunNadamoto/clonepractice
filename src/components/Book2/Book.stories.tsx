import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Book } from './Book2';

export default {
  title: 'Components/Book',
  component: Book,
} as Meta<typeof Book>;

const Template: StoryFn<typeof Book> = (args) => <Book {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgUrl: 'https://img.honto.jp/item/1/133/180/30560227_1.webp',
  ranking: '1位',
  title: 'キャラ絵で学ぶ！キリスト教図鑑',
};
