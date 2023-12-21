import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

type Book = { title: string; author: string };

const MainPage = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  console.log(newBookAuthor);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get<Book[]>('http://localhost:8000/api/books');
        setBookList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookList();
  }, []);
  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}
      <input
        type='text'
        value={newBookTitle}
        onChange={(event) => setNewBookTitle(event.target.value)}
      />
      <br />
      <input
        type='text'
        value={newBookAuthor}
        onChange={(event) => setNewBookAuthor(event.target.value)}
      />
      <button
        onClick={async () => {
          try {
            await axios.post<Book>('http://localhost:8000/api/books', {
              title: newBookTitle,
              author: newBookAuthor,
            });
            console.log('POST成功しました');
            setNewBookTitle('');
            setNewBookAuthor('');
          } catch (error) {
            console.log('POST失敗しました');
          }
        }}
      >
        投稿する
      </button>
    </div>
  );
};

export default MainPage;
