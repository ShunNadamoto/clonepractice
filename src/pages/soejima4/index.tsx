import cn from 'classnames';
import { NextPage } from 'next';
import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import { Test } from '@/components/Test';

const Soejima4: NextPage = () => {
  const sum = (val1: number, val2: number) => val1 + val2;
  console.log(sum(2, 3));

  type Person = {
    id: string;
    age: number;
    name: string;
  };

  const [personList, setPersonList] = useState<Person[]>([
    { id: '1', age: 20, name: 'a' },
    { id: '2', age: 30, name: 'b' },
    { id: '3', age: 40, name: 'c' },
  ]);

  const [isDisplay, setIsDisplay] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(array.filter((elem) => elem > 4).join(':'));
  return (
    <div>
      <Test menuImgUrl='a' menu='abc' description='テスト' />
      <button onClick={() => setIsDisplay(!isDisplay)}>表示/非表示 切り替え</button>
      {isDisplay &&
        personList.map((elem) => {
          return (
            <div key={elem.id}>
              <div>id:{elem.id}</div>
              <div>age:{elem.age}</div>
              <div>name:{elem.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Soejima4;
