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
const radioButtonList2 = [
  { labelName: '猫', value: 'cat' },
  { labelName: '犬', value: 'dog' },
  { labelName: '鳥', value: 'bird' },
];

const radioButtonList3 = [
  { labelName: '米', value: 'rice' },
  { labelName: 'パン', value: 'pan' },
  { labelName: '麺', value: 'noodle' },
];

const Test2: NextPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState(radioButtonList[0].value);
  const [selectedRadio2, setSelectedRadio2] = useState(radioButtonList2[0].value);
  const [selectedRadio3, setSelectedRadio3] = useState(radioButtonList3[0].value);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [power, setPower] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  // const chengeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSelectedFruits((prevState) => {
  //     // value(orange)が現在のstateに含まれているかどうかを判定する
  //     const isIncludeValue = prevState.includes(event.target.value);

  //     if (isIncludeValue) {
  //       // 含まれていたら、valueを除去した配列を生成して状態を更新する
  //       return prevState.filter((elem) => elem !== event.target.value);
  //     } else {
  //       // 含まれていなければ、valueを追加した配列を生成して状態を更新する
  //       return [...prevState, event.target.value];
  //     }
  //   });
  // };

  const changeCheckBox = (e: ChangeEvent<HTMLInputElement>) =>
    setSelectedFruits((prevState) => {
      const isIncludeValue = prevState.includes(e.target.value);
      if (isIncludeValue) {
        return prevState.filter((elem) => elem !== e.target.value);
      } else {
        return [...prevState, e.target.value];
      }
    });
  const changeCheckBox2 = (e: ChangeEvent<HTMLInputElement>) =>
    setSelectedSports((prevState) => {
      const isIncludeValue = prevState.includes(e.target.value);
      if (isIncludeValue) {
        return prevState.filter((elem) => elem !== e.target.value);
      } else {
        return [...prevState, e.target.value];
      }
    });

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

      {radioButtonList2.map((eachRadio) => (
        <RadioButton2
          key={eachRadio.value}
          id={eachRadio.value}
          value={eachRadio.value}
          checked={selectedRadio2 === eachRadio.value}
          onChange={(event) => {
            setSelectedRadio2(event.target.value);
          }}
          labelName={eachRadio.labelName}
        />
      ))}
      <div>{selectedRadio2}が選択されました</div>

      {radioButtonList3.map((eachRadio) => (
        <RadioButton2
          key={eachRadio.value}
          id={eachRadio.value}
          value={eachRadio.value}
          checked={selectedRadio3 === eachRadio.value}
          onChange={(e) => {
            setSelectedRadio3(e.target.value);
          }}
          labelName={eachRadio.labelName}
        />
      ))}
      <div>{selectedRadio3}が選択されました</div>

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

      <div>チェックボックス練習</div>
      <div>好きな食べ物</div>
      <CheckBox
        id='apple2'
        value='apple'
        checked={selectedFruits.includes('apple')}
        labelName='りんご'
        onChange={changeCheckBox}
      />
      <CheckBox
        id='orange2'
        value='orange'
        checked={selectedFruits.includes('orange')}
        labelName='みかん'
        onChange={changeCheckBox}
      />
      <CheckBox
        id='grape2'
        value='grape'
        checked={selectedFruits.includes('grape')}
        labelName='ぶどう'
        onChange={changeCheckBox}
      />
      <div>選択されているのは、{selectedFruits.join(', ')}です</div>

      <div>得意なスポーツ</div>
      <CheckBox
        id='soccer2'
        value='soccer'
        checked={selectedSports.includes('soccer')}
        labelName='サッカー'
        onChange={changeCheckBox2}
      />
      <CheckBox
        id='baseball2'
        value='baseball'
        checked={selectedSports.includes('baseball')}
        labelName='野球'
        onChange={changeCheckBox2}
      />
      <CheckBox
        id='basketball2'
        value='basketball'
        checked={selectedSports.includes('basketball')}
        labelName='バスケットボール'
        onChange={changeCheckBox2}
      />
      <div>選択されているのは、{selectedSports.join(', ')}です</div>
    </div>
  );
};

export default Test2;
