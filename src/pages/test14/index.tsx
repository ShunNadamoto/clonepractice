import { NextPage } from 'next';
import { useState } from 'react';

const Test14: NextPage = () => {
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const [selectAge, setSelectAge] = useState('');
  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
    { value: '4', label: '40代' },
  ];
  const [selectFood, setSelectFood] = useState('');
  const foodList = [
    { value: '1', name: '米' },
    { value: '2', name: 'パン' },
    { value: '3', name: '麺類' },
  ];
  const [selectedDrinkList, setSelectedDrinkList] = useState<string[]>([]);
  const drinkList = [
    { value: '1', label: '牛乳' },
    { value: '2', label: 'コーヒー' },
    { value: '3', label: 'コーラ' },
  ];

  return (
    <>
      <div>入力フォームテスト</div>
      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい'
        onChange={(e) => setName(e.target.value)}
      />
      {name.length === 0 && <div>入力は必須です</div>}
      <input
        type='text'
        value={telNo}
        placeholder='電話番号を入力して下さい。'
        onChange={(e) => setTelNo(e.target.value)}
      />
      {telNo.length === 0 && <div>入力は必須です</div>}
      {!/^(0{1}\d{9,10})$/.test(telNo) && <div>電話番号は10桁か11桁です</div>}
      <div>年代選択</div>
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
      <div>あなたの主食は？</div>
      <select value={selectFood} onChange={(e) => setSelectFood(e.target.value)}>
        <option value='0'>選択されていません</option>
        {foodList.map((elem) => (
          <option key={elem.value}>{elem.name}</option>
        ))}
      </select>
      <div>チェックボックス練習</div>

      {drinkList.map((elem) => {
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedDrinkList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedDrinkList: string[];
              if (event.target.checked) {
                newSelectedDrinkList = [...selectedDrinkList, event.target.value];
              } else {
                newSelectedDrinkList = selectedDrinkList.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              setSelectedDrinkList(newSelectedDrinkList);
            }}
          />
          {elem.label}
        </label>;
      })}
    </>
  );
};

export default Test14;
