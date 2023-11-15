import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios';
import { useEffect, useState } from 'react';

// APIエンドポイント
const baseUrl = 'http://localhost:8000/api/books';
type Book = { title: string; author: string };

// GETリクエストの例
const Main = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [refetch, setRefetch] = useState(false);

  console.log(newBookTitle);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response: AxiosResponse<Book[]>) => {
        // 成功時の処理
        console.log(response);
        setBookList(response.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        // エラー時の処理
        console.log(error);
      });
  }, [refetch]);

  return (
    <div>
      {bookList.map((elem, index) => {
        return (
          <div key={index}>
            <div>題名：{elem.title}</div>
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
        <br></br>
        <input
          type='text'
          value={newBookAuthor}
          onChange={(event) => setNewBookAuthor(event.target.value)}
        />

        <button
          onClick={() => {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            axios
              .post(baseUrl, requestBody)
              .then((response) => {
                console.log(response.data);
                setNewBookTitle('');
                setNewBookAuthor('');
                setRefetch(!refetch);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          投稿
        </button>
      </div>
    </div>
  );
};

export default Main;
