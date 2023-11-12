import React, { useState, useEffect } from 'react';
import axios from '@/lib/axiosInstance';

const baseURL = './api/books';
type Book = { title: string; author: string };

const Main = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [refetch, setRefetch] = useState(false);
  console.log(newBookTitle);
  console.log(newBookAuthor);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(baseURL);
        console.log(result);
        setBookList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [refetch]);
  return (
    <div>
      {bookList.map((elem) => {
        return (
          <div key={elem.title}>
            <div>本のタイトル：{elem.title}</div>
            <div>本の著者：{elem.author}</div>
          </div>
        );
      })}

      <div>
        <div>新規に追加する</div>
        <input
          type='text'
          value={newBookTitle}
          onChange={(event) => setNewBookTitle(event.target.value)}
        />
        <br />
        <input
          type='text'
          value={newBookAuthor}
          onChange={(event) => setNewBookAuthor(event.target.value)}
        />
        <button
          onClick={async () => {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            try {
              await axios.post(baseURL, requestBody);
              console.log('POST成功！');
              setNewBookTitle('');
              setNewBookAuthor('');
              setRefetch(!refetch);
            } catch (error) {
              console.error('POST失敗！');
            }
          }}
        >
          投稿
        </button>
      </div>
    </div>
  );
};

export default Main;
