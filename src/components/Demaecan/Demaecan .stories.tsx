import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Demaecan } from './Demaecan';

export default {
  title: 'Components/Demaecan',
  component: Demaecan,
} as Meta<typeof Demaecan>;

const Template: StoryFn<typeof Demaecan> = (args) => <Demaecan {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menuImgUrl:
    'https://cdn.demae-can.com/files/imgix/item720/kHHf0mnS/l2_IS7k0k10001.jpg?imwidth=256',
  restaurantName: 'マクドナルド',
  evaluation: '⭐︎⭐︎⭐︎',
  minimumPrice: '¥600',
  demaecanTagList: [
    {
      img:
        'demaecan' && 'https://cdn.demae-can.com/contents/img_s/icon-share-deli-v2.png?imwidth=16',
      name: '出前館がお届け',
    },
  ],
  deliveryTime: '10-15',
};
