import { FC } from 'react';

interface Props {
  item: string;
  itemImageUrl: string;
  tag: string[];
}

export const Practice6: FC<Props> = ({ item, itemImageUrl, tag }) => {
  return (
    <div>
      <div>{item}</div>
      <div>{itemImageUrl}</div>
      <div>{tag}</div>
    </div>
  );
};
