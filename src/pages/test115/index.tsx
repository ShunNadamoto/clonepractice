import { NextPage } from 'next';
import { createContext } from 'react';
import styles from './index.module.scss';
import { ComponentA } from './ComponentA';

export const UserCount = createContext('');

const Test115: NextPage = () => {
  return (
    <div className={styles.container}>
      トップページ
      <UserCount.Provider value={'aaaaaa'}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
};

export default Test115;
