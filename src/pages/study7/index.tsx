import { NextPage } from 'next';
import { useState } from 'react';

const Study7: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telNo, setTelNo] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [note, setNote] = useState('');
  const [ageCheckBox, setAgeCheckBox] = useState<string[]>([]);

  const [selectedWorkingStyle, setSelectedWorkingStyle] = useState('employee');
  const workingStyleList = [
    { value: 'employee', label: '会社員' },
    { value: 'executive', label: '会社役員' },
    { value: 'selfEmployed', label: '自営業' },
    { value: 'free', label: '無職' },
  ];
  const cityList = [
    { value: '1', label: '岡山市' },
    { value: '2', label: '倉敷市' },
    { value: '3', label: '玉野市' },
    { value: '4', label: 'その他' },
  ];
  //   if (name === 'あああ') {
  //     return null;
  //   }
  //   if (name.length > 4) {
  //     console.log('あああ');
  //   } else {
  //     console.log('aaaaa');
  //   }

  //   if (name.length < 5) {
  //     console.log('4文字以下です。');
  //   } else if (name.length <= 10 && name.length >= 5) {
  //     if (name === 'あああああああ') {
  //       console.log('ハズレ');
  //     }
  //     console.log('5文字以上10文字以下です。');
  //   } else {
  //     console.log('11文字以上です。');
  //   }

  if (telNo.length === 0) {
    console.log('入力必須です。');
  } else if (telNo.length === 10) {
    console.log('市外局番が入力されています');
  } else if (telNo.length === 11) {
    console.log('携帯電話番号が入力されています。');
  } else {
    console.log('不正な値です。');
  }

  const ageList = [
    { value: '10代', label: '10代' },
    { value: '20代', label: '20代' },
    { value: '30代', label: '30代' },
    { value: '40代', label: '40代' },
  ];
  return (
    <div>
      <div>入力フォーム、チェックボックス練習</div>
      <br></br>

      <div>名前入力欄</div>

      <input
        style={{ lineHeight: '30px' }}
        type='text'
        value={name}
        placeholder='名前を入力して下さい'
        onChange={(event) => setName(event.target.value)}
      />
      {name.length === 0 && <div>入力は必須です。</div>}
      <br></br>
      <div>電話番号入力欄</div>
      <input
        style={{ lineHeight: '25px', width: '200px' }}
        type='text'
        value={telNo}
        placeholder='電話番号を入力して下さい'
        onChange={(event) => setTelNo(event.target.value)}
      />
      {!/[0-9]+$/.test(telNo) && <div>半角数字で入力して下さい。</div>}
      {telNo.length !== 11 && <div>電話番号は11桁で入力して下さい。</div>}
      <br></br>

      <div>メールアドレス入力欄</div>
      <input
        style={{ marginBottom: '30px', width: '500px', lineHeight: '30px' }}
        type='text'
        value={email}
        placeholder='メールアドレスを入力して下さい。（例）sample@yahoo.co.jp'
        onChange={(event) => setEmail(event.target.value)}
      />
      {!/[\w\d_-]+@[\w\d_-]+\.[\w\d._-]+/.test(email) && '入力形式が正しくありません。'}

      <div>住んでいる地域</div>
      {cityList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectCity === elem.value}
            onChange={(event) => setSelectCity(event.target.value)}
          />
          {elem.label}
        </label>
      ))}

      <div>備考欄</div>
      <textarea
        style={{ width: '500px', lineHeight: '60px' }}
        id='textarea'
        value={note}
        placeholder='何かあれば入力して下さい。'
        onChange={(event) => setNote(event.target.value)}
      />

      <br></br>
      <div>年齢の選択</div>

      {ageList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={ageCheckBox.includes(elem.value)}
            onChange={(event) => {
              let newSelectAgeCheckBox: string[];
              if (event.target.checked) {
                if (ageCheckBox.length === 1) {
                  return;
                }
                newSelectAgeCheckBox = [...ageCheckBox, event.target.value];
              } else {
                newSelectAgeCheckBox = ageCheckBox.filter(
                  (filterElem) => filterElem !== event.target.value,
                );
              }
              setAgeCheckBox(newSelectAgeCheckBox);
            }}
          />
          {elem.value}
        </label>
      ))}
      <br></br>
      <div style={{ marginBottom: '30px' }}>
        職業選択
        <select
          value={selectedWorkingStyle}
          onChange={(event) => setSelectedWorkingStyle(event.target.value)}
        >
          {workingStyleList.map((elem) => (
            <option key={elem.value}>{elem.label}</option>
          ))}
        </select>
      </div>

      {/* <label>
        <input
          type='checkbox'
          value='10〜20代'
          checked={ageCheckBox.includes('10〜20代')}
          onChange={(event) => {
            let newSelectAgeCheckBox: string[];
            if (event.target.checked) {
              newSelectAgeCheckBox = [...ageCheckBox, event.target.value];
            } else {
              newSelectAgeCheckBox = ageCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setAgeCheckBox(newSelectAgeCheckBox);
          }}
        />
        10〜20代
      </label>

      <label>
        <input
          type='checkbox'
          value='20〜30代'
          checked={ageCheckBox.includes('20〜30代')}
          onChange={(event) => {
            let newSelectAgeCheckBox: string[];
            if (event.target.checked) {
              newSelectAgeCheckBox = [...ageCheckBox, event.target.value];
            } else {
              newSelectAgeCheckBox = ageCheckBox.filter(
                (filterElem) => filterElem !== event.target.value,
              );
            }
            setAgeCheckBox(newSelectAgeCheckBox);
          }}
        />
        20〜30代
      </label> */}
    </div>
  );
};
export default Study7;
