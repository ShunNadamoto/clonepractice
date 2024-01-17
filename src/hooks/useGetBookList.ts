import { useState, useEffect } from 'react';
import axios from '@/lib/axiosInstance2';

type Book = { id: number; title: string; author: string; created_at: string };

export const useGetBookList = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [refetchBookList, setRefetchBookList] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('api/books');
        setBookList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [refetchBookList]);

  const refetch = () => {
    setRefetchBookList(!refetchBookList);
  };

  return { data: bookList, refetch: refetch };
};
