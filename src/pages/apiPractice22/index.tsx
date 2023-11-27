import axios from '@/lib/axiosInstance';
import { useQuery, useMutation } from 'react-query';
import { useState, useEffect } from 'react';

const baseURL = '/api/books';
type Book = { title: string; author: string };

const BookPage = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [refetch, setRefetch] = useState(false);

  console.log('---1---');

  useEffect(() => {
    console.log('---2---');
    axios
      .get<Book[]>(baseURL)
      .then((response) => {
        console.log('---3---');
        console.log(response.data);
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('---4---');
  }, [refetch]);

  console.log('---5---');

  const { mutate } = useMutation(
    async (postData: Book) => {
      const res = await axios.post(baseURL, postData);
      return res.data;
    },
    {
      onSuccess: () => {
        setRefetch(!refetch);
        setNewBookTitle('');
        setNewBookAuthor('');
      },
      onError: () => {
        console.log('POSTが失敗しました');
      },
    },
  );

  console.log('---６---');

  // const bookList = bookListData ?? [];

  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}
      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      <button
        onClick={() => {
          console.log('---７---');
          mutate({ title: newBookTitle, author: newBookAuthor });
        }}
      >
        新規に追加する
      </button>
    </div>
  );
};

export default BookPage;
