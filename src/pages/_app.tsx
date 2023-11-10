import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { RecoilRoot } from 'recoil';

type UserCountContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const UserCountContext = createContext<UserCountContextType>({} as UserCountContextType);
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <UserCountContext.Provider value={value}>
          <Component {...pageProps} />
        </UserCountContext.Provider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
