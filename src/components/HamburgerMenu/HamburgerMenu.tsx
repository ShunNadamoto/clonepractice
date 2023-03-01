import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  MenuIcon: string;
  HamburgerImgUrl: string;
  MenuIcon2: string;
  title: string;
  Price: string;
};

export const HamburgerMenu: FC<Props> = ({
  MenuIcon,
  HamburgerImgUrl,
  MenuIcon2,
  title,
  Price,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__MenuIcon}> {'期間限定'} </div>
      <div className={styles.content__MenuBox}>
        <img src={HamburgerImgUrl} alt='ハンバーガー写真' />
        <img src={MenuIcon2} alt='特徴' />
        <div className={styles.content__title}>{title}</div>
        <div className={styles.content__Price}>{Price}</div>
      </div>
    </div>
  );
};
