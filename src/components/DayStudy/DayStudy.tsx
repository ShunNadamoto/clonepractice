import axios from 'axios';
import React, { FC, useState, useEffect } from 'react';

interface Person {
  name: string;
  age: number;
  note: string;
  registerDate: string;
}

type props = { name: string; list: string[]; list2: { aa: string; bb: string }[] };

//関数入力練習、発動
const sum = (a: number, b: number) => a + b;
const sum2 = (num1: number, num2: number) => {
  return num1 + num2;
};
console.log(sum(1, 2));

//関数の返り値の型定義サンプル
const person2 = (name: string, age: number): string => {
  return `${name}は${age}歳です。`;
};

//配列練習
const numberList = [1, 2, 3];
const [num1, num2, num3] = numberList;
console.log(num1, num2, num3);
const week = [];
week[0] = '日曜日';

//連想配列練習
const person = { name: 'ccc', age: 28 };
console.log(person.name);
const Fruits = { a: 'apple', b: 'banana', o: 'orange' };
Fruits['a'] = 'apple2';
Fruits.b = 'banana2';
console.log(Fruits.a, Fruits.b, Fruits.o);

//配列の中の配列
const foods = [
  ['米', 'パン', '麺'],
  ['牛肉', '豚肉', '鶏肉'],
];
console.log(foods[0][1]);
console.log(foods[1][2]);

//配列の中の連想配列
const people = [
  { name: 'Ichiro', age: 10, address: 'Tokyo' },
  { name: 'Jiro', age: 20, address: 'Osaka' },
  { name: 'Saburo', age: 30, address: 'Fukuoka' },
];
console.log(people[1].address);
console.log(people[2].age);

//連想配列の中の配列
const foods_group = {
  fruit: ['りんご', 'みかん', 'ばなな'],
  vegetables: ['にんじん', 'ピーマン', 'じゃがいも'],
};
console.log(foods_group.fruit[1]);
console.log(foods_group.vegetables[2]);

//連想配列の中の連想配列
const persons = {
  Sato: { height: 1.8, weight: 70 },
  Yamada: { height: 1.7, weight: 60 },
};
console.log(persons.Yamada.weight);

const person3 = {
  name: 'aaa',
  age: 20,
};
const person4 = { name: 'ccc', age: 2 };
const person5 = { name: 'ddd', gender: '男性' };
const person6 = { height: 1.8, weight: 70 };
const apple = { name: 'apple', color: 'red' };
const rice = { name: '米', color: '白' };
const dog = { name: 'taro', type: '犬' };
console.log(person6.height);
const personList6 = [
  { name: '太郎', age: 5, note: '子供', registerDate: '20230519' },
  { name: '二郎', age: 13, note: '中学生', registerDate: '20230524' },
  { name: '三郎', age: 7, note: '小学生', registerDate: '20230522' },
];

type Props = {
  testName: string;
  testAge: number;
  testOnClick: () => void;
};

export const DayStudy: FC<Props> = (props) => {
  // useState,useEffect入力、発動練習

  const [name2, setName2] = useState('');
  const [humanList2, setHUmanList2] = useState<Person[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [note, setNote] = useState('');
  const resetInput = () => {
    setName('');
    setAge('');
    setNote('');
  };
  const [refreshCount, setRefreshCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [humanList, setHumanList] = useState<Person[]>([]);

  //APIのGet練習
  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        console.log(response);

        setHumanList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  const { testName, testAge, testOnClick } = props;

  //map、filter、テンプレートリテラル、三項演算子の入力練習、APIのPOST通信
  return (
    <div>
      <div>{testName}</div>
      <div>{`${testName}さんは${testAge}歳です。`} </div>
      <div>{testAge > 35 ? 'おっさん' : '青少年'}</div>
      <div>{testAge === 41 ? '正解！' : 'ハズレ'}</div>
      <div>{testAge < 30 ? '悟り世代' : ''}</div>
      <div>{testAge >= 30 ? 'ゆとり世代' : ''}</div>
      <div style={{ padding: '20px', background: 'gray' }}>
        {humanList
          .filter((elem) => elem.age == 32)
          .map((elem, index) => (
            <div key={index}>
              <div>{elem.name}</div>
              <div>{elem.note}</div>
            </div>
          ))}
      </div>
      <button onClick={testOnClick}>OnclickTestボタン</button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type='text'
          value={name}
          placeholder='人物名を入力'
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='text'
          value={age}
          placeholder='年齢を入力'
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type='text'
          value={note}
          placeholder='記事を入力'
          onChange={(event) => setNote(event.target.value)}
        />
      </div>
      <button
        onClick={() =>
          axios
            .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
              name: name,
              age: Number(age),
              note: note,
              registerDate: '0214-03-03T04:14:25',
            })
            .then((response) => {
              resetInput();
              setRefreshCount(refreshCount + 1);
            })
            .catch((error) => console.log(error))
        }
      >
        新規に人物を登録する
      </button>
    </div>
  );
};
