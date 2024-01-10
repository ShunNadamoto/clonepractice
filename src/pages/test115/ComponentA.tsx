import { FC } from 'react';
import { ComponentB } from './ComponentB';

export const ComponentA: FC = () => {
  return (
    <div>
      AAA
      <ComponentB />
    </div>
  );
};
