import { FC } from 'react';
import styles from './index.module.scss';

type Props = { name: string; age: number; isDisplayExcelent?: boolean };

export const Profile2: FC<Props> = ({ name, age, isDisplayExcelent = false }) => {
  return (
    <div className={styles.container}>
      <div>名前は:{name}</div>
      <div>年齢は：{age}歳です</div>
      {isDisplayExcelent && <div>優秀です！</div>}
    </div>
  );
};
