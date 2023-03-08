import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  ranking: string;
  place: string;
  imgUrl: string;
  text: string;
  tagList: string[];
};

export const Travel: FC<Props> = ({ ranking, place, imgUrl, text, tagList }) => (
  <div className={styles.container}>
    <div className={styles.container__rankingBox__ranking}>{ranking}</div>
    <div className={styles.container__rankingBox__place}>{place}</div>

    <img className={styles.container__img} src={imgUrl} />
    <div className={styles.container__text}>{text}</div>
    <div className={styles.container__tagBox}>
      {tagList.map((eachTag, index) => (
        <button className={styles.container__tagBox__button} key={index}>
          {eachTag}
        </button>
      ))}
    </div>
  </div>
);
