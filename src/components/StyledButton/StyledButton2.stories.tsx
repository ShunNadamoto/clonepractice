import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { StyledButton } from '../StyledButton';
// 新しくactionをインポート

export default {
  title: 'StyledButton (2) - 動的にactionを呼び出す',
  component: StyledButton,
} as Meta<typeof StyledButton>;

// incrementという名前でactionを出力するための関数をつくる
const incrementAction = action('increment');

export const Primary = (props) => {
  const [count, setCount] = useState(0);
  const onClick = (event: React.MouseEvent) => {
    // 現在のカウントを渡して、Actionを呼ぶ
    incrementAction(event, count);
    setCount((c: number) => c + 1);
  };

  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      Count: {count}
    </StyledButton>
  );
};
