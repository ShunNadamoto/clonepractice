import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  imgUrl: string;
  logo: string;
  sale: string;
  descripution: string;
};
export const Amazon: FC<Props> = ({ imgUrl, logo, sale, descripution }) => (
  <div className={styles.container}>
    <img src={imgUrl} />
    <div className={styles.container__logo}>{logo}</div>
    <div className={styles.container__sale}>{sale}</div>
    <div className={styles.container__descripution}>{descripution}</div>
  </div>
);
