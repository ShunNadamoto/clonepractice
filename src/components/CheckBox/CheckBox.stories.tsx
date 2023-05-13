import { StoryFn, Meta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { CheckBox } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

const changeCheckBox = (e: ChangeEvent<HTMLInputElement>) =>
  setSelectedFruits((prevState: string[]) => {
    const isIncludeValue = prevState.includes(e.target.value);
    const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
    if (isIncludeValue) {
      return prevState.filter((elem) => elem !== e.target.value);
    } else {
      return [...prevState, e.target.value];
    }
  });

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'apple2',
  value: 'apple',
  checked: true,
  labelName: 'りんご',
  onChange: (e: ChangeEvent<HTMLInputElement>) => {
    onchange;
  },
};
function setSelectedFruits(arg0: (prevState: string[]) => string[]) {
  throw new Error('Function not implemented.');
}
