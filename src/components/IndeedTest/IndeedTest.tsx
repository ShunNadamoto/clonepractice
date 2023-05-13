import { FC } from 'react';

type Props = {
  jobTitle: string;
};

export const IndeedTest: FC<Props> = (props) => {
  return (
    <div>
      <div>{props.jobTitle}</div>
    </div>
  );
};
