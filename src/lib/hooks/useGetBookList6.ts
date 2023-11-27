import axios from '@/lib/axiosInstance';
import { useQuery } from 'react-query';

type Book = { title: string; author: string };

export const useGetBookList6 = () => {
  useQuery('/api/books', async () => {
    const res = await axios.get<Book[]>('/api/books');
    return res.data;
  });
};
