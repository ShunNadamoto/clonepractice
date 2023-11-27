import axios from '@/lib/axiosInstance';
import { useMutation } from 'react-query';

type Book = { title: string; author: string; thumbnail: File | null };
type QueryOptionsType = {
  onSuccess?: (data: Book) => void;
  onError?: (error: any) => void;
};

export const usePostBook = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: Book) => {
      console.log(postData.thumbnail);
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('author', postData.author);
      if (postData.thumbnail) formData.append('thumbnail', postData.thumbnail);

      const response = await axios.post('api/books', formData);
      return response.data;
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    },
  );
};
