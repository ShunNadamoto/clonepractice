import cn from 'classnames';
import { ChangeEvent, FC } from 'react';
import styles from './index.module.scss';

type Props = {
  id: string;
  value: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  labelName: string;
  className?: string;
};

export const RadioButton3: FC<Props> = ({ id, value, checked, onChange, labelName, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <input id={id} type='radio' value={value} checked={checked} onChange={onChange}></input>
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};
