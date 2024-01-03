import React, { useState, useEffect } from 'react';
// import  { AxiosError, AxiosResponse } from "axios";
// import axios from "@/lib/axiosInstance";
import axios from '@/lib/axiosInstance';

// http://localhost:3001/api_test/
//[{"id":1,"title":"a","author":"a","created_at":null,"updated_at":null},
//{"id":2,"title":"\u7f85\u751f\u9580","author":"\u82a5\u5ddd\u9f8d\u4e4b\u4ecb","created_at":"2023-11-08T08:19:18.000000Z","updated_at":"2023-11-08T08:19:18.000000Z"}]
const baseURL = '/api/books';
type Book = { title: string; author: string };
const Main = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookBody, setNewBookBody] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get<Book[]>('/api/books');
        setBookList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // axios.get(baseURL).then((response:AxiosResponse<Book[]>) => {
    // //   setPost(response.data);
    //     console.log(response)
    //     setBookList(response.data)
    // }).catch((error: AxiosError<{ error: string }>)=> {
    //     console.log(error)
    // });
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
          disabled={!(newBookTitle && newBookBody)}
          onClick={async () => {
            const requestBody: Book = { title: newBookTitle, author: newBookBody };
            try {
              await axios.post(baseURL, requestBody);
              console.log('POSTが成功しました。');
              setNewBookTitle('');
              setNewBookBody('');
              setRefetch(!refetch);
            } catch (error) {
              console.error('Error posting data:', error);
              console.log('POSTが失敗しました。');
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
