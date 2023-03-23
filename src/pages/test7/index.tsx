import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useGetPersonList } from '../../lib/hooks';

const Test7: NextPage = () => {
  const { data: personList, refetch: refetchPersonList } = useGetPersonList();
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newNote, setNewNote] = useState('');
  const resetInput = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type='text'
        value={newName}
        placeholder='人物名を入力'
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
        placeholder='記事を入力'
        onChange={(e) => setNewNote(e.target.value)}
      />
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
              resetInput();
              refetchPersonList();
            })
            .catch((error) => console.log(error))
        }
      >
        新規に人物登録する
      </button>

      {personList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <div key={index} style={{ marginTop: '20px', background: 'lightblue' }}>
            <div>人物プロフィール</div>
            <div>{`名前は${name}`}</div>
            <div>{`年齢は${age}`}</div>
            <div>{`メモ：${note}`}</div>
            <div>{`投稿日${registerDate}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Test7;
