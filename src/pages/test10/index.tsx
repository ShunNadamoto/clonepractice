import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const Test10: NextPage = () => {
  const router = useRouter();
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refetchPersonList, setRefetchPersonList] = useState(false);
  const refetch = () => setRefetchPersonList(!refetchPersonList);
  const [name, setNewName] = useState('');
  const [age, setNewAge] = useState('');
  const [note, setNewNote] = useState('');
  const [number, setNumber] = useState(0);

  const resetInput = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  // const foo = { a: 1, b: 2 };

  // // オブジェクトのクローン
  // const bar = { ...foo }; // => { a: 1, b: 2 }

  // // プロパティを追加した新しいオブジェクトの生成
  // const baz = { ...foo, c: 3, d: 4 }; // => { a: 1, b: 2, c: 3 }
  // console.log(baz);

  // // オブジェクトのマージ
  // const hoge = { ...foo, ...{ c: 3, d: 4 } }; // => { a: 1, b: 2, c: 3, d: 4 }
  // console.log(hoge);

  // // 元のオブジェクトに同名プロパティがある場合は置き換わる
  // const fuga = { ...foo, b: 3 }; // => { a: 1, b: 3 }
  // console.log(fuga);
  // const piyo = { ...foo, ...{ a: 3, b: 4 } }; // => { a: 3, b: 4 }
  // console.log(piyo);

  // const foo2 = { a: { b: 1 } };
  // const bar2 = { ...foo2 };
  // console.log(foo2);

  // // foo2.a.b = 2;
  // console.log(bar2);

  // const array = [1, 2, 3];
  // const [x, y, z] = array;
  // // console.log(x); // => 1
  // // console.log(y); // => 2
  // // console.log(z); // => 3

  // const obj = { foo: 1, bar: 2, baz: 3 };
  // const { bar } = obj;
  // console.log(bar); // => 1

  // const array = [1, 2, 3];
  // const [p, ...q] = array;
  // console.log(p); // => 1
  // console.log(q); // => [2, 3]

  // const obj = { foo: 1, bar: 2, baz: 3 };
  // const { foo, ...rest } = obj;
  // console.log(foo); // => 1
  // console.log(rest); // => { bar: 2, baz: 3 }

  useEffect(() => {
    const getPersonList = async () => {
      const res = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
      setPersonList(res.data.data);
    };

    getPersonList();
  }, [refetchPersonList]);

  const [name2, setName2] = useState('');
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <div>test10ページ</div>
        <button onClick={() => router.push('/sample')}>sampleページへ</button>
      </div>

      {name2 === '田中' && <div>aaa</div>}
      {name2 === '松岡' && <div>bbb</div>}
      {number === 2 && <div>bbb</div>}

      <div>
        <input
          type='text'
          value={name}
          placeholder='人物名入力'
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
            .then((res) => {
              resetInput();
            })
            .catch((error) => console.log(error));
        }}
      >
        新規登録
      </button>
    </>
  );
};

export default Test10;
