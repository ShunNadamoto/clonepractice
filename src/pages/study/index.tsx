import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const Study: NextPage = () => {
  const [data, setData] = useState<Person[]>([]);
  const [data2, setData2] = useState('aaa');

  const [isTest, setIsTest] = useState(false);
  const PersonData = [
    { name: 'aaa', age: 17, note: 'aaaという人です', registerDate: '2020/4/20' },
    { name: 'iii', age: 18, note: 'iiiという人です', registerDate: '2020/4/21' },
    { name: 'uuu', age: 19, note: 'uuuという人です', registerDate: '2020/4/22' },
  ];
  console.log('----1-----');

  useEffect(() => {
    // setData(PersonData);
    // setData2('aaa');
    console.log('useEffect!!!!!!');
  }, [isTest]);

  console.log('-----2-----');

  return (
    <div>
      <button onClick={() => setIsTest(!isTest)}>これ押したらisTest切り替えする</button>　
      {<div>{isTest ? 'isTestはtrueです' : 'isTestはfalseです'}</div>}
      {data.map((elem, index) => (
        <div key={index}>
          <div>名前：{elem.name}</div>
          <div>年齢：{elem.age}</div>
          <div>備考：{elem.note}</div>
          <div>投稿日：{elem.registerDate}</div>
        </div>
      ))}
    </div>
  );
};

export default Study;
