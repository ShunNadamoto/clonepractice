import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DayStudy } from '../../components/DayStudy';

const Study: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div>復習ページ</div>
      <button onClick={() => router.push('/src/pages/index.tsx')}>元ページへ</button>

      <DayStudy
        testName={'松岡'}
        testAge={41}
        humanList={[]}
        testOnClick={() => alert('onClickボタンが押されました')}
      />
    </>
  );
};

export default Study;
