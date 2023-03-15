import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

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
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

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

  console.log(personList);

  return (
    <div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>

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
    </div>
  );
};

export default Test6;
