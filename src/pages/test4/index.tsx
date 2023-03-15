import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { PersonList } from '../../components/PersonList';
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
        console.log(response);
        console.log(response.data.data);
        setPersonList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [testName, setTestName] = useState('');
  const [personList2, setPersonList2] = useState<Person[]>([]);

  // console.log(personList);
  // console.log(personList[5].name);
  // console.log(personList[2].registerDate);
  // console.log(personList[3].age);
  // console.log(personList[5].note);
  // console.log(personList[4].name);

  // console.log(personList[0].note);

  return (
    <div>
      <div>test4ページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>

      {personList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <PersonList key={index} name={name} age={age} note={note} registerDate={registerDate} />
        );
      })}

      <PersonList
        name='メフメト2世'
        age={31}
        note='東ローマ帝国を滅ぼす'
        registerDate='1901-01-02T22:00:01'
      />
    </div>
  );
};

export default Test4;
