import React, { FC, useState, useEffect } from 'react';

type Human = {
  name: string;
  age: number;
  gender: string;
};

type props = { name: string; list: string[]; list2: { aa: string; bb: string }[] };

//関数入力練習、発動
const sum = (a: number, b: number) => a + b;
const sum2 = (num1: number, num2: number) => {
  return num1 + num2;
};
console.log(sum(1, 2));

const person2 = (name: string, age: number) => {
  return `${name}は${age}歳です。`;
};

//配列練習
const numberList = [1, 2, 3];
const [num1, num2, num3] = numberList;
console.log(num1, num2, num3);
const week = [];
week[0] = '日曜日';
console.log(week[0]);

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
console.log(people[0].name);
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

type Props = {
  testName: string;
  testAge: number;
  humanList: Human[];
  testOnClick: () => void;
};

export const DayStudy: FC<Props> = (props) => {
  // useState,useEffect入力練習
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);
  useEffect(() => {});

  const { testName, testAge, humanList, testOnClick } = props;

  return (
    <div>
      <div>{testName}</div>
      <div>{`${testName}さんは${testAge}歳です。`} </div>
      <div>{testAge > 35 ? 'おっさん' : '青少年'}</div>
      <div>{testAge === 41 ? '正解！' : 'ハズレ'}</div>
      <div>{testAge < 30 ? '悟り世代' : ''}</div>
      <div>{testAge >= 30 ? 'ゆとり世代' : ''}</div>

      <div>
        {humanList.map((elem, index) => (
          <div key={index}>
            <div>{elem.name}</div>
            <div>{`${elem.age}歳`}</div>
            <div>{elem.gender}</div>
          </div>
        ))}
      </div>

      <button onClick={testOnClick}>OnclickTestボタン</button>
    </div>
  );
};
