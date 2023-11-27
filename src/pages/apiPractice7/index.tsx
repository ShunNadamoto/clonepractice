// MyComponent.js
import React from 'react';
import { useApi, usePost } from '@/lib/hooks/useApi';

const Main = () => {
  const { data, isLoading, isError, refetch, error } = useApi();
};

export default Main;
