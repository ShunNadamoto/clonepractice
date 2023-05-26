import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  profileImgUrl: string;
  brandImgUrl: string;
  title: string;
  industryName: string;
  companyName: string;
  tagList: string[];
};

export const Profile: FC<Props> = (props) => {
  const { profileImgUrl, brandImgUrl, title, industryName, companyName, tagList } = props;
  const testList = [1, 2, 3];
  const [num1, num2, num3] = testList;

  const testList2 = [2, 4, 6];
  const [num4, num5, num6] = testList2;
  console.log(num1, num2, num3);
  console.log(num4, num5, num6);

  return (
    <div className={styles.container}>
      <img src={profileImgUrl} alt='プロフ画像' />
      <div className={styles.container__title}>{title}</div>
      <div className={styles.container__companyInfoBox}>
        <img
          src={brandImgUrl}
          alt='ブランドロゴ'
          className={styles.container__companyInfoBox__logo}
        />
        <div className={styles.container__companyInfoBox__nameBox}>
          <div className={styles.container__companyInfoBox__nameBox__text1}>{industryName}</div>
          <div>{companyName}</div>
        </div>
      </div>
      <div className={styles.container__tagBox}>
        {tagList.map((eachTagName, index) => (
          <div key={index}>{eachTagName}</div>
        ))}
      </div>
    </div>
  );
};
