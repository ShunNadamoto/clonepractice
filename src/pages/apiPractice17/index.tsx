import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useGetBookList4 } from '@/lib/hooks';

type Book = { title: string; author: string };

const BookPage = () => {
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const { data: bookListData, refetch } = useGetBookList4();

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
        onClick={async () => {
          const requestBody = { title: newBookTitle, author: newBookAuthor };

          try {
            await axios.post('/api/books', requestBody);
            setNewBookTitle('');
            setNewBookAuthor('');
            refetch();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新規に追加する
      </button>
    </div>
  );
};

export default BookPage;
