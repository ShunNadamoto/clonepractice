import axios from '@/lib/axiosInstance';
import { useMutation } from 'react-query';

type Book = { title: string; author: string };
type QueryOptionsType = {
  onSuccess?: (data: Book) => void;
  onError?: (error: any) => void;
};

export const usePostBook = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: Book) => {
      const response = await axios.post('api/books', postData);
      return response.data;
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    },
  );
};
