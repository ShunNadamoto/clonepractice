import cn from 'classnames';
import { FC, ChangeEvent } from 'react';
import styles from './index.module.scss';

type Props = {
  id: string;
  value: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  labelName: string;
  className?: string;
};

export const CheckBox: FC<Props> = ({ id, value, checked, onChange, labelName, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <input id={id} type='checkbox' value={value} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};
