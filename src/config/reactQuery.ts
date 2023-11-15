import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        //ミューテーションがエラーの場合の処理
      },
      onSettled: () => {
        //ミューテーションが成功または失敗した時の処理
      },
    },
  },
});
