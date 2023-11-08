import { NextPage } from 'next';
import { useState, createContext } from 'react';
import ComponentA from '@/components/ContextTest/ComponentA';

const Test18: NextPage = () => {
  const [name, setName] = useState('');
  const [selectedAge, setSelectedAge] = useState('0');
  const ageList = [
    { value: '0', label: '未選択' },
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
  ];
  const [selectedArea, setSelectedArea] = useState('');
  const areaList = [
    { value: '1', label: '関東' },
    { value: '2', label: '関西' },
    { value: '3', label: '九州' },
  ];
  const [selectedSportsList, setSelectedSportsList] = useState<string[]>([]);
  const sportsList = [
    { value: '1', label: '野球' },
    { value: '2', label: 'サッカー' },
    { value: '3', label: 'ゴルフ' },
  ];

  console.log(selectedSportsList);
  return (
    <div>
      <div>入力フォーム</div>
      <input
        type='text'
        placeholder='名前を入力して下さい'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>年代選択</div>　
      <select value={selectedAge} onChange={(event) => setSelectedAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
      <div>地域選択</div>
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
      <div>好きなスポーツ</div>
      {sportsList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedSportsList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedSportsList: string[];
              if (event.target.checked) {
                newSelectedSportsList = [...selectedSportsList, event.target.value];
              } else {
                newSelectedSportsList = selectedSportsList.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              setSelectedSportsList(newSelectedSportsList);
            }}
          />
          {elem.label}
        </label>
      ))}
    </div>
  );
};

export default Test18;
