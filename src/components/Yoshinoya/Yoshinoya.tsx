import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  isDisplayNewTag: boolean;
  isDisplayLimitedTag: boolean;
  itemImgUrl: string;
  menu: string;
  price1: string;
  price2: string;
};

export const Yoshinoya: FC<Props> = ({
  isDisplayNewTag,
  isDisplayLimitedTag,
  itemImgUrl,
  menu,
  price1,
  price2,
}) => (
  <div className={styles.container}>
    {isDisplayNewTag && <div className={styles.container__newTag}>NEW</div>}
    {isDisplayLimitedTag && (
      <div className={styles.container__limitedTag}>
        期間
        <br />
        限定
      </div>
    )}
    <img className={styles.container__img} src={itemImgUrl} />
    <div className={styles.container__menu}>{menu}</div>
    <div className={styles.container__price1}>{price1}</div>
    <div className={styles.container__price2}>{price2}</div>
  </div>
);
