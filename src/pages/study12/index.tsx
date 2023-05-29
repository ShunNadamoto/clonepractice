import axios from 'axios';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { DayStudy4 } from '@/components/DayStudy4';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const Study12: NextPage = () => {
  const person = (name: string, age: number) => {
    return `${name}さんは${age}歳です`;
  };
  console.log(person('田中', 34));
  const numberList = [1, 2, 5];
  const [num1, num2, num3] = numberList;
  console.log(num1, num2, num3);
  const week = [];
  week[3] = '木曜日';
  console.log(week[3]);

  const person2 = { name: '鈴木', sex: '男' };
  console.log(person2.name);
  const foods = [
    ['ラーメン', 'うどん', 'パスタ'],
    ['アンパン', '食パン', 'カレーパン'],
  ];
  console.log(foods[0][1]);
  console.log(foods[1][2]);

  const people = [
    { name: 'Masao', age: 20, address: 'Tokyo' },
    { name: 'Kazuo', age: 23, address: 'Osaka' },
    { name: 'Taro', age: 30, address: 'Fukuoka' },
  ];
  console.log(people[0].age);
  console.log(people[2].name);

  const drink_group = { juice: ['みかん', 'りんご', 'ぶどう'], alcol: ['ビール', '焼酎'] };
  console.log(drink_group.juice[1]);
  console.log(drink_group.alcol[1]);

  const bodySize = {
    Sato: { height: 1.6, weight: 55 },
    Maeda: { height: 1.7, weight: 60 },
  };
  console.log(bodySize.Maeda.height);
  const [refreshCount, setRefreshCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [humanList, setHumanList] = useState<Person[]>([]);

  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        console.log(response);
        setHumanList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  const [selectedSportList, setSelectedSportList] = useState<string[]>([]);
  const sportList = [
    { value: 'yakyuu', label: '野球' },
    { value: 'soccer', label: 'サッカー' },
    { value: 'basket', label: 'バスケットボール' },
    { value: 'volley', label: 'バレーボール' },
  ];
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const [email, setEmail] = useState('');
  const [selectAge, setSelectAge] = useState('');
  const ageList = [
    { value: '1', label: '10〜19歳' },
    { value: '2', label: '20〜34歳' },
    { value: '3', label: '35〜49歳' },
    { value: '4', label: '50〜70歳' },
  ];
  const [selectedArea, setSelectedArea] = useState('');
  const areaList = [
    { value: '1', label: '岡山市北区' },
    { value: '2', label: '岡山市中区' },
    { value: '3', label: '岡山市南区' },
    { value: '4', label: '岡山市東区' },
    { value: '5', label: '倉敷市' },
    { value: '6', label: '総社市' },
    { value: '7', label: 'その他' },
  ];

  return (
    <>
      <div>スポーツルール</div>
      <DayStudy4 name='サッカー' person='11人' rule='沢山点を取ったら勝ち！' />
      <div>チェックボックス練習</div>

      {sportList.map((elem) => (
        <label key={elem.value}>
          <input
            type='checkbox'
            value={elem.value}
            checked={selectedSportList.includes(elem.value)}
            onChange={(event) => {
              let newSelectedSportList: string[];
              if (event.target.checked) {
                newSelectedSportList = [...selectedSportList, event.target.value];
              } else {
                newSelectedSportList = selectedSportList.filter(
                  (elem) => elem !== event.target.value,
                );
              }
              setSelectedSportList(newSelectedSportList);
            }}
          />
          {elem.label}
        </label>
      ))}

      <div>入力フォーム周り</div>

      <div>名前入力</div>
      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい'
        onChange={(event) => setName(event.target.value)}
      />
      {name.length === 0 && <div>入力は必須です。</div>}

      <input
        style={{ width: '300px' }}
        type='text'
        value={telNo}
        placeholder='電話番号を入力して下さい。'
        onChange={(event) => setTelNo(event.target.value)}
      />
      {!/^(0{1}\d{9,10})$/.test(telNo) && <div>電話番号は10桁か11桁です</div>}

      <input
        style={{ width: '500px' }}
        type='text'
        value={email}
        placeholder='メールアドレスを入力して下さい。 sample@yahoo.co.jp'
        onChange={(event) => setEmail(event.target.value)}
      />
      <div>年齢を選択</div>

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

      <div>地域選択</div>

      <select value={selectedArea} onChange={(event) => setSelectedArea(event.target.value)}>
        <option value='0'>未選択</option>
        {areaList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      <div>年齢選択（ラジオボタン）</div>

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

      <div>地域選択ラジオボタン</div>
      {areaList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={selectedArea === elem.value}
            onChange={(event) => setSelectedArea(event.target.value)}
          />
          {elem.label}
        </label>
      ))}

      <div>年齢選択セレクトボックス</div>
      <select value={selectAge} onChange={(event) => setSelectAge(event.target.value)}>
        {ageList.map((elem) => (
          <option key={elem.value}>{elem.label}</option>
        ))}
      </select>

      <div>API通信後リスト表示</div>
      {humanList
        .filter((elem) => elem.age == 21)
        .map((elem, index) => (
          <div key={index}>
            <div>{elem.name}</div>
          </div>
        ))}
    </>
  );
};

export default Study12;
