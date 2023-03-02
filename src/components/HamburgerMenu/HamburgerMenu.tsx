import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  menuIcon: string;
  hamburgerImgUrl: string;
  menuIcon2: string;
  title: string;
  price: string;
  isDisplayLimitedIcon: boolean;
};

export const HamburgerMenu: FC<Props> = ({
  menuIcon,
  hamburgerImgUrl,
  menuIcon2,
  title,
  price,
  isDisplayLimitedIcon,
}) => {
  return (
    <div className={styles.content}>
      {isDisplayLimitedIcon && <div className={styles.content__MenuIcon}> {'期間限定'} </div>}
      <div className={styles.content__MenuBox}>
        <img src={hamburgerImgUrl} alt='ハンバーガー写真' />
        <img src={menuIcon2} alt='特徴' />
        <div className={styles.content__title}>{title}</div>
        <div className={styles.content__Price}>{price}</div>
      </div>
    </div>
  );
};
