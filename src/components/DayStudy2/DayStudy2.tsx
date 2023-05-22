import axios from 'axios';
import { FC, ReactHTML, SetStateAction, useState } from 'react';

export const DayStudy2 = () => {
  const [name, setName] = useState('');
  console.log('name:', name);

  const areaList = [
    { value: '1', label: '東北地方' },
    { value: '2', label: '関東地方' },
    { value: '3', label: '中部地方' },
    { value: '4', label: '関西地方' },
    { value: '5', label: '中国地方' },
  ];
  const prefectureList = [
    { value: '', label: '不定' },
    { value: '1', label: 'Tokyo' },
    { value: '2', label: 'Osaka' },
    { value: '3', label: 'Hiroshima' },
  ];
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  console.log('selectedArea:', selectedArea);

  const [workingStyle, setWorkingStyle] = useState('employee');
  const [workingStyleCheckBox, setWorkingStyleCheckBox] = useState<string[]>([]);
  console.log('workingStyle:', workingStyle);
  console.log('workingStyleCheckBox:', workingStyleCheckBox);

  const workingStyleList = [
    { value: 'employee', label: '会社員' },
    { value: 'executive', label: '会社役員' },
    { value: 'free', label: '無職' },
  ];

  const experiencedSportsList = [
    { value: 'baceball', label: '野球' },
    { value: 'soccer', label: 'サッカー' },
    { value: 'basketball', label: 'バスケットボール' },
  ];
  const [experiencedSportsCheckBox, setExperiencedSportsCheckBox] = useState<string[]>([]);

  return (
    <>
      <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>入力フォーム、State系練習</div>

      <div>名前入力フォーム</div>
      <input
        type='text'
        value={name}
        placeholder='名前を入力して下さい'
        onChange={(event) => setName(event.target.value)}
      />

      <div>住んでいる地域を選択</div>

      <select value={selectedArea} onChange={(event) => setSelectedArea(event.target.value)}>
        <option value=''>未選択</option>
        {/* <option value='1'>東北地方</option>
        <option value='2'>関東地方</option>
        <option value='3'>中部地方</option>
        <option value='4'>関西地方</option>
        <option value='5'>中国地方</option> */}
        {areaList.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>

      <label>
        <select
          value={selectedPrefecture}
          onChange={(event) => setSelectedPrefecture(event.target.value)}
        >
          {prefectureList.map((elem) => {
            return (
              <option key={elem.value} value={elem.value}>
                {elem.label}
              </option>
            );
          })}
        </select>
      </label>

      <div>{`住んでいるところは${
        prefectureList.filter((elem) => elem.value === selectedPrefecture)[0].label
      }です。`}</div>

      <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
        <option value=''>未選択</option>
        {areaList.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>

      <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
        <option value=''>未選択</option>
        <option value='1'>東北地方</option>
        <option value='2'>関東地方</option>
        <option value='3'>中部地方</option>
        <option value='4'>関西地方</option>
        <option value='5'>中国地方</option>
      </select>

      <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
        <option value=''>未選択</option>
        {areaList.map((elem) => {
          return (
            <option key={elem.label} value={elem.value}>
              {elem.label}
            </option>
          );
        })}
      </select>

      <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
        <option value=''>未選択</option>
        <option value='1'>東北地方</option>
        <option value='2'>関東地方</option>
        <option value='3'>中部地方</option>
        <option value='4'>関西地方</option>
        <option value='5'>中国地方</option>
      </select>

      <label>
        <input
          type='radio'
          value='employee'
          checked={workingStyle === 'employee'}
          onChange={(e) => setWorkingStyle(e.target.value)}
        />
        会社員
      </label>

      <label>
        <input
          type='radio'
          value='executive'
          checked={workingStyle === 'executive'}
          onChange={(e) => setWorkingStyle(e.target.value)}
        />
        会社役員
      </label>

      <label>
        <input
          type='radio'
          value='free'
          checked={workingStyle === 'free'}
          onChange={(e) => setWorkingStyle(e.target.value)}
        />
        無職
      </label>

      <label>
        <input
          type='checkBox'
          value='baseball'
          checked={experiencedSportsCheckBox.includes('baseball')}
          onChange={(event) => {
            console.log(event.target.value);
            let newExperiencedSportsCheckBox: string[];
            if (event.target.checked) {
              newExperiencedSportsCheckBox = [...experiencedSportsCheckBox, event.target.value];
            } else {
              newExperiencedSportsCheckBox = experiencedSportsCheckBox.filter(
                (elem) => elem !== event.target.value,
              );
            }
            setExperiencedSportsCheckBox(newExperiencedSportsCheckBox);
          }}
        />
        野球
      </label>

      <label>
        <input
          type='checkBox'
          value='soccer'
          checked={experiencedSportsCheckBox.includes('soccer')}
          onChange={(event) => {
            console.log(event.target.value);
            let newExperiencedSportsCheckBox: string[];
            if (event.target.checked) {
              newExperiencedSportsCheckBox = [...experiencedSportsCheckBox, event.target.value];
            } else {
              newExperiencedSportsCheckBox = experiencedSportsCheckBox.filter(
                (elem) => elem !== event.target.value,
              );
            }
            setExperiencedSportsCheckBox(newExperiencedSportsCheckBox);
          }}
        />
        サッカー
      </label>

      <label>
        <input
          type='checkBox'
          value='basketball'
          checked={experiencedSportsCheckBox.includes('basketball')}
          onChange={(event) => {
            console.log(event.target.value);
            let newExperiencedSportsCheckBox: string[];
            if (event.target.checked) {
              newExperiencedSportsCheckBox = [...experiencedSportsCheckBox, event.target.value];
            } else {
              newExperiencedSportsCheckBox = experiencedSportsCheckBox.filter(
                (elem) => elem !== event.target.value,
              );
            }
            setExperiencedSportsCheckBox(newExperiencedSportsCheckBox);
          }}
        />
        バスケットボール
      </label>

      <div>
        {experiencedSportsList.map((elem) => (
          <label key={elem.value}>
            <input
              type='checkbox'
              value={elem.value}
              checked={experiencedSportsCheckBox.includes(elem.value)}
              onChange={(event) => {
                let newExperiencedSportsCheckBox: string[];
                console.log(event.target.checked);
                if (event.target.checked) {
                  newExperiencedSportsCheckBox = [...experiencedSportsCheckBox, event.target.value];
                } else {
                  newExperiencedSportsCheckBox = experiencedSportsCheckBox.filter(
                    (filterElem) => filterElem !== event.target.value,
                  );
                }
                setExperiencedSportsCheckBox(newExperiencedSportsCheckBox);
              }}
            />
            {elem.label}
          </label>
        ))}
      </div>

      <div>
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
      </div>

      <div>
        {workingStyleList.map((elem) => (
          <label key={elem.value}>
            <input
              type='checkbox'
              value={elem.value}
              checked={workingStyleCheckBox.includes(elem.value)}
              onChange={(event) => {
                let newWorkingStyleCheckBox: string[];
                if (event.target.checked) {
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
