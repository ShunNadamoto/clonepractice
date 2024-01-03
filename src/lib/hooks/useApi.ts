import { useQuery, useMutation } from 'react-query';
import axios from '@/lib/axiosInstance';

const baseURL = '/api/books';
type Book = { title: string; author: string };

export const useApi = () =>
  useQuery<Book[]>('/api/books', async () => {
    const res = await axios.get(baseURL);
    return res.data;
  });

export const usePost = useMutation((postData) => axios.post(baseURL, postData));
