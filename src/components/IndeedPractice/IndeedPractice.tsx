import { FC } from 'react';

type Person = {
  name: string;
  age: number;
  gender: string;
};

type Foods = {
  rice: string;
  bread: string;
  noodle: string;
};

type Props = {
  jobTitle: string;
  onClickButton: () => void;
  personList: Person[];
  foodsList: Foods[];
};

export const IndeedPractice: FC<Props> = ({ jobTitle, onClickButton, personList, foodsList }) => {
  return (
    <div>
      <div>{jobTitle}</div>
      <button onClick={onClickButton}>onClickTest</button>
      {personList.map((elem, index) => (
        <div key={index}>
          <div>{`${elem.name}は`}</div>
          <div>{`${elem.age}歳`}</div>
          <div>{`${elem.gender}です。`}</div>
        </div>
      ))}
      {foodsList.map((elem, index) => (
        <div key={index}>
          <div>{elem.rice}</div>
          <div>{elem.bread}</div>
          <div>{elem.noodle}</div>
        </div>
      ))}
    </div>
  );
};
