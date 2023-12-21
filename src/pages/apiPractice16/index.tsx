import axios from '@/lib/axiosInstance';
import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

type Book = { title: string; author: string };
const baseUrl = '/api/books';

const BookPage = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [refetch, setRefetch] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  useEffect(() => {
    axios
      .get<Book[]>(baseUrl)
      .then((response) => {
        console.log(response);
        setBookList(response.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.log(error);
      });
  }, [refetch]);

  //   useEffect(() => {
  //     const getBookList = async () => {
  //       try {
  //         const response = await axios.get<Book[]>(baseUrl);
  //         setBookList(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getBookList();
  //   }, [refetch]);

  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>タイトル:{elem.title}</div>
          <div>著者:{elem.author}</div>
        </div>
      ))}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      <button
        onClick={async () => {
          const requestBody = { title: newBookTitle, author: newBookAuthor };
          axios
            .post<Book[]>(baseUrl, requestBody)
            .then((response) => {
              console.log(response);
              setNewBookTitle('');
              setNewBookAuthor('');
              setRefetch(!refetch);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        新規に追加
      </button>

      {/* <button
        onClick={async () => {
          try {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            await axios.post(baseUrl, requestBody);
            setNewBookTitle('');
            setNewBookAuthor('');
            setRefetch(!refetch);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新規に追加
      </button> */}
    </div>
  );
};

export default BookPage;
