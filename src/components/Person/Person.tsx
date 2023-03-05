import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  personName: string;
  personAge: string;
};

export const Person: FC<Props> = ({ personName, personAge }) => (
  <div className={styles.container}>
    <div className={styles.container__name}>{personName}</div>
    <div className={styles.container__age}>{personAge}</div>
  </div>
);
