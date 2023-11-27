import axios from '@/lib/axiosInstance';
import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

type Book = { title: string; author: string };
const baseUrl = '/api/books';

const BookPage = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
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
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>本のタイトル:{elem.title}</div>
          <div>本の著者:{elem.author}</div>
        </div>
      ))}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
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
            setNewBookAuthor;
          } catch (error) {
            console.log(error);
          }
        }}
      >
        追加
      </button>
    </div>
  );
};

export default BookPage;
