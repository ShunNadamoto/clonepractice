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

const Test4: NextPage = () => {
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

  console.log(personList);

  return (
    <div>
      <div>test4ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>
    </div>
  );
};

export default Test4;
