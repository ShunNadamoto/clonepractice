import { FC } from 'react';

interface Props {
  name: string;
  age: number;
  sex: string;
}

export const Practice15: FC<Props> = ({ name, age, sex }) => (
  <div>
    <div>{name}</div>
    <div>{age}</div>
    <div>{sex}</div>
  </div>
);
