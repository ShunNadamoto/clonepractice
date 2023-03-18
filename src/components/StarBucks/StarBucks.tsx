import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  isDisplayLimitedTag: boolean;
  itemImgUrl: string;
  itemName: string;
  price: string;
};

export const StarBucks: FC<Props> = ({ isDisplayLimitedTag, itemImgUrl, itemName, price }) => (
  <div className={styles.container}>
    {isDisplayLimitedTag && (
      <div className={styles.container__limitedTag}>
        限定
        <br />
        店舗
      </div>
    )}
    <img className={styles.container__img} src={itemImgUrl} />
    <div className={styles.container__item}>{itemName}</div>
    <div className={styles.container__price}>{price}</div>
  </div>
);
