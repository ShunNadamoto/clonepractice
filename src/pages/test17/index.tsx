import { NextPage } from 'next';
import { useState } from 'react';
import Parent from '@/ContextPractice/ContextComponents2/Parent';

export const Test17: NextPage = () => {
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const areaList = [
    { value: '1', label: '関東' },
    { value: '2', label: '関西' },
    { value: '3', label: '九州' },
  ];
  const [selectedAge, setSelectedAge] = useState('');
  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
  ];
  const [selectedSportsList, setSelectedSPortsList] = useState<string[]>([]);
  const sportsList = [
    { value: '1', label: '野球' },
    { value: '2', label: 'サッカー' },
    { value: '3', label: 'ゴルフ' },
  ];
  return (
    <>
      <input
        type='text'
        placeholder='名前を入力して下さい'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {name.length === 0 && <div>入力は必須</div>}
      <input
        type='text'
        placeholder='電話番号を入力して下さい'
        value={telNo}
        onChange={(event) => setTelNo(event.target.value)}
      />

      {areaList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectedArea === elem.value}
            onChange={(event) => setSelectedArea(event.target.value)}
          />
          {elem.label}
        </label>
      ))}

      <select value={selectedAge} onChange={(event) => setSelectedAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      {sportsList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedSportsList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedSPortsList: string[];
              if (event.target.checked) {
                newSelectedSPortsList = [...selectedSportsList, event.target.value];
              } else {
                newSelectedSPortsList = selectedSportsList.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              setSelectedSPortsList(newSelectedSPortsList);
            }}
          />
          {elem.label}
        </label>
      ))}

      <Parent />
    </>
  );
};

export default Test17;
