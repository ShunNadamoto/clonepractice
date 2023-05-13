import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';

export default {
  title: 'Components/HambergerMenu',
  component: HamburgerMenu,
} as Meta<typeof HamburgerMenu>;

const Template: StoryFn<typeof HamburgerMenu> = (args) => <HamburgerMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  menuIcon: '期間限定',
  hamburgerImgUrl: 'https://www.mos.jp/img/menu/010611/010611_5.jpg',
  menuIcon2: 'https://www.mos.jp/img/sp/menu/icon/ic_termLimited.gif',
  title: 'モスバーガー',
  price: '¥400',
  isDisplayLimitedIcon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  menuIcon: '期間限定',
  hamburgerImgUrl: 'https://www.mos.jp/img/menu/010004/010004_5.jpg',
  menuIcon2: 'https://www.mos.jp/img/sp/menu/icon/ic_termLimited.gif',
  title: 'チキンバーガー',
  price: '¥450',
  isDisplayLimitedIcon: true,
};
