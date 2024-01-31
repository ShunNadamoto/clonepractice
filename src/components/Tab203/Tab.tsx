import { FC, ReactNode } from 'react';
import { Button } from '@/components/Button203';
import styles from './index.module.scss';

type Props = {
  selectedId: string;
  handleClickTab: (tabId: string) => void;
  tabList: { id: string; title: string; content: ReactNode }[];
};

export const Tab: FC<Props> = ({ selectedId, handleClickTab, tabList }) => {
  const selectedTab = tabList.filter((elem) => elem.id === selectedId);

  return (
    <div className={styles.container}>
      <div className={styles.container__tabList}>
        {tabList.map((elem) => (
          <Button key={elem.id} label={elem.title} onClick={() => handleClickTab(elem.id)} />
        ))}
      </div>
      <div>{selectedTab[0].content}</div>
    </div>
  );
};
