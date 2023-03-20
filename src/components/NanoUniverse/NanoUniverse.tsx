import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  imgUrl: string;
  itemName: string;
  price: string;
  isDisplayedNewTag: boolean;
};

export const NanoUniverse: FC<Props> = ({ imgUrl, itemName, price, isDisplayedNewTag }) => (
  <div className={styles.container}>
    <img className={styles.container__img} src={imgUrl} />
    <div className={styles.container__likeTag}>
      <div className={styles.container__likeTag__circle}>
        <div className={styles.container__likeTag__circle__heart}></div>
      </div>
    </div>
    <div className={styles.container__section}>LB. 03 Section</div>
    <div className={styles.container__item}>{itemName}</div>
    <div className={styles.container__price}>{price}</div>
    {isDisplayedNewTag && <div className={styles.container__newTag}>[新入荷・予約商品]</div>}
  </div>
);
