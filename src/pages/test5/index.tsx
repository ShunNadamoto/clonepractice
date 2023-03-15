import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const Test5: NextPage = () => {
  const router = useRouter();
  const [personList, setPersonList] = useState<Person[]>([]);

  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        console.log(response.data.data);
        setPersonList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>test5ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>

      {personList.map((eachPerson, index) => {
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
