import { NextPage } from 'next';
import { useState } from 'react';
import { Input } from '../../components/Input';

const Test16: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telNo, setTelNo] = useState('');
  const [selectArea, setSelectArea] = useState('');
  const [hobbyCheckBox, setHobbyCheckBox] = useState<string[]>([]);

  const areaList = [
    { value: '1', label: '関東地方' },
    { value: '2', label: '東北地方' },
    { value: '3', label: '中部地方' },
    { value: '4', label: '関西地方' },
  ];

  if (telNo.length === 0) {
    console.log('入力必須');
  } else if (telNo.length === 10) {
    console.log('市外局番です');
  } else if (telNo.length === 11) {
    console.log('携帯電話番号です');
  } else {
    console.log('不正な値');
  }

  const hobbyList = [
    { value: '1', label: 'ジム' },
    { value: '2', label: '映画鑑賞' },
    { value: '3', label: '旅行' },
    { value: '4', label: '英会話' },
    { value: '5', label: 'Youtube' },
  ];

  const ageList = [
    { value: '0', label: '未選択' },
    { value: '1', label: '10代' },
    { value: '2', label: '20代' },
    { value: '3', label: '30代' },
    { value: '4', label: '40代' },
  ];
  const [selectAge, setSelectAge] = useState('0');

  return (
    <div>
      <div>入力フォーム、チェックボックス等</div>

      <div>名前入力</div>

      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい。'
        onChange={(event) => setName(event.target.value)}
      />
      {name.length === 0 && <div>入力は必須です。</div>}

      <div>電話番号入力欄</div>
      <input
        type='text'
        value={telNo}
        placeholder='電話番号を入力して下さい。'
        onChange={(event) => setTelNo(event.target.value)}
      />
      {!/[0-9]+$/.test(telNo) && <div>半角数字で入力して下さい</div>}
      {telNo.length !== 11 && <div>電話番号は11桁で入力して下さい。</div>}

      <div>メールアドレス入力欄</div>
      <input
        type='text'
        value={email}
        placeholder='メールアドレスを入力して下さい。'
        onChange={(event) => setEmail(event.target.value)}
      />

      <div>住んでいるところ</div>
      {areaList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectArea === elem.value}
            onChange={(event) => setSelectArea(event.target.value)}
          />
          {elem.label}
        </label>
      ))}

      <div>興味のあるものを選んでください</div>

      {hobbyList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={hobbyCheckBox.includes(elem.value)}
            onChange={(event) => {
              let newSelectHobbyCheckBox: string[];
              if (event.target.checked) {
                // if (hobbyCheckBox.length === 1) {
                //   return;
                // }
                newSelectHobbyCheckBox = [...hobbyCheckBox, event.target.value];
              } else {
                newSelectHobbyCheckBox = hobbyCheckBox.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              setHobbyCheckBox(newSelectHobbyCheckBox);
            }}
          />
          {elem.label}
        </label>
      ))}

      <div>年代選択</div>

      <select value={selectAge} onChange={(event) => setSelectAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>
      <Input label='ああああ' />
    </div>
  );
};

export default Test16;
