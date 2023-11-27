import axios from '@/lib/axiosInstance';
import { useMutation } from 'react-query';

type Order = { user_id: number; product_id: number; amount: number };
type QueryOptionsType = {
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
};

export const usePostOrder = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: Order) => {
      const response = await axios.post('/api/orders', postData);
      return response.data;
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    },
  );
};
