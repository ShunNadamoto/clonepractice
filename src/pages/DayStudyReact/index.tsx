/* eslint-disable import/named */
import { NextPage } from 'next';
import { useState, useEffect, createContext } from 'react';
import Parent from '@/ContextPractice/ContextComponents/Parent';

//useEffect 第1引数にコールバック関数、第2引数に依存配列
//発火のタイミングを決めることが出来る。変数が変化したとき？マウント（ページがリロード）された時？アンマウントされた時？

const DayStudyReact: NextPage = () => {
  const [count, setCount] = useState(100);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    //ページがリロードしたときに発火
    console.log('Hello Hooks');
    //countの変数が更新されたとき。set関数を入れると延々とcountの状態が続いて何度も発動、無限ループになってしまう。
  }, [count]);
  return (
    <div>
      <p>useState, useEffect</p>
      <button style={{ width: '60px', height: '30px' }} onClick={handleClick}>
        {count}
      </button>

      <Parent />

      <hr />
    </div>
  );
};

export default DayStudyReact;
