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
}) => {
  const overCount = tagList2.length - 3;

  return (
    <div className={styles.container}>
      <div className={styles.container__jobtitle}>{jobTitle}</div>
      <div className={styles.container__companyName}>{companyName}</div>
      <div className={styles.container__place}>{place}</div>
      <div className={styles.container__tagList1Box}>
        {tagList1.map((eachTagName, index) => (
          <div key={index} className={styles.container__tagList1Box__tag}>
            {eachTagName}
          </div>
        ))}
      </div>
      <div className={styles.container__tagList2}>
        {tagList2.slice(0, 3).map((eachTagName, index) => {
          const isDisplayOverCount = index === 2 && overCount > 0;

          return (
            <div key={index} style={{ display: 'flex' }}>
              <div>{eachTagName}</div>
              {isDisplayOverCount && <div>{`+${overCount}`}</div>}
            </div>
          );
        })}
      </div>
      <div className={styles.container__application}>{application}</div>
      {isDisplayResponseTag && (
        <div className={styles.container__responseTag}>返信率の高い企業</div>
      )}
      <div className={styles.container__descripution}>{descripution}</div>
      <div className={styles.container__sponsor}>{sponsor}</div>
    </div>
  );
};
