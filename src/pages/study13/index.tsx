import { NextPage } from 'next';
import { useState } from 'react';

const Study13: NextPage = () => {
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const [seleceAge, setSelectAge] = useState('');
  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
    { value: '4', label: '40代' },
    { value: '5', label: '50代' },
  ];
  const [city, setCity] = useState('');
  const cityList = [
    { value: '1', label: 'Tokyo' },
    { value: '2', label: 'Oomiya' },
    { value: '3', label: 'Hiroshima' },
    { value: '4', label: 'okayama' },
  ];

  const [selectedPetList, setSelectedPetList] = useState<string[]>([]);
  const petList = [
    { value: '1', label: '犬' },
    { value: '2', label: '猫' },
    { value: '3', label: 'ウサギ' },
  ];

  return (
    <>
      <div>入力フォーム練習</div>

      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい'
        onChange={(event) => setName(event.target.value)}
      />
      {name.length === 0 && <div>入力は必須</div>}

      <div>
        <input type='text' value={telNo} onChange={(event) => setTelNo(event.target.value)} />
        {telNo.length === 0 && <div>入力は必須</div>}
        {!/^(0{1}\d{9,10})$/.test(telNo) && <div>電話番号は10桁か11桁です</div>}
      </div>

      <div>年代選択</div>
      {ageList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={seleceAge === elem.value}
            onChange={(event) => setSelectAge(event.target.value)}
          />
          {elem.label}
        </label>
      ))}

      <div>住んでいる街を選択</div>
      <select value={city} onChange={(event) => setCity(event.target.value)}>
        <option value='0'>選択されていません</option>
        {cityList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      <div>チェックボックス練習</div>

      {petList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedPetList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedPetList: string[];
              if (event.target.checked) {
                newSelectedPetList = [...selectedPetList, event.target.value];
              } else {
                newSelectedPetList = selectedPetList.filter((elem) => elem !== event.target.value);
              }
              setSelectedPetList(newSelectedPetList);
            }}
          />
          {elem.label}
        </label>
      ))}
    </>
  );
};

export default Study13;
