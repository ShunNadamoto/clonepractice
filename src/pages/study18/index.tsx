import { NextPage } from 'next';
import { useState } from 'react';
import { DayStudy3 } from '@/components/DayStudy3/DayStudy3';

const Study18: NextPage = () => {
  const [name, setName] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const ageList = [
    { value: '1', name: '10代' },
    { value: '2', name: '20代' },
    { value: '3', name: '30代' },
  ];
  return (
    <>
      <div>入力フォーム練習</div>
      <input
        type='text'
        value={name}
        placeholder='名前を入力してね'
        onChange={(event) => event.target.value}
      />
      <select value={selectedAge} onChange={(event) => setSelectedAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value}>{elem.name}</option>
        ))}
      </select>
      　　　
      {ageList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            onChange={(event) => setSelectedAge(event.target.value)}
          />
          {elem.name}
        </label>
      ))}
      <DayStudy3 />
    </>
  );
};

export default Study18;
