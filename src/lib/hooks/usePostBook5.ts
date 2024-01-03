import { useMutation } from 'react-query';
import axios from '@/lib/axiosInstance';

type Book = { title: string; author: string };
type QueryOptionsType = {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

export const usePostBook5 = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: Book) => {
      const res = await axios.post('/api/books', postData);
      return res.data;
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    },
  );
};
