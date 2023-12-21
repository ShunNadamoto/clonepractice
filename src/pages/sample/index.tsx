import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const Sample: NextPage = () => {
  const router = useRouter();
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newNote, setNewNote] = useState('');

  console.log(personList);

  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        console.log(response);
        setPersonList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  const calc = (num1: number, num2: number) => {
    return num1 + num2;
  };
  console.log(calc(1, 3));

  const resetInput = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  return (
    <>
      <div>サンプルページ</div>
      <button onClick={() => router.push('/sample/test2')}>/sample/test2ページへ</button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type='text'
          value={newName}
          placeholder='人物名を入力'
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          type='text'
          value={newAge}
          placeholder='年齢を入力'
          onChange={(event) => setNewAge(event.target.value)}
        />
        <input
          type='text'
          value={newNote}
          placeholder='記事を入力'
          onChange={(event) => setNewNote(event.target.value)}
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
              .then((response) => {
                resetInput();
                setRefresh(!refresh);
              })
              .catch((error) => console.log(error))
          }
        >
          新規に人物登録する
        </button>
      </div>

      {personList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <div key={index} style={{ marginTop: '20px', background: 'red' }}>
            <div>人物プロフィール</div>
            <div>{`名前は${name}`}</div>
            <div>{`年齢は${age}`}</div>
            <div>{`メモ：${note}`}</div>
            <div>{`投稿日${registerDate}`}</div>
          </div>
        );
      })}
    </>
  );
};

export default Sample;
