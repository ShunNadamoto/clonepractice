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
  const [text, setText] = useState('');
  const [power, setPower] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.container__inputBox}>
        <div>お名前：</div>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='名前を入力してください'
        />
      </div>
      <div className={styles.container__textAreaBox}>
        <div>問い合わせ内容：</div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder='問い合わせ内容を入力してください'
        />
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

      <div>電源{power ? 'ON' : 'OFF'}</div>
      <button onClick={() => setPower(true)}>ON</button>
      <button onClick={() => setPower(false)}>OFF</button>
      <div>
        電源切替え<button onClick={() => setPower((prevState) => !prevState)}>ON/OFF</button>
      </div>

      <div>
        E-mail
        <input
          value={email}
          onChange={(e) => {
            console.log(isNaN(Number(e.target.value)));
            setEmailError(isNaN(Number(e.target.value)));
            setEmail(e.target.value);
          }}
        />
        {emailError && <div>emailには数字を入力してください</div>}
      </div>
      <div>
        パスワード
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
      </div>

      <button>ログイン</button>
    </div>
  );
};

export default Test2;
