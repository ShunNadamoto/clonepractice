import type { NextPage } from 'next';
import router, { useRouter } from 'next/router';
import { Family } from './index.style';
import { Practice11 } from '@/components/Practice11';

const Practice: NextPage = () => {
  return (
    <>
      <Family>家族紹介</Family>

      <Practice11 name='史佳' age={1} sex='女の子' />
      <Practice11 name='奏志' age={4} sex='男の子' />
      <Practice11 name='千里' age={30} sex='女性' />
      <Practice11 name='宏樹' age={34} sex='男性' />

      <button onClick={() => router.push('/sample/test2')}>/sample/test2ページへ</button>
    </>
  );
};

export default Practice;
