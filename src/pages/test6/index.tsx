import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('*'); // suppresses modal-related test warnings.

type Person = {
  name: string;
  age: number;
  note: string;
  registerDate: string;
};

const Test6: NextPage = () => {
  const router = useRouter();
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refreshCount, setRefreshCount] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [text, setText] = useState('');
  const [boolean, setBoolean] = useState(false);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [note, setNote] = useState('');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(() => {});
  useEffect(() => {});
  useEffect(() => {});
  useEffect(() => {});

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // if (subtitle) subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getPersonList = async () => {
      try {
        const response = await axios.get(
          'https://umayadia-apisample.azurewebsites.net/api/persons',
        );
        setPersonList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPersonList();
  }, [refreshCount]);

  const resetInput = () => {
    setName('');
    setAge('');
    setNote('');
  };

  console.log(personList);

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const sum = (a: number, b: number) => {
    a + b;
  };
  console.log(sum(1, 2));
  const [fruits, setFruits] = useState('');
  const [fruitsList, setFruitsList] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type='text'
          value={name}
          placeholder='人物名を入力'
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='text'
          value={age}
          placeholder='年齢を入力'
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type='text'
          value={note}
          placeholder='記事を入力'
          onChange={(event) => setNote(event.target.value)}
        />
      </div>
      <button
        onClick={() =>
          axios
            .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
              name: name,
              age: Number(age),
              note: note,
              registerDate: '0214-03-03T04:14:25',
            })
            .then((response) => {
              resetInput();
              setRefreshCount(refreshCount + 1);
            })
            .catch((error) => console.log(error))
        }
      >
        新規に人物を登録する
      </button>

      {personList.map((eachPerson, index) => {
        const { name, age, note, registerDate } = eachPerson;
        return (
          <div key={index} style={{ marginTop: '20px', background: 'red' }}>
            <div>人物プロフィール</div>
            <div>{`名前は${name}`}</div>
            <div>{`年齢は${age}`}</div>
            <div>{`メモ：${note}`}</div>
            <div>{`投稿日${registerDate}`}</div>
          </div>
        );
      })}
      <button onClick={openModal}>Open Modal</button>
      <Modal
        contentLabel='Example Modal'
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        ああああ<button onClick={closeModal}>close</button>
      </Modal>

      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default Test6;
