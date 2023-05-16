import { FC } from 'react';

type Human = {
  name: string;
  age: number;
};

type Props = {
  jobTitle: string;
  onClickTestButton: () => void;
  humanList: Human[];
};

const test = { name: 'aaa', age: 20 };

const person2 = { name: 'kkk', age: 34 };

export const IndeedTest: FC<Props> = ({ jobTitle, onClickTestButton, humanList }) => {
  return (
    <div>
      <div>{jobTitle}</div>
      <button onClick={onClickTestButton}>onClickTest</button>
      {humanList.map((elem, index) => (
        <div key={index}>
          <div>{elem.name}</div>
          <div>{elem.age}</div>
        </div>
      ))}
    </div>
  );
};
