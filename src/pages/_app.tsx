import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { queryClient } from '@/config/reactQuery';
import useUserCount from '@/hooks/useUserCount';

type UserCountContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const UserCountContext = createContext<UserCountContextType>({} as UserCountContextType);

export default function App({ Component, pageProps }: AppProps) {
  const userCountValue = useUserCount();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <UserCountContext.Provider value={userCountValue}>
          <Component {...pageProps} />
        </UserCountContext.Provider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
