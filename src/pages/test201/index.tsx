import { NextPage } from 'next';
import axios from '@/lib/axiosInstance3';
import { useEffect, useState } from 'react';

const Test201: NextPage = () => {
  type Book = {
    id: number;
    author: string;
    created_at: string;
    title: string;
    thumbnail: string | null;
    update_at: string;
  };
  const [bookList, setBookList] = useState<Book[]>([]);
  console.log(bookList);
  const [refetchBookList, setRefetchBookList] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('api/books');
        setBookList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [refetchBookList]);

  return (
    <div>
      {bookList.map((elem) => (
        <div key={elem.id}>
          <div>title:{elem.title}</div>
          <div>author:{elem.author}</div>
        </div>
      ))}
      <div>
        タイトルを入力してください
        <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
      </div>
      <div>
        著者を入力してください
        <input value={newAuthor} onChange={(event) => setNewAuthor(event.target.value)} />
      </div>
      <button
        onClick={async () => {
          try {
            const res = await axios.post('api/books', {
              title: newTitle,
              author: newAuthor,
            });
            console.log(res);
            setNewTitle('');
            setNewAuthor('');
            setRefetchBookList(!refetchBookList);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        投稿する
      </button>
    </div>
  );
};

export default Test201;
