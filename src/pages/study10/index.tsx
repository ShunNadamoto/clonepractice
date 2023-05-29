import { NextPage } from 'next';
import { useState } from 'react';

const Study10: NextPage = () => {
  const [selectedFoodList, setSelectedFoodList] = useState<string[]>([]);
  const foodList = [
    { value: '1', label: '焼肉' },
    { value: '2', label: '寿司' },
    { value: '3', label: 'お好み焼き' },
  ];
  return (
    <div>
      <div>入力フォーム、チェックボックス練習</div>

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
    </div>
  );
};

export default Study10;
