import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

type Book = { title: string; author: string };

export const useGetBookList4 = () => {
  return useQuery('/api/books', async () => {
    const response = await axios.get<Book[]>('/api/books');
    return response.data;
  });
};
