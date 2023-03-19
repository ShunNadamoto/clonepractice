import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCountTime, useGetPersonList2 } from '../../lib/hooks';
import styles from './index.module.scss';

const Test5: NextPage = () => {
  const router = useRouter();
  const count = useCountTime();
  const { personList } = useGetPersonList2();
  const filterdPersonList = personList.filter((elem) => elem.name === '織田信長');

  return (
    <div>
      <div>test5ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>

      <div>{count}</div>

      {filterdPersonList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <div className={styles.container} key={index}>
            <div className={styles.conatiner__profileBox}>人物プロフィール</div>
            <div className={styles.conatiner__profileBox}>{`名前は${name}`}</div>
            <div className={styles.conatiner__profileBox}>{`年齢は${age}`}</div>
            <div className={styles.conatiner__profileBox}>{`メモ：${note}`}</div>
            <div className={styles.conatiner__profileBox}>{`投稿日${registerDate}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Test5;
