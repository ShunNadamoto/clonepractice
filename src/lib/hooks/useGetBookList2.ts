import { useQuery } from 'react-query';
import axios from '@/lib/axiosInstance';

const baseURL = '/api/books';
type Book = { title: string; author: string };

export const useGetBookList2 = () =>
  useQuery<Book[]>('/api/books', async () => {
    const res = await axios.get(baseURL);
    return res.data;
  });
