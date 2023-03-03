import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  newIconUrl: string;
  panImgUrl: string;
  releaseDate: string;
  title: string;
  isDisplayLimitedIcon: boolean;
};

export const PanMenu: FC<Props> = ({
  newIconUrl,
  panImgUrl,
  releaseDate,
  title,
  isDisplayLimitedIcon,
}) => {
  return (
    <div className={styles.container}>
      {isDisplayLimitedIcon && (
        <div className={styles.container__newIcon}>
          <img src={newIconUrl} />
        </div>
      )}
      <div className={styles.container__menuBox}>
        <img src={panImgUrl} alt='パン写真' />
        <div className={styles.container__releaseDate}>{releaseDate}</div>
        <div className={styles.container__title}>{title}</div>
      </div>
    </div>
  );
};
