import { useQuery, useMutation } from 'react-query';
import axios from '@/lib/axiosInstance';
import { useState } from 'react';

const baseUrl = '/api/books';
type Book = { title: string; author: string };

const BookPage = () => {
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const {
    data: bookListData,
    isLoading,
    refetch,
  } = useQuery<Book[]>(baseUrl, async () => {
    const res = await axios.get(baseUrl);
    return res.data;
  });

  const { mutate } = useMutation(
    async (postData: Book) => {
      const res = await axios.post(baseUrl, postData);
      return res.data;
    },
    {
      onSuccess: () => {
        refetch();
        setNewBookTitle('');
        setNewBookAuthor('');
      },
      onError: () => {
        console.log();
      },
    },
  );

  const bookList = bookListData ?? [];

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
          const requestBody = { title: newBookTitle, author: newBookAuthor };
          mutate(requestBody);
        }}
      >
        新規に追加
      </button>
    </div>
  );
};

export default BookPage;
