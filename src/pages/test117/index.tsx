import axios from '@/lib/axiosInstance2';
import { NextPage } from 'next';
import { useState } from 'react';
import styles from './index.module.scss';
import { useGetBookList } from '@/hooks/useGetBookList';

const Test117: NextPage = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const { data: bookListData, refetch: bookListRefetch } = useGetBookList();

  return (
    <div className={styles.container}>
      {bookListData.map((elem) => (
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
        onClick={async () => {
          try {
            const res = await axios.post('/api/books', {
              title: newTitle,
              author: newAuthor,
            });
            console.log(res);
            setNewTitle('');
            setNewAuthor('');
            bookListRefetch();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        登録する
      </button>
    </div>
  );
};

export default Test117;
