import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Sample: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div>サンプルページ</div>
      <button onClick={() => router.push('/sample/test2')}>/sample/test2ページへ</button>
    </>
  );
};

export default Sample;
