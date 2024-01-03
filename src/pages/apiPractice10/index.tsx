import axios from '@/lib/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

const BookPage = () => {
  type Book = { title: string; author: string };
  const baseURL = '/api/books';
  const [bookList, setbookList] = useState<Book[]>([]);
  console.log(bookList);
  const [newBookTitle, setnewBooktitle] = useState('');
  const [newBookBody, setnewBookBody] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get<Book[]>(baseURL)
      .then((response: AxiosResponse<Book[]>) => {
        console.log(response);
        setbookList(response.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.log(error);
      });
  }, [refetch]);

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
        onChange={(event) => setnewBooktitle(event.target.value)}
      />
      <input
        type='text'
        value={newBookBody}
        onChange={(event) => setnewBookBody(event.target.value)}
      />

      <button
        onClick={() => {
          const requestBody = { title: newBookTitle, author: newBookBody };
          axios.post<Book[]>(baseURL, requestBody).then((response) => {
            console.log(response.data);
            setnewBooktitle('');
            setnewBookBody('');
            setRefetch(!refetch);
          });
        }}
      >
        投稿する
      </button>
    </div>
  );
};

export default BookPage;
