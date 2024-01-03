import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Book2 } from '../../components/Book2';
import { Modal2 } from '../../components/Modal2';

type Book = { title: string; author: string };
const baseURL = '/api/books';

const BookPage = () => {
  //   const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  //   const [refetch, setRefetch] = useState(false);

  //   useEffect(() => {
  //     axios
  //       .get<Book[]>(baseURL)
  //       .then((response) => {
  //         console.log(response);
  //         setBookList(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [refetch]);

  //   useEffect(() => {
  //     const getBookList = async () => {
  //       try {
  //         const response = await axios.get<Book[]>(baseURL);
  //         setBookList(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getBookList();
  //   }, [refetch]);

  const {
    data: bookListData,
    isLoading,
    refetch: refetchExcute,
  } = useQuery<Book[]>(baseURL, async () => {
    const response = await axios.get(baseURL);
    return response.data;
  });

  const bookList = bookListData ?? [];

  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}

      <Book2 imgUrl='' ranking='1' title='坊っちゃん' isRental />

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      {/* <button
        onClick={async () => {
          const requestBody = { title: newBookTitle, author: newBookAuthor };
          axios
            .post<Book[]>(baseURL, requestBody)
            .then((response) => {
              console.log(response);
              setNewBookTitle('');
              setNewBookAuthor('');
              refetchExcute();
              //   setRefetch(!refetch);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        追加
      </button> */}

      <button
        onClick={async () => {
          try {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            await axios.post<Book[]>(baseURL, requestBody);
            setNewBookTitle('');
            setNewBookAuthor('');
            refetchExcute();
            //   setRefetch(!refetch);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新規追加
      </button>
    </div>
  );
};

export default BookPage;
