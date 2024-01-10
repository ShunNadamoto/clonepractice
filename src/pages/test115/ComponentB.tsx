import { FC } from 'react';
import { ComponentC } from './ComponentC';

export const ComponentB: FC = () => {
  return (
    <div>
      BBB
      <ComponentC />
    </div>
  );
};
