import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 300000, // クエリのキャッシュ有効期限（ミリ秒）
      staleTime: 60000, // クエリがステールとみなされるまでの時間（ミリ秒）
      refetchOnWindowFocus: false, // ウィンドウフォーカス時にクエリを再実行するかどうか
    },
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
