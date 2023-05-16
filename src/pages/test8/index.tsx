import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useGetPersonList } from '../../lib/hooks';
import styles from './index.module.scss';

const Test8: NextPage = () => {
  const { data: personList, refetch: refetchPersonList } = useGetPersonList();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [note, setNote] = useState('');
  const router = useRouter();

  const resetInput = () => {
    setName('');
    setAge('');
    setNote('');
  };
  // const sum = (a: number, b: number) => a + b;
  // console.log(sum(0, 2));
  const array = [1, 2, 3];
  array.forEach((elem) => {
    console.log(elem);
  });
  const arr = [10, 20, 30, 40];
  const arr2 = arr.filter((elem) => elem > 10);
  console.log(arr2);
  console.log(arr.length);
  console.log(arr.join('-'));
  console.log(arr.slice(0, 2));

  return (
    <div>
      <input
        type='text'
        value={name}
        placeholder='人の名前を入力'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={age}
        placeholder='歳を入力'
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type='text'
        value={note}
        placeholder='メモを入力'
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
            .then(() => {
              resetInput();
              refetchPersonList();
            })
            .catch((error) => console.log(error))
        }
      >
        新規登録する
      </button>

      <div className={styles.container}>
        <button onClick={() => router.push('/sample')}>サンプルページへ</button>
      </div>

      {personList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <div key={index}>
            <div>プロフィール</div>
            <div>{`名前は${name}`}</div>
            <div>{`年齢は${age}`}</div>
            <div>{`記事${note}`}</div>
            <div>{`投稿日${registerDate}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Test8;
