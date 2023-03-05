import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  tag1: string;
  tag2: string;
  imgUrl: string;
  menu: string;
  price: string;
};

export const Yoshinoya: FC<Props> = ({ tag1, tag2, imgUrl, menu, price }) => (
  <div className={styles.content}>
    <div className={styles.content__tag1}>{tag1}</div>
    <div className={styles.content__tag2}>{tag2}</div>
    <img className={styles.content__imgurl} src={imgUrl} />
    <div className={styles.content__menu}>{menu}</div>
    <div className={styles.content__price}>{price}</div>
  </div>
);
