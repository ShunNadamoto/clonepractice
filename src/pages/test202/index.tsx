import { NextPage } from 'next';
import axios from '@/lib/axiosInstance3';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

const Test202: NextPage = () => {
  type Book = {
    id: number;
    author: string;
    created_at: string;
    title: string;
    thumbnail: string | null;
    update_at: string;
  };
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const {
    data: getBookListData,
    isLoading: getBookListIsLoading,
    refetch: getBookListRefetch,
  } = useQuery<Book[]>('api/books', async () => {
    const res = await axios.get('api/books');
    return res.data;
  });

  const { mutate: postBookMutate, isLoading: postBookIsLoading } = useMutation(
    async (newData: { title: string; author: string }) => {
      const { title, author } = newData;

      await axios.post('api/books', { title, author });
    },
    {
      onSuccess: () => {
        setNewTitle('');
        setNewAuthor('');
        getBookListRefetch();
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const bookList = getBookListData ?? [];
  return (
    <div>
      {bookList.map((elem) => (
        <div key={elem.id}>
          <div>title:{elem.title}</div>
          <div>author:{elem.author}</div>
        </div>
      ))}
      <div>
        タイトルを入力してください
        <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
      </div>
      <div>
        著者を入力してください
        <input value={newAuthor} onChange={(event) => setNewAuthor(event.target.value)} />
      </div>
      <button
        onClick={() => {
          postBookMutate({ title: newTitle, author: newAuthor });
        }}
      >
        投稿する
      </button>
    </div>
  );
};

export default Test202;
