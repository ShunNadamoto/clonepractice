import { FC } from 'react';

interface Props {
  name: string;
  tel: number;
  address: string;
}

export const Practice14: FC<Props> = ({ name, tel, address }) => (
  <div>
    <div>{name}</div>
    <div>{tel}</div>
    <div>{address}/</div>
  </div>
);
