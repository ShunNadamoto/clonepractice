import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

type Props = {};

export const Tab2: FC<Props> = () => {
  const [selectedTab, setSelectedTab] = useState('1');

  return (
    <div className={styles.container}>
      <div className={styles.container__tabBox}>
        <button
          className={cn(styles.container__tabBox__tab, {
            [styles[`container__tabBox__tab--selected`]]: selectedTab === '1',
          })}
          onClick={() => setSelectedTab('1')}
        >
          タブ１
        </button>
        <button
          className={cn(styles.container__tabBox__tab, {
            [styles[`container__tabBox__tab--selected`]]: selectedTab === '2',
          })}
          onClick={() => setSelectedTab('2')}
        >
          タブ2
        </button>
        <button
          className={cn(styles.container__tabBox__tab, {
            [styles[`container__tabBox__tab--selected`]]: selectedTab === '3',
          })}
          onClick={() => setSelectedTab('3')}
        >
          タブ3
        </button>
      </div>
      {selectedTab === '1' && (
        <div className={styles.container__descripution}>タブ1が選択されています</div>
      )}
      {selectedTab === '2' && (
        <div className={styles.container__descripution}>タブ2が選択されています</div>
      )}
      {selectedTab === '3' && (
        <div className={styles.container__descripution}>タブ3が選択されています</div>
      )}
    </div>
  );
};
