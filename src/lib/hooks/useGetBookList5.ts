import axios from '@/lib/axiosInstance';
import { useQuery } from 'react-query';

type Book = { title: string; author: string };

export const useGetBookList5 = () =>
  useQuery<Book[]>('/api/books', async () => {
    const res = await axios.get('/api/books');
    return res.data;
  });
