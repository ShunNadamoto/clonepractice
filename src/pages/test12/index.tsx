import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AccordingMenu2 } from '../../components/AccordionMenu2';
import { AccordingMenu3 } from '../../components/AccordionMenu3';
import { RadioButton3 } from '../../components/RadioButton3';
import { Tab2 } from '../../components/Tab2';
import styles from './index.module.scss';
import { SelectAge } from '@/components/SelectAge/SelectAge';
import { Tab } from '@/components/Tab';

type Person = {
  name: string;
  age: string;
  note: string;
  registerDate: string;
};
const radioButtonList = [
  { labelName: '米', value: 'rice' },
  { labelName: 'パン', value: 'pan' },
  { labelName: '麺', value: 'noodle' },
];

const Test12: NextPage = () => {
  const router = useRouter();
  const [name, setNewName] = useState('');
  const [age, setNewAge] = useState('');
  const [note, setNewNote] = useState('');
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refetchPersonList, setRefetchPersonList] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(radioButtonList[0].value);

  const resetInput = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  useEffect(() => {
    const getPersonList = async () => {
      const res = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
      setPersonList(res.data.data);
    };
    getPersonList();
  }, [refetchPersonList]);

  return (
    <>
      <button onClick={() => router.push('/')}>topページへ</button>
      <div>
        <input
          type='text'
          value={name}
          placeholder='名前を入力'
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type='text'
          value={age}
          placeholder='年齢を入力'
          onChange={(e) => setNewAge(e.target.value)}
        />
        <input
          type='text'
          value={note}
          placeholder='メモを入力'
          onChange={(e) => setNewNote(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          axios
            .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
              name: name,
              age: Number(age),
              note: note,
              registerDate: '0214-03-03T04:14:25',
            })
            .then(() => {
              setRefetchPersonList(!refetchPersonList);
              resetInput();
            })
            .catch((error) => console.log(error));
        }}
      >
        新規登録する
      </button>

      <div>
        {personList
          .filter((elem) => Number(elem.age) < 21) //personlistからfiterで絞り込む
          .map(
            (
              elem,
              index, //上で絞り込んだ配列をmapで値を返す
            ) => (
              <div
                key={index}
                style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}
              >
                <div>{elem.name}</div>
                <div>{elem.age}</div>
                <div>{elem.note}</div>
                <div>{elem.registerDate}</div>
              </div>
            ),
          )}
      </div>

      <Tab />

      <Tab2 />

      <AccordingMenu2 text='奏志君はどんな気持ち？' description='You Tubeを観て楽しい気持ち' />

      <AccordingMenu3 text='あなたは仕事をしていますか？' description='いいえ、研修中です。' />
      <AccordingMenu3
        text='あなたは勉強をしていますか？'
        description='はい、プログラミングを勉強しています。'
      />

      {radioButtonList.map((eachRadio) => (
        <RadioButton3
          key={eachRadio.value}
          id={eachRadio.value}
          value={eachRadio.value}
          checked={selectedRadio === eachRadio.value}
          onChange={(event) => {
            setSelectedRadio(event.target.value);
          }}
          labelName={eachRadio.labelName}
          className={styles.container__test}
        />
      ))}
      <div>{selectedRadio}が選択されました</div>

      <SelectAge />
    </>
  );
};
export default Test12;
