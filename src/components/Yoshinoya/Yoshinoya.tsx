import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  tag1: string;
  tag2: string;
  imgUrl: string;
  menu: string;
  price1: string;
  price2: string;
};

export const Yoshinoya: FC<Props> = ({ tag1, tag2, imgUrl, menu, price1, price2 }) => (
  <div className={styles.content}>
    <div className={styles.content__tag1}>{tag1}</div>
    <div className={styles.content__tag2}>{tag2}</div>
    <img className={styles.content__img} src={imgUrl} />
    <div className={styles.content__menu}>{menu}</div>
    <div className={styles.content__price1}>{price1}</div>
    <div className={styles.content__price2}>{price2}</div>
  </div>
);
