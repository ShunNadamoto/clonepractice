import { FC } from 'react';

interface Props {
  name: string;
  age: number;
  sex: string;
}

export const Practice: FC<Props> = ({ name, age, sex }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{sex}</div>
    </div>
  );
};
