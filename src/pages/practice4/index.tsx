import { NextPage } from 'next';
import { Practice4 } from '../../components/Practice4';
import { GameIntroduce } from './index.style';

const practice4: NextPage = () => {
  return (
    <>
      <GameIntroduce>ゲーム紹介</GameIntroduce>

      <Practice4 name='ゼルダの伝説' type='アクションRPG' company='任天堂' />
      <Practice4 name='ドラゴンクエスト12' type='RPG' company='スクエア・エニックス' />
      <Practice4 name='ストリートファイター4' type='格闘' company='カプコン' />
    </>
  );
};

export default practice4;
