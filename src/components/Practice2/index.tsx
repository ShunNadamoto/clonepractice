import { FC } from 'react';

type Props = {
  name: string;
  color: string;
};

export const Practice2: FC<Props> = ({ name, color }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{color}</div>
    </div>
  );
};
