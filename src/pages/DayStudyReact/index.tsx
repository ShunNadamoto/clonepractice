/* eslint-disable import/named */
import { NextPage } from 'next';
import Image from 'next/image';
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import Parent from '@/ContextPractice/ContextComponents/Parent';

//useEffect 第1引数にコールバック関数、第2引数に依存配列
//発火のタイミングを決めることが出来る。変数が変化したとき？マウント（ページがリロード）された時？アンマウントされた時？

const DayStudyReact: NextPage = () => {
  console.log('aaa');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [power, setPower] = useState(false);
  const handleClick = () => {
    setCount(count * 2);
  };
  const [displayImage, setDisplayImage] = useState('');

  const fileTagRef = useRef<HTMLInputElement>(null);
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return null;
    const file = event.target?.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDisplayImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log('useEffectが実行されました');
  }, []);
  return (
    <div>
      <div
        onClick={() => {
          if (fileTagRef && fileTagRef.current) {
            fileTagRef.current.click();
          }
        }}
      >
        プロフィール写真変更
      </div>
      <input
        type='file'
        accept='image/*'
        onChange={onChangeFile}
        ref={fileTagRef}
        style={{ display: 'none' }}
      />
      <Image src={displayImage} alt='プロフィール画像' width='150' height='150' />

      <p>useState練習</p>

      <div>
        <h1>Counter</h1>
        <h2>カウント: {count}</h2>
        <button onClick={() => setCount(count + 1)}>＋</button>
        <button onClick={() => setCount(count - 1)}>ー</button>
      </div>

      <button style={{ width: '100px', height: '30px' }} onClick={handleClick}>
        2倍{count}
      </button>

      <h1>電源 {power ? 'ON' : 'OFF'} </h1>
      <button onClick={() => setPower((prevState) => !prevState)}>ON/OFF</button>

      <h1>Learn useEffect</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount2(count + 1)}>+</button>

      <Parent />
    </div>
  );
};

export default DayStudyReact;
