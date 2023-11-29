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
      // let formData: { title: string; author: string; thumbnail?: File } = {
      //   title: postData.title,
      //   author: postData.author,
      // };
      if (postData.thumbnail) formData.append('thumbnail', postData.thumbnail);

      // if (postData.thumbnail) formData = { ...formData, thumbnail: postData.thumbnail };
      const myArray = [1, 2, 3, 4, 5];
      const myArray2 = [...myArray];
      const myArray3 = myArray;

      const response = await axios.post('api/books', formData);
      return response.data;
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    },
  );
};
