import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  imageUrl: string;
  text1: string;
  text2: string;
};

export const MeritCard: FC<Props> = ({ imageUrl, text1, text2 }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} className={styles.container__img} />
      <div className={styles.container__text1}>{text1}</div>
      <div className={styles.container__text2}>{text2}</div>
    </div>
  );
};
