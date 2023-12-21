import { NextPage } from 'next';
import { useState } from 'react';
// eslint-disable-next-line import/named

export const Test19: NextPage = () => {
  const [telNo, setTelNo] = useState('');
  const [selectedFruits, setSelectedFruits] = useState('');
  const fruitList = [
    { value: '0', label: '未選択' },
    { value: '1', label: 'みかん' },
    { value: '2', label: 'りんご' },
    { value: '3', label: 'ぶどう' },
  ];
  const [selectedFoods, setSelectedFoods] = useState('');
  const foodsList = [
    { value: '0', label: '未選択' },
    { value: '1', label: '米' },
    { value: '2', label: 'パン' },
  ];
  const [name, setName] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const areaList = [
    { value: '1', label: '東京' },
    { value: '2', label: '大阪' },
    { value: '3', label: '福岡' },
  ];
  const [selectedAgeList, setSelectedAgeList] = useState<string[]>([]);
  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
  ];
  console.log(name);
  console.log(selectedFoods);
  console.log(selectedArea);

  return (
    <div>
      <div>電話番号入力欄</div>
      <input
        type='text'
        value={telNo}
        placeholder='電話番号を入力して下さい'
        onChange={(event) => setTelNo(event.target.value)}
      />
      {telNo.length === 0 && <div>電話番号は必須です。</div>}

      <select value={selectedFruits} onChange={(event) => setSelectedFruits(event.target.value)}>
        {fruitList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      <input
        type='text'
        placeholder='名前の入力'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <select value={selectedFoods} onChange={(event) => setSelectedFoods(event.target.value)}>
        {foodsList.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
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
    </div>
  );
};

export default Test19;
