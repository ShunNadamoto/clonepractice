import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type Person = {
  name: string;
  age: string;
  note: string;
  registerDate: string;
};

const Test12: NextPage = () => {
  const router = useRouter();
  const [name, setNewName] = useState('');
  const [age, setNewAge] = useState('');
  const [note, setNewNote] = useState('');
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refetchPersonList, setRefetchPersonList] = useState(false);

  const resetInput = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  useEffect(() => {
    const getPersonList = async () => {
      const res = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
      setPersonList(res.data.data);
    };
    getPersonList();
  }, [refetchPersonList]);

  return (
    <>
      <div>{personList.map(() => ['松岡', '41歳', '仕事がしたい', '2023/4/3'])}</div>　
      <button onClick={() => router.push('/')}>topページへ</button>
      <div>
        <input
          type='text'
          value={name}
          placeholder='名前を入力'
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type='text'
          value={age}
          placeholder='年齢を入力'
          onChange={(e) => setNewAge(e.target.value)}
        />
        <input
          type='text'
          value={note}
          placeholder='メモを入力'
          onChange={(e) => setNewNote(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          axios
            .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
              name: name,
              age: Number(age),
              note: note,
              registerDate: '0214-03-03T04:14:25',
            })
            .then(() => {
              setRefetchPersonList(!refetchPersonList);
              resetInput();
            })
            .catch((error) => console.log(error));
        }}
      >
        新規登録する
      </button>
    </>
  );
};
export default Test12;
