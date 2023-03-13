import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, ChangeEvent } from 'react';
import { AccordionMenu } from '../../../components/AccordionMenu';
import { CheckBox } from '../../../components/CheckBox';
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
  const [password, setPassword] = useState('');
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const chengeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFruits((prevState) => {
      // value(orange)が現在のstateに含まれているかどうかを判定する
      const isIncludeValue = prevState.includes(event.target.value);

      if (isIncludeValue) {
        // 含まれていたら、valueを除去した配列を生成して状態を更新する
        return prevState.filter((elem) => elem !== event.target.value);
      } else {
        // 含まれていなければ、valueを追加した配列を生成して状態を更新する
        return [...prevState, event.target.value];
      }
    });
  };

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
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        パスワード
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
      </div>

      <button>ログイン</button>

      <div>チェックボックス練習</div>
      <div>好きな食べ物</div>
      <CheckBox
        id='apple2'
        value='apple'
        checked={selectedFruits.includes('apple')}
        labelName='りんご'
        onChange={chengeCheckBox}
      />
      <CheckBox
        id='orange2'
        value='orange'
        checked={selectedFruits.includes('orange')}
        labelName='みかん'
        onChange={chengeCheckBox}
      />
      <CheckBox
        id='grape2'
        value='grape'
        checked={selectedFruits.includes('grape')}
        labelName='ぶどう'
        onChange={chengeCheckBox}
      />
      <div>選択されているのは、{selectedFruits.join(', ')}です</div>
    </div>
  );
};

export default Test2;
