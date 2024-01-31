import React from 'react';
import { NextPage } from 'next';
import { Indeed200 } from '@/components/Indeed200';

const testData = [
  {
    title: 'Webエンジニア',
    companyName: '株式会社〇〇',
    location: '東京都 渋谷区',
    jobTag: ['在宅OK'],
    salary: '20万円',
    description: '正社員',
  },
  {
    title: 'フロントエンドエンジニア',
    companyName: '株式会社△△',
    location: '東京都 新宿区',
    jobTag: ['昇給あり', '交通費支給'],
    salary: '20万円~30万円',
    description: 'アルバイト・パート',
  },
];

const JobPage: NextPage = () => {
  return (
    <div>
      {testData.map((elem) => (
        <Indeed200
          title={elem.title}
          companyName={elem.companyName}
          location={elem.location}
          jobTag={elem.jobTag}
          salary={elem.salary}
          description={elem.description}
        />
      ))}
    </div>
  );
};

export default JobPage;
