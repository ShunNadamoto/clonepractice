import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '@/lib/axiosInstance';

type Book = { title: string; author: string };
const baseURL = '/api/books';

export const useGetBookList3 = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get<Book[]>(baseURL);
        setBookList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [refetch]);

  const refetchExecute = () => {
    setRefetch(!refetch);
  };

  return { data: bookList, refetch: refetchExecute };
};

export const useGetBookList2 = () => {
  useQuery<Book[]>(baseURL, async () => {
    const res = await axios.get(baseURL);
    return res.data;
  });
};
