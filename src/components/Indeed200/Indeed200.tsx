import { FC } from 'react';
import styles from './index.module.scss';

type JobProps = {
  title: string;
  companyName: string;
  location: string;
  jobTag: string[];
  salary: string;
  description: string;
};

export const Indeed200: FC<JobProps> = ({
  title,
  companyName,
  location,
  jobTag,
  salary,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <a className={styles.container__title} href=''>
          {title}
        </a>
      </div>
      <div className={styles.container__companyName}>{companyName}</div>
      <div className={styles.container__location}>{location}</div>
      <div>
        {jobTag.map((elem, index) => (
          <div className={styles.container__jobTag} key={index}>
            {elem}
          </div>
        ))}
      </div>
      <div className={styles.container__salary}>{salary}</div>
      <div className={styles.container__description}>{description}</div>
    </div>
  );
};
