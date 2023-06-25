import { FC } from 'react';

interface Props {
  ball: string;
  time: number;
  goal: string;
}

export const Practice9: FC<Props> = ({ ball, time, goal }) => {
  return (
    <div>
      <div>{ball}</div>
      <div>{time}</div>
      <div>{goal}</div>
    </div>
  );
};
