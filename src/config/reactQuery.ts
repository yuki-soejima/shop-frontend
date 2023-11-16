import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // クエリのデフォルトオプションを指定
        staleTime: 300000, // キャッシュのデータが5分間有効
        refetchInterval: 10000, // 10秒ごとに再取得を試行
      },
      mutations: {
        // ミューテーションのデフォルトオプションを指定
        onError: (error: any) => {
          // ミューテーションがエラーの場合の処理
        },
        onSettled: () => {
          // ミューテーションが成功または失敗した際の処理
        },
      },
    },
    // その他のカスタムな設定を指定
  });

