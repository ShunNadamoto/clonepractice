import { type } from 'os';
import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  jobTitle: string;
  companyName: string;
  place: string;
  tagList1: string[];
  tagList2: string[];
  application: string;
  isDisplayResponseTag: boolean;
  descripution: string;
  sponsor: string;
};

export const Indeed: FC<Props> = ({
  jobTitle,
  companyName,
  place,
  tagList1,
  tagList2,
  application,
  isDisplayResponseTag,
  descripution,
  sponsor,
}) => (
  <div className={styles.container}>
    <div className={styles.container__jobtitle}>{jobTitle}</div>
    <div className={styles.container__companyName}>{companyName}</div>
    <div className={styles.container__place}>{place}</div>
    <div className={styles.container__tagList1}>
      {tagList1.map((eachTagName, index) => (
        <div key={index}>{eachTagName}</div>
      ))}
    </div>
    <div className={styles.container__tagList2}>
      {tagList2.map((eachTagName, index) => (
        <div key={index}>{eachTagName}</div>
      ))}
    </div>
    <div className={styles.container__application}>{application}</div>
    {isDisplayResponseTag && <div className={styles.container__responseTag}>返信率の高い企業</div>}
    <div className={styles.container__descripution}>{descripution}</div>
    <div className={styles.container__sponsor}>{sponsor}</div>
  </div>
);
