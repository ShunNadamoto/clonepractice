import axios from '@/lib/axiosInstance';
import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:8000/api/books';
type Book = { title: string; author: string };

const BookPage = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios.get<Book[]>(baseUrl).then((response: AxiosResponse<Book[]>) => {
      console.log(response);
      setBookList(response.data);
    });
  }, [refetch]);

  return (
    <div>
      {bookList.map((elem, index) => {
        return (
          <div key={index}>
            <div>タイトル:{elem.title}</div>
            <div>著者:{elem.author}</div>
          </div>
        );
      })}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      <button
        disabled={!(newBookTitle && newBookAuthor)}
        onClick={() => {
          const requestBody = { title: newBookTitle, author: newBookAuthor };
          axios
            .post<Book[]>(baseUrl, requestBody)
            .then((response: AxiosResponse<Book[]>) => {
              console.log(response.data);
              setNewBookTitle('');
              setNewBookAuthor('');
              setRefetch(!refetch);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        追加
      </button>
    </div>
  );
};

export default BookPage;
