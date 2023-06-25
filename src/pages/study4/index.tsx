import { NextPage } from 'next';
import { useState } from 'react';

const Study4: NextPage = () => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [tel, setTel] = useState('');

  const [selectedFood, setSelectedFood] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');
  const foodList = [
    { value: '0', label: 'ご飯' },
    { value: '1', label: 'パン' },
    { value: '2', label: '麺' },
  ];

  const fruitList = [
    { value: '0', label: 'みかん' },
    { value: '1', label: 'りんご' },
  ];
  console.log(!0);
  const test = 0 ? 'aaaa' : 'iiiiiii';
  console.log(test);

  let num1 = 15;
  if (num1 > 30) {
    console.log('num1は30より大きいです。');
  } else if (num1 >= 20) {
    console.log('num1は20〜30の間です');
  } else if (num1 >= 10) {
    console.log('num1は10から20の間です');
  } else {
    console.log('num1は10未満です');
  }

  const value = 90;
  if (0 <= value && value < 10) {
    console.log('0以上10未満');
  } else if (10 <= value && value < 20) {
    console.log('10以上20未満');
  } else if (20 <= value || value < 100) {
    console.log('20以上または100未満');
  }

  const value2 = 20;
  if (value2 === 20) {
    console.log('数値は20です。');
  }
  if (value2 === 20) console.log('数値は20です。');

  const age = 17;
  if (age > 10 && age < 20) {
    console.log('私は10代です。');
  } else {
    console.log('10代ではありません。');
  }
  const score1 = 40;
  const score2 = 80;
  if (score1 > 50 || !(score2 > 60)) {
    console.log('合格！');
  } else {
    console.log('不合格');
  }
  console.log(!(score2 > 60));
  console.log(!(score1 > 50));
  console.log(!(score1 > 50 || score2 > 60));

  return (
    <div>
      <div>名前入力フォーム</div>
      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい。'
        onChange={(event) => {
          console.log(event.target.value);
          setName(event.target.value);
        }}
      />

      <div>電話番号入力フォーム</div>
      <input
        type='text'
        value={tel}
        placeholder='電話番号を入力して下さい。'
        onChange={(event) => setTel(event.target.value)}
      />

      <div>備考欄入力欄</div>
      <textarea
        id='textArea'
        value={note}
        placeholder='何かあれば入力して下さい。'
        onChange={(event) => {
          setNote(event.target.value);
        }}
      />

      <div>主食は何を食べるか？</div>
      <select
        value={selectedFood}
        onChange={(event) => {
          console.log(event.target.value);
          setSelectedFood(event.target.value);
        }}
      >
        <option value=''>未選択</option>
        {foodList.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>

      {fruitList.map((elem) => (
        <label key={elem.value} style={{ display: 'flex' }}>
          <input
            type='radio'
            value={elem.value}
            checked={selectedFruit === elem.value}
            onChange={(event) => setSelectedFruit(event.target.value)}
          />
          <div>{elem.label}</div>
        </label>
      ))}
      {/* <label style={{ display: 'flex' }}>
        <input
          type='radio'
          value='0'
          checked={selectedFruit === '0'}
          onChange={(event) => setSelectedFruit(event.target.value)}
        />
        <div>みかん</div>
      </label>

      <label style={{ display: 'flex' }}>
        <input
          type='radio'
          value='1'
          checked={selectedFruit === '1'}
          onChange={(event) => setSelectedFruit(event.target.value)}
        />
        <div>りんご</div>
      </label> */}
    </div>
  );
};

export default Study4;
