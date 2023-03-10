import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AccordionMenu } from '../../../components/AccordionMenu';
import { RadioButton } from '../../../components/RadioButton';
import { RadioButton2 } from '../../../components/RadioButton2';
import { Tab } from '../../../components/Tab';

import styles from './index.module.scss';

const radioButtonList = [
  { labelName: 'みかん', value: 'orange' },
  { labelName: 'りんご', value: 'apple' },
  { labelName: 'ぶどう', value: 'grape' },
];

const Test2: NextPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState(radioButtonList[0].value);
  const [name, setName] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.container__inputBox}>
        <div>お名前：</div>
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className={styles.container__checkBoxContainer}>
        {radioButtonList.map((eachRadio) => (
          <RadioButton2
            key={eachRadio.value}
            id={eachRadio.value}
            value={eachRadio.value}
            checked={selectedRadio === eachRadio.value}
            onChange={(event) => {
              setSelectedRadio(event.target.value);
            }}
            labelName={eachRadio.labelName}
            className={styles.container__test}
          />
        ))}
      </div>
      <div>{selectedRadio}が選択されました</div>

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
    </div>
  );
};

export default Test2;
