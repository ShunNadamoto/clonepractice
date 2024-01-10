import axios from '@/lib/axiosInstance2';
import { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import styles from './index.module.scss';
import router from 'next/router';
import { GlobalContext } from '@/pages/_app';

const Test113: NextPage = () => {
  type Book = { id: number; title: string; author: string; created_at: string };
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [refetchBookList, setRefetchBookList] = useState(false);
  const { count, setCount } = useContext(GlobalContext);

  useEffect(() => {
    console.log('-----useEffect-------');
    axios
      .get('api/books')
      .then((res) => {
        console.log(res);
        setBookList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refetchBookList]);

  return (
    <div className={styles.container}>
      <div>カウント:{count}</div>
      <button onClick={() => setCount(count - 1)}>カウントダウン</button>
      <button onClick={() => router.push('/test115')}>ページtest115へ</button>
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
        onClick={() => {
          axios
            .post('/api/books', {
              title: newTitle,
              author: newAuthor,
            })
            .then((res) => {
              console.log(res);
              setRefetchBookList(!refetchBookList);
              setNewTitle('');
              setNewAuthor('');
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        登録する
      </button>
    </div>
  );
};

export default Test113;
