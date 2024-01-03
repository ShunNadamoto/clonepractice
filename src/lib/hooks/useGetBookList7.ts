import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

type Book = { title: string; author: string; created_at: string; updated_at: string };

export const useGetBookList7 = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get<Book[]>('/api/books')
      .then((response) => {
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refetch]);

  const refetchExcute = () => {
    setRefetch(!refetch);
  };

  return { response: bookList, refetch: refetchExcute };
};

export const useGetBookList8 = () =>
  useQuery('/api/books', async () => {
    const res = await axios.get<Book[]>('/api/books');
    return res.data;
  });

export const useGetBookList9 = () =>
  useQuery('/api/books', async () => {
    const response = await axios.get<Book[]>('/api/books');
    return response.data;
  });

export const useGetBookList10 = () =>
  useQuery('/api/books', async () => {
    const res = await axios.get<Book[]>('/api/books');
    return res.data;
  });

export const useGetBookList11 = () =>
  useQuery('/api/books', async () => {
    const res = await axios.get<Book[]>('/api/books');
    return res.data;
  });

export const useGetBookList12 = () =>
  useQuery<Book[]>('/api/books', async () => {
    const res = await axios.get('/api/books');
    return res.data;
  });
