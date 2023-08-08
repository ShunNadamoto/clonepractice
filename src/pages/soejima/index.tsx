import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

// http://localhost:3000/soejima

const INITIAL_COUNT = 0;
const INITIAL_NAME = 'Javascript';

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const [name, setName] = useState(INITIAL_NAME);

  const countIncrement = () => setCount((prevCoun) => prevCoun + 1);

  const countDecrement = () => setCount((prevCount) => prevCount - 1);

  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className='App'>
      <p>
        現在のカウント数：<b>{count}</b>
        <br />
        count の初期値：<b>{INITIAL_COUNT}</b>
      </p>

      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
      <p>
        Hello, <b>{name} !!</b>
        <br />
        name の初期値：<b>{INITIAL_NAME}</b>
      </p>
      <input type='text' onChange={handleChangeName} />
    </div>
  );
};

//<Head>タイトル</Head>;
const soejima: NextPage = () => {
  return (
    <>
      <SampleComponent />
    </>
  );
};

export default soejima;
