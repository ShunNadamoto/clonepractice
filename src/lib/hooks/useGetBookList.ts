import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '@/lib/axiosInstance';

const baseURL = '/api/books';
type Book = { title: string; author: string };

export const fetchBooks = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};

// export const useBookList = () => {
//   const { data, isLoading, isError, error } = useQuery<Book[], Error>([], () =>
//     fetchBookList('/api/books'),
//   );

//   return { data, isLoading, isError, error };
// };

export const useGetBookList = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    // const getData = fetchBookList('/api/books');
    const getData = async () => {
      try {
        const result = await axios.get<Book[]>('/api/books');
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
  return { bookList: bookList, refetch: refetchExecute };
};
