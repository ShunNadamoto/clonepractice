import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useCountTime, useGetPersonList2 } from '../../lib/hooks';
import styles from './index.module.scss';

const Test5: NextPage = () => {
  const router = useRouter();
  const count = useCountTime();

  const { data: personList, refetch: refetchPersonList } = useGetPersonList2();

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newNote, setNewNote] = useState('');
  const Input = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  const count2 = () => {
    console.log('aaa');
  };
  const test = () => setNewName('');

  const count3 = (num1: number, num2: number) => num1 + num2;
  console.log(count3(1, 3));

  type Person = {
    name: string;
    age: number;
  };

  const [personList2, setPersonList2] = useState<Person[]>([]);

  return (
    <div>
      <div>test5ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>

      <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input
          type='text'
          value={newName}
          placeholder='名前を入力'
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type='text'
          value={newAge}
          placeholder='年齢を入力'
          onChange={(e) => setNewAge(e.target.value)}
        />
        <input
          type='text'
          value={newNote}
          placeholder='メモを入力'
          onChange={(e) => setNewNote(e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          axios
            .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
              name: newName,
              age: Number(newAge),
              note: newNote,
              registerDate: '0214-03-03T04:14:25',
            })
            .then(() => {
              Input();
              refetchPersonList();
            })
            .catch((error) => console.log(error))
        }
      >
        新規登録
      </button>

      {personList.map((elem, index) => {
        const { age, name, note, registerDate } = elem;
        return (
          <div key={index}>
            <div>{age}</div>
            <div>{name}</div>
            <div>{note}</div>
            <div>{registerDate}</div>
            <div>{`${name}は${age}歳です`}</div>
            <div>{age === '20歳' ? '20歳です' : 'ハズレ'}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Test5;
