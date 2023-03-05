import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  imgUrl: string;
  ranking: string;
  title: string;
};

export const Book: FC<Props> = ({ imgUrl, ranking, title }) => (
  <div className={styles.container}>
    <img className={styles.container__img} src={imgUrl} />
    <div className={styles.container__ranking}>{ranking}</div>
    <div className={styles.container__title}>{title}</div>
  </div>
);
