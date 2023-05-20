import { title } from 'process';
import { FC } from 'react';

type Props = {
  title: string;
  image: string;
  ranking: number;
};

export const Practice5: FC<Props> = ({ title, image, ranking }) => (
  <div>
    <div>{title}</div>
    <div>{image}</div>
    <div>{ranking}</div>
  </div>
);
