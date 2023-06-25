import { FC } from 'react';

type Props = {
  food: string;
  drink: string;
  desert: string;
};

export const Practice13: FC<Props> = ({ food, drink, desert }) => (
  <div>
    <div>{food}</div>
    <div>{drink}</div>
    <div>{desert}</div>
  </div>
);
