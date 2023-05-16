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
    </div>
  );
};

export default Test5;
