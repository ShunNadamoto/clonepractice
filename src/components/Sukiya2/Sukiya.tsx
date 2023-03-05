import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  tagUrlList: string[];
  menu: string;
  imgUrl: string;
};

export const Sukiya: FC<Props> = ({ tagUrlList, menu, imgUrl }) => (
  <div className={styles.content}>
    <div>
      {tagUrlList.map((eachUrl, index) => (
        <img key={index} className={styles.content__icon1} src={eachUrl} />
      ))}
    </div>
    <div className={styles.content__menu}>{menu}</div>
    <img className={styles.content__img} src={imgUrl} />
  </div>
);
