import { FC } from 'react';

type Props = {
  industry: string;
  averageSelery: string;
  recruiting: string;
};

export const SeleryBox: FC<Props> = ({ industry, averageSelery, recruiting }) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid',
        borderColor: '#d4d2d0',
        borderRadius: '0.5rem',
        marginTop: '2rem',
        padding: '1rem',
        width: '15rem',
      }}
    >
      <div>{industry}</div>
      <div style={{ color: '#2557a7' }}>
        {averageSelery}
        <a href='https://jp.indeed.com/career/%E3%83%87%E3%83%BC%E3%82%BF%E5%85%A5%E5%8A%9B/salaries'></a>
      </div>

      <div>
        <a href='https://jp.indeed.com/jobs?l=&q=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%A5%E5%8A%9B&vjk=594a160420869ebc'>
          {recruiting}
        </a>
      </div>
    </div>
  );
};

export default SeleryBox;
