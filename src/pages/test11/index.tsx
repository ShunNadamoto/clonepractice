import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Demaecan } from '../../components/Demaecan';

type Person = {
  name: string;
  age: string;
  note: string;
  registerDate: string;
};

const Test11: NextPage = () => {
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
          placeholder='記事欄を入力'
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
            .then((_res) => {
              resetInput();
            })
            .catch((error) => console.log(error));
        }}
      >
        新規に登録する
      </button>
      <div>
        <Demaecan
          menuImgUrl='https://cdn.demae-can.com/files/imgix/item720/kHHf0mnS/l2_IS7k0k10001.jpg?imwidth=256'
          restaurantName='ココス古京店'
          evaluation='⭐︎3.8'
          minimumPrice='1円からお届け'
          demaecanTagList={[{ img: 'demaecan', name: '出前館がお届け' }]}
          deliveryTime='15-30'
        />
      </div>
    </>
  );
};

export default Test11;
