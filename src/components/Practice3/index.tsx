import { FC } from 'react';

interface Props {
  name: string;
  color: string;
  price: number;
}

export const Practice3: FC<Props> = ({ name, color, price }) => (
  <div>
    <div>{name}</div>
    <div>{color}</div>
    <div>{price}</div>
  </div>
);
