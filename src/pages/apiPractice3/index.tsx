import { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import axios from '@/lib/axiosInstance';

const baseURL = 'http://localhost:8000/api/books';
type Book = { title: string; author: string };

const Main = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response: AxiosResponse<Book[]>) => {
        console.log(response);
        setBookList(response.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.log(error);
      });
  }, []);

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
    </div>
  );
};

export default Main;
