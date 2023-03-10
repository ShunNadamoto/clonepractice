import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RadioButton } from '../../../components/RadioButton';
import { Tab } from '../../../components/Tab';

import styles from './index.module.scss';

const Test2: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div>テスト2ページ</div>
      <button onClick={() => router.push('/')}>トップページへ</button>
      <Tab />
      <div className='toggleButton'>
        <input id='toggle' type='checkbox' />
        <label htmlFor='toggle' />
      </div>
      <RadioButton />
    </>
  );
};

export default Test2;
