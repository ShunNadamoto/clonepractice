/* eslint-disable import/named */
// axiosをインポート
import { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import axios from '@/lib/axiosInstance';

// APIのエンドポイント
const baseUrl = 'http://localhost:8000/api/books';
// APIレスポンスの型定義
type Book = { title: string; author: string };

const Main = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookBody, setNewBookBody] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl)
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
            <div>題名：{elem.title}</div>
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
        <br></br>
        <input
          type='text'
          value={newBookBody}
          onChange={(event) => setNewBookBody(event.target.value)}
        />

        <button
          onClick={() => {
            const requestBody = { title: newBookTitle, author: newBookBody };
            axios
              .post(baseUrl, requestBody)
              .then((response) => {
                console.log(response.data);
                setNewBookTitle('');
                setNewBookBody('');
                setRefetch(!refetch);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          投稿する
        </button>
      </div>
    </div>
  );

  // // axiosを使ってGETリクエストを送信
  // axios
  //   .get<Post>(apiUrl)
  //   .then((response: AxiosResponse<Post>) => {
  //     // レスポンスデータをログに出力
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     // エラーが発生した場合の処理
  //     console.error('エラーが発生しました:', error);
  //   });
};

export default Main;
