import { FC } from 'react';

type Props = {
  name: string;
  sex: string;
  age: number;
};

export const Test: FC<Props> = ({ name, sex, age }) => {
  return (
    <>
      <div>{name}</div>
      <div>{sex}</div>
      <div>{age}</div>
    </>
  );
};
