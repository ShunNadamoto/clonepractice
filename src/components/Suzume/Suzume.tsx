import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  characterImgUrl: string;
  actorImgUrl: string;
  characterName1: string;
  characterName2: string;
};

export const Suzume: FC<Props> = ({
  characterImgUrl,
  actorImgUrl,
  characterName1,
  characterName2,
}) => (
  <div className={styles.container}>
    <div className={styles.container__character}>
      <img className={styles.container__character__characterImg} src={characterImgUrl} />
      <img className={styles.container__character__actorImg} src={actorImgUrl} />
    </div>
    <div className={styles.container__introduction}>
      <div className={styles.container__introduction__nameBox}>
        <div className={styles.container__introduction__nameBox__characterName1}>
          {characterName1}
        </div>
        <div className={styles.container__introduction__nameBox__characterName2}>
          {characterName2}
        </div>
      </div>
      <div className={styles.container__introduction__note}>
        九州の静かな町で、叔母と二人で暮らす17歳の女子高生。<br></br>
        広大な廃墟の中、幼い自分が草原をさまよい歩く不思議な夢をよく見る。
      </div>
    </div>
  </div>
);
