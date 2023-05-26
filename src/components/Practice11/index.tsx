import { FC } from 'react';

type Props = {
  name: string;
  age: number;
  sex: string;
};

export const Practice11: FC<Props> = ({ name, age, sex }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{sex}</div>
    </div>
  );
};
