import { FC } from 'react';

interface Props {
  name: string;
  type: string;
  company: string;
}

export const Practice4: FC<Props> = ({ name, type, company }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{type}</div>
      <div>{company}</div>
    </div>
  );
};
