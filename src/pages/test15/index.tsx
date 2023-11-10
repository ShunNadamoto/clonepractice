import { NextPage } from 'next';
import { useState } from 'react';

const Test15: NextPage = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [selectAge, setSelectAge] = useState('');
  const ageList = [
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
  ];
  const [selectDrink, setSelectDrink] = useState('');
  const [selectedDrinkList, setSelectedDrinkList] = useState<string[]>([]);
  const drinkList = [
    { value: '1', label: 'オレンジジュース' },
    { value: '2', label: 'りんごジュース' },
    { value: '3', label: 'マンゴージュース' },
  ];
  return (
    <>
      <input
        type='text'
        placeholder='名前の入力欄'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {name.length === 0 && <div>入力必須</div>}

      <input
        type='text'
        placeholder='電話番号入力欄'
        value={tel}
        onChange={(event) => setTel(event.target.value)}
      />
      {tel.length === 0 && <div>入力必須</div>}
      {!/(0{1}\)d{9,10})$/.test(tel) && <div>電話番号は10桁もしくは11桁で入力</div>}

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

      <select value={selectDrink} onChange={(event) => setSelectDrink(event.target.value)}>
        <option value='0'>選択されていない</option>
        {drinkList.map((elem) => (
          <option key={elem.label}>{elem.label}</option>
        ))}
      </select>

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

export default Test15;
