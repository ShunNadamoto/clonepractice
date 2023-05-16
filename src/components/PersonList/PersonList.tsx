import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

export const PersonList: FC<Props> = ({ name, age, note, registerDate }) => (
  <div className={styles.container}>
    <div className={styles.container__name}>{name}は</div>
    <div className={styles.container__age}>{age}歳で</div>
    <div className={styles.container__note}>{note}</div>
    <div className={styles.container__registerDate}>投稿日：{registerDate}</div>
  </div>
);
