import axios from '@/lib/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { useGetBookList3 } from '@/lib/hooks/useGetBookList3';

type Book = { title: string; author: string };
const baseUrl = '/api/books';

const MainPage = () => {
  //   const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  console.log(newBookTitle);
  const [newBookAuthor, setNewBookAuthor] = useState('');
  console.log(newBookAuthor);
  const [refetch, setRefetch] = useState(false);

  const { data: bookList, refetch: refetchExcute } = useGetBookList3();

  //   useEffect(() => {
  //     axios
  //       .get(baseUrl)
  //       .then((response: AxiosResponse<Book[]>) => {
  //         console.log(response);
  //         setBookList(response.data);
  //       })
  //       .catch((error: AxiosError<{ error: string }>) => {
  //         console.log(error);
  //       });
  //   }, [refetch]);

  //   useEffect(() => {
  //     const getBookList = async () => {
  //       try {
  //         const response = await axios.get<Book[]>(baseUrl);
  //         setBookList(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getBookList();
  //   }, [refetch]);

  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>タイトル:{elem.title}</div>
          <div>著者:{elem.author}</div>
        </div>
      ))}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input
        type='text'
        value={newBookAuthor}
        onChange={(event) => setNewBookAuthor(event.target.value)}
      />
      {/* <button
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
      </button> */}
      <button
        onClick={async () => {
          try {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            await axios.post(baseUrl, requestBody);
            setNewBookTitle('');
            setNewBookAuthor('');
            refetchExcute();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        書籍を追加
      </button>
    </div>
  );
};
export default MainPage;
