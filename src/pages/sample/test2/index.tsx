import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AccordionMenu } from '../../../components/AccordionMenu';
import { RadioButton } from '../../../components/RadioButton';
import { Tab } from '../../../components/Tab';

import styles from './index.module.scss';

const Test2: NextPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);

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

      <AccordionMenu text='aaa' description='gggg' />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ボタン+1
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        ボタン-1
      </button>

      <div>カウント:{count}</div>

      <a href='/test'>aaabbb</a>
    </>
  );
};

export default Test2;
