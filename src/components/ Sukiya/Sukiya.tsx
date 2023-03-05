import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  icon1: string;
  icon2: string;
  icon3: string;
  menu: string;
  img: string;
};

export const Sukiya: FC<Props> = ({ icon1, icon2, icon3, menu, img }) => (
  <div className={styles.content}>
    <img className={styles.content__icon1} />
    <img className={styles.content__icon2} />
    <img className={styles.content__icon3} />
    <div className={styles.content__menu} />
    <div className={styles.content__img} />
  </div>
);
<div className={styles.content}></div>;
