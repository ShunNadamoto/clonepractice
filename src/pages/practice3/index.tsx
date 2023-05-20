import { NextPage } from 'next';
import { Practice3 } from '../../components/Practice3';
import { Fruits } from './index.style';

const practice3: NextPage = () => {
  return (
    <>
      <Fruits>フルーツリスト</Fruits>

      <Practice3 name='りんご' color='赤' price={120} />
      <Practice3 name='みかん' color='オレンジ' price={200} />
      <Practice3 name='バナナ' color='黄色' price={100} />
    </>
  );
};

export default practice3;
