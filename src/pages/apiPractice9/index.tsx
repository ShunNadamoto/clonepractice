import axios, { AxiosError, AxiosResponse } from 'axios';
import { error } from 'console';
import { useState, useEffect } from 'react';

type Book = { title: string; author: string };
const baseUrl = 'http://localhost:8000/api/books';

const BookPage = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  console.log(bookList);
  const [newBookTitle, setNewBookTitle] = useState('');
  console.log(newBookTitle);
  const [newBookAuthor, setNewBookAuthor] = useState('');
  console.log(newBookAuthor);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get<Book[]>(baseUrl);
        setBookList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookList();
  }, []);

  return (
    <div>
      {bookList.map((elem, index) => {
        return (
          <div key={index}>
            <div>{elem.title}</div>
            <div>{elem.author}</div>
          </div>
        );
      })}
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
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            await axios.post<Book[]>(baseUrl, requestBody);

            console.log(requestBody);
            setNewBookTitle('');
            setNewBookAuthor('');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        投稿
      </button>
    </div>
  );
};

export default BookPage;
