import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Tab } from '../../../components/Tab';

const Test2: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div>テスト2ページ</div>
      <button onClick={() => router.push('/')}>トップページへ</button>
      <Tab />
    </>
  );
};

export default Test2;
