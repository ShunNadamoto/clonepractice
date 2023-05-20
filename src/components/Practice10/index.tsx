import { FC } from 'react';

interface Props {
  hat: string;
  shirt: string;
  pants: string;
}

export const Practice10: FC<Props> = ({ hat, shirt, pants }) => (
  <div>
    <div>{hat}</div>
    <div>{shirt}</div>
    <div>{pants}</div>
  </div>
);
