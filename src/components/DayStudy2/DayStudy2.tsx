import axios from 'axios';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const person = {
  name: 'aaa',
  age: 20,
};
const person2 = { name: 'ccc', age: 2 };
const person3 = { name: 'ddd', gender: '男性' };
const person4 = { height: 1.8, weight: 70 };
const apple = { name: 'apple', color: 'red' };
const rice = { name: '米', color: '白' };
const dog = { name: 'taro', type: '犬' };
console.log(person4.height);
const personList4 = [
  { name: '太郎', age: 5, note: '子供', registerDate: '20230519' },
  { name: '二郎', age: 13, note: '中学生', registerDate: '20230524' },
  { name: '三郎', age: 7, note: '小学生', registerDate: '20230522' },
];

export const DayStudy2 = () => {
  return (
    <div>
      aaaaaa
      <div></div>
      <div></div>
      {personList4.map((elem, index) => (
        <div key={index}>{elem.age}</div>
      ))}
    </div>
  );
};
