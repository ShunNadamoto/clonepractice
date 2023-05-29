import { FC } from 'react';

interface Props {
  name: string;
  person: string;
  rule: string;
}

export const DayStudy4: FC<Props> = ({ name, person, rule }) => {
  return (
    <>
      <div>{name}</div>
      <div>{person}</div>
      <div>{rule}</div>
    </>
  );
};
