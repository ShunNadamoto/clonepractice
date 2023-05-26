import { FC } from 'react';

type Props = {
  animal: string;
  plant: string;
  human: string;
};

export const Practice8: FC<Props> = ({ animal, plant, human }) => (
  <div>
    <div>{animal}</div>
    <div>{plant}</div>
    <div>{human}</div>
  </div>
);
