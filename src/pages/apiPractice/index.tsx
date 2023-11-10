/* eslint-disable import/named */
import { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import axios from '@/lib/axiosInstance';

const baseURL = '/api/books';
type Book = { title: string; author: string };

const Main = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookBody, setNewBookBody] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const result = await axios.get<Book[]>('/api/books');
    //     setBookList(result.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
    axios
      .get(baseURL)
      .then((response: AxiosResponse<Book[]>) => {
        console.log(response);
        setBookList(response.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.log(error);
      });
  }, [refetch]);

  if (!bookList) return null;

  return (
    <div>
      {bookList.map((elem) => {
        return (
          <div key={elem.title}>
            <div>タイトル：{elem.title}</div>
            <div>著者：{elem.author}</div>
          </div>
        );
      })}

      <div>
        <div>新規に本を追加する</div>
        <input
          type='text'
          value={newBookTitle}
          onChange={(event) => setNewBookTitle(event.target.value)}
        />
        <br />
        <input
          type='text'
          value={newBookBody}
          onChange={(event) => setNewBookBody(event.target.value)}
        />

        <button
          onClick={async () => {
            const requestBody = { title: newBookTitle, author: newBookBody };
            try {
              await axios.post(baseURL, requestBody);
              console.log('POSTが成功しました');
              setNewBookTitle('');
              setNewBookBody('');
              setRefetch(!refetch);
            } catch (error) {
              console.error('POSTが失敗しました');
            }
          }}
        >
          投稿する
        </button>
      </div>
    </div>
  );
};

export default Main;
