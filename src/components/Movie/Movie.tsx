import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  movieImgUrl: string;
  ranking: string;
  title: string;
};

export const Movie: FC<Props> = ({ movieImgUrl, ranking, title }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={movieImgUrl} />
      </div>
      <div className={styles.container__ranking}>{ranking}</div>
      <div className={styles.container__title}>{title}</div>
    </div>
  );
};
