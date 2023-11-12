/* eslint-disable import/named */
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const DayStudyReact2: NextPage = () => {
  const [name, setName] = useState('');
  const [selectAge, setSelectAge] = useState('');
  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
  ];

  const [selectedFoodList, setSelectedFoodList] = useState<string[]>([]);
  const foodList = [
    { value: '1', label: 'うどん' },
    { value: '2', label: 'ラーメン' },
    { value: '3', label: 'そば' },
  ];

  return (
    <>
      <div>入力フォーム練習</div>

      <div>あああ</div>

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

      <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      {name.length === 0 && '入力して下さい'}

      <select value={selectAge} onChange={(event) => setSelectAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      {ageList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectAge === elem.value}
            onChange={(event) => setSelectAge(event.target.value)}
          />
          {elem.label}
        </label>
      ))}
    </>
  );
};

export default DayStudyReact2;
