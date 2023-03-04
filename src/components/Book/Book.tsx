import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  bookImgUrl: string;
  ranking: string;
  title: string;
};

export const Book: FC<Props> = ({ bookImgUrl, ranking, title }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={bookImgUrl} />
      </div>
      <div className={styles.container__ranking}>{ranking}</div>
      <div className={styles.container__title}>{title}</div>
    </div>
  );
};
