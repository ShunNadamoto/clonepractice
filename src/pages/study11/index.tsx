import { NextPage } from 'next';
import { useState } from 'react';

const Study11: NextPage = () => {
  const [selectedHobbyList, setSelectedHobbyList] = useState<string[]>([]);
  const hobbyList = [
    { value: '1', label: '料理' },
    { value: '2', label: '英会話' },
    { value: '3', label: '水泳' },
    { value: '4', label: 'ジム' },
    { value: '5', label: 'スパ・温泉' },
  ];
  return (
    <>
      <div>チェックボックス練習</div>
      <div>趣味を選択して下さい</div>
      <div style={{ display: 'flex' }}>
        {hobbyList.map((elem) => (
          <label style={{ display: 'flex' }} key={elem.value}>
            <input
              type='checkbox'
              value={elem.value}
              checked={selectedHobbyList.includes(elem.value)}
              onChange={(event) => {
                let newSelectedHobbyList: string[];
                if (event.target.checked) {
                  if (selectedHobbyList.length === 2) return;
                  newSelectedHobbyList = [...selectedHobbyList, event.target.value];
                } else {
                  newSelectedHobbyList = selectedHobbyList.filter(
                    (elem) => elem !== event.target.value,
                  );
                }
                setSelectedHobbyList(newSelectedHobbyList);
              }}
            />
            <div>{elem.label}</div>
          </label>
        ))}
      </div>
      　
    </>
  );
};

export default Study11;
