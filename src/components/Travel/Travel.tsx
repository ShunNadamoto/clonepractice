import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  rank: number;
  place: string;
  imgUrl: string;
  descripution: string;
  tagList: { text: string; href: string }[];
};

export const Travel: FC<Props> = ({ rank, place, imgUrl, descripution, tagList }) => (
  <div className={styles.container}>
    <div className={styles.container__rankingBox__ranking}>{rank}位</div>
    <div className={styles.container__rankingBox__place}>{place}</div>

    <img className={styles.container__img} src={imgUrl} />
    <div className={styles.container__text}>{descripution}</div>
    <div className={styles.container__tagBox}>
      {tagList.map((eachTag, index) => (
        <a
          href={eachTag.href}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.container__tagBox__button}
          key={index}
        >
          {eachTag.text}
        </a>
      ))}
    </div>
  </div>
);
