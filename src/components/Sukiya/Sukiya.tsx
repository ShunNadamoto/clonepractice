import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  icon1: string;
  icon2: string;
  icon3: string;
  menu: string;
  imgUrl: string;
  isDisplayLimitedIcon: boolean;
};

export const Sukiya: FC<Props> = ({ icon1, icon2, icon3, menu, imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__tag}>
        <img className={styles.container__tag__icon1} src={icon1} />
        <img className={styles.container__tag__icon2} src={icon2} />
        <img className={styles.container__tag__icon3} src={icon3} />
      </div>
      <div className={styles.container__menu}>{menu}</div>
      <img className={styles.container__img} src={imgUrl} />
    </div>
  );
};
