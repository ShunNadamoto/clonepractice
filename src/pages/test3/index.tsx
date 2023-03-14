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
    console.log('iiiii');
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((response) => {
        setPersonList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log('aaaaa');
  console.log(personList);

  //   console.log(personList);

  return (
    <div>
      <div>test3ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>
    </div>
  );
};

export default Test3;
