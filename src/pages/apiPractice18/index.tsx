import { useGetBookList5 } from '@/lib/hooks/useGetBookList5';

const Main = () => {
  const { data, isLoading } = useGetBookList5();

  console.log(data);
};

export default Main;
