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

const Test3: NextPage = () => {
  const router = useRouter();
  const [personList, setPersonList] = useState<Person[]>([]);

  useEffect(() => {
    const getPersonList = async () => {
      try {
        const res = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
        setPersonList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPersonList();
  }, []);

  return (
    <div>
      <div>test3ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>
    </div>
  );
};

export default Test3;
