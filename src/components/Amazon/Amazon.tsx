import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  itemImgUrl: string;
  item: string;
  review: string;
  sale: string;
  price: string;
  descripution: string;
};
export const Amazon: FC<Props> = ({ itemImgUrl, item, review, sale, price, descripution }) => (
  <div className={styles.container}>
    <img src={itemImgUrl} width='300' height='350' alt='商品画像' />
    <div className={styles.container__item}>{item}</div>
    <div className={styles.container__review}>{review}</div>
    <div className={styles.container__sale}>{sale}</div>
    <div className={styles.container__price}>{price}</div>
    <div className={styles.container__descripution}>{descripution}</div>
  </div>
);
