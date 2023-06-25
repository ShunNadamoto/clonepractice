import { NextPage } from 'next';
import { useState } from 'react';

const Study5: NextPage = () => {
  const [tel, setTel] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [selectedSports, setSelectedSports] = useState('');
  const sportList = [
    { value: '1', label: '野球' },
    { value: '2', label: 'サッカー' },
  ];

  const [petCheckBox, setPetCheckBox] = useState<string[]>([]);
  const petList = [
    { value: 'dog', label: '犬' },
    { value: 'cat', label: '猫' },
    { value: 'bird', label: '鳥' },
  ];
  return (
    <div>
      <div>電話番号入力フォーム</div>
      <input
        type='text'
        value={tel}
        placeholder='電話番号は半角数字で入力して下さい。'
        onChange={(event) => {
          console.log(event.target.value);
          setTel(event.target.value);
        }}
      />
      {!/^[0-9]+$/.test(tel) && <div>半角数字で入力して下さい。</div>}

      <div>備考欄入力</div>

      <textarea id='textarea' value={note} onChange={(event) => setNote(event.target.value)} />
      {note.length === 0 && '入力は必須です。'}

      <div>カレンダー入力</div>
      <input type='date' value={date} onChange={(event) => setDate(event.target.value)} />

      <label>
        <select value={selectedSports} onChange={(event) => setSelectedSports(event.target.value)}>
          <option value=''>未選択</option>
          {sportList.map((elem) => (
            <option key={elem.value} value={elem.value}>
              {elem.label}
            </option>
          ))}
          {/* <option value='1'>野球</option>
          <option value='2'>サッカー</option> */}
        </select>
        好きなスポーツ
      </label>

      <div>飼っているペット</div>

      {petList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={petCheckBox.includes(elem.value)}
            onChange={(event) => {
              console.log(event.target.value);
              let newPetCheckBox: string[];
              if (event.target.checked) {
                newPetCheckBox = [...petCheckBox, event.target.value];
              } else {
                newPetCheckBox = petCheckBox.filter(
                  (filterElem) => filterElem !== event.target.value,
                );
              }
              setPetCheckBox(newPetCheckBox);
            }}
          />
          {elem.label}
        </label>
      ))}

      <label>
        <input
          type='checkbox'
          value='dog'
          checked={petCheckBox.includes('dog')}
          onChange={(event) => {
            console.log(event.target.value);
            let newPetCheckBox: string[];
            if (event.target.checked) {
              newPetCheckBox = [...petCheckBox, event.target.value];
            } else {
              newPetCheckBox = petCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setPetCheckBox(newPetCheckBox);
          }}
        />
        犬
      </label>
      <label>
        <input
          type='checkbox'
          value='cat'
          checked={petCheckBox.includes('cat')}
          onChange={(event) => {
            console.log(event.target.value);
            let newPetCheckBox: string[];
            if (event.target.checked) {
              newPetCheckBox = [...petCheckBox, event.target.value];
            } else {
              newPetCheckBox = petCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setPetCheckBox(newPetCheckBox);
          }}
        />
        猫
      </label>
      <label>
        <input
          type='checkbox'
          value='bird'
          checked={petCheckBox.includes('bird')}
          onChange={(event) => {
            console.log(event.target.value);
            let newPetCheckBox: string[];
            if (event.target.checked) {
              newPetCheckBox = [...petCheckBox, event.target.value];
            } else {
              newPetCheckBox = petCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setPetCheckBox(newPetCheckBox);
          }}
        />
        鳥
      </label>

      <label>
        <input
          type='checkBox'
          value='tropicalFish'
          checked={petCheckBox.includes('tropicalFish')}
          onChange={(event) => {
            let newPetCheckBox: string[];
            if (event.target.checked) {
              newPetCheckBox = [...petCheckBox, event.target.value];
            } else {
              newPetCheckBox = petCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setPetCheckBox(newPetCheckBox);
          }}
        />
        熱帯魚
      </label>
    </div>
  );
};

export default Study5;
