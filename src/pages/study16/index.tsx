import { NextPage } from 'next';
import React, { useState } from 'react';
import ContextPractice from '../../components/ContextPractice';
import ContextPractice2 from '../../components/ContextPractice2';

const Study16: NextPage = () => {
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const foodList = [
    { value: '1', label: 'カレー' },
    { value: '2', label: 'ラーメン' },
    { value: '3', label: '焼肉' },
    { value: '4', label: '寿司' },
  ];
  const [selectedFoodList, setSelectedFoodList] = useState<string[]>([]);

  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
    { value: '4', label: '40代' },
  ];
  const [selectAge, setSelectAge] = useState('');
  const investList = [
    { value: '1', label: '現金' },
    { value: '2', label: 'ideco' },
    { value: '3', label: 'NISA' },
    { value: '4', label: 'S&P500' },
  ];
  const [invest, setInvest] = useState('');
  const [selectedPlanList, setSelectedPlanList] = useState<string[]>([]);
  const planList = [
    { value: '0', label: '契約なし' },
    { value: '1', label: 'マンスリー' },
    { value: '2', label: '週1' },
    { value: '3', label: '1号認定' },
  ];

  return (
    <>
      <div>入力フォーム周り練習</div>

      <input
        type='text'
        placeholder='名前の入力欄'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name.length === 0 && '入力は必須です'}
      {name.length >= 10 && '10文字以内で入力して下さい。'}

      <div></div>

      <input
        type='tel'
        placeholder='電話番号入力欄'
        value={telNo}
        onChange={(e) => setTelNo(e.target.value)}
      />
      {!/^(0{1}\d{9,10})$/.test(telNo) && '電話番号は10桁もしくは11桁です。'}

      <div></div>
      <div>投資を始めた年齢</div>
      {ageList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectAge === elem.value}
            onChange={(e) => setSelectAge(e.target.value)}
          />
          {elem.label}
        </label>
      ))}

      <div></div>
      <div>購入商品</div>
      <select value={invest} onChange={(e) => setInvest(e.target.value)}>
        <option value='0'>未選択</option>
        {investList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      <div>チェックボックス練習</div>
      {foodList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedFoodList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedFoodList: string[];
              if (event.target.checked) {
                newSelectedFoodList = [...selectedFoodList, event.target.value];
              } else {
                newSelectedFoodList = selectedFoodList.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              setSelectedFoodList(newSelectedFoodList);
            }}
          />
          {elem.label}
        </label>
      ))}

      <select value={invest} onChange={(e) => setInvest(e.target.value)}>
        <option value='0'>選択されていません</option>
        {investList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      <input
        type='checkbox'
        value='0'
        checked={selectedPlanList.includes('0')}
        onChange={(e) => {
          let newSelectedPlanList: string[];
          if (e.target.checked) {
            newSelectedPlanList = [...selectedPlanList, e.target.value];
          } else {
            newSelectedPlanList = selectedPlanList.filter((elem) => elem !== e.target.value);
          }
          setSelectedPlanList(newSelectedPlanList);
        }}
      />
      <ContextPractice />

      <ContextPractice2 />
    </>
  );
};

export default Study16;
