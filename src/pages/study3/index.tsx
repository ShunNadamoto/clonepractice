import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

<Head>タイトル</Head>;

const Study3: NextPage = () => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [tel, setTel] = useState('');
  // console.log('name:', name);
  console.log('note:', note);
  // console.log('tel:', tel);
  const fruitsList = [
    { value: '', label: '特にnone' },
    { value: '1', label: 'みかん' },
    { value: '2', label: 'りんご' },
    { value: '3', label: 'ばなな' },
  ];

  const petList = [
    { value: '', label: '特になし' },
    { value: '1', label: '犬' },
    { value: '2', label: '猫' },
    { value: '3', label: '鳥' },
  ];
  const [selectedPet, setSelectedPet] = useState('');

  const [selectedFruit, setSelectedFruit] = useState('');
  console.log('selectedFruit:', selectedFruit);
  const foodsList = [
    { value: '1', label: 'ご飯' },
    { value: '2', label: 'パン' },
    { value: '3', label: 'お肉' },
    { value: '4', label: 'お魚' },
  ];
  const [selectedFood, setSelectedFood] = useState('');
  console.log(selectedPet);

  const [workingStyle, setWorkingStyle] = useState('employee');
  const [workingStyleCheckBox, setWorkingStyleCheckBox] = useState<string[]>([]);
  // console.log('workingStyle:', workingStyle);
  // console.log('workingStyleCheckBox:', workingStyleCheckBox);

  const workingStyleList = [
    { value: 'employee', label: '会社員' },
    { value: 'executive', label: '会社役員' },
    { value: 'free', label: '無職' },
  ];

  const testArray = [
    { value: '', label: '特になし' },
    { value: '1', label: 'みかん' },
    { value: '2', label: 'りんご' },
    { value: '3', label: 'ばなな' },
  ];

  return (
    <>
      <div>入力フォーム、チェックボックス練習</div>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type='text'
          value={name}
          placeholder='名前'
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          id='textArea'
          value={note}
          placeholder='備考欄'
          onChange={(event) => setNote(event.target.value)}
        />
        <input
          type='text'
          value={tel}
          placeholder='電話番号'
          onChange={(event) => setTel(event.target.value)}
        />
      </form>
      <label>
        <select value={selectedPet} onChange={(event) => setSelectedPet(event.target.value)}>
          <option value=''>特になし</option>
          <option value='1'>犬</option>
          <option value='2'>猫</option>
          <option value='3'>鳥</option>
        </select>

        <select value={selectedPet} onChange={(event) => setSelectedPet(event.target.value)}>
          {petList.map((elem) => (
            <option key={elem.value} value={elem.value}>
              {elem.label}
            </option>
          ))}
        </select>

        <select value={selectedFruit} onChange={(event) => setSelectedFruit(event.target.value)}>
          {testArray.map((elem) => (
            <option key={elem.value} value={elem.value}>
              {elem.label}
            </option>
          ))}
          {/* <option value=''>特になし</option>
          <option value='1'>みかん</option>
          <option value='2'>りんご</option>
          <option value='3'>ばなな</option> */}
        </select>

        <select value={selectedFruit} onChange={(event) => setSelectedFruit(event.target.value)}>
          <option value=''>特にない</option>
          {fruitsList.map((elem) => (
            <option key={elem.value} value={elem.value}>
              {elem.label}
            </option>
          ))}
        </select>
      </label>
      <div>{`好きなフルーツは${
        fruitsList.filter((elem) => elem.value === selectedFruit)[0].label
      }`}</div>
      <label>
        <select value={selectedFood} onChange={(event) => setSelectedFood(event.target.value)}>
          <option value=''>未選択</option>
          <option value='1'>米</option>
          <option value='2'>パン</option>
          <option value='3'>お肉</option>
          <option value='4'>お魚</option>
        </select>
      </label>
      aaaaaaaa
      {workingStyleList.map((elem) => (
        <label key={elem.value}>
          <input
            type='radio'
            value={elem.value}
            checked={workingStyle === elem.value}
            onChange={() => setWorkingStyle(elem.value)}
          />
          {elem.label}
        </label>
      ))}
      {/* const workingStyleList = [
    { value: 'employee', label: '会社員' },
    { value: 'executive', label: '会社役員' },
    { value: 'free', label: '無職' },
  ]; */}
      <div>
        <input
          type='radio'
          value='employee'
          checked={workingStyle === 'employee'}
          onChange={(event) => setWorkingStyle(event.target.value)}
          id='employee'
        />
        会社員
      </div>
      <label htmlFor='employee'>ここをクリックしたら会社員をクリックしたことになる</label>
      <div>
        <input
          type='radio'
          value='executive'
          checked={workingStyle === 'executive'}
          onChange={(event) => setWorkingStyle(event.target.value)}
          id='executive'
        />
        会社役員
      </div>
      <label htmlFor='executive'>ここをクリックしたら会社役員をクリックしたことになる</label>
      <div>
        <input
          type='radio'
          value='free'
          checked={workingStyle === 'free'}
          onChange={(event) => setWorkingStyle(event.target.value)}
          id='free'
        />
        無職
      </div>
      <label htmlFor='free'>ここをクリックしたら無職をクリックしたことになる</label>
      <div>
        --------checkbox---------
        {workingStyleList.map((elem) => (
          <label key={elem.value}>
            <input
              type='checkbox'
              value={elem.value}
              checked={workingStyleCheckBox.includes(elem.value)}
              onChange={(event) => {
                let newWorkingStyleCheckBox: string[];
                if (event.target.checked) {
                  console.log(event.target.checked);
                  console.log(event.target.value);
                  // if (workingStyleCheckBox.length === 2) {
                  //   return;
                  // }
                  newWorkingStyleCheckBox = [...workingStyleCheckBox, event.target.value];
                } else {
                  newWorkingStyleCheckBox = workingStyleCheckBox.filter(
                    (filterElem) => filterElem !== event.target.value,
                  );
                }
                setWorkingStyleCheckBox(newWorkingStyleCheckBox);
              }}
            />
            {elem.label}
          </label>
        ))}
      </div>
    </>
  );
};

export default Study3;
