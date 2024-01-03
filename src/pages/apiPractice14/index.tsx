import React, { useState, useEffect } from 'react';
import { useGetBookList2 } from '@/lib/hooks/useGetBookList';
import { usePostBook } from '@/lib/hooks/usePostBook';

type Book = { title: string; author: string };

const Main = () => {
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookBody, setNewBookBody] = useState('');

  const { data, isLoading, isError, refetch, error } = useGetBookList2();

  const { mutate } = usePostBook({
    onSuccess: (data) => {
      refetch();
      console.log('POSTが成功しました');
      setNewBookTitle('');
      setNewBookBody('');
    },
    onError: (data) => {
      console.error('Error creating data:', error);
      console.error('Error posting data:', error);
      console.log('POSTが失敗しました');
    },
  });

  return (
    <div>
      {data?.map((elem, index) => {
        return (
          <div key={index}>
            <div>タイトル：{elem.title}</div>
            <div>著者：{elem.author}</div>
          </div>
        );
      })}

      <div>
        <div>新規に本を追加する</div>
        <input
          type='text'
          value={newBookTitle}
          onChange={(event) => setNewBookTitle(event.target.value)}
        />
        <br />
        <input
          type='text'
          value={newBookBody}
          onChange={(event) => setNewBookBody(event.target.value)}
        />

        <button
          disabled={!(newBookTitle && newBookBody)}
          onClick={() => {
            const requestBody: Book = { title: newBookTitle, author: newBookBody };
            mutate(requestBody);
          }}
        >
          投稿する
        </button>
      </div>
    </div>
  );
};

export default Main;
