import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useGetBookList7, useGetBookList12 } from '@/lib/hooks/useGetBookList7';
import { usePostBook5 } from '@/lib/hooks/usePostBook5';
import dayjs from 'dayjs';

type Book = { title: string; author: string; created_at: string; updated_at: string };

const MainPage = () => {
  //   const [bookList, setBookList] = useState<Book[]>([]);
  const [refetch, setRefetch] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  const { response: bookList, refetch: refetchExcute } = useGetBookList7();
  const { data, isLoading, error } = useGetBookList12();
  const today = dayjs().format('YYYY-MM-DD');

  const { mutate } = usePostBook5({
    onSuccess: (data) => {
      refetchExcute();
      console.log('POST成功');
      setNewBookTitle('');
      setNewBookAuthor('');
    },
    onError: (data) => {
      console.error('Error creating data:', error);
      console.error('Error creating data:', error);
      console.log('POST失敗');
    },
  });

  return (
    <div>
      {bookList?.map((elem, index) => (
        <div key={index}>
          <div>タイトル名：{elem.title}</div>
          <div>著者名：{elem.author}</div>
          <div>作成日時:{dayjs(elem.created_at).format('YYYY年MM月DD日 HH時mm分')}</div>
          <div>更新日時：{dayjs(elem.updated_at).format('YYYY年MM月DD日 HH時mm分')}</div>
        </div>
      ))}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      {/* <button
        onClick={() => {
          const requestBody: Book = { title: newBookTitle, author: newBookAuthor, created_at, };
          mutate(requestBody);
          //   axios
          //     .post<Book[]>('/api/books', requestBody)
          //     .then((response) => {
          //       console.log(response.data);
          //       setNewBookTitle('');
          //       setNewBookAuthor('');
          //       refetchExcute();
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //     });
        }}
      >
        本を追加
      </button> */}
      <button
        onClick={async () => {
          try {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            await axios.post<Book[]>('/api/books', requestBody);

            setNewBookTitle('');
            setNewBookAuthor('');
            refetchExcute();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新規に追加する
      </button>
    </div>
  );
};

export default MainPage;
