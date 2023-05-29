import { NextPage } from 'next';
import { useState } from 'react';

const Study9: NextPage = () => {
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const [email, setEmail] = useState('');
  const [selectAddress, setSelectAddress] = useState('');
  const [note, setNote] = useState('');
  const [selectCheckBox, setSelectCheckBox] = useState<string[]>([]);
  const cityList = [
    { value: '1', label: '岡山市' },
    { value: '2', label: '倉敷市' },
    { value: '3', label: '玉野市' },
    { value: '4', label: '都窪郡' },
  ];
  const [selectAge, setSelectAge] = useState('');
  const ageList = [
    { value: '0', label: '未選択' },
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
    { value: '4', label: '40代' },
    { value: '5', label: '50代' },
    { value: '6', label: '60代' },
  ];
  const foodList = [
    { value: '1', label: '焼肉' },
    { value: '2', label: 'お寿司' },
    { value: '3', label: '天ぷら' },
    { value: '4', label: 'カレー' },
    { value: '5', label: '牛丼' },
    { value: '6', label: 'ラーメン' },
  ];
  return (
    <div>
      <div>名前入力欄</div>

      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい'
        onChange={(event) => setName(event.target.value)}
      />

      <div>電話番号入力欄</div>

      <input
        style={{ width: '250px' }}
        type='text'
        value={telNo}
        placeholder='電話番号を入力して下さい。'
        onChange={(event) => setTelNo(event.target.value)}
      />
      {telNo.length === 0 && <div>入力は必須です。</div>}
      {telNo.length !== 11 && <div>電話番号は11桁で入力して下さい。</div>}
      {!/[0-9]+$/.test(telNo) && <div>半角数字で入力して下さい。</div>}

      <div>メールアドレス入力欄</div>
      <input
        style={{ width: '450px' }}
        type='text'
        value={email}
        placeholder='メールアドレスを入力して下さい。例）sample@gmail.com'
        onChange={(event) => setEmail(event.target.value)}
      />
      {!/[\w\d_-]+@[\w\d_-]+\.[\w\d._-]+/.test(email) && '入力形式が正しくありません。'}

      <div>住所選択欄</div>

      {cityList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectAddress === elem.value}
            onChange={(event) => setSelectAddress(event.target.value)}
          ></input>
          {elem.label}
        </label>
      ))}

      <div>備考入力欄</div>

      <textarea
        style={{ width: '300px' }}
        id='text'
        value={note}
        placeholder='何かあれば入力して下さい。'
        onChange={(event) => setNote(event.target.value)}
      />

      <div>年代選択</div>

      <select value={selectAge} onChange={(event) => setSelectAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}

        {/* <option value='1'>10代</option>
        <option value='2'>20代</option>
        <option value='3'>30代</option>
        <option value='4'>40代</option>
        <option value='5'>50代</option>
        <option value='6'>60代</option> */}
      </select>

      <br></br>
      <div>好きな食べ物</div>
      {foodList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectCheckBox.includes(elem.value)}
            onChange={(event) => {
              let newSelectCheckBox: string[];
              if (event.target.checked) {
                newSelectCheckBox = [...selectCheckBox, event.target.value];
              } else {
                newSelectCheckBox = selectCheckBox.filter(
                  (filterElem) => filterElem !== event.target.value,
                );
              }
              setSelectCheckBox(newSelectCheckBox);
            }}
          />
          {elem.label}
        </label>
      ))}
      {/* <label>
        <input
          type='checkbox'
          value='1'
          checked={selectCheckBox.includes('焼肉')}
          onChange={(event) => {
            let newSelectCheckBox: string[];
            if (event.target.checked) {
              newSelectCheckBox = [...selectCheckBox, event.target.value];
            } else {
              newSelectCheckBox = selectCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setSelectCheckBox(newSelectCheckBox);
          }}
        />
      </label> */}
    </div>
  );
};

export default Study9;
