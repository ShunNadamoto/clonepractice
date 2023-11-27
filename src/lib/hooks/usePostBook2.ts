import axios from '@/lib/axiosInstance';
import { useMutation } from 'react-query';

const baseUrl = '/api/books';
type Book = { title: string; author: string };
type QueryOptionsType = {
  onSuccess?: (data: string) => void;
  onError?: (data: any) => void;
};

export const usePostBook = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: Book) => {
      const response = await axios.post(baseUrl, postData);
      return response.data;
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    },
  );
};
