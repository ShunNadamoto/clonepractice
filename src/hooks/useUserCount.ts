import { useState, useCallback } from 'react';

type UseUserCountType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useUserCount = (): UseUserCountType => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // 最小値を0に制限
  }, []);

  return {
    count,
    increment,
    decrement,
  };
};

export default useUserCount;
