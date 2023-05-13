import { FC } from 'react';

type Props = {
  jobTitle: string;
};

export const IndeedTest: FC<Props> = ({ jobTitle }) => {
  return (
    <div>
      <div>{jobTitle}</div>
      <button onClick={() => console.log('aaaaaa')}>onClickTest</button>
    </div>
  );
};
