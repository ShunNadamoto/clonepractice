import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  imageUrl: string;
  altName: string;
  text1: string;
  text2: string;
  text3: string;
};

export const IntroductionCard: FC<Props> = ({ imageUrl, altName, text1, text2, text3 }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={altName} className={styles.container__img} />
      <div className={styles.container__text1}>{text1}</div>
      <div className={styles.container__text2}>{text2}</div>
      <div className={styles.container__text3}>{text3}</div>
    </div>
  );
};
