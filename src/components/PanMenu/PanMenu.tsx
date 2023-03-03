import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  itemImgUrl: string;
  releaseDate: string;
  title: string;
  isDisplayLimitedIcon: boolean;
};

export const PanMenu: FC<Props> = ({ itemImgUrl, releaseDate, title, isDisplayLimitedIcon }) => {
  return (
    <div className={styles.container}>
      <img className={styles.container__itemImg} src={itemImgUrl} alt='メイン画像' />
      <div className={styles.container__descriptionBox}>
        <div className={styles.container__descriptionBox__releaseDate}>{releaseDate}</div>
        {title}
      </div>
      {isDisplayLimitedIcon && (
        <img
          className={styles.container__newIcon}
          src='https://www.littlemermaid.jp/common/img/icon/icon_new.svg'
        />
      )}
    </div>
  );
};
