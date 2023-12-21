import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const baseURL = '/api/orders';
type Order = { user_id: number; product_id: number; amount: number };

export const useGetOrderList = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const response = await axios.get<Order[]>(baseURL);
        setOrderList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList();
  }, [refetch]);

  const refetchExecute = () => {
    setRefetch(!refetch);
  };

  return { orderList: orderList, refetch: refetchExecute };
};

export const useGetOrderList2 = () => {
  return useQuery<Order[]>('/api/orders', async () => {
    const res = await axios.get('/api/orders');
    return res.data;
  });
};
