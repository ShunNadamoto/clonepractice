import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Test2: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div>テスト2ページ</div>
      <button onClick={() => router.push('/')}>トップページへ</button>
    </>
  );
};

export default Test2;
