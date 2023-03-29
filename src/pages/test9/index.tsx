import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { CheckBox2 } from '../../components/CheckBox2';
import { useGetPersonList2 } from '../../lib/hooks';
import styles from './index.module.scss';

const Test9: NextPage = () => {
  const router = useRouter();
  //ボタンクリックしてページ遷移できるようにuseRouterを定義する。
  const { data: personList, refetch: refetchPersonList } = useGetPersonList2();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [note, setNote] = useState('');
  //useStateでname,age,noteの状態管理を定義する。
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);

  const resetInput = () => {
    setName('');
    setAge('');
    setNote('');
  };

  const changeCheckBox2 = (event: ChangeEvent<HTMLInputElement>) =>
    setSelectedAnimals((prevState) => {
      const isIncludeValue = prevState.includes(event.target.value);
      if (isIncludeValue) {
        return prevState.filter((elem) => elem !== event.target.value);
      } else {
        return [...prevState, event.target.value];
      }
    });

  return (
    <>
      <button onClick={() => router.push('/')}>topページに戻る</button>

      <div className={styles.container}>
        <input
          //inputタグでフォーム入力要素を作る。
          type='text'
          value={name}
          placeholder='人物名入力'
          onChange={(e) => setName(e.target.value)}
          //引数eでイベントを取得、変数でe.target.valueを取得。
        />
        <input
          type='text'
          value={age}
          placeholder='年齢を入力'
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type='text'
          value={note}
          placeholder='記事欄を入力'
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={() =>
            axios
              .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
                name: name,
                age: Number(age),
                note: note,
                registerDate: '0214-03-03T04:14:25',
              })
              .then((res) => {
                resetInput();
                refetchPersonList();
              })
              .catch((error) => console.log(error))
          }
        >
          新規に人物を登録する
        </button>
      </div>

      {personList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <div
            key={index}
            style={{
              marginTop: '20px',
              background: 'lightblue',
              width: '300px',
            }}
          >
            <div>人物プロフィール</div>
            <div>{`名前は${name}`}</div>
            <div>{`年齢は${age}`}</div>
            <div>{`メモ：${note}`}</div>
            <div>{`投稿日${registerDate}`}</div>
          </div>
        );
      })}

      <div>動物園で好きな動物は</div>
      <CheckBox2
        id='lion2'
        value='lion'
        checked={selectedAnimals.includes('lion')}
        labelName='ライオン'
        onChange={changeCheckBox2}
      />
      <CheckBox2
        id='gorrila2'
        value='gorilla'
        checked={selectedAnimals.includes('gorilla')}
        labelName='ゴリラ'
        onChange={changeCheckBox2}
      />
      <CheckBox2
        id='elephant2'
        value='elephant'
        checked={selectedAnimals.includes('elephant')}
        labelName='ゾウ'
        onChange={changeCheckBox2}
      />
      <div>{selectedAnimals.join(', ')}です</div>
    </>
  );
};

export default Test9;
