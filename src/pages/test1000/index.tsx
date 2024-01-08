import { NextPage } from 'next';
import { useState } from 'react';
import styles from './index.module.scss';
import { Profile1000 } from '@/components/Profile1000';

const Test1000: NextPage = () => {
  const testData = [
    {
      id: 1,
      category: '探偵事務所　調査員',
      companyName: '株式会社HAL',
      location: '東京都　新宿区',
      salary: '27万円~32万円',
      jobType: '正社員',
      tagList: ['aaa', 'iii', 'uuu']
    },
    {
      id: 2,
      category: '外資系のホテル',
      companyName: 'ホップイン楽株式会社',
      location: '東京都　台東区　浅草駅',
      salary: '22万円~28万円',
      jobType: '正社員',
      tagList: ['aeeeaa', 'oooo', 'kkkkku']
    },
  ];

  const featuresList = [
    { value: '', label: '交通費支給' },
    { value: '1', label: 'マスク' },
    { value: '2', label: '昇給あり' },
    { value: '3', label: '急募' },
  ];

  const [workingStyle, setWorkingStyle] = useState('employee');
  const [workingStyleCheckBox, setWorkingStyleCheckBox] = useState<string[]>([]);

  const workingStyleList = [
    { value: 'employee', label: '会社員' },
    { value: 'executive', label: '会社役員' },
    { value: 'free', label: '無職' },
  ];

  return (
    <div className={styles.container}>
      {testData.map((elem) => (
        <Profile1000
          key={elem.id}
          category={elem.category}
          companyName={elem.companyName}
          location={elem.location}
          salary={elem.salary}
          jobType={elem.jobType}
          tagList={elem.tagList}
        />
      ))}

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
                  console.log(event.target.checked);
                  console.log(event.target.value);
                  if (workingStyleCheckBox.length === 10) {
                    return;
                  }
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
    </div>
  );
};

export default Test1000;
