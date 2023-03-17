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
  const [refreshCount, setRefreshCount] = useState(0);
  const baseURL = 'https://umayadia-apisample.azurewebsites.net/api/persons';
  const [post, SetPost] = useState(null);

  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        console.log(response.data.data);
        setPersonList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get('https://umayadia-apisample.azurewebsites.net/api/persons/Shakespeare')
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setPersonList(res.data.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://umayadia-apisample.azurewebsites.net/api/persons/%E7%B9%94%E7%94%B0%E4%BF%A1%E9%95%B7',
  //     )
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setPersonList(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .put(
  //       'https://umayadia-apisample.azurewebsites.net/api/persons/%E7%B9%94%E7%94%B0%E4%BF%A1%E9%95%B7',
  //       {
  //         name: 'Kennedy',
  //         note: 'UPDATE NOTE!',
  //         age: 32,
  //         registerDate: '1917-05-29T15:18:49',
  //       },
  //     )
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setPersonList(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [refreshCount]);

  // useEffect(() => {
  //   axios
  //     .delete(
  //       'https://umayadia-apisample.azurewebsites.net/api/persons/%E6%AD%A6%E7%94%B0%E4%BF%A1%E7%8E%84',
  //     )
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setPersonList(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [refreshCount]);

  // useEffect(() => {
  //   axios
  //     .delete('https://umayadia-apisample.azurewebsites.net/api/persons/all/reset')
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setPersonList(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .options('https://umayadia-apisample.azurewebsites.net/api/persons')
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
