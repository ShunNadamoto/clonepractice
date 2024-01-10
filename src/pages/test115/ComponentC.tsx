import { FC, useContext } from 'react';
import { UserCount } from './index';
import { GlobalContext } from '@/pages/_app';
import router from 'next/router';

export const ComponentC: FC = () => {
  // const count = useContext(UserCount);
  const value = useContext(GlobalContext);
  const { count, setCount } = value;
  const test = { value1: 'aaaa', value2: 'iiii' };
  const { value1, value2 } = test;
  console.log(count);
  return (
    <div>
      CCC<div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      <button onClick={() => router.push('/test113')}>ページtest113へ</button>
    </div>
  );
};
