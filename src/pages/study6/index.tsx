import { NextPage } from 'next';
import { useState } from 'react';

const Study6: NextPage = () => {
  const [selectedFruitsList, setSelectedFruitsList] = useState<string[]>([]);
  const fruitList = [
    { label: 'オレンジ', value: 'orange' },
    { label: 'りんご', value: 'apple' },
    { label: 'ぶどう', value: 'grape' },
  ];
  return (
    <div>
      <div>入力フォーム系練習</div>

      <div>入力フォーム</div>
      <div>チェックボックス練習</div>

      {fruitList.map((elem) => (
        <label key={elem.value} style={{ display: 'flex' }}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedFruitsList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedFruitsList: string[];
              if (event.target.checked) {
                if (selectedFruitsList.length === 2) return;
                newSelectedFruitsList = [...selectedFruitsList, event.target.value];
              } else {
                newSelectedFruitsList = selectedFruitsList.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              if (newSelectedFruitsList.length === 3) return;

              setSelectedFruitsList(newSelectedFruitsList);
            }}
          />
          <div>{elem.label}</div>
        </label>
      ))}
    </div>
  );
};

export default Study6;
