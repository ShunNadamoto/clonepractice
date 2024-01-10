import axios from '@/lib/axiosInstance2';
import { NextPage } from 'next';
import { useState } from 'react';
import styles from './index.module.scss';
import { useQuery, useMutation } from 'react-query';

const Test116: NextPage = () => {
  type Book = { id: number; title: string; author: string; created_at: string };
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const { data, isLoading, isError, error, refetch } = useQuery<Book[]>('api/books', async () => {
    const res = await axios.get('api/books');
    return res.data;
  });

  const {
    mutate,
    isLoading: postBookIsLoading,
    isError: postBookIsError,
  } = useMutation(
    async (newData: { title: string; author: string }) => {
      const { title, author } = newData;

      await axios.post('/api/books', {
        title,
        author,
      });
    },
    {
      onSuccess: () => {
        setNewTitle('');
        setNewAuthor('');
        refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const bookList = data ?? [];

  return (
    <div className={styles.container}>
      {bookList.map((elem) => (
        <div key={elem.id}>
          <div>タイトル：{elem.title}</div>
          <div>著者：{elem.author}</div>
          <div>投稿日：{elem.created_at}</div>
        </div>
      ))}
      <div>新しい本の登録を以下で行います</div>
      <div>
        タイトルを入力してください
        <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
      </div>
      <div>
        著者を入力してください
        <input value={newAuthor} onChange={(event) => setNewAuthor(event.target.value)} />
      </div>
      <button
        onClick={() =>
          mutate({
            title: newTitle,
            author: newAuthor,
          })
        }
      >
        登録する
      </button>
    </div>
  );
};

export default Test116;
