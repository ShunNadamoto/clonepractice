import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  category: string;
  companyName: string;
  location: string;
  salary: string;
  jobType: string;
  tagList: string[];
};

export const Profile1000: FC<Props> = ({ category, companyName, location, salary, jobType, tagList }) => {
  return (
    <div className={styles.container}>
      <div>{category}</div>
      <div>{companyName}</div>
      <div>{location}</div>
      <div>
        {tagList.map((elem, index) => <div key={index}>{elem}</div>)}
      </div>
      <div>{salary}</div>
      <div>{jobType}</div>
    </div>
  );
};
