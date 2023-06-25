import { FC } from 'react';

interface Props {
  image: string;
  color: string;
  date: number;
}

export const Practice7: FC<Props> = ({ image, color, date }) => (
  <div>
    <div>{image}</div>
    <div>{color}</div>
    <div>{date}</div>
  </div>
);
