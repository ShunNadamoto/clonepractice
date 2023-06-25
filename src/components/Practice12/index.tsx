import { FC } from 'react';

interface Props {
  name: string;
  color: string;
  member: number;
}

export const Practice12: FC<Props> = ({ name, color, member }) => {
  return (
    <>
      <div>{name}</div>
      <div>{color}</div>
      <div>{member}</div>
    </>
  );
};
