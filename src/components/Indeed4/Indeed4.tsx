import { FC } from 'react';

type Props = {
  jobTitle: string;
  companyName: string;
  place: string;
  tagList1: string[];
  tagList2: { name: string; imgType: string }[];
  application: string;
  isDisplayResponseTag: boolean;
  descripution: string;
  sponsor: string;
};

export const Indeed4: FC<Props> = ({
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
    <div>
      <div>{jobTitle}</div>
      <div>{companyName}</div>
      <div>{place}</div>
      <div>
        {tagList1.map((eachTag, index) => (
          <div key={index}>{eachTag}</div>
        ))}
      </div>
      <div>
        {tagList2.slice(0, 3).map((eachTag, index) => {
          const isDisplayOverCount = index === 2 && overCount > 0;
          return (
            <div key={index}>
              <div>
                {eachTag.imgType === 'salery' && (
                  // <div>aaa</div>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16px' height='13px'>
                    <path
                      fill='#595959'
                      fill-rule='evenodd'
                      d='M2.45168 6.10292c-.30177-.125-.62509-.18964-.95168-.1903V4.08678c.32693-.00053.6506-.06518.95267-.1903.30331-.12564.57891-.30979.81105-.54193.23215-.23215.4163-.50775.54194-.81106.12524-.30237.18989-.62638.19029-.95365H9.0902c0 .3283.06466.65339.1903.9567.12564.30331.30978.57891.54193.81106.23217.23215.50777.41629.81107.54193.3032.12558.6281.19024.9562.1903v1.83556c-.3242.00155-.6451.06616-.9448.19028-.3033.12563-.5789.30978-.81102.54193-.23215.23214-.4163.50774-.54193.81106-.12332.2977-.18789.61638-.19024.93849H3.99496c-.00071-.32645-.06535-.64961-.19029-.95124-.12564-.30332-.30979-.57891-.54193-.81106-.23215-.23215-.50775-.4163-.81106-.54193zM0 .589843C0 .313701.223858.0898438.5.0898438h12.0897c.2762 0 .5.2238572.5.5000002V9.40715c0 .27614-.2238.5-.5.5H.5c-.276143 0-.5-.22386-.5-.5V.589843zM6.54427 6.99849c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2zm8.05523-2.69917v7.10958H2.75977c-.27615 0-.5.2238-.5.5v.5c0 .2761.22385.5.5.5H15.422c.4419 0 .6775-.2211.6775-.6629V4.29932c0-.27615-.2239-.5-.5-.5h-.5c-.2761 0-.5.22385-.5.5z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                )}
                {eachTag.imgType === 'jobType' && (
                  <svg xmlns='http://www.w3.org/2000/svg' width='14px' height='13px'>
                    <path
                      fill='#595959'
                      fill-rule='evenodd'
                      d='M4.50226.5c-.27614 0-.5.223858-.5.5v2.1H.5c-.276142 0-.5.22386-.5.5v1.9h14V3.6c0-.27614-.2239-.5-.5-.5h-3.4977V1c0-.276142-.22389-.5-.50004-.5h-5Zm4.19962 2.6H5.30344V1.8h3.39844v1.3Z'
                      clip-rule='evenodd'
                    ></path>
                    <path
                      fill='#595959'
                      d='M5.70117 6.80005H0v5.20005c0 .2761.223857.5.5.5h13c.2761 0 .5-.2239.5-.5V6.80005H8.30117v.80322c0 .27614-.22386.5-.5.5h-1.6c-.27614 0-.5-.22386-.5-.5v-.80322Z'
                    ></path>
                  </svg>
                )}
                {eachTag.imgType === 'time' && (
                  <svg xmlns='http://www.w3.org/2000/svg' width='14px' height='15px'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5ZM6.2496 4.25C6.2496 4.11193 6.36153 4 6.4996 4H7.2996C7.43767 4 7.5496 4.11193 7.5496 4.25V7.62406L9.62708 8.82349C9.74665 8.89252 9.78762 9.04542 9.71858 9.16499L9.31858 9.85781C9.24955 9.97739 9.09665 10.0184 8.97708 9.94932L6.25028 8.375H6.2496V8.37461L6.24805 8.37371L6.2496 8.37102V4.25Z'
                      fill='#595959'
                    ></path>
                  </svg>
                )}
                {eachTag.name}
              </div>
              {isDisplayOverCount && <div>{`+${overCount}`}</div>}
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
